---
slug: wechat-stickers-effect
title: 从 0 仿微信 8.0 动态表情实现过程
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
description: 微信 8.0 更新的一大特色就是支持动画表情，如果发送的消息只有一个内置的表情图标，这个表情会有一段简单的动画，一些特殊的表情还有全屏特效，例如烟花表情有全屏放烟花的特效，炸弹表情有爆炸动画并且消息和头像也会随之震动。本着作为前端工程师的职业精神，我就想看看能不能实现一个类似的特效。折腾许久之后，做出来的效果如下：
tags: [前端, React]
bvid: BV1SA411u7Lv
oid: 331491643
---

微信 8.0 更新的一大特色就是支持动画表情，如果发送的消息只有一个内置的表情图标，这个表情会有一段简单的动画，一些特殊的表情还有全屏特效，例如烟花表情有全屏放烟花的特效，炸弹表情有爆炸动画并且消息和头像也会随之震动。本着作为前端工程师的职业精神，我就想看看能不能实现一个类似的特效。折腾许久之后，做出来的效果如下：

<img src={require("./img/2021-01-24-wechat-stickers-demo.gif").default} width="300" />

<!-- truncate -->

<!-- [B 站视频 - 点击传送]() -->


集中贴出需要的链接：

- 示例地址：https://zxuqian.github.io/html-css-examples/31-05-wechat-emoji-effect/
- 代码地址：https://github.com/zxuqian/html-css-examples/tree/master/31-05-wechat-emoji-effect
- lottie: https://cdnjs.com/libraries/bodymovin ，下载 lottie.min.js
- 南瓜表情：https://lottiefiles.com/43215-pumpkins-sticker-4
- 炸弹表情：https://lottiefiles.com/3145-bomb
- 爆炸动画：https://lottiefiles.com/9990-explosion

项目的核心是使用到了 lottie 动画库。Lottie 是 Airbnb 出品的、全平台（Web、Android、IOS、React Native）的动画库，它的特点在于能够直接播放使用 Adobe After Effects 制作的动画。设计师在 After Effects 中，利用 Bodymovin 插件把动画导出为 JSON 格式之后，开发者就能够通过相应平台的 SDK 进行播放。

