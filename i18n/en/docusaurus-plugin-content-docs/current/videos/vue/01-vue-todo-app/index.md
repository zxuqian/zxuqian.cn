---
id: vue-todo-app
title: Vue Todo App 开发
# hide_title: false
# hide_table_of_contents: false
# sidebar_label: Markdown :)
# custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: Vue 3 实战系列的视频来啦！我们会从寻找项目灵感开始，到创建项目、编写 HTML、编写 CSS、拆分组件、完成功能、优化代码结束。这一期是关于如何寻找项目灵感的，学完某个技术没 idea 的难题可以解决了。
slug: ../develop-a-todo-app-using-vue3
keywords:
  - vue3
  - css
  - vue
  - html
  - javascript
  - 前端
  - frontend
# image: https://i.imgur.com/mErPwqL.png
---

本教程为系列视频。

## 第 1 期 灵感收集

import BVideo from "@site/src/components/BVideo";

<BVideo src="//player.bilibili.com/player.html?aid=329540429&bvid=BV1bA411E7zg&cid=234295176&page=1" bsrc="https://www.bilibili.com/video/BV1bA411E7zg/"/>

Hello! 未来几期视频我们要做一个 Todo App，使用 Vue 3 里边的 Composition API。这几期视频因为是实战系列的，所以咱们就随意一点，休闲一点。

好，我们言归正传，为什么做 Todo App 呢？我想你自己知道，每当学习一个新的前端框架的时候，它给的例子基本上都是一个 todo app。这个 todo app 包括完整的增删改查和过滤功能，能够大部分的涵盖一个前端技术。所以我这里使用 Todo App 给你展示一下 vue 3的用法。这系列视频我会从如何寻找项目灵感开始，搭建项目框架，编写大的整体的页面，再把页面拆分成独立的组件，最后实现组件的功能。那么这期视频我就给大家展示一下我是怎么寻找灵感的。

其实找项目的灵感很容易，手机或电脑上的任何一个应用程序都可以做为实战项目，可以在他们基础上简化一下。不过呢，我这里有一套具体的寻找灵感的方法。现在我把他分享给你。
第一步是逛逛 Github，打开 github 首页，点一下 explore，看一下 topics，这里有热门的话题， 再看一下 trending 的仓库，这些都可以做为自己项目的灵感的来源，还有我们可以搜索一个叫 project-based-learning 仓库，上边都是一些随着项目走的实战教程，可以看看它们都有哪些项目，把他们拿过来，做为自己的项目灵感。
在确定要做什么之后，那么第二步就是打开谷歌图片搜索，搜索想做的项目，比如 todo app，就能出来一堆产品界面，找几个觉得好看的，把它们的结构和设计综合一下，改动一下，形成自己的风格。因为我们是前端工程师，所以要知道项目做成什么样的，才能进行开发。

最后，如果觉得谷歌上边的界面不满意的话，可以再在 Dribbble 等设计师作品分享平台上找找更新潮，更高级的设计，只是这些用代码很难实现，可以做为能力挑战，不过也可以把它们的设计风格简化一下，应用到自己的项目中来。比如我 搜索一下 todo app，看到这个设计和动效不错，那么我就想自己的 app 上可不可以用的上。

在搜索完这些产品界面之后，脑子里应该会有产品界面的大体印象了，这个时候，如果是高级的、大型的前端项目，还需要在设计工具中画出设计稿，不过对于咱们这个视频的 todo 小项目来说，只需要脑子有个大体的架子就行了，可以在纸上画画原型图。然后在实际开发中，一边写代码一边看效果。
好了，有了项目的想法和界面，就可以着手进行开发了。下一期视频我们来搭建 vue3的项目。这期视频就先到这里了，如果你有更好的寻找项目灵感的方法，可以在弹幕和评论里分享给大家~如果视频有帮助请记得三连并关注，我是峰华，感谢观看！

## 第 2 期 创建项目

<BVideo src="//player.bilibili.com/player.html?aid=712124424&bvid=BV1aD4y1o7Qt&cid=234296064&page=1" bsrc="https://www.bilibili.com/video/BV1aD4y1o7Qt/"/>

Hello！这期视频我们来创建一个 Vue3的项目。这里呢我会用工程化的方式来创建，也就是使用 Vue Cli。这里推荐大家也使用工程化的方式开发 vue 项目，因为工程化可以方便的添加管理第三方库依赖，还可以配置加速开发效率的插件，以及更好的代码编译器的支持，比如 vs code。

好，说完工程化的好处之后，那咱们用 vue cli 来创建一个项目。首先要创建 vue3项目的话，vue cli 的版本需要在4.5以上，我们使用

