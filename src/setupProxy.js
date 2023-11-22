const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/memberlist',
    createProxyMiddleware(['/memberlist','/register','/checkauth','/checkid'],{
      target: 'http://he-alb-7629500.ap-northeast-2.elb.amazonaws.com:8000',
      
      changeOrigin: true,
    })
  );
};

/*
pathRewrite: {
        '^/memberlist': ''
    },
*/