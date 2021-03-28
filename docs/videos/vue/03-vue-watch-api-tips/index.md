---
id: vue-watch-api-tips
title: Vue 3 Watch API 的使用注意事项
slug: ../vue-watch-api-tips
description: Vue 的 composition api 虽然简化了 vue 组件的代码，但是在实际使用过程中仍然需要注意一些问题。这里我把我在体验 vue 3 composition api 的过程中遇到的比较重要的问题整理了一下，尤其是对于有 React 开发经验的人来学习 Vue，会更有帮助。
keywords:
  - vue
  - watch
  - watch api
  - setup
  - vue 3
  - composition api
  - 前端
  - frontend
---

Vue 的 composition api 虽然简化了 vue 组件的代码，但是在实际使用过程中仍然需要注意一些问题。这里我把我在体验 vue 3 composition api 的过程中遇到的比较重要的问题整理了一下，尤其是对于有 React 开发经验的人来学习 Vue，会更有帮助。

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=374629098&bvid=BV1uZ4y1w7nR&cid=312414099&page=1"/>

Vue 的 composition api 虽然简化了 vue 组件的代码，但是在实际使用过程中仍然需要注意一些问题。这里我把我在体验 vue 3 composition api 的过程中遇到的比较重要的问题整理了一下，尤其是对于有 React 开发经验的人来学习 Vue，会更有帮助。

## 问题

先看问题：在使用 ref 定义响应式状态时，如果传递了一个对象作为参数，那么在使用 watch() 监听这个对象的变化时，根据这个对象的更新方式，watch() 会有不同的反应。

## 复现过程

假设父组件中用 ref 定义了一个 user 对象，保存用户信息，然后父组件中有个按钮，在点击的时候会把 user.value 替换成一个全新的 user 对象：

```html
<template>
  <HelloWorld :user="user" />
  <button @click="getNewUser">update user</button>
</template>
<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

const user = ref({
  name: "san",
  age: 10,
});

const getNewUser = () => {
  user.value = {
    name: "abc",
    age: Math.random(), // just to make some changes
  };
};
</script>
```

这里简单的用随机数修改 age 的值，以区分不同的对象，然后把 user 传递给 HelloWorld 子组件。在 HelloWorld 子组件中，如果想使用 watch 监听 user 的变化，这时如果把 props.user 传递给 watch 第一个参数的话，那么这个监听在 user 发生变化时是不会重新执行的：

```javascript
const props = defineProps({
  user: Object,
});

watch(props.user, (newv, oldv) => {
  console.log(newv, oldv); // 不会执行
});
```

这是因为如果直接把 props.user 传递给 watch() ，相当于是监听 user 里边的属性变化，但是 user 这个对象本身每次在点击按钮的时候都会发生变化，这个 watch 监听的还是原始的对象，所以会失效，那么要解决这个问题可以使用函数的形式，当函数里依赖的状态发生变化时，watch 会重新执行：

```javascript
watch(
  () => props.user,
  (newv, oldv) => {
    console.log(newv, oldv); // 会执行
  }
);
```

还有一种方式是使用 toRefs 把 props 中的所有属性都转换为 ref，这样也可以直接监听 props 中的 user 了，因为这时监听的是 user ref 中的 value 属性，user ref 本身不会变化，变化的只是 value 属性的值，所以也可以触发 watch() 的回调函数：

```javascript
const { user } = toRefs(props);
watch(user, (newv, oldv) => {
  console.log(newv, oldv); // 会执行
});
```

如果在解构赋值的时候不用 toRefs()，那么即便是在 watch() 中使用函数形式也不行：

```javascript
const { user } = props;
watch(
  () => user,
  (newv, oldv) => {
    console.log(newv, oldv); // 不会执行
  }
);
```

如果父组件在点击按钮的时候，只修改了一下 user 属性值，例如修改一下年龄：

```javascript
const getNewUser = () => {
  user.value.age = Math.random();
};
```

那么在子组件中，可以直接监听 user 属性：

```javascript
watch(props.user, (newv, oldv) => {
  console.log(newv, oldv); // 会执行
});
```

因为 user 只是修改了部分属性，引用没有发生变化，所以当 user 的 age 变化时，watch() 也会重新执行。甚至是直接把 user 从 props 解构出来也没有问题：

```javascript
const { user } = props;
watch(user, (newv, oldv) => {
  console.log(newv, oldv); // 会执行
});
```

好了，这个就是使用 vue watch api 时遇到的问题，在开发中一定要注意。如果有帮助，请三连，想更好的学前端，请关注峰华前端工程师，感谢观看！

