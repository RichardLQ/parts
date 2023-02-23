const webpack = require("webpack");
module.exports = {
//   publicPath: '/public/admin/data_view/',
  chainWebpack: config =>{
      config.plugin('html').tap(args => {
          args[0].title = '龙猫兼职';
          return args;
      })
  }
}