``` bash
npm -g install @vue/cli
```

来把 vue cli 安装到全局，这样以后再创建项目的时候就不需要再安装了。这条命令会安装最新版本的 vue cli，截止到视频录制的时候，是 4.5.4
安装完成之后，找一个合适的文件夹，使用

``` bash
vue create todo-app
```

来创建一个名字为 todo-app 的项目，然后根据提示选择 vue3，等运行完成之后，咱们的 vue3项目就创建好了。Vue Cli 还提供了一个十分方便的 GUI 图形化客户端，我们可以使用 vue ui 命令运行它，它运行在8000端口。我们访问它的 url，可以看到一开始是空白，那是因为我们的项目是通过命令行创建的，那么要在 GUI 里显示，需要把它导入进来，点击 Import Project，然后选择刚创建的项目文件夹，点 open，之后它就添加进来了。我们可以通过图形化客户端来给项目添加依赖、插件、运行项目等，不过我们后边还是使用命令行，会比较快速。我们接下来运行一下这个项目，进入到项目文件夹里，使用

```bash
yarn serve
``` 

命令，或者也可以使用 npm，看个人喜好。等执行完成之后，咱们的项目就运行在 8080 端口了，从浏览器打开它，可以看到内容是一个示例的 vue 页面，上边有一些链接。
我们来看一下它的项目代码，首先看 src 文件夹下有一个 App.vue 入口组件，这里注意一下，我们需要在 vs code 安装一个叫 vetur 的插件，来支持 vue 的语法高亮和提示
里边引入了 compontents 下的  HelloWorld.vue 组件，它是一个独立的组件。components 文件夹就是以后创建独立组件的地方。
main.js是初始化并挂载了 vue 实例，还有一个 assets 文件夹，里边用来放一些静态的资源文件，比如图片、视频等。接下来，项目根目录下有一个 public 文件夹，里边放了最后要打包生成的 html 文件的模板。

好了，这个就是使用 vue cli 创建 Vue3 项目的过程，首先安装 vue cli 最新版，4.5.4，然后使用 vue create 创建一个 todo-app 项目，还可以使用 vue ui 命令启动图形化客户端来管理项目。项目创建完成之后，使用 yarn serve 运行项目。你学会了吗？如果觉得视频有帮助，请三连并关注，我是峰华，感谢观看！

## 第 3 期 编写 HTML

<BVideo src="//player.bilibili.com/player.html?aid=669601357&bvid=BV1ga4y1j7Jj&cid=234296514&page=1" bsrc="https://www.bilibili.com/video/BV1ga4y1j7Jj/"/>

这期视频，我们来编写一下 Todo App 的 html 结构。在动手写代码之前一定要把应用程序的最终界面分析一下，才能更快速，更准确的编写它的结构。虽然咱们这个应用程序比较简单，没有设计稿，但是还是需要在纸上画一下原型，分析有哪些部分，理清 HTML 中各种组件的结构顺序和层级关系，也方便咱们后边拆分组件

最后咱们的应用的结构是这样的：

- 整体的容器:占满整个浏览器
- todo 应用：水平居中在页面
- App 标题
- 添加 todo 的输入框和按钮
- 过滤选项
- todo 列表以及里边的项目
- 每个项目有复选框和 todo 内容，以及白色容器

好，我们打开 VS Code，来编写 HTML 代码。因为咱们这个 todo app 是个小型的项目，所以适合采用自顶向下的方式进行开发，也就是说，我们先在 App.vue 里边写出所有的 html 和 css 代码，完成之后再把相对独立的部分，创建成单独的组件。

我们来看一下它的 HTML 结构：

```
<main>
  <!-- 容器 -->
  <div class="container">
    <!-- 标题 -->
    <h1>欢迎使用 Feng 待办事项！</h1>
    <!-- 输入框和按钮 -->
    <div class="input-add">
      <input type="text" name="todo" />
      <button>
        <!-- 按钮图标 -->
        <i class="plus"></i>
      </button>
    </div>
    <!-- 过滤选项 -->
    <div class="filters">
      <span class="filter active">全部</span>
      <span class="filter">已完成</span>
      <span class="filter">未完成</span>
    </div>
    <!-- todo 列表 -->
    <div class="todo-list">
      <!-- todo 项目，外层容器用于显示背景、圆角边框 -->
      <div class="todo-item">
        <!-- 用 label 包裹后，点击里边任何一个元素都能触发 checkbox 的事件 -->
        <label>
          <input type="checkbox" />
            Todo 1
          <!-- 自定义的复选按钮 -->
          <span class="check-button"></span>
        </label>
      </div>
      <div class="todo-item">
        <label>
          <input type="checkbox" />
            Todo 2
          <span class="check-button"></span>
        </label>
      </div>
      <div class="todo-item">
        <label>
          <input type="checkbox" />
            Todo 3
          <span class="check-button"></span>
        </label>
      </div>
    </div>
  </div>
</main>
```

