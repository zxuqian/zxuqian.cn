# 个人博客

本博客基于 [Docusaurus 2](https://v2.docusaurus.io/) JAMStack 静态网站生成器实现，作为 Bilibili（峰华前端工程师） 视频的文本版载体呈现。不定时更新前端开发相关博客，后续考虑增加全栈开发内容。

本博客的代码如无特殊说明，可以自由使用，版权信息详见[关于版权](#关于版权)部分。接下来简单介绍一下本博客的开发和部署方式，关于 Docusaurus 的使用方法请参考官方网站 [Docusaurus 2](https://v2.docusaurus.io/)。

## 使用方法

首先克隆仓库代码：

```bash
$ git clone https://github.com/zxuqian/zxuqian.cn.git

```

安装依赖：

```bash
$ cd zxuqian.cn
$ yarn install
# 或使用 npm install，下同
```

启动项目：

```bash
$ yarn start
```

构建项目：

```bash
# 同时构建中文和英文版
$ yarn build

# 只构建中文版
$ yarn build-cn
```

关于部署，由于不同的服务器、平台有不同的方式，可以使用 Github Pages、FTP、自行搭建服务器等。

## 目录介绍

下面是主要目录的介绍：

```bash
├── _templates                     # hygen 模板
│   ├── blog                       # 博客模板
│   ├── doc                        # 文档模板
│   ├── generator                  # hygen 生成器模板
│   └── video-doc                  # 视频文档模板
├── babel.config.js
├── blog                          
│   ├── 2020-02-21-first-blog.md   # 博客文件
│   └── img                        # 博客图片
├── docs                          
│   └── doc1.md                    # 文档          
├── docusaurus.config.js
├── drafts                         # 草稿目录（自定义）
├── i18n
│   └── en                         # 英文本地化
├── package.json
├── scripts                        # 自动化脚本
│   ├── create.mjs                 # 自动创建视频文档模板
│   └── getVideoList.mjs           # 获取本人所有视频列表（测试用途）
├── sidebars.js                    
├── src
│   ├── components                 # 自定义组件
│   ├── css                        # 自定义 CSS
│   ├── pages                      # 自定义页面
│   ├── plugin                     # 自定义插件
│   └── theme                      # 自定义主题
├── static
│   ├── icons                      # 公用图标
│   ├── img                        # 公用图片（以及遗留的博客图片）
│   └── katex                      # Latext 公式插件所需资源
└── yarn.lock
```

## 自动生成博客和文档

由于 docusaurus 对于博客、文档的格式要求比较多，所以使用自动化工具可以协助我们快速创建相关文档和配置。项目使用了 hygen 来根据定义的模板创建博客或文档 md 文件，你需要在本地全局下安装 hygen 才能使用。模板所在目录为 `_templates`。

安装 hygen:

```bash
$ npm i -g hygen
```

MacOS 下还可以使用 Homebrew 安装：

```bash
$ brew tap jondot/tap
$ brew install hygen
```

创建一篇新的博客文章：

```bash
hygen blog new [博客名称]
#例如
hygen blog new react-get-started
```
无需填写日期，hygen 模板中会自动获取当前的日期，在创建完博客之后，同时会在 `blogs/img` 文件夹下创建与博客同名的文件夹，用于存放用到的图片。

博客模板内容可通过 `_templates/blog/new/index.ejs.t` 文件进行修改。

创建一篇新的文档：

```bash
hygen doc new [文档名称]
#例如
hygen doc new react-get-started
```
创建好的文档会直接放到 `docs/react-examples` 目录下，这个目录可以通过 hygen 模板中的参数进行修改，可以通过命令行指定，或者在模板中编写固定路径，由于文档的配置项比较少，所以我自己一般通过复制粘贴之前的文档形式来创建新的文档，并手动追加到 `sidebars.js` 文件中。

关于和 Bilibili 视频相关的文字版脚本，可以使用 `yarn gen` 命令创建，具体使用方法如下：

（待完善）

## 自定义组件（待完善）

### BlogListPage

### BlogPostItem

### BVideo

### Comments

## 赞助

本博客的设计、代码均免费提供，如果觉得对你有帮助，可以小赞一笔，以支持我发布更好的视频、文章和代码，感谢！

|                          微信                          |                       支付宝                        |
| :----------------------------------------------------: | :-------------------------------------------------: |
| <img src="./static/img/wechatPay.webp" height="250" /> | <img src="./static/img/aliPay.webp" height="250" /> |
## 关于版权

所有插件、主题代码均为开源，可自由使用分发。其他内容包括但不限于文章、图片、视频等版权均为作者所有，但遵循 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans) 协议，转载时请注明来源和署名，并且不可用于商业目的。

博客首页头图 `./src/theme/BlogListPage/img/hero_main.svg` 为版权图片，不可在产品环境中使用，亦不可进行传播、复制或修改，或用于任何目的。