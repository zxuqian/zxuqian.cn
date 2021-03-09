---
id: effects-resizable
title: 使用 2 行 CSS 代码实现可缩放的 HTML 元素
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: CSS 里有一个 resize 属性，可以给 HTML 元素添加上缩放按钮，就像 textarea 元素的一样。不过它只能给块级元素，例如 div 添加，并且需要把元素的 overflow 属性设置为 auto、hidden 或 scroll 其中的一种。resize 常用的属性值有 horizontal、vertical 和 both 三种属性，分别控制是否可以水平缩放、垂直缩放或同时缩放。
slug: ../effects-resizable
keywords:
  - css
  - resizable
  - resize
  - 特效
  - 前端
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

2行CSS代码实现可调整尺寸的UI组件

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=971114084&bvid=BV1Hp4y1x7tN&cid=279797633&page=1" bsrc="https://www.bilibili.com/video/BV1Hp4y1x7tN/"/>

我们知道 <textarea /> 文本框可以使用拖拽的方式调整它的大小。

那么可不可以给其它元素也设置成可调整尺寸的呢？

答案是不能....才怪。CSS 里有一个 resize 属性，可以给 HTML 元素添加上缩放按钮，就像 textarea 元素的一样。不过它只能给块级元素，例如 div 添加，并且需要把元素的 overflow 属性设置为 auto、hidden 或 scroll 其中的一种。resize 常用的属性值有 horizontal、vertical 和 both 三种属性，分别控制是否可以水平缩放、垂直缩放或同时缩放。

如果是 svg 或图片，那么可以把它们放到 div 容器中，并占满容器的 100%，然后通过把容器设置为可缩放的之后，里边的图片也就可以随之调整尺寸了。

resize 属性支持 chrome、edge、safari 等主流浏览器，不支持 IE。

好了，这个就是如何实现可调整尺寸的 UI 组件，你学会了吗？有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！