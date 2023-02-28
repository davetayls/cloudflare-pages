/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'edge'
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/foo/:id',
          destination: '/',
        },
      ]
    }
  }
}

module.exports = nextConfig
