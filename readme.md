
<img align="right" width="100" src="https://user-images.githubusercontent.com/1472352/48118952-d4f4db80-e2a8-11e8-8d0a-37b24c071b12.png"/>

<h1 align="left"><a href="https://yike.io">Yike.io</a></h1>

论坛项目源码：https://yike.io, 基于 Vuejs 开发的 Laravel SPA 项目。

> 🏵后端源码：https://github.com/overtrue/api.yike.io

开源中国 Gitee 仓库：[![Fork me on Gitee](https://gitee.com/overtrue/yike.io/widgets/widget_3.svg)](https://gitee.com/overtrue/yike.io)

## 安装

克隆后先安装依赖：

```shell
$ npm install
```

或者使用 yarn：

```shell
$ yarn install 
```

跑测试服务：

```shell
$ npm run serve
```

## 配置

Copy the `.env.example` to `.env.[ENV]`:


```shell
# local
cp .env.example .env.local

# production
cp .env.example .env.production
```

其中有两个变量是你在安装后端时 `passport:install` 得到的 **Password Grant Client** 的 `id` 与 `secret`：

```
VUE_APP_AUTH_CLIENT_ID=
VUE_APP_AUTH_CLIENT_SECRET=
```

如果你忘记了，就去找 `oauth_clients` 表中找吧。



## License

MIT
