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

### nodejs版本(18.4)

### 环境问题
 # 报错 Error: error:0308010C:digital envelope routines::unsupported
node 版本过高，可以在命令行  输入 node -v 查看版本
执行：set NODE_OPTIONS=--openssl-legacy-provider
在packagejson文件中scripts下的serve修改成"set NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve"(node版本在18+的时候)
使用less出现ERESOLVE could not resolve安装命令npm i less-loader@7.3.0 --legacy-peer-deps