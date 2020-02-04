---
title: OpenLiteSpeed 介绍
sidebar: auto
---

# OpenLiteSpeed

更少的过程，更少的开销，更多的连接和巨大的可扩展性，而无需升级硬件！

添加流行的LiteSpeed Cache for WordPress插件，您将获得WordPress的100％开放源，加速托管平台。



## OLS vs LSWS

### 基本特征

|                                                              | OpenLiteSpeed | LiteSpeed Enterprise |
| ------------------------------------------------------------ | ------------- | -------------------- |
| 支持HTTP / [HTTP / 2](https://www.litespeedtech.com/products/litespeed-web-server/features/http-2-support) / [HTTP / 3](https://www.litespeedtech.com/http3-solutions)  / [QUIC](https://www.litespeedtech.com/products/litespeed-web-server/features/quic-support) | ✓             | ✓                    |
| 支持IPv4、IPv6                                               | ✓             | ✓                    |
| 支持语言：PHP、Perl、Ruby、Python、NodeJS、JSP等             | ✓             | ✓                    |
| SAPI：LiteSpeed API、CGI、FCGI、AJPv13、Proxy                | ✓             | ✓                    |
| 支持无限的IP和基于域名的虚拟主机                             | ✓             | ✓                    |
| 支持GZIP、Brotli压缩                                         | ✓             | ✓                    |
| WebSocket Proxy                                              | ✓             | ✓                    |
| TLS v1.3                                                     | ✓             | ✓                    |
| 在Linux、FreeBSD上运行                                       | ✓             | ✓                    |
| CloudLinux CL LVE                                            | ✓             | ✓                    |

###  Apache HTTPD 相容性

|                                                              | OpenLiteSpeed              | LiteSpeed Enterprise |
| ------------------------------------------------------------ | -------------------------- | -------------------- |
| 支持 [Apache mod_rewrite规则](https://www.litespeedtech.com/docs/webserver/config/rewrite) | 有限支持                   | 完美支持             |
| 标准 mod_security v3 引擎                                    | ✓                          | ✓                    |
| 企业级 mod_security 引擎                                     | ✕                          | ✓                    |
| 直接读取 Apache 的配置文件                                   | 有限支持                   | 完美支持             |
| 兼容Apache Hosting控制面板                                   | 有限支持（DA、CyberPanel） | 完美支持             |
| 全面的.htaccess支持                                          | ✕                          | ✓                    |

### 性能与可扩展性

|                                                              | OpenLiteSpeed | LiteSpeed Enterprise |
| ------------------------------------------------------------ | ------------- | -------------------- |
| [事件驱动架构](https://www.litespeedtech.com/products/litespeed-web-server/features/event-driven-architecture) | ✓             | ✓                    |
| 高并发连接容量                                               | ✓             | ✓                    |
| 极小的内存占用                                               | ✓             | ✓                    |
| sendfile()                                                   | ✓             | ✓                    |
| [LiteSpeed的独家服务器API（LSAPI）](https://www.litespeedtech.com/open-source/litespeed-sapi/php) | ✓             | ✓                    |
| Web Server 和 应用程序的分离                                 | ✓             | ✓                    |
| [PageSpeed 支持](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:config:enable_pagespeed) | ✓             | ✓                    |
| 内置页面缓存                                                 | ✓             | ✓                    |
| 异步I/O支持                                                  | ✓             | ✓                    |
| 先进的.htaccess缓存                                          | ✕             | ✓                    |
| SSL Offloading                                               | ✕             | ✓                    |

### 安全

|                                                              | OpenLiteSpeed | LiteSpeed Enterprise |
| ------------------------------------------------------------ | ------------- | -------------------- |
| [Anti-DDoS连接和带宽限制](https://www.litespeedtech.com/products/litespeed-web-server/features/anti-ddos-advances) | ✓             | ✓                    |
| 防御 SSL BEAST和协商攻击功能                                 | ✓             | ✓                    |
| 严格的HTTP请求验证                                           | ✓             | ✓                    |
| 拒绝缓冲区溢出尝试                                           | ✓             | ✓                    |
| [PHP / Ruby / CGI / FCGI / LSAPI suEXEC](https://www.litespeedtech.com/open-source/litespeed-sapi/php/process-modes-comparison) | ✓             | ✓                    |
| mod_security 兼容性                                          | ✓             | ✓                    |
| SSL客户端验证                                                | ✓             | ✓                    |
| [reCAPTCHA保护](https://www.litespeedtech.com/solutions/anti-ddos/recaptcha) | ✓             | ✓                    |
| CloudLinux CageFS兼容性                                      | ✓             | ✓                    |
| [WordPress暴力攻击防护](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:lslb:wordpress-protection) | ✕             | ✓                    |
| 支持 chroot                                                  | ✕             | ✓                    |

### 高可用性

|                                                              | OpenLiteSpeed | LiteSpeed Enterprise |
| ------------------------------------------------------------ | ------------- | -------------------- |
| [配置文件修改平滑重启 0停机](https://www.litespeedtech.com/products/litespeed-web-server/features/zero-downtime-server-management) | ✓             | ✓                    |
| 立即从服务故障中恢复                                         | ✓             | ✓                    |
| [零停机服务器软件升级](https://www.litespeedtech.com/products/litespeed-web-server/features/zero-downtime-server-management) | ✕             | ✓                    |

### 使用方便

|                                                              | OpenLiteSpeed | LiteSpeed Enterprise |
| ------------------------------------------------------------ | ------------- | -------------------- |
| 直观的图形化 WebAdmin 控制台                                 | ✓             | ✓                    |
| 虚拟主机模板，易于配置                                       | ✓             | ✓                    |
| 实时服务监控                                                 | ✓             | ✓                    |
| 集成 [CyberPanel](https://cyberpanel.net/)，[DirectAdmin](https://www.litespeedtech.com/support/wiki/doku.php/litespeed_wiki:directadmin:custombuild-installation) | ✓             | ✓                    |
| 版本管理                                                     | ✕             | ✓                    |
| [cPanel支持 / WHM插件](https://www.litespeedtech.com/products/litespeed-web-server/control-panel-plugins/cpanel) / [Plesk插件](https://www.litespeedtech.com/products/litespeed-web-server/control-panel-plugins/plesk) | ✕             | ✓                    |

### 缓存插件支持

|                                                              | OpenLiteSpeed | LiteSpeed Enterprise |
| ------------------------------------------------------------ | ------------- | -------------------- |
| [WordPress](https://www.litespeedtech.com/products/cache-plugins/wordpress-acceleration) | ✓             | ✓                    |
| [Joomla](https://www.litespeedtech.com/products/cache-plugins/joomla-acceleration) | ✓             | ✓                    |
| [OpenCart](https://www.litespeedtech.com/products/cache-plugins/opencart-acceleration) | ✓             | ✓                    |
| [Drupal 8](https://www.litespeedtech.com/products/cache-plugins/drupal-acceleration) | ✓             | ✓                    |
| [XenForo 1.x and 2.x](https://www.litespeedtech.com/products/cache-plugins/xenforo-acceleration) | ✓             | ✓                    |
| [MediaWiki](https://www.litespeedtech.com/products/cache-plugins/mediawiki-acceleration) | ✓             | ✓                    |
| [Magento 1.x and 2.x](https://www.litespeedtech.com/products/cache-plugins/magento-acceleration) | ✕             | ✓                    |
| [PrestaShop](https://www.litespeedtech.com/products/cache-plugins/prestashop-acceleration) | ✕             | ✓                    |
| [Laravel](https://www.litespeedtech.com/products/cache-plugins/laravel-acceleration) | ✓             | ✓                    |
| [Shopware](https://www.litespeedtech.com/products/cache-plugins/shopware-acceleration) | ✕             | ✓                    |

### 高级功能

|                                                              | OpenLiteSpeed | LiteSpeed Enterprise |
| ------------------------------------------------------------ | ------------- | -------------------- |
| 支持多个版本PHP                                              | ✓             | ✓                    |
| mp4 / flv 视频流                                             | ✓             | ✓                    |
| 支流日志到外部记录器                                         | ✓             | ✓                    |
| 支持Geo-IP查找                                               | ✓             | ✓                    |
| 支自定义日志格式                                             | ✓             | ✓                    |
| 支持NodeJS，Python / Django，Ruby / Rails                    | ✓             | ✓                    |
| [支持ESI](https://www.litespeedtech.com/products/features/edge-side-includes) | ✕             | ✓                    |
| MS FrontPage服务器扩展                                       | ✕             | ✓                    |
| Rails共享托管                                                | ✕             | ✓                    |