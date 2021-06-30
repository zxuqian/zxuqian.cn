---
id: import-css-to-html
title: 引入 CSS
description: 要给 HTML 页面添加样式，需要先引入 CSS，常见的在 HTML 中引入 CSS 的方式有 3 种：
keywords:
  - css
  - 引入 CSS
  - HTML 引入 CSS
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

要给 HTML 页面添加样式，需要先引入 CSS，常见的在 HTML 中引入 CSS 的方式有 3 种：

- inline 行内样式。
- 使用 `<style>` 标签。
- 使用 `<link>` 标签。
  
现在我们分别来看一下如何使用这 3 种方式，先不用关注示例中 CSS 代码的含义，后面我们会逐一讲到。

## inline 行内样式

行内样式就像它的名字一样，是直接在 HTML 标签中添加样式，通过 HTML 标签的 `style` 属性，例如下方代码所示：

```html preview
<p style="color:hsl(214deg, 100%, 60%)">这是一段有颜色的字体。</p>
```

## style 标签

使用 `<style>` 标签编写的样式，只能在当前 HTML 页面中使用，只会美化它其中的元素。一般的，我们把 `<style>` 标签放到 `<head/>` 标签中：

```html preview
<html>
  <!-- highlight-start -->
  <head>
    <style>
      ul {
        margin-top: 20px;
      }
    </style>
  </head>
  <!-- highlight-end -->
  <body>
    <ul>
      <li>列表项</li>
      <li>列表项</li>
      <li>列表项</li>
    </ul>
  </body>
</html>
```

## link 标签引入

最后一种方式是使用 `<link>` 标签引入，这时，CSS 是写在单独的文件中的，这个文件以 .css 结尾，里面是一些 CSS 样式。假设 HTML 和 CSS 文件结构是这样的：

```shell
project
  |-- index.html
  |-- style.css
```

那么在 index.html 文件里，`<head>` 标签中，我们可以用下面的语法引入 `style.css` 文件：

```html
<link rel="stylesheet" href="style.css" />
```

这里的：

- `rel` 是说我们引入的是什么样的文件，这里指定值为 `stylesheet` 标明引入的是 CSS 样式表。
- `href` 用于指定 CSS 文件路径，可以是网络上的 URL，可以是本地的目录，因为 style.css 和 index.html 在同一个目录，所以这里使用了相对路径引入了 style.css 文件。

:::info
我们可以通过编写多个 `<link>` 标签，引入多个外部的 CSS 文件，例如引入 `normalize.css` 第三方 CSS 库，再引入自己的 `style.css` 文件等。如果样式有冲突，会以后面的样式为准。
:::

## 小结

在实际项目开发中，推荐用第 3 种来引入 CSS 文件，以使得 HTML 文件的代码更简洁，并且 CSS 可以进行复用。如果是练习的项目，代码量比较小，那么就推荐使用第 2 种。第 1 种方式会涉及到选择器优先级的机制，尽量不要使用。
