# LLStack OLStack 社区版容器镜像

这是 [litespeedtech](https://github.com/litespeedtech)/**[ols-dockerfiles](https://github.com/litespeedtech/ols-dockerfiles)** 的一个复刻（Fork）

**OLStack 社区容器版**，是基于 Docker 容器化编排的 OpenLiteSpeed 环境。性能比Nginx更胜一筹，基本兼容 Apache HTTPD 生态，主要是不支持自动加载 .htaccss 文件，该版本对操作系统环境没有限制，未来可以应用到非常多的场景中。

### 依赖环境
能运行 Docker 即可，教程如下：

[Docker 国内服务器准备环境](https://www.llstack.com/ols/#%E5%9B%BD%E5%86%85%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%87%86%E5%A4%87%E7%8E%AF%E5%A2%83)

[Docker 海外服务器准备环境](https://www.llstack.com/ols/#%E6%B5%B7%E5%A4%96%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%87%86%E5%A4%87%E7%8E%AF%E5%A2%83)

## 组建环境
|组建|底层系统|
| :-------------: | :-------------: |
|OpenLiteSpeed + LSPHP 70～74|Ubuntu 18.04|
|OpenLiteSpeed + LSPHP 54～56|Ubuntu 16.04|
|OpenLiteSpeed + LSPHP 53|Ubuntu 14.04|

OpenLiteSpeed 介绍页：https://www.llstack.com/ols/openlitespeed/

LSPHP 详情页：https://www.llstack.com/ols/php/

## 使用

**注意：**完整使用请使用 OLStack，OLStack-Dockerfiles 仅仅是容器的实现。

### 下载镜像
下载 OpenLiteSpeed + LSPHP 容器镜像，可以使用最新版本：
```bash
docker pull llstack/olstack:latest
```
或使用制定的 OpenLiteSpeed 和 LSPHP 版本：
```bash
docker pull llstack/olstack:ols1.6.9-php74
```
**1. OpenLiteSpeed 版本**，目前 OLS 提供了 1.6.X 和 1.5.X 两个版本，未来可能提供更多的版本。

```bash
LITESPEED=ols1.6
```

可供修改的选项：`ols1.6` 、`ols1.5`

**2. PHP版本**，由 LiteSpeed 官方提供支持的 LSPHP 版本，和很多虚拟主机使用的企业版是一样的。

```bash
PHPVER=php73
```

目前提供了：`php74`、`php73`、`php72`、`php71`、`php70`、`php56`、`php55`、`php54`、`php53`

不同的 PHP 版本底层基于的 Ubuntu 版本也不一样。

- php70～74 底层系统为 Ubuntu 18.04。
- php54～56 底层系统为 Ubuntu 16.04。 **PHP不受官方支持**
- php53 底层系统为 Ubuntu 14.04。 **PHP和系统均不受官方支持，仅建议测试**

### 启动容器

```bash
docker run -itd --name openlitespeed -p 7080:7080 -p 80:80 -p 443:443 llstack/olstack:latest
```
### 停止容器
如果您没有为容器定义任何名称，请随意将 `openlitespeed`替换为`Container_ID`。
```bash
docker stop openlitespeed
```
