---
id: express-get-started
title: Express.js 快速入门指南
slug: ../express-get-started
description: Express 是 Node.js 的 web 开发框架。它是 unopinionated 意思是框架本身只提供最小 web 应用开发 API，不限制应用设计模式（比如 MVC，MVP)、代码规范以及功能的选择（例如是否有视图层生成 html 页面）。
keywords:
  - express
  - api
  - node.js
  - nodejs
  - 后端
  - 全栈
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=840737069&bvid=BV1e54y1D7cS&cid=192084305&page=1"/>

Express 是 Node.js 的 web 开发框架。它是 unopinionated 意思是框架本身只提供最小 web 应用开发 API，不限制应用设计模式（比如 MVC，MVP)、代码规范以及功能的选择（例如是否有视图层生成 html 页面）。

这个视频将演示使用 Express 处理 GET、POST、PUT、DELETE 请求，使用 Router 定义子路由。这个视频不涉及数据库。

## 创建 Express 项目

要创建 Express 项目，只需要初始化一个 Node.js 项目然后添加 express 依赖：

```shell
yarn add express
```

或

```shell
npm install express 
```

## 启动 express 项目

然后用 VS Code 打开项目，新建一个 app.js文件，编写启动 express 的代码：

```javascript
// 1. 首先引入express库：
const express = require("express");
// 2. 创建 express 的实例，代表服务器
const app = express();
// 3. 设置监听端口
const port = 3000;

// 4. 调用 app.listen 来启动 server 并监听指定端口，启动成功后打印出 log
app.listen(port, () =>
  console.log(`Express server listening at http://localhost:${port}`)
);
```

编写完毕之后，使用命令：

```shell
node app.js
```
来启动 express服务。启动成功后可以看到日志，其中 localhost 代表本机地址：

```shell
Express server listening at http://localhost:3000
```

现在它还不能做任何事情，如果使用浏览器访问这个网址会显示：

Cannot GET /

## 创建 GET 服务

这是因为我们还没有处理 url 路由和 http 请求。接下来我们创建一个简单的处理 GET 请求的代码：

```javascript
// 1. 调用 app 中的 get 方法
// 第一个参数是请求的路径，这里处理根路径的请求，
// 第二个参数是处理请求的回调函数，参数分别为请求和响应对象
app.get("/", (req, res) => {
  // 在回调函数里，调用响应对象的 send 方法，发送响应给客户端
  res.send("Hello World!");

});
```

重启一下 express 服务，然后打开浏览器，访问：

http://lcoalhost:3000

这一次可以看到 `Hello World` 字样。

## 创建 POST 服务

POST 是用来创建新的资源，一般都会带有请求体，目前大部分应用都使用 JSON 格式，为了让 Express 能够解析 JSON 格式的请求体，我们需要添加 express.json()中间件到 app 中。中间件是自定义的，用来扩展 express 功能，它可以在处理请求前，或者发送响应前做一些特定的操作，比如 log。

```javascript
app.use(express.json());
```

添加之后，使用 app.post()方法创建 post 服务：

```js
app.post("/", (req, res) => {

  console.log("收到请求体：", req.body);

  res.status(201).send();

});
```

我们在这里同样处理根路径的请求，然后打印出请求体，最后使用 res 对象中的 status 方法设置响应状态码，201代表资源创建成功，再调用 send 发送响应。重启 express 服务以使代码生效。

我们可以使用 postman 来测试 HTTP 请求，可以到它的官网下载：

https://www.postman.com/downloads/

安装完成并打开后，在输入框中输入 url:

http://localhost:3000

左边选择 POST，然后设置请求体，选择 body->选择 raw->选择JSON(application/json)，再在下边的输入框中编写一条示例的 JSON 数据：

```json
{
	"name": "fenghua"
}
```

点击 send，稍等一下就能看到返回的201状态码。回到命令行，也可以看到打印出了请求体中的 JSON 数据。

## 创建 PUT 服务

PUT 是用来更新服务器上的资源的，一般需要知道已经存在的资源的唯一标识，一般是数据库中的 id。客户端发送 put 请求时，在 url 中提供标识参数，然后在express中解析出来，根据它去更新服务器的资源。这里使用 app中的 put 方法来创建 put 请求：

```javascript
// 路径后面的:id 的意思是，根路径后边的值都会作为请求的参数
// 并且赋给名为 id 的变量，（如：http://localhost:3000/3, id 的值就为3）
app.put("/:id", (req, res) => {
  // 打印一下请求参数的值，req.params.id
  console.log("收到请求参数，id 为：", req.params.id);
	// 再打印一下请求体
  console.log("收到请求体：", req.body);

  // 返回响应，默认是200
  res.send();

});
```

重启服务，在 postman 中测试请求，选择 put，url 可以假设为：

http://localhost:3000/3

然后请求体填写示例 JSON:

```javascript
{
	"name": "John"
}
```

点击，send，之后可以看到返回了200，再回到命令行可以看到打印出了3和json 对象

## 创建 DELETE 服务

DELETE 用于删除服务器中的资源，跟 PUT 一样，也需要标识。

```javascript
// 这里我们用 app.delete 方法，最后返回204状态码，代表已删除
app.delete("/:id", (req, res) => {

  console.log("收到请求参数，id 为：", req.params.id);

  res.status(204).send();

});
```

重启服务，使用 postman 测试一下，复制选项卡，选择 delete，去掉body，点击 send，可以看到返回了204状态码，express 命令行也打印出了请求参数 3。

## 子路由

对于一个真实的 express 项目，一般都会包括多组 API，比如文章、产品、订单等，然后分布在子路由中处理。这里我们以文章示例，创建一个 /post 子路由。

在项目根目录下创建一个 routes 文件夹，然后在里边新建一个 post.js 文件，在里边我们导入 express 然后创建一个 Router()实例，用于处理子路由：

```javascript
var express = require("express");

