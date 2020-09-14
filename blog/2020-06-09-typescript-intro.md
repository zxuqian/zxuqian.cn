---
slug: typescript-intro
title: 噢！原来这就是 TypeScript
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
description: TypeScript 是 JavaScript 的，带有类型的超集，并且可以编译为 JavaScript 脚本，这篇幅文章将带你认识一下 TypeScript
tags: [前端, TypeScript, TS, ES6, JavaScript, Vue, React, Nodejs, rest, angular]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

我第一次使用 TypeScript 是 16 年在读研的时候，学校的算法课是使用 TypeScript 实现的。当时只知道 TypeScript 是 Angular 开发的必备语言，没想到还能这么通用。后来在写作业的时候，发现 TypeScript 也并不是特别难，只不过是给 JavaScript 加上了类型信息，让代码不那么容易出错，并且支持高级的面向对象编程范式，让 JavaScript 变得跟 Java/c# 差不多。接下来，这篇文章就给你揭开 TypeScript 的面纱，对它来一个宏观上的认识，然后介绍一下如何编写并运行 TypeScript 程序，如何定义类型，另外假设你有 JavaScript 基础。

<!-- truncate -->

## 什么是 TypeScript

那么到底什么是 TypeScript 呢？官方的定义是 TypeScript 是 JavaScript 的、带有类型的超集，并且能够编译为普通的 JavaScript。这里有三个重点，一个是编译，一个是带有类型，一个是超集。

- 我们先看一下编译，编译是说，TypeScript 本身是不能够在浏览器或 Node.js 环境下运行的（deno 除外），需要使用 TypeScript 编译器编译成普通的 JavaScript，这点很像 C++ 或 Java。
- 而带有类型，是说 JavaScript 在定义变量的时候，类型是动态的，只有在运行的时候才能知道它的具体类型，比如 number 或者 string，并且类型也是可以动态变化的，而 TypeScript 则是要求变量有确定的类型，并且在编写代码的时候就已经确定，如果把字符串赋给类型为 number ，数字类型的变量，就会出错。
- 超集是说，TypeScript 本身支持所有 JavaScript 的语法，并在此基础上添加了额外的功能和特性，这样就使得所有的 JavaScript 代码可以完全被 TypeScript 正确编译。所以说你可以自己决定使用多少 TypeScript 提供的特性。

## 为什么用 TypeScript

认识了 TypeScript 之后，可能你又有问题，为什么要学 TypeScript 呢？先看一条数据，在 stackoverflow 发起的 2020 年程序员调查中，TypeScript 在程序员最爱的编程语言中排在了第二位，仅次于 Rust：

<img alt="" src={useBaseUrl('img/2020-06-09-typescript-intro/2020-06-09-22-03-40.png')} />

