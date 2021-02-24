---
slug: 5-javascript-tricky-problems
title: 整理了5个JavaScript怪异行为及其原因
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
description: JavaScript 早期的规范不统一，也没有严格的标准，再加上它的语法灵活多样，有些看起来就不正确的代码却能正常执行，一些看起来符合逻辑的代码，运行结果却相差十万八千里。这些问题在日常开发中经常会导致 BUG，更重要的是，很多面试官会把它们拿出来当考验咱们 JS 工程师的能力。
tags: [前端, JavaScript]
activityId: "468208584104520356"
oid: "101349209"
---

如果你用 JavaScript 写过项目或者参加过面试，那一定遇到过不少令人匪夷所思的问题。JavaScript 早期的规范不统一，也没有严格的标准，再加上它的语法灵活多样，有些看起来就不正确的代码却能正常执行，一些看起来符合逻辑的代码，运行结果却相差十万八千里。这些问题在日常开发中经常会导致 BUG，更重要的是，很多面试官会把它们拿出来当考验咱们 JS 工程师的能力。那么这篇文章就总结了 5 个 JavaScript 比较坑的问题，以及它们出现的原因和解决方法。

<!-- truncate -->

## 1、可选分号

问题：

```javascript
function foo() {
	return 
  {
     value: 1
  };
}
console.log(typeof foo());
```

你可能会认为它的输出结果是 "object"，但是结果却是 `undefined`。乍一看代码好像没什么问题，但是细心一点可以看到 return 语句返回的对象放到了下一行，那么问题就来了：JavaScript 的分号是可选的，return 语句在换行后，JavaScript 会自动给它的结尾加上分号，而在 return 之后的代码都不会执行，所以 foo() 的返回结果是 undefined。解决方法是在每行结尾都写上分号，这样就能清楚的知道代码在哪里结束。

## 2、this 指向

问题：

```javascript
var a = 5;
var obj = {
	a: 3,
  foo: function() {
    console.log(this.a);
  }
}

var objFoo = obj.foo;
objFoo();
```

答案为 5。在调用函数时，它内部的 this 指向的是调用对象，例如 `obj.foo()` this 指向的是 obj 对象。如果在全局调用函数时， this 指向的是全局对象，在浏览器中为 window。`objFoo` 相当于是在获取了 `obj` 对象的 `foo` 方法引用后，在全局进行调用，所以 this 指向的是 window 对象。使用  `var` 在顶级作用域中定义的变量会添加到 window 中，所以 objFoo() 调用打印的是全局中的 a，即 5。

## 3、数组长度

问题：

```javascript
const arr = [1, 2, 3, 4];
arr.length = 0;
console.log(arr[0]);
```

结果为 `undefined`, 因为 array 的 length 属性同时也能反过来控制数组的元素数量，在给 arr.length 设置为 0 时，arr 就变成了空数组，再访问里边的元素就都是 undefined 了。

## 4、提升（Hoisting)

问题：

```javascript
function bar() {
  return foo;
  foo = 10;
  function foo() {}
  var foo = '11';
}
console.log(typeof bar());
```

结果为 `function`。使用 var 声明的变量和使用 funtion 定义的函数会提升到当前作用域的顶部，所以变量可以先赋值，后使用 var 进行声明，而函数则可以先调用后定义。**但是要注意的是，使用 var 定义（指在声明的同时进行赋值）的变量，只会提升声明部分，赋值部分不会被提升，例如示例中的** `var foo = '11'` 会提升 `var foo`，但 `foo = 11` 保留在原位。在定义 bar() 函数时，同时会创建一个作用域，提升会把相关变量和函数放到 bar() 函数的第一行。 综合上边的规则，可以知道 foo() 函数和 foo 变量的声明进行了提升，因为 foo 变量与同名，但是只有声明，所以不会覆盖函数的值，foo 仍然指向的是函数。之后就直接使用 return 语句返回了结果，后边的代码就不会再执行了。bar() 中的代码其实是下边这种形式：

```javascript
function bar() {
  function foo() {}
  var foo;
  return foo;
  foo = 10;
  var foo = '11';
}
```

## 5、作用域与闭包

问题：

```javascript
for(var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  });
}
```

你可能会认为上方代码的结果为 `0 1 2`，但实际上是 `3 3 3`，这是因为使用 var 关键字定义的变量没有块级作用域，在 for 循环中定义的 i 相当于是全局变量，它会添加到 window 变量中，即使在 for 循环退出后也能访问 i 的值。这样就导致了一个问题，使用 setTimeout() 推迟的函数会在 for 循环结束后才执行，此时 i 的值已经变成 3 了，所以 3 个 setTimeout() 中的函数都会打印出 3。要解决这个问题有两种方法。

第 1 种是使用 let 关键字定义变量 i，这样在每次循环时，都会创建一个新的作用域，因此每个作用域中的 i 是相互独立的，这样就能打印出 `0 1 2`。

第 2 种方法是使用自执行函数，例如下边代码这样：

```javascript
for(var i = 0; i < 3; i++) {
	(function(i) {
    setTimeout(() => {
      console.log(i);
    })
  })(i)
}
```

这时，i 通过参数传递给了匿名的自执行函数，同时自执行函数创建了一个闭包，所以它会捕获 i 的值，相当于在内部复制了参数 i 的值，所以无论外边的 i 怎么变化，它内部的值都不会发生改变。这样也能打印出 `0 1 2`。

## 小结

这 5 个问题揭露了 JavaScript 中常见的一些坑，稍微不注意就会留下隐患，并且难以察觉，例如一个简单的换行、 this 指向的改变、意外修改数组的长度、变量和函数提升、作用域的创建都有可能出现异外的情况。这些问题可能在日常开发中并不多见，但是经常会出现在 JS 笔试和面试中，用于考察面试者对 JS 的熟悉程度。另外， JS 中的坑远不止这些，所以需要在日常中多积累，另外也可关注本博客，我会不定时的更新 JavaScript 使用上的问题，感谢！