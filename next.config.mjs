/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'unavatar.io',
          },
        ],
      },
};

export default nextConfig;
