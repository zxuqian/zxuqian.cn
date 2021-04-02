---
slug: css-font-display-intro
title: Web 性能优化：使用 CSS font-display 控制字体加载和替换
author: 峰华
author_title: 前端工程师 / B站UP主
author_url: https://github.com/zxuqian
author_image_url: https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX
description: 在编写网站的时候，或多或少都会用到一些网络上的字体，CSS 3 中虽然加入了对 Web Fonts（网络字体）的支持，但是浏览器对它们的加载和默认处理方式会极大的影响网站的性能和用户体验。例如默认情况下，在 Web Fonts 加载时，使用该字体的地方会显示空白，直到字体下载完成之后才会显示，这时通过改变 CSS 中的 `font-display` 属性，就可以避免这个问题。
tags: [前端, css, 性能优化]
activityId: "500549825279095997"
---

在编写网站的时候，或多或少都会用到一些网络上的字体，CSS 3 中虽然加入了对 Web Fonts（网络字体）的支持，但是浏览器对它们的加载和默认处理方式会极大的影响网站的性能和用户体验。例如默认情况下，在 Web Fonts 加载时，使用该字体的地方会显示空白，直到字体下载完成之后才会显示，这时通过改变 CSS 中的 `font-display` 属性，就可以避免这个问题。

<!-- truncate -->

## 什么是 Web Fonts

在介绍 `font-display` 之前，先了解一下什么是 Web Fonts。在以前使用 CSS 指定字体时只能使用用户电脑本地上现有的字体，而由于每个用户电脑上的字体可能都不一样，所以能用的基本上就是操作系统内置的一些字体，例如微软雅黑，宋体，苹果苹方，这些也叫做安全字体（Web Safe Fonts）。为了使字体显示正常，我们一般会通过 `font-family` 属性同时指定多个字体，如果第一个字体没有在操作系统中找到，就会使用下一个后备字体（ Fallback Font ），以此类推：

```css
* {
  font-family: "PingFang SC", "Microsoft Yahei", sans-serif;
}
```

后来，CSS 开始支持 `@font-face` 这个指令，可以加载自定义的字体文件，这个时候可以把字体随网站一起发布，用户在浏览网站的时候，会下载 `@font-face` 中指定的字体。例如下边的代码加载了 fonts 目录下的 Raleway 字体：

```css
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  src: url(/fonts/raleway.woff2) format('woff2');
}
```

`src` 属性用于指定字体的位置，其中 `url()` 函数也接受网络地址，来加载第三方提供的字体文件，这样也催生了像 Google Fonts 这样的云字体服务。不过，基本上只有英文字体才适合 Web Fonts，因为它只有 26 个英文字母外加数字，体积小，适合在网络上传输，而中文光常用的就有 3000 个字符，所以一般只使用操作系统自带的，不过现在也有字体服务会根据网站上所使用的文字去动态的生成字体文件。

## 浏览器加载 Web Fonts 的时期

浏览器加载 Web Fonts 时按顺序会有三个时期：

- 阻塞期（Block Period）。在此期间如果字体没有加载完成，那么浏览器会使用 `font-family` 指定的字体列表中的后备字体（Fallback）进行渲染，但是显示为空白，也就是对于用户是不可见的。在此期间字体加载完成之后才能正常显示该字体。
- 交换期（Swap Period）。跟阻塞期类似，但是在这个时期内，它会在字体加载时，先用后备字体渲染文本并显示出来（而不是显示空白），在此期间字体加载完成之后才能正常的显示该字体。
- 失败期（Failure Period）。如果字体加载失败，则使用后备字体显示文本。

至于每个时期有多长，是根据 `font-display` 属性的值来确定的。

## font-display 介绍

`font-display` 确切的说不是 CSS 属性，而是专用于 `@font-face` 指令的描述符，它可以取如下几个值：

- `auto` 。这个是 `font-display` 的默认值，字体的加载过程由浏览器自行决定，不过基本上和取值为 `block` 时的处理方式一致。 
- `block` 。在字体加载前，会使用备用字体渲染，但是显示为空白，使得它一直处于阻塞期，当字体加载完成之后，进入交换期，用下载下来的字体进行文本渲染。不过有些浏览器并不会无限的处于阻塞期，会有超时限制，一般在 3 秒后，如果阻塞期仍然没有加载完字体，那么直接就进入交换期，显示后备字体（而非空白），等字体下载完成之后直接替换。
- `swap` 。基本上没有阻塞期，直接进入交换期，使用后备字体渲染文本，等用到的字体加载完成之后替换掉后备字体。
- `fallback` 。阻塞期很短（大约100毫秒），也就是说会有大约 100 毫秒的显示空白的后备字体，然后交换期也有时限（大约 3 秒），在这段时间内如果字体加载成功了就会替换成该字体，如果没有加载成功那么后续会一直使用后备字体渲染文本。
- `optional` 。与 fallback 的阻塞期一致，但是没有交换期，如果在阻塞期的 100 毫秒内字体加载完成，那么会使用该字体，否则直接使用后备字体。这个就是说指定的网络字体是可有可无的，如果加载很快那么可以显示，加载稍微慢一点就不会显示了，适合网络情况不好的时候，例如移动网络。

那么在了解 `font-display` 之后，那么我们应该不难看出来，对于大部分情况应该把它的值设置为 `swap` ，这样在加载网络字体期间，使用后备字体进行渲染，加载完成之后在替换为指定的网络字体。

## 应用

现在使用谷歌的 Web Fonts 字体服务已经不需要我们用手动去写 `@font-face` 指令了，而是通过调用它的接口，直接返回一段 `@font-face` 指令 CSS 代码，同时它也支持 `display=swap` 参数，来让返回的 CSS 代码中，设置 `font-display` 为 `swap` ，这个可以从我的网站上看到：

```css
/* https://fonts.font.im/css?family=Raleway:500,700&display=swap */
@font-face {
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.font.im/s/raleway/v19/1Ptug8zYS_SKggPNyCAIT4ttDfCmxA.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* ... */
```

## 浏览器支持

从 [caniuse.com](http://caniuse.com) 网站上可以查到，这个属性在各个浏览器中的支持程度为（最低版本）：

|  IE   | Edege | FireFox | Chrome | Safari | IOS Safari | Android Browser | Chrome for Android | FireFox for Android |
| :---: | :---: | :-----: | :----: | :----: | :--------: | :-------------: | :----------------: | :-----------------: |
|  No   |  79   |   58    |   60   |  11.1  |    11.3    |       81        |         88         |         86          |



