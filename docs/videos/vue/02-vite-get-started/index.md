---
id: vite-get-started
title: Vite 2.0 极速体验，全框架支持 Vue/React/Svelte 的开发环境
slug: ../vite-get-started
description: 这几天研究了一下 Vite 2.0，之前在 Vue3 的官方文档有看到过如何使用 Vite 新建一个 Vue 项目，但是没有去了解它，就在最近我收到了关于 Vite 2.0 的新闻推送，看到它支持很多框架，像是 React、Vue、Sevlte，于是就来了兴趣，试了试它的开发体验。整体还是很不错的。首先看一下 Vite 是个什么东西。
keywords:
  - vite
  - vue
  - 脚手架
  - vue-cli
  - 前端
  - frontend
---

这几天研究了一下 Vite 2.0，之前在 Vue3 的官方文档有看到过如何使用 Vite 新建一个 Vue 项目，但是没有去了解它，就在最近我收到了关于 Vite 2.0 的新闻推送，看到它支持很多框架，像是 React、Vue、Sevlte，于是就来了兴趣，试了试它的开发体验。整体还是很不错的。首先看一下 Vite 是个什么东西。

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=929383659&bvid=BV1CK4y1S7aw&cid=306339485&page=1"/>

## 什么是 Vite 2.0

Vite 是法语，意思为快速的，它使用原生的 ESM 模块化语法来加载 JavaScript 模块，并且服务器的启动速度还有模块热加载的速度都非常快。在 Vite 2.0 版本，它还支持多种框架的开发，成为了一种比较底层的开发环境，支持 TypeScript、JSX、CSS 等文件的加载和打包。借助底层的 Rollup 打包工具，Vite 支持打包多页应用程序和工具库。

## Vite 2.0 的运行原理

之所以 Vite 2.0 启动快，是因为它把项目分成了两部分，一部分是项目的依赖，也就是 package.json 中指定的库，另一部分是源代码，一般就是在 src 中写的组件。

其中依赖部分不经常变，那么 Vite 2.0 会提前把用到的依赖打包，并保存在 node_modules/.vite 文件夹下，依赖的打包使用的是 esbuild 这个工具，它是用 go 语言写的，速度比 JavaScript 要快的多。Vite 只有在项目第一次启动时、添加删除依赖或修改了配置时才会重新打包依赖，在打包完成后还会通过 HTTP， 缓存到浏览器中，进一步减少了打包次数。

对于源代码部分，则是直接运行在浏览器中，利用浏览器原生的 ESM 模块化语法加载相关的模块，而且当源代码发生变化时，模块热部署只会更新当前页面所涉及到的最少的代码，这样无论应用的大小，模块热部署总是很快。

这些与 webpack 之类的不同，webpack 每次启动都要把整个应用程序进行打包，且热部署的时候也会把相关依赖再打包，所以速度很慢。

## Vite 2.0 的缺点

在尝试了 Vite 2.0 之后，也许它刚出来不久，也还有不完善的地方， 例如 HMR 支持的不太好，有时不会自动刷新页面，有些错误提示也不太友好，只是说有地方报错了，不说是什么错误。不过整体上的开发感觉还是不错的，确实很快。

## 使用 Vite 2.0 创建 Vue 项目

好了，在了解了 Vite 2.0之后，我们来创建项目试一下。先看一个 Vue 项目，使用 Vite 2.0 创建项目非常方便，在命令行使用 `npm init @vitejs/app` 或者 `yarn create @vitejs/app` 命令，然后根据提示进行选择：

```
npm init @vitejs/app

yarn create @vitejs/app
```

我们这里给项目起个名字 `vite-vue` ，然后选择 Vue 模板，这里创建出来的直接就是 Vue 3 的项目。我们看一下项目文件，目录结构基本和 Vue-cli 创建出来的一样，但是 index.html 放到了根目录，外边还有一个 vite.config.js 文件用于配置 vite。src 下就是一些示例的组件，我们来运行一下。

首先运行 `npm install` 或 `yarn install` 安装依赖，虽然命令行提示可以直接运行 yarn dev 来启动项目，但是由于没有安装依赖，所以会报错，这里其实应该提示一下。

接着使用 `npm run dev` 或 `yarn dev` 来启动项目，可以看到命令行有这样一行：

```
Pre-bundling dependencies:
  vue
(this will be run only when your dependencies or config have changed)
```

这一步就是在预打包依赖，它只执行一次，如果现在重新运行一次，那么可以看到就没有了这句话，而且服务器是秒启。打开 URL 就可以看到示例页面了。

我们修改一下 HelloWorld 组件的代码，例如在 `h1` 下边添加一段文字：

```
<h1>{{ msg }}</h1>
<p>欢迎使用 Vite</p>
```

保存可以看到页面内容替换的也非常快，秒替。

## 使用 Vite 2.0 创建 React 项目

我们再看看用 Vite 2.0 创建一个 React 的项目，同样使用 `npm init @vitejs/app` 或者 `yarn create @vitejs/app` 命令，这一次给项目命名为 vite-react，选择 React 模板：

```
npm init @vitejs/app
yarn create @vitejs/app
```

打开项目，可以看到示例中的代码和使用 Create React App 创建出来的也类似，我们安装一下依赖并启动：

```
yarn install
yarn dev
```

可以看到也有预打包这一步，再一次重启就非常快了，修改一下 App.jsx 的代码：

```
<p>Hello Vite + React!</p>
<p>欢迎使用 Vite</p>
```

保存一下，可以看到页面更新也非常快。

## 总结

好了，这个就是对 Vite 2.0 的体验过程，总体感觉还是非常快的，而且它同时支持 Vue 和 React，这样可能跟 Vue Cli 或 Create React App，以及 Webpack 都成为竞争对象，谁知道呢，拭目以待吧。最后如果视频有帮助，请三连，想更好的学前端，请关注峰华前端工程师，感谢观看！