---
sidebarDepth: 3
---

# 介绍

LiteSpeed 即 LiteSpeed Web Server（简称 LSWS），是一款企业级商用 Web 服务软件，可以完美的 Apache HTTPD 兼容体验，.htaccess 规则可以直接兼容而不像 Nginx 需要重写，并兼容常用的mod扩展。得益于基于事件的架构优势，静态内容比Apache Httpd 快 5 倍 ，动态内容更是快 40 倍，HTTPS 访问快 3 倍并可以应用硬件加速器。

## LiteSpeed 特性

### [Apache 插入式替换](https://www.litespeedtech.com/products/litespeed-web-server/features/apache-drop-in-replacement)

直接读取 Apache HTTPD 配置文件，支持 .htaccess，WAF 等功能，不需要停机

### [HTTP / 2 /3支持](https://www.litespeedtech.com/products/litespeed-web-server/features/http-2-support)

HTTP / 2，HTTP / 3可以更快地将内容提供给消费者设备

### [QUIC支持](https://www.litespeedtech.com/products/litespeed-web-server/features/quic-support)

使用QUIC减少连接建立时间并改善拥塞控制

### [零停机时间](https://www.litespeedtech.com/products/litespeed-web-server/features/zero-downtime-server-management)

只有LiteSpeed Web Server允许您更新Web服务器软件而无需停机

### [缓解DDoS攻击](https://www.litespeedtech.com/products/litespeed-web-server/features/anti-ddos-advances)

LiteSpeed Web Server 可缓解拒绝服务攻击

### [事件驱动](https://www.litespeedtech.com/products/litespeed-web-server/features/event-driven-architecture)

LSWS是事件驱动的，Apache是基于进程的。

## 细节特点

### 基本功能

