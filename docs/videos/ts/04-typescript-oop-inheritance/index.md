---
id: typescript-oop-inheritance
title: TypeScript：面向对象特性之继承
slug: ../typescript-oop-inheritance
description: 继承在日常生活中随处可见，比如，我们都继承自人，都有同样的身体结构，但是有不同的样貌和技能。再比如，汽车之间也有相同的结构，但是有不同的外形和品牌。在编程语言里，继承也是通过这样的机制，来获得通用的属性和方法，而继承出来的类可以通过覆盖它们来增加自己独特的属性和方法。
keywords:
  - ts
  - 面向对象
  - typescript
  - 继承
  - 前端
  - frontend
---

继承在日常生活中随处可见，比如，我们都继承自人，都有同样的身体结构，但是有不同的样貌和技能。再比如，汽车之间也有相同的结构，但是有不同的外形和品牌。在编程语言里，继承也是通过这样的机制，来获得通用的属性和方法，而继承出来的类可以通过覆盖它们来增加自己独特的属性和方法。

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=541232961&bvid=BV1ui4y1V7Z5&cid=206747044&page=1"/>

## 代码演示

这里用咱们前端常见的按钮组件来演示，按钮有普通形式和链接形式，普通形式渲染为<button />标签，并且只处理点击事件，链接形式渲染为<a />标签，除了处理点击事件外，还能处理链接跳转。

首先定义普通按钮的 class，通过构造函数设置 name 属性，在 onClick 方法中输出测试文字，在 render 方法中，访问 name 属性，然后渲染 button 的 html。属性和方法这里都是公开的：

```typescript
class Button {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  public onClick() {
    console.log("处理点击事件...");
  }

  public render() {
    console.log(`<Button>${this.name}</Button>`);
  }
}
```

链接形式的按钮则可以定义一个 Link class 继承 Button，使用 extends 关键字，Button 称为父类，Link 称为子类，子类可以访问父类所有的公开属性和方法，包括构造函数。

- 我们可以在 Link 里定义同名的方法来覆盖父类的方法，比如把 render 改成用 a 标签渲染
- 然后创建一个 link 对象，因为构造函数可以继承，所以这里可以设置 name 属性的值
- 之后调用 onClick， 它会打印父类 onClick 里的内容
- 再调用 render，它会打印自己的 render 方法里的内容

```typescript
class Link extends Button {
  public render() {
    console.log(`<a href="">${this.name}</a>`);
  }
}

const link = new Link("点击跳转");
//处理点击事件...
link.onClick();
// <a href="">点击跳转</a>
link.render();
```

## 覆盖构造函数

构造函数也可以被覆盖，比如：

- 给 Link 添加一个新的 href 属性
- 然后编写一个构造函数，同时接收 name 和 href 参数，这里使用 super 关键字调用父类的构造函数，来初始化 name 属性
- 之后再给 href 赋值，**super 调用父类构造函数必须在第一行**。
- 最后在 render 中访问 href 属性。
- 接下来修改一下创建 Link 对象的代码，通过第二个参数 给 href 赋值
- 最后 render 出来的标签就有了 href 和 name 属性的值。

```typescript
class Link extends Button {
  private href: string;

  constructor(name: string, href: string) {
    super(name);
    this.href = href;
  }

  public render() {
    console.log(`<a href="${this.href}">${this.name}</a>`);
  }
}

const link = new Link("点击跳转", "https://www.bilibili.com");
// <a href="https://www.bilibili.com">点击跳转</a>
link.render();
```

## 受保护的属性和方法

在继承时，private 修饰的属性不能被子类访问，如果 Button 有一个私有的 shape ，形状属性，在 Link 类中访问它会提示 shape 只能在 Button 类中访问：

```typescript
class Button {
  public name: string;
  private shape: string = "rectanglar";
  // ...
}

class Link extends Button {
  // ...
  public render() {
    //Property 'shape' is private and only accessible within class 'Button'.ts(2341)
    console.log(`<a href="${this.href}" shape=${this.shape}>${this.name}</a>`);
  }
}
```

public 和 protected 修饰的属性和方法都能够被子类访问，public 还可以被任何的外部代码访问，但是 Protected 只能被子类访问，这样能起到保护和封装的作用，例如在外部代码访问 button 的 shape 属性会提示 shape 是受保护的，并且只能在 Button 和它的子类中访问：

```typescript
class Button {
  public name: string;
  protected shape: string = "rectangular";
  // ...
}

class Link extends Button {
  // ...
  public render() {
    console.log(`<a href="${this.href}" shape=${this.shape}>${this.name}</a>`);
  }
}

const button = new Button("按钮");
// Property 'shape' is protected and only accessible within class 'Button' and its subclasses.ts(2445)
button.shape;

const link = new Link("点击跳转", "https://www.bilibili.com");
// <a href="https://www.bilibili.com" shape=rectangular>点击跳转</a>
link.render();
```

## 子类调用父类方法

除了构造函数，普通方法里也可以使用 super 关键字来访问父类的方法，这里 super 可以不必放在第一行，调用 link 中的 onClick 方法可以看到它既执行了父类 onClick 的代码也执行了它自己的代码：

```typescript
class Button {
  // ...
  public onClick() {
    console.log("处理点击事件...");
  }
}

class Link extends Button {
  // ...
  public onClick() {
    super.onClick();
    console.log("事件处理完毕，开始跳转...");
  }
}

const link = new Link("点击跳转", "https://www.bilibili.com");
// 处理点击事件...
// 事件处理完毕，开始跳转...
link.onClick();
```

好了，这个就是面向对象中的继承，你学会了吗？如果觉得视频有帮助，请点赞并关注，我是峰华，感谢观看！
