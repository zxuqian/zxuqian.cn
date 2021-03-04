---
slug: learn-react-event-and-state
title: React State 和 Event教程 - 制作渐变背景生成器
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
description: Hello! 今天来带你走进 React 的大门！我第一次听说 React 是我在美国读研的时候，室友选了 web programming 这节课，然后遇到了关于 react 的好多问题...
tags: [前端, React]
bvid: av97436637
oid: "97436637"
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Hello, 今天教你写一个渐变背景生成器。我会用这个例子来解释 react 的 state，状态管理，还有事件处理。这个小工具提供了两个颜色选择器，分别可以选择渐变的两个颜色，渐变的角度是 75 度，线性渐变。另外还有一个重置按钮可以把渐变恢复成初始值。

<!-- truncate -->

[源码：Github - React-Examples](https://github.com/zxuqian/react-examples)

[示例和视频](../docs/videos/react/react-state-event-exmaple)

## State 简介

首先看一下什么是 state，[上篇文章](https://zxuqian.cn/learn-react-props-buttons)讲了 props：

1. 用来给组件传递参数，组件会根据这些 props 来控制它自己生成的 html
2. 它的值不会发生变化，只要传给他的一个固定的值，那么它就会永远是这个值。

如果想让一个属性根据条件发生变化的话。那么这里就要用 state 状态。状态就是说这个组件可能在**某一个时间或者是发生了什么事件之后**，会发生一些变化，就拿这个例子来说，咱们要展示一个渐变的背景，那么这个**背景颜色**就要根据用户所选择的颜色来发生改变，这个颜色因为是变化的，所以说它就要定义成一个 state，它的值是在用户选择完颜色之后来进行更新的。

使用 State 跟普通 JavaScript 相比，它的好处是：

- 在组件内部管理状态，代码封装性好，出错的话也容易定位到问题组件。
- 数据和展示分离，只需要修改 state 的值，就能更新对应的组件。
- state 可以通过 props 向下传递给其他组件，只要 state 改变，所有使用它的组件都会刷新。

接下来看一下这个例子怎么实现。


## 创建 React 工程

首先还是要创建一个 raect 工程，用 create react app。

1. 使用 create-react-app 创建一个工程：

   ```bash
   yarn create react-app react-gradient-bg
   ```

   等同于

   ```bash
   npx create-react-app react-gradient-bg
   ```

## 创建 Gradient 组件

工程创建好之后，咱们在 src 里面创建一个新的组件 (也就是文件夹) 叫 `Gradient`。

> 这个简单的示例的代码整个都在这个 gradient 组件里边。他有两个颜色选>择器。然后一个重置按钮。整个背景是由用户选择的两个颜色组成的一个 75 度的渐变。当用户在选择颜色的时候，这个背景会动态的根据用户选择的颜色发生变化，点击重置按钮之后，背景颜色会变成初始的默认值。

咱们先来看 html 的结构。

### 编写 html 结构

```jsx
function Gradient() {
  <div className={styles.container}>
    <div className={styles.inputGroup}>
      <label>请选择第一个颜色</label>
      <input type="color" name="color1" className={styles.inputColor} />
    </div>
    <div className={styles.inputGroup}>
      <label>请选择第二个颜色</label>
      <input type="color" name="color2" className={styles.inputColor} />
    </div>

    <button className={styles.button}>重置为默认</button>
  </div>;
}
```

这里：

- 定义了两个 `type` 为 `color`的 `input`，这是 html 原生的颜色选择器组件， 如果浏览器不支持就会变成颜色输入框，可以输入#FFFFFF 之类的颜色值。
- 定义了一个重置按钮。
- 样式可以在源代码中查看。

### 创建 state

创建 state 用 react 内置的 `useState` hook。

```javascript
// 设置两个 state，给默认值
const [color1, setColor1] = useState("#00F260");
const [color2, setColor2] = useState("#0575E6");
```

- 它接受一个参数，是 state 的默认值，然后返回一个数组，数组里面有两个元素，第 1 个元素是 state 的值，然后第 2 个元素是改变这个 state 的函数。
- 这里定义了两个 color state。

接着给最外层容器 div 设置一个 style，让它的背景色为渐变的，使用这两个 color 的值：

```jsx {4-6}
return (
    <div
      className={styles.container}
      style={{
        background: `linear-gradient(75deg, ${color1}, ${color2})`
      }}
    >
    // ...
    </div>
```

### 处理 input 事件

接下来就是处理这两个颜色状态的改变，表单元素 input、 select 等会触发 `onChange` 这个事件，也就是说当用户在里边输入值或者是选择选项的时候。

咱们可以在这个组件的函数里边，先定义一个处理函数。比如说叫 `handleInputChange`：

```javascript {5,7}
function handleInputChange(e) {
  const { name, value } = e.target;
  // 使用 name 区分，这里也可以用 switch
  if (name === "color1") {
    setColor1(value);
  } else if (name === "color2") {
    setColor2(value);
  }
}
```

- react 会在触发事件的时候，给事件处理函数传递一个参数 `event`，代表这个事件它的本身，但是这个事件是合成的，它不是原生的 html 的 event，不过它里面的属性和 html 的基本上一样。
- 这个 `event` 里面有一个 `target` 属性，就是说是谁触发了一个事件，那这里就是这两个 input。
- 获取到 input 的 target 之后就可以获取到 input 标签里面的属性，比如说 `name` 和 `value`。
- 后面可以根据 name 来区分是哪个 input 触发的事件，然后把新的颜色用 `setXXX` 的函数，来把颜色更新。

最后把处理函数和状态的值添加到 input 组件上，注意在 JSX 里边，html 的属性都是驼峰命名法，不是全部小写的那种：

```jsx {7,8,17,18}
<div className={styles.inputGroup}>
   <label>请选择第一个颜色</label>
   <input
      type="color"
      name="color1"
      className={styles.inputColor}
      value={color1}
      onChange={handleInputChange}
   />
</div>
<div className={styles.inputGroup}>
   <label>请选择第二个颜色</label>
   <input
      type="color"
      name="color2"
      className={styles.inputColor}
      value={color2}
      onChange={handleInputChange}
   />
</div>

```

### 处理按钮事件

定义按钮的处理函数，用来重置颜色为默认值：

```javascript
// 重置按钮事件
function handleClick() {
  setColor1("#00F260");
  setColor2("#0575E6");
}
```

添加到按钮：

```jsx
<button onClick={handleClick} className={styles.button}>
  重置为默认
</button>
```

### 箭头函数形式

上边的处理函数，也可以使用箭头函数，直接在标签处定义内联的事件处理：

```jsx {4,9,12-15}
<input
   //...
   name="color1"
   onChange={e => setColor1(e.target.value)}
/>
<input
   //...
   name="color2"
   onChange={e => setColor2(e.target.value)}
/>
<button
   onClick={() => {
      setColor1("#00F260");
      setColor2("#0575E6");
   }}
>
   重置为默认
</button>

```

### 总结

好，这个渐变背景生成器现在就把它写完了，你也可以把它扩展一下，比如可以自定义渐变的角度，选择多个颜色等等。今天用它把 React 的 state 和 event 两个概念讲了一下，也很简单，是不是？来复习一下需要注意的几个点：

- Props 的值是只读不可变的，改变它的值不会引起组件更新。
- 需要改变的值要用 state，使用 useState hook 来创建。
- 事件处理中的 Event 参数是合成的，属性和原生的 event 基本一样。

你学会了吗？如果有问题就到 B 站和微博给我留言吧。
