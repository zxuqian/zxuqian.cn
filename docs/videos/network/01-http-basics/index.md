---
id: http-basics
title: HTTP 协议基础
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: 前后端交互之 HTTP 协议。HTTP协议简明概述。
slug: ../http-basics
keywords:
  - network
  - http
  - https
  - 网络
  - 网络协议
  - http协议
# image: https://i.imgur.com/mErPwqL.png
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=413122179&bvid=BV1KV411o7u5&cid=186435489&page=1" bsrc="https://www.bilibili.com/video/BV1KV411o7u5/"/>

前后端数据的交换一般是基于 HTTP 协议。

HTTP 协议包括客户端和服务端两个实体，客户端发送请求给服务端，服务端返回响应给客户端。

在 HTTP 中，数据称为资源，可以是 html 文档、图片、也可以是普通文本。资源是通过 URL 进行定位的。

## URL

当客户端需要访问服务端资源时，首先需要知道资源的 url，例如打开 bilibili 网站:

```
http://www.bilibili.com
```

或者请求某篇博文下的所有评论。

```
http://jsonplaceholder.typicode.com/comments?postId=1
```

URL 的组成部分有：

- http:// - 协议 Protocal
- jsonplaceholder.typicode.com - 主机 Host
- /comments - 路径 path
- ?postId=1 - 查询参数

服务端收到 url 会解析它们并返回相应的数据。

## 发送 HTTP 请求

HTTP 请求包括下边几个部分

```
GET /comments?postId=1 HTTP/1.1

请求头 request headers
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate
...

请求体(如果有) request body
....

```

- 请求方式， 告知服务器要进行的操作，GET是默认请求方式，意思是从服务端获取资源，另外还有几个其他常用的方式：
  - POST - 创建资源
  - PUT - 更新资源
  - DELETE - 删除资源
  - 区别是 GET 和 DELETE 一般没有请求体。而POST 和 PUT 通常带有请求体，用于向服务端发送资源信息。

接下来是：

- 请求资源的路径和查询参数
- HTTP 版本
- 请求头，包含额外的信息来帮助服务器决定如何进行响应，比如使用 accept 设置接收响应资源的类型
- 请求体，是需要发送给服务器的数据


## 接收响应

服务端在处理请求之后发送响应给客户端。内容有：

```
HTTP/1.1 200 OK
Date: Sat, 02 May 2020 08:21:09 GMT
Content-Type: application/json; charset=utf-8
Cache-Control: max-age=14400

[
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }
]
...

```

- HTTP 协议版本
- 响应状态码，表明响应的结果
  - 100-199 一般信息
  - 200-299 成功响应
  - 300-399 重定向
  - 400-499 客户端错误
  - 500-599 服务端错误

接下来是：

- 状态码含义的简要描述
- 响应头，与请求头类似，包含额外的响应信息，比如告知客户端如何控制缓存和 cookie。
- 响应体（如果有）- 是服务端返回的数据

## 无状态

HTTP 协议是无状态的，每次客户端发出的请求都被认为是从全新的客户端发出来的，如果需要记录状态则需要使用 cookie 和 session 来保持会话，实现登录和购物车之类的功能。

## HTTP/2

现在 HTTP/2已经可以正式开始使用了，它跟 HTTP 1.1不同的是：

- 数据通过二进制形式传输，不再是文本形式
- 多路复用 - 建立连接后一次可以发送多个 HTTP 请求
- 压缩 http headers，减少负载
- 支持 server push

好了，这就是今天的前后端交互之 HTTP 协议，看完这些你应该了解前端应用发送请求和接收响应时，各项参数的含义了。如果有帮助别忘了三连加关注，我是峰华，感谢观看！





