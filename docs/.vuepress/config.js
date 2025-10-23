const themeConfig = require('./themeConfig.js')

module.exports = {
  base: '/',
  title: 'LLStack',
  description: 'LLStack - (Open)LiteSpeed + PHP + MySQL 套件的安装与使用文档',
  host: '0.0.0.0',
  port: 8080,
  themeConfig,
  markdown: {
    anchor: { permalink: false },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/',
      },
    },
  },
  plugins: [
    [
      '@vuepress/plugin-pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    ],
    [
      '@vuepress/plugin-google-analytics',
      {
        ga: 'UA-24291982-6',
      },
    ],
    '@vuepress/plugin-back-to-top',
  ],
}
