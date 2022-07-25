/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    poweredByHeader: false,
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
    images: {
        domains: ['avatars.githubusercontent.com'],
    }
};

module.exports = nextConfig;
