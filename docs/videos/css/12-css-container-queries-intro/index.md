---
id: css-container-queries-intro
title: CSS最新特性 Container Queries 介绍
slug: ../css-container-queries-intro
description: SS Container Queries 是最新的响应式设计方式，通过它，可以方便的对通用的组件，进行响应式设计, 根据容器的尺寸去调整它内部元素的排列，而不是基于浏览器的宽度。
keywords:
  - css
  - container queries
  - css container queries
  - 响应式
  - 容器查询 
  - 前端
  - frontend
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=375963500&bvid=BV1oo4y1C7nJ&cid=349883176&page=1"/>

目前实现响应式布局的最主要的途径是，查询浏览器窗口的可视区域宽度，根据不同的大小设置不同的 CSS 样式，来让元素在不同屏幕大小下，都显示正常。
但是，只靠浏览器可视区域宽度进行响应式设计也有缺点，现在好多的开发都是组件化的，也就是说一个组件可能在多个项目中使用，而每个项目的布局都不一样，在同样的浏览器宽度下，这个组件的所在容器的宽度是不一样的，这样就不能统一进行响应式设计。
CSS Container Queries 的出现，就解决了这样的问题，它可以让我们根据容器的尺寸去调整它内部元素的排列，而不是基于浏览器的宽度。

## 定义示例卡片组件

我们通过一个例子来看它的使用方法。假设我们有一个卡片组件，里边包括一张图片、卡片标题和卡片内容，在卡片容器大于 850px 时，卡片为两列布局，图片在左边，卡片标题和卡片内容在右边。当小于 850px 时，卡片为 1 列布局，图片、标题和内容顺序排列。这里我们看一下关键代码，完整源代码可以查看视频简介的链接。
先来看一下 HTML 结构：

- card-container 为卡片的外层容器。
- card 为卡片本身，里边有 image 图片，title 卡片标题和 content 卡片内容。

```html
<div class="card-container">
  <div class="card">
    <img
      src="https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
    />
    <div class="title">卡片标题</div>
    <div class="content">
      卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
    </div>
  </div>
</div>
```

在 CSS 里：

- 我们把卡片外层容器设置为浏览器宽度的 80%，方便我们后续通过改变浏览器宽度，来测试响应式。
- .card 卡片本身使用 grid 布局，默认为两列，列间距为 18px。
- img 通过设置 grid-row 为 1 / 3，这样让图片跨了 2 行，使它单独占了一列。
- 再给标题设置一下样式

```css
.card-container {
  width: 80vw;
  margin: 0 auto;
}

.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 18px;
  box-shadow: 0 0 24px rgb(0, 0, 0, 0.2);
  padding: 24px;
  margin: 10%;
}

img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  grid-row: 1 / 3;
}

.title {
  font-size: 24px;
  margin: 18px 0;
}
```

完整源代码：

<Codepen title="css container queries" hash="LYWeBzG" />

## 开启 container queries 支持

最新版的 chrome 91 已经支持通过 flags 方式开启 container queries 的支持了，在 chrome 浏览器的地址栏中输入 chrome://flags，然后在搜索框中输入关键字 container queries，然后在 Enable CSS Container Queries 这个选项后面的菜单中，选择 Enabled，这样就开启了 container quries 的支持了。

![chrome://flags](./img/2021-06-08-21-37-54.webp)

## 容器设置

我们需要给容器设置一个 contain 属性，来支持对该容器的宽度进行查询。这里给 .card-container 容器设置 contain 属性，值为 layout inline-size：

- layout 是说容器外部的布局不会影响它内部的布局，反之亦然
- inline-size 是说，容器在宽度上不会被子元素撑开，子元素可以通过 container queries 来获取容器的宽度，调整自己的布局。

```css
.card-container {
  width: 80vw;
  margin: 0 auto;
  contain: layout inline-size;
}
```

## 响应式调整

在给容器设置 contain 属性之后，就可以通过 @container 指令来查询容器的宽度了，它与@media 媒体查询的语法一样，在里边我们定义 max-width: 850px，也就是当容器尺寸在小于 850px 时，子元素的样式，我们在这里设置：

- .card 为 1 列布局。
- img 只占据一行。

```css
@container (max-width: 850px) {
  .card {
    grid-template-columns: 1fr;
  }

  img {
    grid-row: 1;
  }
}
```

可能有同学有疑问，那么 @container 怎么知道是查询哪个容器的宽度呢？它是根据里边的选择器来判断的，我们这里边使用了 .card 和 img，离它最近的容器就是 .card-container 容器，@container 查询的就是它的宽度。另外，如果在@container 里选择了不属于该容器的元素，那么它的就样式不会生效：

```html
<div class="card-container">
  <div class="card">
    <img
      src="https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
    />
    <div class="title">卡片标题</div>
    <div class="content">
      卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
    </div>
  </div>
</div>
<p>test test</p>
```

```css
@container (max-width: 850px) {
  .card {
  }
  img {
  }
  p {
    color: red;
  } /* 不会生效 */
}
```

如果有多个容器设置了 contain 属性，那么是怎么判断查询的是哪个呢？这个同样也是根据 @container 里面的选择器来决定的，但如果两个容器的子元素选择器都是一样的，那么就会默认查询第一个找到的容器，如果要查询其它容器，可以加上容器的 class 进行限定，例如我们再复制一个卡片组件，把第二个容器的 class 设置为 card-container2：

```html
<div class="card-container">
  <div class="card">
    <img
      src="https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
    />
    <div class="title">卡片标题</div>
    <div class="content">
      卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
    </div>
  </div>
</div>

<div class="card-container2">
  <div class="card">
    <img
      src="https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      alt=""
    />
    <div class="title">卡片标题</div>
    <div class="content">
      卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容卡片内容
    </div>
  </div>
</div>
```

然后让 .card-container2 跟 .card-container 设置为一样的布局，在 container queries 中，给第二个卡片容器的 .card 和 img 元素加上 .card-container2 前缀，这样就是查询 .card-container2 的宽度了，我们设置一个不同的宽度，在缩放的时候，可以看到它们变化的时机就不同了：

```css
.card-container,
.card-container2 {
  width: 80vw;
  margin: 0 auto;
  contain: layout inline-size;
}

@container (max-width: 850px) {
  .card {
    grid-template-columns: 1fr;
  }

  img {
    grid-row: 1;
  }
}

@container (max-width: 950px) {
  .card-container2 .card {
    grid-template-columns: 1fr;
  }

  .card-container2 img {
    grid-row: 1;
  }
}
```

## 总结

CSS container queries 还是一个比较新的特性，目测未来会给响应式设计带来非常大的影响，现在先学起来，以后在用到的时候，就不会手足无措了。现在要体验 container queries，如果是 chrome 浏览器需要通过 chrome://flags 来开启支持，之后再设置相应的 css 属性，给容器设置 contain 属性，然后就可以通过 @container 来查询容器的尺寸了。你学会了吗？如果有帮助三连，想学更多有用的前端开发知识，请关注峰华前端工程师，感谢观看！

import Codepen from "@site/src/components/Codepen";