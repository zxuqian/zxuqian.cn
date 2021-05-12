---
id: vue-echarts-doughnut-chart
title: Vue 3.0 + ECharts 实现电影票房自定义环形图教程
slug: ../vue-echarts-doughnut-chart
description: 上期视频我们实现了票房的柱状图展示，那么这期视频我们来看一个环形图的配置。先看一下最终效果，环形图的各个部分表示的是某个电影的票房占比，占比越高的颜色越浅，占比越低的颜色越深，每部分还会有指示线，配有文本指明这块区域是哪部电影，占比是多少。鼠标移到某区域的时候，会显示提示框，上面有电影名和具体的数值。在大体了解做成什么样之后，我们来看一下组件的主要代码。
keywords:
  - vue
  - echarts
  - vue-echarts
  - 柱状图
  - 前端
  - frontend
---

上期视频我们实现了票房的柱状图展示，那么这期视频我们来看一个环形图的配置。先看一下最终效果，环形图的各个部分表示的是某个电影的票房占比，占比越高的颜色越浅，占比越低的颜色越深，每部分还会有指示线，配有文本指明这块区域是哪部电影，占比是多少。鼠标移到某区域的时候，会显示提示框，上面有电影名和具体的数值。

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=205062554&bvid=BV1zh411U7Xi&cid=321904256&page=1"/>

在大体了解做成什么样之后，我们来看一下组件的主要代码。

## 创建组件

环形图组件的代码位于 src/components/DoughnutChart.vue 中，它的代码跟柱状图的几乎一样：

- 根据传递进来的票房数据生成图表数据。
- 这里要注意的是，环形图需要的数据只有一个维度，在 populateMovieData() 函数中只返回了一个数组，数组中的对象有 name 和 value 属性。
- 最后使用封装的 echarts 基础组件进行渲染。

因为和柱状图的代码极其相似，那么我们是否可以把它抽离成通用的呢？答案是肯定的，可以参照之前的 Vue 3 Todo App 教程把它抽离成 composables，这里就不演示了。

```html
<template>
  <Chart :options="options" />
</template>

<script setup>
import Chart from "./Chart.vue";
import doughnutChartCreator from "../charts/doughnutChart.js";
import { computed, toRefs } from "vue";

const props = defineProps({
  boxOfficeData: Array,
});

const { boxOfficeData } = toRefs(props);

const options = computed(() => {
  const data = populateMovieData(boxOfficeData.value);
  return doughnutChartCreator(data);
});

function populateMovieData(rawData) {
  let data = [];
  rawData.forEach((movie) => {
    data.push({
      name: movie?.name,
      value: movie?.boxOffice,
    });
  });
  return data;
}
</script>

```

## 编写配置

我们接下来看一下 doughnutChartCreator() 中的配置项，代码位于 src/charts/doughnutChart.js 中。它导出了一个接收 data 作为参数的函数，并返回图表的配置项，我们来看一下它们的含义。

- title 部分和柱状图的一样，设置了标题和字体。
- tooltip 是设置鼠标移到环形图某个区域时，弹出的提示框。
  - trigger 设置为 item 意思为触发提示框的是环形图的各块区域。
  - 后面的属性分别设置了内间距、边框、阴影和文本样式。内间距的设置方法、顺序和 css 中的一样，只是用数组表示，extraCssText 则是设置自定义的 css 样式。
- color 设置环形图所用到的颜色，通过 hsl 颜色表示法表示，只需要调整饱和度和亮度部分，就能表示浅红到深红的颜色。
- series 用来配置环形本身。
  - 类型为 pie 饼图，然后通过 radis 设置内、外半径来把它变成环形图。
  - 起始角度设置为 160 度，这样各个电影在图表中的分布比较平均。再设置距离上方 60 个距离单位。
  - label 用来设置环形图各个部分的文本说明，给它设置为显示在外侧，与指示线对齐，调整边界的距离，颜色和字体。
    - label 中的文本使用 formatter 和 rich 来对某部分文本单独设置样式。
    - formatter 中的 {b}、{d} 是占位符，分别表示数据名，也就是电影名，和百分比。 {d}% 前边的 d | 相当于是 css 中的 class，可以在 rich 中引用。
    - rich 里通过引用 d 来设置百分比的样式，给文字添加背景、圆角和间距，这样文字就会显示为 tag 样式，然后设置字体颜色和加粗。
  - emphasis 设置鼠标移到环形区域后的高亮样式，给 label 设置加粗并增加字体尺寸，这样鼠标移上去，label 就有了放大的效果。
  - labelLine 用于设置指示线的样式。
    - length 设置起始段长度，length2 设置弯折后的长度。
    - 再把它设置为平滑、虚线。
  - 最后，把传递进来的 data 设置到 series 中。

```javascript
export default (data) => ({
  title: {
    text: "电影当日综合票房占比",
    subtext: "数据来自猫眼电影（非实时）",
    textStyle: {
      fontSize: 24,
      color: "hsl(0deg, 100%, 100%)",
    },
    subtextStyle: {
      fontSize: 14,
      color: "hsl(0deg, 20%, 75%)",
    },
  },
  tooltip: {
    trigger: "item",
    padding: [14, 24],
    borderWidth: 0,
    extraCssText: "box-shadow: 0 0 24px hsl(0, 100%, 50%, 0.2);",
    textStyle: {
      fontWeight: "bold",
      color: "hsl(0deg, 0%, 40%)",
    },
  },
  color: [
    "hsl(0deg, 100%, 70%)",
    "hsl(0deg, 90%, 60%)",
    "hsl(0deg, 80%, 50%)",
    "hsl(0deg, 70%, 45%)",
    "hsl(0deg, 60%, 40%)",
    "hsl(0deg, 50%, 35%)",
    "hsl(0deg, 40%, 30%)",
  ],
  series: [
    {
      type: "pie",
      radius: ["50%", "70%"],
      startAngle: 160,
      top: 60,
      label: {
        show: true,
        position: "outer",
        alignTo: "labelLine",
        edgeDistance: "3%",
        distanceToLabelLine: 20,
        color: "hsl(0deg, 100%, 98%)",
        fontSize: 14,
        fontWeight: "bold",
        formatter: "{b} {d|{d}%}",
        rich: {
          d: {
            backgroundColor: "hsl(0deg, 100%, 70%)",
            borderRadius: 4,
            padding: [4, 8],
            color: "white",
            fontWeight: "bold",
          },
        },
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 18,
          fontWeight: "bold",
        },
      },
      labelLine: {
        length: 30,
        length2: "20%",
        smooth: true,
        lineStyle: {
          type: "dashed",
        },
      },
      data: data,
    },
  ],
  backgroundColor: "transparent",
});
```

## 预览效果

我们在 App.vue 的 template 中加载 DoughnutChart 组件：

```html
<template>
  <div class="wrapper">
    <BarChart :boxOfficeData="boxOfficeData" class="chart" />
    <DoughnutChart :boxOfficeData="boxOfficeData" class="chart" />
  </div>
</template>
```

启动一下服务，就可以看到环形图的实际效果了。
好了，这个就是 Vue + Echarts 实现电影票房环形图的教程，你学会了吗？如果有帮助，请三连，想更好的学前端，请关注峰华前端工程师，感谢观看！
