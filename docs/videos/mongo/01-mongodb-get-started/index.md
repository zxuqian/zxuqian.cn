---
id: mongodb-get-started
title: 2020最新 MongoDB 4.2 快速入门教程
slug: ../mongodb-get-started
description: MongoDB 是以文档为存储结构的数据库，文档是一种类似于 JSON 的数据。 MongoDB 是非关系型数据库(NoSQL），它们有共同的特点，就是高可用(High Availability)、高性能（High Performance)、可伸缩(Scalability)。
keywords:
  - mongo
  - mongodb
  - mongodb 入门
  - 后端
  - backend
---

MongoDB 是以文档为存储结构的数据库，文档是一种类似于 JSON 的数据。 MongoDB 是非关系型数据库(NoSQL），它们有共同的特点，就是高可用(High Availability)、高性能（High Performance)、可伸缩(Scalability)。

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=285788137&bvid=BV1wf4y1279C&cid=194437753&page=1"/>

现在的 web 应用几乎都是以 JSON 格式来传递数据，那么直接存储 JSON 文档就更加直观，加上 JSON 是 JavaScript 原生支持的数据格式，所以 MongoDB 与 JavaScript 编写的 web 应用能无缝结合。

Mongodb 经过近 11 年的发展，现在已经成为了一款通用的数据库产品，也解决了 NoSQL 普遍的问题，比如加上了事务的支持，在查询方面，也加上了 JOIN 的支持。

这个视频将简单介绍一下 MongDB 的存储结构、BSON 文档格式、下载并安装 MongoDB、创建数据库、设计示例数据结构、增删改查操作、以及一些扩展资源。

## MongoDB 存储结构

MongoDB 最基本的存储结构是文档，多个同类型的文档组成一个集合(collection)，多个集合组成一个数据库(database)。如果你有关系型数据库基础，可以把集合当成表，文档当成表中的记录。

## BSON 文档简介

BSON 全称是 Binary JSON，它的语法跟 JSON 几乎一模一样，只是支持的类型比 JSON 多，除了数字、布尔、数组等类型之外，还支持 ObjectID、Double, Date 等类型。

## 下载与安装 MongoDB

好了，介绍完 MongoDB，现在咱们进入实战环节。第一步就是要先下载和安装 MongoDB。MongoDB 分为商业版和社区版，我们这里使用社区版。

MacOS 下可以使用 homebrew 进行安装，homebrew 的安装方法可以参考网上的教程。添加 mongodb tap，使用

```bash
brew tap mongodb/brew
```

命令。然后安装 mongodb:

```bash
brew install mongodb-community@4.2
```

windows 电脑可以在它官网下载安装包，打开它的下载页面（我会把下载连接粘到视频简介中）：

[https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)

选择 4.2.6 版本，操作系统选择 windows，下载下来是个安装包，安装的时候选择作为服务进行安装，再指定数据和日志文件的存放目录。

## 启动 MongoDB（MacOS)

这一节只针对 MacOS 用户，在用 homebrew 安装完 MongDB 之后，使用

```bash
brew services start mongodb/brew/mongodb-community
```

来启动 Mongodb Server。

## 连接到 MongoDB

安装完成之后，就可以使用 MongoDB 的客户端连接到数据库了，在 windows 下可以使用安装目录中的 mongo.exe 来连接 mongodb：

```bash
C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe
```

mac 下直接在命令行中运行:

```bash
mongo
```

它们会使用默认的 url，mongodb://localhost 和端口号 27017 进行连接。

## DB 操作

我们第一步要做的是添加一个数据库，使用 use + 数据库名字，如果数据库不存在，它会自动创建，比如我们创建一个名为 myblog 的数据库，可以用：

```bash
use myblog
```

命令。然后使用 db 命令可以显示当前正在使用的数据库，以后做增删改查操作，就用 db 对象来操作。

## 增删改查操作

在进行增删改查操作前，我们先来设计一下文档的结构：

### 设计示例文档结构

假设我们的应用是一个博客系统，需要存储博客文章，博客文章有标题、作者、创建时间、内容和评论信息，假设一篇文章只有一位作者，作者信息包括昵称和头像。同时，一篇文章下可以有多个评论，每个评论又包括评论人和评论内容。根据这个关系，我们可以设计这样一条数据：

```javascript
{
  title: "MongoDB 入门教程",
  author: {
    name: "fenghua",
    avatar: "https://www.example.com/avatar.jpg"
  },
  createdAt: "2020-05-22",
  content: "MongoDB 是文档为存储结构的数据库",
  comments: [
    {
      user: "小明",
      comment: "不错"
    },
    {
      user: "小红",
      comment: "赞"
    },
    {
      user: "小李",
      comment: "收藏了"
    }
  ]
}
```

可以看到是一个很简单的 JavaScript 对象。

### 添加数据

要把它添加到数据库中，可以使用:

```json
db.postCollection.insertOne()
```