[https://stackoverflow.blog/2020/05/27/2020-stack-overflow-developer-survey-results/](https://stackoverflow.blog/2020/05/27/2020-stack-overflow-developer-survey-results/)

之所以大家喜欢 TypeScript，是因为：

- TypeScript 有类型检查机制，我们可以在写代码的时候就能够发现错误，比如给函数误传了类型不同的参数，那么通过 VS Code 对 TypeScript 的强力支持，我们能立刻看到错误。
- 另外 VS Code 能根据 TypeScript 的类型信息提供更好的代码提示和补全功能。
- 此外，对于大型项目、多人协作编写代码时，类型起到了文档的作用，可以清楚的知道我这个变量是什么类型，或者我定义的函数需要什么样的参数，我的对象里又有哪些属性。这样让代码更易于维护，这也是为什么大公司、大型项目更偏爱 TypeScript
- 最后 TypeScript 入门的门槛低，只要你会 JavaScript，那么你就已经能编写 TypeScript 代码了。另外因为 JS 的快速发展，好多以前在 typescript 才能用的功能，你可能在 JS 里已经用到了，所以说要学习的东西就更少了。

除了这些好处之外，它也有其他静态类型语言比如 Java/c++ 的通病，就是代码量会增加，并且有时候类型过于复杂反而使得代码显的更难阅读，不过跟它带来的优势相比，也显得不那么突出了。

## 编写和运行 TS 代码

在了解 TypeScript 之后，我们来看一下怎么编写和运行 TypeScript 代码。TypeScript 代码因为需要编译，才能生成可运行的 JavaScript 代码，所以需要安装编译器。不过最近刚刚发布正式版的 deno， 原生支持 typescript 的编译和运行，所以就不需要再安装编译器了。我会介绍这两种运行环境。

### Node TSC

首先看一下 node.js 环境。确保你的电脑已经安装了 node.js ，然后使用命令 `npm install -g typescript`  把 typescript 编译器安装到全局，这样所有 typescript 项目都可以使用它：

```bash
npm install -g typescript
```

安装完成之后使用 vs code 打开一个空的文件夹，新建一个 index.ts 文件，写上一些示例代码，我稍后再解释它的含义：

```typescript
let a: number = 10;
console.log(a);
```

写完之后，打开命令行，输入：

```bash
tsc index.ts
```

TypeScript 编译器就会把 ts 文件编译成 js 文件，可以看到生成了 index.js，然后运行一下:

```bash
node index.js
```

来看一下结果，显示输出了 10。

### Deno

因为 Deno 本身就支持 TypeScript，所以只需要安装 Deno 运行环境就可以了，mac/linux 和 windows 下都可以使用一条命令安装.

mac/linux

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

windows (powershell)

```bash
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

如果安装完提示需要添加环境变量的话，按照提示步骤操作就可以了。安装完成之后，直接使用：

```bash
deno run index.ts
```

就可以了。同样的也输出了 10。后面的例子我们继续使用 Node.js。

### tsconfig.json

我们打开 tsc 生成的 js 文件看一下，发现里边除了去掉了类型之外，没有什么变化。那么，JavaScript 版本那么多，TSC 怎么知道要编译成哪一版呢？答案是，TSC **默认**会编译成 ES3 那一版。我们可以试试写一个 async 的函数：

```javascript
async function func() {}
```

再编译一次看看：

```javascript
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
// ...
```

发现生成了好多复杂的代码来支持 async。那我如果要生成 ES2017 的代码呢？毕竟 aync/await 是这个版本出现的？答案很简单，在项目根目录下新建一个 `tsconfig.json`  文件，这个是配置 typescript 项目的，我们可以通过 `compilerOptions`  属性来配置 tsc 编译器，然后使用 `target`  属性来指定要编译成的版本，那么这里设置成 ES2017：

```javascript
{
  "compilerOptions": {
    "target": "ES2017"
  }
}
```

保存一下，**现在**再运行 tsc，后边就不需要加文件名了，因为有了 tsconfig 文件之后，这个文件夹会自动成为 typescript 项目，tsc 会自动找到 ts 文件进行编译，如果指定了文件名，那么这个 tsconfig 的配置就会被忽略。打开生成的 js 文件，发现 aync 的函数和 ts 源代码里的一样了：

```javascript
let a = 10;
console.log(a);
async function func() {}
```

## 基本语法

TypeScript 的核心就是类型，这里咱们重点看一下它的语法。

### 基本类型

TypeScript 的基本类型跟 JavaScript 中的保持一致，有 boolean, number, string, undefined, null 等常用类型。给变量定义类型有两种方式，一种是隐式的，一种是显式的。

#### 隐式

隐式类型是由 TypeScript 根据变量的值来推断类型，这样的话，代码的写法跟 JS 就一样了，但不同的是它后边不能用**其他类型**的值来给他**重新赋值**，比如定义一个变量 a，不给它指定类型，但是给它赋上一个数字类型的值，10，然后再把它改成字符串类型的"hello"，那么就会产生编译错误，提示"hello"字符串不能赋值给数字类型：

```javascript
let a = 10;
a = "hello";
// error TS2322: Type '"hello"' is not assignable to type 'number'.
```

#### 显式

显式类型的定义，就跟之前运行的 TS 代码示例一样，我们用 `:` + `类型`  来显式的规定，这个变量是什么类型的，比如定义一个 boolean 类型的变量 b：

```javascript
let b: boolean = true;
```

如果想让一个变量可以是任何类型的，就像 JS 中可以随意更改，那么可以把它的类型定义为 any，例如定义一个变量 a，类型为 any，开始给它一个数字类型的值，10，然后再改成"hello"，这时就不提示错误了:

```javascript
let a: any = 10;
a = "hello";
```

类型也可以用在函数的参数和返回值中，比如定义一个加法函数，它接收一个参数 a，类型是 number，还接收参数 b，也是 number 类型，最后返回值类型也是 number，返回值的类型定义在参数列表的小括号后边，然后它的后边才是函数体，里边直接返回 a + b，返回值的类型可以省略，因为 typescript 可以根据 a+b 推断出它的返回值也是 number 类型：

```javascript
function add(a: number, b: number): number {
  return a + b;
}
```

这里我们可以使用 add(1, 2)来正常调用这个函数：

```javascript
add(1, 2);
```

如果使用一个字符串类型的变量来接收函数的返回值，那么就会出错：

```javascript
let res: string = add(1, 2);
```

提示： `Type 'number' is not assignable to type 'string'.` number 类型不能赋给 String 类型。

如果给函数传递一个字符串进去：

```javascript
add("1", 2);
```

那么编译器就会提示 `Argument of type '"1"' is not assignable to parameter of type 'number'`  字符串"1"不能传给 number 类型的参数。
另外调用函数时，必须传递跟参数列表数量相同的参数，不像 JS，可以不传或只传前边几个参数，这里如果只传一个参数的话：

```javascript
add(1);
```

会提示 `An argument for 'b' was not provided.`  没有给 b 传值。
最后，如果函数不返回值的话，可以使用 void 类型代表函数没有返回值：

```javascript
function printLog(log: string): void {
  console.log(log);
}
```

### 组合类型

如果一个变量可以有多个类型，但是又不想使用 any 破坏类型检查，那么可以使用组合类型，组合类型使用一条竖线，也就是或操作符，来定义，比如一个变量既可以是 number 也可以是 string 类型，那么可以这样来定义，给它赋上一个数字类型的值 10，然后后边修改成字符串也没问题：

```javascript
let a: number | string = 10;
a = "hello";
```

#### 类型别名

这样代码看起来不太方便，并且这个组合类型只能给 a 使用，如果有一个变量 b 也可以同时是 number 或 string 的类型的话，还要重复定义这个类型。要解决这个问题，我们可以使用 type 关键字来给这个组合类型起个别名，让代码更易读，也方便其他变量使用，这里定义一个 type 名字叫 NumStr，自定义的类型名字推荐首字母大写：

```typescript
type NumStr = number | string;
```

然后 a 变量就可以这样定义，给它一个数字值：

```typescript
let a: NumStr = 10;
```

同样也可以再定义一个 b 变量，给它一个字符串值：

```typescript
let b: NumStr = "hello";
```

另外，组合类型也可以直接使用字面值来定义，这样就规定了一个变量的取值范围，比如我想让一个字符串类型的变量 c，只能取"on"或"off"两者之一，那么我们可以这样定义，在 c 后边直接使用"on" | "off" 来定义它能取的值：

```typescript
let c: "on" | "off" = "on";
```

现在它的值是 on，如果给它赋值 off 是可以的，但是赋其他值就会出错，比如给它赋一个"other"字符串：

```typescript
let c: "on" | "off" = "on";

c = "off";

c = "other";
```

提示 `error TS2322: Type '"other"' is not assignable to type '"on" | "off"'.` other 不能赋值给用 "on" 或 "off" 定义的类型里边。

### 对象类型(interface)

上边介绍的都是基本类型，那么如果要检查对象里的属性是不是符合规范呢？那就要使用 interface，接口了。接口是用来规范一个对象里应该都有哪些属性，包括它的名字，还有它的类型。我们来看一个例子，比如有一个 post 文章对象，我想让它有 title 和 author 属性，并且都是 string 类型的，那么我们可以使用接口来定义一个 Post 类型，使用 interface 关键字，后边是接口的名字，这里叫 Post，然后后边跟一对大括号，里边写上该有的属性和类型，注意每个属性后边用分号结尾，不是逗号：

```typescript
interface Post {
  title: string;
  author: string;
}
```

接着定义一个 post 对象，让它使用 Post 接口类型：

```typescript
let post: Post = {
  title: "标题",
  author: "fh",
};
```

这里没有问题，如果再添加一个"publishDate"属性，那么就会出现错误

```typescript
let post: Post = {
  title: "标题",
  author: "fh",
  publishDate: "2020-06-01",
};
```

提示 `error TS2322: Type '{ title: string; author: string; publishDate: string; }' is not assignable to type 'Post'. Object literal may only specify known properties, and 'publishDate' does not exist in type 'Post'.`  说对象里边只能包括接口里定义的属性。同样的，少定义一个属性，例如去掉 title 属性，会提示 `Property 'title' is missing in type '{ author: string; }' but required in type 'Post'.`  缺少 title 属性。

#### 接口作为函数参数类型

接口除了可以查检对象是否符合规范外，也可以用于函数参数的类型检查，这里需要注意的是，如果传递进来的对象没有定义类型的话，那么**只要它的属性满足接口中的规范，就可以通过查检**，**哪怕它有额外的属性**，比如，有一个函数接收 post 类型的参数，里边获取它的 title 属性并打印出来：

```typescript
function getTitle(post: Post) {
  console.log(post.title);
}
```

然后定义一个 post 变量，不指定类型，然后还包括额外的 `publishDate`  属性:

```typescript
let post = { title: "标题", author: "fh", publishDate: "2020-06-01" };
```

定义好之后把它传给 getTitle 函数，发现没有问题：

```typescript
getTitle(post);
```

如果想严格检查对象参数的话，可以像之前那样把 post 变量定义为 Post 接口类型的：

```typescript
let post: Post = { title: "标题", author: "fh", publishDate: "2020-06-01" };
```

或者直接给函数传递对象字面值：

```typescript
getTitle({ title: "标题", author: "fh", publishDate: "2020-06-01" });
```

这样就会提示出错。

### 数组类型

给数组规定类型可以保证里面的元素都是同一类型，以防在统一处理数组元素时，混进来其他类型的元素，导致异常，或者防止意外给数组元素赋了其他类型的值。要给数组定义类型，只需要在类型后边加上一对空的方括号就可以了，比如定义一个 number 类型的数组可以这样:

```typescript
let arr: number[] = [1, 2, 3];
```

#### 泛型

还有一种方式是使用泛型，泛型是属于面向对象语言中比较高级的特性，这里简单知道一下怎么使用就可以了，这里把泛型应用在数组身上，同样可以用来规定数组里元素的类型，只是这里要使用 Array class，或者说是构造函数，来定义，比如同样的 arr，使用泛型的话，就把 number[] 改成 Array 构造函数的名字，后边跟一个尖括号，里边是类型 number：

```typescript
let arr: Array<number> = [1, 2, 3];
```

#### tuple（元组）

TypeScript 里还有一个概念，叫 tuple，元组，它是一个有限元素数量的数组，但是呢每个元素需要分别指定是什么类型，比如我这里有一个三元组，就是说这个数组有三个元素，然后我规定第一个元素是 number 类型，第二个元素是 string 类型，第三个元素是 boolean 布尔类型，那么可以这样定义 `let tup: [number, string, boolean]` ，然后给它赋上合适的值 `[1, "fh", true]` ：

```typescript
let tup: [number, string, boolean] = [1, "fh", true];
```

## 总结

好了，到这里我们介绍了：

- 什么是 TypeScript
- 为什么要学 TypeScript 和它有什么优点
- 怎样编写和运行 TypeScript 代码
- 以及它的一些基本的并且常用的语法点

这样你就能对 TypeScript 有大体的认识了，也能编写简单的 TypeScript 应用并且看懂一部分其他人的代码了。到这里你可能发现 TypeScript 带来的功能特性都是零散的，因为它本身就是给 JS 添砖加瓦，所以它的语法点逐一突破就好了。

你学会了吗？如果有问题，欢迎通过下方链接参与讨论。

[>> 在 B 站参与讨论](https://www.bilibili.com/video/BV1xp4y1D7ux/)
