---
title: 启用 WAF 规则
---

# 启用 WAF 规则

在 LSWS Web Admin 控制台中，有一个**Web应用程序防火墙（WAF）**部分，它允许启用 Mod_Security 并在LSWS本机服务器上添加规则集。

导航到  **Server > Security**

![](https://pics.mf8.biz/picgo20190225145731.png)

在 **Web Application Firewall (WAF)** 部分中，您可以选择是否启用“ **请求内容深度检查”**。此功能等同于Apache的ModSecurity，它可用于通过将请求与已知签名进行匹配来检测和阻止具有恶意的请求。

您可以选择许多规则集，例如：

- OWASP
- Comodo
- Atomicorp
- Imunify360

LSWS 与这些规则集兼容，当然也支持其他的 Mod_Security 规则集，如果熟悉制作ModSecurity规则集，也可以定义自己的规则。

**让我们看一下如何使用 Comodo 作为示例启用 Mod_Security 规则集。**

[Comodo](https://waf.comodo.com/)是由Comodo团队创建的Mod_Security规则集。它为LiteSpeed Web Server上运行的Web应用程序提供实时保护。其功能包括：

- 保护敏感的客户数据
- 满足PCI合规性要求
- 阻止未经授权的访问
- 防止SQL注入和跨站点脚本（XSS）攻击

## 下载和提取规则

首先，下载与Litespeed兼容的Comodo规则。

```bash
cd /usr/local/lsws/conf
wget https://waf.comodo.com/api/cpanel_litespeed_vendor
unzip cpanel_litespeed_vendor
cd comodo_litespeed/
mv rules.conf.main rules.conf
```

上述步骤下载了 Comodo Litespeed 规则，并重命名 `rules.conf.main`为`rules.conf`。这是包含所有规则的主文件。我们可以在WebAdmin控制台中引用此主文件。

## 添加WAF规则集

导航到 **Configuration > Server > Security > WAF Rule Set**

![](https://pics.mf8.biz/picgo20190225145936.png)

单击 **ADD** 以编辑 **WAF规则集**。

![](https://pics.mf8.biz/picgo20190225150228.png)

- **Name**: `Comodo Litespeed`
- **Action**: `None`
- **Enabled**: `Yes`
- **Rules Definition**: `Include $SERVER_ROOT/conf/comodo_litespeed/rules.conf`

单击  **Save** 以激活规则。

可以在 **Rules Definition** 区域中包含任意数量的规则文件。

我们输入的文件 `rules.conf` 是 Comodo 主文件，按顺序包含所有规则。它与手动输入以下内容相同（需要再加上文件所在物理路径前缀）：

```
Include 00_Init_Initialization.conf
Include 01_Init_AppsInitialization.conf
Include 02_Global_Generic.conf
Include 03_Global_Agents.conf
Include 04_Global_Domains.conf
Include 05_Global_Incoming.conf
Include 06_Global_Backdoor.conf
Include 07_XSS_XSS.conf
Include 08_Global_Other.conf
Include 09_Bruteforce_Bruteforce.conf
Include 10_HTTP_HTTP.conf
Include 11_HTTP_HTTPDoS.conf
Include 12_HTTP_Protocol.conf
Include 13_HTTP_Request.conf
Include 14_Outgoing_FilterGen.conf
Include 15_Outgoing_FilterASP.conf
Include 16_Outgoing_FilterPHP.conf
Include 17_Outgoing_FilterSQL.conf
Include 18_Outgoing_FilterOther.conf
Include 19_Outgoing_FilterInFrame.conf
Include 20_Outgoing_FiltersEnd.conf
Include 21_PHP_PHPGen.conf
Include 22_SQL_SQLi.conf
Include 23_ROR_RORGen.conf
Include 24_Apps_Joomla.conf
Include 25_Apps_JComponent.conf
Include 26_Apps_WordPress.conf
Include 27_Apps_WPPlugin.conf
Include 28_Apps_WHMCS.conf
Include 29_Apps_Drupal.conf
Include 30_Apps_OtherApps.conf
```

如果使用一些商业规则集（如Atomic规则集）或您自己的规则集（没有这样的主文件），您有两个选择：

- 在“ **Rules Definition”**字段中逐个包含绝对路径的**规则**。
- 创建一个主文件以包含具有完整路径的所有规则，然后在“ **Rules Definition”**字段中仅包含该主文件。

如果包含mod_security的多个rul文件，则必须按正确的顺序包含这些文件，以使它们正常工作。

## 启用防火墙

导航到**Configuration > Server > Security > Web Application Firewall (WAF)**

![](https://pics.mf8.biz/picgo20190225150703.png)

- **Enable WAF**: `Yes`
- **Log Level**: `0`
- **Default Action**: `deny,log,status:403`
- **Scan Request Body**: `Yes` (If set to `Yes` will scan post request body)
- **Temporary File Path**: `/tmp`
- **Disable .htaccess Override**: `Not Set`
- **Enable Security Audit Log**: `Not Set`
- **Security Audit Log**: `$SERVER_ROOT/logs/security_audit.log`

单击“ **Save”**以启用防火墙，然后执行 “**Graceful Restart.**” 即 重启 LiteSpeed。 

## 测试ModSecurity规则集

### 方法1

要检查CWAF是否有保护，请发送此请求：

```bash
http://$server_domain/?a=b AND 1=1
```

如果它正常工作，服务器应该响应403状态代码。

![](https://pics.mf8.biz/picgo20190225151248.png)

### 方法2：

您可以通过发送GET或POST请求参数来检查CWAF是否正常工作 `cwaf_test_request=a12875a9e62e1ecbcd1dded1879ab06949566276`

像这样：

```
http://$server_domain/?cwaf_test_request=a12875a9e62e1ecbcd1dded1879ab06949566276
```

如果Web服务器返回403 Forbidden状态，则CWAF正常工作。