---
slug: front-end-learning-path
title: 2020年最新前端工程师学习路线
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
tags: [前端, 职业]
activityId: 361708917169913931
oid: 361708917169913931
---

import useBaseUrl from '@docusaurus/useBaseUrl';

这段日子在 B 站上收到小伙伴最多的要求就是出一个前端学习路线，我能够充分的感受到大家抓耳挠腮加挠墙的迷茫~所以在这里给大家总结了一套前端学习路线。先从初级前端工程师所需的技能开始，然后一路升级到高级工程师该掌握的技能，层层相扣，让大家在工作中能游刃有余。最后附上我自己是如何从一个后端工程师转成了前端工程师^^。希望我的经历能对大家有帮助。

:::caution

注意：这篇文章中有推广链接，对你的阅读体验并没有影响，不过如果你通过链接购买了商品，那么会帮助 UP 主恰饭，以支持 UP 创作更多优质的内容。谢谢支持🍙！

:::

俗话说知己知彼百战不殆，要成为一名前端大神，首先知道它是做什么的。单纯从工作角度看，无非就是写写前端样式，连接下后台 api，解析解析数据，然后显示给用户，核心逻辑是这样没错，只是这中间掺杂着无数个边边角角的问题，比如框架选择、性能优化、兼容性调整、工程化等等。不过呢，这些并不需要一次性掌握，随着一次一次完成工作任务，解决 bug，这些自然而然就学会了~

在正式开始之前，咱们先把心态放平，就像玩游戏，游戏满级也不是一天两天的事，满级之后也才是一个新的开始。。。无尽的追求完美~。时间上，掌握前端工程师的基本技能大概需要 4 个月到 1 年的时间（看自己的意志力和上进心），之后就是在工作实践中不断的提升自己，时刻关注业界新闻，保持在科技的最前沿。工作是一个长期的事情，咱们静下心来慢慢学。

<!--truncate-->

## 完整技能大图

先来看 github 上一大神制作的路线图：

<img alt="前端学习路线图" src={useBaseUrl('img/2020-02-26-frontend-learning-path/frontend.png')} />