好了，这个就是咱们todo app 的 html 结构，要记住的时，在编写代码之前，一定要分析设计稿，没有的就手动画一下原型，确定有哪些元素，他们的嵌套关系是什么。好，这期视频就到这里了，下期我们来编写 CSS 代码。如果觉得视频有帮助，请点赞并关注，我是峰华，感谢观看！

## 第 4 期 编写 CSS

<BVideo src="//player.bilibili.com/player.html?aid=884786233&bvid=BV1yK4y187XF&cid=240402701&page=1" bsrc="https://www.bilibili.com/video/BV1yK4y187XF/"/>

这节课，我们来编写一下 Todo App 的 CSS 样式。同样的，在动手写代码之前还是要把应用程序的最终界面分析一下，才能更快速，更准确的实现它的设计。编写 css 的时候，一定要记住，不要慌，看似复杂的效果，一点一点拆解出来，都能使用基本的 css 属性实现，这个可以看我之前的视频，5 个技巧助你成为 CSS 大神。

好，我们来看一下咱们这个 TODO App 的最终结果：

- 整个容器的背景色是淡紫色，宽高都占满了整个浏览器
- Todo 应用是个圆角矩形，背景色是浅灰紫色，在它的外边还有一层阴影，宽度占父容器的 60%，最大 400px
- Todo 列表从上到下咱们看一下，第一行是标题，字号比较大，且加粗的文字
- 第二行是一个圆角的输入框，还有一个圆形的添加按钮，添加按钮是渐变的颜色，里边的+号，是使用 css 做出来的
- 第三行是过滤条，选中的过滤选项文字颜色比较深，并且字号也比较大。
- 下边是 Todo 的列表项，每个列表项用一个圆角矩形包裹着，里边是 todo 的具体内容，内容的左边有一个圆形的复选框，用来完成和取消完成 todo。右边是 Todo 的文本

挺简单的样式，咱们来看一下 CSS 代码：

```
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
}

/* 整个页面 */
main {
  width: 100vw;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  background: rgb(203, 210, 240);
}

.container {
  width: 60%;
  max-width: 400px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 24px;
  padding: 48px 28px;
  background-color: rgb(245, 246, 252);
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 28px;
  color: #414873;
}

/* 添加框 */
.input-add {
  position: relative;
  display: flex;
  align-items: center;
}

.input-add input {
  padding: 16px 52px 16px 18px;
  border-radius: 48px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
  width: 100%;
  font-size: 16px;
  color: #626262;
}

.input-add button {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(#c0a5f3, #7f95f7);
  border: none;
  outline: none;
  
  color: white;
  position: absolute;
  right: 0px;

  cursor: pointer;
}

.input-add .plus {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}

.filters {
  display: flex;
  margin: 24px 2px;
  color: #c0c2ce;
  font-size: 14px;
}

.filters .filter {
  margin-right: 14px;
  transition: 0.8s;
}

.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}

.todo-list {
  display: grid;
  row-gap: 14px;
}

.todo-item {
  background: white;
  padding: 16px;
  border-radius: 8px;
  color: #626262;
}

.todo-item label {
  position: relative;
  display: flex;
  align-items: center;
}

.todo-item label span.check-button {
  position: absolute;
  top: 0;
}

.todo-item label span.check-button::before,
.todo-item label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}

.todo-item label span.check-button::before {
  border: 1px solid #b382f9;
}

.todo-item label span.check-button::after {
  transition: 0.4s;
  background: #b382f9;
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}

.todo-item input {
  margin-right: 16px;
  opacity: 0;
}

.todo-item input:checked + span.check-button::after {
  opacity: 1;
}
```

好了，这个就是咱们todo app 的 css 样式代码，记得在写样式之前，也一定要分析设计稿，如果没有的话，那么就按照自己收集的产品 UI，一点一点的试着来，直到把样式写成自己心中所想的、所满意的样式。好了，这期视频就到这里了，下期我们把这个大组件拆分成独立的小组件。如果觉得视频有帮助，请点赞并关注，我是峰华，感谢观看！

## 第 5 期 抽离组件

<BVideo src="//player.bilibili.com/player.html?aid=969939875&bvid=BV1Sp4y1r7vP&cid=243919605&page=1" bsrc="https://www.bilibili.com/video/BV1Sp4y1r7vP/"/>

