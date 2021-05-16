---
id: react-docusaurus-blog-list-view
title: React + Docusaurus 博客列表视图实现
slug: ../react-docusaurus-blog-list-view
description: 网站之前加上了列表视图，方便快速查找文章，这个视频整理了制作过程，网站代码是开源的，可以结合视频理解（非常非常简单！）。
keywords:
  - react
  - docusaurus
  - blog
  - hooks
  - list
  - 前端
  - frontend
---

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=587721642&bvid=BV1iB4y1A7bN&cid=328161762&page=1"/>

现在的人，时间都很紧迫，信息的泛滥让大家越来越难以快速找到自己所需的信息，我的网站上的文章虽然设置了只显示部分文本，但是要快速定位到某篇文章也需要不少的时间，所以我就给网站的文章加上了列表视图，现在把过程整理一下，如果你也需要这样的功能，那么可以参考这个视频的做法。所涉及的技术栈为 React。

## 切换视图 Hooks

文章列表默认是卡片视图，用户点击切换按钮后可以选择列表视图，那么当前的视图类型是会变化的，所以需要定义成状态，我们把切换逻辑放到一个自定义的 hooks 里，在这个 hooks 中：

- 定义了 viewType 状态。
- 使用 useEffect() hook，在组件渲染后，从 localStorage 中拿取用户上次切换的视图，如果没有，则默认为卡片视图，给 useEffect() 第二个参数传递一个空数组，这样它就只会在组件渲染的时候执行一次，属性变化时也不会重新执行。
- 接着定义切换视图的事件处理回调 toggleViewType，这里用了 useCallback() 内置的 hook，第二个参数传递了空数组，那么这个 toggleViewType 的引用就不会发生变化，无论组件怎么更新，它都是指向的同一个函数。
  - 函数里边就是更新视图状态，并把新的视图状态保存到 localStorage 中，以记录用户所选择的状态。
- 最后把 viewType 状态和 toogleViewType 切换视图回调返回回去，以供组件使用。

```javascript
import { useCallback, useEffect, useState } from "react";

export function useViewType() {
  const [viewType, setViewType] = useState("card");

  useEffect(() => {
    setViewType(localStorage.getItem("viewType") || "card");
  }, []);

  const toggleViewType = useCallback((newViewType) => {
    setViewType(newViewType);
    localStorage.setItem("viewType", newViewType);
  }, []);

  return {
    viewType,
    toggleViewType,
  };
}
```

这里有一点需要注意，也是我遇到的问题，就是 localStorage.getItem("viewType") 不能直接作为 state 的默认值，例如不能这样写：

```javascript
const [viewType, setViewType] = useState(
  localStorage.getItem("viewType") || "card"
);
```

在 build 的时候，会提示 localStorage 未定义，因为 docusaurus 是采用了 SSR （服务端渲染），在打包的时候会把写在外层的代码视为服务器环境，也就是 node.js，它不包含 window 属性，所以也就没有 localStorage 了，那么解决办法之一就是使用 useEffect() 或 useCallback()，就像 useViewType() hooks 中的一样。

## 使用 hooks

编写完 hooks 之后，我们需要在自定义的 BlogListPage 组件中使用它，获取 useViewType() 返回的视图状态和切换回调，然后定义两个 flags，分别表示是否为卡片视图，是否为列表视图：

```javascript
// list or card view
const { viewType, toggleViewType } = useViewType();

const isCardView = viewType === "card";
const isListView = viewType === "list";
```

## 切换按钮 JSX 结构

引入 hooks 之后，我们看一下切换按钮的 jsx 结构，很简单，就是两个 svg 图标，一个代表卡片视图，一个代表列表视图，在选中的状态下为蓝色，未选中的状态下为灰色，在点击的时候，使用 toggleViewType() 回调，把该 svg 所代表的视图值传递进去：

```jsx
import ListFilter from "./img/list.svg";
import CardFilter from "./img/card.svg";

<div className="bloghome__swith-view">
  <CardFilter
    onClick={() => toggleViewType("card")}
    fill={viewType === "card" ? "#006dfe" : "#CECECE"}
  />
  <ListFilter
    onClick={() => toggleViewType("list")}
    fill={viewType === "list" ? "#006dfe" : "#CECECE"}
  />
</div>;
```

注意 docusaurus 支持直接把 svg 导入为 react 组件。

## 切换按钮样式

因为我本人比较懒，没有把这些新加的功能封装成组件，所以直接使用了 className，然后在 custom.css 这个统一的自定义样式文件中编写了样式。切换按钮的容器 className 为 bloghome\_\_swith-view，我们来看一下它的样式：

- 把切换按钮居中，并设置了边距。
- 对于切换图标，设置指针为小手，并且有 0.6s 的过渡效果，它会应用在颜色变化时。

```css
.bloghome__swith-view {
  text-align: center;
  margin: 2em 0 1em 0;
}

.bloghome__swith-view svg {
  cursor: pointer;
  transition: 0.6s;
}
```

## 列表视图 JSX 结构

接着在原先显示卡片列表的地方判断，如果当前是卡片视图再显示：

```jsx
{isCardView && (
  <div className="bloghome__posts-card">
	<!-- ... -->
  </div>
)}
```