[https://roadmap.sh/frontend](https://roadmap.sh/frontend)

## 核心技能

好了，相信你已经开始下定决心要成为前端大神了，那咱们第一步就是把前端的核心装备拿下，它们分别是 `html`, `css` 和 `JavaScript`。前端的初衷是开发网页来让其他人看的，可以向全世界分享信息，直到最近几年才诞生了利用这些核心知识去开发移动 APP、小程序等多终端前端应用的工具，学好核心是前端工程师必备的素养。下边就是核心技能的简介：

### HTML

HTML 是用来编写网页代码结构的，它有一系列的标签用于显示不同的页面元素，比如用 `<a/>` 显示一个超链接，`<img/>` 显示一张图片，就跟写一个 word 文档一样，只是单纯用 html 只能写内容，不能进行排版和美化样式，如果让网页变得漂亮，需要 CSS。

[学习 HTML ：指南与教程](https://developer.mozilla.org/zh-CN/docs/learn/HTML)

书籍：[Web 开发经典丛书：HTML & CSS 设计与构建网站](https://union-click.jd.com/jdc?e=&p=AyIGZRhaFgsaB1MfXRAyEgRXHV0RBxA3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUBEAFTH14XMkVlIwEHcFJ2ZDR9L0tAEGwIBRASC2ILWStaJQITBlYZWhIEEw5lK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRCxEBUx9SEAsQDlYrXBULIgdcHFscAhUDXRJTe0MiN2UYayUyEjdWKxl7CxIEUBwJEgtBD1QSXhFWFldVTFIdCxpTBx9TFlBAB1ErWRQDFg4%3D)

### CSS

CSS 是用来美化 HTML 编写的页面的，通过一些语法选择特定的 html 标签，然后用一些属性来给它们添加样式，比如文字颜色，背景，位置，边距，定位等等，还可以添加动画效果让页面显示的栩栩如生~。重点要掌握 CSS 的盒子模型、常用的布局方式，比如 flex、grid 等。

[CSS - 设计 web](https://developer.mozilla.org/zh-CN/docs/Learn/CSS)

书籍：[CSS 权威指南（第四版）（上下册）](https://union-click.jd.com/jdc?e=&p=AyIGZRhaFgsaB1MfXRAyEgRRG1odABY3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUBFgdUE1kRMm5vT2Aed2JnZy9PDVVjVXdVRjBRR2ILWStaJQITBlYZWhIEEw5lK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRCxEBUx9TFQMTA1crXBULIgdcHFscAhUDXRJTe0MiN2UYayUyEjdWKxl7UEVQXRkJElZGVAVPXkYDGlRST1tFVhdQXB5SQlAWBVQrWRQDFg4%3D)

### JavaScript

在写完 html、css 之后，咱们就可以写漂亮的页面了，那么接下来就是需要学习 JavaScript，让网页能和人进行互动，比如点击按钮弹出个对话框，处理用户输入的表单信息，添加一些复杂的动画，使用 ajax 加载远程数据等等。它可以直接操作 HTML 元素，给网页开发提供了无限可能~这里咱们一定要把 JavaScript 基础语法掌握扎实，可以观看我 B 站上的 JavaScript 视频：

[JavaScript 基础教程 | 2020 年最新](https://www.bilibili.com/video/av87847392/)

[JavaScript — 用户端动态脚本](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)

书籍：[JavaScript 权威指南（第 6 版）](https://union-click.jd.com/jdc?e=&p=AyIGZRhaFgsaB1MfXRAyEgZdHV4QABU3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUDGgFQHlkSMldXVh0SEHhkYlUYEmABE1AuRhpHdmILWStaJQITBlYZWhIEEw5lK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRCxEBUx9TFwoaBFUrXBULIgdcHFscAhUDXRJTe0MiN2UYayUyEjdWKxl7URMCVhldFgoUV1MfXkdWRlQHGlsVAkIOAkwPHQsQBAUrWRQDFg4%3D)

书籍：[Eloquent JavaScript 3rd edition (包括 HTTP)](https://eloquentjavascript.net/)

### 网络基础

现在咱们可以做成型的网站了，那咱们该如何让全世界的人看到咱们的杰作呢？那这里网络基础就派上用场了，不需要精通，只需要掌握几个基本概念就好了。

#### 域名

访问网站咱们都知道需要使用 url (网址)，比如 www.baidu.com，这个 baidu.com 就是域名，域名可以从域名提供商购买，比如阿里云。在购买域名之后要通过 DNS 解析服务把它对应到一台服务器的 IP 地址上。

[什么是域名？](https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_domain_name)

[阿里云](https://www.aliyun.com/minisite/goods?userCode=idwbk8q2)

#### 服务器

服务器就是一台安装了服务器程序的电脑。用户用域名访问一个网站时，会有 DNS 解析服务把域名解析成 IP，再通过 IP 找到相应的服务器，服务器程序就把网站内容传递给用户的浏览器。咱们的网站就部署在服务器上，它也是从阿里云之类的提供商购买。

[阿里云](https://www.aliyun.com/minisite/goods?userCode=idwbk8q2)

#### Linux

服务器的操作系统一般是 linux，它可以没有用户界面，可以节省很多 CPU 和内存资源，这样就要求咱们掌握一些常用命令，比如创建文件，切换目录，复制和移动文件，显示文件列表等。另外访问服务器常用的工具是 SSH 和 FTP，咱们需要通过这几个工具来从自己的电脑连接到远程的服务器，然后安装服务器程序和上传网站程序。

书籍：[鸟哥的 Linux 私房菜 基础学习篇(第 4 版)](https://union-click.jd.com/jdc?e=&p=AyIGZRtTEAsaD1ESXBwyFgBUGVsUBxoGVxlrUV1KWQorAlBHU0VeBUVNR0ZbSkdETlcNVQtHRVNSUVNLXANBRA1XB14DS10cQQVYD21XHgNSGlkVAxcPVBlZJVVFVxN7Gx1fcnBPHwUSSmhfLkwkckQeC2UaaxUDEwRXGlwTAxs3ZRtcJUN8D1MSWxcyEzdVH1IWBBEAXBhZFwUUN1IbUiUCGwBVElsSBhoOXXUaJTIiBGUraxUyETcXdV0WChoGU0wOQlcaU1ATUkYLFAAATlkRV0cEVxNZFAARN1caWhEL)

#### 服务器程序

常用的服务器程序有 apache、nginx，它们都是基于 HTTP 协议的，有了服务器程序，网站文件比如 html 页面才能发送到用户的浏览器上。

[Nginx 中文文档](https://www.nginx.cn/doc/)

[apache 中文文档](https://httpd.apache.org/docs/2.4/zh-cn/)

#### HTTP 协议

协议好比如说医生开药方，写的龙飞凤舞，但是药房药师居然都看得懂~这个可以说他们都有固定套路来理解对方~那么在计算机领域，协议就是电脑之间用来交换数据的规则。HTTP 协议是用来在网络上交换和传输数据的，比如说咱们的网站 html、css 和 js 就是通过这个 http 协议来发送到浏览器的。

[HTTP 概述](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview)

## 进阶技能

上边核心技能都掌握了的话，你就已经超过一半的前端工程师了，接下来就是成长为更高级一些的前端工程师，这里的目的是除了理解一些高级的概念之外，还要提高开发效率，也就是用到所谓的框架。

### 响应式布局

现在手机和平板差不多要比电脑都流行了，所以一个网站要适应不同尺寸的屏幕，有这种特性的网站就叫做响应式网站。实现响应式主要就是通过 css 的 `media query` 针对不同的屏幕宽度，编写不同的 CSS 样式。

[响应式 Web 设计](https://developer.mozilla.org/zh-CN/docs/Web_Development/%E5%93%8D%E5%BA%94%E5%BC%8F_Web_%E8%AE%BE%E8%AE%A1)

### 兼容性调整

网站需要在不同的操作系统和浏览器下都要保持一致。对于 CSS，可以使用 css hack 来对不同的浏览器加载不同的样式。 对于 JavaScript，则可以使用 Babel 等转化工具，把新的 JS 语法转换成旧的，或者使用 polyfill 加上浏览器不支持的语法。

[跨浏览器测试介绍](https://developer.mozilla.org/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)

### UI 框架

UI 框架提供了页面的基本 UI 样式和布局系统，比如按钮、对话框、轮播图，省了自己去开发，常用的有 Boostrap, Semantic UI， Tailwind CSS。

[Bootstrap](https://getbootstrap.net/)

[Semantic UI](https://zijieke.com/semantic-ui/)

[Tailwind CSS](https://www.tailwindcss.cn/)

### SEO

SEO 全称是 Search Engine Optimization，搜索引擎优化。咱们常见的百度、谷歌这些搜索引擎会定期爬取线上的网站内容，然后进行收录，网站内容质量优秀、结构良好、访问量大的还会排名比较靠前。为了给自己的网站增加曝光量，这就需要针对搜索引擎给咱们的网站添加一些内容，比如关键字。

[如何带着 SEO 的思维将 MDN 的 Web 文档写的更符合搜索引擎展现](https://developer.mozilla.org/zh-CN/docs/MDN/Contribute/Howto/Write_for_SEO)

[SEO 基础知识教程](https://www.w3cschool.cn/kfm2f1/)

### Node.js、npm / yarn

因为 Node.js 的出现，JavaScript 的开发可以脱离浏览器了，这样就产生了好多借助 Node.js 来写前端代码的方式，然后用相应的打包工具去打包成浏览器可用的代码。这样的好处是，咱们可以充分利用 node.js 的包管理工具来方便开发，比如使用 npm 或者 yarn 管理项目的依赖。

[Node.js](http://nodejs.cn/)

[npm](https://www.npmjs.cn/)

[yarn](https://yarn.bootcss.com/)

书籍：[Node.js 实战 第 2 版](https://union-click.jd.com/jdc?e=&p=AyIGZRhaFgsaB1MfXRAyEgRQGF8RChE3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUBFwRRH1MWMlJlLk4iHHgSYgFPI2tJZH4lYiYWdnILWStaJQITBlYZWhIEEw5lK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRCxEBUxxcEQIaD1ErXBULIgdcHFscAhUDXRJTe0MiN2UYayUyEjdWKxl7VhMPU0wLEFFBVFdMXhUHQA9TS15GAEZSXR5dFgdGAgArWRQDFg4%3D)

### CSS 预编译

咱们在写 CSS 的时候可能一段代码要重复好多次，写一连串的选择器，重复的属性组合等等。这时 CSS 预编译工具就派上用场了，比如 SASS、LESS，它们支持 CSS 选择器嵌套、定义变量、Mixins、函数、继承等等。

[SASS](https://sass.bootcss.com/documentation)

[LESS](http://lesscss.cn/)

### 自动化工具

自动化工具有 grunt、gulp 等，可以监控文件变动，或者做一些自动化操作，比如编译 SASS 或 LESS 的代码为 CSS 等。

[gulp](https://www.gulpjs.com.cn/)

[grunt](https://www.gruntjs.net/)

### React, Vue, Angular

这里就不得不提当下十分热门的前端开发框架了，React、Vue、Angular 三大件。它们都提供组件化开发的方式，这就让前端开发模式发生了巨大的变化，以往以页面为核心现在转为了以组件为核心，有了这些组件可以方便的在不页面进行复用。另外基于状态的数据管理，也让改变组件状态变得十分简单。这三个框架可以都学，但是工作中基本上只会用到一个，深入一个就可以了。至于它们的 UI 框架也可以根据工作的需要去学习比如 ant design、element UI 等。

[React](https://zh-hans.reactjs.org/)

[Vue](https://cn.vuejs.org/v2/guide/)

[Angular](https://angular.cn/)

[Ant Design](https://ant.design/)

[Element UI](https://element.eleme.cn/)

### 模块化 CSS

因为 React 等组件化工程的出现，CSS 分散在不同的组件中，很容易因为命名冲突而导致样式被覆盖，模块化的 CSS 开发方式通过使用 css modules， 或者 styled-components (css-in-js 方式) 工具能很好的避免这些问题，它们也提供了其它类似 SASS/LESS 的功能。

[CSS Modules](https://www.html.cn/create-react-app/docs/adding-a-css-modules-stylesheet/)

[styled-components](https://styled-components.com/)

### 工程化工具

所谓工程化的工具，也就是打包工具，前端项目的各种 JS、SASS 源代码可能分散的不同的地方，利用打包工具，比如 webpack、parcel，可以把它们打包成一个单一的 js 和 css 文件，它们支持按需打包，用到的代码才会打包到最终产品上，没用到的则不会。另外图片等静态资源也可以指定规则进行打包。

[webpack](https://www.webpackjs.com/)

[parcel](https://zh.parceljs.org/)

### 测试工具

没有人想要不健壮的代码，在改动一个地方之后引起全局崩塌~，咱们写好的组件需要进行详尽的测试才能确保不出问题，另外也方便咱们工程师节省时间，因为只要添加的新功能保证测试结果还是正常，那么就不需要再人工去测试了。常用的 UI 测试工具有 jest, enzyme 等等。

[Jest](https://jestjs.io/zh-Hans/)

[Enzyme](https://airbnb.io/enzyme/)

[Puppeteer](https://github.com/zhaoqize/puppeteer-api-zh_CN)

## 高级技能

在把编写网页的技能掌握熟练以后，就要从多端开始拓展自己的技能了，另外还要深入已经掌握的技能。

### TypeScript

TypeScript 是微软编写的一款带类型的 JavaScript 语言，它的代码可以编译成普通的 JavaScript，但是编写的时候支持强类型，并且支持完全面向对象的形式。它的好处在于带有了类型之后，代码更容易维护，适合大型项目的开发。

[TypeScript](https://www.tslang.cn/docs/home.html)

### 移动开发

移动开发包括移动的页面 H5 开发、小程序和移动 APP 开发，好在这些有统一的开发平台，使用 React 或者 Vue 就可以进行一次开发，多平台使用。React 生态的有开发移动 APP 的 React Native，开发多端平台的 taro。 Vue 有多端开发的 uni-app。

[React Native](https://reactnative.cn/)

[Taro](https://nervjs.github.io/taro/)

[Uni-App](https://uniapp.dcloud.io/)

### 桌面开发

桌面应用到现在还是有用武之地的，比如音乐软件，聊天软件，写作软件等等，这些也可以用前端技术开发，具体的工具有 eletron、proton native 等等。

[Electron](https://www.electronjs.org/)

[Proton Native](https://proton-native.js.org/)

### 静态网站生成工具

静态网站因为是纯 html、css 和 JavaScript 网站，所以拥有最快的速度、对 SEO 搜索引擎优化友好，最适合用于数据不常变动的展示、博客类的网站的搭建，常用的工具有 hexo, gatsby, docusaurus 等。

[Hexo](https://hexo.io/zh-cn/docs/)

[Gatsby](https://www.gatsbyjs.cn/)

[Docusaurus](https://docusaurus.io/docs/en/site-creation)

### SSR（服务端渲染）

如果使用 React、Vue 等前端框架开发网站，那么最终的页面源代码是没有 html 的，因为它们是用 JavaScript 去动态生成 html 代码，这样对 SEO 很不利，不过有了 serer side rendering，服务端渲染技术，就可以解决这个问题，它是把 JavaScript 生成好 HTML 之后，再把页面发送给浏览器。常用的有 react 系的 next.js，vue 系的 nuxt.js。

[Next.js](https://nextjs.frontendx.cn/)

[Nuxt.js](https://zh.nuxtjs.org/)

### GraphQL

GraphQL 是一种查询语言，跟普通的 restful 结构不一样，它是按照类型来组织数据的，不同的类型之间也会有对应关系，就像数据一样，前端开发者根据自己的需要编写 graphql 语句来按需查询想要的数据，它的这种模式非常适合 React 这种项目结构的开发。

[GraphQL](https://graphql.cn/)

[Apollo](https://apollographqlcn.github.io/react-docs-cn/index.html)

[Relay](https://relay.dev/)

### 性能优化

性能优化的概念比较广泛，而且根据应用的用户量、用户类别而不同。总体来说就是提高页面首次加载的时间、动画执行的效率、事件响应的效率。这些可以通过优化代码结构、文件大小、DNS 缓存、lazy loading 等来实现。

[Web 性能](https://developer.mozilla.org/zh-CN/docs/Web/Performance)

书籍：[Web 性能权威指南](https://union-click.jd.com/jdc?e=&p=AyIGZRhaFgsaB1MfXRAyEgdQHl4RCxE3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUCFwJQH1IWMk1ANkFbD2BzZzYYLlZETFwoGUFjZEQLWStaJQITBlYZWhIEEw5lK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRCxEBUxxZFAcaDlUrXBULIgdcHFscAhUDXRJTe0MiN2UYayUyEjdWKxl7AkUDVRsPRwMSUAIaXkFXQFQCSQ5CUEUEUk4LElAaBlIrWRQDFg4%3D)

### 安全

安全也是一个宽泛的概念，要了解 CORS（跨域资源共享）, XSS（跨站脚本攻击）, CSRF（跨站请求伪造） 等常见安全问题，也要了解 HTTPS 等安全协议，要尽量以周全的形式考虑，不要相信任何用户的输入，严格检查需要接收用户输入的地方。

[Web 安全](https://developer.mozilla.org/zh-CN/docs/Web/Security)

书籍：[Web 安全测试](https://union-click.jd.com/jdc?e=&p=AyIGZRhaFgsaB1MfXRAyEgZUEloRBxo3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUDEw5UH14dMmEBN09ZRgRHZA1LAwsYcl8WSFJnWWILWStaJQITBlYZWhIEEw5lK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRCxEBUxxeEwoVD1ArXBULIgdcHFscAhUDXRJTe0MiN2UYayUyEjdWKxl7BBEPXRIJEVdFA1IcXkJXFVQGH10VUhpVUh0LEQUaUFErWRQDFg4%3D)

## 工作与团队技能

工作与团队技能是在工作中所必备的，无论是初级还是高级前端工程师，这些只要在工作遇到了，就都需要掌握。

### Git

Git 是一个分布式的代码协作工具，几乎所有的公司都在用。Github 是 git 的一个远程仓库，咱们可以把代码发布到 github 上，既可以作为公开的向全世界展示自己的代码、进行合作，也可以作为私有的只限自己或者公司内部使用。

[Git](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6)

[Github](https://github.com/)

书籍：[精通 Git 第 2 版](https://union-click.jd.com/jdc?e=&p=AyIGZRhaFgsaB1MfXRAyEgRVE1sQCxI3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUBEg9VHlIVMmZaKh4rbkd3Zz4BEGx9a1ULQFlgeWILWStaJQITBlYZWhIEEw5lK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRCxEBUxxfFwIbAFQrXBULIgdcHFscAhUDXRJTe0MiN2UYayUyEjdWKxl7ARMEUhoLFQZCBl0fXhcEQg5WGAwWAxFSXBlYFAYRDwYrWRQDFg4%3D)

### Docker

Docker 是一种新的虚拟化技术，介于虚拟机和操作系统之间，它所用的资源少，并且能自动化管理镜像的运行环境和集群。因为前后端开发的分离的方式，大型的前端应用也会部署到 Docker 上。

[Docker](http://www.docker.org.cn/)

### CI

CI，持续集成，是一个自动化的部署过程，开发人员只需要改动代码，提交到 git 仓库，CI 系统会抓取代码进行打包部署并发布，节省了人工运维的时间。

[Jenkins](https://jenkins.io/zh/)

### ESLint 和 Prettier

代码合作经常会有风格和规范不统一的情况。ESLint 除了可以检查语法错误外，还可以定义开发规范，比如缩进字符的数量、命名方式等，而 prettier 则可以根据一些规范自动格式化代码。

[EsLint](https://cn.eslint.org/)

## 最新技术

### WebAssembly

Web Assembly 是浏览器新支持的编程语言，用于辅助 JavaScript。确切的说，它不是一个编程语言，咱们可以用它的编译器编译其它语言，用来编写更强大的功能，它目前支持 c++和 rust

[Web Assembly](http://webassembly.org.cn/)

### Web Components

Web Components 是类似 React、Vue 开发的方式，但是是 JS 原生支持的方式，不再需要依赖额外的库。它的核心概念有 Custom elements（自定义元素），Shadow DOM（影子 DOM），HTML templates（HTML 模板）。

[Web Components ](https://developer.mozilla.org/zh-CN/docs/Web/Web_Components)

## 最佳实践

在前端开发过程中有一些最佳实践需要了解，比如 JavaScript 的设计模式、组件设计原则、代码结构等。

[JavaScript 设计模式](https://union-click.jd.com/jdc?e=&p=AyIGZRhaFgsaB1MfXRAyEgdWH1kcCxQ3EUQDS10iXhBeGlcJDBkNXg9JHU4YDk5ER1xOGRNLGEEcVV8BXURFUFdfC0RVU1JRUy1OVxUCEQNXElITMm9fHEkjfGQUZCZHLxxqCHIIQxtBSmILWStaJQITBlYZWhIEEw5lK1sSMkBpja3tzaejG4Gx1MCKhTdUK1sRCxEOVBNaFQQTBlwrXBULIgdcHFscAhUDXRJTe0MiN2UYayUyEjdWKxl7AhdQAR5aEwoTD1MZXhRQG1RVEllAUBMBUExeRwEXBlYrWRQDFg4%3D)

## 持续进步

在掌握了上边所有技能之后~咱们等级就算满级了，现在就是真正的开始了，要不断精进自己的技能。前端技术的发展相比其它技术要快的多，咱们要时常关注一些前端新闻还有业界大佬的博客或微博，自己主动去搜索一些新的前端库或者设计模式，然后应用到工作中去，这样才不至于落后。另外，因为好多技术都是外国人写的，所以要想得到第一手且最准确的消息，一定要把英语学好，一些包和工具的官方文档就算是靠着翻译也要把它们看懂，相信我，过不了几天，你会发现需要查的词越来越少，阅读速度也越来越快。

## 个人经历

我在上学的时候学的是 Java 开发，那时候是前后端整体开发，前端主要就是 HTML，CSS 和 jQuery。我在找到的第一份 Java 开发的工作时就被迫见识到了前后端半分离的开发方式，那时候是 2010 年，前端库用的是 `ExtJS`，后端 Java web 开发框架用的是 struts2，来提供 JSON 数据，当时也是摸索了一阵子才彻底弄明白这个开发过程。后来在做自由职业的时候，又用 PHP 做过几个全栈的网站，前端那时候接触了 Bootstrap 框架，然后又摸索跨浏览器兼容性调整，知道了哪些 CSS 属性只有在哪个浏览器下才能生效。那个时候是 2012 年左右，html5 和 css3 已经开始流行了，然后我就把几个新出来的、觉得好玩的标签写了写，比如`<video />` 和 `<audio />`。再后来就又在业余时间接触了 Node.js，当时也不懂它是个什么玩意，所以就没咋去了解。

直到 2016 年，去美国读研，室友同学学了 web 开发，然后我才体验到了前端已经发生了天翻地覆的变化，于是趁着暑假，把 Node.js 这个东西搞明白了，无非就是个运行环境。。。然后看了下网上的意见，觉得 vue.js 在国内用的多，所以就看 vue 的官方文档开始学习，看完基础之后，就做了一个实战项目，模仿了一下网易云音乐的 UI，当时 CSS flexbox 布局已经定型了，我就用它来对页面上的元素进行布局。后来发现 web 端不好选取本地的音乐进行播放，而又当时室友正在学 `eletron`，就正好一想可以用它练习一下，就把它做成了桌面版的，用了 `howler.js` 添加了音乐播放、快进、快退功能。再后来又异想天开，把配色改了改，改的也不太好看，接着开学了就作罢了。

回国之后，因为我在美国主修的还是云计算和企业软件开发，所以想找找后端开发的工作，但是后端所用到的库也都发生了变化，不过还好有学分布式系统，有丰富的理论，我觉得面试肯定没问题，，实际情况是到处碰灰，面试的看我没相关工作经验，框架也没用过，都表现出特别不懈一顾的厌恶情绪，好嘛，我也不是没志气的人，话不投机半句多，走人~后来一想在学校的时候对前端还是有兴趣的，一番搜索调查后，我又把目光描向了 React，看了几天官方文档之后就去面试。。。我这里十分感谢招我进去的两位经理大佬了，给了我机会去学习，去成长。这是 2018 年 7 月，**我转型成了前端工程师**。公司只有我一个前端 web 端，入职当天下午就开始给我分配任务，开发一个[影响力榜单申报系统](https://award-turbo.huaxing.com/)，超多表单，超多验证规则，要 4 周也就是一个月的时间内完成，压力也是蛮大的，当时头儿让我用 dva.js 来开发，当时听也没听过，就去它的官方网站看了看，基本是基于 model 形式的去管理状态，不过后来发现这种状态管理起来也还真是费劲，经过一番折腾，外加周末也加加班，这个项目算是按时搞定了，期间有无数的 bug 和需求变动，经过这些我对 React 组件化开发的方式有了彻底的认识。

后来第二个项目是做一个中台项目，因为有技术大佬实现了 GraphQL 接口，我趁机体验了一把 React 与 GraphQL 的结合，那真是相当的爽，再也不用手动管理 API 请求和请求的状态了。我在谷歌上搜索了一下 React 连接 GraphQL 的库，一个是 Relay，一个是 apollo，对比了一下两者的官网文档上的教程，觉得 Apollo 比较好用，就按着文档学起来，再结合着 GraphQL 的官方文档看看它的结构定义，然后把这些慢慢的用到了项目里。另外，当时关注 React 新闻发现 React Alpha 版出了 hooks，我想这个系统既然也是内部用，就用了这个版本，参考 React Hooks 官方文档，写了点例子，又发现不少问题谷歌 StackOverlow 等等一通查，终于把它搞明白了，之后在项目里发现真是解放了。。。再也不用定义 class 了（除了异常捕捉组件），逻辑和表现也可以分离了，效率大大的提高。

2019 年做了[鹰眼投研](https://cri.vip/)这个老板的项目，相当大的一个项目，大概有 40-50 个页面，100 多个组件，由我主领，技术总监和一个合作同事参与共同开发的，耗时大概 3 个月，期间我搜罗、接触了形形色色的前端库，项目的样式是基于一个 css-in-js 库，`styled-components` 开发的，它可以把组件连同样式一起组件化，我还用 Apollo Server 写了 GraphQL 的 server 方便接口调用，又用了 ECharts 配置大量的图表，有柱状图、线图、热力图、中国地图...，还用 websocket 实现了聊天的客户端，唯一没有用到的就是 redux，这个玩意对于这种多页的大型应用来说，并不实用，一是模板代码太多，二是没有太多需要保存全局状态的地方。而对于这种大型项目，使用 React Hooks 构建可复用的组件和逻辑非常适合，在这个项目里好多页面都用到了筛选表格，我把筛选的逻辑写到了 hooks 里边，然后定义了几种通用的筛选样式，让每个有不同筛选条件的页面只需要按需组合就好，分页也是一样的道理，所有带分页的组件都是使用分页 hooks 实现的，还有其它一些 hooks，比如请求后端数据等。这个项目中用到了几乎这个路线中所有提到的技术，从中学到了不少的东西。

这些就是我个人的一些成长经历，我自己擅长的可能就是对一个网站进行组件化分析和拆解这样，争取做到一行代码实现一个页面这种效果。

## 总结

这篇文章尽可能详细的列举了前端工程师该掌握的技能，但是根据工作要求的不同，一些细节的框架可能没有提到，不过相信咱们在经过这么久的学习、打怪升级之后，那些个小框架都不在话下。有了良好的基础，以后咱们在工作中都能节节高升~走向人生巅峰！

