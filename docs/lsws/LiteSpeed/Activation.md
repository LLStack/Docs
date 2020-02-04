---
title: LiteSpeed 激活
sidebarDepth: 3
---


# LiteSpeed 激活

LiteSpeed 是一款商用 Web 软件，不像 Apache HTTPD、Nginx、Lighttpd 等开源软件可以直接安装使用。我们需要获得 LiteSpeed 授权。

## 免费版序列号

以往 LiteSpeed 提供限制400并发的免费策略，但是得益于性能的优化低配置大流量的场景很常见，所以400并发限制了网站的想象力。 所以目前的免费策略是 LiteSpeed 免费版不做任何性能限制，**但被安装的服务器配置不能超过2G内存。**

::: danger 策略
LSWS 本身最大占用 1核心 CPU，服务器物理内存最大不超过 2G。   即可使用免费许可证，最多一个主域名，无限子域名。。
:::

**所以推荐的配置是： 1核心2G内存的云服务器。** 

当然我们也可以在有极大访问量后选择购买付费版本，同配置的服务器下，LiteSpeed 会比 Apache HTTPD、Nginx 有更好的表现而且性能更好。

### 那么低的配置可以运行网站吗？

完全可以，绝大部分网站2G内存完全可以使用，优化得当的情况下日 1W PV 的 WordPress 完全不是问题。

许可证只是限制 LSWS 本身安装的服务器在不超过2G内存的服务器上。 对于一些流量较高的网站建议仅将 LiteSpeed Web Server 和 PHP 运行在本地服务器上。 MySQL、Redis 等软件完全可以放在同内网的其他服务器上。相关静态文件则可以托管在CDN或者对象存储上降低负载压力。

### 申请教程

一、进入 **[LiteSpeed 许可证](https://store.litespeedtech.com/store/cart.php?aff=254&gid=2)** 购买页，选择对应的授权。

二、选择 **Free Starter** 即免费版，点击 **Order Now**。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549384138376.png)

三、直接右侧 **Continue。 **看到结算周期是月付，不要怀疑，LiteSpeed 以自然月结算，每月自动续费，该版本终身免费。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549384411239.png)

四、然后进入结算页面，如果是付费版本可以在底部输入 九折优惠码 **NEWUSER10**。 然后右侧 **Checkout** 进行结算。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549384471175.png)

五、如果未登陆会进行注册，是 WHMCS 结算系统，所以我们本机IP所在国家和注册信息的国家一定要填写正确。 不然会被判断为欺诈。

已经注册并购买过的用户可以购买多个 **Free Start** 证书。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549384600996.png)

六、在 **[My Services](https://store.litespeedtech.com/store/clientarea.php?action=services)** 中可以看到我们购买的授权。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549384837823.png)

七、红框中的 **Serial No.** 就是我们的序列号了，这里是我演示的`KJuH-Demo-LLSt-ackm`

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549385019261.png)

**（重要）**八、当我们在一台服务器中要重装 LiteSpeed 后，或者授权要转让等等环节，需要在底部点击 **Release License** 才能重装很重新使用。  该按钮只有在激活后才会出现。 

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549385118192.png)

九、如上图，当授权稳定使用后且服务器IP不会更换，那我们可以 **Lock to the Registered IP** 让该授权只能授权给这个IP，保证授权泄露了不会导致出现问题。   当要更换IP了，我们也可以手动解锁。

十、如果购买后，没有及时激活，而是进入 Pending 阶段，可能是被系统误认为欺诈。LiteSpeed 会在工作时间内进行激活。 期间如果要试用 LLStack ，建议参考下面试用 15天试用密钥激活。

## 15天试用密钥

**Free Start** 授权虽然终身免费但是有配置和主域名限制，**15天试用密钥** 则是可以体验 LiteSpeed 所有功能，但是只能体验 15 天。一个 IP 最多体验两个试用密钥也就是试用30天。

试用密钥适合大配置网站验证 LiteSpeed 功能能否满足网站需求或者短期学习试用。

### 申请教程

进入 https://www.litespeedtech.com/products/litespeed-web-server/download/get-a-trial-license

按照要求填写后，就可以在邮箱内收到试用密钥了。国内邮箱收到的速度略慢，建议试用国外邮箱接收。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549385572599.png)

然后进入邮箱，下载附件 Trial.key 即可。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549385637161.png)



::: warning 注意
LLStack 使用15天试用密钥，请将文件放置在 `/root/trial.key` 位置，才能激活。
:::

