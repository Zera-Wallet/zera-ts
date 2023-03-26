/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false; // Required to fix "fs" module not found error due to dynamic imports
        }
        return config;
    },
};

module.exports = nextConfig;