命令，然后把对象复制粘贴到小括号中。postCollection 是我们创建的集合的名字，mongodb 中的数据库和集合如果不存在的话，都会自动创建。执行成功后，会返回新添加的文档的 ID：

```json
{
  "acknowledged": true,
  "insertedId": ObjectId("5ec793ac97905072cab4c013")
}
```

你也可以试试再添加多条数据，比如这里再添加一个简单点的数据：

```javascript
{
  title: "Redis 入门教程",
  author: {
    name: "fenghua",
    avatar: "https://www.example.com/avatar.jpg"
  },
  createdAt: "2020-05-20",
  content: "Redis 是以 key-value 为存储结构的数据库"
}
```

同样的使用

```json
db.postCollection.insertOne()
```

命令。

### 查询数据

要查询所有数据，可以使用集合的 find 方法，然后传递一个空对象：

```bash
db.postCollection.find({})
```

如果查询 title 为 "Redis 入门教程" 的文章，可以在对象中指定 title 属性，把值设置为 "Redis 入门教程"：

```bash
db.postCollection.find({title: "Redis 入门教程"})
```

可以看到返回了一条数据。

如果查询 author 中 name 为 fenghua 的数据，可以使用：

```bash
db.postCollection.find({"author.name": "fenghua"})
```

注意 author.name 使用了双引号，点号就代表 author 中属性。

### 更新数据

更新数据跟查询数据类似，只需要使用 updateOne()方法（修改一条数据），或者 updateMany()方法（修改所有满足条件的数据），它们接收两个参数，第一个是查询条件，查询出想要修改的文档，第二个参数是要修改的属性，可以使用 $set 操作符来更新属性的值。比如把"MongoDB 入门教程"的文章标题改为"MongoDB 快速入门"，可以使用:

```bash
db.postCollection.updateOne({title: "MongoDB 入门教程"}, {$set: {title: "MongoDB 快速入门"}})
```

然后返回了结果，显示成功修改了 1 条数据:

```json
{ "acknowledged": true, "matchedCount": 1, "modifiedCount": 1 }
```

我们再来查询一下：

```bash
db.postCollection.find({})
```

可以看到第一篇文章的标题已经被修改了:

```json
{ "_id" : ObjectId("5ec793ac97905072cab4c013"), "title" : "MongoDB 快速入门", "author" : { "name" : "fenghua", "avatar" : "https://www.example.com/avatar.jpg" }, "createdAt" : "2020-05-22", "content" : "MongoDB 是文档为存储结构的数据库", "comments" : [ { "user" : "小明", "comment" : "不错" }, { "user" : "小红", "comment" : "赞" }, { "user" : "小李", "comment" : "收藏了" } ] }
{ "_id" : ObjectId("5ec7947597905072cab4c014"), "title" : "Redis 入门教程", "author" : { "name" : "fenghua", "avatar" : "https://www.example.com/avatar.jpg" }, "createdAt" : "2020-05-20", "content" : "Redis 是以 key-value 为存储结构的数据库" }
```

### 删除数据

删除数据可以使用 deleteOne（）或 deleteMany()方法，它接收一个参数，用来指定删除条件，比如删除我们的第二篇文章，可以使用它的 id，那么它的删除命令可以写成：

```bash
db.postCollection.deleteOne({_id: ObjectId("5ec7947597905072cab4c014")})
```

执行成功会返回结果提示删除了 1 条数据：

```bash
{ "acknowledged" : true, "deletedCount" : 1 }
```

我们再来查询一下，发现只返回了第一篇文章的信息：

```javascript
db.postCollection.find({});
```

## 总结

这个视频简单的介绍了一下 MongoDB 的概念，安装和基本的增删改查操作，如果你想了解它的更多用法，可以查看官网的文档
[https://docs.mongodb.com/manual/crud/](https://docs.mongodb.com/manual/crud/)
每个方法怎么使用都写的很清楚。

如果想使用图形化客户端，可以使用 Robo 3T，十分简单易用，可以从它的官网下载，同样的我会把地址粘在视频简介里。

我个人觉得 MongoDB 适合应用于对性能要求比较高、但是对数据一致性要求比较低的应用中，它创建集群、数据分区分片都很方便，只是这样可能导致不同 replica（也就是冗余的服务器）上的数据并不会保持一致。另外它存储的文档结构和操作语法都跟 JavaScript 接近，所以使用 JS 创建的应用可以首选 MongoDB 作为数据存储引擎。

好了，这就是今天的 MongoDB 快速入门教程，如果有帮助请三连并关注，我是峰华，感谢观看！

MongoDB 是与 JavaScript 结合最好的 NoSQL 数据库，存储类似于 JSON 的文档数据结构，有着高性能、高可用、可伸缩的特点，适合构建实时的、高性能的 web 应用。如果用 JS 开发 web 应用，那么使用 MongoDB 作为存储数据库再适合不过了。这个视频就教大家快速入门 MongoDB，喜欢记得三连！

##
