import chalk from "chalk";

export const ZeraLogLevel = {
    DEBUG: "debug",
    INFO: "info",
    WARN: "warn",
    ERROR: "error",
    NONE: "none",
} as const;
export type ZeraLogLevel = (typeof ZeraLogLevel)[keyof typeof ZeraLogLevel];

export const ZeraTimeUnit = {
    ns: 1,
    us: 1e3,
    ms: 1e6,
    s: 1e9,
    m: 1e9 * 60,
} as const;
export type ZeraTimeUnit = keyof typeof ZeraTimeUnit | (typeof ZeraTimeUnit)[keyof typeof ZeraTimeUnit];

const levelColors = {
    [ZeraLogLevel.DEBUG]: chalk.blueBright,
    [ZeraLogLevel.INFO]: chalk.cyanBright,
    [ZeraLogLevel.WARN]: chalk.yellowBright,
    [ZeraLogLevel.ERROR]: chalk.red,
};

export interface ZeraPerformanceOptions {
    label?: string;
    timeUnit?: ZeraTimeUnit;
}

export class ZeraLogger {
    private level: ZeraLogLevel;

    constructor(level?: ZeraLogLevel) {
        const envLogLevel = process.env.LOG_LEVEL as ZeraLogLevel | undefined;
        const nodeEnv = process.env.NODE_ENV;
        if (nodeEnv === "production") {
            this.level = ZeraLogLevel.WARN;
        } else if (this.isValidLogLevel(level)) {
            this.level = level;
        } else if (this.isValidLogLevel(envLogLevel)) {
            this.level = envLogLevel;
        } else {
            this.level = ZeraLogLevel.INFO;
        }
    }

    private isValidLogLevel(level?: string): level is ZeraLogLevel {
        return Object.values(ZeraLogLevel).includes(level as ZeraLogLevel);
    }

    setLevel(level: ZeraLogLevel): void {
        if (!this.isValidLogLevel(level)) {
            this.throw(new Error(`Invalid log level: ${level}`));
        }
        this.level = level;
    }

    log(...args: unknown[]): void {
        this.logWithPrefix(ZeraLogLevel.DEBUG, ...args);
    }

    debug(...args: unknown[]): void {
        this.logWithPrefix(ZeraLogLevel.DEBUG, ...args);
    }

    info(...args: unknown[]): void {
        this.logWithPrefix(ZeraLogLevel.INFO, ...args);
    }

    warn(...args: unknown[]): void {
        this.logWithPrefix(ZeraLogLevel.WARN, ...args);
    }

    error(...args: unknown[]): void {
        this.logWithPrefix(ZeraLogLevel.ERROR, ...args);
    }

    throw(error: Error): never {
        this.logWithPrefix(ZeraLogLevel.ERROR, error);
        throw error;
    }

    async performance<T>(
        fn: () => Promise<T>,
        options?: ZeraPerformanceOptions
    ): Promise<{ result: T; performance: number }>;
    performance<T>(fn: () => T, options?: ZeraPerformanceOptions): { result: T; performance: number };
    performance<T>(fn: () => T | Promise<T>, options: ZeraPerformanceOptions = {}) {
        const start = this.getTimestamp();
        const result = fn();
        const label = options.label || (fn.name ? fn.name : "Anonymous function");
        const timeUnit = options.timeUnit || ZeraTimeUnit.ms;

        const logPerformance = (result: T, elapsed: number) => {
            const timeUnitLabel =
                typeof timeUnit === "number"
                    ? Object.keys(ZeraTimeUnit).find(
                          (key) => ZeraTimeUnit[key as keyof typeof ZeraTimeUnit] === timeUnit
                      )
                    : timeUnit;
            this.logWithPrefix(ZeraLogLevel.DEBUG, "[zera-performance]", `${label} took ${elapsed}${timeUnitLabel}`);
            return { result, performance: elapsed };
        };

        if (result instanceof Promise) {
            return result.then((res) => {
                const end = this.getTimestamp();
                const elapsedNanoseconds = end - start;
                const elapsed = this.convertTimeUnit(elapsedNanoseconds, timeUnit);
                return logPerformance(res, elapsed);
            });
        } else {
            const end = this.getTimestamp();
            const elapsedNanoseconds = end - start;
            const elapsed = this.convertTimeUnit(elapsedNanoseconds, timeUnit);
            return logPerformance(result, elapsed);
        }
    }

    private getTimestamp(): bigint {
        if (typeof process !== "undefined" && typeof process.hrtime === "function") {
            return process.hrtime.bigint();
        } else if (typeof performance !== "undefined" && typeof performance.now === "function") {
            return BigInt(Math.round(performance.now() * 1e6)); // Convert to nanoseconds
        } else {
            throw new Error("Unable to get high-resolution timestamp");
        }
    }

    private convertTimeUnit(time: bigint, timeUnit: ZeraTimeUnit): number {
        if (typeof timeUnit === "string") {
            return Number(time / BigInt(ZeraTimeUnit[timeUnit]));
        } else {
            return Number(time / BigInt(timeUnit));
        }
    }

    private logWithPrefix(level: ZeraLogLevel, ...args: unknown[]): void {
        let prefix = "[zera]";
        const logArgs = [...args];
        if (typeof args[0] === "string" && args[0].startsWith("[zera")) {
            prefix = args[0];
            logArgs.shift();
        }
        if (!this.shouldLog(level)) {
            return;
        }

        if (level !== ZeraLogLevel.NONE && typeof console[level] === "function") {
            console[level](...this.formatMessage(level, prefix, ...logArgs));
        }
    }

    private formatMessage(level: Exclude<ZeraLogLevel, "none">, prefix: string, ...args: unknown[]): unknown[] {
        const levelColor = levelColors[level];
        const levelLabel = levelColor(`${prefix} ${levelColor.bold(level.toUpperCase())}:`);
        return [levelLabel, ...args];
    }

    private shouldLog(level: ZeraLogLevel): boolean {
        if (!this.isValidLogLevel(level)) {
            return false;
        }
        if (level === ZeraLogLevel.NONE) {
            return false;
        }
        return Object.values(ZeraLogLevel).indexOf(level) >= Object.values(ZeraLogLevel).indexOf(this.level);
    }
}
