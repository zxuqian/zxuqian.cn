---
id: css-common-properties
title: CSS 常用样式属性
slug: ../css-common-properties
description: CSS 对于页面元素的美化，都有特定的套路，我们需要熟记一些 CSS 常用的属性才能快速并且优雅的实现复杂的样式。这个视频就给大家介绍一下 CSS 经常用到的一些样式属性。
keywords:
  - css
  - properties
  - props
  - 样式
  - 属性
  - 前端
  - frontend
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=839129631&bvid=BV1654y1m76w&cid=224360189&page=1"/>

CSS 对于页面元素的美化，都有特定的套路，我们需要熟记一些 CSS 常用的属性才能快速并且优雅的实现复杂的样式。这个视频就给大家介绍一下 CSS 经常用到的一些样式属性。

## 文本与段落

首先我们先来看与文本和段落有关的属性，这些非常重要，因为无论是网站还是 App 都是通过内容来传递信息的，文本样式的好坏直接影响了信息传递的效率。

**加载本地字体** 

在 CSS 中，加载本地字体使用 `font-family`  属性，通常按照从特殊到一般的顺序定义，因为 CSS 会从列表的第一个开始寻找支持的字体。比如网站中的英文字体使用 Arial，中文字体使用微软雅黑，那么中文字体就需要放到后边，因为微软雅黑也包括英文字体，如果放到第一位，就不会再去使用 Arial 字体了。要注意的是如果字体名字中间有空格，那么需要加上双引号。最后一般会设置一个保底选项，比如 sans-serif，使用默认的无衬线字体。

**加载 web font** 

除了加载本地字体外，CSS 也可以加载 web 字体，使用@font-face 指令，然后在里边指定字体的名字和 url 路径，可以是本地的也可以是网络上的，之后就可以在其他样式中使用 font-family 来加载这个字体了。

```css
@font-face {
  font-family: "webfont";
  src: url("webfont.woff");
}

font-family: "webfont";
```

**颜色**

设置字体颜色使用 `color`  属性。

**大小**

设置字体大小使用 `font-size`  属性。

**字符间距**

设置字符间距使用 `letter-spacing`  属性。

**文本方向**

设置文本方向使用 writing-mode 属性，可以使用 `vertical-rl`  设置为垂直方向，从右向左阅读，结合 `text-orientation`  属性，可以让文本保持竖直或倾斜。

**文本样式**

设置文本样式可以使用 `text-decoration`  属性，如设置为 none 可以取消超链接的下划线。另外也可以设置 `overline`  上划线， `line-through`  中划线，并且可以设置多个。还可以设置线的形状和颜色。

下边来看段落样式，这些样式应用于多行文本。

**行间距**

设置行间距使用 `line-height`  属性。

**缩进**

设置缩进可以使用 `text-indent`  属性。

**折行**

控制文本换行可以使用 `white-space`   属性，nowrap 为不换行。

**省略**

设置文本省略需要把 `white-space`  设置为 nowrap 不换行，再设置 `overflow`  为 hidden，隐藏超出部分，最后设置 `text-overflow`  为 ellipsis 显示省略号。

**对齐**

设置文本对齐方式可以使用 `text-align`  属性，可以是靠左对齐、靠右对齐、居中对齐和两端对齐。

## 背景

**设置背景颜色**

设置背景颜色使用 `background-color`  属性，可以设置 16 进制颜色，也可以使用颜色函数 rgb、rbga(带透明度的)、linear-gradient (渐变色) 设置颜色（应该在 `backgound-image` 或 `background` 缩略形式中设置）。

**加载背景图片**

加载背景图片使用 `background-image`  属性，通过 url 函数加载本地或者远程的图片。

**调整背景尺寸**

调整背景尺寸可以使用 `background-size`  属性，如果尺寸小于容器，会自动进行平铺。

**调整背景填充**

调背景图片填充样式使用 `background-repeat`  属性， `no-repeat`  代表不重复平铺，还可以分别设置 repeat-x, repeat-y 来设置在水平方向上或垂直方向上平铺。

**调整背景位置**

背景图片加载之后，可以通过 `background-position`  属性设置图片的位置，可以靠上、靠下、居中，也可以设置具体的数值，并且可以设置多个值。雪碧图通常是使用这个属性来实现的。

**调整背景拉伸**

调整图片拉伸可以使用 `background-size`  属性，设置为 `contain`  会把图片缩放到占满整个容器，并且不会发生扭曲或者裁剪，但是可能会留白。设置为 cover 也会让图片尽可能占满整个容器，但是会把超出容器的部分裁剪掉。

最后这些属性可以统一在 `background`  简写形式中设置。

## Overflow

元素的宽高默认会根据内容自动进行调整，如果元素宽高固定，要隐藏超出内容或者显示滚动条的话，可以通过 `overflow`  属性设置超出内容的显示方式，默认为 `visible`  显示，即使超出了最大宽度或高度。 `hidden`  为不显示。 `scroll`  则会显示滚动条。另外可以分别设置 `overflow-x`  和 `overflow-y`  属性来设置超出固定宽度或固定高度后的内容表现形式。

## 边框

给元素设置边框可以使用 `border`  这个简写形式，分别可以设置 `border-width`  边框宽度， `border-style`  边框样式，可以是 solid 实线、dotted 虚线， `border-color`  边框颜色。另外也可以使用 `border-top` , `border-top-style`  这种分别设置单一边框的样式。

## 阴影

给元素设置阴影可以使用 `box-shadow`  属性，后边的值分别是水平偏移，垂直偏移，模糊半径，和扩散半径。另外也可以使用逗号间隔设置多个阴影。

## 指针

设置指针可以使用 `cursor`  属性， `pointer`  是小手形状， `wait`  是等待效果，还有一些其它内置的指针。另外也可以使用 url 函数加载自定义的指针图片，并设置 x, y 坐标来确定指针区域。

## 列表

更改无序列表的样式，可以设置 `list-style`  属性，可以设置为 `square`  方形，也可以使用 url() 函数加载自定义的图片。

好了，这些就是 CSS 常用的样式属性，现在你大体知道有哪些了，在看到设计稿的时候，应该就知道某个样式具体该怎么实现了。接下来可以在 [w3schools](https://www.w3schools.com/) 或 [MDN](https://developer.mozilla.org/en-US/) 上查看他们更详细用法，实现更复杂的样式。如果感觉视频有帮助，请三连并关注，我是峰华，感谢观看！
