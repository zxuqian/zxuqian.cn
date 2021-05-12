---
id: web-components-get-started
title: Web Components 前端开发入门教程
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: Web components 是原生的组件化开发技术，它可以让我们创建自定义的 HTML 元素，并且功能和样式都会封装在组件内部，不影响其它的元素。Web Components 与现有的 React 和 Vue 等库不冲突，而是相辅相成的。
slug: ../web-components-get-started
keywords:
  - web components
  - dom
  - browser
  - 组件化
  - 前端
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

Web components 是原生的组件化开发技术，它可以让我们创建自定义的 HTML 元素，并且功能和样式都会封装在组件内部，不影响其它的元素。Web Components 与现有的 React 和 Vue 等库不冲突，而是相辅相成的。

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=203844512&bvid=BV1Rh411y7kB&cid=285907651&page=1" bsrc="https://www.bilibili.com/video/BV1Rh411y7kB/"/>

## Web Components 的构成

Web Components 里有三个概念，分别是自定义元素，Shadow DOM（影子 DOM） 和 HTML 模板。其中：

- 自定义元素是通过在 JavaScript 中继承 HTMLElement 或者现有的HTML DOM 对象来实现的。自定义元素有 4 个生命周期钩子，分别为 connectedCallback()、disconnectedCallback()、adoptedCallback()、attributeChangedCallback()，分别会在元素挂载时、卸载时、移动时、属性变化时调用。
- Shadow DOM 与普通的 document 对象几乎一样，但是专门用来操作自定义的 HTML 元素的，它也是一个树形结构，但是 Shadow DOM 完全独立于普通 DOM，相当于是一个隔离区，需要把它挂载到一个普通的 DOM 节点上。
- HTML 模板是为了方便编写自定义元素的 HTML 代码和 CSS 样式的，它包括两个标签 `<template />` 和 `<slot />`，其中 `<slot />` 与 Vue 中的 slot 类似，用于指定一些占位的插槽，后边可以用真实的元素替换掉。

## 示例

在了解了 Web Components 的基本概念之后，我们来看一个示例，这个示例将分别定义两个元素，一个是显示博客详情的 blog-post 元素和显示博客列表的 post-list 元素。首先创建一个项目目录，然后在里边创建一个 index.html 文件、一个 BlogPost.js 文件和一个 PostList.js 文件，在 index.html 文件中分别引入它们，并设置 type 为 module，这样两个 js 文件的代码就会变成模块化，从而不会冲突。

```
  <body>
    <!-- type 必须为 module，否则变量名会冲突 -->
    <script src="BlogPost.js" type="module"></script>
    <script src="PostList.js" type="module"></script>
  </body>
```

### 博客详情元素

先看博客详情元素，它会展示博客标题、博客文章和查看全文按钮，那么我们可以在 index.html 中先定义它的模板：

```
<template id="blog-post-template">
  <div>
    <h1></h1>
    <slot name="content"></slot>
    <button>查看全文</button>
  </div>
</template>
```

template 标签给它设置了一个 id 属性，稍后会引用它，里边的 h1 用于显示标题，它会通过属性传递进来，`<slot />` 则用于显示文章内容，这里可以使用任意元素来替换它，只需要和 slot 的 name 属性值相同即可。

在 BlogPost.js 中，定义一个 BlogPost class，并继承 HTMLElement 元素，这样就创建了一个独立的自定义元素，还可以通过继承类似 HTMLParagraphElement 这样的 DOM 对象来扩展现有的 p 元素。

```
class BlogPost extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("blog-post-template");
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}
customElements.define("blog-post", BlogPost);
```

BlogPost 类中的构造函数用于编写自定义元素的一些功能逻辑，它必须调用 super() 父类的构造函数才能正确初始化。之后获取 html 中的 template 标签，并调用 attachShadow 来获取 Shadow DOM 的**根元素**， mode 设置为 open，意思是允许通过 Shadow DOM 的 API 来操作和访问该自定义元素内部的 DOM 树。之后调用 appendChild() 把 template 的**内容**添加到根元素中，注意这里使用了 cloneNode() 复制了 template 的内容，这样多次使用  BlogPost 自定义元素时，内容都是独立的。最后调用 customElements.define() 把 BlogPost 元素注册到自定义元素注册表中，这里的名字必须带有中画线，目的是和原生 HTML 元素区分开，第 2 个参数把 BlogPost 类传递进去。

这样定义好后就可以直接在 HTML 中使用了，在 index.html 中，可以用这样的代码来使用 `<blog-post />`，article 元素通过设置 slot 属性值为 "content"，就能把模板中 name 属性为 "content" 的 slot 替换掉：

