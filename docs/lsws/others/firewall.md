---
title: 防火墙设置
sidebar: auto
---

# 防火墙设置

服务器的防火墙设置非常软件，有些时候服务器和端口的无法启用很可能是防火墙没有及时设置完成的缘故。

## 防火墙面板

安装 APPNode 面板的同学可以很方便的使用图形化防火墙配置带来的便利性。

一、我们进入 **防火墙**，然后启动并勾选自启和守护。

![](https://pics.mf8.biz/picgo20190228141032.png)

二、然后我们在 **开关网络端口** 中选择接受、拒绝还是丢弃相关端口，并作出限制了。

![](https://pics.mf8.biz/picgo20190228141136.png)

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



**LLStack 需要开放的端口：**

|    服务器名称    | 开放端口 |   推荐开放ip    |               备注               |
| :--------------: | :------: | :-------------: | :------------------------------: |
|       HTTP       |    80    | 0.0.0.0/0  ::/0 |                                  |
|      HTTPS       |   443    | 0.0.0.0/0  ::/0 |                                  |
| LiteSpeed 控制台 |   7080   |    自己的ip     | 建议将默认的7080更换为自定义端口 |
|       SSH        |    22    |    自己的ip     |  建议将默认的22更换为自定义端口  |
|      MySQL       |   3306   |  服务器内网IP   | 站库分离时使用，若不分离无需开启 |
|      Redis       |   6379   |  服务器内网IP   | 站库分离时使用，若不分离无需开启 |