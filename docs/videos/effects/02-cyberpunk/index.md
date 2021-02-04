---
id: effects-glitch
title: CSS 实现赛博朋克按钮色差故障特效
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 玩着玩着游戏，突然想仿一个官网做教程，发现光按钮的特效就够折腾的，那么就先研究一下它是怎么实现的吧，研究结果都在视频里了，源代码在视频简介中。
slug: ../effects-glitch
keywords:
  - css
  - glitch
  - 赛博朋克
  - 特效
  - 前端
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

赛博朋克 2077 官网按钮色差故障实现原理

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=800784077&bvid=BV18y4y1i7oP&cid=270902092&page=1" bsrc="https://www.bilibili.com/video/BV18y4y1i7oP/"/>

最近赛博朋克 2077 是火的一塌糊涂，我身边好多朋友已经深深的陷入其中而不能自拔，到了废弃忘食的境界了，当然我自己也买了这个游戏，但是我的关注点，竟然是官网的按钮特效，这样一个色差故障的效果。我觉得这个效果挺有意思，在研究官网的写法之后，决定自己实现一个类似的效果。

## 步骤

首先来分析一下这个按钮，整体的背景为红色，左下角有一个三角形的缺口，右下角有一个长方形的缺口，里边是代表平台的标签。整个按钮的右侧以及长方形缺口的右侧还有天蓝色的阴影。鼠标移上去的时候，按钮和文字都有色差故障的特效，这个特效看起来像有一个长方形的扫描器在扫描这个按钮，然后还会左右移动，在扫描到文字的时候，文字还会有蓝色和黄色的色差效果。现在来看一下实现它的思路。为了你的眼睛着想，视频里使用了黑色的背景。

### 按钮样式

官网对于按钮缺口的样式的是直接使用了一张 svg 作为背景，不过也可以使用纯 CSS 实现，现在来看一下它的实现原理。按钮默认是一个长方形，我们需要给它添加两个缺口，这就需要使用到 clip-path 属性，clip-path 是用来设置蒙版的，跟 PS 中的功能一样，用它绘制一个形状区域，那么在区域内的部分才能够被看到。它支持 circle()、ellipse()、polygon() 等绘制圆形，椭圆和多边形区域，这里我们使用 polygon()，它接收若干个坐标参数，那么对于一张长方形的图片，它的坐标左上角为 0 0，右上角100% 0， 右下角为 100% 100%，左下角为 0 100%，可以按顺时针的顺序指定多个坐标点来构成蒙版图形。对于这个按钮：起始坐标为 0 0，然后到右边 100% 0，到右下角 100% 100%，到长方形缺口的右下角，这里的 x 坐标应该是最右侧 100% 减去一段偏移距离得出的值，这里指定偏移 25px，而 y 坐标是 100% 不变，所以缺口的第一个点可以用 calc 函数计算出来，也就是 calc(100% - 25px) 100%，第 2 个点，x 坐标不变，y 坐标为 100%减去长方形缺口的高度，这里指定的是 10px，所以它的坐标为 calc(100% - 25px) calc(100% - 10px)，第 3 个点的 x 坐标应该为第 2 个点的 x 坐标减去缺口的宽度，这里指定为 30px，y 坐标与第 2 个点相同，所以它的坐标是 calc(100% - 55px) calc(100% - 10px), 第 4 个点 x 坐标与第 3 个相同，y 坐标为 100%，所以它的坐标是 calc(100% - 55px) 100%，接着到了三角形缺口，它的第 1 个点的 x 坐标应该是距离最左边的 0 有一段偏移距离，这里指定为 20px，所以它的坐标为 20px 100%，第 2 个点的坐标则是 0 calc(100% - 20px)。这样根据蒙版的形状，按钮就只会显示这个形状里边的部分。对于按钮右侧的天蓝色阴影，它不能直接使用 box-shadow 来定义，因为缺口处和右侧的阴影超出了蒙版的范围，是不可见的，所以这里需要换一种思路，我们使用 before 和 after 伪元素设置两个一样的蒙版形状，before 的背景设置为阴影的颜色，after 伪元素设置为按钮的颜色，然后把 before 元素向右偏移 2px 就可以了。

按钮的文字直接设置一下样式，显示为白色， 它 z-index 应该高于所有的元素。缺口中的文字也比较简单，直接使用绝对定位移动到缺口位置中间就可以了。

### 色差故障动画原理

接下来看色差故障动画的实现原理。按钮的横条扫描效果其实也是使用 clip-path 圈出一个长方形的部分。为了演示，视频里使用一个其它颜色的长方形来表示这块蒙版，之后在动画的每个阶段改变它的位置和高度，再对按钮背景进行左右偏移来实现晃动的效果。由于我们不能直接对原按钮进行移动，所以需要使用一个新的元素，占满整个按钮空间，背景色设置为同样的红色，再使用内阴影加上色差的效果，把它放在原按钮的上方，以及按钮文字的下方，然后对它进行动画。

```
20% {
  clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
}
25% {
  clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
  transform: translate3d(-5px, 0, 0);
}
28% {
  clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
  transform: translate3d(-5px, 0, 0);
}
29% {
  clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
  transform: translate3d(5px, 0, 0);
}
```