Hi！这节课我们把 App 这个大组件拆解成独立的小组件，把代码分解到组件中之后，这样就能增强代码的可读性，还可以实现组件的复用。看完这节课之后，你就可以掌握组件的拆解思路，如何按照 vue 组件的设计逻辑，把整体页面布局规划成一个一个的组件。

首先看一下我们的 Todo App 界面，它有卡片容器、标题、输入框、过滤选项和 Todo 列表构成，那么根据这些表现形式明显不同的 UI 样式，我们可以把它们拆分成独立的组件。

容器和标题因为是静态的，没有事件和业务逻辑，所以它们可以做为最顶层组件放到 App.vue 中。

添加 Todo 的输入框和按钮可以做为一个整体的子组件 todo-add。

而过滤选项和 Todo 列表虽然可以放到一个子组件中方便触发事件和操作数据，但是这里我个人习惯把功能有区别的组件抽成独立的组件，所以这里我把过滤选项单独抽成了 todo-filter 组件。  

Todo 列表则是由一系列的 Todo 列表项构成的，因为 Todo 列表项包含复选框和 todo 内容，代码显得略微有些复杂，并且考虑如果后面有类似的列表项需要复用的话，那么就最好把 Todo 列表项做成独立的组件，由它去展示 todo 的内容，这里把它放到 todo-list-item 组件中，而外层的列表则用于循环展示 todo 列表项内容，放到 todo-list 组件中，这样会使代码更清晰 。

在代码中，拆解组件的过程是：

- 在 components 文件夹下新建组件文件，这里使用 Vue 的单一文件组件形式，把 html、css、JavaScript 放到一个文件中，只需要把 App.vue 中相关的代码剪切粘贴过来即可。然后在默认导出中，定义组件的名字，这里我们分别创建了 TodoAdd，TodoFilter，TodoList 和 TodoListItem 四个组件。
- 然后从 App.vue 中，导入创建好的组件，并在 template 中使用自定义的组件，按顺序把输入框、过滤选项和 todo 列表写好。
- 在 todo 列表中，再导入 todo-item，todo 列表项，使用v-for 循环展示三个示例 todo 的内容。

这样我们就完成了组件的拆解，大体的过程是观察设计稿中相对独立的部分，把它们拆成组件，如果组件中还有比较复杂的 UI，再把这些 UI 拆成子组件，另外功能有关联的组件，嵌套的层数越少越好，否则需要多层传递数据和事件处理函数。最后，如果有大于等于两处使用了同一个 UI 样式或功能，那这些也需要做成独立的组件，来方便复用。好了，这就是本节课的内容，你学会了吗？如果有问题请在评论区留言，有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！

## 第 6 期 处理事件和数据

<BVideo src="//player.bilibili.com/player.html?aid=839960916&bvid=BV1454y1R7Q3&cid=243920615&page=1" bsrc="https://www.bilibili.com/video/BV1454y1R7Q3/"/>

Hi！这节课来让咱们的 Todo App 活起来，使用 Composition Api 来实现组件的功能和状态的管理。Composition API 与 vue 2 的 option API 的区别是，data、computed、methods、watch 和生命周期等配置可以全部在 setup 函数中实现，并且可以抽离出独立的函数，做为可复用的业务逻辑单元。我们这个todo 应用的整体业务流程是：

- 用户在输入框中输入新的待办事项内容，然后点击后边的按钮或按回车键确认。之后新添加的 todo 就显示在下方列表中了。
- 用户可以点击 todo 前边的复选框来完成 todo。
- 还可以点击过滤选项来查看全部、已完成和未完成的 todo。

### 添加 Todo

首先，我们来看添加 Todo 功能。在添加 Todo 之前，我们需要一个数组来保存 Todo 列表数据，往常我们使用 Vue2 的 Option Api 的时候，需要把它定义到 data 属性中，而在 Composition Api 中，我们需要把所有代码写到 setup 函数里，所以得需要使用其他方式定义数据。



我们在顶层 App.vue 中统一管理 Todo 列表的状态和事件的处理。那么我们在 App.vue 的代码中，添加 setup 函数：

```
export default {
  // ...
  setup() {

  },
};
```

如果我们直接在里边使用一个普通变量定义数据的话，那么后边更新数据，组件是不会刷新的，那么该怎么定义呢？Vue3 中提供了两个新的 Api，分别是 ref 和 reactive，用它们包装后的数据，在修改之后就可以引起组件刷新了，它们的区别是，ref 适合包装基本类型数据或简单的数据，reactive 则用于包装复杂的对象数据。我们这里使用 ref 包装一个空的数组，作为默认 todo 列表的数据：

```
const todos = ref([]);
```

