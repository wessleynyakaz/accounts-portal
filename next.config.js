/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['bcrypt'],
        // webpackBuildWorker: true,
    },
};

module.exports = nextConfig;
