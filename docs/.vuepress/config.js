module.exports = {
  title: "满满的故事",
  // base: 'manman', 分支名称, 如果是带有GitHub名称的就是默认/, 可以不写
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/m.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  plugins: ["@vuepress/back-to-top"], // 滚动到顶部插件 `yarn add -D @vuepress/plugin-back-to-top`
  themeConfig: {
    logo: "/avatar.jpg", // 左上角logo
    // 导航栏配置
    nav: [
      { text: "首页", link: "/" },
      { text: "集成element", link: "http://xuedingmiao.com/blog/vuepress_element.html" },
      { text: "vue文件测试", link: "/tech/" },
      { text: "学习文档", link: "https://www.jianshu.com/p/37509da5a020" },
      { text: "学习视频", link: "https://www.bilibili.com/video/BV1mt411b76c?p=1" },
      { text: "简书主页", link: "https://www.jianshu.com/u/c455567c7f50" },
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
    ],
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2, // 二级标题
    // 侧边栏配置
    sidebar: {
      "/REACT/": ["" /* /foo/ */, "re" /* /foo/one.html */],
    },
  },
};
