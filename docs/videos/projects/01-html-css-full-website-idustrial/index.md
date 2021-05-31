---
id: html-css-full-website-idustrial
title: 创建一个工业风的网站 | HTML & CSS 入门教程
slug: ../html-css-full-website-idustrial
description: 这是一个 ‌入门级的网站，‌ 只涉及到了简单的 html 和 CSS 的基本知识，‌‌ 适合初学者入门。这是一个 PC 端的 web 页面，‌ 我们主要通过这一个项目来了解一下。
keywords:
  - html
  - color
  - grid
  - place-items
  - 前端
  - frontend
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=802987324&bvid=BV1my4y1p7PT&cid=335673948&page=1"/>

今天我们来做一个这样的工业风的网站：

![img](./img/2021-05-22-21-08-09.webp)

## 网站构成

首先我们来看一下这个网站的构成：

- 它左上角有一个 logo，右边是导航，导航右边有一个登录按钮。
- 中间的左边是这个网站的一些文案，有标题，‌‌ 还有一段描述。‌‌ 下面有一个注册按钮。
- 右边这个大图因为它的线条跨过了整个容器，所以我们需要给它设置整个页面的宽高。
- 下面 footer 区域有这样 4 个社交网站的图标，底下有一条黄线，‌‌ 为了简单期间，footer 的背景和上面的图片是连到一起的。

## 编写 HTML

现在来看一下如何编写这样一个网站。‌‌如果对 HTML 不熟，可以查看[《HTML 网页制作基础入门教程》](../../html/01-html-basics/index.md)。先打开 vs code，‌‌我这里先把一些图片素材复制过来，‌‌ 主要就是一些社交图标，‌‌‌还有首页大图，index.html是首页的代码，现在这个是已经完成了的示例，‌‌把它的内容删除‌‌，一会儿带大家一起写。‌‌style.css 里边的内容，我们也都删掉。

### 导航

好，‌‌ 那第 1 步就先写这个头部的 logo 还有导航的结构 ‌，‌ 我们来看一下 html 代码：

```html
<div class="container">
  <header>
    <img src="./assets/images/logo.svg" alt="" />
    <nav>
      <a href="">首页</a><a href="">产品</a><a href="">服务</a>
      <button class="btn">登录</button>
    </nav>
  </header>
</div>
```

因为整个网站距离两边都有一些空白的边距，那么我们需要把它先放到一个容器里边，方便我们调整边距，‌‌ 这里定义一个 div，class 名字为 container。接下来看头部的结构，‌ 我们用 `<header />`  语义化的标签来代表头部，‌ 它里边有一个 logo，我们用 `<img />`  标签来把 logo 加载进来，‌‌src 就是 assets 下面的 images 里边的 logo.svg。‌‌
接下来是导航，我们用 `<nav />`  这个标签，‌‌ 里边定义一些超级链接，‌‌ 使用 a\*3 生成 3 个 a，‌‌ 这个 href，‌‌ 因为我我们没有别的页面，所以就先不写了，给它们的文本写上：‌‌ 首页、‌‌ 产品和服务，后面还有一个登录，我们用一个 `<button>`  来表示，‌‌ 给它一个 class 名字叫 btn、‌‌ 文本为登录，‌ 这个就是头部的结构，‌‌ 看一下运行效果，‌‌ 那么就是这样一个简单的结构。

### 主要内容区

接下来是咱们的主要内容区域：

```html
<main>
  <div class="mainLeft">
    <h1 class="headerline">对未来世界信息的展望</h1>
    <p class="description">
      现今的信息技术水平极速发展，极大的影响了人们生活的方方面面，手机似乎已经成为了人们的“伴侣”，我们用手机查看地图出行，提醒日常任务，与世界各地的人联络...
    </p>
    <button class="btn">注册</button>
  </div>
</main>
```

我们用一个 `<main />`  元素来表示，‌‌ 里边的内容分为左边和右边，左边是网站文案，右边是大图，其实这个右边大图占了整个全屏，但是因为它在右边，所以说我们还是把它叫做右边部分。我们来看一下它的代码的结构。
首先定义一个左侧的容器，‌‌ 给它一个 class 名字叫 mainLeft，‌‌ 里面大的标题文字用 `<h1 />`  来表示，‌‌class 名字为 headline，‌‌ 把这个文案复制过来，‌‌ 标题下边的简介，我们用 `<p/>`  标签来表示，‌class 名字叫 description，‌ 把这个文案 也复制过来。‌‌ 简介的下边是一个注册按钮，‌ 用跟登录按钮一样的 class 名字 ‌，来统一设置样式，后面再来单独设置一下背景颜色。现在预览一下，就是这样的一个结构。

