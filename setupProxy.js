import { createProxyMiddleware }  from 'http-proxy-middleware';

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080/api/', // Replace this with your backend server URL
      changeOrigin: true,
    })
  );
};