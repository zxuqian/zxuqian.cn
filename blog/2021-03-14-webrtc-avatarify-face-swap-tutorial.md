---
slug: webrtc-avatarify-face-swap-tutorial
title: 实现前端网页 WebRTC 视频通话以及换脸特效
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
description: 请输入描述
tags: [前端, WebRTC, avatarify]
activityId: "501899252469610680"
---

因为疫情的原因，线上视频会议软件异军突起，成为了在家办公的主要沟通渠道。而最近抖音上“蚂蚁呀嘿”恶搞换脸的小视频也突然火了起来，那我就想了想能不能在视频会议的时候换张脸活跃下气氛？在 Github 上一番搜寻之后发现还真有办法，有一个开源的 Python 人工智能换脸的库，那正好趁着这个机会研究一下前端 WebRTC 实现视频通话功能，外加换脸操作。先看一下效果吧：

<!-- truncate -->

<Video src={require("./img/2021-03-14-webrtc-avatarify-face-swap-tutorial/webrtc-avatarify-face-swap-demo.mp4").default} />

因为有涉及到一点点的后台，所以项目分成了两部分，一个是用于存放前端代码的 frontend 项目和存放后端代码的 backend 项目：

```bash
项目根目录
  |-- backend
  |-- frontend
```

另外这个视频需要电脑上有摄像头，没有的话可以想办法把手机当作电脑的摄像头。

**注意：本教程中的代码仅供展示 AI 换脸技术的应用，不可以用于获取其他人隐私或其他任何非法目的。**

## 编写页面

因为是前端实现，首先肯定是编写页面。这个页面比较简单，就是一个视频组件、显示用户 ID 的文本、呼叫对方视频的输入框和按钮，视频组件默认显示自己的视频，当视频接通之后就会显示对方的视频，而自己的视频会缩小到右上角。

### HTML

在 frontend 目录下新建 index.html、style.css 和 index.js 文件。首先看一下 HTML 结构，index.html 中主要的代码如下：

```html
<!-- frontend/index.html -->
<head>
  <!-- 其他代码 -->
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <main>
    <div id="container">
      <div class="videos">
        <video id="myVideo" class="videoSize" autoplay></video>
        <video id="peerVideo" class="videoSize" autoplay></video>
      </div>
      <p id="idText"></p>
      <div class="call">
        <input type="text" id="peerIdInput" placeholder="请输入对方 id" />
        <button id="joinBtn">视频通话</button>
      </div>
    </div>
  </main>
  <script src="index.js"></script>
</body>
```

每个标签的作用是：

- `<main />`  用于设置页面背景，把所有组件居中对齐。
- `<div class="videos">`  里边分别放了显示自己视频 `#myVideo`  和对方视频 `#peerVideo`  的 `<video />`  组件，并设置为自动播放，以便于在加载摄像头后立刻开始播放画面。
- `<p id="idText">` 在页面打开时显示自己的用户 ID，相当于是电话号码。
- `<div class="call">`  里是输入对方 ID 的文本框 `#peerIdInput`  和呼叫按钮 `#joinBtn` 。
- 最后在 `<head />`  中引入样式文件 style.css，在 `<body />`  结束前引入 index.js。我们将主要在 index.js 中编写代码。

### CSS

css 的代码都比较简单，基本就是设置一下样式，这里介绍一下重要的部分，剩余的可以在源代码中查看。因为自己的视频要在视频接通时移动到右上角，那么就需要把 `<div class="videos"> ` 容器设置为相对定位，把我的视频和对方的视频设置成一样的宽高，然后先隐藏对方视频，当视频接通时，利用 JavaScript 加上接通后，我的视频的样式，把我的视频设置为绝对定位，宽高调小，放到右上角：

```css
/* frontend/style.css */
videos {
  position: relative;
}

.videoSize {
  width: 500px;
  height: 600px;
  object-fit: cover; /* 让视频按比例占满整个空间 */
}

.rightTop {
  /* 以下是通话中的样式 */
  position: absolute;
  width: 150px;
  height: 180px;
  right: 0;
  top: 0;
}

#peerVideo {
  display: none;
}
```