### footer

再来看一下底部，就是这些社交图标，我们来看一下它的结构：

```html
<footer>
  <div class="socialMedia">
    <img src="./assets/images/wechat.svg" alt="" />
    <img src="./assets/images/github.svg" alt="" />
    <img src="./assets/images/email.svg" alt="" />
    <img src="./assets/images/bilibili.svg" alt="" />
  </div>
</footer>
```

在 `<main />`  的下边，用 `<footer/>`  标签来表示底部的信息，在里边定义个 class 为 socialMedia 的 `<div/>`  容器，里边有 4 个社交图标，那我们用 img \* 4 创建 4 个 `<img/>` 标签：‌‌ 第 1 个是微信，‌‌ 使用 wechat.svg，第 2 个是 github,我们用 github.svg 这个图片，‌‌ 第 3 个是 email 邮件，我们用 email.svg 这个图片，‌‌ 然后第 4 个是 ‌bilibili，我们用 bilibili.svg 这个图片。‌‌ 调整一下格式，‌‌ 好了，这个就是咱们网站的大体结构，‌‌ 看一下 html 结构的最终效果是这样的。

## 编写 CSS 样式

接下来我们来设置 css 样式。首先我们看一下整体的页面样式，我这里打算用 grid 布局，把整个页面分成三行，第 1 行是导航，第 2 行是中间的内容区域，第 3 行是底部的 footer 区域。‌‌ 再来看一些全局的样式：

```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", sans-serif;
}
```

还是老样子，给所有的元素给设置 `box-sizing: border-box` ，‌‌‌‌ 边距和间距都是 0，‌‌ 接着设置一下字体 font-family,‌‌，英文用 Helvetica，‌ 中文用苹果平方字体，剩下的使用无衬线的字体。
对于这个 container 整个大的容器：

```css
.container {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 120px 1fr 120px;
}
```

给它的宽度设置为 100% 浏览器可视宽度，max-width 设置为 100%，这样如果是 windows 系统，可以把垂直滚动条的那部分宽度加上，就不会出现横向滚动条。高度设置为 100vh，设置 grid 布局、三行，‌‌ 导航占 120 像素，中间的内容区域是浮动高度 1fr，下面的底部也是 120 像素。‌‌
对于 header、main 和 footer 这 3 部分，‌ 它们左右有两部分的留白，上下还有一定的间距，那么我们统一给它们设置一个 padding，‌‌ 上下是 24 像素，左右 10vw，根据浏览器的宽度有 10% 的间距：

```css
header,
main,
footer {
  padding: 24px 10vw;
}
```

现在网站成了这样。

### 导航

接着设置导航的样式，‌‌ 先把 header 这个整体的容器设置一下：

```css
header {
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;
}
```

它也用 grid 布局，左边放 logo，右边放导航菜单，‌‌display 设置为 grid， grid-template-columns‌‌ 设置为 2 列，第 1 列用 max-content 来表示，它的空间是它内容的最大宽度，‌‌‌‌ 剩下的就是导航的宽度 1fr，最后让它们垂直居中对齐，设置 align-items 为 center。‌‌
对于导航菜单，我们用 flex 布局，因为它只有一行：

```css
nav {
  display: flex;
  gap: 88px;
  align-items: center;
  justify-content: flex-end;
  font-size: 18px;
}
```

另外，现在 flex 也支持 gap 属性了，所以我们用 gap 来设置每一个导航菜单项的间距，‌‌ 在垂直方向上同样是居中对齐，‌‌ 水平方向上为靠右对齐 flex-end。‌‌ 字体大小设置为 18 像素，‌‌ 看一下，现在是这个导航的样式。‌
我们把导航下面的 a 标签的 text-decoration 设置为 none，把下划线去掉，字体颜色设置为黑色：

```css
nav a {
  text-decoration: none;
  color: #000000;
}
```

接着设置一下登录按钮的样式：

```css
.btn {
  width: 120px;
  height: 48px;
  background: #ffffff;
  border: 2px solid #261c35;
  border-radius: 0;
  box-shadow: -4px 6px #fcb671;
  font-weight: 500;
  font-size: 18px;
}
```

我们用 .btn 这个按钮共用的 class，设置宽度为 120 像素，‌‌ 高度为 48 像素，‌‌ 背景为白色，border 边框为 2 像素，‌ solide 实线，‌ 颜色是 #261c35。按钮默认有一个圆角，我们这里是一个直角的按钮，所以把 border-radius 设置为 0，它还有一个阴影是向左下方偏移的，我们这里用 box-shadow‌， x 方向上向左偏移 4 像素，y 方向上向下偏移 6 像素，‌‌ 颜色是 #fcd671。‌‌ 接着按钮的文字样式为加粗，我们设置 font-weight 为 500，‌‌ 字体大小设置为 18 像素，‌‌ 预览一下这个登录按钮和导航，‌‌ 这样整个头部就完成了。