var route = express.Router();
```

接下来把 app.js中的四个请求处理代码复制过来：

```javascript
app.get("/", (req, res) => {

  res.send("Hello World!");

});


app.post("/", (req, res) => {

  console.log("收到请求体：", req.body);

  res.status(201).send();

});


app.put("/:id", (req, res) => {

  console.log("收到请求参数，id 为：", req.params.id);

  console.log("收到请求体：", req.body);


  res.send();

});


app.delete("/:id", (req, res) => {

  console.log("收到请求参数，id 为：", req.params.id);

  res.status(204).send();

});
```

把 app 改成 route，然后把日志文字稍微改一下，GET 请求中返回示例数据，再在 post 和 put 请求中，把创建或更新后的资源返回给客户端，以便后续使用：

```javascript
route.get("/", (req, res) => {
  res.send({
    id: 1,
    title: "express 入门教程",
  });
});

route.post("/", (req, res) => {
  console.log("保存文章：", req.body);

  // 保存文章到数据库

  res.status(201).send({ id: 2, ...req.body });
});

route.put("/:id", (req, res) => {
  console.log("收到请求参数，文章id 为：", req.params.id);
  console.log("收到请求体，新的文章内容为：", req.body);

  // 更新数据库文章

  res.send({ id: req.params.id, ...req.body });
});

route.delete("/:id", (req, res) => {
  console.log("收到请求参数，文章id 为：", req.params.id);

  // 删除数据库文章

  res.status(204).send();
});
```

然后导出子路由变量：

```javascript
module.exports = route;
```

最后，在 app.js 中导入它，并挂载到"/post"子路由下：

```javascript
const post = require("./routes/post");

app.use("/post", post);
```

重启服务， 这里测试一下 POST 请求，剩下的大家可以自行测试。打开 postman，在 url 中输入：

http://localhost:3000/post

选择 POST 请求，在请求体中添加测试数据：

```json
{
	"title": "node.js 教程"
}
```

点击 send 可以看到返回了新添加的数据和201状态码。

## 最佳实践

因为项目中可能包含多个子路由，为了不使 app.js 文件过于庞大，我们可以在 routes下新建一个 index.js，用于统一处理路由的挂载，由它引入子路由，然后导出一个函数，接收 app 对象，挂载子路由：

```javascript
const post = require("./post");

module.exports = (app) => {
  app.use("/post", post);
};
```

后面只需要在 app.js中引入routes 文件夹，然后调用这个函数即可：

```javascript
const routes = require("./routes");
routes(app);
```

好了，这就是今天的6分钟学会Express 后端 API 开发，如果有帮助请三连并关注，我是峰华，感谢观看！