然后，再定义一个添加 todo 函数，它通过事件接收一个 todo 参数，保存了 todo 的信息，然后把它追加到 todo 列表中：

```
const addTodo = (todo) => todos.value.push(todo);
```

为了在 template 中使用数据和函数，我们需要在 setup 中，以对象的形式返回它们：

```
  return {
    todos,
    addTodo,
  };
```

接下来，通过 todos 属性，把 todo 列表传递给 todo-list 组件，这里需要注意的是，使用 ref 包装的数据需要访问 value 属性才能得到数据，但是在 template 标签中，vue 会自动拆解出 value 属性，所以这里直接把 setup 中返回的 todos 传递给它就可以了。

```
<todo-list :todos="todos" />
```

然后，通过@add-todo 监听 todo-add 组件的事件，使用 addTodo 这个函数处理事件。再给 todo-add 组件传递一个 tid 属性，用于生成新的 todo 的 id，这里简单的就是数组的长度。

```
<todo-add :tid="todos.length" @add-todo="addTodo" />
```

在 todo-add 组件中，首先需要一个 v-model，用于同步用户输入的 todo 内容，这里还是在 setup 函数中，定义一个 ref，默认值为空，然后返回它，传递给 input 的 v-model 属性：

```
<input type="text" v-model="todoContent"/>

setup() {
  const todoContent = ref("");
  return {
   todoContent
  };
},
```

接着，我们给按钮和回车键，添加事件处理，把@keyup.enter 事件注册到输入框中，把@click 事件注册到按钮上，统一使用 emitAddTodo 事件处理函数：

```
<input type="text" v-model="todoContent" @keyup.enter="emitAddTodo" />
  <button @click="emitAddTodo">
  <i class="plus"></i>
</button>
```

接下来在 setup 中编写 emitAddTodo 代码，我们需要组装一个新的 todo 列表项，其中 id 使用父组件传递进来的 tid 属性，我们还需要触发 add-todo 事件来通知父组件，那么要实现这两个操作，我们需要改动一下 setup 函数，它接收两个参数，第一个是 props，通过它我们就可以访问传递进来的属性了，第二个是 context，这里保存了 vue 的上下文信息，里边有 emit 方法可以让我们触发事件：

```
setup(props, context) {
  // ...
},
```

然后在emitAddTodo里边，创建一个 todo 对象，使用 tid 作为 id，使用 todoContent 值来做为新的 todo 的内容，注意这里需要访问 value 属性才能获取 ref 中的值，完成状态默认是未完成。然后触发 add-todo 事件，把新创建的 todo 对象当作参数传递给它，最后把输入框中的内容清空：

```
const emitAddTodo = () => {
    const todo = {
      id: props.tid,
      content: todoContent.value,
      completed: false,
    };
    context.emit("add-todo", todo);
    todoContent.value = "";
  };
```

最后在 return 语句中，追加emitAddTodo事件处理函数：

```
return {
  todoContent,
  emitAddTodo,
};
```

### 展示 Todo

我们再看来 Todo 的展示，打开 todo-list 组件，使用 props 属性接收父组件传递进来的 todo 列表数据：

```
props: ["todos"],
```

然后使用 v-for  遍历列表，渲染 todo-list-item，我们通过 todo-item 属性把 todo 的信息传递给 todo-list-item：

```
<todo-list-item
      v-for="todo in todos"
      :key="todo.id"
      :todo-item="todo"
></todo-list-item>
```

再打开 todo-list-tem 组件，接收 todoItem 属性：

```
props: ["todoItem"]
```

然后在 template 中展示 todoItem 的内容，在 input 复选框中，使用:checked 属性，根据 todo 中的完成状态显示为选中或未选中状态：

```
<label>
  <input
    type="checkbox"
    :checked="todoItem.completed"   
/>
  {{ todoItem.content }}
    <span class="check-button"></span>
</label>
```

好，我们运行一下项目，看下效果，在输入框中输入新的待办事项，按回车或者点击按钮，可以看到新的待办事项添加到了列表中了。

### 完成 Todo

接下来，我们编写点击复选框完成 todo 的事件处理逻辑。在 todo-list 组件里，当渲染 todo-list-item 组件时，我们监听它的@change-state 事件，触发的时候，把 todo 的 complete 属性改为复选框的选中状态，即 true 或 false ：

```
<todo-list-item
  @change-state="todo.completed = $event.target.checked"
></todo-list-item>
```

再打开 todo-list-item 组件，给复选框注册点击事件，触发 change-state 事件，并把$event 参数传递进去：

```
<input 
    @click="$emit('change-state', $event)"
/>
```

