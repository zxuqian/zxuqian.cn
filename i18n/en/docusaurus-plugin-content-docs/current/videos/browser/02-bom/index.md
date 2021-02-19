---
id: what-is-bom
title: BOM 简介
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: BOM，全称是 Browser Object Model，浏览器对象模型。它不是官方的命名，也没有统一的标准，只是对浏览器提供的 API 的统称。BOM 提供的 API 都放到了 window 全局对象中，它代表当前浏览器窗口。 而 DOM 也属于 BOM 的一部分，因为 window 也包括 document 对象。
slug: ../what-is-bom
keywords:
  - JavaScript
  - bom
  - html
  - browser
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=670351065&bvid=BV1Qa4y1p7rC&cid=257703470&page=1" bsrc="https://www.bilibili.com/video/BV1Qa4y1p7rC/"/>

## 什么是 BOM？

BOM，全称是 Browser Object Model，浏览器对象模型。它不是官方的命名，也没有统一的标准，只是对浏览器提供的 API 的统称。BOM 提供的 API 都放到了 window 全局对象中，它代表当前浏览器窗口。 而 DOM 也属于 BOM 的一部分，因为 window 也包括 document 对象

## 常用的操作？

那常见的 BOM API 有哪些呢？

### 弹窗

首先有弹窗相关的 API。在刚学习 JS 的时候，我们经常会使用 alert() 函数打印变量的值，它会弹出一个警示框，内容是 alert 参数的值。

另一个是 pompt() ，用于弹出确认对话框，用户可以输入自定义内容，点击确认或取消都会有相应的回调事件。

### 窗口属性

再有是窗口属性。因为 window 代表浏览器当前窗口，我们可以通过 innerWidth 和 innerHeight 属性来获取 显示 HTML 页面 部分的宽高。还可以通过 open() 和 close() 打开和关闭浏览器窗口或 tab 选项卡。

### location 属性

window 对象中有一个 Location 属性，用于 URL 相关的操作。它有这样几个常用的属性：

- href：获取当前页面的 url，或者跳转到新的 url。
- hostname：获取 url 中的主机部分。
- pathname: 获取 url 中的路径部分。
- reload()：刷新当前页面

### history 属性

历史相关的操作在 window 的 history 属性中，可以使用 back()、forward() 、go() 方法来实现浏览器的后退和前进功能，也可以使用 pushState()和 replaceState() 手动添加、替换历史记录，并保存状态。

### Navigator 属性

Navigator 包含了用户浏览器相关的信息，可以获取 userAgent、设备地理位置（geolocation）、是否启用了 cookie (isCookieEnabled)等。

### Screen 属性

Screen 属性包含了用户屏幕相关信息，例如宽度（width）、高度（height）、朝向（Orientation）等。


除了这些属性之外，window 还包括其它很多有用的属性，这些可以在 MDN 文档上查到，并且有详细的使用说明。好了，以上就是浏览器对象模型 BOM 的介绍，你学会了吗？如果有问题请留言，有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！