文字使用和按钮背景相同的动画，只是文字也需要复制一份，用于在进行动画时展示色差故障的部分，给新复制的文字添加上 text-shadow 文字阴影，分别设置蓝色和黄色两种阴影，并调整一下偏移，再给复制后的文字添加上相同的动画就可以同步进行了。源代码可以参考视频简介中的 Github 仓库。

### 代码

在了解了色差故障实现原理之后来看一下代码，首先是 html 结构：

```
<div class="button">
  <div class="glitch"></div>
  <div class="text" data-text="开始游戏">开始游戏</div>
  <span class="platform">R25</span>
</div>
```

button 是按钮元素的容器，glitch 为执行色差故障动画的元素，text 中的 data-text 用于在 css 中引用它的值来复制文字内容，platform 是尾部缺口中的平台标识文字。

再来看 CSS 代码，.button 按钮的样式主要是设置了宽高，并居中里边的文字：

```
.button {
  width: 300px;
  height: 80px;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}
```

接下来在定义 before、after 伪元素和.glitch 元素的通用样式，它们分别表示的是按钮蓝色阴影，按钮红色背景，以及执行动画的红色背景，这里让它们占满按钮空间，然后使用 clip-path 形成缺口部分：

```
.button::after,
.button::before,
.glitch {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 100%,
    calc(100% - 25px) 100%,
    calc(100% - 25px) calc(100% - 10px),
    calc(100% - 55px) calc(100% - 10px),
    calc(100% - 55px) 100%,
    20px 100%,
    0 calc(100% - 20px)
  );
}
```

接着设置阴影颜色，并向右偏移 2px：

```
 .button::before {
   left: 2px;
   background: hsl(180, 100%, 50%, 50%);
}
```

再设置背景颜色：

```
.button::after {
  background: hsl(0deg, 100%, 60%);
}
```

设置动画背景的颜色和内阴影以及 z-index，让它位于按钮的上方、文字的下方，透明度设置为 0，初始是不可见的：

```
.glitch {
  background: hsl(0deg, 100%, 60%);
  box-shadow: 0 0 0 1px hsl(180, 100%, 50%) inset;
  z-index: 10;
  opacity: 0;
}
```

设置按钮文字的样式，设置较大的 z-index 让它位于最上方：

```
.text {
  font-size: 24px;
  font-weight: 800;
  color: white;
  position: relative;
  z-index: 15;
}
```

使用 before 伪元素复制一份文字，使用 attr()函数访问 text 元素中的 data-text 属性的值，然后用 text-shadow 设置色差效果：

```
.text::before {
  content: attr(data-text);
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  text-shadow: 1px 1px hsl(180, 100%, 50%),
    -1px -2px hsl(50deg, 100%, 60%);
  opacity: 0;
}
```

接着调整平台标识文字到缺口处：

```
.platform {
  position: absolute;
  right: 28px;
  bottom: -4px;
  font-size: 10px;
  letter-spacing: 1px;
  font-weight: 500;
}
```

当按钮 hover 时，给 glitch 和 text::before 添加动画，并把透明度设置为 1：

```
.button:hover .glitch,
.button:hover .text::before {
  animation: glitch-effect 2s infinite;
  opacity: 1;
}
```

动画的代码是这样的：

```
@keyframes glitch-effect {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 2%, 0 2%);
  }
  5% {
    clip-path: polygon(0 8%, 100% 8%, 100% 16%, 0 16%);
  }
  10% {
    clip-path: polygon(0 80%, 100% 80%, 100% 88%, 0 88%);
    transform: translate3d(-5px, 0, 0);
  }
  15% {
    clip-path: polygon(0 80%, 100% 80%, 100% 88%, 0 88%);
    transform: translate3d(5px, 0, 0);
  }
  16% {
    clip-path: polygon(0 80%, 100% 80%, 100% 88%, 0 88%);
    transform: translate3d(5px, 0, 0);
  }
  17% {
    clip-path: polygon(0 90%, 100% 90%, 100% 100%, 0 100%);
    transform: translate3d(5px, 0, 0);
  }
  18% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
  20% {
    clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
  }
  25% {
    clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
    transform: translate3d(-5px, 0, 0);
  }
  28% {
    clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
    transform: translate3d(-5px, 0, 0);
  }
  29% {
    clip-path: polygon(0 30%, 100% 30%, 100% 65%, 0 65%);
    transform: translate3d(5px, 0, 0);
  }
  30% {
    clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
  }

  40% {
    clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
  }
  42% {
    clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
    transform: translate3d(-5px, 0, 0);
  }
  45% {
    clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
    transform: translate3d(5px, 0, 0);
  }
  48% {
    clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
    transform: translate3d(-5px, 0, 0);
  }
  50% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
  60% {
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
  }
  100% {
    clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%);
    transform: translate3d(0, 0, 0);
  }
}
```

可以看到动画里基本上就是改变 clip-path 的 y 坐标，让它移动位置和改变大小，然后使用 translate3d() 改变背景的左右偏移， translate3d()会比直接使用 translateX()的性能高一点，因为它会开启 GPU 加速。



好了这个就是色差故障动画的实现原理，其中 clip-path 和元素的层叠与复制是重点，学会了这些就能利用它们创造更有创意的特效。是不是觉得复杂的动画在拆解出来之后变得简单了呢？。如果觉得视频有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！