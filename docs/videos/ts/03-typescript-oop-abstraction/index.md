---
id: typescript-oop-abstraction
title: TypeScript：面向对象特性之封装与抽象
slug: ../typescript-oop-abstraction
description: 对象里有属性和方法，封装是说把一些属性和方法设置为私有的，只能在对象内部访问和修改，然后把想暴露给外界的属性和方法设置为公开，这样就能保护对象里的数据。比如开车时，通过踩油门和刹车来控制速度，而不是手动修改速度的数值。
keywords:
  - ts
  - 面向对象
  - typescript
  - 封装
  - 前端
  - frontend
---

在上个视频介绍了面向对象的基础之后，这个视频将介绍一下封装与抽象的概念以及它们带来的好处。

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=498611000&bvid=BV1iK411n7Kt&cid=203928562&page=1"/>


## 什么是封装
对象里有属性和方法，封装是说把一些属性和方法设置为私有的，只能在对象内部访问和修改，然后把想暴露给外界的属性和方法设置为公开，这样就能保护对象里的数据。比如开车时，通过踩油门和刹车来控制速度，而不是手动修改速度的数值。


## 什么是抽象
抽象是说对象的方法的具体实现细节，外界是看不到的。外界只需要调用对象中的方法来获取或修改数据。比如开车加速时，只需要踩油门，而从油门被踩到发动机提高转速加速的详细过程，在我们眼里是被屏蔽的。


## 代码演示
来看一个例子，一个汽车类，有速度和品牌属性：
```typescript
class Car {
  speed: number;
  make: string;

  constructor(make: string) {
    this.speed = 0;
    this.make = make;
  }
}
```
它们默认是公开的，可以对随意修改：
```typescript
const car: Car = new Car("Toyota");
car.make = "Honda";
car.speed = 200;

console.log(car.make); // Honda
console.log(car.speed); // 200
```
但是，一辆车的速度和品牌肯定不能被随意修改，那么要把它们保护起来，可以使用 private 关键字，这样外界就无法访问和修改了：
```typescript
class Car {
  private speed: number;
  private make: string;

  constructor(make: string) {
    this.speed = 0;
    this.make = make;
  }
}

const car: Car = new Car("Toyota");
car.make = "Honda"; // Property 'make' is private and only accessible within class 'Car'.
car.speed = 200; // Property 'speed' is private and only accessible within class 'Car'.

```
但是，它们应该可以被访问到，并且**速度可以被内部方法修改**，品牌不能被修改。先来看速度属性，可以添加 `getCurrentSpeed()` 方法获取当前车速：
```typescript
class Car {
  //...
  getCurrentSpeed() {
      return "当前车速是：" + this.speed;
  }
}
```
再定义加速`accelerate()`  和减速 `decelerate()` 修改速度，另外再定义一个私有的 `setSpeed` 方法，这样直接修改速度属性的方法就被保护起来了，并且对外界隐藏了 accelerate 和 decelerate 的实现细节。通过 setSpeed 方法，我们可以在里边检查delta 的取值范围是否合法：
```typescript
class Car {
  //...
  getCurrentSpeed() {
      return "当前车速是：" + this.speed;
  }
  
  private setSpeed(delta: number) {
    if (delta > -100 && delta < 100) {
      this.speed += delta;
    } else {
      throw new Error("delta只能取-100到100之间的数字");
    }
  }

  accelerate(delta: number) {
    this.setSpeed(delta);
  }

  decelerate(delta: number) {
    this.setSpeed(-delta);
  }
}

car.accelerate(10);
car.accelerate(10);
//当前车速是：20
console.log(car.getCurrentSpeed());
// error delta只能取-100到100之间的数字
car.accelerate(200); 

```
对于品牌，它只能在初始化的时候赋值，后面不能修改，那么它是只读属性，可以使用 readonly 关键字，并去掉 private，这样它只能在定义的时候或者在构造方法里赋值，后边就不能修改了，但是可以访问：
```typescript
class Car {
	readonly make: string;
//...
}

const car: Car = new Car("Toyota");
console.log(car.make); // Toyota
car.make = "Honda"; // Cannot assign to 'make' because it is a read-only property.
```
方法默认是公开的，我们也可以加上 public 关键字，让代码更清楚：
```typescript
class Car {
  //...
  public accelerate(delta: number) {
    this.setSpeed(delta);
  }

  public decelerate(delta: number) {
    this.setSpeed(-delta);
  }
}

//...
```
上边的 getCurrentSpeed()也可以使用 getters 和 setters 形式，这样可以像直接访问属性一样来访问它：
```typescript
class Car {
  //...
  get currentSpeed() {
    return "当前车速是：" + this.speed;
  }
}


// 之前: car.getCurrentSpeed()
console.log(car.currentSpeed); 

```
好了，这个就是面向对象中的封装和抽象，你学会了吗？如果觉得视频有帮助，请点赞并关注，我是峰华，感谢观看！


完整代码
```typescript
class Car {
  private speed: number;
  readonly make: string;

  constructor(make: string) {
    this.speed = 0;
    this.make = make;
  }

  get currentSpeed() {
    return "当前车速是：" + this.speed;
  }

  private setSpeed(delta: number) {
    if (delta > -100 && delta < 100) {
      this.speed += delta;
    } else {
      throw new Error("delta只能取-100到100之间的数字");
    }
  }

  public accelerate(delta: number) {
    this.setSpeed(delta);
  }

  public decelerate(delta: number) {
    this.setSpeed(-delta);
  }
}

const car: Car = new Car("Toyota");
console.log(car.make);

car.accelerate(10);
car.accelerate(10);
console.log(car.currentSpeed); // 当前车速是：20
car.decelerate(5);
console.log(car.currentSpeed); // 当前车速是：15
car.accelerate(200);

```
