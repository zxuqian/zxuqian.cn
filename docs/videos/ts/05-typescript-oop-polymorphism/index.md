---
id: typescript-oop-polymorphism
title: TypeScript：面向对象特性之多态
slug: ../typescript-oop-polymorphism
description: 多态，是说一种物质，有多种状态，在很多生活场景中都能遇到这种现象。当组装电脑的时候，我们知道主板上有 CPU、显卡接口，对于显卡来说，只要接口型号匹配，那么不管它的厂家是谁、性能如何，它都能正常的发挥作用。在编程世界里，多态表现为，在创建对象的时候，不需要知道它具体是由哪个 class 创建的，但是通过继承或接口，我明确知道它包含一些方法和属性，这样我能安全的调用它们。接下来，分别看一下，在 typescript 中使用继承方式和接口方式实现多态。
keywords:
  - ts
  - typescript
  - polymorphism
  - 多态
  - 面向对象
  - 前端
  - frontend
---

多态，是说一种物质，有多种状态，在很多生活场景中都能遇到这种现象。当组装电脑的时候，我们知道主板上有 CPU、显卡接口，对于显卡来说，只要接口型号匹配，那么不管它的厂家是谁、性能如何，它都能正常的发挥作用。在编程世界里，多态表现为，在创建对象的时候，不需要知道它具体是由哪个 class 创建的，但是通过继承或接口，我明确知道它包含一些方法和属性，这样我能安全的调用它们。接下来，分别看一下，在 typescript 中使用继承方式和接口方式实现多态。

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=286208624&bvid=BV1rf4y117t8&cid=208819577&page=1"/>

## 继承方式

假设我们有一个普通按钮组件和链接按钮组件，普通按钮组件渲染为 Button 标签，链接按钮渲染为 a 标签，并且链接按钮继承自普通按钮组件，以复用 name 属性和其他代码，这里我们只关注一下 render，渲染方法：

```typescript
// Button
class Button {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  public render() {
    console.log(`<Button>${this.name}</Button>`);
  }
  // 其它代码
}

// LinkButton
class LinkButton extends Button {
  public render() {
    console.log(`<a>${this.name}</a>`);
  }
}
```

这里，如果我有一组按钮组件需要渲染，包括普通按钮和链接按钮，那么可以这样做：

- 定义一个数组，通过尖括号泛型，规定里边存放 Button 组件
- 但是它里边的值既可以是 Button 的对象，也可以是 LinkButton 的对象
- 这里有一个转型机制，所有 Button 的子类对象都会自动转换为 Button 父类对象
- 后边渲染的时候，因为知道子类会继承父类的方法，所以可以直接调用 render 方法来渲染组件：

```typescript
let comps: Array<Button> = [new Button("普通按钮"), new LinkButton("链接按钮")];

// <Button>普通按钮</Button>
// <a>链接按钮</a>
comps.forEach((comp) => comp.render());
```

##

这种方式有一个缺陷，如果有一个没有继承关系的组件，Image 组件，也要放到数组里一起渲染的话，就会出错：

```typescript
class Image {
  public render() {
    console.log(`<img />`);
  }
  // other methods
}

let comps: Array<Button> = [
  new Button("普通按钮"),
  new LinkButton("链接按钮"),
  // Error: Property 'name' is missing in type 'Image' but required in type 'Button'.
  new Image(),
];
```

继承方式适用于有继承关系的类，需要大量复用代码的情况下。

## 接口方式

上边的情况，我们可以使用接口的形式，这个就跟电脑主板一样了。我可以使用接口 interface，定义一个 Renderable 接口，可渲染的，在里边定义一个 render 方法：

- 接口里的方法规范不需要方法体。这里规定，实现这个接口的类，必须要实现它里边规定的方法，那么所有实现这个接口的类，就能够保证一定有 render 方法。

```typescript
interface Renderable {
  render(): void;
}
```

接着，让 Button 和 LinkButton 实现这个接口，因为它们里边已经有 render 方法了，所以实现了 Renderable 接口，接下来定义一个 Image class，让它也实现 Renderable 接口，在 render 方法里打印出<img />标签：

```typescript
class Image implements Renderable {
  public render() {
    console.log(`<img />`);
  }
  // other methods
}
```

然后，我们可以把数组的泛型改为 Renderable，这样它里边的元素都会默认转换成 Renderable 这个接口类型：

- 接着再调用它们里边的 render 方法，就都能够正常渲染了。

```typescript
let comps: Array<Renderable> = [
  new Button("普通按钮"),
  new LinkButton("链接按钮"),
  new Image(),
];

comps.forEach((comp) => comp.render());
```

接口形式适合没有继承关系的类且需要统一调用某个方法的情况。
好了，这个视频介绍了一下多态的基本概念，并通过继承和接口的方式实现了多态。如果觉得视频有帮助，请点赞并关注，我是峰华，感谢观看！
