---
id: typescript-oo-basics
title: TypeScript：面向对象编程基础
slug: ../typescript-oo-basics
description: 面向对象这个词听起来好像很抽象，什么是对象，什么要面向它？这个视频就给你介绍一下面向对象编程的概念，并且使用 TypeScript 来演示面向对象的代码。如果你有一定的编程基础，但是对面向对象这个概念比较模糊的话，那这个视频就是适合你的。
keywords:
  - ts
  - typescript
  - 面向对象
  - 前端
  - frontend
---

面向对象这个词听起来好像很抽象，什么是对象，什么要面向它？这个视频就给你介绍一下面向对象编程的概念，并且使用 TypeScript 来演示面向对象的代码。如果你有一定的编程基础，但是对面向对象这个概念比较模糊的话，那这个视频就是适合你的。

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=541054631&bvid=BV1ai4y1x7zG&cid=202085645&page=1"/>

## 什么是面向对象编程

面向对象编程是说，在设计软件程序的时候，把客观世界的实体，比如人、汽车、计算器、按钮、表单等，用代码来表示出来，我们把它们称之为对象。一个对象有描述它特征的属性，比如汽车有颜色，车型，价格等，还有规定它行为的方法，比如启动、加速、停止等。这些跟现实生活中的物体类似，只是在对它们进行抽象时，就只关注程序里需要的部分，比如说一个员工管理系统，会关注人的姓名、年龄、员工编号、入职时间等属性，并且会关注打卡、请假等行为，它不会关注身高或体重。

## 为什么用面向对象

由于面向对象的方式是模拟现实中的实体，所以理解起来更加简单，代码也更清晰。对象中的属性和方法都是内部定义好的，在外部调用时，只能通过对象暴露出来的方法来访问和修改它的属性，能保证属性不被恶意篡改。另外对象中的方法和属性都放在一起，也方便它们之间互相访问和调用，可以提高代码复用性。

## class & object

一般的面向对象语言使用 class（类）和 object（对象）来实现面向对象的编程模式。

- 类可以想象成是一张蓝图，或者说是一个通用的概念，比如说员工，它不单指某一位员工，但是我们知道员工都有通用的一些属性，比如姓名、年龄、员工编号等。
- 而对象则是类的一个具体的“实例“，比如说张三是一位员工，那么我们就能够知道他具体的姓名、年龄和员工编号了。

## TypeScript 实例

我们来看一下具体的例子：

```typescript
class Employee {
  name: string;
  age: number;
  empNo: number;

  constructor(name: string, age: number, empNo: number) {
    this.name = name;
    this.age = age;
    this.empNo = empNo;
  }

  signIn() {
    console.log(this.name + "上班打卡");
  }

  askLeave() {
    console.log(this.name + "请假");
  }
}

let emp = new Employee("张三", 22, 999);
emp.signIn();
emp.askLeave();

let emp2 = new Employee("李四", 25, 888);
emp2.signIn();
emp.askLeave();
```

我们这里使用 class 关键字定义了一个员工类，类名首字母大写，它里边有 name, age, empNo 属性，分别代表姓名、年龄和员工编号。这里它们叫做实例变量，它们的值在每个对象中都是独立的，互不影响。接下来定义了 constructor 构造方法，是用来创建对象的，并且通过它可以给属性设置初始值。后边定义了 signIn 打卡上班方法和 askLeave 请假方法，这两个方法叫做实例方法，在每个对象中也都是独立的。类里边的 this 是用来访问它自身的属性和方法的。

下边初始化了两个员工对象实例，分别调用了它们的 signIn 和 askLeave 方法，发现它们打印出来的值，姓名都是每个对象它自己的。好了，现在我们了解了面向对象编程的基础知识，后边的视频再分别介绍它的四个特性：抽象、封装、继承和多态。如果觉得视频有帮助请点赞并关注，我是峰华，感谢观看！
