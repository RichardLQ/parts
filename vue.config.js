// let path = require('path')
// const resolve = (dir) => path.join(__dirname, dir);
// 引入模块
var path = require('path')

// 封装个引入的方法
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  lintOnSave: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '龙猫兼职';
      return args;
    }),
    config.resolve.alias // 添加别名
            .set('@', resolve('src'))
            .set('@views', resolve('./src/views'))
            .set('@assets', resolve('./src/assets'))
            .set('@api', resolve('./src/requests'));
  },
  productionSourceMap: true,
  devServer: {
    proxy: {
      '/index': {//代理标识，一般是每个接口前的相同部分
        target: 'https://www.sourcandy.cn/part/', // 这里写的是访问接口的域名和端口号
        changeOrigin: true, // 允许跨域请求
        pathRewrite: { // 重写路径，替换请求地址中的指定路径
          '^/part': '/part'
        }
      },
    },
    // open: true,
    // disableHostCheck: true,
    // host: 'www.test.com',
    // port: 1234,
    // https: true,
    // hotOnly: false,
    // before: app => { }
  },
}

