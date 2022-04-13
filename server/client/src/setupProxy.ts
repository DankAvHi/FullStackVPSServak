const { createProxyMiddleware } = require("http-proxy-middleware");

export default module.exports = function (app: any) {
     app.use(
          "/api",
          createProxyMiddleware({
               target: "http://localhost:3001",
               changeOrigin: true,
          })
     );
};
