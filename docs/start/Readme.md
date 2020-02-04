---
title: 快速上手
sidebar: auto
---

# 介绍

目前 LLStack 有两个版本，一个是 OLStack 社区容器版，一个是 LLStack 企业版。

[**OLStack 社区容器版**](/ols/)，是基于 Docker 容器化编排的 OpenLiteSpeed 环境。性能比Nginx更胜一筹，基本兼容 Apache HTTPD 生态，主要是不支持自动加载 .htaccss 文件，该版本对操作系统环境没有限制，未来可以应用到非常多的场景中。

[**LLStack 企业版**](/lsws/)，是基于 LiteSpeed EnterPrise Native 的一键包环境，拥有出色的性能，100%完美兼容 Apache HTTPD 生态，但是这是商业软件，免费版仅支持运行与内存不大于2G的Linux环境。 目前该一键包仅支持 RHEL/CentOS 7 系统。

::: tip 磁盘挂载

如果有额外的磁盘、云盘，请务必先挂在磁盘再进行安装操作。 教程： [**磁盘挂载**](/others/fdisk.html)
:::

::: tip 安全组/防火墙

安装前务必要根据教程开启服务器安全组和防火墙中LLStack所依赖的端口。 教程： [**安全组设置**](/others/Security-group.html)

安装完 LLStack 后防火墙的设置请参考： [**安全组设置**](/others/firewall.html)

:::

##  OLStack 社区容器版安装教程

**国内服务器**     海外服务器请参考  [完整安装教程](/ols/)

一、安装 Docker 环境，已有可以跳过

```bash
curl -sSL https://get.daocloud.io/docker | sh   
```

二、安装 Docker-Compose 环境，其中`1.25.3`  可以根据 [**最新版本**](https://github.com/docker/compose/releases) 修改，已有可以跳过

```bash
curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
```

三、下载 OLStack

```bash
## 没有下载 git 的可以通过 apt install git -y 或者 yum install git -y 安装
git clone https://gitee.com/LLStack/OLStack.git
cd OLStack
```

四、编辑 `.env` 和 `docker-compose.yml`文件：

 `.env` 文件包括了对一些版本的定义。 可以具体看 [.env 解析说明](/ols/#env配置)。

`docker-compose.yml`文件则是定义具体安装什么容器组件，包括 Redis、phpmyadmin 等。 可以具体看 [docker-compose.yml 解析](/ols/#docker-compose-yml-配置)。

```bash
vi .env
vi docker-compose.yml
```

::: tip 提示
不会 vi 的同学，可以用 FileZilla、XFTP 这类的支持 SFTP 协议的软件，将文件下载后编辑再上传。
:::

五、 启动容器

```bash
docker-compose up -d
```

六、 启动说明：

```bash
docker-compose up ## 临时启动所有容器
docker-compose up -d ## 持久化启动所有容器
docker-compose stop ## 停止容器运行
docker-compose down ## 停止和删除所有容器
```

更多容器使用教程

##  LLStack 企业版安装教程

### 轻量版

LLStack 企业版-轻量版脚本只提供 LiteSpeed Enterprise Native 的图形化面板，其他 PHP、MySQL（MariaDB）的管理全部使用软件默认的配置文件，配置较为复杂，适合有经验高手和不习惯面板的同学使用。当然，也会更加简洁高效，同时资源利用率和安全性也更高。

**安装脚本：**

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/LLStack/master/install.sh)" 2>&1 | tee llstack-all.log
```

<p class="action"><a href="/lsws/Lite/" class="hero nav-link action-button">轻量版详细教程 →</a></p>
### 面版版

LLStack 企业版-面版版是深度集成了非常好用且Web应用非强制性的 APPNode 面板而来的版本，常见的服务器组件如 PHP、MySQL、Redis、Memcached 都提供了图形化支持，同时也提供软件管家、防火墙、文件管理、备份管理等众多实用功能，适合新手使用，也适合有大量服务器运维的同学使用。

**安装脚本：**

```bash
INSTALL_AGENT=1 INIT_SWAPFILE=1 INSTALL_PKGS='php73' bash -c "$(curl -sS http://dl.appnode.com/install.sh)"
yum install appnode-app-mysqld appnode-app-php
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/LLStack/master/install-appnode.sh)" 2>&1 | tee llstack-all.log
```

<p class="action"><a href="/lsws/panel/" class="hero nav-link action-button">面板版详细教程 →</a></p>