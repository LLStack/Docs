---
title: 安全组设置
sidebar: auto
---

# 安全组设置

云服务器都会一层最外面的安全组设置，作用同防火墙类似，所以我们不要忘记开放安全组的相应端口，以避免服务无法正常使用。

## 安全组设置教程

阿里云：https://help.aliyun.com/document_detail/25475.html

腾讯云：https://cloud.tencent.com/document/product/213/2502

华为云：https://support.huaweicloud.com/usermanual-ecs/zh-cn_topic_0030878383.html

百度云：https://cloud.baidu.com/doc/BCC/GettingStarted/2D.5C.E7.AE.A1.E7.90.86.E5.AE.89.E5.85.A8.E7.BB.84.html

##  LLStack 需要开放的端口

|    服务器名称    | 开放端口 |   推荐开放ip    |               备注               |
| :--------------: | :------: | :-------------: | :------------------------------: |
|       HTTP       |    80    | 0.0.0.0/0  ::/0 |                                  |
|      HTTPS       |   443    | 0.0.0.0/0  ::/0 |                                  |
| LiteSpeed 控制台 |   7080   |    自己的ip     | 建议将默认的7080更换为自定义端口 |
|       SSH        |    22    |    自己的ip     |  建议将默认的22更换为自定义端口  |
|      MySQL       |   3306   |  服务器内网IP   | 站库分离时使用，若不分离无需开启 |
|      Redis       |   6379   |  服务器内网IP   | 站库分离时使用，若不分离无需开启 |

服务器内部还有 Firewall 或者 iptables 这样的软件，设置教程请参考：**[防火墙设置](/lsws/others/firewall.html)**