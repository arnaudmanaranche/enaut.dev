/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 's3.us-west-2.amazonaws.com'],
  },
  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/bearnais_volant',
        permanent: true,
        basePath: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/arnaudmanaranche',
        permanent: true,
        basePath: false,
      },
      {
        source: '/polywork',
        destination: 'https://www.polywork.com/arnaudmanaranche',
        permanent: true,
        basePath: false,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/arnaudmanaranche',
        permanent: true,
        basePath: false,
      },
    ]
  },
}

module.exports = nextConfig
