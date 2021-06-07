module.exports = {
  basePath: '/docs',
   async redirects() {
    return [
      { "source": "/", "destination": "/docs", "permanent": true },
    ]
  },
}