其他组件基本只是设置了下 Grid 布局、宽高、大小、阴影、背景、字体，没有什么特殊的，可以直接查看源代码。样式中所用到的图标在 `frontend/icons`  目录下。

## 访问摄像头

接下来我们先熟悉一下访问摄像头的代码。在 JavaScript 中访问用户的摄像头主要使用 `navigator.mediaDevices.getUserMedia()` 方法，  它接收一个对象作为参数，用于指定要获取的设备，例如视频或音频，然后返回一个 Promise，在 Promise 完成之后它会传递给我们一个 Stream 流，我们把它放到 `<video />`  标签的 `srcObject`  属性中就可以了，是不是很简单？代码如下：

```javascript
// frontend/index.js
const myVideo = document.getElementById("myVideo");

navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    myVideo.srcObject = stream;
  });
```

在这段代码中：

- 获取了 `#myVideo`  这个 `<video />`  组件。
- 使用 `navigator.mediaDevices.getUserMedia()` 并给它传递了一个对象，对象的 video 和 audio 属性都设置为了 true，表示要访问摄像头和音频设备。

这时，使用 VS Code 的 Live Server 插件运行项目（没有的话安装一下，很简单），在 index.html 文件里右击，选择 Open with Live Server，打开之后，浏览器可能会提示此网站需要访问摄像头和音频设备，点击允许，就能看到自己的视频了。

## 编写后台

