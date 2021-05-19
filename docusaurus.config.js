const path = require("path");
const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "峰华前端工程师",
  // tagline:
  //   "帮助你提升前端开发技能，分享 HTML、CSS、JavaScript、React 和 Vue 等开发实战经验",
  titleDelimiter: "-",
  url: "https://zxuqian.cn",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "zxuqian", // Usually your GitHub org/user name.
  projectName: "zxuqian.cn", // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: "feature_release", // Any value that will identify this message.
      content: `更新<a href='/docs/videos/react/react-docusaurus-blog-list-view'>《React + Docusaurus 博客列表视图实现》配套文本</a>`,
      backgroundColor: "#fafbfc", // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
    },
    hideableSidebar: true,
    navbar: {
      title: "峰华",
      logo: {
        alt: "峰华",
        src: "img/logo.webp",
        srcDark: "img/logo.webp",
      },
      items: [
        {
          type: "localeDropdown",
          position: "left",
        },
        {
          to: "/",
          label: "首页",
          position: "right",
          items: [
            {
              label: "随笔",
              to: "lifestyle",
            },
            // {
            //   label: "职业",
            //   to: "tags/职业",
            // },
            // {
            //   label: "健康",
            //   to: "tags/健康",
            // },
          ],
        },
        {
          label: "学习",
          position: "right",
          items: [
            {
              label: "B 站配套文本",
              to: "docs/videos/videos-intro",
            },
            {
              label: "CSS 教程",
              to: "docs/css/box-model/box-model",
            },
            {
              label: "资源导航",
              // position: "right",
              to: "docs/resources/resources-intro",
            },
          ],
        },

        {
          label: "课程",
          position: "right",
          items: [
            {
              label: "React 即时通信 UI 开发实战",
              to: "docs/course/react-chat-ui/react-chat-ui",
            },
          ],
        },

        {
          label: "小工具",
          position: "right",
          to: "docs/tools/tools-intro",
        },

        {
          href: "https://www.itnanls.cn",
          label: "IT楠老师",
          position: "right",
        },
        {
          href: "https://github.com/zxuqian/zxuqian.cn",
          label: "本站源码",
          position: "right",
        },
        // {
        //   href: "https://github.com/zxuqian/frontend-questions/issues",
        //   label: "提问",
        //   position: "right",
        // },
      ],
    },
    algolia: {
      apiKey: "fabfb0e9997e101154ed85d64b7b6a3c",
      indexName: "ZXUQIANCN",
      appId: "LIJMO3C9C4",
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "学习",
          items: [
            {
              label: "React 即时通信 UI 开发实战",
              to: "docs/course/react-chat-ui/react-chat-ui",
            },
            {
              label: "B 站配套文本",
              to: "docs/videos/videos-intro",
            },
            {
              label: "CSS 教程",
              to: "docs/css/box-model/box-model",
            },
            {
              label: "资源导航",
              to: "docs/resources/resources-intro",
            },
          ],
        },
        {
          title: "社交媒体",
          items: [
            // {
            //   label: "首页",
            //   to: "/",
            // },
            {
              label: "GitHub",
              href: "https://github.com/zxuqian/zxuqian.cn",
            },
            {
              label: "Bilibili 哔哩哔哩",
              href: "https://space.bilibili.com/302954484",
            },
            {
              label: "网易云课堂",
              href: "https://study.163.com/course/courseMain.htm?courseId=1210022809&share=2&shareId=480000002172128",
            },
            {
              label: "腾讯课堂",
              href: "https://ke.qq.com/course/2839093?tuin=3850fdc6",
            },
          ],
        },
        {
          title: "友情链接",
          items: [
            {
              label: "yuqing521のblog",
              to: "https://yuqing521.github.io/",
            },
            {
              label: "lookroot的个人空间",
              to: "https://www.lookroot.cn/",
            },
          ],
        },
      ],
      copyright: `<p>Copyright © ${new Date().getFullYear()} 峰华 (张旭乾) Built with Docusaurus.</p><p><a href="http://beian.miit.gov.cn/" style="color: hsl(210deg, 100%, 80%)">冀ICP备14007097号-3</a></p><a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="/img/creative-commons-license-icon.png" /></a><br />本站所有内容遵循 <a rel="license" href="https://creativecommons.org/licenses/by-nc/4.0/deed.zh-Hans" style="color: hsl(210deg, 100%, 80%)">CC BY-NC 4.0 协议</a>，转载须注明署名和出处，且不可用于商业用途。若与其他同步平台协议冲突，以本网站为准。`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/oceanicNext"),
      defaultLanguage: "javascript",
    },
    // googleAnalytics: {
    //   trackingID: "UA-118572241-1",
    //   anonymizeIP: true, // Should IPs be anonymized?
    // },
    gtag: {
      trackingID: "G-6PSESJX0BM",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          showLastUpdateTime: true,
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          feedOptions: {
            type: "all",
            title: "峰华前端工程师",
            copyright: `Copyright © ${new Date().getFullYear()} 峰华 (张旭乾) Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/">冀ICP备14007097号-3</a></p>`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  // themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // "@docusaurus/plugin-ideal-image",
    path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
    path.resolve(__dirname, "./src/plugin/plugin-onesignal-push"),
    "docusaurus2-dotenv",
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "secret-garden",
        routeBasePath: "lifestyle",
        path: "./lifestyle",
        feedOptions: {
          type: "all",
          title: "峰华前端工程师",
          copyright: `Copyright © ${new Date().getFullYear()} 峰华 (张旭乾) Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/">冀ICP备14007097号-3</a></p>`,
        },
      },
    ],
    // [
    //   "@easyops-cn/docusaurus-search-local",
    //   {
    //     hashed: true,
    //     // indexPages: true,
    //     blogRouteBasePath: "/",
    //     language: ["en", "zh"],
    //   },
    // ],
  ],
  stylesheets: [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      type: "text/css",
    },
    {
      href: "/katex/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
      type: "text/css",
      rel: "stylesheet",
    },
    // {
    //   href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
    //   type: "text/css",
    //   rel: "stylesheet",
    // },
  ],
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN", "en"],
    localeConfigs: {
      "zh-CN": {
        label: "中文",
      },
      en: {
        label: "English",
      },
    },
  },
};
