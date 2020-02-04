---
home: true
heroImage:  https://www.llstack.com/llstack.svg
heroText: LLStack
tagline: 便捷、纯粹的 LiteSpeed+PHP+MySQL 运行环境
actionText: 快速上手 →
actionLink: /lsws/install/
footer: MIT Licensed | 浙ICP备15006212号-6 | Copyright © 2019-present LLStack.com
meta:
  - name: description
    content: LLStack - 基于LiteSpeed的一站式高性能PHP网站解决方案/一键包，这是一款提供便捷、纯粹的 LiteSpeed+PHP+MySQL 运行环境的一键包。以 LiteSpeed Native 原生环境为基础，而不必安装过分其他厚重冗杂的软件环境。提供图形化配置面板，新手编辑配置再不用对着黑底白字的一串英文发愁。包括但不限于 LSCache、HTTP/3（QUIC)、TLS1.3、PageSpeed、Brotli等性能级扩展开箱即用。
  - name: keywords
    content: LLStack LiteSpeed 一键包 LiteSpeed一键包 LiteSpeed面板 PHP MySQL MariaDB APPNode LSCache QUIC
---

<div class="features">
  <div class="feature">
    <h2>简洁至上</h2>
    <p>以 LiteSpeed Native 原生环境为基础，而不必安装过分其他厚重冗杂的软件环境。</p>
  </div>
  <div class="feature">
    <h2>便捷直观</h2>
    <p>LiteSpeed 提供图形化配置面板，新手编辑配置再不用对着黑底白字的一串英文发愁</p>
  </div>
  <div class="feature">
    <h2>澎湃性能</h2>
    <p>包括但不限于 LSCache、HTTP/3（QUIC)、TLS1.3、PageSpeed、Brotli等性能级扩展开箱即用。</p>
  </div>
</div>

### 快速上手

**LLStack-轻量版安装：**

``` bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/LLStack/master/install.sh)" 2>&1 | tee llstack-all.log
```

**LLStack-面板版安装：**

```bash
INSTALL_AGENT=1 INIT_SWAPFILE=1 INSTALL_PKGS='php73' bash -c "$(curl -sS http://dl.appnode.com/install.sh)"
yum install appnode-app-mysqld appnode-app-php
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/LLStack/master/install-appnode.sh)" 2>&1 | tee llstack-all.log
```

::: tip 操作系统
LLStack 仅适用于 RHEL 7 系操作系统及其衍生版，RHEL7、CentOS7、OracleLinux7、CloudLinux 7等。 RHEL 8 系正在测试中。
:::



**友情链接：**

[米饭粑](https://www.mf8.biz/)