然后在它下边定义列表视图的结构，代码几乎和卡片视图一样，这里应该抽离成组件或公共的 hooks，你可以自己发挥一下。这里简单说一下代码的含义：

- 容器的 className 设置为 bloghome\_\_posts-list，稍后看它的样式。
- 在遍历博客列表时，获取标题 title 、链接 permalink、发布日期 date 和标签 tags。
- 后面处理了一下日期，给日、月加上了前置 0。
- 接下来显示文章标题，使用内置的 Link 组件设置超链接。
- 在显示 tags 的时候，默认只显示 2 个，太多会影响布局。
- 然后给 tags 设置超链接。
- 最后显示发布日期。

```jsx
{
  isListView && (
    <div className="bloghome__posts-list">
      {items.map(({ content: BlogPostContent }, index) => {
        const { metadata: blogMetaData, frontMatter } = BlogPostContent;
        const { title } = frontMatter;
        const { permalink, date, tags } = blogMetaData;

        const dateObj = new Date(date);

        const year = dateObj.getFullYear();
        let month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        const day = ("0" + dateObj.getDate()).slice(-2);

        return (
          <div className="post__list-item" key={blogMetaData.permalink}>
            <Link to={permalink} className="post__list-title">
              {title}
            </Link>
            <div className="post__list-tags">
              {tags.length > 0 &&
                tags
                  .slice(0, 2)
                  .map(({ label, permalink: tagPermalink }, index) => (
                    <Link
                      key={tagPermalink}
                      className={`post__tags ${
                        index < tags.length ? "margin-right--sm" : ""
                      }`}
                      to={tagPermalink}
                      style={{
                        fontSize: "0.75em",
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </Link>
                  ))}
            </div>
            <div className="post__list-date">
              {year}-{month}-{day}
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

## 列表视图样式

接下来看一下列表视图的样式：

- 列表视图的容器使用了 grid 布局，默认显示 2 列，居中对齐各列，设置行和列的间距为 12px，容器距离下方间距为 3em。
- 列表项也采用 grid 布局，第一行为标题 title，第二行第一列为标签 tags、第二列为发布日期 date。第一列宽度为刚好能在一行放下内容的宽度，第二列为剩余宽度。
- 接着设置一下列间距、行间距、对齐方式、内间距、背景和圆角。
- 再设置标题的样式，字体颜色为继承，字体大小为 1em，去掉超链接下划线，过渡时间为 0.6s，在鼠标移上去的时候，会改变颜色，颜色改变的时间是 0.6s，最后设置 grid 区域为 title。
- 设置标题颜色，在鼠标移上去的时候显示为蓝色。
- 接着设置标签样式，占据 grid 的 tags 区域，如果长度过宽，显示横向滚动条，再设置下间距。
- 然后设置标签背景、边框和文字颜色。
- 最后设置日期样式，占据 grid 的 date 区域，水平靠右对齐，字体颜色为灰色。

```css
.bloghome__posts-list,
.bloghome__posts-card {
  animation: fading 0.8s;
}

.bloghome__posts-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 12px;
  padding: 0 0 3em 0;
}

.post__list-item {
  display: grid;
  grid-template-areas:
    "title title"
    "tags date";
  grid-template-columns: max-content 1fr;
  column-gap: 2em;
  row-gap: 1em;
  align-items: center;
  padding: 1em 1.2em;
  background: white;
  border-radius: 6px;
}

.post__list-item .post__list-title {
  color: inherit;
  font-size: 1em;
  text-decoration: none;
  transition: 0.6s;
  grid-area: title;
}

.post__list-item .post__list:hover {
  color: var(--ifm-color-primary);
}

.post__list-tags {
  grid-area: tags;
  overflow-x: auto;
  padding: 0.2em 0;
}

.post__list-tags a {
  background: white;
  border: 1px solid #3d94fa;
  color: inherit;
}

.post__list-date {
  grid-area: date;
  justify-self: end;
  color: var(--ifm-color-emphasis-600);
}
@keyframes fading {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

还有一点，切换视图的时候会有一个渐隐渐现的动画，这里用 keyframes 定义了一个 fading 动画，透明度从 0 到 1，然后分别给卡片视图和列表视图容器设置一下动画，执行时间为 0.8s。

## 响应式设置

在小屏幕手机下，列表显示两行可能占不下，那么我们给小屏幕单独设置样式，让它在显示一行：

- 通过 media query 查询屏幕在小于 700px 的时候，把 grid 列设置为 1，最小可以缩放到 0。

```css
/* post list view adjustment */
@media only screen and (max-width: 700px) {
  .bloghome__posts-list {
    row-gap: 36px;
    grid-template-columns: minmax(0, max-content);
  }
}
```

到现在，切换视图的代码就完成了，来回顾一下步骤：

- 定义切换视图的 hooks。
- 编写切换按钮的 jsx 结构和样式。
- 编写列表视图的 jsx 结构和样式。
- 编写响应式样式。

好了，这个就是 react 和 docusaurus      实现文章列表视图的过程，你学会了吗？如果有帮助，请三连，想更好的学前端，请关注峰华前端工程师，感谢观看！
