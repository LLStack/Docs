---
title: 竞品对比
lang: zh-CN
sidebar: auto
---

# 竞品对比

和其他 LiteSpeed 面板或 LNMP、LAMP 产品相比有何优越性?

## 和 CyberPanel 有何不同？

CyberPanel 确实是最早提供免费面板的 LiteSpeed 生态产品，早期支持 OpenLiteSpeed，后期企业版免费后也有提供企业版的支持。

1. CyberPanel 很操蛋的就是，一安装从 53 到 73 所有的PHP都给你安装全了，不安全也显得厚重。
2. CyberPanel 面板也很重，每个页面的点击都会有一定的延迟感觉。
3. CyberPanel 的 LiteSpeed 企业版支持是通过 Apache HTTPD 兼容风格实现的，并不是 LiteSpeed Native，一些专属特性的实现很不方便。
4. CyberPanel 的相关源在国内服务器上安装失败率也是出奇的高。

## 和 APPNode 原生有何不同？

APPNode 是一款非常优秀的面板，但是基于 Nginx 做面板，就得付出很多的开发量在里面，所以成功并不丰富，对于像 TLS1.3 这样的支持也极不及时。

但是 APPNode 本身的设计就可以通用于各类服务器环境的工具，所以说我们可以很好的同 APPNode 做兼容，获得它的优越特性。

## 和 LNMP 一键包有何不同？

