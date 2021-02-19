---
id: css-position
title: CSS 定位
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: CSS 的定位通过 position 属性设置，它有 static, relative, absolute, fixed, sticky 这几种。
slug: ../css-position
keywords:
  - css
  - position
  - 定位
  - 前端
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=541725652&bvid=BV1ni4y1g7tc&cid=224228999&page=1" bsrc="https://www.bilibili.com/video/BV1ni4y1g7tc/"/>

我们在设计页面的时候，上边的元素并不是整齐的，从上到下，从左到右排列的，而是有各中各样的布局方式，比如错位的，层叠的，固定在某个地方的，要实现这些复杂的布局，需要熟练掌握 CSS 定位的概念和用法。



CSS 的定位通过 position 属性设置，它有 static, relative, absolute, fixed, sticky 这几种。

## static

static ，静态定位，是 position 的默认值，也是 CSS 默认的布局方式，从上到下，从左到右排列元素，它属于正常的文档流。

## relative

relative，相对定位，它是在确定元素的默认位置之后，通过 left, top, right, bottom 属性来设置位置的偏移，但是元素所占的空间还保留在原位，其他元素不会挤占它原本的空间。

## absolute

absolute，绝对定位，会把元素移出正常的文档流，后边的元素会挤占它的空间，而它自己则会覆盖在挤占它的元素的上方，它也可以通过 left, top, right, bottom 属性设置位置偏移，但是与 relative 不同的是，这些属性是相对于 `包含它的元素` 来偏移的。什么是 `包含元素` 呢？

### 包含元素

如果这个元素的所有父级元素都没有设置 position 或者 transform、perspective 属性，那么包含元素就是包含 `<html/>` 元素的容器，也就是浏览器窗口，这时left, top, right, bottom 是相对于浏览器左上角进行偏移的。如果父级元素中有设置了 position （除 static 之外）或 transform、perspective 属性的，那么包含元素就是离它最近的设置了这些属性的元素，它是相对于父级元素的 padding 盒子边界进行位置偏移的，也就是无论父级元素的内间距有多大，都会从边框与 padding 交界处开始计算偏移。



我们通常使用 relative 定位来设置包含元素，因为它不会影响正常的文档流。



absolute 是用途最广的定位方式，可以实现弹出层、叠加、不规则的位置等布局形式。

## fixed

fixed，固定定位，跟 absolute 定位类似，只是它的包含元素是当前浏览器窗口，当通过 left, top, right, bottom属性设置好偏移之后，无论页面如何滚动，它都会固定在同一个位置，适合用于固定浮窗、导航条的布局。

absolute 和 fixed 这种脱离正常文档流的定位方式，会把元素的宽高设置成内容的宽高，可以通过设置 left: 0, right: 0来让宽度占满包含容器，也可以设置 top: 0, bottom: 0来让高度占满包含容器。

## sticky

sticky 是一个比较新的属性，相当于 relative 和 fixed 的结合体，它可以让元素在距离浏览器窗口一定位置时，把它变成固定在这个位置，而其他情况下，就还在正常的文档流中。它也是通过 left, top, right, bottom ，来分别设置距离浏览器容器左、上、右、下多少像素时，把它固定住。

## z-Index

除了 static 默认定位之外，其他定位方式设置了偏移之后很可能会覆盖在其他元素的上边，比如说，一个包含元素中同时有两个 absolute 的元素，那么后定义的 absolute 元素会覆盖在先定义的上边。如果让先定义的在上边的话，可以给它设置一个较大的 z-index 数值来实现。z-index是设置 z 轴方向的偏移，也就是浏览器到人眼的方向，数值大的离人眼近，所以会覆盖在数值小的上边。所有定位的元素，也就是除了 static 之外，都可以通过 z-index 设置 z 轴偏移，它的默认值是0，可以设置正数也可以设置负数。

需要注意的是，如果两个定位元素分别在两个不同的包含元素中， 并且两个包含元素也设置了 z-index 的话，那么这两个元素的堆叠顺序取决于包含元素的 z-index。



好了，这些就是 CSS 的定位方式，有 static, relative, absolute, fixed, sticky 几种方式，它们都有特定的用途，另外我们也介绍了通过 z-index 来设置元素的层叠顺序。你学会了吗？如果觉得视频有帮助请三连并关注，我是峰华，感谢观看！