要实现视频通话，需要使用 WebRTC 技术，这个技术牵扯的概念和 API 过于庞大和复杂，不过有开源的库来帮我们简化了 WebRTC 的操作，这里使用一个叫做 Peer.js 的库，它封装了 WebRTC 杂乱的 API，提供了完整的、可配置的、易于使用的 API。
[https://peerjs.com/](https://peerjs.com/)
我们将会通过把 Peer 附加到 Express.js 服务器上，来生成用户 ID 并管理 WebRTC 连接。首先在 backend 目录下运行：

```bash
npm init -y
# 或
yarn init -y
```

接着初始化一个 node.js 项目，使用 npm 或 yarn 安装 peer 和 express 依赖，因为想在改动代码时自动重启服务，我们也可以再安装一个 nodemon 依赖：

```bash
yarn add peer express nodemon
# 或
npm install --save peer express nodemon
```

安装完成之后新建一个 server.js 文件，整个后台服务我们就只需要这一个文件，都是一些简单的初始化代码，它里边的内容是：

```javascript
const express = require("express");
const { ExpressPeerServer } = require("peer");

const app = express();

const server = app.listen(3000);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/",
});

app.use("/video", peerServer);
```

这些代码的含义是：

- 导入 express 库，并从 peer 库中导入与 express 进行结合的 ExpressPeerServer。
- 创建 express 实例 `app` ，并监听 `3000`  端口。
- 把 ExpressPeerServer 挂载到 express 中，设置 `debug`  开发模式为 true，这样有更好的错误提示。路径为根目录。
- ExpressPeerServer 挂载之后会返回一个 express 的控制器。
- 把返回的控制器挂载到 `/video`  路径下，这样 `/video`  路径就是主要的、peer.js 提供的 WebRTC 通信路径。

然后修改一下 package.json 文件，添加一个 `script`  配置项，里边定义 `start`  命令值为 `nodemon server.js` ：

```json
  "scripts": {
    "start": "nodemon server.js"
  },
```

这样使用 nodemon 运行 server.js 文件后，如果 server.js 中的内容发生变化，它会自动帮助我们重启服务器。
我们现在来运行一下 `yarn start`  或者 `npm start` ，看到命令行提示 `[nodemon] starting node server.js`  就算启动成功了，我们访问一下 `http://localhost:3000/video`  ，看到下方输出结果就说明 peer 也加载成功了：

```json
{
  "name": "PeerJS Server",
  "description": "A server side element to broker connections between PeerJS clients.",
  "website": "https://peerjs.com/"
}
```

后端代码到这里就编写完成了。下一步就是在前端页面中调用 Peer 相关的 api，并建立视频通话。

## 生成用户 ID

在前端中调用后端 Peer 服务可以使用 Peer.js 官方的前端库，可以直接使用 cdn 形式：

```html
<script src="https://unpkg.com/peerjs@1.3.1/dist/peerjs.min.js"></script>
```

也可以打开上边 src 中的网址，把文件保存到本地，或者在 Github 上下载：
[https://github.com/peers/peerjs/blob/master/dist/peerjs.min.js](https://github.com/peers/peerjs/blob/master/dist/peerjs.min.js)
下载完成之后把它放到 `frontend/peer`  目录下，然后在 index.html 中，在引入 index.js 的上方，引入 peerjs：

```html
<script src="peer/peerjs.min.js"></script>
<script src="index.js"></script>
```

接下来打开 index.js 文件，建立与后台 peer 服务的连接：

```javascript
const peer = new Peer({
  host: "localhost",
  port: "3000",
  path: "/video",
});
```

这里直接使用 peer.js 前端库导出的构造函数 Peer()，它接收一个对象作为参数，这里就分别把后台服务的 host、port 和 path 传递进去就可以了，它会返回 peer 实例，后续有关视频通话的操作就主要使用它来实现。
当成功的连接到后台服务之后，我们首先给自己生成一个唯一的用户 ID，就等同于是一个电话号码，那么这里我们可以监听 peer 的 **open**  事件，当连接打开后，会把生成的用户 ID 返回到事件处理回调函数中，然后我们获取 html 中的 `#idText`  这个 p 元素来显示自己的 ID：

```javascript
const idText = document.getElementById("idText");

peer.on("open", (id) => {
  idText.textContent = "我的 id 是：" + id;
});
```

这时在 Live Server 中打开 index.html，就可以看到显示出了 ID，类似于：

```
我的 id 是：2573c3ae-ba79-404a-b807-2128856ef3c9
```

多打开几个页面，可以看到每个人的 ID 都不同。

## 呼叫视频通话

在有了用户 ID 之后，就可以呼叫对方了。这里的逻辑是，用户在输入框输入对方 ID 之后，点击视频通话按钮进行呼叫。那么我们应该先获取视频通话按钮元素，然后监听它的点击事件，在里边发起呼叫：

```javascript
const joinBtn = document.getElementById("joinBtn");
// 发起呼叫
joinBtn.addEventListener("click", () => {
  const peerId = peerIdInput.value;
  console.log("正在连接：" + peerId);

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      const call = peer.call(peerId, stream);
      call.on("stream", showVideo);
    });
});
```

在点击按钮的时候，事件处理函数作了如下操作：

- 获取用户输入的对方的 ID。
- 获取当前用户的视频流，然后调用 `peer.call()`  呼叫对方， `peer.call()`  需要对方的 ID 和自己的视频流作为参数，然后返回与呼叫有关的实例，保存到 call 中。
- 这时当前用户就开始等待对方应答了，为了简单起见，这里没有做等待的样式。
- 下一步监听 call 的 **stream**  事件，这个事件会在对方应答后触发，它会返回对方的视频流作为事件处理函数的参数，然后我们使用 `showVideo()`  函数处理对方的视频流。

`showVideo()`  函数的代码如下：

```javascript
const peerVideo = document.getElementById("peerVideo");

function showVideo(stream) {
  myVideo.classList.add("rightTop");
  peerVideo.srcObject = stream;
  peerVideo.style.display = "block";
}
```

这个函数就是简单的把自己的视频移动到右上角，通过之前定义的 `.rightTop` class 样式，然后把对方的视频流放到 `#peerVideo`  视频组件中，之后把它显示出来（之前设置的是 `display: none`  隐藏）。现在因为一直是等待对方接听，所以需要有一个应答的处理。

## 应答视频通话

应答的处理是监听 peer 的 **call**  事件，然后通过事件参数中与呼叫有关的实例来应答通话：

```javascript
// 应答呼叫
peer.on("call", (call) => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: true })
    .then((stream) => {
      call.answer(stream);
      call.on("stream", showVideo);
    });
});
```

这一步的代码虽然在同一个文件中，但是应该想象为收到视频通话呼叫的对方，代码作了下边的操作：

- 获取自己的视频流。
- 调用 `answer()`  函数应答视频呼叫，并把自己的视频流传回给呼叫者。这里是当有呼叫时直接进行应答，为了简单起见，没有编写点击应答按钮相关的样式和事件。
- 监听 ** stream **  事件，这一步和之前的一样，应答后这个事件就会触发，然后同样使用 `showVideo()` 函数加载视频。

好了，现在打开两个页面试试，在其中一个页面输入另一个页面生成的 ID，然后点击视频通话，就可以看到双方视频显示出来了。如果用的是同一个摄像头，那么显示的画面都是一样的。

## 实现换脸

实现换脸主要是用到了 Avatarify 这个 AI 换脸库，它是使用 Python 编写的，利用了 First-Order Motion Model 算法来实现换脸。我们这里只需要按照步骤进行安装就可以了，此外还需要安装虚拟摄像头软件，用于把 Avatarify 换脸后的数据作为摄像头视频，然后在前端页面中访问这个虚拟的摄像头。
Avatarify 由于是对摄像头的视频进行实时计算，所以对显卡的要求非常高，且只支持启用了 CUDA 的 Nvidia 显卡来进行 GPU 加速，官方的统计数据是这样的：

- GeForce GTX 1080 Ti: 33 帧/秒
- GeForce GTX 1070: 15 帧/秒
- GeForce GTX 950: 9 帧/秒

如果配置达不到，可以使用腾讯云或阿里云的 GPU 实例，把显卡有关的计算交给远程服务器去进行，本地只需要建立视频流即可。本文将主要使用这种方法。
如果配置达到了要求，也可以在本地安装运行，不过我没有试过，后边简单的贴一下官方安装指导（Windows 下），你可以自己尝试一下。
要注意的是，如果是在本地运行算法，可以在 Windows 和 Linux 操作系统中进行，或者也可以使用 docker 进行部署，不过只支持 linux 操作系统下的 docker。

### 购买服务器

这里以腾讯云 GPU 实例为例，介绍一下服务器的配置，关于计费我们会使用按量计费，完成这篇教程所用的总体费用可能在 30 元左右，
用完之后一定要记得**关机或者销毁来停止计费**。如果是关机，记得先把带宽调整为 0，停止带宽计费，然后关机时选择关机不收费选项。
打开下方链接（或复制 [https://curl.qcloud.com/KiCrCXo9](https://curl.qcloud.com/KiCrCXo9) ）：

[腾讯云服务器购买链接](https://cloud.tencent.com/act/cps/redirect?redirect=1001&cps_key=2c427bf21a8dbca51ee45224ab31c2a9&from=console)

然后在选择机型中选择如下配置：

- 计费模式：按量计费。
- 地域：中国香港。这里选择香港地区的原因是安装 Avatarify 需要大量的境外源，例如 Github、Docker、Nividia、Python 等，且数量多，体积也大（有的 700 多 M），在亲身测试过国内区的之后，发现行不通，而香港地区因为延迟相对较低，且访问境外源速度快，所以这里选择了香港。
- 实例：选择 GPU 型，在机型列表中选择 GPU 计算型 GN7，这个是最便宜的，7.16 元/小时。
- 镜像：选择 Ubuntu 64 位 18.04，不要选过高的版本。显卡驱动可能支持不完善。
- 勾选上后台自动安装 GPU 驱动，CUDA 版本选择 10.0.130，cuDNN 版本选择 7.4.2。
- 带宽实测需要 20M 起步，大概 1 元/小时，不过在安装 Avatarify 的时候带宽可以小一点，后边真正开启视频的时候再把它改大。
- **注意这里系统盘费用是 0.03 元/小时，这个在关机后仍然会收取**。

在下一步设置主机中：

- 新建安全组。
- 登录方式这里使用密码，可以选择自行设置，也可以自动生成。

再下一步确认成功后完成购买，稍后就可以在控制台实例列表中看到刚购买的实例了，新购买的机器可能需要等 5 分钟才能配置完成。如果要修改带宽，可以在列表中找到对应的实例，在最右侧操作栏里选择更多->资源调整->调整带宽，进行调整。
因为 Avatarify 需要使用 5557 和 5558 端口，我们需要在安全组中放行这两个端口。点击实例名称超链接，进入实例详情页面，在上方选项卡中选择 **安全组** ，在右侧 **规则预览**  中的 **入站规则**  选项卡里，点击 **编辑规则**，在新页面里的入站规则里，点击 **添加规则，**在对话框里填写：

- 类型：自定义。
- 来源：all。
- 协议端口：TCP:5557,5558
- 策略：允许。

点击完成即可。到这里实例配置就完成了，留意一下实例的公网 IP 地址，稍后使用 SSH 登录时需要用到它。

### 部署 Avatarify

我们使用 Docker 的方式来部署 Avatarify，先登录到我们的 GPU 实例中，可以直接在腾讯云控制台登录，也可以使用 ssh 命令或 putty 工具。这里以 ssh 为例，输入如下命令：

```bash
ssh ubuntu@你的实例ip
```

然后根据提示输入密码，第一次登录可能有一大段英文提示（是否信任设备），直接输入 yes 回车即可。

#### 安装 Docker

登录进去之后先安装 docker，可以直接使用简易的安装脚本：

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

不过实测香港的实例好像并不能访问这个脚本，我们还可以使用普通方式安装，按照以下步骤复制粘贴命令：

```bash
# 第一步
sudo apt-get update

# 第二步
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg

# 第三步
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 第四步
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

这些步骤都是在配置 Docker 的安装仓库源和密钥，接下来运行下面两条命令来安装 Docker：

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

安装完成之后， `docker`  命令需要管理员权限才能运行，每次都需要输入 `sudo`，如果要省略 `sudo` ，可以把当前用户（腾讯云默认为 ubuntu）添加到 docker 用户组中：

```bash
sudo usermod -aG docker ubuntu
```

之后退出 ssh 并重新登录来让配置生效，我们可以运行下面的命令检查 docker 是否安装成功：

```bash
docker run hello-world
```

有打印出 hello world 字样和一大段英文就说明成功了。

#### 安装 Nvidia Docker tookit

要让 docker 使用 GPU，需要安装 Nvidia Docker tookit，这一步也很简单，首先设置 Nvidia 的仓库源：

```bash
distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
   && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \
   && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
```

然后安装 tookit 并重启 Docker：

```bash
sudo apt-get update
sudo apt-get install -y nvidia-docker2
sudo systemctl restart docker
```

运行一个示例 container 检查是否安装成功：

```bash
sudo docker run --rm --gpus all nvidia/cuda:11.0-base nvidia-smi
```

如果打印出类似的如下信息就算成功了：

```bash
Fri Mar  5 08:47:39 2021
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 418.126.02   Driver Version: 418.126.02   CUDA Version: 11.0     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  Tesla T4            Off  | 00000000:00:08.0 Off |                    0 |
| N/A   26C    P8     9W /  70W |      0MiB / 15079MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

#### 构建 Avatarify Docker 镜像

选择一个文件夹，使用 git 克隆 Avatarify 仓库：

```bash
git clone https://github.com/alievk/avatarify.git
```

进入到克隆下来的 avatarify 仓库中，使用 docker 构建镜像：

```bash
cd avatarify
docker build -t avatarify .
```

构建需要的时间比较长，耐心等待完成之后，启动服务：

```bash
bash run.sh --is-worker --docker
```

看到有 5557 和 5558 端口就说明启动成功了。到现在，Avatarify 的服务端配置完成了，之后就是使用客户端调用服务，把计算部分交给我们的 GPU 实例。这时如果担心计费，可以先把实例关机，在本地安装好客户端后再开机。
接下来的步骤以 MacOS 为例，Windows 版可以直接跳到后边的 **Windows 安装方法**  小节。

### 安装 Avatarify 客户端

在本地电脑上，首先安装 Miniconda Python 3.8，可以从这里下载：
[https://docs.conda.io/en/latest/miniconda.html#macosx-installers](https://docs.conda.io/en/latest/miniconda.html#macosx-installers)
或者使用 Homebrew：

```bash
brew install --cask miniconda
```

克隆 avatarify 仓库并运行安装脚本：

```bash
git clone https://github.com/alievk/avatarify.git
cd avatarify
bash scripts/install_mac.sh
```

下载 CamTwist 虚拟摄像头软件（类似 OBS，但是 OBS 的虚拟摄像头在 Mac 中访问不到）并安装：
[http://camtwiststudio.com/download](http://camtwiststudio.com/download)

### 启动 Avatarify 客户端

确保远程 GPU 实例已启动，且运行了 avatarify docker 镜像监听 5557 和 5558 端口，然后在本地克隆的 avatarify 仓库中，运行 mac 客户端：

```bash
./run_mac.sh --is-client --in-addr tcp://server_address:5557 --out-addr tcp://server_address:5558
```

记得把两个 `server_address`  改成 GPU 实例的公网 IP。服务端可能需要下载一些必要的文件，所以连接会慢一些，稍等启动成功后 Avatarify 会自动打开摄像头窗口。
我们可以根据提示调整好脸部位置，这里我们最好把脸放到红色矩形框中，光线要充足，不能太黑，可以使用 W/D 键缩放画面，调整好之后按 X 键就可以呼出换脸之后的预览视频窗口，它就是作为虚拟摄像头的视频来源。
Avatarify 内置了 9 张示例的人脸照片，可以按 1-9 键进行切换，也可以自定义人脸照片，放到 Avatarify 中的 `avatars`  文件夹下。
Avatarify 成功显示之后，打开 CamTwist 虚拟摄像头，在左侧选择 Desktop+，然后点击底部的 select，然后在右侧的 settings 下，勾上 Confine to Application Window，然后勾上下方的 Select from existing windows ，在下拉框中选择 python (avatarify) ，如果找不到可以退出 CamTwist 重新打开，或者多点击下拉框几次试试。现在虚拟摄像头就准备好了。

### Windows 安装方法

在 Windows 下的安装方法与 MacOS 类似，而且如果显卡配置够高，可以省略购买远程 GPU 服务器步骤。

1. 首先安装 Minicoda Python 3.8，可以从这里下载：

[https://docs.conda.io/en/latest/miniconda.html#windows-installers](https://docs.conda.io/en/latest/miniconda.html#windows-installers)

2. 安装完成之后打开 Anaconda 命令提示符，克隆 avatarify 仓库，并运行 windows 操作系统下的安装脚本：

```bash
git clone https://github.com/alievk/avatarify.git
cd avatarify
scripts\install_windows.bat
```

3. 如果要在本地执行换脸算法，那么需要下载 network weights（228 MB）：

[https://openavatarify.s3.amazonaws.com/weights/vox-adv-cpk.pth.tar](https://openavatarify.s3.amazonaws.com/weights/vox-adv-cpk.pth.tar)
或
[https://yadi.sk/d/M0FWpz2ExBfgAA](https://yadi.sk/d/M0FWpz2ExBfgAA)
或
[https://drive.google.com/file/d/1coUCdyRXDbpWnEkA99NLNY60mb9dQ_n3/view?usp=sharing](https://drive.google.com/file/d/1coUCdyRXDbpWnEkA99NLNY60mb9dQ_n3/view?usp=sharing)

4. 下载完成后放到 avatarify 的根目录下，无需解压。
5. 运行 avatarify 客户端，如果是在本地运行，可以使用：

```bash
./scripts/run_windows.bat
```

6. Windows 系统下也可以使用远程 GPU 实例，使用下面的方式启动客户端：

```bash
./scripts/run_windows.bat --is-client --in-addr tcp://server_address:5557 --out-addr tcp://server_address:5558
```

7. 两个 `server_address`  需要替换成远程 GPU 实例的公网 IP。
8. 启动成功之后和 Mac 的操作一样，使用 W/D 缩放画面，完成之后按 X 键调出 avatarify 预览窗口。

Windows 下的虚拟摄像头可以使用 OBS，最新版的 OBS 26.1 及以上已经内置了虚拟摄像头插件了，无需再单独安装。

1. 下载并安装 OBS：

[https://obsproject.com/](https://obsproject.com/)

2. 安装完成之后打开 OBS，在左下角的 Source（源）面板中添加 Windows Capture，把视频输入源设置为某个应用程序窗口，然后选择 [python.exe]: avatarify 程序，点击 OK，可以调整以下大小。
3. 再在 Tools（工具）菜单中选择 VirtualCam（虚拟摄像头），选择 AutoStart（自动开启），设置 Buffered Frames（缓冲）为 0，然点击开始。（如果 Tools 菜单没有 VirtualCam，看看界面右下角的 start recording 附近有没有 start virtual cam）。

现在虚拟摄像头就准备好了。

### 实现换脸

接下来就是在我们的视频通话前端项目中，使用 CamTwist 或 OBS 提供的虚拟摄像头了。我们需要明确知道它们的设备 ID 才能指定具体使用哪个摄像头。
首先使用 Live Server 打开前端项目的 index.html 文件，在谷歌开发者工具的 console 中，使用下面这段代码打印出视频设备信息：

```javascript
navigator.mediaDevices.enumerateDevices().then(function (devices) {
  devices.forEach(function (device) {
    if (device.kind === "videoinput") {
      console.log(device);
    }
  });
});
```

这段代码就是访问所有媒体设备，然后获取其中的视频设备并打印出来，从打印结果里找到 label 包含 CamTwist 或者 OBS（视操作系统而定）的那一项，记录 deviceId 属性。
在 index.js 文件中，保存 deviceId 值到一个常量中：

```javascript
const cameraId =
  "982947417cf490bae44ffb6a837bddcb813704ee491dd85d9149c45389f5521b";
```

在使用 `navigator.mediaDevices.getUserMedia()`  获取摄像头时，除了可以把 video 设置为 true 之外，还可以把他的值设置为一个对象，用来指定更多的信息，我们把它单独定义出来，在里边使用 cameraId 指定访问哪个摄像头：

```javascript
const mediaConstrains = {
  video: {
    deviceId: {
      exact: cameraId,
    },
  },
  audio: true,
};
```

exact 是精确的、只使用指定 ID 的摄像头，不会使用其他备选的。
然后在获取自己摄像头设备的部分，替换成上边这个对象。或者为了方便测试，也可以把所有的都替换掉：

```javascript
navigator.mediaDevices.getUserMedia(mediaConstrains).then(/* ... */);
```

好了，现在再试试视频通话，是不是成功的换脸了呢？
这里要注意的是，可能是因为 CamTwist 软件和真正的摄像头有冲突，页面会不时的重新刷新，这个暂时还没有比较好的解决方案，如果你有精力的话可以研究一下。
附上本文的源代码：
[https://github.com/zxuqian/code-examples/tree/master/webrtc/video-call-change-face](https://github.com/zxuqian/code-examples/tree/master/webrtc/video-call-change-face)

## 总结

这篇教程所用到的技术都很简单，只是配置比较复杂，本教程提供了换脸的基本步骤，剩下的可以根据需要继续进行完善。示例中实现的的是一对一的视频通话，不过在这个基础上也完全可以实现多方视频会议，只需要调整一下视频显示的样式，然后在有新人加进来时，创建相应的 `<video />`  标签，并追加到现有的视频列表中即可。现在我们来回顾一下过程：

- 编写前端 HTML/CSS 页面结构和样式，并尝试加载摄像头。
- 编写简单的后台应用，利用 epxress 和 peer 建立基于 WebRTC 的视频通话基础。
- 前端利用 peer.js 前端库调用后台生成用户 ID，并呼叫、应答视频通话。
- 配置 Avatarify 换脸服务器程序，利用云 GPU 服务把显卡计算相关部分转移到 GPU 实例中。
- 安装 Avatarify 客户端程序和虚拟摄像头应用，把换脸后的数据用虚拟摄像头展现出来。
- 前端获取虚拟摄像头 ID，在视频通话的时候使用此摄像头。

如果有帮助请点赞并分享，有问题可以评论留言，感谢阅读！

import Video from "@site/src/components/Video";