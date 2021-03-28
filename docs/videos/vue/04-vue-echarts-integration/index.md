---
id: vue-echarts-integration
title: 封装 Echarts 为 Vue.js 组件教程
slug: ../vue-echarts-integration
description: 在上一家公司里，公司的产品用到了大量的图表进行数据可视化，当时公司决定使用的是 Echarts，它是一个与框架无关的 JS 图表库，所以需要自行封装到 react 或 vue 中。
keywords:
  - vue
  - echarts
  - vue-echarts
  - 封装 Echarts 为 Vue 组件
  - 封装 Echarts
  - 前端
  - frontend
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=459793298&bvid=BV1P5411N7ii&cid=315519040&page=1"/>

在上一家公司里，公司的产品用到了大量的图表进行数据可视化，当时公司决定使用的是 Echarts，它是一个与框架无关的 JS 图表库，所以需要自行封装到 react 或 vue 中。今天这个视频来看看如何使用简单的方式把 echarts 封装到 vue 组件中。

## 搭建基础结构

首先我们用 Vite 创建一个 vue 项目，命名为 vue-echarts，然后安装 echarts 依赖。

```bash
yarn create @vitejs/app
yarn add echarts
```

安装完成后，新建一个 Chart 组件，作为基础组件加载并初始化 echarts 容器，并根据配置的变化更新图表。

```html
<template>
  <div class="container"></div>
</template>

<script setup></script>
```

## 初始化 Echarts

Echarts 需要一个 dom 元素作为容器，并调用它的 init()方法进行初始化，那么在 vue 中获取 dom 元素需要使用 template ref，而在 vue3 中，template ref 跟响应式状态的 ref 合为了一体，所以，我们定义一个 ref 来保存 dom 元素。

```html
<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import { ref } from "vue";
const container = ref(null);
</script>
```

ref 中保存的元素在 dom 加载完成之后才会有值，所以我们需要在 onMounted 生命周期中获取它，因为这时 dom 已经加载完成了。获取了容器之后，就可以使用 echarts.init() 初始化了，这里导入 echarts 库进行初始化，使用深色主题，初始化后会返回 echarts 实例：

```javascript
import { ref } from "vue";
import * as echarts from "echarts";

const container = ref(null);
onMounted(() => {
  const chart = echarts.init(container.value, "dark");
});
```

接着让 Chart 组件接收一个 options 属性，用于接收图表配置，在 echarts 初始化完成以后把配置传给 echarts 实例，options 是一个必须的属性，类型为对象，默认值是空的对象：

```javascript
// ...
const props = defineProps({
  options: {
    type: Object,
    default: {},
    required: true,
  },
});
// ...
onMounted(() => {
  const chart = echarts.init(container.value);
  chart.setOption(props.options);
});
```

## 监听配置变化

这个时候，Chart 组件虽然可以使用了，但是当 options 变化的时候，图表不会刷新，我们可以在这里使用 watch ，对 options 进行监听，当 options 发生变化时，调用 echarts.setOption() 更新配置，不过，在 watch 里不能访问 onMounted() 里边的 echarts 实例，这时我们可以把 echarts 实例也保存在 ref 中，这样，就可以在 watch 中使用了：

```javascript
const container = ref(null);
const chart = ref(null);

onMounted(() => {
  chart.value = echarts.init(container.value);
  chart.value.setOption(props.options);
});

// ...
```

watch 中的代码很简单，就是调用 echarts.setOptions()，把新的 options 值传递进去就行了。watch 第一个参数可以是一个 ref，我们把 options 转换为 ref 传递给它，第二个参数是处理函数，它接受两个参数，分别是监听属性新变化的值和之前的值，我们把新变化的值传递给 echarts，这样就可以重新绘制图表了。第三个参数为是否深度对比，对于配置项这种嵌套比较多的对象，需要设置为 true。

```javascript
// ...
const { options } = toRefs(props);

// ...
watch(
  options,
  (newOptions) => {
    chart.value.setOption(newOptions);
  },
  { deep: true }
);
```

最后加上 css，给容器设置宽高为 100%，具体的真实宽高让使用它的组件来设置，这里要注意 echarts 要求必须设置宽高才能正常绘制。

```html
<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
```

## 加载图表

我们试试加载一个图表，从 echarts 官网找一个示例配置，例如柱状图，复制下来，然后在 src 目录下创建一个 charts 文件夹，存放图表数据，新建一个 barChartOptions.js 文件，粘贴刚才复制的配置，我们这里可以导出一个函数，以后可以通过参数来传递数据和自定义的配置项：

```javascript
export default function barChartOptions() {
  return {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["product", "2012", "2013", "2014", "2015"],
        ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
        ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
        ["Cheese Cocoa", 24.1, 67.2, 79.5, 86.4],
      ],
    },
    xAxis: [
      { type: "category", gridIndex: 0 },
      { type: "category", gridIndex: 1 },
    ],
    yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
    grid: [{ bottom: "55%" }, { top: "55%" }],
    series: [
      // These series are in the first grid.
      { type: "bar", seriesLayoutBy: "row" },
      { type: "bar", seriesLayoutBy: "row" },
      { type: "bar", seriesLayoutBy: "row" },
      // These series are in the second grid.
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
      { type: "bar", xAxisIndex: 1, yAxisIndex: 1 },
    ],
  };
}
```

然后新建一个 BarChart 组件：

```html
// BarChart.vue
<template></template>
<script setup></script>
<style scoped></style>
```

再在 App 组件中引入它，设置 class 为 chart，然后给 App 组件的 div 容器和图表设置一下宽高、背景、对齐等样式：

```html
// App.vue
<template>
  <div class="wrapper">
    <BarChart class="chart" />
  </div>
</template>
<script setup>
import BarChart from "./components/BarChart.vue";
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: hsl(210deg, 20%, 10%);
}
.wrapper {
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}
.wrapper .chart {
  width: 50%;
  height: 70%;
}
</style>
```

回到 BarChart 组件中，引入 Chart 组件和配置项，最后在 template 中加载图表，注意这里配置项是个函数，需要使用小括号进行调用，这时图表就加载成功了：

```html
<template>
  <Chart :options="barChartOptionCreator()" />
</template>

<script setup>
import Chart from "./Chart.vue";
import barChartOptionCreator from "../charts/barChartOptions.js";
</script>
```

现在可以随便修改一下图表配置（例如某个数据项），保存，看到可以重新绘制图表了，不过有时候后改多了，图表不会重新绘制，这时候重新启动下服务就好了，不知是不是 Vite 的原因，这个有精力的小伙伴可以研究一下。
好了，这个就是封装 Echarts 为 Vue.js 组件教程，如果有帮助，请三连，想更好的学前端，请关注峰华前端工程师，感谢观看！
