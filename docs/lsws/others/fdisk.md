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

基于 APPNode 实现。原帖地址：https://bbs.appnode.com/thread-531.htm

  进入软件管家，搜索并安装“存储管理”应用，然后可以根据你自己的需要，创建分区并挂载到指定目录下。 
![img](https://bbs.appnode.com/upload/attach/201705/26/113912hlld2hzhhhhsdxt2.png)

下面演示一下新硬盘分区和挂载的基本操作： 
xvdc 是新增加的一块硬盘，现在我要将它分区并挂载到 /data 目录下。 

**一、设置分区表** 
可设置为 GPT 格式和 MBR 格式。 
\* GPT：新一代分区表格式，支持2T以上的磁盘 
\* MBR(MSDOS)：传统分区表格式 
如果硬盘较大，请选择GPT，不然就选择MBR。 
![img](https://bbs.appnode.com/upload/attach/201705/26/114048btzsmihxx9jp5s9w.png) 

**二、创建分区** 
点击“空闲分区”后面的“创建分区”按钮，进行创建分区操作： 
![img](https://bbs.appnode.com/upload/attach/201705/26/114120otnkb9b8nijv5973.png) 
创建成功后，分区列表变成： 
![img](https://bbs.appnode.com/upload/attach/201705/26/114440df8cfxlc3wnbph8n.png)

**三、格式化分区** 
分区创建好后，需要格式化后才能使用，点击刚才创建的分区后面的“格式化”按钮，进行格式化操作。 
优先选择使用 ext4 或 xfs 文件系统，性能更高： 
![img](https://bbs.appnode.com/upload/attach/201705/26/114444s11ysoeh9w9r73a5.png) 
格式化过程： 
![img](https://bbs.appnode.com/upload/attach/201705/26/114646um1bq9by0o400b8c.png) 
格式化成功后，分区列表变成： 
![img](https://bbs.appnode.com/upload/attach/201705/26/114712iyysllzjacc99sal.png)

**四、挂载** 
格式化好的分区后面会多出一个“挂载”按钮，点击进行挂载设置： 
![img](https://bbs.appnode.com/upload/attach/201705/26/114915ojoo9hmeppou9x92.png) 
添加挂载点，输入 /data，注意要勾选上“自动挂载”，否则重启后这个分区将不会挂载到 /data： 
![img](https://bbs.appnode.com/upload/attach/201705/26/114925bkiyfyrrmf6yxvyf.png) 
挂载完成，在分区列表中可以看到已经挂载到 /data 目录下了： 
![img](https://bbs.appnode.com/upload/attach/201705/26/115226zjx4x3fjj3ta0v02.png)  