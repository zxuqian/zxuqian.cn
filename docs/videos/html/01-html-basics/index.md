---
id: html-basics
title: HTML 基础
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 一个视频快速了解 HTML 基础，从零开始编写自己的网页。
slug: ../html-get-started
keywords:
  - html
  - html5
  - 主义化
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=412857610&bvid=BV14V411Z7Bo&cid=181761386&page=1" bsrc="https://www.bilibili.com/video/BV14V411Z7Bo/"/>

你是不是想过平常看的网站是怎么制作出来的，并且也想做一个自己的网站去展示作品、做电商、或者企业形象官网，又或者是想做一名专业的前端工程师，那么这个 5 分钟的视频将教会你网页制作必备的技能 HTML。

## 什么是 HTML

HTML 全称是 HyperText Markup Language(超文本标记语言)。想要理解 HTML 很容易，只需要把它想象成是写 word 文档，office word 有图形化界面方便对文字和图片排版，而 HTML 则是用标签来控制排版，跟 word 相比，HTML 是纯文本，体积小更适合在网络上进行传输，所以浏览器默认支持 HTML 网页的解析。

## 编写 HTML

### 开发工具

编写 HTML 只需要使用普通的记事本，也可以用高级的代码编辑器，这里推荐使用 visual studio code。把这个文本文件的后缀名改为 `.html`，双击它或者拖到浏览器里就能够访问这个网页。

### HTML 文件的固定结构

HTML 文件有固定的结构。开头写上：

```html
<!DOCTYPE html>
```

告诉浏览器这是一个 html 文档，然后它下边是`<html>`根标签，也就是最顶层：

```html
<html></html>
```

标签都是成对出现的，每个标签使用尖括号加上标签名，结束标签在尖括号的开始写上斜杠`/`，标签里边可以是文本或者嵌套其他标签。

接下来是`<head>`和`<body>`部分，`<head>`里面是定义文档的描述信息，比如网站的标题`<title>`，它会显示在浏览器上；`<body>` 标签里是具体的网站内容，相当于 word 的正文：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>第一个网页</title>
  </head>
  <body></body>
</html>
```

## 常用标签

在开始写网页内容之前，先来了解几个常用的标签：

### 标题

标题标签，类似于 word 中的标题格式，有 6 级，从 h1 到 h6，标题字号会越来越小，文字都是加粗显示：

- `<h1>`
- `<h2>`
- `<h3>`
- `<h4>`
- `<h5>`
- `<h6>`

比如显示 6 个标题层级：

```html
<h1>这是1级标题</h1>
<h2>这是2级标题</h2>
<h3>这是3级标题</h3>
<h4>这是4级标题</h4>
<h5>这是5级标题</h5>
<h6>这是6级标题</h6>
```

<h1>这是1级标题</h1>
<h2>这是2级标题</h2>
<h3>这是3级标题</h3>
<h4>这是4级标题</h4>
<h5>这是5级标题</h5>
<h6>这是6级标题</h6>

### 段落标签

段落标签就像是 word 里的正文文本，用`<p>`来表示。比如显示一段正文：

```html
<p>这是一段正文</p>
```

<p>这是一段正文</p>

### 文本样式标签

文本样式标签与 word 文档中的功能一模一样，`<b>`代表加粗，`<i>`代表斜体，`<sub>`代表下标，`<del>`代表删除的文本，`<br>`代表换行，例如下边的文本：

```html
<p>
  这是一段文本，<b>我是加粗的</b>，<i>我是斜体</i>，带下标的：x<sub>2</sub
  ><del>我是带删除线的文本</del>，<br />我是下一行。
</p>
```

会显示成：

<p>
  这是一段文本，<b>我是加粗的</b>，<i>我是斜体</i>，带下标的：x<sub>2</sub
  >，<del>我是带删除线的文本</del>，<br />我是下一行。
</p>

如果标签之间没有其他子标签或文本内容，可以直接在开始标签结束前写上斜杠来结束它，比如例子中的 `<br/>`。

### 列表标签

列表标签分为两种，一种是无序列表，用`<ul>`表示，一种是有序列表，用`<ol>`表示，里边都使用`<li>`表示列表项，例如：

#### 无序列表

```html
<ul>
  <li>列表项</li>
  <li>列表项</li>
  <li>列表项</li>
