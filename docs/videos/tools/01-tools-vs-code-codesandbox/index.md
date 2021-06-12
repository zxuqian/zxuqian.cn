---
id: tools-vs-code-codesandbox
title: 开发工具：CodeSandBox 和 VS Code
slug: ../tools-vs-code-codesandbox
description: 这两个工具一个是线上的 CodeSandBox，一个是本地的 Visual Studio Code，这两款工具其实是一个，只不过 CodeSandBox 把 Visual Studio Code 放到了线上。
keywords:
  - tools
  - vs code
  - codesandbox
  - 开发工具
  - 前端
  - frontend
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=81800308&bvid=BV1LJ411j7vU&cid=139964487&page=1"/>

这两个工具一个是线上的 CodeSandBox，一个是本地的 Visual Studio Code，这两款工具其实是一个，只不过 CodeSandBox 把 Visual Studio Code 放到了线上，为什么可以这样呢？因为 Visual Studio Code 是基于 Electron 开发的，它可以把基于 HTML、CSS 和 JavaScript 的程序做成桌面版的应用，所以脱离 Electron，程序本身还是可以运行到浏览器的。因此 codesandbox 实时预览功能等，Visual Studio Code 也可以做到。我们先来看 CodeSandBox。

## CodeSandBox

CodeSandBox 可以创建多种应用，如 React, Vue, 普通 JavaScript 和静态项目。它右边有实时预览功能，在左侧编辑器编写代码之后保存就能看到效果。用它做的项目可以保存在云端，只要创建一个账号。非常适合尝试为一些新的库做 demo，或者做演示。

## Visual studio code

另一款工具是微软出的 Visual Studio Code，大家可以根据自己的操作系统选择对应的版本下载。它的强大之处在于支持各种插件，所以市面上流行的语言它都支持，它对 JavaScript 和 TypeScript 的项目支持的最好，所以咱们前端用它来开发来说来非常适合。这里介绍两个插件，一个是 live server，这个就能实现跟 CodeSandBox 一样，保存就刷新页面。大家可以在 Visual Studio Code 的插件市场找到，然后点击 install 进行安装。安装之后不用做任何配置，在 HTML 文件直接右击，选择 open with live server 或者在右下角选择 go live，就可以打开浏览器预览，所做的改动都能实时看到效果。
另一个插件是 prettier，用来美化代码结构。我们知道要保持代码整洁需要做很多格式化的东西，prettier 可以帮我们自动完成，只需要写代码即可，无论代码写的多么乱，只要结构正确，它可以直接帮我们格式化好。
