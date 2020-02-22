module.exports = {
  title: "峰华 - 前端工程师",
  tagline: "",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "zxuqian", // Usually your GitHub org/user name.
  projectName: "zxuqian.cn", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "峰华",
      logo: {
        alt: " 峰华",
        src: "img/logo.png"
      },
      links: [
        // { to: "docs/doc1", label: "Docs", position: "left" },
        { to: "blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/zxuqian",
          label: "GitHub",
          position: "right"
        }
      ]
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
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/zxuqian"
            },
            {
              label: "Bilibili 哔哩哔哩",
              href: "https://space.bilibili.com/302954484"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 峰华 Built with Docusaurus. 冀ICP备14007097号-3`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          path: "./blog",
          routeBasePath: "/"
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
