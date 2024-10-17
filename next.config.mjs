/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
    eslint: {
        rules: {
            'next/no-img-element': 'off',
        },
    },
    experimental: {
        buildCache: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'drive.usercontent.google.com',
            },
            {
                protocol: 'https',
                hostname: 'cdn2.csgo.com',
            },
            {
                protocol: 'https',
                hostname: 'avatars.steamstatic.com',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
        ]
    }
};

export default nextConfig;