- [HTTP / 2](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#http/2%20Support)
- [符合HTTP 1.0 / 1.1](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#http_1.01.1)
- [脚本语言：PHP，Perl，Ruby，Python，Java等......](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#scripting_languages)
- [服务器API：LiteSpeed SAPI（LSAPI），CGI，FCGI，AJPv13，代理](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#server_apis)
- [HTTPS](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#https)
- [IPv4和IPv6支持](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#ipv4_and_ipv6)
- [无限的IP和基于名称的虚拟主机](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#virtual_hosting)
- [无限制的并发连接](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#concurrent_connections)
- [Brotli压缩](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#brotli_compression)
- [GZIP压缩](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#gzip_compression)
- [支持SPDY / 2,3和3.1](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#spdy)
- [WebSocket代理](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#websockets)
- [在Linux，FreeBSD，MacOSX，Solaris上运行](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#operating_systems)

### 性能和可扩展性

- [事件驱动的架构](https://www.litespeedtech.com/products/litespeed-web-server/features/event-driven-architecture)
- [成千上万的并发连接](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#concurrent_connections)
- [微小的内存占用](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#tiny_memory_footprint)
- [发送文件（）](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#sendfile())
- [异步I / O支持](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#asynchronous_io)
- [LiteSpeed的独家服务器API（LSAPI）可提供最佳的动态内容性能](https://www.litespeedtech.com/products/litespeed-sapi/overview)
- [无与伦比的PHP suEXEC性能，适用于共享主机](https://www.litespeedtech.com/products/litespeed-sapi/php/suexec-daemon-mode)
- [三种不同的PHP suEXEC设置，满足不同的需求和能力](https://www.litespeedtech.com/products/litespeed-sapi/php/guide-to-suexec-setups)
- [静态内容比Apache快5倍](https://www.litespeedtech.com/products/litespeed-web-server/benchmarks/small-static-file)
- [动态内容比Apache快40倍](https://www.litespeedtech.com/products/litespeed-web-server/benchmarks/php-hello-world)
- [HTTPS比Apache快3倍](https://www.litespeedtech.com/products/litespeed-web-server/benchmarks/small-static-file-https)
- [OCSP装订](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#ocsp_stapling)
- [内置页面缓存](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#lscache)
- [通过ESI支持涡轮增压Magento和其他Web应用程序](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#esi)
- [高级.htaccess缓存消除了与Apache中使用.htaccess相关的性能瓶颈](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#.htaccess_caching)
- [CloudLinux LVE兼容性](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#cloudlinux_lve_compatibility)
- [提高Web应用程序的可伸缩性](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#increases_scalability_of_web_applications)
- [服务器和Web应用程序的分离允许缓冲请求和响应，从而更好地处理多个连接](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#web_application_buffering)
- [及时配置削减重启时间](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#just_in_time_configuration)
- [CPU亲和性允许更多地使用CPU缓存](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#cpu_affinity)

### 便于使用

- [控制面板插件（cPanel，DirectAdmin和Plesk）](https://www.litespeedtech.com/products/litespeed-web-server/control-panel-plugins)
- [由cPanel正式支持](http://blog.litespeedtech.com/2014/07/21/official-cpanel-support-for-litespeed-web-server/)
- [直观的WebAdmin控制台GUI](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#webadmin_console)
- [虚拟主机模板，便于配置](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#virtual_host_templates)
- [实时服务监控](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#real-time_statistics)

### 安全

- [wp-login.php的暴力保护](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#brute-force_wp-login)
- [内置防DDoS连接和带宽限制](https://www.litespeedtech.com/products/litespeed-web-server/features/anti-ddos-advances)
- [mod_security兼容性](https://www.litespeedtech.com/products/litespeed-web-server/features/built-in-security-features)
- [与Atomic Secured Linux和Atomicorp Realtime ModSecurity规则的兼容性](https://www.atomicorp.com/wiki/index.php/Litespeed)
- [反SSL BEAST和重新协商攻击功能](https://www.litespeedtech.com/products/litespeed-web-server/features/anti-ddos-advances)
- [严格的HTTP请求验证](https://www.litespeedtech.com/products/litespeed-web-server/features/built-in-security-features)
- [拒绝缓冲区溢出尝试](https://www.litespeedtech.com/products/litespeed-web-server/features/built-in-security-features)
- [PHP / Ruby / CGI / FCGI / LSAPI suEXEC](https://www.litespeedtech.com/products/litespeed-sapi/php/guide-to-suexec-setups)
- [CloudLinux CageFS兼容性](https://www.litespeedtech.com/products/litespeed-web-server/features/built-in-security-features)
- [外部应用程序和完整的服务器chroot能力](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#chroot_ability)

### 高可用性

- [应用更改，零停机时间](https://www.litespeedtech.com/products/litespeed-web-server/features/zero-downtime-server-management)
- [零停机服务器软件升级](https://www.litespeedtech.com/products/litespeed-web-server/features/zero-downtime-server-management)
- [立即从服务故障中恢复](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#recovers_from_service_failures_instantly)

### Apache兼容性

- [直接读取Apache的配置文件](https://www.litespeedtech.com/products/litespeed-web-server/features/apache-drop-in-replacement)
- [替换cPanel，Plesk，DirectAdmin，Interworx等的Apache替代品](https://www.litespeedtech.com/products/litespeed-web-server/features/apache-drop-in-replacement)
- [完整的.htaccess支持](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#full_.htaccess_support)
- [与Apache核心模块兼容](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#apache_modules)

### CloudLinux兼容性

- [轻量级虚拟环境（LVE）](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#lv_virtual_environment)
- [CageFS](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#cage_fs)
- [PHP选择器](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#php_selector)
- [Node.js选择器](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#node_js_selector)
- [Python和Ruby Selector](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#python_ruby_selector)
- [用户空间中的检查点/还原（CRIU）](https://www.litespeedtech.com/products/litespeed-web-server/features/feature-explanations#checkpoint_restore_userspace)