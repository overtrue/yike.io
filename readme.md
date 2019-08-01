
<img align="right" width="100" src="https://user-images.githubusercontent.com/1472352/48118952-d4f4db80-e2a8-11e8-8d0a-37b24c071b12.png"/>

<h1 align="left"><a href="https://yike.io">Yike.io</a></h1>

论坛项目源码：https://yike.io, 基于 Vuejs 开发的 Laravel SPA 项目。

> 🏵后端源码：https://github.com/overtrue/api.yike.io

开源中国 Gitee 仓库：[![Fork me on Gitee](https://gitee.com/overtrue/yike.io/widgets/widget_3.svg)](https://gitee.com/overtrue/yike.io)

> 🎬快速上手视频：[053. 优秀的开源社区——yike.io](https://learnku.com/courses/laravel-package/yikeio/2505)

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

如果你忘记了，就去找 `oauth_clients` 表中找吧。



配置 [腾讯防水墙](https://007.qq.com/) ID , 需要跟后端一致

```env
# 腾讯防水墙配置
MIX_CAPTCHA_ID_REGISTER=
MIX_CAPTCHA_ID_PUBLISH=
```



## License

MIT
