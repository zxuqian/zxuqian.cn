---
id: css-transition-keyframes-intro
title: CSS 过渡和动画属性
slug: ../css-transition-keyframes-intro
description: 自从 CSS 支持动画属性之后，网站应用的用户体验变得更加丰富了。通过动画视觉效果可以引导用户的关注焦点，获得流畅的心理感受并且更容易理解网站的功能。另外使用 CSS 动画属性，比使用 JavaScript 性能更好，浏览器可以减少不可见的选项卡的动画的执行速度。CSS 中实现动画效果有两种方式，一种是使用 `transition` 过渡属性，另一种是使用 `@keyframes` 定义关键帧动画。我们先来看一下 transition 属性。
keywords:
  - css
  - transition
  - keyframes
  - 过渡
  - 动画
  - 前端
  - frontend
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=711649447&bvid=BV1eD4y1U7uK&cid=224360932&page=1"/>

自从 CSS 支持动画属性之后，网站应用的用户体验变得更加丰富了。通过动画视觉效果可以引导用户的关注焦点，获得流畅的心理感受并且更容易理解网站的功能。另外使用 CSS 动画属性，比使用 JavaScript 性能更好，浏览器可以减少不可见的选项卡的动画的执行速度。CSS 中实现动画效果有两种方式，一种是使用 `transition` 过渡属性，另一种是使用 `@keyframes` 定义关键帧动画。我们先来看一下 transition 属性。

## transition

在 CSS 中，属性的变化都是立即生效的，比如定义鼠标移过按钮时，改变按钮的背景颜色，那么这个变化会很突兀，这时可以使用 `transition` 属性，可以让初始值和最终值的变化，有一定的过渡时间，这样可以使视觉效果更加流畅。可以进行过渡的属性一般是数值型的，比如宽高、间距、颜色等。我们继续来看改变按钮背景颜色的例子。首先给按钮加上`transition`属性：

```css
transition: background 1s linear 0s;
```

四个值分别表示：

- 要过渡的属性
- 过渡时间
- 时间函数，时间函数定义了中间值的计算方法，可以在[easings.net](https://easings.net/)查看常用时间函数的动画效果
- 延迟时间，延迟多久之后执行过渡
  如果想过渡全部属性，可以把 `background` 改成 `all`。

```css
transition: all 1s linear 0s;
```

如果想分别设置多个不同的属性的过渡效果，可以使用逗号分隔：

```css
transition: background 1s linear 0s, font-size 1.5s ease-in;
```

需要注意的是，过渡是一次性的，不能循环，如果需要循环展示动画，那么就需要定义`@keyframes`关键帧动画。

## 关键帧动画

关键帧动画可以用来实现更复杂的动画效果，可以设置多个关键帧来控制不同时间下，动画属性的值。

### @keyframes

关键帧使用 `@keyframes` 关键字定义，它使用百分比代表动画执行的进度，开始`0%`可以使用 `from`关键字表示，结束`100%`可以使用`to`关键字表示。来看一个例子，如果让一个矩形框旋转并改变背景颜色，使用 @keyframes 关键字，然后定义动画的名字，在 from 里设置初始属性，在 to 里设置最终属性。并且在执行到 80%的时候让它只旋转到 15deg，后面直接旋转到 360 度：

```css
@keyframes rotate {
  from {
    transform: rotate(0deg);
    background-color: red;
  }
  80% {
    transform: rotate(15deg);
  }
  to {
    transform: rotate(360deg);
    background-color: blue;
  }
}
```

在定义完 keyframes 之后，那就需要把它应用到执行动画的元素中，这里要用到 animation 属性。

### animation

在一个需要执行这个动画的元素里添加 `animation` 属性，它是一个简写形式，常用的设置项有：

- animation-name. 要使用的 @keyframes 的名字
- animation-duration. 动画执行时长
- animation-timing-function. 动画时间函数
- animation-delay. 动画执行延迟
- animation-iteration-count. 动画执行次数，可以设置数字，或者`infinite`来让它循环执行
- animation-direction. 动画执行方向，默认是从开始到结束，还可以设置`reverse`反向执行，`alternate`交替执行等。
  我们给一个矩形 div 元素加上 animation 属性：

```css
animation: rotate 2s ease-in-out 0s infinite;
```

它就能够有动画效果了。

好了，这个就是实现 CSS 动画的两种方式，一个是 transition 另一个是 @keyframes，你学会了吗？如果觉得视频有帮助，请点赞并关注，我是峰华，感谢观看！
