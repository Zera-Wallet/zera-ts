// ZeraLogger.test.ts
import { describe, expect, test, afterEach, beforeEach } from "vitest";
import { ZeraLogger, ZeraLogLevel, ZeraTimeUnit } from "../src/ZeraLogger";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

describe("ZeraLogger", () => {
    let originalConsole: Console;
    let logs: { level: ZeraLogLevel; args: any[] }[];

    beforeEach(() => {
        originalConsole = console;
        logs = [];
        (console as any) = {
            log: originalConsole.log,
            debug: (...args: any[]) => logs.push({ level: ZeraLogLevel.DEBUG, args }),
            info: (...args: any[]) => logs.push({ level: ZeraLogLevel.INFO, args }),
            warn: (...args: any[]) => logs.push({ level: ZeraLogLevel.WARN, args }),
            error: (...args: any[]) => logs.push({ level: ZeraLogLevel.ERROR, args }),
        };
    });

    afterEach(() => {
        console = originalConsole;
    });

    describe("constructor and setLevel", () => {
        test("default log level in non-production environment", () => {
            const originalNodeEnv = process.env.NODE_ENV;
            (process.env as any).NODE_ENV = "development";

            const logger = new ZeraLogger();
            expect(logger["level"]).toBe(ZeraLogLevel.INFO);

            (process.env as any).NODE_ENV = originalNodeEnv;
        });

        test("default log level in production environment", () => {
            const originalNodeEnv = process.env.NODE_ENV;
            (process.env as any).NODE_ENV = "production";

            const logger = new ZeraLogger();
            expect(logger["level"]).toBe(ZeraLogLevel.WARN);

            (process.env as any).NODE_ENV = originalNodeEnv;
        });

        test("log level from constructor", () => {
            const logger = new ZeraLogger(ZeraLogLevel.ERROR);
            expect(logger["level"]).toBe(ZeraLogLevel.ERROR);
        });

        test("log level from environment variable", () => {
            const originalLogLevel = process.env.LOG_LEVEL;
            process.env.LOG_LEVEL = ZeraLogLevel.ERROR;

            const logger = new ZeraLogger();
            expect(logger["level"]).toBe(ZeraLogLevel.ERROR);

            process.env.LOG_LEVEL = originalLogLevel;
        });

        test("log level from constructor has higher priority than environment variable", () => {
            const originalLogLevel = process.env.LOG_LEVEL;
            process.env.LOG_LEVEL = ZeraLogLevel.ERROR;

            const logger = new ZeraLogger(ZeraLogLevel.WARN);
            expect(logger["level"]).toBe(ZeraLogLevel.WARN);

            process.env.LOG_LEVEL = originalLogLevel;
        });

        test("set log level", () => {
            const logger = new ZeraLogger();
            logger.setLevel(ZeraLogLevel.ERROR);
            expect(logger["level"]).toBe(ZeraLogLevel.ERROR);
        });

        test("setLevel method", () => {
            const logger = new ZeraLogger(ZeraLogLevel.WARN);
            logger.setLevel(ZeraLogLevel.ERROR);
            expect(logger["level"]).toBe(ZeraLogLevel.ERROR);
        });

        test("setLevel with invalid level", () => {
            const logger = new ZeraLogger(ZeraLogLevel.WARN);
            expect(() => logger.setLevel("invalid" as ZeraLogLevel)).toThrow("Invalid log level: invalid");
        });
    });

    describe("logging methods", () => {
        test("log method", () => {
            const logger = new ZeraLogger(ZeraLogLevel.DEBUG);
            logger.log("This is a log message");
            expect(logs.length).toBe(1);
            expect(logs[0].level).toBe(ZeraLogLevel.DEBUG);
        });

        test("debug, info, warn, and error methods", () => {
            const logger = new ZeraLogger(ZeraLogLevel.DEBUG);

            logger.debug("This is a debug message");
            logger.info("This is an info message");
            logger.warn("This is a warn message");
            logger.error("This is an error message");

            expect(logs.length).toBe(4);
            expect(logs.map((log) => log.level)).toEqual([
                ZeraLogLevel.DEBUG,
                ZeraLogLevel.INFO,
                ZeraLogLevel.WARN,
                ZeraLogLevel.ERROR,
            ]);
        });

        test("log level filtering", () => {
            const logger = new ZeraLogger(ZeraLogLevel.WARN);

            logger.debug("This is a debug message");
            logger.info("This is an info message");
            logger.warn("This is a warn message");
            logger.error("This is an error message");

            expect(logs.length).toBe(2);
            expect(logs.map((log) => log.level)).toEqual([ZeraLogLevel.WARN, ZeraLogLevel.ERROR]);
        });

        // TODO: Implement this test
        test.skip("console output colors", () => {});

        test("throw method", () => {
            const logger = new ZeraLogger(ZeraLogLevel.ERROR);

            try {
                logger.throw(new Error("This is a thrown error"));
            } catch (error) {
                expect(error.message).toContain("This is a thrown error");
            }
        });
    });

    describe("performance method", () => {
        test("sync function", () => {
            const logger = new ZeraLogger(ZeraLogLevel.DEBUG);

            const { result, performance } = logger.performance(
                () => {
                    const start = Date.now();
                    while (Date.now() - start < 50);
                    return "test result";
                },
                { label: "Sync function", timeUnit: ZeraTimeUnit.ms }
            );

            expect(result).toBe("test result");
            expect(performance).toBeGreaterThanOrEqual(45);
            expect(logs.length).toBe(1);
            expect(logs[0].level).toBe(ZeraLogLevel.DEBUG);
            expect(logs[0].args.join(" ")).toContain("Sync function");
            expect(logs[0].args.join(" ")).toContain("ms");
        });

        test("async function", async () => {
            const logger = new ZeraLogger(ZeraLogLevel.DEBUG);

            const { result, performance } = await logger.performance(
                async () => {
                    await sleep(50);
                    return "test result";
                },
                { label: "Async function", timeUnit: ZeraTimeUnit.ms }
            );

            expect(result).toBe("test result");
            expect(performance).toBeGreaterThanOrEqual(45);
            expect(logs.length).toBe(1);
            expect(logs[0].level).toBe(ZeraLogLevel.DEBUG);
            expect(logs[0].args.join(" ")).toContain("Async function");
            expect(logs[0].args.join(" ")).toContain("ms");
        });

        test("sync function with inferred label", () => {
            const logger = new ZeraLogger(ZeraLogLevel.DEBUG);

            function testFunction() {
                const start = Date.now();
                while (Date.now() - start < 50);
                return "test result";
            }

            const { result, performance } = logger.performance(testFunction, { timeUnit: ZeraTimeUnit.ms });

            expect(result).toBe("test result");
            expect(performance).toBeGreaterThanOrEqual(45);
            expect(logs.length).toBe(1);
            expect(logs[0].level).toBe(ZeraLogLevel.DEBUG);
            expect(logs[0].args.join(" ")).toContain("testFunction took");
            expect(logs[0].args.join(" ")).toContain("ms");
        });

        test("sync anonymous function with default label", () => {
            const logger = new ZeraLogger(ZeraLogLevel.DEBUG);

            const { result, performance } = logger.performance(
                () => {
                    const start = Date.now();
                    while (Date.now() - start < 50);
                    return "test result";
                },
                { timeUnit: ZeraTimeUnit.ms }
            );

            expect(result).toBe("test result");
            expect(performance).toBeGreaterThanOrEqual(45);
            expect(logs.length).toBe(1);
            expect(logs[0].level).toBe(ZeraLogLevel.DEBUG);
            expect(logs[0].args.join(" ")).toContain("Anonymous function took");
            expect(logs[0].args.join(" ")).toContain("ms");
        });

        test("async anonymous function with default label", async () => {
            const logger = new ZeraLogger(ZeraLogLevel.DEBUG);

            const { result, performance } = await logger.performance(
                async () => {
                    await sleep(50);
                    return "test result";
                },
                { timeUnit: ZeraTimeUnit.ms }
            );

            expect(result).toBe("test result");
            expect(performance).toBeGreaterThanOrEqual(45);
            expect(logs.length).toBe(1);
            expect(logs[0].level).toBe(ZeraLogLevel.DEBUG);
            expect(logs[0].args.join(" ")).toContain("Anonymous function took");
            expect(logs[0].args.join(" ")).toContain("ms");
        });
    });
});
