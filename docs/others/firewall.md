---
title: 防火墙设置
sidebar: auto
---

# 防火墙设置

服务器的防火墙设置非常软件，有些时候服务器和端口的无法启用很可能是防火墙没有及时设置完成的缘故。

目前 LLStack 基于 CentOS 7，OLStack 则可以在任何可以运行 Docker 的宿主机系统上运行。

这里介绍常见的两个简单 Linux 防火墙设置软件的教程。分别是 Firewall 和 UFW，他们都比 iptables 更加简单易学。 

Debian、Ubuntu、Deepin、ArchLinux 等推荐使用 UFW。

RHEL、CentOS、Oracle Linux、Fedora、AliyunLinux 推荐使用 Firewall。

## UFW

UFW，即简单防火墙uncomplicated firewall，是一个 Arch Linux、Debian 或 Ubuntu 中管理防火墙规则的前端。 UFW 通过命令行使用（尽管它有可用的 GUI），它的目的是使防火墙配置简单（即不复杂uncomplicated）。

### 安装

**ArchLinux：**

```bash
sudo pacman -S ufw
```

**Debian/Ubuntu：**

```bash
apt-get update 
apt-get install ufw -y
```

### 设置默认规则

大多数系统只需要打开少量的端口接受传入连接，并且关闭所有剩余的端口。 从一个简单的规则基础开始，`ufw default`命令可以用于设置对传入和传出连接的默认响应动作。 要拒绝所有传入并允许所有传出连接，那么运行：

```bash
ufw default allow outgoing
ufw default deny incoming
```

### 开启端口

```bash
ufw allow 80
ufw allow 443
```

这里的 `80`,`443` 即要开启的端口，我们可以自定义。

也可以是具体的TCP或者UDP协议：

```bash
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 443/udp
```

### 关闭端口

```bash
ufw deny 80
ufw deny 443
```

### 批量添加区间端口

```bash
ufw allow 4400:4600/udp
ufw allow 4400:4600/tcp
```

### 启动防火墙

```bash
ufw enable
```

### 关闭防火墙

```bash
ufw disable
```

## Firewall

Firewall 是 CentOS 7 开始自带的防火墙服务以取代较为复杂的 iptables。 LLStack 无面板版使用的是 Firewall。

### 开启端口

```bash
firewall-cmd --zone=public --add-port=80/tcp --permanent
firewall-cmd --zone=public --add-port=443/tcp --permanent
```

这里的 `80`,`443` 即要开启的端口，我们可以自定义。

### 关闭端口

```bash
firewall-cmd --zone=public --remove-port=80/tcp --permanent
firewall-cmd --zone=public --remove-port=443/tcp --permanent
```

### 批量添加区间端口

```bash
firewall-cmd --zone=public --add-port=4400-4600/udp --permanent
firewall-cmd --zone=public --add-port=4400-4600/tcp --permanent
```

### 重启防火墙

```bash
firewall-cmd --reload // 重载

service firewalld restart // 重启
```

### 禁用防火墙

```bash
systemctl stop firewalld // 纯禁用
systemctl disable firewalld // 禁止开机启动
```

## 需要的端口

**LLStack/OLStack 需要开放的端口：**

|     服务器名称      | 开放端口 |   推荐开放ip    |               备注               |
| :-----------------: | :------: | :-------------: | :------------------------------: |
|        HTTP         |    80    | 0.0.0.0/0  ::/0 |                                  |
|        HTTPS        |   443    | 0.0.0.0/0  ::/0 |                                  |
| LiteSpeed Web Admin |   7080   |    自己的ip     | 建议将默认的7080更换为自定义端口 |
|         SSH         |    22    |    自己的ip     |  建议将默认的22更换为自定义端口  |
|        MySQL        |   3306   |  服务器内网IP   | 站库分离时使用，若不分离无需开启 |
|        Redis        |   6379   |  服务器内网IP   | 站库分离时使用，若不分离无需开启 |

安全起见建议将 LiteSpeed Web Admin 和 SSH 改为非标准端口。