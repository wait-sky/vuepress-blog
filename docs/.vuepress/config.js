module.exports = {
  title: "满满的故事",
  // base: 'manman', 分支名称, 如果是带有GitHub名称的就是默认/, 可以不写
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/avatar.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  plugins: ["@vuepress/back-to-top"], // 滚动到顶部插件 `yarn add -D @vuepress/plugin-back-to-top`
  themeConfig: {
    logo: "/avatar.jpg", // 左上角logo
    // 导航栏配置
    nav: [
      // { text: "首页", link: "/" },
      { text: "指南", link: "/guide/" },
      { text: "网址导航", link: "/tech/" },
      { text: "关于", link: "/about" },
      {
        text: "分享",
        items: [
          {
            text: "前端",
            items: [
              {
                text: "Vue",
                link: "/Vue/",
              },
              {
                text: "React",
                link: "/REACT/",
              },
            ],
          },
          { text: "每日分享", link: "/tech/" },
        ],
      },
      { text: "Github", link: "https://github.com/wait-sky" },
    ],
    // sidebar: "auto", // 侧边栏配置 不能深层次查找
    sidebarDepth: 2, // 二级标题
    displayAllHeaders: true, // 默认值：false
    // 侧边栏配置
    sidebar: {
      "/REACT/": ["" /* /foo/ */, "re" /* /foo/one.html */],
    },
  },
};
