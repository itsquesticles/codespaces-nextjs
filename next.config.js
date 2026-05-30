/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx'],
  turbopack: {
    root: __dirname
  }
}

module.exports = nextConfig
