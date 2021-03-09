---
id: what-is-dom
title: HTML DOM 入门简介
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 什么是 DOM，有哪些特点？和 HTML、JavaScript 有什么关系？这个 2 分钟的动画视频带你了解 DOM。
slug: ../what-is-dom
keywords:
  - JavaScript
  - dom
  - html
  - browser
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=627759445&bvid=BV1Ct4y1e7mw&cid=255323004&page=1" bsrc="https://www.bilibili.com/video/BV1kf4y1U7Ln/"/>

DOM，全称是 Document Object Model，文档对象模型，它是指在浏览器中，以对象形式呈现页面文档，然后可以使用 JavaScript 对其进行操纵。我们常见的页面文档就是 HTML 页面，在内存中表示为 document 对象。（左边放 HTML 代码，右边放 DOM 对象树） 因为 DOM 中的元素以树状结构表示层级关系，所以又叫 DOM 树，每个元素都是 DOM 树的节点（Node）。DOM 除了能表示 HTML 文档外，还能表示 XML 等其它树状文档。

那么为什么要使用 DOM 呢？我们知道 HTML 是静态的页面，只能提供内容的展示，不能动态的去修改它或者处理事件，而使用 DOM 提供的属性和方法，就可以通过编写 JavaScript 代码来实现动态的功能。（处理事件、改变HTML 属性和内容、添加动画加上示例；，这里录一遍真实浏览器操作的视频好了，没加 js 和加了 js 之后的）要注意，DOM API 并不属于 JavaScript 语言本身，而是浏览器实现了这些 API 并赋予了开发者使用 JavaScript 操纵 DOM 的能力。（加上浏览器和 JS 的关系图）

在 DOM 中，每个 HTML 元素都继承了一些特定的类型，这些类型会提供操作 HTML 元素的 API，了解它们之后就能知道如何操纵 DOM 元素了。比较重要的类型有：

- Document 类型。它是 document 对象所继承的类型，通过它的 API 可以选择页面上的元素，或者创建新的元素。 [https://developer.mozilla.org/en-US/docs/Web/API/Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)
- 第二个是 NodeList 类型。代表 DOM 节点的集合。使用 document.querySelectorAll() 等 API 获取的节点集合继承了 NodeList 类型，可以像数组一样访问它里边的元素，每个元素又是 Node 类型，而在 HTML DOM 中，集合还继承了 HTMLCollection 类型，每个元素也还继承了 Element 类型。
- Element 类型则是所有 HTML 元素都继承的类型，通过 document.getElementById() 或者 querySelector() 等得到的单个 DOM 节点都继承了 Element 类型，它可以让我们改变 Html 元素的属性和内容、或者添加事件。此外，每个 html 元素又有对应的 HTMLElement 类型，例如  button 对应 HTMLButtonElement，它会有自己专属的 api。需要注意的是，一个 HTML 元素可能继承多个类型，会有很多 API，这些可以从 MDN 文档上查看详细介绍。

好了，以上就是 DOM 文档对象模型的介绍，你学会了吗？后期我们还会讲到 BOM、选择器、以及使用 JS 操纵 DOM 的教程。如果有问题请留言，有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！
