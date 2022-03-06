/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
})
