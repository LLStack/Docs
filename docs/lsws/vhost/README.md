# 创建虚拟主机

用户帮助用户快速创建一个 HTTP 虚拟主机。 HTTPS 设置请看教程。

**运行脚本：**

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/LLStack/master/vhost.sh)"
```

## 步骤详解

::: tip 提示
在脚本直接按键盘上的 **BackSpace** 即 退格键会报错。  同时按 **CTRL+BackSpace** 键即可正常删除。
:::

一、输入虚拟主机主域名，这里的域名也将作为配置文件的名称。输入不带www的域名会默认添加www的配置。

![](https://pics.mf8.biz/picgo20190302231906.png)

二、输入网站管理员邮箱，当网站报错时会弹出管理员邮箱，让用户进行报警

![](https://pics.mf8.biz/picgo20190302231933.png)

三、输入该虚拟主机的PHP版本，这里将默认显示安装脚本时的默认版本，我们可以选择其他版本。  教程请看：[PHP 多版本安装](/php/#PHP 多版本安装) 

![](https://pics.mf8.biz/picgo20190302231949.png)

四、我们可以在这里添加更多的子域名

![](https://pics.mf8.biz/picgo20190302232014.png)

五、然后确认是否要开启HTTPS

![](https://pics.mf8.biz/picgo20190302232316.png)

六、然后会让我们输入 密钥文件（.Key）和证书文件（.crt）的路径，不一定马上就要存在，我们可以后续等创建完虚拟主机后再放到对应的路径上（会有报错，但是可以忽略）。

![](https://pics.mf8.biz/picgo20190302232104.png)

七、是否开启 HTTP/3 即 QUIC 功能，输入 `y` 为开启，该功能已经稳定可以适当用于生产环境

![](https://pics.mf8.biz/picgo20190302231808.png)

八、然后我们输入任意键即可开始自动配置，`CTRL+C` 为取消

![](https://pics.mf8.biz/picgo20190302232148.png)

六、然后就可以看到输出了。

![](https://pics.mf8.biz/picgo20190302232208.png)

## 虚拟主机目录介绍

|          路径          |                   说明                   |
| :--------------------: | :--------------------------------------: |
|       /home/<你的主域名>       | 示例页面目录，其他页面，不能存放网站文件 |
|    /home/<你的主域名>/cache    |           用于存放LSCache缓存            |
|   /home/<你的主域名>/cgi-bin   |               CGI-BIN目录                |
|    /home/<你的主域名>/logs     |             用于存放日志文件             |
| /home/<你的主域名>/public_html |             网站文件存放目录             |
|     /home/<你的主域名>/ssl     |             虚拟主机SSL文件              |

## HTTPS 信息

默认开启 TLS `1.0` `1.1` `1.2` `1.3`

默认开启 HTTP/2

