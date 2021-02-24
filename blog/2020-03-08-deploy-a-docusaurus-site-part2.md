---
slug: deploy-a-docusaurus-site-part2
title: 使用 Docusaurus 搭建个人博客教程（二）
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
tags: [前端, 职业]
bvid: av94703630
oid: "94703630"
---

import useBaseUrl from '@docusaurus/useBaseUrl';



如果你看了上期视频的话，那么你应该学会了怎么在本地搭建一个 docusaurus 博客，但是你不能只在本地来看这个博客吧，得让全世界来欣赏你的杰作，所以说咱们得把这个博客部署到服务器上。部署有两种方式：

- 部署到国外，是免费的。
- 部署在国内，需要自己购买一个域名，还有服务器，大概有个 300 来块钱就差不多了。

<!--truncate-->

[B 站视频 - 点击传送](https://www.bilibili.com/video/av93748753/)

## 发布到 github

在发博客之前得先把项目发布到 github 上，这个之前我简单的介绍过，它就是一个远程的 git 的代码仓库，所有人都可以看到你的代码，还能一起维护。或者也可以把它当成私有的，这样的话可以当成自己的一个云端的代码仓库，作为代码的版本跟踪管理。

首先要在 github 上创建一个仓库，打开它的官网：

[github](https://github.com/)

没有账号的话先去注册一个，有的话就直接登录，登录之后在自己的主页左边点击 `New` 这个按钮创建一个仓库，这里需要填一些信息：

- `Repository Name` - 仓库的名字，必填的，比如我这里叫`fh-blog`。
- `Description` - 仓库的描述，这个是可选的，这里我写一个`我的博客`。
- 选择`私有`还是`公开` - 如果后边在 Zeit 上部署，这里选公开。
- 是不是添加`README` - 这里不添加了，因为咱们本地已经有了，另外`.gitignore`和`add a licence`也都不用添加。

完了之后点击 `Create repository` 仓库创建好了。之后它会跳转到仓库的首页，下边写了两种方式把代码提交到 github，第一种是按全新的仓库，就是本地还没有的。咱们这里用第二种，把现有的代码推送到 github 上。具体操作：

1. 在 VS Code 里打开你的博客工程，点击菜单中第三个按钮 `source control`。
2. 如果仓库还没有初始化的话，点击 `initialize repository` 按钮进行初始化。
3. 在上边的 message 输入框中输入 commit 信息，比如说 `initial commit`，再点击上边的对勾提交代码。
4. 按下键盘的 `command(Mac)/ctrl(Windows) + shift + p`， 打开快捷命令行工具，输入 `add remote`，在出来的提示中选择 `Git: Add Remote`。
5. 给这个远程仓库的的 url 信息起个名字，一般叫做 `origin`，代表这是咱们项目的起源仓库。按下回车。
6. 接下来要求输入仓库的 url，在里边贴上你的 github 仓库的 url, 比如 `https://github.com/zxuqian/fh-blog.git`，然后按下回车。
7. 添加好远程仓库之后，再点击 source control 中的 `...` 菜单，选择 push，等完成之后，再刷新一下 github 仓库，有了代码就代表推送成功了。

## 部署

代码推送到 github 之后，就能愉快的部署到服务器上了。

### Zeit

[Zeit](http://zeit.co/)

这里推荐给你一个比较好用的国外的服务器，配置超级简单，它叫 zeit，也是 docusaurus 官方推荐的，不过可能有些地方因为某些原因，会访问不了，或者非常慢。不过因为它太方便了，所以还是要介绍一下。它的免费版包括下边的特性：

- `HTTPS-enabled Custom Domains` - 可以自动给自定义域名添加 https 支持
- `Continuous Deployment with Git` - 能够利用 git 进行持续集成
- `High-performance Smart CDN` - 高性能的智能 CDN
- `Unlimited Websites & APIs` - 支持创建无数个网站和 api
- `Serverless Functions in Node.js, Go, and more` - 支持使用 Node.js 和 Go 语言等创建无服务的函数。

接下来注册一个账号，根据它的要求完成之后就可以开始部署了。

#### 发布到 zeit

要发布到 zeit 上,首先安装它的命令行工具：

```shell
npm i -g now
```

接下来在 VS Code 中打开一个命令行窗口，用快捷键 ctrl + `, 默认的路径就是当前工程的根目录，输入命令：

```shell
now
```

它会要求一些信息，比如用注册邮箱接收一个验证码，项目名称，配置信息。等它运行完毕之后，项目就可以部署到 zeit 上了。去 zeit 官网，可以看到它自动关联了 github 的项目，也可以看到它给咱们生成的域名，点开它就可以访问了，如果要添加自定义的域名，就点开 `domains` 菜单，点击 `add`，选择一个部署的项目，再点 `continue`，输入自己的域名，点击 `Add` 就可以添加了，最后要把域名的 DNS 指向 zeit 提供的那几个。怎么修改域名 DNS 我稍后会讲，不同的域名提供商也有不同的操作。

### 部署到国内

Zeit 可能在国内某些地方访问不太稳定，那咱们可以部署在国内服务器上。之前在前端路线图的视频里我大致讲过了域名和服务器的概念，要部署咱们的网站，就需要购买一个域名和一台服务器，因为咱们这个网站是静态的，不需要太过复杂的功能，所以服务器用一台虚拟主机就可以了，虚拟主机是一台服务器里边，分隔出来了不同的目录给不同的用户，所有的这一台服务器上的用户都共享它的 cpu、内存等资源，然后有固定的带宽、存储容量还有数据库等等。

#### 购买域名

这里以阿里云为示例，打开它的[官网 https://www.aliyun.com/](https://www.aliyun.com/)，在搜索框上边选择域名，然后输入一个自己想要的域名，比如 `fhdev`，再选择一个可用的域名，加入到清单中，完成之后点击立即结算，选择年限，添加实名信息之后，付款购买就可以了。

#### 购买服务器

服务器用共享的虚拟主机即可，[点击传送](https://wanwang.aliyun.com/hosting/vhost-buy/?spm=5176.8060947.858675.gaongxiang1.a5305c71VGo8vo&productId=38001&cdn=t)，新用户的话可以选择云虚拟主机，可能会有优惠。操作系统选择 `linux`，然后选择购买时长，最后购买就可以了。

#### 备案

在阿里云买了服务器之后，它就提供备案服务了，可以点击右上角备案菜单，根据提示进行备案，用手机备案填写资料会更快一些。

#### 配置主机和域名

登录到阿里云的控制台，在左侧折叠菜单里选择云虚拟主机，就能看到你购买的虚拟主机了，点击它右边的`管理`菜单，就可以看到它的信息了，这里要把域名指向这台虚拟主机，下边它有网站开通参考，大家可以自己看一下操作。这里我点击左侧菜单的主机信息，找到它的 IP 地址，复制它，返回到控制台，在菜单中选择`域名`，找到刚才购买的域名，点击管理。

这里提一下，如果要把 DNS 指向 zeit 提供的，那就在菜单选择 `DNS修改`，再点击右侧 `修改DNS服务器`，把 zeit 提供的 dns 地址一项一项填进去。

解析到自己的服务器上的话，可以直接就用阿里云默认的 dns 就可以了，然后在菜单项里选择`域名解析`，点开之后点击`添加记录`，记录类型选择 A 记录，A 记录就是说这个域名要解析到一个 ip 地址上边，这里咱们有虚拟主机的 IP 地址，所以选择`A`，主机记录填写`@`，这个意思是访问根域名时对应的 ip，也就是说不带`www`这个前缀的，比如`zxuqian.cn`，然后解析线路保持默认就好，记录值把刚复制的 ip 地址粘贴上就可以了，然后点击确定。

再添加一条，这里主机记录填写`www`，其它的跟`@`的一致，这个就是访问 `www.zxuqian.cn` 这个域名时，指向的 IP 地址，跟`@`记录是一样的。

#### 配置 github actions

接下来就是上传网站文件到服务器上就行了，可以使用 ftp 工具，比如 FileZilla，不过这样每次写完博客之后都要手动再上传一次网站文件，比较麻烦，这里可以利用一下 github actions 这个持续集成工具。在项目的根目录下创建 `.github/workflows` 这样层级的文件夹，然后在里边创建`nodejs.yml`文件，里边写上下边的代码：

```yml
name: Node.js CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x]

    steps:
      - uses: actions/checkout@v2
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - run: npm install
      - run: npm run build --if-present
      - name: FTP Deploy
        uses: SamKirkland/FTP-Deploy-Action@3.0.0
        with:
          ftp-server: 你的虚拟主机 FTP 上传地址/ftp 目录
          ftp-username: ${{ secrets.ftp_user }}
          ftp-password: ${{ secrets.ftp_pwd }}
          local-dir: build/
        env:
          CI: true
```

这个文件是告诉 github actions，这个项目在 Node.js 12 版本，unbuntu 最新版本下，运行下边的命令：

- npm install - 安装依赖库
- npm run build - 打包项目为静态网站
- FTP Deploy，发布到 FTP 服务器上。

这里发布 FTP 的时候，需要几个参数：

- ftp-server - 你的虚拟主机 FTP 上传地址，比如`ftp://byu*********.my3w.com/htdocs`。
- ftp-username - ftp 用户名。
- ftp-password - ftp 密码，这些是私密信息，所以用了 github 的私有环境变量，稍后再讲怎么配置。
- local-dir - 上传哪个目录。

需要注意的是，因为咱们上传到 github 上的代码不包括`build`文件夹，所以，需要把 github actions 运行之后生成的 build 文件夹上传到服务器，这里在项目的根目录里，添加一个 `.git-ftp-include` 文件，写上：

```
!build/
```

意思就是把 `npm run build` 之后生成的 build 目录上传到服务器中。

`ftp-password` 这种机密信息的设置方法是：

1. 打开仓库的首页，点击`settings`。
2. 在左边的菜单选择`Secretes`。
3. 点击`Add a new secret`。
4. 在`name`处输入变量的名字。
5. 在`value`处输入变量的值。

最后点击`Add secret`按钮添加就可以了。

#### 发布博客

在把所有的这些文件弄好之后，把代码推送到 github 上等 github actions 运行完之后，就可以访问自己的网站了。以后再发表文章，只需要在本地写好之后，推送到 github 上完事儿了。到这里你自己的博客就搭建好了，向全世界展示你的文采吧！
