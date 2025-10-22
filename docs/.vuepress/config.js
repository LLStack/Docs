const { defineUserConfig, defaultTheme } = require('vuepress')
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const { pwaPlugin } = require('@vuepress/plugin-pwa')
const { pwaPopupPlugin } = require('@vuepress/plugin-pwa-popup')
const themeOptions = require('./themeConfig.js')

module.exports = defineUserConfig({
  base: '/',
  title: 'LLStack',
  description: 'LLStack - 基于(Open)LiteSpeed的一站式高性能PHP网站解决方案/一键包，这是一款提供便捷、纯粹的 (Open)LiteSpeed+PHP+MySQL 运行环境的一键包。',
  host: '0.0.0.0',
  port: 8080,
  theme: defaultTheme(themeOptions),
  markdown: {
    anchor: { permalink: false },
    headers: { level: [1, 2] },
  },
  alias: {
    '@alias': '/',
  },
  plugins: [
    pwaPlugin({
      serviceWorker: true,
      skipWaiting: true,
    }),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新',
        },
      },
    }),
    googleAnalyticsPlugin({
      id: 'UA-24291982-6',
    }),
    backToTopPlugin(),
  ],
})
