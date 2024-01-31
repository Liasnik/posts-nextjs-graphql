/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'info-site.test',
      },
    ],
  },
}

export default nextConfig
