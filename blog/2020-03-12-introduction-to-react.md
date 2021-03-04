---
slug: React-intro
title: 什么是 React？你为什么应该学React？
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
description: Hello! 今天来带你走进 React 的大门！我第一次听说 React 是我在美国读研的时候，室友选了 web programming 这节课，然后遇到了关于 react 的好多问题...
tags: [前端, React]
bvid: av95815105
oid: "95815105"
---

import useBaseUrl from '@docusaurus/useBaseUrl';



Hello! 今天来带你走进 React 的大门！我第一次听说 React 是我在美国读研的时候，室友选了 web programming 这节课，然后遇到了关于 react 的好多问题，就是总也配置不好。我看他那个时候 React 的配置特别麻烦，要引入一堆依赖，像 bower, babel 等等... 还有文档写的也不清楚。有一次他刚开始做一个作业，问了我一个问题，大概是有一个组件显示不出来，结果看了半天我也不知道是怎么回事啊，因为我也没学过。后来他自己研究出来了，是因为这个组件在使用的时候没有大写。

<!-- truncate -->

我当时就觉得这个 React 好复杂呀，然后就决定，我可不学他，后来我在暑假里面就学了 vue，但是回国之后呢，因为某些原因我就没有找后端的工作,转向了前端，当时又看这个 react 已经变得特别方便了，有一个 create react app 工具，就能省好多事儿，而且 react 的生态圈又特别的庞大，就决定学了 react。因为我觉得这个 react 开发大型的前端应用特别方便，尤其是它出了 hooks 之后。所以，我今天想给你分享一下。这个 react 到底是什么东西？它有什么好处？


