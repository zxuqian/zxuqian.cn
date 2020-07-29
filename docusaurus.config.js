const path = require("path");

module.exports = {
  title: "峰华 - 前端工程师",
  tagline: "帮助你提升前端开发技能",
  url: "https://www.zxuqian.cn",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "zxuqian", // Usually your GitHub org/user name.
  projectName: "zxuqian.cn", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,900"],
  themeConfig: {
    navbar: {
      title: "峰华前端工程师",
      logo: {
        alt: " 峰华",
        src: "img/logo.png",
      },
      items: [
        { to: "/", label: "Blog", position: "right" },
        {
          to: "docs/react-examples/01-react-props-buttons/index",
          label: "React 示例",
          position: "right",
        },
        {
          to: "docs/css/box-model/box-model",
          label: "教程",
          position: "right",
        },
        {
          href: "https://github.com/zxuqian",
          label: "GitHub",
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
              label: "Blog",
              to: "/",
            },
            {
              label: "GitHub",
              href: "https://github.com/zxuqian",
            },
            {
              label: "Bilibili 哔哩哔哩",
              href: "https://space.bilibili.com/302954484",
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
      copyright: `Copyright © ${new Date().getFullYear()} 峰华 Built with Docusaurus.<p>冀ICP备14007097号-3</p>`,
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
  themes: [require.resolve("@docusaurus/theme-live-codeblock")],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ],
};