```
<blog-post>
  <article slot="content">这是博客内容</article>
</blog-post>
```

<img src={require("./img/wc0.webp").default} alt="content" width="200" />

#### 设置标题属性

不过这样没办法指定博客标题，我们接下来让 BlogPost 接收一个自定义的 title 属性来设置标题，那么先在 html 中添加上 title 属性：

```
<blog-post title="博客标题">
  <article>这是博客内容</article>
</blog-post>
```

然后在 BlogPost 的构造函数中使用 this.shadowRoot.querySelector("h1") 来获取模板中的 h1 元素，这里 this.shadowRoot 是 shadow DOM 中的根元素，它在调用 this.attachShadow() 之后才可以使用，其中的 API 和 document 的几乎一样，可以使用 querySelector() 选择元素。

```
this.titleEle = this.shadowRoot.querySelector("h1");
```

接下来需要使用 attributeChangedCallback() 生命周期来给 h1 赋值，它接收 3 个参数，分别是属性名、旧值和新值，这里判断属性名如果为 title 则直接把新值赋给 h1：

```
attributeChangedCallback(name, oldValue, newValue) {
  if (name === "title") {
    this.titleEle.textContent = newValue;
  }
}
```

为了让 attributeChangedCallback() 生效，需要自行设置要监听的属性，这里需要定义一个 static get observedAttributes() 方法，里边返回要监听的属性名**数组**，这里设置监听一个 title 属性：

```
static get observedAttributes() {
  return ["title"];
}
```

这样 title 属性值就能放到 h1 元素中了。

<img src={require("./img/wc1.webp").default} alt="content" width="150" />

#### 设置样式

我们可以给 BlogPost 元素设置一下样式，直接在 `<template />` 标签中使用 `<style />` 标签编写样式：

```
<template id="blog-post-template">
  <style>
    div {}
    h1 {}
    button {}
  </style>
  <div>
    <h1></h1>
    <slot name="content"></slot>
    <button>查看全文</button>
  </div>
</template>
```

这里为了节省空间省略了 CSS 代码，都是一些简单的，可以在源代码中查看。在 `<template>` 中写的 css 样式只会应用到 template 内部的元素中，所以 CSS 选择器也只会选择其中的元素。添加样式后的效果类似于这样：

<img src={require("./img/wc2.webp").default} alt="content" width="60%" />

现在可以通过 chrome 开发者工具看一下源代码，应该显示的是类似于这样的：

<img src={require("./img/wc2-5.webp").default} alt="content" width="60%" />

#### 定义 template 到 js 中

在 html 中定义多个 template 会占用大量的空间和代码，不好维护，而导入 HTML 的功能已经被定性为过时了，那么这样可以在 js 定义中模板代码，可以更好的封装自定义元素：

```
const template = document.createElement("template");
template.innerHTML = `
  <style>
    div {}
    h1 {}
    button {}
  </style>
  <div>
    <h1></h1>
    <slot name="content"></slot>
    <button>查看全文</button>
  </div>
`;
```

这里只需要创建一个 template 元素，然后把模板代码使用字符串的形式赋值给 innerHTML 属性即可，然后在构造函数中就不用获取 template 元素了，可以直接使用这个 template 对象：

```
this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
);
```

之后再删掉 index.html 中相关的模板代码就可以了。

### 博客列表元素

接下来定义博客列表元素，博客列表元素会加载远程数据并使用循环展示多个博客详情元素。在 PostList.js 中编写基础代码，定义模板、添加到 Shadow DOM 中，注册 `<post-list>` 标签：

```
const template = document.createElement("template");
template.innerHTML = `
  <style>
    div {}
    article {}
  </style>
  <div></div>
`;
class PostList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(
      template.content.cloneNode(true)
    );
  }
}
customElements.define("post-list", PostList);
```

`<post-list>` 元素只有一个 div 标签，里边的内容都是动态创建的。因为我们会使用 article 来替换 `<blog-post/>` 中的 `<slot />`，所以在样式中直接对 article 元素进行了美化，即使现在还没有 article 元素。

接着我们使用 connectedCallback() 生命周期方法，在 `<post-list />` 元素挂载之后加载博客列表数据：

```
  async connectedCallback() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    this.initPosts(posts);
  }
```

生命周期方法可以定义为 async 的，这样就可以在里边使用异步操作了。最后调用了 initPosts() 来创建博客列表，看一下它的代码：

