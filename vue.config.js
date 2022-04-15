module.exports = {
  devServer: {
    port: 8081,
    open: true,
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = "网上商城 | 手机 | 电视 | 笔记本 显示器 固态硬盘 | 冰箱 洗衣机";
        return args
      })
  }
};
