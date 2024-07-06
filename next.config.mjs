/** @type {import('next').NextConfig} */
const nextConfig = {
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
        ]
    }
};

export default nextConfig;
