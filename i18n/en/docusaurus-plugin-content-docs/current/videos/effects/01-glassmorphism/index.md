---
id: effects-glassmorphism
title: CSS 玻璃特效
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 之前我做过这样一期视频，实现一个毛玻璃特效的登录表单。当时的思路是这样的，首先有一个原始的背景图片，在它上面再放上一张一模一样的图片，然后给他设置模糊滤镜，再用一个圆角矩形的框，把它作为蒙版，把图片超出的部分给隐藏掉，只显示表单这一块区域所用到的部分，然后再给它设置一个内部的阴影，让它看起来有一个玻璃反光的效果，这样就有了玻璃特效。这个是比较原始的方式。
slug: ../css-glassmorphism
keywords:
  - css
  - glassmorphism
  - backdrop-filter
  - 特效
  - 前端
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

2 行代码实现毛玻璃特效 Glassmorphsim，附代码生成工具推荐

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=500642727&bvid=BV1GK411G7ws&cid=268174683&page=1" bsrc="https://www.bilibili.com/video/BV1GK411G7ws/"/>

之前我做过这样一期视频，实现一个毛玻璃效果的登录表单。当时的思路是这样的，首先有一个原始的背景图片，在它上面再放上一张一模一样的图片，然后给他设置模糊滤镜，再用一个圆角矩形的框，把它作为蒙版，把图片超出的部分给隐藏掉，只显示表单这一块区域所用到的部分，然后再给它设置一个内部的阴影，让它看起来有一个玻璃反光的效果，这样就有了玻璃特效。这个是比较原始的方式。

现在 css 有了一个新的属性叫 `backdrop-filter` ，它可以给一个元素的所有底层元素设置一个滤镜。那因为是给底层元素设置滤镜，所以说这个元素的背景必须是带透明度的，才能到效果。那么这样结合 `backdrop-filter` 和 `background` 这两个属性的，就可以把咱们后边的背景图片，设置成一个毛玻璃的效果。

`backdrop-filter`里面可以设置多种类型的滤镜，比如说模糊，亮度和对比度，那咱们这次用 `blur` 设置模糊，咱们现在给它的模糊半径设置为8 像素，背景颜色设置为白色带一点透明度，这样呢它就有了一个毛玻璃的效果。是不是很简单呢？这个毛玻璃效果在英文里边又叫glass morphism 玻璃态设计，微软的 fluent design 设计系统，还有苹果最新出的 MacOS Big Sur 都有这种毛玻璃的效果，那么以后未来可能也会成为网页设计的趋势。

另外，网上也有一个毛玻璃效果生成器。可以访问 https://glassmorphism.com/ 他这个网站呢，可以调这个毛玻璃的效果的颜色，还有模糊半径，以及它的背景透明度。之后右边他生成的这个 css 代码就可以直接复制粘贴并使用了。

最后这个属性在最新版的 chrome、Edge、safari 都已经支持了，Firefox 则需要在设置中开启 backdrop-filter 的支持，IE11 不支持这个属性。

好了，这个就是两行代码实现毛玻璃特效，你学会了吗？有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！