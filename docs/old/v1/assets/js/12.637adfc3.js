(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{178:function(t,a,s){"use strict";s.r(a);var n=s(0),p=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"磁盘挂载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#磁盘挂载","aria-hidden":"true"}},[t._v("#")]),t._v(" 磁盘挂载")]),t._v(" "),s("p",[t._v("如果咱们的云服务器有购买多余的云盘，我们需要在安装 LLStack 之前挂载好磁盘。")]),t._v(" "),s("p",[t._v("推荐将磁盘挂载至： "),s("code",[t._v("/home")]),t._v(" 目录")]),t._v(" "),s("h2",{attrs:{id:"自动挂载脚本（推荐）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动挂载脚本（推荐）","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动挂载脚本（推荐）")]),t._v(" "),s("p",[t._v("我们推荐使用自动化挂载脚本来自动识别可以挂载的磁盘，然后用户可以自定义想要挂载的磁盘。")]),t._v(" "),s("p",[s("strong",[t._v("运行下列语句一键运行：")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("sh -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.githubusercontent.com/ivmm/Auto-fdisk/master/auto_fdisk.sh"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" 2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tee")]),t._v(" Auto-fdisk.log\n")])])]),s("p",[s("strong",[t._v("图文教程：")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://pics.mf8.biz/picgo20190228152828.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("视频教程：")])]),t._v(" "),s("p",[t._v("http://www.365yg.com/i6435830537536930306/#mid=1558373688538114")]),t._v(" "),s("h2",{attrs:{id:"面板管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#面板管理","aria-hidden":"true"}},[t._v("#")]),t._v(" 面板管理")]),t._v(" "),s("p",[t._v("基于 APPNode 实现。原帖地址：https://bbs.appnode.com/thread-531.htm")]),t._v(" "),s("p",[t._v("进入软件管家，搜索并安装“存储管理”应用，然后可以根据你自己的需要，创建分区并挂载到指定目录下。\n"),s("img",{attrs:{src:"https://bbs.appnode.com/upload/attach/201705/26/113912hlld2hzhhhhsdxt2.png",alt:"img"}})]),t._v(" "),s("p",[t._v("下面演示一下新硬盘分区和挂载的基本操作：\nxvdc 是新增加的一块硬盘，现在我要将它分区并挂载到 /data 目录下。")]),t._v(" "),s("p",[s("strong",[t._v("一、设置分区表")]),t._v("\n可设置为 GPT 格式和 MBR 格式。\n* GPT：新一代分区表格式，支持2T以上的磁盘\n* MBR(MSDOS)：传统分区表格式\n如果硬盘较大，请选择GPT，不然就选择MBR。\n"),s("img",{attrs:{src:"https://bbs.appnode.com/upload/attach/201705/26/114048btzsmihxx9jp5s9w.png",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("二、创建分区")]),t._v("\n点击“空闲分区”后面的“创建分区”按钮，进行创建分区操作：\n"),s("img",{attrs:{src:"https://bbs.appnode.com/upload/attach/201705/26/114120otnkb9b8nijv5973.png",alt:"img"}}),t._v("\n创建成功后，分区列表变成：\n"),s("img",{attrs:{src:"https://bbs.appnode.com/upload/attach/201705/26/114440df8cfxlc3wnbph8n.png",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("三、格式化分区")]),t._v("\n分区创建好后，需要格式化后才能使用，点击刚才创建的分区后面的“格式化”按钮，进行格式化操作。\n优先选择使用 ext4 或 xfs 文件系统，性能更高：\n"),s("img",{attrs:{src:"https://bbs.appnode.com/upload/attach/201705/26/114444s11ysoeh9w9r73a5.png",alt:"img"}}),t._v("\n格式化过程：\n"),s("img",{attrs:{src:"https://bbs.appnode.com/upload/attach/201705/26/114646um1bq9by0o400b8c.png",alt:"img"}}),t._v("\n格式化成功后，分区列表变成：\n"),s("img",{attrs:{src:"https://bbs.appnode.com/upload/attach/201705/26/114712iyysllzjacc99sal.png",alt:"img"}})]),t._v(" "),s("p",[s("strong",[t._v("四、挂载")]),t._v("\n格式化好的分区后面会多出一个“挂载”按钮，点击进行挂载设置：\n"),s("img",{attrs:{src:"https://bbs.appnode.com/upload/attach/201705/26/114915ojoo9hmeppou9x92.png",alt:"img"}}),t._v("\n添加挂载点，输入 /data，注意要勾选上“自动挂载”，否则重启后这个分区将不会挂载到 /data：\n"),s("img",{attrs:{src:"https://bbs.appnode.com/upload/attach/201705/26/114925bkiyfyrrmf6yxvyf.png",alt:"img"}}),t._v("\n挂载完成，在分区列表中可以看到已经挂载到 /data 目录下了：\n"),s("img",{attrs:{src:"https://bbs.appnode.com/upload/attach/201705/26/115226zjx4x3fjj3ta0v02.png",alt:"img"}})])])}],!1,null,null,null);a.default=p.exports}}]);