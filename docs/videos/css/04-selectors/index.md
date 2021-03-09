---
id: css-selectors
title: JS DOM 和 CSS 选择器入门教程
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 选择器（Selector）用于选取 HTML 元素，既可以用于，在 CSS 中，给对应的元素添加样式，也在 JavaScript 中操作 HTML  DOM。由于选择器的用途广泛且重要，所以这个视频整理了常用的选择器的语法规则和效果。
slug: ../css-selectors
keywords:
  - css
  - dom
  - 选择器
  - 前端
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=415480944&bvid=BV1LV411Y7ja&cid=260166104&page=1" bsrc="https://www.bilibili.com/video/BV1LV411Y7ja/"/>

选择器（Selector）用于选取 HTML 元素，既可以用于，在 CSS 中，给对应的元素添加样式，也在 JavaScript 中操作 HTML  DOM。由于选择器的用途广泛且重要，所以这个视频整理了常用的选择器的语法规则和效果。

## 常用选择器？

首先看基础选择器。

### 基础选择器

**类型选择器**。用于直接选择HTML 元素，例如 div，它可以选择 HTML 页面中的所有 div 元素。

**ID 选择器**。如果 HTML 元素设置了 id 属性，可以直接使用 id 选择唯一的元素，使用#加上 id 属性值。例如选择 id 为 container 的元素。

**class 选择器**。可以选择 HTML 元素 class 属性，使用.加 class 属性值。因为相同的 class 名字可以用于多个元素中，所以 class 选择器可以选择多个元素，例如选择class 为 red 的所有元素。

**通用选择器。**通用选择器为*星号，可以选择页面上的所有元素。

**属性选择器。**属性选择器可以按元素属性进行选择，使用[]在里边写上属性和值，它有多种形式，常见的有：1. 直接选择具有某个属性的元素，不管它的值是什么，例如选择有type 属性的元素[type]，2. 属性和值精确匹配，使用属性=值形式，例如选择[type="text"]的元素。3. 选择以指定值开头的属性的元素，使用属性名^=值，例如选择 href 以 http 开头的元素[href^="https"]，与它类似的还有以指定值结尾的，使用$=。4. 选择属性值中任意位置出现指定值的元素，使用属性名\*=值，例如选择 href 中包含 bilibili 字符的元素[href*="bilibili"]。

### 多元素选择器

多元素选择器可以同时使用多个基础选择器，选择多个元素，不同选择器之间使用 , 隔开，例如选择所有 class 为 red 的元素，id 为 container 的元素，以及所有 span 元素。

### 组合选择器

组合选择器用于选择与指定元素有一定关系的元素，它有：

**后代选择器。**用空格隔开的多个选择器，后边的选择器会在前边选择的元素中的子元素中进行选择。例如选择 div 下的所有 class 为 red 的子元素。

**直接后代选择器。**与后代选择器类似，但只选择第一层子元素，使用 > 隔开多个选择器，例如选择 div 下第一层 class 为 red 的子元素。

**邻居选择器。**使用 ~ 隔开，用于选择与前边选择器同级的后续元素，例如选择 div 后边的所有 span 元素。

**直接相邻选择器。**使用 + 隔开，与邻居选择器类似，但只选择紧邻的后续元素，即下一个元素，例如选择 div 下边的第一个 span 元素。

## 总结

好了，以上内容就是选择器相关的介绍，你学会了吗？如果有问题请留言，有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！