保存一下，我们试一下，点击 todo 旁边的复选框，可以看到选中了，我们可以看一下 vue 的开发者工具，可以看到 todo 列表中相应的todo 的 complete 改成了 true。这里我们可以添加一个已完成的样式，加上删除线并把字体变成斜体。打开 todo-list-item 组件，给最外层 div 添加一个 class done，并且当 todo 是已完成时才添加：

```
<div class="todo-item" :class="{ done: todoItem.completed }">
```

然后给 done 下边的 label 添加 CSS 属性，通过 text-decoration 加上删除线，通过 font-style 设置斜体：

```
.todo-item.done label {
  text-decoration: line-through;
  font-style: italic;
}
```

保存一下，我们再看一下已完成的 todo，就有了斜体和删除线的样式了。

### 过滤 todo

接下来我们实现过滤 todo 功能。首先修改一下 todo-filter 组件，在 setup 中定义代表过滤选项 label 和值的对象数组，这里它是静态的，所以不需要使用 reactive 或 ref 包装，后面我们在 App.vue 中控制当前选中的是哪一项：

```
 const filters = [
      { label: "全部", value: "all" },
      { label: "已完成", value: "done" },
      { label: "未完成", value: "todo" },
    ];

return { filters };
```

在 template 中，使用 v-for 展示过滤项，用 filter.value 做为 key：

```
<span
  v-for="filter in filters"
  :key="filter.value"
  class="filter"
>{{ filter.label }}</span
>
```

接下来在 App.vue 中，定义一个 ref，保存当前选中的过滤选项，默认是 all：

```
const filter = ref("all");
```

然后根据 filter 的值过滤 todo 列表，那么这个过滤后的 todo 列表其实是一个 computed 计算属性，基于 todo 数组，那么在 composition api 中，我们可以导入 computed 函数，来达到 option api 中 computed 属性同样的效果，computed 接收一个函数，我们在里边根据 filter 的值来过滤 todo 数组，把结果保存到 filteredTodos 变量中，最后返回 filter 和 filteredTodos：

```
const filteredTodos = computed(() => {
    switch (filter.value) {
      case "done":
        return todos.value.filter((todo) => todo.completed);
      case "todo":
        return todos.value.filter((todo) => !todo.completed);
      default:
        return todos.value;
    }
});

return {
  todos,
  filter,
  addTodo,
  filteredTodos,
};
```

再把 todo-list 中的 todos 属性改成filteredTodos，显示过滤后的 todo 列表：

```
<todo-list :todos="filteredTodos" />
```

然后通过 selected 属性，把当前选中的过滤选项传递给 todo-filter 组件，并且监听 change-filter 属性，当过滤选项改变时，把当前过滤选项改成新选中的：

```
<todo-filter :selected="filter" @change-filter="filter = $event" />
```

打开 todo-filter 组件，对于每一个过滤选项，给它注册 @click 事件，触发 change-filter，传递过滤选项的 value：

```
@click="$emit('change-filter', filter.value)"
```

然后在JS 代码中，接收 selected 属性：

```
props: ["selected"],
```

我们根据它的值判断是不是该把过滤选项显示为激活状态，在过滤选项 template 中，把 active class 改为：当选中的过滤选项的值跟自己值一样时，才显示为激活状态：

```
<span
  :class="{ active: selected === filter.value }"
  >{{ filter.label }}</span
>
```

顺便把过滤选项鼠标指针移上去的样式改为小手：

```
.filters .filter {
  // ...
  cursor: pointer;
}
```

保存一下，添加并完成几个待办事项，然后点击过滤选项，可以看到底下的列表会根据 todo 的完成状态而变化了。

好了，这节课我们实现了 todo app 的功能，添加 todo，展示 todo，完成 todo 以及过滤 todo。其中应该重点掌握：

- 如何使用 composition api 定义状态、事件处理函数和计算属性。
- 以及组件之间的事件监听。

你学会了吗？如果有问题请在评论区留言，有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！

## 第 7 期 抽离 Composable

<BVideo src="//player.bilibili.com/player.html?aid=669996227&bvid=BV1aa4y1L7Fn&cid=243920924&page=1" bsrc="https://www.bilibili.com/video/BV1aa4y1L7Fn/"/>

我们的 todo 应用现在所有的业务逻辑全部都写到了 setup 函数中，这么多代码杂揉在一起显得很臃肿。利用 Composition API 的特性，我们可以把业务逻辑按相关性进行分组，定义到单独的函数中，这样可以有效的提升代码的清晰度，并且可以通过函数复用业务逻辑。本节课我们将：

- 把 todo 列表和添加 todo 的方法抽离成公共的 composable 函数
- 再把 filteredTodos 过滤列表抽离成公共的 composable 函数
- 最后把 todo-add 组件中的事件触发逻辑抽离成组件特有的composable。

