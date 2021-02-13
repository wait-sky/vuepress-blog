module.exports = {
  title: "满满的故事",
  // base: 'manman', 分支名称, 如果是带有GitHub名称的就是默认/, 可以不写
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/m.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: "/avatar.jpg", // 左上角logo
    nav: [
      // 导航栏配置
      { text: "首页", link: "/" },
      { text: "vue文件测试", link: "/tech/" },
      { text: "学习文档", link: "https://www.jianshu.com/p/37509da5a020" },
      { text: "简书主页", link: "https://www.jianshu.com/u/c455567c7f50" },
      { text: '关于', link: '/about' },
      {
        text: '分享',
        items: [
          { text: '技术', link: '技术' },
          { text: '每日分享', link: 'fenxiang' },
        ]
      }
    ],
    sidebar: "auto", // 侧边栏配置
    sidebarDepth: 2, // 二级标题
  },
};
