---
id: gradient-animation
title: CSS 渐变动画
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 那种首页有好看的渐变背景动画的效果是怎么实现的呢？我们知道 css 的 linear-gradient() 函数不支持对它其中的颜色参数进行动画，还有其它纯 CSS 的方式吗？
slug: ../css-gradient-animation
keywords:
  - css
  - 渐变
  - 动画
  - 特效
  - 前端
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

那种首页有好看的渐变背景动画的效果是怎么实现的呢？我们知道 css 的 linear-gradient() 函数不支持对它其中的颜色参数进行动画，还有其它纯 CSS 的方式吗？

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=543690226&bvid=BV1Xv4y1Z7UW&cid=282779076&page=1" bsrc="https://www.bilibili.com/video/BV1Xv4y1Z7UW/"/>

这里可以利用 background-position 移动背景的位置来实现。假设网站背景有两种渐变色，每种渐变色由两种颜色组成，那么我们可以直接把这 4 个颜色写到 linear-gradient() 中：

```css
background: linear-gradient(
  135deg,
  hsl(170deg, 80%, 70%),
  hsl(190deg, 80%, 70%),
  hsl(250deg, 80%, 70%),
  hsl(320deg, 80%, 70%)
);
```

一开始它会显示所有 4 个渐变颜色，这时我们可以使用 background-size 在 x 和 y 轴方向上把背景尺寸调大 2 倍：

```css
background-size: 200% 200%;
```

接着在动画中使用 background-position 移动背景位置，在 x 轴和 y 轴上分别从 0% 移动到 100%：

```css
@keyframes gradient-move {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}
```

这样就实现了渐变背景色的动画效果了！

是不是很简单？只需结合使用 background-position 和 background-size 就可以了。如果觉得视频有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！