这里需要注意的是， todo 列表、添加 todo 的方法和过滤 todo 列表也可以定义成组件特有的，不过为了演示公共 composable 函数的使用方法，这里给他们定义成了公共的，后期如果有其他组件复用这些业务逻辑，也可以用的上。

### 抽离 Todo 列表和添加 Todo 

首先在 src 下新建一个 composables 文件夹，存放公共的业务逻辑 composable，然后在里边新建一个 useTodos.js 文件，这里命名规则与 React Hooks 保持一致，使用 use 开头，后边写上这个 composable 的功能，useTodos 代表跟 todo 相关的数据和操作。打开 useTodos.js 文件：

- 在里边导出一个同名的函数，useTodos。
- 然后把 App.vue 中初始化todos 和添加 todo 的函数剪切过来。
- 最后返回 todos 和 addTodo。
- 记得导入 ref 函数。

```
import { ref } from "vue";

export default function useTodos() {
  const todos = ref([]);
  // 添加 todo
  const addTodo = (todo) => todos.value.push(todo);

  return {
    todos,
    addTodo,
  };
}
```

然后在 App.vue 中导入刚定义的 useTodos 函数：

- 接着在 setup 中调用它，接收返回的 todos 列表和添加 todo 的函数

```
import useTodos from "@/composables/useTodos.js";

const { todos, addTodo } = useTodos();
```

### 抽离过滤 Todo 列表

接下来，抽离过滤 todo 列表逻辑，在 composables 文件夹下新建一个 useFilteredTodos.js 文件，导出一个同名函数，然后把过滤 todo 列表的逻辑剪切过来，这里需要注意：

- 因为过滤 todo 列表是基于原始 todo 列表数据的，而 composable 下不能重新定义 todos 列表数据，因为每个 composable 都维护自己独立的状态数据，那要访问原始 todo 列表数据，我们可以让函数接收一个参数，然后在 App.vue 中调用这个函数时，把 todo 列表传递进来。

最后返回当前选中的过滤项和过滤 todo 列表

```
import { computed, ref } from "vue";

export default function useFilteredTodos(todos) {
  const filter = ref("all");

  // 过滤 todo
  const filteredTodos = computed(() => {
    switch (filter.value) {
      case "done":
        return todos.value.filter((todo) => todo.completed);
      case "todo":
        return todos.value.filter((todo) => !todo.completed);
      default:
        return todos.value;
    }
  });

  return { filter, filteredTodos };
}
```

回到 App.vue 中，导入并调用useFilteredTodos，并把 useTodos 返回的 todo 列表数据传递给它，最后在返回语句中加上 filter 和 filteredTodos，删除computed, ref 这些没用的导入，这样 App.vue 中的业务逻辑就抽离好了。

```
// 删除 import { computed, ref } from "vue";
import useFilteredTodos from "@/composables/useFilteredTodos.js";

const { filter, filteredTodos } = useFilteredTodos(todos);

return {
  todos,
  filter,
  addTodo,
  filteredTodos,
};
```

我们可以看一下应用，没有错误，功能也没变化，就说明没有问题。接着抽离 todo-add 组件中的逻辑，打开 TodoAdd.vue 文件，在 export 的下方新建一个函数useEmitAddTodo，它是 todo-add 组件的专属 composable，所以放到同一个文件中：

- 我们把 setup 中的业务逻辑全盘剪切过来，然后，它需要 tid 和 emit 做为参数传递进来，最后返回 todoContent 和 emitAddTodo。

```
function useEmitAddTodo(tid, emit) {
  const todoContent = ref("");

  const emitAddTodo = () => {
    const todo = {
      id: tid,
      content: todoContent.value,
      completed: false,
    };
    emit("add-todo", todo);
    todoContent.value = "";
  };

  return {
    todoContent,
    emitAddTodo,
  };
}
```

接着在 setup 函数中直接返回调用useEmitAddTodo的结果：

```
setup(props, context) {
  return useEmitAddTodo(props.tid, context.emit);
},
```

这样写完之后，我们可以通过 VS Code 提供的功能，把函数进行折叠，这样就可以让代码显得更简洁了，只有在需要修改业务逻辑的时候才需要把函数展开，现在我们可以通过 useEmitAddTodo 这个名字就可以知道，这个组件会触发 add-todo 这个事件。

### 加载远程数据

关于 Composition API，还有有关生命周期的函数，我们把加载远程 todo 列表作为示例，来演示一下如何在 composition api 中调用生命周期函数。打开 useTodos.js 文件，我们在组件加载后去获取远程的 todo 列表数据，在添加 todo 函数下边，定义一个 async 的函数 fetchTodos，用 fetch 来发送 ajax 请求加载示例的 todo 列表：