## 内容区域

我们再来看内容区左边的内容，这里也用 grid 布局：

```css
.mainLeft {
  display: grid;
  width: 36%;
  height: 100%;
  align-content: center;
  row-gap: 36px;
  transform: translateY(-10%);
}
```

给 .mainLeft 设置一下 display: grid， 宽度占整个屏幕的宽度的 36%，高度为 100%。对于 grid 轨道，也就是整个 grid 的内容，在垂直方向上是居中对齐，‌‌ 这样就把这些文本放到了它占的空间的中间，‌‌ 设置每一行的间距为 36 像素，‌‌ 然后再让它向上移动一些位置，让它看起来更居中，并且把底下的 footer 间距留出来，这里使用了 transform: translateY() 来让它向上移动 10%。
好，我们再设置一下标题的样式：

```css
.mainLeft h1 {
  font-size: 64px;
  text-shadow: -6px 6px #fcb671;
}
```

设置字体大小 font-size 为 64 像素，因为标题字体有阴影，这里可以直接使用 text-shadow‌‌ 属性来设置，跟 box-shadow 设置方法一样，它是向左偏移 6 像素、向下偏移 6 像素，颜色为 #fcb671。‌‌ 对于它下边的描述 p 元素，给它设置为细一点的字体，font-weight 数值取 300，文字的对齐方式为 justify，这样看起来会更整齐：‌‌

```css
.mainLeft p {
  font-weight: 300;
  text-align: justify;
}
```

再设置注册按钮的样式：

```css
.mainLeft button {
  background: #fcb671;
  box-shadow: -4px 6px #000000;
}
```

给它改一下背景色，background‌‌ 使用 #fcb671，阴影的设置是一样的，向左偏移 4‌‌ 像素，向下偏移 6 像素，只是颜色不一样，这里是黑色。‌‌ 行，这一部分就设置完成了。
我们再看一下图片的样式：

```css
.mainRight {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
```

因为它在 .mainRight 这个容器里面，并且是是占满了整个网页，那么我们这里给它设置绝对定位，position 设置为 absolute，‌‌ 向上偏移设置为 0，向左偏移设置为 0，‌‌ 宽度为 100%，高度也为 100%，这样就占满了整个屏幕，‌‌ 最后 z-index 设置为 -1，把它放到最下层，这样不影响按钮的点击。
对于它里面的图片，.mainRight img：

```css
.mainRight img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}
```

给它的宽度设置为 100%容器的宽度，‌‌ 然后 height 高度也设置为 100%，‌‌ 对于不成比例的部分，我们让它填满整个容器的宽高，设置 object-fit 为 cover，‌‌ 然后如果有超出部分的话，使用 object-position 来设置对齐方式，让它靠下对齐，这样的话，无论怎么缩放，‌‌ 它底部的蓝色背景条还是会显示出来的。
我们可以看到这边的图片没有加载，应该是 html 里丢了一个 .mainRight 这个容器，这里给它加上：

```html
<div class="mainRight">
  <img src="./assets/images/main.svg" alt="" />
</div>
```

里边的 img src 使用的是 assets 下面的 images 下面的 main.svg，‌‌ 现在我们来看一下这个图片，可以正常显示了。

### 底部区域

现在我们来设置一下社交图标的布局：

```css
footer {
  padding-top: 32px;
}

.socialMedia {
  display: flex;
  align-items: center;
  gap: 64px;
}
```

设置 footer 的 上间距 padding-top 为 32 像素。‌‌ 对于里边的社交图标，我们给 .socialMedia 这个容器设置为 flex 布局，display: flex，‌‌ 里边的元素垂直居中对齐，align-items: center，‌‌ 每个社交图标都有 64 像素的间距，使用 gap 属性设置。‌‌ 好了现在看一下，‌‌ 这样咱们的这个页面就完成了，‌‌ 是不是很简单呢？‌ 如果你是刚入门学习 html 和 CSS，那么这个项目就很适合你。‌‌ 今天的实战主要介绍了 absolute 布局、 grid 布局、flex 布局，还有文字阴影的设置，‌‌ 以及图片的 object-fit 和 object-position，这个图片的拉伸方式，和对齐方式。

好了，这个就是这个视频的主要内容，你学会了吗？如果有帮助请三连，想学更多有用的前端开发知识，请关注峰华前端工程师，感谢观看！
