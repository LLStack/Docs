---
title: 快速上手
sidebar: auto
---

## 准备

::: warning 注意
LLStack 仅适用于 RHEL 7 系操作系统及其衍生版，RHEL7、CentOS7、OracleLinux7、CloudLinux 7等。
RHEL 8 系正在测试中。
:::

::: danger 开通授权
LiteSpeed 为商业化软件，免费使用则需要获取试用key或者激活序列号， 教程： [**LiteSpeed 激活**](/lsws/LiteSpeed/Activation.html#)
:::

::: tip 磁盘挂载

如果有额外的磁盘、云盘，请务必先挂在磁盘再进行安装操作。 教程： [**磁盘挂载**](/lsws/others/fdisk.html)
:::

::: tip 安全组/防火墙

安装前务必要根据教程开启服务器安全组和防火墙中LLStack所依赖的端口。 教程： [**安全组设置**](/lsws/others/Security-group.html)

安装完 LLStack 后防火墙的设置请参考： [**安全组设置**](/lsws/others/firewall.html)

:::

## 轻量版

LLStack 轻量版脚本只提供 LiteSpeed 的图形化面板，其他 PHP、MySQL（MariaDB）的管理全部使用软件默认的配置文件，配置较为复杂，适合有经验高手和不习惯面板的同学使用。当然，也会更加简洁高效，同时资源利用率和安全性也更高。

**安装脚本：**

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/LLStack/master/install.sh)" 2>&1 | tee llstack-all.log
```

<p class="action"><a href="/lsws/Lite/" class="hero nav-link action-button">轻量版详细教程 →</a></p>

## 面板版

面板版是深度集成了非常好用且Web应用非强制性的 APPNode 面板而来的版本，常见的服务器组件如 PHP、MySQL、Redis、Memcached 都提供了图形化支持，同时也提供软件管家、防火墙、文件管理、备份管理等众多实用功能，适合新手使用，也适合有大量服务器运维的同学使用。

**安装脚本：**

```bash
INSTALL_AGENT=1 INIT_SWAPFILE=1 INSTALL_PKGS='php73' bash -c "$(curl -sS http://dl.appnode.com/install.sh)"
yum install appnode-app-mysqld appnode-app-php
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/LLStack/master/install-appnode.sh)" 2>&1 | tee llstack-all.log
```

<p class="action"><a href="/lsws/panel/" class="hero nav-link action-button">面板版详细教程 →</a></p>