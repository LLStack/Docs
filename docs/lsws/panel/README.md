---
title: LLStack-面板版
lang: zh-CN
sidebar: auto
---

# LLStack-面板版

面板版是深度集成了非常好用且Web应用非强制性的 APPNode 面板而来的版本，常见的服务器组件如 PHP、MySQL、Redis、Memcached 都提供了图形化支持，同时也提供软件管家、防火墙、文件管理、备份管理等众多实用功能，适合新手使用，也适合有大量服务器运维的同学使用。

::: warning 注意
LLStack 仅适用于 RHEL 7 系操作系统及其衍生版，RHEL7、CentOS7、OracleLinux7、CloudLinux 7等。
RHEL 8 系正在测试中。
:::

::: danger 开通授权
LiteSpeed 为商业化软件，免费使用则需要获取试用key或者激活序列号， 教程： [**LiteSpeed 激活**](/lsws/LiteSpeed/Activation.html#)
:::

## 安装 APPNode

```bash
INSTALL_AGENT=1 INIT_SWAPFILE=1 INSTALL_PKGS='php73' bash -c "$(curl -sS http://dl.appnode.com/install.sh)"
```

**注：** 这里仅安装面板和 `php73`，具体 PHP 版本可以自定义，支持 53~73。

安装教程请看：[**APPNode 快速开始**](https://help.appnode.com/quickstart/install.html)

然后我们就可以通过 PHP 和 MySQL 面板扩展，来获得图形化界面安装多版本PHP并进行可视化的配置编辑等。

```bash
yum install appnode-app-mysqld appnode-app-php
```

## 安装 LLStack

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/LLStack/master/install-appnode.sh)" 2>&1 | tee llstack-all.log
```

**注：**这是专门为兼容 APPNode 设计的脚本，PHP 使用 APPNode 的源以更好的兼容面板。

### 步骤解释

一、选择脚本动作，输入 1 进入安装流程。

![](https://pics.mf8.biz/xsj/2019/2/002.png)

二、是否升级系统所有包，`y` 即升级，执行 `yum update -y` 操作， `n `即不升级

![](https://pics.mf8.biz/xsj/2019/2/003.png)

三、输入服务器的公网 IPv4 访问地址，默认会自动识别，如果有错误可以及时更正

![](https://pics.mf8.biz/xsj/2019/2/004.png)

四、这里输入 `0`，我们不安装数据库，使用 APPNode 的数据库管理

![](https://pics.mf8.biz/xsj/2019/2/001.png)

五、选择安装默认PHP版本，需要和 APPNode 安装时的默认版本对应。 后续可以安装多PHP版本。

 ![](https://pics.mf8.biz/xsj/2019/2/005.png)

六、是否安装 LiteSpeed，`y` 即安装，`n` 即不安装

 ![](https://pics.mf8.biz/xsj/2019/2/006.png)

七、是否安装数据库管理工具，`1`  即安装 Adminer  轻量级数据库管理工具 `2` 即安装 php'M'yAdmin  `3` 不安装任何数据库管理工具

 ![](https://pics.mf8.biz/xsj/2019/2/007.png)

八、使用默认软件源还是国内镜像。 `1` 即使用软件默认的软件源国外服务器访问速度快，`2` 即使用国内软件源，适合国内服务器安装加速

 ![](https://pics.mf8.biz/xsj/2019/2/008.png)

九、选择 LiteSpeed 激活方式， `1` 使用试用Key激活，需要将 *trial.key* 文件放到 */root/trial.key* 位置 `2` 使用产品序列号激活。 

 ![](https://pics.mf8.biz/xsj/2019/2/009.png)

十、回车后就会进入自动安装

十一、安装完成输出结果信息

 ![](https://pics.mf8.biz/xsj/2019/2/010.png)

::: tip 添加虚拟主机
请参考：[**虚拟主机管理**](/lsws/vhost/)
:::

## 升级

由于 APPNode 沿用 YUM 包管理器，所以我们依旧可以使用 LLStack 传统的升级方法进行升级。

也可以通过 APPNode 的 **软件管家** —— **可用更新** 进行图形化管理。

 ![](https://pics.mf8.biz/xsj/2019/2/011.png)

## 服务管理

### LiteSpeed 服务管理

```bash
systemctl {start|restart|stop|reload|condrestart|try-restart|status|help} lsws.service

start       - 启动 Web 服务
stop        - 停止 Web 服务
restart     - 平滑地重启Web服务器，零停机时间
reload      - 平滑地重启Web服务器，零停机时间
condrestart - 如果 Web 服务正在运行，进行正常重启
try-restart - 如果 Web 服务正在运行，进行正常重启
status      - 查看 Web 服务状态
```

**示例：**

启动 LiteSpeed Web Server

```
systemctl start lsws.service
```

平滑重启 LiteSpeed Web Server

```bash
systemctl restart lsws.service
```

### LiteSpeed 图形化管理

**面板地址：**

```
https://你的公网ip:7080
```

**密码：**(安装结束后会提示)

```bash
LiteSpeed WebAdmin Console Username:  llstackadmin
LiteSpeed WebAdmin Console Paasword:  BgPRLeBj8R4el1Wv
```

如果已经忘记密码了，如下命令可以帮助我们找回密码。

```bash
cat /root/defaulthtpasswd
```

如果需要修改密码可以通过如下命令实现：

```bash
/usr/local/lsws/admin/misc/admpass.sh
```

### PHP管理

进入 **软件管家**，找到 PHP ，然后就可以选择安装多个PHP版本了。

 ![](https://pics.mf8.biz/xsj/2019/2/012.png)

安装完成后，还需要安装专门的 LiteSpeed 包：

```bash
yum install -y appnode-php73-php-litespeed
ln -s /usr/bin/lsappnode-php73 /usr/bin/lsphp73
```

不同的版本请将 `73` 替换成和安装版本对应的。 

 ![](https://pics.mf8.biz/xsj/2019/2/013.png)

PHP 面板中，不需要启动 PHP，也不要开启自启和保护，同 Apache HTTPD 的 mod_php 一样，不存在单独的重启 PHP，如有需要请重启 LiteSpeed。

 ![](https://pics.mf8.biz/xsj/2019/2/014.png)

我们可以使用 APPNode 的图形化配置功能进行 PHP 的配置，记得重启 LiteSpeed 即可。

### 数据库管理

 ![](https://pics.mf8.biz/xsj/2019/2/015.png)

我们可以在 **软件管家** 中安装数据库软件，MySQL 和 Maria DB，同时只能安装一个版本。

 ![](https://pics.mf8.biz/xsj/2019/2/016.png)

进入 MySQL 服务器后，记得点击启动，并点击`保护`和`自启`

**MySQL 管理：**

```bash
systemctl {start,stop,status,restart} mysqld.service

start       - 启动 MySQL 服务
stop        - 停止 MySQL 服务
restart     - 重启 MariaDB 服务
status      - 查看 MySQL 服务状态
```

**MariaDB 管理：**

```bash
systemctl {start,stop,status,restart} mariadb.service

start       - 启动 MariaDB 服务
stop        - 停止 MariaDB 服务
restart     - 重启 MariaDB 服务
status      - 查看 MariaDB 服务状态
```

## 软件物理路径

### LiteSpeed Web Server

|     LiteSpeed 位置     |                     路径                     |       备注        |
| :--------------------: | :------------------------------------------: | :---------------: |
|   LiteSpeed 默认目录   |               /usr/local/lsws/               |                   |
|       二进制文件       |             /usr/local/lsws/bin              |                   |
| LiteSpeed 配置文件目录 |             /usr/local/lsws/conf             |                   |
|       主配置文件       |    /usr/local/lsws/conf/httpd_config.xml     | 作用同 httpd.conf |
|        授权密钥        |       /usr/local/lsws/conf/license.key       | 用序列号激活会有  |
|        试用密钥        |        /usr/local/lsws/conf/trial.key        |    试用期15天     |
|    演示网站配置文件    | /usr/local/lsws/conf/vhosts/LLStack-demo.xml |                   |

### PHP

|   PHP 位置   |            路径             |         备注         |
| :----------: | :-------------------------: | :------------------: |
|   安装位置   | /opt/appnode/appnode-php73  | php73 取决于不同版本 |
|   php.ini    | 	/etc/opt/appnode/scls/appnode-php73/php.ini |                      |
| 扩展配置目录 |  /etc/opt/appnode/scls/appnode-php73/php.d  |                      |

### 数据库

| MariaDB 位置 |      路径      | 备注 |
| :----------: | :------------: | ---- |
|    my.cnf    |  /etc/my.cnf   |      |
|     目录     | /var/lib/mysql |      |

| MySQL 位置 |      路径      | 备注 |
| :--------: | :------------: | ---- |
|   my.cnf   |  /etc/my.cnf   |      |
|    目录    | /var/lib/mysql |      |

## 虚拟主机配置详解

|          路径          |                   说明                   |
| :--------------------: | :--------------------------------------: |
|       /home/demo       | 示例页面目录，其他页面，不能存放网站文件 |
|    /home/demo/cache    |           用于存放LSCache缓存            |
|   /home/demo/cgi-bin   |               CGI-BIN目录                |
|    /home/demo/logs     |             用于存放日志文件             |
| /home/demo/public_html |             网站文件存放目录             |
|     /home/demo/ssl     |             虚拟主机SSL文件              |