[B 站视频 - 点击传送](https://www.bilibili.com/video/av93748753/)

## React 的前世今生

以前呀，react 给自己的定位，就包括他官方文档写的，都是用来创建一个单页应用的，什么是单页应用呢？单页应用，就是说这个整个页面它都没有 URL 的跳转。页面的更新都是通过 JavaScript 来实现的。这样的这个网站运行起来就像一个是一个本地的 APP 一样。让这个用户的体验更好。

<img alt="" src={useBaseUrl('img/2020-03-12-introduction-to-react/2020-03-14-16-33-43.webp')} />

但是呢，它一开始需要把所有的 js、css 还有 html 全部都加载进来, 之后的操作就是通过和服务器打交道，然后把数据取回来之后再更新需要改变的部分，而不会发生页面的跳转。现在 React 对自己的定位是一个 JavaScript 库，来创建用户界面的。从这个措辞上来看，它可以做所有跟用户界面有关的应用，不管你是不是单页应用还是多页应用，是移动的 APP 还是其他，只要是用来展示用户界面的都可以用它来做。

## React 对开发有什么好处?

### 组件化

使用 React 的好处呢，就是你可以创建 component，组件。然后可以把一个网站或者是应用上面的一些按钮、菜单等这些小一点的单元做成一个组件，这些组件可以在不同的地方去重复使用。

而组件之间的变化是通过状态来改变的，你可以把这个状态想象成是一个触发器的开关，只要状态变了之后，那么 React 就会根据这些新的状态把这个组件在渲染一次，把它更新成新的。这个状态是由组件内部来管理的，那么在组件这么一个独立的单元里边，它负责自己的样式还有状态的改变，会使得开发很有逻辑。就不像是 jquery，如果你想改变哪个组件的状态的话，需要先找到这个组件，然后再手动的去改变它的状态。

<img alt="" src={useBaseUrl('img/2020-03-12-introduction-to-react/2020-03-14-16-42-17.png')} />

### 效率高

React 开发效率高，就是因为有了这些组件。记得我之前上班的时候，我拿到一个新的项目，先分析设计图，把一些可能需要复用的组件写好，一些不确定的就先把它写到了相应的页面里面去，然后等有重复再用的时候，再把它单独抽取出来，到最后慢慢的这些可重用的组件越来越多，在构建新页面的时候也会越来越快，到最后就可以发展成为一个标签，就可以生成一个页面。而且，这些组件可以作为未来你自己的一个样式库，在开发新的项目的时候或者是开发别的像移动端的 APP 的时候可以拿过来直接就用，这样还能保持风格的统一。

## 需要哪些技术才能学 React?

学习 React，你只需要掌握 `html`, `css` 还有 `JavaScript` 知识就行了，另外呢就是一些新特性， `ES6/ES7/ES8`，也需要了解一下，用的比较多的有`箭头函数`，还有`解构赋值`，`扩展运算`。至于 class，因为 React 出了 hooks 之后，基本上所有的组件都可以用函数式来写了，所以说 class 已经变得不是那么特别重要了。

## 创建第一个 React 项目

现在咱们来看一下这个怎么创建一个 react 项目。因为 React 创建出来的是一个 node 的工程，所以需要安装一下 node.js， 安装方法我在之前的视频里面讲过。安装完 node.js 之后，你也可以选择性的去安装一下 yarn，不过这个是不必要的，我个人比较习惯使用 yarn。

[Node.js 视频](https://www.bilibili.com/video/av88759392/)

[Yarn 视频](https://www.bilibili.com/video/av89451285/)

### Create React App

接下来就是创建工程，可以使用 create-react-app 这个工具，打开你的命令行，找一个你觉得合适的文件夹，然后在里面输入

`npx create-react-app hello-world`

空格后边是咱们这个工程的名字，比如说叫 `hello-world`。

等它创建完之后，运行这个项目使用：

`npm start` 或者是 `yarn start`，运行之后它会自动帮你打开一个浏览器，你可以看到一个 logo，还有一段话告诉咱们编辑一下 `src/app.js` 来看一下效果。咱们来看一下项目的目录结构：

```shell
hello-world
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── serviceWorker.js
│   └── setupTests.js
└── yarn.lock
```

这里你需要关心的就是 `src` 这个文件夹:

- `App.js` - 他是这个 react 项目里面的一个最顶层的组件。咱们看一下这个 App.js 的代码：

  ```jsx
  import React from "react";
  import logo from "./logo.svg";
  import "./App.css";

  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  export default App;
  ```

  可以看到这个 react 的组件，是用一个函数来定义的，最后返回一些 html 的标签，那这个 html 标签叫做 `jsx`, 这个语法一开始看起来可能会很奇怪，在 js 里面来写 html，而且也不符合这个表现和逻辑分离的模式。其实这样写的话是非常容易在 html 还有 js 之间传输数据的，习惯了就好。最后把这个这组件 export 出去，让 `index.js` 把它放到 id 为 root 的 div 里面。在组件里使用 css 样式的话，就直接在上边用 `import` 把 css 样式文件导入进来就可以了，它会自动应用里边的样式。这里注意一下，jsx 是用 `className` 来代替了 class。引用图片的话，也只需要把图片导入进来就可以，然后给它赋值给一个变量.在 `img` 这样的标签下，直接当作 src 的值就好了，在 jsx 里边引用 js 变量的话，需要使用大括号`{}`语法。

- `index.js` - 是这个工程的入口文件。它里边就把这个 App 组件给挂载到了 id 为 root 的 div 里边，通过调用 `ReactDOM.render()` 函数，它就会把 div 里边所有的代码都替换成这个 App 组件生成的 html：

  ```jsx
  ReactDOM.render(<App />, document.getElementById("root"));
  ```

  咱们可以看一下 `public` 下边的 `index.html` 里，他就有一个 id 为 root 的 div:

  ```html
  <div id="root"></div>
  ```

咱们现在可以把 App 函数里边的代码删掉，然后返回一个简单的组件，比如说把这个标签改成 h1，然后里面写个 hello world，在保存这个页面它就刷新了。

```jsx
function App() {
  return <h1>Hello World</h1>;
}
```

好了，现在你就创建了一个第一个 React 项目。

## 总结

今天给你讲了一下 react 是什么，然后它有一些什么优点。接下来后面我会逐渐介绍它的一些特性，比如说属性、状态、还有事件的处理，高级的用法，组件的设计等等。现在你可以先用这个工程来自己先玩一下，看看能不能自己做出点什么东西出来。如果有什么其他问题，请在评论区留言，谢谢大家。
