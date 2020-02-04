(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{230:function(t,s,e){"use strict";e.r(s);var r=e(2),a=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"https-配置"}},[t._v("HTTPS 配置")]),t._v(" "),e("p",[t._v("本文将介绍普通HTTP虚拟主机如何升级为HTTPS，以及 LiteSpeed HTTPS 的进阶设置。")]),t._v(" "),e("p",[t._v("一、登陆 LiteSpeed 管理控制台。  一般是 , "),e("code",[t._v("https://<你的公网ip>:7080")]),t._v(" ，")]),t._v(" "),e("p",[t._v("如果不知道账号密码，可以在 SSH 中输入："),e("code",[t._v("cat /root/defaulthtpasswd")]),t._v(" 。")]),t._v(" "),e("p",[t._v("二、进入 "),e("strong",[t._v("Configuration")]),t._v(" —— "),e("strong",[t._v("Virtual Hosts")]),t._v("，点击要配置HTTPS的域名点击 "),e("strong",[t._v("View/Edit")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pics.mf8.biz/xsj/2019/2/1549437882866.png",alt:"enter description here"}})]),t._v(" "),e("p",[t._v("三、点击 "),e("strong",[t._v("SSL")]),t._v(" ，然后再每个项目组进行编辑 "),e("strong",[t._v("Edit")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pics.mf8.biz/xsj/2019/2/1549438023001.png",alt:"enter description here"}})]),t._v(" "),e("p",[t._v("四、"),e("strong",[t._v("SSL Private Key & Certificate")]),t._v(" 我们这样编辑（这里的证书可以是任意证书，自签的都可以，到时候我们虚拟主机上的SSL设置会覆盖监听的SSL）。 SSL 格式按照 Nginx 模式下载就行，PEM格式。")]),t._v(" "),e("p",[t._v("如果 CA 中间证书和域名证书是分离的，那么 "),e("code",[t._v("Chained Certificate")]),t._v(" 需要设置为 "),e("code",[t._v("No")]),t._v("，然后CA 中间证书填写在 CA Certificate File 栏。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pics.mf8.biz/xsj/2019/2/1549438163676.png",alt:"enter description here"}})]),t._v(" "),e("p",[t._v("五、为了提升安全性，我们生成一个 生成赫尔曼（DH）密钥。")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("你的域名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/ssl/\nopenssl dhparam -out "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("你的域名"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".pem "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v(" \n")])])]),e("p",[e("strong",[t._v("示例：")])]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /home/llstack.com/ssl/\nopenssl dhparam -out llstack.com.dh.pem "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2048")]),t._v(" \n")])])]),e("p",[t._v("六、修改 "),e("strong",[t._v("Virtual Host SSL Protocol")]),t._v(" :")]),t._v(" "),e("p",[t._v("1.Protocol Version 即 协议版本，不建议勾选 SSL v3.0。  为了更高的安全性，也可以考虑不勾选 TLS v1.0。")]),t._v(" "),e("p",[t._v("2.Ciphers，填写 "),e("code",[t._v("TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:TLS13-AES-128-GCM-SHA256:TLS13-AES-128-CCM-8-SHA256:TLS13-AES-128-CCM-SHA256:EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+ECDSA+AES128:EECDH+aRSA+AES128:RSA+AES128:EECDH+ECDSA+AES256:EECDH+aRSA+AES256:RSA+AES256:EECDH+ECDSA+3DES:EECDH+aRSA+3DES:RSA+3DES:!MD5;")])]),t._v(" "),e("p",[t._v("3.Enable DH Key Exchange，勾选为 "),e("code",[t._v("Yes")])]),t._v(" "),e("p",[t._v("4.DH Parameter，填写第五步生成的文件，例如 "),e("code",[t._v("/home/llstack.com/ssl/llstack.com.dh.pem")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pics.mf8.biz/xsj/2019/2/1549440558108.png",alt:"enter description here"}})]),t._v(" "),e("p",[t._v("七、"),e("strong",[t._v("Security & Features")]),t._v(" ，参照图片填写。  QUIC 推荐开启。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pics.mf8.biz/xsj/2019/2/1549440830920.png",alt:"enter description here"}})]),t._v(" "),e("p",[t._v("八、进入 "),e("strong",[t._v("Configuration")]),t._v(" —— "),e("strong",[t._v("Listeners")]),t._v("，对名叫 "),e("code",[t._v("HTTPS")]),t._v(" 的监听器进行编辑 "),e("code",[t._v("View/Edit")]),e("img",{attrs:{src:"https://pics.mf8.biz/xsj/2019/2/1549717505006.png",alt:"enter description here"}})]),t._v(" "),e("p",[t._v("九、在 "),e("strong",[t._v("Virtual Host Mappings")]),t._v(" 处，选择 "),e("strong",[t._v("ADD")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pics.mf8.biz/xsj/2019/2/1549441093401.png",alt:"enter description here"}})]),t._v(" "),e("p",[t._v("十、选择要使用的 Virtual Host ，然后输入域名。 点击 "),e("strong",[t._v("Save")]),t._v(" 保存。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pics.mf8.biz/xsj/2019/2/1549441146539.png",alt:"enter description here"}})]),t._v(" "),e("p",[t._v("十一、我估计你肯定忍上门的提示很久了，选择就可以点 "),e("code",[t._v("Graceful Restart.")]),t._v(" 进行平滑重启了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://pics.mf8.biz/xsj/2019/2/1549441217770.png",alt:"enter description here"}})])])}),[],!1,null,null,null);s.default=a.exports}}]);