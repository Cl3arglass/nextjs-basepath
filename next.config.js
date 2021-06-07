module.exports = {
  basePath: '/docs',
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
    ]
  },
}