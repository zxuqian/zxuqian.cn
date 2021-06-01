---
id: css-counter-state-management
title: 利用 CSS Counter 计数器添加章节序号 
slug: ../css-counter-state-management
description: 我们在写 markdown 或者博客这种以内容为主的网页的时候，经常会有给标题加上序号的需求，就跟写书一样，在一级标题前加上第 1 章、第 2 章等，二级标题加上 1.1，1.2 之类的序号，三级标题则为 1.1.1、1.1.2
keywords:
  - css
  - counter
  - counter-reset
  - counter-increment
  - 计数器
  - css 计数器
  - 前端
  - frontend
---

import BVideo from "@site/src/components/BVideo";

我们在写 markdown 或者博客这种以内容为主的网页的时候，经常会有给标题加上序号的需求，就跟写书一样，在一级标题前加上第 1 章、第 2 章等，二级标题加上 1.1，1.2 之类的序号，三级标题则为 1.1.1、1.1.2 这样，如果手动这样加的话很容易出错，并且不好维护，有什么更好的解决方案吗？CSS 支持对序号的状态管理，结合使用 counter-reset 和 counter-increment 属性，就能实线序号的自增。

## counter-reset 和 counter-increment 属性

counter-reset 是说给一个元素创建一个计数器，先把值设置成 0，然后它下面的子元素可以使用 counter-increment 来增加这个计数器，我们可以利用 ::before 伪元素，在某个元素的前边加上序号。访问计数器的值可以使用 counter() 函数，来看一个例子：

```html
<style>
  * {
    box-sizing: border-box;
    font-family: sans-serif;
  }
  h1 {
    font-size: 28px;
  }
  :root {
    counter-reset: chapter;
  }
  section {
    counter-increment: chapter;
  }

  h1::before {
    content: "第" counter(chapter) "章 ";
  }
</style>

<body>
  <section>
    <h1>基础语法</h1>
  </section>
  <section>
    <h1>数据类型</h1>
  </section>
  <section>
    <h1>运算符</h1>
  </section>
</body>
```

比如说咱们的这个页面上有 3 个 section，也就是有三章内容，然后里边用 h1 代表章节的标题，那么我们可以给根元素 :root，就是定义 CSS 变量时见到过的 :root，给他设置一个计数器，用 counter-reset 属性，值为计数器的名字，叫 chapter，它的默认值就是 0。然后每个 section 使用 counter-increment 对这个计数器加 1，只需要把计数器的名字传递给它，它就会自动把这个计数器进行加 1。

## Counter()函数

我们得在 h1 标题的前面加上章节号，我们这里使用 ::before 伪元素，在它的 content 属性里加上第几章，这个 “几”就可以通过 counter() 函数来获取，它接收一个计数器的名字作为参数，我们把 chapter 传进去，这样就可以看到 h1 的前边有了章节号。
对于下边的层级，比如说二级标题和三级标题也可以这样设置，假如说这篇文章里边还有二级和三级标题，h2 代表的是二级标题，h3 代表的是三级标题，我们来看看怎么设置它们的计数器。

```html
<style>
  h1 {
    /* step2, headings2 */
    counter-reset: headings2;
  }

  h2::before {
    counter-increment: headings2;
    content: counter(chapter) "." counter(headings2) " ";
  }

  h2 {
    counter-reset: headings3;
  }

  h3::before {
    counter-increment: headings3;
    content: counter(chapter) "." counter(headings2) "." counter(headings3) " ";
  }
</style>

<body>
  <section>
    <h1>基础语法</h1>
    <p>基础语法这一章主要介绍了 JavaScript 的基础语法。</p>
    <h2>变量</h2>
    <p>变量是所有编程语言中最基本的语法。</p>
    <h3>定义变量</h3>
    定义变量可以使用以下语法：
    <pre>
        <code>
          let x = 10;
        </code>
      </pre>
    <h2>常量</h2>
    <p>常量不能重新被赋值</p>
  </section>
  <section>
    <h1>数据类型</h1>
    <p>数据类型这一章主要介绍了 JavaScript 的数据类型。</p>
    <h2>基本数据类型</h2>
    <p>基本数据类型有 number, string, symbol...等</p>
  </section>
  <section>
    <h1>运算符</h1>
    <p>运算符这一章主要介绍了 JavaScript 的运算符。</p>
    <h2>数学运算符</h2>
    <p>数学运算符有 +、-、*、/、% 等。</p>
    <p>+ 的作用有</p>
  </section>
</body>
```

