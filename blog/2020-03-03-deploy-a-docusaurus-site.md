---
slug: deploy-a-docusaurus-site
title: 使用 Docusaurus 搭建个人博客教程（一）
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
tags: [前端, 职业]
bvid: av93748753
oid: "93748753"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

我以前总也找不到一个满意的博客系统，wordpress 这个程序又大，然后配置也不方便。占用的服务器的资源也多。我就想有没有一个又简单又快速的博客平台，后来发现了一些静态的网站生成器，像 `hexo` 这种，但是发现上面的主题又不好看，又懒得自己去写。后来就有一阵子我就直接把博客就发布在了其他的第三方的博客平台上。现在发现了这个 docusaurus, 它的主题跟我之前看到的一个大佬 Dan Abramov，它的 [overreacted.io](https://overreacted.io) 博客，风格是一模一样的，因为他是 react 的作者之一，估计这个他们这个样式都是互相借鉴，它这个主题可以切换暗黑和白天模式，比较好看。安装和部署也特别简单，我的博客也是用它这个搭建的。

<!--truncate-->

[B 站视频 - 点击传送](https://www.bilibili.com/video/av93748753/)

## 博客有啥用？

首先先弄清一个问题，_为什么要有一个自己的博客？_，博客的好处就是对于咱们程序员来说：

> 它可以当成是咱们的副业。如果咱们在写代码的时候遇到了问题，或者是在学习一个新的技术的时候，咱们可以把这些学到的东西都给整理成博客，然后发表出来，这样的话呢，既可以能巩固咱们的知识，检测咱们这个技术有没有学懂，然后呢还能让其他想学这些东西的人也能看见，等这些分享的人多了之后，你就会慢慢攒一些粉丝，那这样你的博客就可以成为*你的一个品牌*，有了这个品牌之后，你再去面试或者是干嘛的，你就可以把它拿出来，然后大家可以看到你的作品，这样的话对于你以后的职业发展还是很有发财升官都有帮助。现在你也了解这个博客的好处了吧，那咱们开始用这个 Docusaurus 搭建一个博客


## Docusaurus 简介

它是一个静态网站生成器，之前我在我的前端路线图的视频里面提到过这个概念，他是用 React 写的源代码，然后编译成的是静态的 HTML css。他这个写文章支持 Markdown 语法，并且呢，它这个 marketdown 是用的 mdx 也就是支持 jsx 语法的 markdown，无缝结合 React, 里边可以引入自定义的组件，然后呢他也支持插件，还有主题，咱们也可以写自定义的组件，把它默认的主题的某一个组件给覆盖掉，特别方便。

<img alt="" src={useBaseUrl('img/2020-03-02-deploy-a-docusaurus-site/2020-03-04-22-04-02.png')} />

## 安装运行环境

因为他是个 node 的项目，所以得安装一下 node js 的环境，还有包管理器， 比如说 yarn，或者不安装用自带的 npm 也可以，我习惯用 yarn。具体怎么安装 Node.js 还有怎么安装 yarn 可以看我之前发的那些视频：

[Node.js](https://nodejs.org/en/)

[Yarn](https://classic.yarnpkg.com/en/)

[安装 Node.js 视频教程](https://www.bilibili.com/video/av88759392/)

[安装 Yarn 视频教程](https://www.bilibili.com/video/av89451285/)

### 安装 docusaurus

先创建 Docusarus 这个项目，它有一个脚手架，原本是一个 node 的全局库，但是利用 npx 可以直接用它给咱们创建一下项目就可以了，不用安装到全局库里。运行下边的命令创建项目：

```bash
npx @docusaurus/init@latest init [name] [template]
```

这个 name 就是项目名，然后 template 是模板，模板一开始就用它官方的 classic，经典的,就行。我这里创建一个 `fh-blog` 项目：

```bash
npx @docusaurus/init@latest init fh-blog classic
```

[Docusaurus V2 官网](https://v2.docusaurus.io/)

### 运行 docusaurus

创建完了之后，就进入到这个 fh-blog 的文件夹里面，运行

```bash
yarn start
```

或者用 npm 运行：

```bash
npm start
```

运行成功了之后呢，它会自动打开一个浏览器，然后访问的是`http://localhost:3000`，可以看到他这个界面，跟咱们之前看到的官网的文档是一样的。上面有文档、博客、还有 github 链接，切换暗黑和白天模式。

<img alt="" src={useBaseUrl('img/2020-03-02-deploy-a-docusaurus-site/2020-03-04-22-16-57.png')} />

### 项目结构

这个项目，大体的结构是：

```sh
my-website
├── blog
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2020-05-30-welcome.md
├── docs
│   ├── doc1.md
│   ├── doc2.md
│   ├── doc3.md
│   └── mdx.md
├── package.json
├── src
│   ├── css
│   │   └── custom.css
│   └── pages
│       ├── styles.module.css
│       └── index.js
├── static
│   └── img
├── docusaurus.config.js
├── package.json
├── README.md
├── sidebars.js
└── yarn.lock
```

- `/blog/` - 里面就是写博客文章的，都是 markdown 文件。
- `/docs/` - 里面就是写文档的，也都是 markdown 文件。
- `/src/` - 源代码文件夹，里面有一个 `css` 文件夹，然后它里边有个 `custom.css` 里面是写自定义的 css 代码的。
  - `/src/pages` - 里边放一些自定义的页面，使用 react 语法来写。
- `/static/` - 放静态资源文件，这些文件会出现在最后打包出来的静态网站里面，在它的根目录下边，它下边的 `img` 文件夹是放静态图片的。
- `/docusaurus.config.js` - 这个是配置这个站点的。
- `/package.json` - node.js 的工程配置文件。
- `/sidebar.js` - 配置文档页面侧边栏，只有文档页面才有，用它来定义文档的目录结构。

另外呢，也可以自己创建一个 `theme` 文件夹，里边可以定义一些组件用来替换默认主题里面的一些组件。

### 配置为博客模式

docusaurus 默认是文档风格的主页，要是把它改成一个博客形式的，需要做一点点的配置。打开它的配置文件，`docusaurus.config.js` 。把 `presets` 这个配置改成如下所示：

```javascript
presets: [
  [
    "@docusaurus/preset-classic",
    {
      // docs: {
      //   sidebarPath: require.resolve('./sidebars.js'),
      //   editUrl:
      //     'https://github.com/facebook/docusaurus/edit/master/website/',
      // },
      blog: {
        path: "./blog",
        routeBasePath: "/"
      }
      // 省略其它代码
    }
  ]
];
```

如果不用文档的话，就把 `docs` 这个删除或者注释了，然后加上 blog ，里边添加：

- `path` 属性，它的值为”./blog”，也就是指向 blog 的文件夹。
- `routeBasePath` 属性，这个是访问这个博客的路径，设置成`/`斜杠就是默认网站的首页。

然后把 `src/pages` 下边 `index.js` 的改成别的名字或者是给删除，这样的话他就不会同时匹配这两个文件了。

顶部导航的 docs 如果要去掉的话，可以找到 navBar 这个配置项，把 links 中的有关 docs 的这段删掉：

```javascript
{ to: "docs/doc1", label: "Docs", position: "left" }
```

### 发表第一篇博客

写博客就是在 `blog` 里边创建一个 markdown 文件。标题开始部分是一个日期格式。Docusaurus 会自动把这个日期解析成咱们这个博客的发表日期，后边跟着这个文件的名字，可以起个有意义的，比如说是博客的标题的英文，例如项目里的 `Welcome` 博客：

`2019-05-30-welcome.md`

文件，里面第一段就是配置这个博客的一些基本信息：

```sh
---
id: welcome
title: Welcome
author: Yangshun Tay
author_title: Front End Engineer @ Facebook
author_url: https://github.com/yangshun
author_image_url: https://avatars0.githubusercontent.com/u/1315101?s=400&v=4
tags: [facebook, hello, docusaurus]
---
```

- `id` - 访问这个博客的 URL。
- `title` - 标题。
- `author` - 作者。
- `author_title` - 就是作者简短的自我介绍，职位之类的。
- `author_image_url` - 头像。
- `tags` - 博客标签, 是个数组形式。

如果文章太长想只展示一部分的话，可以加上：

```
<!--truncate-->
```

这个注释就可以了，它会把它后边的内容隐藏，然后显示一个阅读更多链接。

这样第一个博客就完成了，现在是跑在本地上，后边再讲怎么把它部署到服务器上。
