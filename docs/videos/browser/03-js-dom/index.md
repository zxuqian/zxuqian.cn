---
id: js-dom-operation
title: JS HTML DOM 操作入门教程
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 浏览器提供了一系列的 DOM API 接口，用于创建、选择、修改 DOM 中的元素，处理 DOM 事件等。我们分别来看一下这些接口的使用方法和步骤。
slug: ../js-dom-manipulate
keywords:
  - JavaScript
  - dom
  - html
  - browser
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=543032752&bvid=BV1ni4y157v6&cid=262847725&page=1" bsrc="https://www.bilibili.com/video/BV1ni4y157v6/"/>

浏览器提供了一系列的 DOM API 接口，用于创建、选择、修改 DOM 中的元素，处理 DOM 事件等。我们分别来看一下这些接口的使用方法和步骤。

## 常用操作

在操作 DOM 时，需要先选择或创建 DOM 元素，首先看一下选择元素的 API。

### 选择元素

DOM 提供了多种选择元素的 API，第 1 种是原始的方式，使用：

| API                               | 作用                                                                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| document.getElementById()         | 通过 id 属性值选择元素，并返回唯一结果，例如：document.getElementById("container")。剩余 API 请参考屏幕上的表格                                              |
| document.getElementsByClassName() | 通过 class 属性值选择元素，返回 HTMLCollection 类型的元素集合，可以认为是数组。例如：document.getElementByClassName("red")。选择所有 class 中有 red 的元素。 |
| document.getElementsByTagName()   | 通过 HTML 标签名选择元素，同样返回元素的集合。例如 document.getElementsByTagName("div")。                                                                    |

第 2 种是使用选择器：

| API                         | 作用                                                                                                                                                                                |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| document.querySelector()    | 通过指定选择器选择元素，并返回第一个匹配的元素。选择器可以是 CSS 中的 ID、Class、组合选择器。例如选择 id 为 container 的元素：document.querySelector("#container")                  |
| document.querySelectorAll() | 通过选择器选择元素，并返回全部结果，结果类型为 NodeList，对于 HTML DOM，里边的内容是 HTMLElement，可以当作是数组。例如选择 class 中有 red 值的元素：document.querySelector(".red"); |

第 3 种 是使用遍历树的属性，获取相邻节点和子节点，这些属性在每个 HTML 元素中都可以使用：

| API                    | 作用                                 |
| ---------------------- | ------------------------------------ |
| children               | 获取所有子节点的 HTMLCollection 集合 |
| nextElementSibling     | 获取紧邻当前元素的下一个元素         |
| previousElementSibling | 获取紧邻当前元素的上一个元素         |

详细用法：https://developer.mozilla.org/en-US/docs/Web/API/Document

### 创建元素

接下来看创建元素的 API。 document 对象提供了 createElement() 用于创建一个 HTML 元素并返回，所有元素都提供了 append() 用于追加子元素到最后。例如，创建一个 p 元素，并设置内容为 hello world，然后添加到 id 为 container 的 div 容器中：

```
const p = document.createElement("p");
p.append("hello world");
const container = document.querySelector("#container");
container.append(p);

// html
<div id="container"></div>
```

详细用法：https://developer.mozilla.org/en-US/docs/Web/API/Document

### 修改属性

在获取或创建元素之后，就可以使用.号访问或修改对应的属性了，也可以使用 getAttribute() 、setAttribute() 、removeAttribute() 方法获取、修改和删除属性。例如，给 p 元素添加 style 属性，把文字改成红色，内间距改为 20px：

```
p.style = "color: red; padding: 20px;";
// 或使用 setAttribute(name, value) 方式
// p.setAttribute("style", "color: red; padding: 20px;");
```

更多属性参考：

https://developer.mozilla.org/en-US/docs/Web/API/Element

https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

### 添加事件

DOM 的另一大作用是添加交互，所以提供了添加和处理事件的 API。在拿到 DOM 元素时，可以调用它的 addEventListener() 添加事件，第 1 个参数传递要监听的事件名，第 2 个参数传递处理事件的回调函数。常用的事件名可以参考屏幕上的表格：

| 事件名                 | 含义                                      |
| ---------------------- | ----------------------------------------- |
| click                  | 鼠标/屏幕点击                             |
| mouseenter/mouseleave  | 鼠标进入/移出元素区域                     |
| drag/dragstart/dragend | 元素被拖拽/拖拽开始/拖拽结束              |
| input                  | <input\>、<select\>、<textarea\> 内容改变 |
| focus/blur             | 获取/失去焦点                             |
| keydown/keyup          | 键盘按下/松开                             |
| play/pause             | 媒体（视频、音频）播放/暂停               |

回调函数中的参数为 event 对象，包含了事件的一些信息，例如使用 target 属性，可以获取触发事件的元素。

例如，给一个按钮添加点击事件，然后弹出 hello world 弹窗：

```
const btn = document.querySelector("#btn");
const btnClick = function(event) {
 console.log(btn === event.target); // true
 alert("hello world!");
}
btn.addEventListener("click", btnClick);
// html
<button id="btn">点我</button>
```

还有两种其它添加事件的方式，但是并不推荐，了解一下就可以了。第 1 种是使用元素属性的方式，这种方式只能对同一个事件添加 1 种事件处理函数，而使用 addEventListener 可以添加多个：

```
btn.onclick = btnClick
```

另 1 种是直接在 HTML 中编写事件处理，这种会导致代码难以阅读和维护，所以最好不用：

```
<button onclick="alert('hello world')">按钮</button>
```

## 总结

以上就是使用 JS 操作 DOM 的介绍，你学会了吗？如果有问题请留言，有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！