第一章的二级标题应该为 1.1、1.2 这样的形式，三级标题则是 1.1.1、1.1.2 这样的形式，它们前面的序号取得都是上级标题计数器的值，后面变化的值则需要分别给 h2 和 h3 设置一个计数器，二级标题前边的序号使用的是跟 h1 一样的序号，也就是 root 下边的 chapter，对于后边的序号，我们可以在 h1 里定义一个 headings2 计数器，然后在 h2 的 ::before 伪元素中对它进行加 1，并组成章节序号字符串，这样就有 1.1、1.2 这样的效果了，它的后面还加了一个空格，与后面的标题间隔开。
同里，在 h2 元素中设置三级标题的计数器，headings3，再在 h3 的 ::before 伪元素中，对序号进行加 1 并组装章节字符串，使用 :root 中的 chapter、h1 中的 headings2 和 h3 中的 headings3 计数器。这样三级标题也就有了章节号。

## 列表层级

css 的计数器还可以设置列表层级，支持嵌套，也就是下级的计数器可以跟上级的使用同一个，但是它维护自己的序号。比如说我们有一个有序列表，放到了第三章，它里边的还有一个嵌套的列表，我们在第 1 层显示 1、2、3，然后在第 2 层显示 1.1、1.2 和 1.3：

```html
<style>
  /* step3 nested */
  ol {
    counter-reset: list;
    list-style-type: none;
  }
  li::before {
    counter-increment: list;
    content: counters(list, ".") " ";
  }
</style>

<body>
  <!-- ... -->
  <section>
    <h1>运算符</h1>
    <p>运算符这一章主要介绍了 JavaScript 的运算符。</p>
    <h2>数学运算符</h2>
    <p>数学运算符有 +、-、*、/、% 等。</p>
    <p>+ 的作用有</p>
    <ol>
      <li>
        对数字进行相加
        <ol>
          <li>1 + 1</li>
          <li>50 + 100 + 1000</li>
          <li>-40 + 30</li>
        </ol>
      </li>
      <li>对字符进行拼接</li>
      <li>把字符串转换为数字</li>
    </ol>
  </section>
</body>
```

我们首先给 ol 元素设置设置一个新的计数器，叫 list，然后设置它的 list-style-type 属性为 none，把默认的序号去掉 ，要不它会同时显示这两种序号。在每个 li 元素中，使用 counter-increment 对这个计数器进行加 1。因为嵌套的元素使用相同的计数器名字，那么这里需要使用 counters 函数来访问上级所有的计数器，它接收一个计数器的名字作为参数，用于访问计数器，还接收第 2 个参数，用于指定拼接计数器的符号，跟 JavaScript Array 中的 join() 方法类似，最后返回所有层级计数器拼接后的字符串，我们这里把 list 计数器传递给它，设置拼接的字符为点号。这样，列表层级的序号就展示出来了。

好了，这个就是使用 css 给元素加上计数器的教程，对于内容为主的网站来说非常的方便。这里主要使用了 counter-reset 和 counter-increment 这两个属性来维护计数器，以及使用 counter() 和 counters() 这两个函数来分别获取单一序号和嵌套的全部序号。你学会了吗？如果有帮助三连，想学更多有用的前端开发知识，请关注峰华前端工程师，感谢观看！
