const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/**', {
    target: 'https://www.hckthnfy19.info',
    changeOrigin: true,
    cookieDomainRewrite: {
      '*': ''
    }
  }))
  app.use(proxy('/global/**', {
    target: 'https://www.hckthnfy19.info',
    changeOrigin: true
  }))
}
