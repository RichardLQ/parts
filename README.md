# parts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### vue文档
https://cn.vuejs.org/guide/quick-start.html

### 插件文档
https://vant-contrib.gitee.io/vant/#/zh-CN

### vue脚手架
https://cli.vuejs.org/zh/guide/creating-a-project.html

### 微信js-sdk封装
https://blog.csdn.net/qq_42390692/article/details/126099458

### vuex的使用
https://blog.csdn.net/qq_46201146/article/details/125805058

### nodejs版本(18.4)


### 环境问题
 # 报错 Error: error:0308010C:digital envelope routines::unsupported
node 版本过高，可以在命令行  输入 node -v 查看版本
执行：set NODE_OPTIONS=--openssl-legacy-provider
在packagejson文件中scripts下的serve修改成"set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve"(node版本在18+的时候)
使用less出现ERESOLVE could not resolve安装命令npm i less-loader@7.3.0 --legacy-peer-deps
axios封装https://blog.csdn.net/qq_56989560/article/details/125032315
https://blog.csdn.net/m0_66285809/article/details/127304923
vue.config.js使用http://events.jianshu.io/p/8e555060626a
浏览器跨域chrome.exe --disable-site-isolation-trials --disable-web-security --user-data-dir="G:\chromeTemp"