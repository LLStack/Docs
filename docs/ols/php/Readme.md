---
sidebar: auto
title: LSPHP
---

# LSPHP

（Open）LiteSpeed 使用LSPHP，它比 php-fpm 或 fastcgi 更快。用户可以从LiteSpeed CentOS、Ubuntu、Debian 二进制软件源中安装LSPHP，然后创建/配置外部应用程序和脚本处理程序以指向（Open）LiteSpeed 以使用新安装的PHP二进制文件。

## 如何安装 PHP 扩展

### PHP7.0 + 安装

#### Swoole 安装示例

PHP7.0开始 Ubuntu 版的 LSPHP 提供了较为丰富的扩展，但是没有一些企业场景中较多的 Swoole 支持。

为什么不默认安装呢？ 因为需要参与编译，安装一系列包会使得 Docker 镜像变得非常大，所以默认不安装。

```md
::: danger 警告
下面版本是 53 为例，其他版本请甄别版本号。
:::
```

运行下面语句进入 LiteSpeed 容器内部
```bash
docker exec -it litespeed /bin/sh 
```

```bash
apt install pkg-config build-essential -y ##安装构建依赖包
apt install lsphp73-pear ## 安装 PECL 支持，注意版本号
/usr/local/lsws/lsphp73/bin/pecl install swoole
echo "extension=swoole.so" >> /usr/local/lsws/lsphp73/etc/php/7.3/mods-available/swoole.ini
/usr/local/lsws/bin/lswsctrl restart
```

### PHP5.3~5.6 安装

#### OPCache 安装示例

PHP5.3～5.6 版本，不提供像 OPCache 这样的字节码缓存扩展，那我们可以自行进行安装。

为什么不默认安装呢？ 因为需要参与编译，安装一系列包会使得 Docker 镜像变得非常大，所以默认不安装。

```md
::: danger 警告
下面版本是 53 为例，其他版本请甄别版本号。
:::
```

运行下面语句进入 LiteSpeed 容器内部
```bash
docker exec -it litespeed /bin/sh 
```

```bash
apt install pkg-config build-essential -y ##安装构建依赖包
mkdir -p ~/tmp
pushd ~/tmp
git clone https://github.com/LLStack/PHP5-OPCache.git
cd PHP5-OPCache
cd php53 ##不同版本进不同目录
  /usr/local/lsws/lsphp53/bin/phpize
  ./configure --with-php-config=/usr/local/lsws/lsphp53/bin/php-config
  make && make install
  echo "extension=opcache.so" >> /usr/local/lsws/lsphp53/etc/conf.d/opcache.ini ##注意不同版本路径不一样，下面有提供路径说明
  /usr/local/lsws/bin/lswsctrl restart ## 重启 OLS 
popd
```

## PHP 相关配置文件

### PHP53

|     PHP 位置     |                   路径                    |
| :--------------: | :---------------------------------------: |
|     安装位置     |         /usr/local/lsws/lsphp53/          |
|     php.ini      |    /usr/local/lsws/lsphp53/etc/php.ini    |
|   扩展配置目录   |    /usr/local/lsws/lsphp53/etc/conf.d/    |
| 二进制文件库路径 | /usr/local/lsws/lsphp53/lib/php5/20090626 |
|    LSPHP文件     |     /usr/local/lsws/lsphp53/bin/lsphp     |
|  PHP二进制文件   |      /usr/local/lsws/lsphp53/bin/php      |
|    php-config    |  /usr/local/lsws/lsphp53/bin/php-config   |
|      phpize      |    /usr/local/lsws/lsphp53/bin/phpize     |

### PHP54

|     PHP 位置     |                   路径                    |
| :--------------: | :---------------------------------------: |
|     安装位置     |         /usr/local/lsws/lsphp54/          |
|     php.ini      |    /usr/local/lsws/lsphp54/etc/php.ini    |
|   扩展配置目录   |    /usr/local/lsws/lsphp54/etc/conf.d/    |
| 二进制文件库路径 | /usr/local/lsws/lsphp54/lib/php5/20100525 |
|    LSPHP文件     |     /usr/local/lsws/lsphp54/bin/lsphp     |
|  PHP二进制文件   |      /usr/local/lsws/lsphp54/bin/php      |
|    php-config    |  /usr/local/lsws/lsphp54/bin/php-config   |
|      phpize      |    /usr/local/lsws/lsphp54/bin/phpize     |

### PHP55

|     PHP 位置     |                   路径                   |
| :--------------: | :--------------------------------------: |
|     安装位置     |         /usr/local/lsws/lsphp55/         |
|     php.ini      |   /usr/local/lsws/lsphp55/etc/php.ini    |
|   扩展配置目录   |   /usr/local/lsws/lsphp55/etc/conf.d/    |
| 二进制文件库路径 | /usr/local/lsws/lsphp55/lib/php/20121212 |
|    LSPHP文件     |    /usr/local/lsws/lsphp55/bin/lsphp     |
|  PHP二进制文件   |     /usr/local/lsws/lsphp55/bin/php      |
|    php-config    |  /usr/local/lsws/lsphp55/bin/php-config  |
|      phpize      |    /usr/local/lsws/lsphp55/bin/phpize    |

### PHP56

