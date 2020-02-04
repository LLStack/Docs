---
title: Redis 服务管理
sidebar: auto
---

# Redis 服务管理

::: tip 提醒
所有数据库的使用都推荐站库分离，来降低内存占用和提高负载能力
:::

## 云数据库 Redis

同 MySQL 一样，更推荐使用云数据库来进行使用，因为其继承了大厂工程师多年的使用和运维经验，且操作直观。

## Redis面板

APPNodo 同样提供 Redis 面板图形化控制台，帮助新手快速上手。

一、在 **软件管家** —— **运行环境** 处找到 **Redis服务器** 选择安装面板和环境即可。具体 Redis 版本看自用程序可以兼容的版本即可。

![](https://pics.mf8.biz/picgo20190225162630.png)

二、进入 Redis 控制台，记得`启动`并勾选 `自启`和 `守护`

![](https://pics.mf8.biz/picgo20190225163033.png)

三、参数配置，建议进入 **源文模式** 进行编辑

![](https://pics.mf8.biz/picgo20190225175113.png)

四、限制最大内存，找到 `# maxmemory <bytes>` 在下面一行写入：

```bash
maxmemory 268435456
```

即最大使用 256M 内存，如果服务器配置够大要自定义内存我们也可以自定义，如果是一个服务器包含所有组件，那就设置为服务器内存的四分之一会比较好。

```bash
free -b 查看服务器内存，以 byte 为单位
```

![](https://pics.mf8.biz/picgo20190225175446.png)

然后复制 total 处 Mem 的数值除一下就可以了。

五、进程保护，找到`daemonize no` 改成 `daemonize yes`

六、保存后点击上方的按钮重启 Redis

## 二进制包安装

通过 EPEL 源进行 Redis 的安装

```bash
yum install epel-release -y
yum install redis -y
```

然后我们修改 `/etc/redis.conf` 文件即可

修改内容同 Redis面板 中要修改的代码一致。

## 站库分离

站库分离即网站服务器和数据库服务器分离，这样的好处是不同软件之间相互隔离，安全性的提升还有就是可以节省成本，例如 Redis 就可以只买大内存实例而无需过分重视磁盘和CPU性能。

这样也是和 LiteSpeed 免费版授权只允许最大 2G 内存的情况，进行分离可以有效提升性能。

一、修改 参数配置，进入 **源文模式** 进行编辑，或者修改 `/etc/redis.conf` 文件。

将

```bash
# bind 127.0.0.1
```

修改为

```bash
bind <内网ip> 127.0.0.1
```

例如：

```bash
bind 172.16.81.167 127.0.0.1
```

然后重启 Redis 服务

二、开放服务器防火墙，防火墙设置详细教程请看：**[防火墙设置](/lsws/others/firewall.html)**

用面板的在防火墙处开放 `6379` 端口

![](https://pics.mf8.biz/picgo20190228142653.png)

用 Firewall 的用下面语句开放端口并重载防火墙。

```bash
firewall-cmd --zone=public --add-port=6379/tcp --permanent
firewall-cmd --reload
```

三、云服务器的同学们记得在安全组上开放对应的 `6379` 端口