</ul>
```

<ul>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
  </ul>

#### 有序列表

```html
<ol>
  <li>列表项</li>
  <li>列表项</li>
  <li>列表项</li>
</ol>
```

<ol>
    <li>列表项</li>
    <li>列表项</li>
    <li>列表项</li>
  </ol>

### 超链接标签

超链接也跟 word 中的一样，用来跳转到其他 html 文件或者外部网站，使用`<a>`标签，并使用 href 属性设置链接，属性是写在标签中的，以等于号分隔的配置项，等号左边是要配置的项目，右边是值，例如：

```html
<a href="http://www.bilibili.com">跳转到 B 站</a>
```

<a href="http://www.bilibili.com">跳转到 B 站</a>

点击`跳转到 B 站` 就会跳转到`href`指定的网址。

### 多媒体标签

#### 图片标签

图片标签用来显示图片，使用`<img>`标签，然后使用`src`属性指定图片路径，例如：

```html
<img src="./image.jpg" />
```

这里`./`代表当前目录，这里只要 html 文件同级目录下有名为`image.jpg`的文件，就可以把图片显示出来。也可以指定网络上的图片的 url 地址。下边的视频和音频标签也是一样。

#### 视频标签

视频用`<video>`标签，它也使用`src`属性指定路径：

```html
<video src="./video.mp4" controls></video>
```

#### 音频标签

音频使用`<audio>`标签：

```html
<audio src="./music.mp3" controls></audio>
```

### div 标签

div 标签可以想象成是用来对其他标签进行分组，把相关的页面区域放到一个 div 下边，以方便调整样式和布局，它没有实际意义，但是它是最常用的标签。假如有一个卡片页面组件，我们可以把卡片标题和内容放到一个 div 下边，这个 div 就是卡片整体：

```html
<div>
  <h3>卡片标题</h3>
  <p>卡片内容</p>
</div>
```

<div>
  <h3>卡片标题</h3>
  <p>卡片内容</p>
</div>

### 布局标签

在 HTML5 出来以前，网页的布局都是使用 div 来分隔不同的部分，比如网页头部、导航、侧边栏、内容、底部等，这样全部都是 div 非常难以辨认，所以 HTML5 针对这些出了专门的标签，它们其实只是换了名字的 div，但是会让网页布局标签更有意义，使用`<header>`代表头部，`<nav>`代表导航，`<aside>`代表侧边栏，`<main>`代表内容，`<footer>`代表底部，`<article>`代表文章，`<section>`代表分区，比如首屏轮播图是一个 section，公司业务介绍是另一个 section。

更多的标签和用法可以到：

[w3schools 英文版](https://www.w3schools.com/)

[w3school 中文版](https://www.w3school.com.cn/html/index.asp)

上边去查看。

## 实例

最后来看一个简单的、完整的 html 页面例子，开始有一个导航，导航下有首页和关于我们两个子菜单，接下来是头部信息，可以是轮播图或者 hero 图片，再下边是侧边栏，主要内容区，主要内容区里有博客部分和公司业务部分，最后是底部信息：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>第一个网页</title>
  </head>
  <body>
    <nav>
      <a href="/">首页</a>
      <a href="./about_me.html">关于我们</a>
    </nav>
    <header>
      头部信息
    </header>
    <aside>
      侧边栏
    </aside>
    <main>
      <section>
        <article>这是一篇公司的博客</article>
      </section>
      <section>
        <h3>公司业务</h3>
        <div>
          <div>网站开发</div>
          <div>软件开发</div>
          <div>App开发</div>
        </div>
      </section>
    </main>
    <footer>底部信息</footer>
  </body>
</html>
```

现在，你就学会编写 HTML 网页了。什么？跟想象的不一样？那是因为还需要一个叫 CSS 的技术来给网页进行修饰和美化，我们后边的视频继续！

我是峰华，感谢观看！
