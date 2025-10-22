---
sidebar: auto
---

# PHP 管理

## PHP 多版本安装

LLStack 的 PHP 是基于 REMI 软件源实现的，所以我们可以很方便的实现 PHP 多版本共存。

### 安装

在 SSH 中输入：

### 定义版本

```bash
phpversion=php71
```

**这里可以输入：**

```bash
php54,php55,php56,php70,php71,php72,php73
```

### 安装组件

```bash
yum install -y $phpversion-php-litespeed $phpversion-php-cli $phpversion-php-bcmath $phpversion-php-gd $phpversion-php-json $phpversion-php-mbstring $phpversion-php-mcrypt $phpversion-php-mysqlnd $phpversion-php-opcache $phpversion-php-pdo $phpversion-php-pecl-crypto $phpversion-php-pecl-mcrypt $phpversion-php-pecl-geoip $phpversion-php-pecl-zip $phpversion-php-recode $phpversion-php-snmp $phpversion-php-soap $phpversion-php-xml
```

::: tip 提示
PHP 每个版本的官方生命支持周期是三年，如果程序支持建议安装最新版本
查看PHP版本支持情况：http://php.net/supported-versions.php
:::

### 生效新版本

新的 PHP 安装完成后，需要在虚拟主机配置中生效新版本。

#### 已有虚拟主机修改

```bash
sed -i "s@lsphp`新版本号`@lsphp`旧版本号`@g" /usr/local/lsws/conf/vhosts/<网站域名>.xml
```

例如，我的网站是 www.mf8.biz，想用PHP73代替旧的PHP72。

```bash
sed -i "s@lsphp73@lsphp72@g" /usr/local/lsws/conf/vhosts/www.mf8.biz.xml
```

#### 新建虚拟主机使用

在脚本中选择新版本而非旧版本即可。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549435917532.png)

## PHP 安装组件

REMI 有安装非常多的PECL扩展，下面列举常见扩展的安装教程。

::: tip 提示

记得定义版本

:::

```bash
phpversion=php<你的PHP版本>
```

### OpCache

默认已经安装

### Swoole 扩展

php54 - 71 可以安装 Swoole 1：

```bash
yum install -y $phpversion-php-pecl-swoole
```

php55 - 72 可以安装 Swoole 2：

```bash
yum install -y $phpversion-php-pecl-swoole2
```

php70 - 73 可以安装 Swoole 4:

```bash
yum install -y $phpversion-php-pecl-swoole4
```

php 70 - 72 可以安装 Swoole Serialize 用于加速序列化

```bash
yum install -y $phpversion-php-pecl-swoole-serialize
```

### Redis 扩展

PECL Redis 4，如果扩展支持，推荐使用 4：

```bash
yum install -y $phpversion-php-pecl-redis4
```

PECL Redis：

```bash
yum install -y $phpversion-php-pecl-redis
```

### Memcached 扩展

PECL Memcache:

```bash
yum install -y $phpversion-php-pecl-memcache
```

PECL Memcached:

```bash
yum install -y $phpversion-php-pecl-memcached
```

### APCu 扩展

```bash
yum install -y $phpversion-php-pecl-apcu $phpversion-php-pecl-apcu-bc
```

### XCache 扩展

仅 PHP54、55、56 可以安装

```bash
yum install -y $phpversion-php-xcache
```