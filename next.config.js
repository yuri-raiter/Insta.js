/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth/signin',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
