---
home: true
heroImage:  https://www.llstack.com/llstack.svg
heroText: LLStack & OLStack
tagline: 轻量、高性能的 (Open)LiteSpeed+PHP+MySQL 运行环境
actionText: 快速上手 →
actionLink: /start/
footer: MIT Licensed | Copyright © 2019-present LLStack.com
meta:
  - name: description
    content: LLStack - 基于(Open)LiteSpeed的一站式高性能PHP网站解决方案/一键包，这是一款提供便捷、纯粹的 (Open)LiteSpeed+PHP+MySQL 运行环境的一键包。以 (Open)LiteSpeed Native 原生环境为基础，而不必安装过分其他厚重冗杂的软件环境。提供图形化配置面板，新手编辑配置再不用对着黑底白字的一串英文发愁。包括但不限于 LSCache、HTTP/3（QUIC)、TLS1.3、PageSpeed、Brotli 等性能级扩展开箱即用。
  - name: keywords
    content: LLStack OLStack OpenLiteSpeed LiteSpeed 一键包 OpenLiteSpeed一键包 LiteSpeed一键包 LiteSpeed面板 Docker LiteSpeed容器 APPNode LSCache QUIC
---

<div class="features">
  <div class="feature">
    <h2>简洁至上</h2>
    <p>以 (Open)LiteSpeed Native 原生环境为基础，而不必安装过分其他厚重冗杂的软件环境。</p>
  </div>
  <div class="feature">
    <h2>便捷直观</h2>
    <p>(Open)LiteSpeed 提供图形化配置面板，新手编辑配置再不用对着黑底白字的一串英文发愁</p>
  </div>
  <div class="feature">
    <h2>澎湃性能</h2>
    <p>包括但不限于 LSCache、HTTP/3（QUIC)、TLS1.3、PageSpeed、Brotli 等性能级扩展开箱即用。</p>
  </div>
</div>

### 快速上手

::: tip 请看部署文档
这里列举了简单的安装命令，为了更好的配置环境建议查看详细文档。
:::

#### OpenLiteSpeed 社区版

**OLStack-容器版安装：**

```bash
curl -sSL https://get.daocloud.io/docker | sh
curl -L https://get.daocloud.io/docker/compose/releases/download/1.25.3/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose

git clne https://github.com/LLStack/OLStack.git
cd OLStack
docker-compose up -d
```

[部署文档](/ols/)

#### LiteSpeed 企业版

**LLStack-轻量版安装：**

``` bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ivmm/LLStack/master/install.sh)" 2>&1 | tee llstack-all.log
```

[部署文档](/lsws/install/)

**友情链接：**

[米饭粑](https://www.mf8.biz/)

**友情链接：**

[米饭粑](https://www.mf8.biz/)
