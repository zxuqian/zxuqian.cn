---
id: flex-layout
title: CSS Flex 布局
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: CSS Flex 布局 2分钟动画快速掌握。
slug: ../css-flex-layout
keywords:
  - css
  - flex
  - grid
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=99087136&bvid=BV1P7411m7Nu&cid=169577939&page=1" bsrc="https://www.bilibili.com/video/BV1P7411m7Nu/"/>

Flexbox 是一维布局方式，按行或按列。它解决了元素对齐、分布和响应式的问题。

### 开启 flex

开启 flex 布局只需要给外层容器设置

```css
display: flex
```

它的直接子元素就会默认按行进行排列。

### 轴

在行模式下，有一条水平方向的主轴和一条垂直方向的交叉轴。子元素会从flexbox 容器左上角开始，从左到右依次排列，即主轴最左边，交叉轴的最上边。

#### 改变主轴布局

改变主轴方向的布局使用`justify-content`属性，例如：

靠右对齐

```css
justify-content: flex-end;
```

居中对齐：

```css
justify-content: center;
```

平分空间：

```css
justify-content: space-evenly;
```

两端对齐：

```css
justify-content: space-between;
```

#### 改变交叉轴布局

改变交叉轴方向的布局使用`align-items`属性，例如：

靠下对齐：

```css
align-items: flex-end;
```

居中对齐：

```css
align-items: flex-end;
```

### 列模式

在列模式下，主轴变成了交叉轴、交叉轴变成了主轴，其他的设置项跟行模式一样。

### 比例

非固定尺寸的子元素，可以通过设置 `flex` 属性调整空间的占比。默认都是1，平分空间，如果把第二个元素设置成:

```css
flex: 2
```

则会占据2/3的空间。

## 结束

好了，这就是今天的2分钟掌握 CSS flexbox 布局，你学会了吗，有问题欢迎在评论区留言，我是峰华，感谢观看！
