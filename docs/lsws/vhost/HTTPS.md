# HTTPS 配置

本文将介绍普通HTTP虚拟主机如何升级为HTTPS，以及 LiteSpeed HTTPS 的进阶设置。

一、登陆 LiteSpeed 管理控制台。  一般是 , `https://<你的公网ip>:7080` ，

如果不知道账号密码，可以在 SSH 中输入：`cat /root/defaulthtpasswd` 。 

二、进入 **Configuration** —— **Virtual Hosts**，点击要配置HTTPS的域名点击 **View/Edit**

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549437882866.png)

三、点击 **SSL** ，然后再每个项目组进行编辑 **Edit**

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549438023001.png)

四、**SSL Private Key & Certificate** 我们这样编辑（这里的证书可以是任意证书，自签的都可以，到时候我们虚拟主机上的SSL设置会覆盖监听的SSL）。 SSL 格式按照 Nginx 模式下载就行，PEM格式。

如果 CA 中间证书和域名证书是分离的，那么 `Chained Certificate` 需要设置为 `No`，然后CA 中间证书填写在 CA Certificate File 栏。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549438163676.png)

五、为了提升安全性，我们生成一个 生成赫尔曼（DH）密钥。

```bash
cd /home/<你的域名>/ssl/
openssl dhparam -out <你的域名>.pem 2048 
```

**示例：**

```bash
cd /home/llstack.com/ssl/
openssl dhparam -out llstack.com.dh.pem 2048 
```

六、修改 **Virtual Host SSL Protocol** :

1.Protocol Version 即 协议版本，不建议勾选 SSL v3.0。  为了更高的安全性，也可以考虑不勾选 TLS v1.0。

2.Ciphers，填写 `TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:TLS13-AES-128-GCM-SHA256:TLS13-AES-128-CCM-8-SHA256:TLS13-AES-128-CCM-SHA256:EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+ECDSA+AES128:EECDH+aRSA+AES128:RSA+AES128:EECDH+ECDSA+AES256:EECDH+aRSA+AES256:RSA+AES256:EECDH+ECDSA+3DES:EECDH+aRSA+3DES:RSA+3DES:!MD5;`

3.Enable DH Key Exchange，勾选为 `Yes`

4.DH Parameter，填写第五步生成的文件，例如 `/home/llstack.com/ssl/llstack.com.dh.pem`

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549440558108.png)

七、**Security & Features** ，参照图片填写。  QUIC 推荐开启。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549440830920.png)

八、进入 **Configuration** —— **Listeners**，对名叫 `HTTPS` 的监听器进行编辑 `View/Edit`![enter description here](https://pics.mf8.biz/xsj/2019/2/1549717505006.png)

九、在 **Virtual Host Mappings** 处，选择 **ADD**

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549441093401.png)

十、选择要使用的 Virtual Host ，然后输入域名。 点击 **Save** 保存。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549441146539.png)

十一、我估计你肯定忍上门的提示很久了，选择就可以点 ` Graceful Restart.` 进行平滑重启了。

![enter description here](https://pics.mf8.biz/xsj/2019/2/1549441217770.png)