|     PHP 位置     |                   路径                    |
| :--------------: | :---------------------------------------: |
|     安装位置     |         /usr/local/lsws/lsphp56/          |
|     php.ini      |    /usr/local/lsws/lsphp56/etc/php.ini    |
|   扩展配置目录   |    /usr/local/lsws/lsphp56/etc/conf.d/    |
| 二进制文件库路径 | /usr/local/lsws/lsphp56/lib/php5/20090626 |
|    LSPHP文件     |     /usr/local/lsws/lsphp56/bin/lsphp     |
|  PHP二进制文件   |      /usr/local/lsws/lsphp56/bin/php      |
|    php-config    |  /usr/local/lsws/lsphp56/bin/php-config   |
|      phpize      |    /usr/local/lsws/lsphp56/bin/phpize     |

### PHP70

|     PHP 位置     |                          路径                           |
| :--------------: | :-----------------------------------------------------: |
|     安装位置     |                /usr/local/lsws/lsphp70/                 |
|     php.ini      | /usr/local/lsws/lsphp70/etc/php/7.0/litespeed/php70.ini |
|   扩展配置目录   |   /usr/local/lsws/lsphp70/etc/php/7.0/mods-available/   |
| 二进制文件库路径 |        /usr/local/lsws/lsphp70/lib/php/20151012         |
|    LSPHP文件     |            /usr/local/lsws/lsphp70/bin/lsphp            |
|  PHP二进制文件   |             /usr/local/lsws/lsphp70/bin/php             |
|    php-config    |         /usr/local/lsws/lsphp70/bin/php-config          |
|      phpize      |           /usr/local/lsws/lsphp70/bin/phpize            |
|       PECL       |            /usr/local/lsws/lsphp70/bin/pecl             |

### PHP71

|     PHP 位置     |                         路径                          |
| :--------------: | :---------------------------------------------------: |
|     安装位置     |               /usr/local/lsws/lsphp71/                |
|     php.ini      | /usr/local/lsws/lsphp71/etc/php/7.1/litespeed/php.ini |
|   扩展配置目录   |  /usr/local/lsws/lsphp71/etc/php/7.1/mods-available/  |
| 二进制文件库路径 |       /usr/local/lsws/lsphp71/lib/php/20160303        |
|    LSPHP文件     |           /usr/local/lsws/lsphp71/bin/lsphp           |
|  PHP二进制文件   |            /usr/local/lsws/lsphp71/bin/php            |
|    php-config    |        /usr/local/lsws/lsphp71/bin/php-config         |
|      phpize      |          /usr/local/lsws/lsphp71/bin/phpize           |
|       PECL       |           /usr/local/lsws/lsphp71/bin/pecl            |

### PHP72

|     PHP 位置     |                         路径                          |
| :--------------: | :---------------------------------------------------: |
|     安装位置     |               /usr/local/lsws/lsphp72/                |
|     php.ini      | /usr/local/lsws/lsphp72/etc/php/7.2/litespeed/php.ini |
|   扩展配置目录   |  /usr/local/lsws/lsphp72/etc/php/7.2/mods-available/  |
| 二进制文件库路径 |       /usr/local/lsws/lsphp72/lib/php/20170718        |
|    LSPHP文件     |           /usr/local/lsws/lsphp72/bin/lsphp           |
|  PHP二进制文件   |            /usr/local/lsws/lsphp72/bin/php            |
|    php-config    |        /usr/local/lsws/lsphp72/bin/php-config         |
|      phpize      |          /usr/local/lsws/lsphp72/bin/phpize           |
|       PECL       |           /usr/local/lsws/lsphp72/bin/pecl            |

### PHP73

|     PHP 位置     |                         路径                          |
| :--------------: | :---------------------------------------------------: |
|     安装位置     |               /usr/local/lsws/lsphp73/                |
|     php.ini      | /usr/local/lsws/lsphp73/etc/php/7.3/litespeed/php.ini |
|   扩展配置目录   |  /usr/local/lsws/lsphp73/etc/php/7.3/mods-available/  |
| 二进制文件库路径 |       /usr/local/lsws/lsphp73/lib/php/20180731        |
|    LSPHP文件     |           /usr/local/lsws/lsphp73/bin/lsphp           |
|  PHP二进制文件   |            /usr/local/lsws/lsphp73/bin/php            |
|    php-config    |        /usr/local/lsws/lsphp73/bin/php-config         |
|      phpize      |          /usr/local/lsws/lsphp73/bin/phpize           |
|       PECL       |           /usr/local/lsws/lsphp73/bin/pecl            |

### PHP74

|     PHP 位置     |                         路径                          |
| :--------------: | :---------------------------------------------------: |
|     安装位置     |               /usr/local/lsws/lsphp74/                |
|     php.ini      | /usr/local/lsws/lsphp74/etc/php/7.4/litespeed/php.ini |
|   扩展配置目录   |  /usr/local/lsws/lsphp74/etc/php/7.4/mods-available/  |
| 二进制文件库路径 |       /usr/local/lsws/lsphp74/lib/php/20190902        |
|    LSPHP文件     |           /usr/local/lsws/lsphp74/bin/lsphp           |
|  PHP二进制文件   |            /usr/local/lsws/lsphp74/bin/php            |
|    php-config    |        /usr/local/lsws/lsphp74/bin/php-config         |
|      phpize      |          /usr/local/lsws/lsphp74/bin/phpize           |
|       PECL       |           /usr/local/lsws/lsphp74/bin/pecl            |