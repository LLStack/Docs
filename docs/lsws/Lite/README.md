---
title: LLStack-轻量版安装
sidebar: auto
---

# LLStack-轻量版安装 

轻量版脚本只提供 LiteSpeed 的图形化面板，其他 PHP、MySQL（MariaDB）的管理全部使用软件默认的配置文件，适合高手和不习惯面板的同学使用。

::: warning 注意
LLStack 仅适用于 RHEL 7 系操作系统及其衍生版，RHEL7、CentOS7、OracleLinux7、CloudLinux 7等。
RHEL 8 系正在测试中。
:::

::: danger 开通授权
LiteSpeed 为商业化软件，免费使用则需要获取试用key或者激活序列号， 免费获得教程地址： 
:::

## 安装

**在 SSH 终端中输入：**

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/LLStack/master/install.sh)" 2>&1 | tee llstack-all.log
```

### 步骤解释

一、选择脚本动作，输入 1 进入安装流程。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549338215813.png)

二、是否升级系统所有包，`y` 即升级，执行 `yum update -y` 操作， `n `即不升级

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549338246894.png)

三、输入服务器的公网 IPv4 访问地址，默认会自动识别，如果有错误可以及时更正

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549338390936.png)

四、选择安装数据库，对应选择最前面的数字即可，`6`即安装 MySQL 5.5，以此类推。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549338457457.png)

五、选择安装PHP版本

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549338640611.png)

六、是否安装 LiteSpeed，`y` 即安装，`n` 即不安装

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549338685007.png)

七、是否安装数据库管理工具，`1`  即安装 Adminer  轻量级数据库管理工具 `2` 即安装 php'M'yAdmin  `3` 不安装任何数据库管理工具

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549338742999.png)

八、使用默认软件源还是国内镜像。 `1` 即使用软件默认的软件源国外服务器访问速度快，`2` 即使用国内软件源，适合国内服务器安装加速

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549338831847.png)

九、选择 LiteSpeed 激活方式， `1` 使用试用Key激活，需要将 *trial.key* 文件放到 */root/trial.key* 位置 `2` 使用产品序列号激活。 

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549339253488.png)

十、回车后就会进入自动安装

十一、安装完成输入结果信息

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549346575437.png)

::: tip 添加虚拟主机
请参考：[**虚拟主机管理**](/lsws/vhost/)
:::

## 升级

由于采用二进制 RPM 软件包进行组件的安装，所以升级体验会非常棒！

### 系统完整升级

```bash
yum upgrade
```

会将系统所有通过 YUM 软件源安装的软件都进行自动升级。

### 单独升级软件

```bash
yum upgrade <软件名称>
```

就会单独升级这个软件，通过空格隔离可以安装多个软件。

**例如升级 LiteSpeed Web Server：**

```bash
yum upgrade lsws
```

**例如升级 php73：**

```bash
yum upgrade -y php73-php-litespeed php73-php-bcmath php73-php-gd php73-php-json php73-php-mbstring php73-php-mcrypt php73-php-mysqlnd php73-php-opcache php73-php-pdo php73-php-pecl-crypto php73-php-pecl-mcrypt php73-php-pecl-geoip php73-php-pecl-zip php73-php-recode php73-php-snmp php73-php-soap php73-php-xml
```

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

同 Apache HTTPD 的 mod_php 一样，不存在单独的重启 PHP，如有需要请重启 LiteSpeed。

### 数据库管理

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
|   安装位置   |       /opt/remi/php73       | php73 取决于不同版本 |
|   php.ini    | /etc/opt/remi/php73/php.ini |                      |
| 扩展配置目录 |  /etc/opt/remi/php73/php.d  |                      |

### 数据库

| MariaDB 位置 |                     路径                     | 备注 |
| :----------: | :------------------------------------------: | ---- |
|    my.cnf    | /etc/my.cnf.d/server.cnf , mysql-clients.cnf |      |
|     目录     |                /var/lib/mysql                |      |

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