- Lottie 官网：[https://airbnb.io/lottie](https://airbnb.io/lottie/#/)

在做完这个项目之后我感觉到自己的前端储备又丰富了一层，在以后应对复杂特效时又有了新的思路，如果你也想进一步提升前端开发技能，可以跟着这篇文章实践一下。本篇文章除了使用 lottie 库之外，全部都是使用原生 HTML/CSS/JavaScript 实现的，这样无论你是 React、Vue 还是其它工程师，都可以快速掌握。

## 一、编写界面

本来想跳过 HTML/CSS 部分，但是想到 CSS 可能是大部分人的弱项，所以我决定还是把实现界面的思路写一下，想看核心部分的可以直接跳到：**二、发送普通消息**部分。

### 1. HTML 部分

首先看 HTML 部分，从效果图来看：

- 上边有一个标题栏，显示与 XXX 聊天。
- 中间是聊天信息面板，包含着双方发送的消息，每条消息由发送者头像和消息内容组成，我发送的在右侧，对方发送的在左侧。
- 下方是底部信息，有表情选择按钮、编辑消息文本框和发送按钮。

那么根据这个结构编写的 HTML 代码如下所示：

```html
<main>
  <div class="chat">
    <div class="titleBar">与 XXX 聊天</div>
    <div class="panel">
      <div class="message mine">
        <img src="./me.png" alt="" />
        <p><span>你好</span></p>
      </div>
      <div class="message yours">
        <img class="avatar" src="./you.png" alt="" />
        <p><span>Hi</span></p>
      </div>
      <!-- 省略其它消息 -->
    </div>
    <footer>
      <button class="chooseSticker">
        <img src="./emoji.svg" alt="" />
        <div class="stickers"></div>
      </button>
      <input
             class="messageInput"
             type="text"
             name=""
             id=""
             placeholder="请输入聊天信息"
             />
      <button class="send">发送</button>
    </footer>
  </div>
</main>
```

各个元素所对应的界面部分为：

- `<main />` 元素是一个整体的容器，用于把聊天窗口居中对齐
- `<div class="chat">` 是聊天应用的容器，用于布局标题栏、聊天面板和底部发送框。
- `<div class="titleBar">` 用于显示标题栏。
- `<div class="panel">` 是消息面板，用于布局其中的消息。
- `<div class="message">` 为消息容器，使用不同的 class 来区分发送方， `mine` 代表我发送的， `yours` 代表对方发送的。每条消息里边使用 `<img class="avatar" >` 来展示头像，使用 `<p>` 元素来显示文本， `<p>` 元素里边的 `<span>` 元素将会作为 lottie 的容器来播放表情动画。
- `<footer>` 用于布局底部操作按钮和消息发送框。其中：

  - `<button class="chooseSticker">` 是表情选择按钮，使用一个笑脸 svg 图片表示，里边的 `<div class="stickers">` 是表情选择框弹出层，里边的表情将在 JS 中动态加载，目的是为了实现动画预览。
  - `<input class="messageInput" />` 是聊天消息输入框，没什么特别的。
  - `<button class="send">` 是发送按钮

这个是 HTML 的基本结构，接下来看一下 CSS 样式。

### 2. CSS 部分

在项目根目录下创建一个 style.css 文件并在 index.html 的 `<head>` 标签中引入：

```
<link rel="stylesheet" href="style.css" />
```

#### 1）全局样式

首先定义一些 CSS 变量，CSS 变量是为了方便我们引用同一属性值的，后边如果更新样式时，可以避免多次修改：

```
:root {
  --primary-color: hsl(200, 100%, 48%);
  --inverse-color: hsl(310, 90%, 60%);
  --shadow-large: 0 0px 24px hsl(0, 0%, 0%, 0.2);
  --shadow-medium: 0 0 12px hsl(0, 0%, 0%, 0.1);
}
```

这些变量的含义分别是：

- `--primary-color: hsl(200, 100%, 48%)` ，主色调，例如我发送的消息的蓝色背景。
- `--inverse-color: hsl(310, 90%, 60%)` ，反色调，或强调色调，与主色调形成鲜明对比，例如发送按钮的背景色。
- `--shadow-large: 0 0px 24px hsl(0, 0%, 0%, 0.2)` ，大阴影，例如标题栏、底部栏的阴影。
- `--shadow-medium: 0 0 12px hsl(0, 0%, 0%, 0.1)` ，小阴影，例如输入框和表情选择弹出层。

接下来是一些重置样式：

```
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}
```

这些样式对所有元素都有效，设置盒子模型为 `border-box` ，这样内边距、边框都算在宽高之内，设置内间距和外间距为 0，最后设置默认字体。

#### 2）Main 容器

Main 容器用于定位聊天应用容器到浏览器中间，使用 grid 布局，宽高分别设置为浏览器可视区域的 100%，并把背景色设置为黑灰色：

```
main {
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  background-color: hsl(0, 0%, 10%);
}
```

#### 3）聊天应用容器

聊天应用容器设置了固定宽高，模拟手机屏幕，并使用 grid 布局来控制标题栏、聊天面板和底部操作栏的位置：

```
.chat {
  width: 375px;
  height: 700px;
  background: hsl(0, 0%, 100%);
  border-radius: 8px;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
}
```

这里使用了 `grid-template-rows` 把聊天应用分成了 3 行，第一行的标题栏和最后一行的标底部操作栏的高度分别为内容的最大高度，中间的聊天面板则是浮动高度。

#### 4）标题栏

标题栏简单的设置了一个内间距、文字居中方式和阴影：

```
.titleBar {
  padding: 24px 0;
  text-align: center;
  box-shadow: var(--shadow-large);
}
```

:::tip
界面优化提示：内间距用来增加留白，在视觉上引起放松，阴影则为了和下边的聊天面板区分开
:::

#### 5）聊天面板

聊天面板使用 flex 布局对其中的消息进行排列，并设置方向为按列排布，然后设置 overflow 为 auto，在消息整体高度超出面板高度时，出现滚动条：

```
.panel {
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
  overflow: auto;
}
```
:::tip
界面优化提示：这里的 padding 同样是为了留出足够多的空白，来与其它元素隔开一段距离，以避免拥挤感。
:::

#### 6）消息

消息分为消息容器、头像和消息体 3 个部分。其中消息体和头像包含在消息容器中，先来看消息容器的样式。消息容器使用 flex 布局来把消息体和头像放在一行，宽度最大为面板宽度的 80%，并设置字体和外边距：

```
.message {
  display: flex;
  max-width: 80%;
  font-size: 14px;
  margin: 8px 0;
  position: relative;
}
```

这里的 `position` 设置为 relative 是为了定位后边的全屏特效动画。

头像简单设置了宽高、圆角和距离消息体的间距：

```
.message img {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  margin-right: 12px;
}
```
:::tip
界面优化提示：这里不得不再提一下间距的重要性，一定不要把各个元素安排的太过紧凑，否则十分影响视觉效果，最直接的影响就是引起视觉上的拥挤感，造成视觉疲劳。
:::

消息体同样的设置了间距和圆角，这里的圆角和头像的保持一致，以增加和谐感。它还设置了阴影，并使用 flex 布局，把里边的文字或表情消息居中对齐：

```
.message p {
  padding: 8px 12px;
  border-radius: 12px;
  box-shadow: var(--shadow-large);
  display: flex;
  align-items: center;
}
```

这些样式默认都是基于对方的消息的，如果是我发送的消息需要放到右边，并作一些调整。首先对于我发送的消息，把 flex-flow 改为 row-reverse 这样头像和消息体的位置就互换了，然后使用 align-self 对齐到面板的右边：

```
.message.mine {
  flex-flow: row-reverse;
  align-self: flex-end;
}
```

调整头像的外边距，现在应该是距离**左边**的消息体的边距了：

```
.message.mine img {
  margin-right: 0;
  margin-left: 12px;
}
```

设置消息体的背景色为蓝色，文字为白色：

```
.message.mine p {
  background-color: var(--primary-color);
  color: white;
}
```

#### 7）底部操作栏

先看底部操作栏容器的整体布局，使用 grid 布局把表情选择按钮、消息发送框和发送按钮分成 3 列，其中除消息发送框为浮动宽度外，其它的两个按钮为固定宽度，默认居中对齐，最后设置阴影和间距：

```
footer {
  display: grid;
  grid-template-columns: 48px 1fr 75px;
  justify-items: center;
  padding: 12px;
  box-shadow: var(--shadow-large);
}
```

表情选择按钮把自己进行了靠左对齐，并设置相对定位，用于定位表情选择弹出层，然后设置按钮图标的大小：

```
.chooseSticker {
  justify-self: start;
  position: relative;
}
.chooseSticker img {
  width: 36px;
  height: 36px;
}
```

表情选择弹出层的 CSS 代码比较多但都很简单，先看一下代码：

```
.stickers {
  display: grid;
  grid-template-columns: repeat(auto-fill, 24px);
  column-gap: 18px;
  
  border-radius: 8px;
  background-color: white;
  box-shadow: var(--shadow-medium);
  padding: 6px 12px;
  font-size: 24px;
  
  position: absolute;
  top: calc(-100% - 18px);
  width: 300px;
  opacity: 0;
}
```

这段代码的含义是：

- 弹出层使用 grid 布局，repeat(auto-fill, 24px) 指的是在宽度允许的条件下，在一行中尽可能放置最多的列元素，每列的宽度固定为 24px。然后设置列间距为 18px。
- 设置圆角、背景色、阴影、内间距和字体大小。
- 定位设置为绝对定位，把它向上移动**包含元素高度**（也就是 .chooseSticker 的高度）的 100% 并减去 18px，调整到合适的位置。宽度设置为 300px，透明度设置为 0 把它隐藏。

消息输入框和按钮的样式比较简单，消息输入框的宽度占满整列，发送按钮使用 `justify-self: end` 把自己进行靠右对齐。这里把代码一次性贴出来：

```
.messageInput {
  box-shadow: var(--shadow-medium);
  padding: 0px 12px;
  border-radius: 8px;
  width: 100%;
}

.send {
  height: 100%;
  width: 90%;
  border-radius: 8px;
  justify-self: end;
  color: white;
  background-color: var(--inverse-color);
}
```

最后再添加一个 `.show` 样式，用于在点击发送表情按钮时，给表情弹出层添加该样式以显示出来：

```
.show {
  opacity: 1;
}
```

### 3. JS 部分

在给聊天界面加上功能之前，先编写一些基础的 JS 代码。在项目根目录创建一个 index.js 文件，并在 index.html 中引用，注意放到 `</body>` 关闭标签的上方，这样当 HTML DOM 加载完成之后才会执行 js 中的代码，防止找不到元素：

```
 <body>
   <!-- 其它代码省略 -->
   <script src="index.js"></script>
 </body>
```

在 index.js 中，先获取要操作的 DOM 元素：

```
const panelEle = document.querySelector(".panel");
const chooseStickerBtn = document.querySelector(".chooseSticker");
const stickersEle = document.querySelector(".stickers");
const msgInputEle = document.querySelector(".messageInput");
const sendBtn = document.querySelector(".send");
```

其中：

- `panelEle` 是消息面板元素，用于追加新消息。
- `chooseStickerBtn` 是选择表情按钮，点击它会弹出表情选择框。
- `stickersEle` 就是弹出的表情选择框。
- `msgInputEle` 是消息输入框。
- `sendBtn` 为发送按钮。

然后引入 lottie 的 js 库，可以到示例代码仓库中下载，也可以在 https://cdnjs.com/libraries/bodymovin 中下载 lottie.min.js，下载完成之后放到项目根目录，然后在 index.html 中，在引入 index.js 的上方引入它：

```
<script src="lottie.min.js"></script>
```

下载表情动画资源文件，它们都是 json 格式的文件，下载完成之后直接放到项目根目录即可：

- 南瓜表情：https://lottiefiles.com/43215-pumpkins-sticker-4
- 炸弹表情：https://lottiefiles.com/3145-bomb
- 爆炸动画：https://lottiefiles.com/9990-explosion

接下来看一下各部分功能是怎么实现的。

## 二、发送普通消息

发送普通消息时，用户在输入框输入完消息之后，点击发送，就会把该条消息追加到消息列表中，并清空输入框中的内容。那么这里先给发送按钮添加点击事件：

```
sendBtn.addEventListener("click", () => {
  const msg = msgInputEle.value;
  if (msg) {
    appendMsg(msg);
  }
});
```

在事件处理函数中：

- 判断用户是否输入了消息。
- 如果输入了就追加到消息列表中。

来看一下 `appendMsg()` 函数的代码：

```
function appendMsg(msg, type) {
  // 创建消息元素
  const msgEle = panelEle.appendChild(document.createElement("div"));
  msgEle.classList.add("message", "mine"); // 设置为“我“发送的样式
  msgEle.innerHTML = `
    <img class="avatar" src="./me.png" alt="" />
    <p><span>${msg}</span></p>
  `;
  // 滚动到最新消息
  panelEle.scrollTop = panelEle.scrollHeight;
  msgInputEle.value = "";
}
```

函数接收两个参数，msg 和 type，分别是要追加的消息内容和类型，type 为可选的，不传则认为是普通文本消息，如果传递了 "stickers" 则为表情消息，现在还用不到它。在这个函数中主要做了下面几件事情：

- 按照消息的 HTML 结构创建一个新的消息元素 msgEle，并追加到消息列表中。
- 把消息的样式设置为我发送的。
- 内部的元素分别为头像和文本消息，使用模板字符串的形式赋值给 msgEle 的 innerHTML 属性中，并在 `<p>` 中使用 msg 变量的值。
- 最后把滚动条滚动到最新的消息处，并清空输入框中的消息。

这样就可以发送普通的文本消息了。

## 三、发送动画表情

在发送动画表情之前，需要先加载动画表情。在 index.js 的最上方先定义表情名称和表情动画文件路径的键值对信息：

```
const stickers = {
  bomb: {
    path: "./3145-bomb.json",
  },
  pumpkin: {
    path: "./43215-pumpkins-sticker-4.json",
  },
};
```

我们会根据 `bomb` 、 `pumkin` 这样的 key 来找到对应的动画路径。接着初始化弹出层中的表情以供用户选择：

```
// 初始化表情面板，也可以在表情选择窗弹出时再初始化
Object.keys(stickers).forEach((key) => {
  const lottieEle = stickersEle.appendChild(document.createElement("span"));
  // 对每个表情创建 lottie 播放器
  const player = lottie.loadAnimation({
    container: lottieEle,
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: stickers[key].path,
  });

  // 当选择表情时，发送消息，并设置类型为 sticker 表情消息
  lottieEle.addEventListener("click", () => {
    appendMsg(key, "sticker");
  });

  // 当鼠标划过时，播放动画预览
  lottieEle.addEventListener("mouseover", () => {
    player.play();
  });
  // 当鼠标划过时，停止动画预览
  lottieEle.addEventListener("mouseleave", () => {
    player.stop();
  });
});
```

这里的代码分别作了下边这些操作：

- 遍历存储表情信息的对象。
- 创建一个 lottie 的容器，使用 span 元素，因为 lottie 动画的播放器需要挂载到一个具体的 html 元素中。
- 调用 lottie 的 loadAnimation() 加载动画，它需要传递这样几个参数：
  - container: 播放器要挂载到的容器。
  - renderer：可以选择是使用 svg 还是 canvas 渲染动画。
  - loop: 是否循环播放，由于此处是在表情选择弹出层中预览动画，所以支持循环播放。
  - autoplay：是否自动播放，这里设置为了否，后边让它在鼠标划过时再播放动画。
  - path：动画 json 文件路径，直接从对象中获取。

- loadAnimation() 会返回 lottie 的实例，把它保存在 player 中。

然后后边则注册了几个事件：

- 当 lottieEle 也就是表情被点击时，发送表情消息，给 appendMsg() 的 msg 参数设置为表情的 key，type 参数设置为 "sticker"。
- 当鼠标划过表情时，开始播放动画。
- 当鼠标划出表情时，停止动画。

接着给发送表情按钮添加事件，点击时，切换表情弹出层的显示状态：

```
chooseStickerBtn.addEventListener("click", () => {
  stickersEle.classList.toggle("show");
});
```

这时点击发送表情按钮就可以看到表情选择弹出层了。现在还不能发送表情，因为还没在 appendMsg() 函数中处理，现在来修改一下它里边的代码。首先判断：如果是表情消息，则不在消息中的 `<p>` 元素里添加任何信息：

```
function appendMsg(msg, type) {
 // ... 
  msgEle.innerHTML = `
    <img class="avatar" src="./me.png" alt="" />
    <p><span>${type === "sticker" ? "" : msg}</span></p>
  `;
}
```

然后在它的下方，调用 playSticker() 函数来播放动画：

```
// 处理表情消息，播放相关动画
if (type === "sticker") {
  playSticker(msg, msgEle);
}
```

playSticker() 函数接收两个参数，一个是表情的 key，一个是消息元素。此时的 msg 变量的内容就是在 lottieEle 点击事件中传递过来的表情 key。函数中的代码如下：

```
function playSticker(key, msgEle) {
  // 表情消息，创建 lottie 动画
  const lottieEle = msgEle.querySelector("span");
  lottieEle.style.width = "40px";
  lottieEle.style.height = "40px";
  lottie.loadAnimation({
    container: lottieEle,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: stickers[key].path,
  });
}
```

在这个函数里主要做了下边几项操作：

- 获取消息中的 span 元素，它将作为 lottie 的动画容器。
- 设置表情动画的宽高为 40px。
- 使用 lottie 加载动画，并设置循环播放为  false，自动播放为 true，来让表情发送时自动播放动画，且只播放一次。

现在可以发送表情消息了，相关的动画也会自动播放，接下来看一下怎么实现炸弹的全屏动画和对消息元素的晃动效果。

## 四、发送带全屏特效的表情

对于这种带全屏特效的表情可以单独进行判断，也可以在保存表情的对象中定义相关的操作，这里为了简单起见，我们单独判断用户是否发送了炸弹表情，然后施加相应特效。

首先在 appendMsg() 函数里，进行判断，如果发送的消息是表情消息，且表情为炸弹，则播放全屏动画并晃动消息：

```
function appendMsg(msg, type) {
  if (type === "sticker") {
    playSticker(msg, msgEle);
    if (msg === "bomb") {
      // 播放爆炸动画
      setTimeout(() => {
        playExplosion(msgEle);
      }, 800);
      // 晃动消息列表
      shakeMessages();
    }
  }
}
```

这里爆炸全屏动画延迟了 800 毫秒之后再执行，目的是在炸弹表情播放到合适的时间时，再播放全屏动画，播放动画使用了 playExplosion() 函数，并传递了消息元素进去。在爆炸全屏动画结束之后，调用 shakeMessages() 来晃动消息。这里先看一下 playExplosion() 函数的代码：

```
function playExplosion(anchor) {
  const explosionAnimeEle = anchor.appendChild(document.createElement("div"));
  explosionAnimeEle.style.position = "absolute";
  explosionAnimeEle.style.width = "200px";
  explosionAnimeEle.style.height = "100px";
  explosionAnimeEle.style.right = 0;
  explosionAnimeEle.style.bottom = 0;

  const explosionPlayer = lottie.loadAnimation({
    container: explosionAnimeEle,
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "./9990-explosion.json",
  });
  explosionPlayer.setSpeed(0.3);
  // 播放完成后，销毁爆炸相关的动画和元素
  explosionPlayer.addEventListener("complete", () => {
    explosionPlayer.destroy();
    explosionAnimeEle.remove();
  });
}
```

playExplosion() 函数接收一个 anchor 锚点，就是说基于哪个位置开始播放全屏动画，由于示例中的动画画幅比较小，所以把它固定在了最新发送的消息的下方，这里爆炸动画的 anchor 就是消息元素，之后函数做了下边的这些操作：

- 添加全屏动画元素，设置为绝对定位，宽度 200px，高度 100px，放在最新消息元素的右下角。
- 加载 lottie 动画，不循环、自动播放。
- 由于原动画速度过快，这里调用 lottie 实例的 setSpeed() 方法，把速度设置为 0.3 倍速。
- 之后给 lottie 实例设置事件监听："complete"，它会在动画执行完成时触发，里边销毁了 lottie 实例和全屏动画元素。

这样全屏动画的效果就实现了。接下来看消息晃动的代码：

```
function shakeMessages() {
  [...panelEle.children]
    .reverse()
    .slice(0, 5)
    .forEach((messageEle) => {
      const avatarEle = messageEle.querySelector("img");
      const msgContentEle = messageEle.querySelector("p");
      avatarEle.classList.remove("shake");
      msgContentEle.classList.remove("shake");
      setTimeout(() => {
        avatarEle.classList.add("shake");
        msgContentEle.classList.add("shake");
      }, 700);
    });
}
```

这个函数的操作是：

- 使用 reverse()  和 slice() 对最新的 5 条消息进行晃动，也可以把 5 改大一点，对更多消息进行晃动。
- 然后在循环中，分别给头像和消息添加 shake class 执行晃动动画，这个 class 的内容稍后再介绍。
- 要注意的是，在添加 shake  class执行动画前，需要先删除 shake，因为有的消息可能在之前已经晃动过了，例如当连续发了多个炸弹表情时。后边在添加 shake class 时，使用 setTimeout() 延迟了 700 毫秒，目的是在全屏动画执行到一定程度时再晃动消息。

接下来看一下 shake class 的定义，在 style.css 中添加下方代码：

```
.shake {
  animation: shake 0.8s ease-in-out;
}

@keyframes shake {
  from {
    transform: translate3d(0, 0px, 0px);
  }
  10% {
    transform: translate3d(6px, -6px, 0px);
  }
  20% {
    transform: translate3d(-5px, 5px, 0px);
  }
  30% {
    transform: translate3d(4px, -4px, 0px);
  }
  35% {
    transform: translate3d(-3px, 3px, 0px);
  }
  39% {
    transform: translate3d(2px, -2px, 0px);
  }
  41% {
    transform: translate3d(-1px, 1px, 0px);
  }
  42% {
    transform: translate3d(0px, 0px, 0px) rotate(20deg);
  }

  52% {
    transform: rotate(-15deg);
  }

  60% {
    transform: rotate(8deg);
  }

  65% {
    transform: rotate(-3deg);
  }

  67% {
    transform: rotate(1deg);
  }

  70% {
    transform: rotate(0deg);
  }

  to {
    transform: translate3d(0px, 0px, 0px) rotate(0);
  }
}
```

`.shake` 中使用了 shake keyframes 定义的动画，执行时间为 0.8s，动画执行函数为 ease-in-out。Keyframes 里的代码比较多，但是都是很简单的，就是模拟了爆炸时的效果，移动 x 轴和 y 轴的偏移，每次的偏移幅度越来越小，并且越来越快，可以看到百分比的间隔越来越小。在动画进行到 42% 的时候，加了一些旋转动画，这样就有了落地时的震动效果。由于使用 rotate() 旋转时的轴心在元素中间，我们可以把消息气泡的轴心修改一下来实现更真实的效果：

```
.message p {
  transform-origin: left bottom;
}
.message.mine p {
  transform-origin: right bottom;
}
```

这里把对方发送的消息的轴心设置在左下角，自己发送的消息则设置在了右下角。

## 总结

现在，这个模拟微信 8.0 动画表情的功能就实现了。主要就是下边几点：

- 使用 lottie 库加载并播放动画。
- 确定全屏动画的位置和播放时机。
- 消息晃动动画的 CSS 实现。

你学会了吗？如果有问题或建议可以留个评论，喜欢此文章请点个赞或关注我，后边还有更多更精彩的文章，感谢！

<!-- [>> 在 B 站参与讨论]() -->

