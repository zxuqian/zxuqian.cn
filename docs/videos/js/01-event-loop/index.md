---
id: event-loop
title: 最直观的 JavaScript Event Loop 动画演示
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: JS Event Loop 事件循环机制视频动画详解。setTimeout(), Promise(), then() 之间的调用和执行顺序
slug: ../javascript-eventloop
keywords:
  - JavaScript
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=285227869&bvid=BV1kf4y1U7Ln&cid=177957175&page=1" bsrc="https://www.bilibili.com/video/BV1kf4y1U7Ln/"/>

JavaScript 是一门单线程的语言，它的异步和多线程的实现是通过 Event Loop 事件循环机制来实现的。Event Loop 包括三个概念：调用栈(call stack)、消息队列(Message Queue)和微任务队列(Microtask Queue)。

调用栈 (call stack)

Event Loop 开始时，会从全局代码开始，一行一行执行，遇到函数调用时，会把函数压入调用栈中（被压入的函数叫做`帧(frame)`，当函数返回后，会从调用栈中弹出。例如：

```javascript
// 2, 1, 3
function func1() {
  console.log(1);
}

function func2() {
  console.log(2);
  func1();
  console.log(3);
}

func2();
```

此段代码执行时：

- 首先把 fun2() 压入调用栈中，然后执行它里边的代码，- 把 `console.log(2)` 压入栈中并执行，执行完毕打印出`2`后弹出。
- 接下来把`func1()`的调用压入栈中，执行它里边的代码，`console.log(1)`被压入栈，执行并打印出`1`，弹出。
- 然后`func1()`执行完毕，弹出。
- 最后`console.log(3)`压入栈中，执行并打印出`3`，弹出。

整个调用栈被清空。

消息队列 (Message Queue)

JavaScript 中的异步操作比如(fetch)、事件回调、setTimeout、setInterval 的回调函数会入队到消息队列中，它们叫做消息。例如，在上边的代码中加上 setTimeout 的调用：

```javascript
// 1, 3, 2
function func1() {
  console.log(1);
}

function func2() {
  setTimeout(() => {
    console.log(2);
  }, 0);
  func1();
  console.log(3);
}

func2();
```

这里在 `setTimeout` 被压入栈时，它里边的回调函数（匿名函数）会入队到消息队列中，它里边的消息会在调用栈清空的时候执行（这也是为什么 setTimeout 中的延迟参数只是最小延迟时间）。接下来当`console.log(3)`执行完毕之后，调用栈为空，消息队列中的消息会压入到调用栈中并执行，最后打印出`2`。

微任务队列 (Microtask Queue)

使用 Promise、Async/Await 创建的异步操作会入队到微任务队列中，它也会在调用栈被清空的时候执行，比消息队列优先级高，例如在上边的代码中加入 promise 的定义：

```javascript
var p = new Promise((resolve) => {
  console.log(4);
  resolve(5);
});

function func1() {
  console.log(1);
}

function func2() {
  setTimeout(() => {
    console.log(2);
  });
  func1();
  console.log(3);
  p.then((resolved) => console.log(resolved));
}
func2();
```

1. Promise 构造函数被压入调用栈，之后 `console.log(4)` 和 `resolve(5)` 分别压入栈中并执行。最后`promie`构造函数会弹出。
2. 下边的执行过程和上边的例子一样，调用 func2()，setTimeout 中的匿名回调入队到消息队列中，调用`func1()` 打印出`1`，然后打印`3`，在遇到 `then` 的时候，传给`then`的回调函数会入队到微任务队列中，此时调用栈为空，所以执行微任务队列中的任务，把回调压入调用栈并执行，打印出 5，最后压入并执行消息队列中的消息，打印出`5`。

