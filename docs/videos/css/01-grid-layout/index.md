---
id: grid-layout
title: CSS Grid 布局入门教程
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: CSS Grid 布局 2分钟动画快速掌握。
slug: ../css-grid-layout
keywords:
  - css
  - flex
  - grid
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=100672644&bvid=BV18p411A7JB&cid=171656332&page=1" bsrc="https://www.bilibili.com/video/BV18p411A7JB/"/>

css grid 布局是二维布局方式，可以同时控制行和列的排布和对齐方式。

grid 由水平线和垂直线构成，两条水平线中间的区域叫做**行轨道**，两条垂直线中间的区域叫做**列轨道**。

## 开启 grid 布局

要开启 grid 布局只需要给外层容器设置：

```css
display: grid;
```

容器的直接子元素就会自动成为 grid 布局的元素。

## 改变布局

例如，一个容器，包含 6 个子元素。把它改成 3 列布局，可以使用`grid-template-columns`属性，指定每列的宽度，可以是固定宽度：

```css
grid-template-columns: 100px 100px 100px;
```

也可以用 fr 指浮动宽度：

```css
grid-template-columns: 1fr 1fr 1fr;
```

`fr`是 grid 布局专用单位，代表 grid 剩余空间，这里三列各占 3 分之一。

如果把第二列改为 2fr，则会占据 1/2 的空间。

## 设置 gap

给 grid 设置间距可以通过 column-gap 属性设置列间距

也可以通过 row-gap 设置行间距

或使用 gap 属性统一设置。

## grid template area

排列元素我们可以使用 grid-template-area 属性。比如有一个页面，头部和底部宽度占满全屏，侧边占 1/3，内容占 2/3，我们可以指定这样的区域：

```css
grid-template-areas:
  "header header header"
  "sidebar content content"
  "footer footer footer";
```

然后各个元素分别指定对应的区域：

header:

```css
grid-area: header;
```

aside:

```css
grid-area: sidebar;
```

main:

```css
grid-area: content;
```

footer

```css
grid-area: footer;
```

## 对齐

grid 对齐方式跟 flexbox 布局类似，有水平方向的行轴，和垂直方向的块轴。

在垂直方向上对齐子元素可以使用 align-items 属性，例如居中对齐：

```css
align-items: center;
```

靠下对齐：

```css
align-items: end;
```

在水平方向上对齐子元素可以使用 justify-items 属性，例如：

居中对齐：

```css
justify-items: center;
```

靠右对齐：

```css
justify-items: end;
```

两端对齐：

```css
justify-items: space-between;
```

如果行轨道和列轨道的尺寸小于 grid 容器，还可以对轨道进行对齐，在垂直方向上，使用 align-content 属性，例如:

居中对齐：

```css
align-content: center;
```

靠下对齐：

```css
align-content: end;
```

在水平方向上使用 justify-content 属性，例如：

居中对齐：

```css
justify-content: center;
```

靠右对齐：

```css
justify-content: end;
```

两端对齐：

```css
justify-content: space-between;
```

好了，这就是今天的 2 分钟掌握 css grid 布局，你学会了吗？有问题请在评论区留言，我是峰华，感谢观看。