```
initPosts(posts) {
  const div = this.shadowRoot.querySelector("div");
  posts.forEach((post) => {
    const blogPostEle = div.appendChild(document.createElement("blog-post"));

    // 博客标题
    blogPostEle.setAttribute("title", post.title);

    // 博客文章
    const article = blogPostEle.appendChild(
      document.createElement("article")
    );
    article.slot = "content";
    article.innerHTML = post.body;
  });
}
```

这段代码进行了这些操作：

- 获取模板中的 div 元素
- 遍历 posts 数据，生成博客列表。
- 每次遍历都给 div 元素添加一个新的 blog-post 自定义元素。
- 设置 blog-post 元素的标题属性
- 给 blog-post 元素添加 article 子元素，并设置 slot 属性为 "content"，替换掉 blog-post 的 slot。
- 把 article 的内容设置为博客文章内容。

之后在 Index.html 中，删除示例的 blog-post 元素，然后使用 `<post-list>` 元素：

```
<post-list />
```

这样就可以显示博客列表了：

<img src={require("./img/wc3.webp").default} alt="content" width="50%" />

假设有一个需求，博客列表默认只显示 60 个字符的摘要，点击查看全文才展示完整的文章，那么在 Web Components 中应该怎么做呢？这里就需要添加事件和维护一些状态了。

### 显示摘要

首先看默认显示摘要，这时需要先获取替换掉 slot 的真实元素，才能修改它的内容。在 BlogPost 构造函数中先获取原本的 slot 元素对象：

```
this.articleSlot = this.shadowRoot.querySelector("slot");
```

然后定义一个 content 属性保存全文、定义一个 article 属性保存替换后的元素对象：

```
this.content = "";
this.article = null;
```

之后需要监听 slot 的 slotchange 事件来获取真实的替换元素，这里在 connectedCallback() 生命周期中给 slot 添加一个事件监听器：

```
  connectedCallback() {
    this.articleSlot.addEventListener("slotchange", this.slotChange.bind(this));
  }
```

注意这里给监听器绑定了 this，来让它可以访问类中的属性。

监听器 slotChange 的操作是：

- 通过 assignedElements() 获取真实的替换元素数组。
- 这里因为我们知道只有一个 article 元素，所以直接取数组第 0 个元素
- 把真实的 article 元素保存到 article 属性中，把博客全文保存到 content 属性中，
- 再把 article 中的博客全文改成摘要。

```
  slotChange() {
    const elements = this.articleSlot.assignedElements();
    const article = elements[0];
    this.article = article;
    this.content = this.article.innerHTML;
    this.article.innerHTML = this.getExcept();
  }
```

获取摘要的方法直接返回了内容的前 60 个字符和 3 个点：

```
  getExcept() {
    return this.content.slice(0, 60) + "...";
  }
```

现在博客内容只显示摘要了，接下来需要给按钮添加点击事件来切换全文和摘要。

#### 切换摘要与全文

在构造函数中获取 button 对象，然后定义 showFullArticle 状态，true 为显示全文，false 为显示摘要：

```
this.buttonEle = this.shadowRoot.querySelector("button");
this.showFullArticle = false;
```

接着定义一个事件处理方法 toggleFull()：

```
toggleFull() {
  this.showFullArticle = !this.showFullArticle;
  if (this.showFullArticle) {
    this.article.innerHTML = this.content;
    this.buttonEle.textContent = "隐藏全文";
  } else {
    this.article.innerHTML = this.getExcept();
    this.buttonEle.textContent = "查看全文";
  }
}
```

这个方法每次在调用时会对 showFullArticle 的值进行取反，然后切换显示摘要和全文，并且也会改变按钮的文案。之后在 connectedCallback() 生命周期中给按钮注册事件，这里同样需要绑定 this：

```
this.buttonEle.addEventListener("click", this.toggleFull.bind(this));
```

这时再点击按钮就可以切换全文和摘要了。最后还可以在 disconnectedCallback() 生命周期中卸载事件监听，在组件销毁的时候释放内存：

```
  disconnectedCallback() {
    this.buttonEle.removeEventListener("click", this.toggleFull());
    this.articleSlot.removeEventListener("slotchange", this.slotChange);
  }
```

好了，这个就是使用 Web Components 创建自定义元素的过程了，主要步骤为：

- 编写模板代码和样式。
- 创建自定义元素的 class，继承 HTMLElement。
- 使用 customElements.define() 注册元素。
- 在构造函数中使用 super() 调用父类构造函数，并编写初始化逻辑
- 使用生命周期加载数据、注册监听和卸载监听。

示例代码可以在视频简介中的 Github 仓库中查看。如果觉得视频有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！