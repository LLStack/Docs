---
title: 磁盘挂载
sidebar: auto
---

# 磁盘挂载

如果咱们的云服务器有购买多余的云盘，我们需要在安装 LLStack 之前挂载好磁盘。

推荐将磁盘挂载至： `/home` 目录

## 自动挂载脚本（推荐）

我们推荐使用自动化挂载脚本来自动识别可以挂载的磁盘，然后用户可以自定义想要挂载的磁盘。

**运行下列语句一键运行：**

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/Auto-fdisk/master/auto_fdisk.sh)" 2>&1 | tee Auto-fdisk.log
```

**图文教程：**

![](https://pics.mf8.biz/picgo20190228152828.png)

**视频教程：**

http://www.365yg.com/i6435830537536930306/#mid=1558373688538114

## 面板管理

使用 LLStack 面版版的可以查看图形化教程：[面板管理](../lsws/others/fdisk.html#面板管理)