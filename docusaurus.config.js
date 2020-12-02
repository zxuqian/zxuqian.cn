const path = require("path");

module.exports = {
  title: "峰华前端工程师",
  tagline: "帮助你提升前端开发技能",
  titleDelimiter: "-",
  url: "https://www.zxuqian.cn",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "zxuqian", // Usually your GitHub org/user name.
  projectName: "zxuqian.cn", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "峰华前端工程师",
      logo: {
        alt: "峰华",
        src: "img/logo.png",
        srcDark: "img/logo.png",
      },
      items: [
        {
          to: "/",
          label: "博客",
          position: "right",
          items: [
            {
              label: "前端",
              to: "tags/前端",
            },
            {
              label: "职业",
              to: "tags/职业",
            },
            {
              label: "健康",
              to: "tags/健康",
            },
          ],
        },
        {
          label: "视频",
          position: "right",
          to: "docs/videos/videos-intro",
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
          label: "教程",
          position: "right",
          items: [
            {
              label: "CSS",
              to: "docs/css/box-model/box-model",
            },
          ],
        },
        {
          href: "https://github.com/zxuqian/zxuqian.cn",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://github.com/zxuqian/frontend-questions/issues",
          label: "社区讨论",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/doc1"
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2"
        //     }
        //   ]
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        {
          title: "Social",
          items: [
            {
              label: "博客",
              to: "/",
            },
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
              href:
                "https://study.163.com/course/courseMain.htm?courseId=1210022809&share=2&shareId=480000002172128",
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 峰华 (张旭乾) Built with Docusaurus.<p>冀ICP备14007097号-3</p>`,
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      defaultLanguage: "javascript",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master/docs",
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          feedOptions: {
            type: "all",
            title: "峰华前端工程师",
            copyright: `Copyright © ${new Date().getFullYear()} 峰华 (张旭乾) Built with Docusaurus.<p>冀ICP备14007097号-3</p>`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ],
};