- 因为示例的 todo 列表属性跟我们之前定义的不一样，它的 todo 内容保存在了 title 属性中，这里我们统一一下数据，把 todo 的 title 改成我们的 content 属性。

```
  const fetchTodos = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const rawTodos = await response.json();
    todos.value = rawTodos.map((todo) => ({
      id: todo.id,
      content: todo.title,
      completed: todo.completed,
    }));
  };
```

然后我们需要在组件加载后就调用它，我们可以使用 vue 3 提供的 onMounted 生命周期函数，它接收一个函数作为参数，这里我们就调用一个 fetchTodos：

```
  onMounted(() => {
    fetchTodos();
  });
```

保存一下，看一下页面，可以看到 todo 应用有了初始的示例数据。

好了，这节课我们抽离了 todo 列表，添加 todo，过滤 todo，以及触发添加 todo 事件的业务逻辑，抽离的过程大体是：

- 新建 composable 文件或函数，使用 use+要做的事情命名。
- 把现有的相关业务逻辑全盘复制过来，返回组件需要用到的数据。
- 最后在组件中调用 composable 函数，接收数据，其他地方不用动。

好了，这就是这节课的主要内容，你学会了吗？如果有问题请在评论区留言，有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！

## 第 8 期 总结

<BVideo src="//player.bilibili.com/player.html?aid=670115570&bvid=BV1Ha4y1s712&cid=250559512&page=1" bsrc="https://www.bilibili.com/video/BV1Ha4y1s712/"/>

Hi，这节是我们 Vue3 开发 Todo 应用的最后一课，因为 UP 主 现在的重心在写有关 JavaScript 的书上，所以视频佛系了一些～我们来回顾一下这系列视频的主要内容，并梳理一下开发的主要流程，形成了开发思路之后，再开发其他的项目就能顺风顺水了～

### 灵感搜集

一开始，我们讲了如何搜集前端项目的灵感，在学完新的技术后，我们都是急不可耐的想找个项目练手，那我们作为前端，去制作看的见的UI界面就需要从设计师常去的地方，去找一些新奇的、不怎么好实现的设计稿，把它实现，这些可以去 dribbble 等类似的网站。对于不会实现的特效，要善于使用谷歌搜索，平时也可以去 codepen 和 github 有意的去找一些例子，看其他的是怎么实现的。

### 准备开发

在开发之前，要先分析一下设计稿，对于哪些部分应该编写成独立的组件要大体心中有数，剩下的不确定的地方，就在开发中慢慢思考，这一部分不要浪费太多时间，有时候实际开发跟想象的不太一样，这里只需要心中大概有些想法就可以了，实际开发中，如果有相似的 UI 部分在大于等于 2 处使用时，就要考虑把它们抽离成独立的组件。

### 编写组件

开发的时候，对于中小型项目，可以直接把 html 静态页面编写出来，然后按照之前分析的设计稿，把整个 html 页面按 UI 分成独立的组件。对于大型项目，则适合先从最小的组件单元写起，边写边测试，然后逐步组装成页面。这一步，不要考虑数据和交互的问题，专心实现页面的样式，这些多半是机械劳动，数据方面则多是逻辑思考，不宜一起操作。

### 实现功能

在实现功能的时候，首先要考虑最根本的数据是什么，像我们这个应用，都是围绕着 todo 列表展开的，那么这个最基础的数据应该放到最顶层，方便向下传递。然后分析每个组件特有业务逻辑是什么，分别把它们写到各自的组件中，实现组件的自治，如果不确定某些数据或逻辑是不是多个组件共享的，那么可以先在一个组件中实现它，如果确实需要共享，那么可以往上挪一层。对于复杂的数据流，可以借助 vuex 等全局状态管理工具。

### 优化代码

在编写大量的业务逻辑之后，可能会发现有些可以复用，只需要调整一下参数，那么就可以考虑把业务逻辑抽离成 composables，借助 vue3 的 composition api，把它们定义成函数，方便在各个组件中复用。另外，如果一个组件特有的业务逻辑比较复杂，代码量大，那么也可以在组件内部抽离成独立的函数，把各部分的业务逻辑描述清楚，最后在 setup 中统一调用和处理。

好了，这些就是我对于 Vue，甚至是 React 开发的一些个人经验，希望通过个项目能够让你更清楚开发流程以及注意事项，增加开发效率，减少 bug。如果有问题请在评论区留言，有帮助请三连，想优雅的学前端，请关注峰华前端工程师，感谢观看！