import { defineConfig } from "vitepress"

export default defineConfig({
  title: `QUI`,
  description: "QUI组件库",
  base: "/q-ui/",

  head: [
    // 网站图标
    ["link", { rel: "icon", type: "image/svg+xml", href: "logo.png" }],
  ],
  appearance: true, // 默认 true，设为 false 则无法切换dark/light主题，可选 'dark' true false
  markdown: {
    lineNumbers: false, // 是否显示行数，默认false
  },
  themeConfig: {
    logo: "/logo.png",
    // editLink: {
    //   pattern: "https://github.com/jqw755/q-ui/tree/master/docs/:path",
    //   text: "Suggest changes to this page",
    // },
    // 默认支持icon包括：'discord'|'facebook'|'github'|'instagram'|'linkedin'|'mastodon'|'slack'|'twitter'|'youtube'
    socialLinks: [{ icon: "github", link: "https://github.com/jqw755/q-ui" }],

    search: {
      // vitepress 内置 search
      provider: "local",
    },

    footer: {
      message: "License",
      copyright: "Copyright © 2023",
    },

    nav: [
      { text: "组件", link: "/guide/features", activeMatch: "/guide/" },
      { text: "工具", link: "/utils/started", activeMatch: "/utils/" },
      {
        text: "链接",
        items: [
          { text: "My Github", link: "https://github.com/jqw755" },
          { text: "My CSDN", link: "https://blog.csdn.net/qq_21473443" },
          {
            items: [
              {
                text: "vue",
                link: "https://cn.vuejs.org/",
              },
              {
                text: "vitepress",
                link: "https://vitepress.dev/",
              },
            ],
          },
        ],
      },
    ],

    sidebar: {
      "/guide/": [
        {
          text: "指引",
          items: [
            {
              text: "特性",
              link: "/guide/features",
            },
            {
              text: "快速上手",
              link: "/guide/started",
            },
          ],
        },
        {
          text: "组件",
          items: [
            {
              text: "面包屑 Breadcrumb",
              link: "/guide/components/breadcrumb",
            },
            {
              text: "按钮 Button",
              link: "/guide/components/button",
            },
            {
              text: "选择器 Select",
              link: "/guide/components/select",
            },
          ],
        },
      ],
      "/utils/": [
        {
          text: "指引",
          items: [
            {
              text: "快速上手",
              link: "/utils/started",
            },
          ],
        },
        {
          text: "工具",
          items: [
            {
              text: "date 日期格式化",
              link: "/utils/date-format",
            },
            {
              text: "throttle 节流",
              link: "/utils/throttle",
            },
            {
              text: "debounce 防抖",
              link: "/utils/debounce",
            },
            {
              text: "downloadFile 下载文件",
              link: "/utils/download-file",
            },
          ],
        },
      ],
    },
  },
})
