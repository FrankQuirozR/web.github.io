const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/dwc/stations',
    createProxyMiddleware({
      target: 'http://api.canair.io:8080',
      changeOrigin: true,
      pathRewrite: {
        '^/dwc/stations': '/dwc/stations'
      }
    })
  );
};