---
slug: css-is-pseudo-class-selector
title: CSS :is() 伪类选择器使用指南
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
description: css :is() 伪类选择器还是一个正在逐步规范化的新特性，所以在使用上也需要注意一下变动，总之，它可以让我们减少编写重复选择器的次数，实现像 SASS/Less 等 CSS 预处理编译器类似的嵌套语法。
tags: [css, selectors, is, css选择器, is选择器]
activityId: "533932840843140885"
oid: "138305326"
---

在使用 CSS 编写页面样式的时候，你是不是写过类似的代码：

```css
li a,
artcile a,
section a {
  color: #000000;
}
h1 a,
h2 a,
h3 a {
  color: blue;
}
```

为了给一篇文章中，不同位置的超链接设置不同的颜色，需要在多个选择器中，重复的选择 `a`  元素，如果是其它名字比较长的元素或者 class，那么写起来会特别麻烦，稍加不注意就会写错。

<!-- truncate -->

## 使用 CSS :is() 伪类选择器

CSS 中的 :is() 伪类选择器 （Pseudo Class）就解决了这样的问题，它可以匹配一组选择器中的任意一个或多个，并把最终的选择器视为匹配到的那一个。对于上边的例子，我们可以把前边变化的选择器交给 :is() 去选择，而后边的 a 只需要写一次：

```css
:is(li, article, p) a {
  color: #999999;
}

:is(h1, h2, h3) a {
  color: green;
}
```

这样写就简单多了，`:is(li, article, p) a` 会选择 `li`、`article` 或 `p` 下的 `a` 元素，效果和分开写是一样的，是不是跟 SASS/Less 中的嵌套选择有些类似？

:is() 也可以用于各种选择器的组合中，例如子节点选择器、邻居节点选择器等，下边的代码展示了选择子节点的方式：

```css
:is(article, p) :is(h2, li) a {
  color: #ff3344;
}
```

展开就等于：

```css
article h2 a,
article li a,
p h2 a,
p li a {
  color: #ff3344;
}
```

完整代码和示例：

<Codepen title="css :is() 伪类选择器" hash="qBrjgpN" />

## 与其它伪类选择器结合

假设有一个需求，当一个文章所有的 h1-h6 标题，hover 的时候，在后面加上一个 "#"，如果使用传统的方式，我们会写成：

```css
h1:hover::after,
h2:hover::after,
h3:hover::after,
h4:hover::after,
h5:hover::after,
h6:hover::after {
  content: "#";
}
```

如果使用 :is() 伪类选择器，则可以写成：

```css
:is(h1, h2, h3, h4, h5, h6):hover::after {
  content: "#";
}
```

是不是简单多了？所有的元素、:hover 伪类选择器、::after 伪元素选择器都只需要写一次。

代码示例：

<Codepen title="css :is() 伪类选择器" hash="gOmRqGo" />

## 兼容性

css :is() 伪类选择器还是一个正在逐步规范化的新特性，所以在使用上也需要注意一下变动。:is() 伪类选择器的兼容性可以参考下表：

![css :is() 伪类选择器兼容性](./img/2021-06-07-css-is-pseudo-class-selector/2021-06-07-14-04-18.webp)

## 总结

css :is() 伪类选择器可以让我们减少编写重复选择器的次数，实现像 SASS/Less 等 CSS 预处理编译器类似的嵌套语法。如果文章有帮助，可以通过浏览器（网站），或微信分享（公众号），感谢！

import Codepen from "@site/src/components/Codepen";