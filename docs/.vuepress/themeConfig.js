module.exports = {
  nav: [
    { text: '首页', link: '/'},
    { text: '安装',
    items: [
      { text: 'OLStack', link: '/ols/' },
      { text: 'LLStack', link: '/lsws/install/' }]
    },
    { text: '虚拟主机管理', link: '/vhost/' },
    { text: 'OLS组件管理',
    items: [
      { text: 'OpenLiteSpeed', link: '/ols/openlitespeed/' },
      { text: 'PHP', link: '/ols/php/' },
      { text: 'MySQL', link: '/ols/mysql/' },
      { text: 'Redis', link: '/ols/redis/' },
      { text: 'Dockerfiles', link: '/ols/dockerfiles/' }
    ]
    },
    { text: 'LSWS组件管理',
    items: [
      { text: 'LiteSpeed', link: '/lsws/LiteSpeed/' },
      { text: 'PHP', link: '/lsws/php/' },
      { text: 'MySQL', link: '/lsws/mysql/' },
      { text: 'Redis', link: '/lsws/redis/' }
    ]
    },
    { text: '其他设置',
    items: [
    { text: '防火墙', link: '/others/firewall.html' },
    { text: '安全组', link: '/others/Security-group.html' },
    { text: '磁盘挂载', link: '/others/fdisk.html' }]
    },
    { text: '老版LSWS说明书', link: 'https://old-v0.llstack.com/' }
  ],
  sidebar: {
    '/vhost/': getvhostidebar('虚拟主机管理', 'HTTPS管理'),
    '/lsws/LiteSpeed/': getlitespeedidebar('介绍', '激活', 'WAF'),
  },
  theme: 'theme-default',
    //Git编辑页面
    repo: 'https://github.com/LLStack',
    repoLabel: '查看源码',
    docsRepo: '/LLStack/Docs',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！'
      // 备案
    record: '浙ICP备15006212号-6',
    recordLink: 'https://beian.miit.gov.cn/,
    //cyberSecurityRecord: '公安部备案文案',
    //cyberSecurityLink: '公安部备案指向链接',
}

function getvhostidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ''
      ]
    },
    {
      title: groupB,
      collapsable: false,
      sidebarDepth: 3,
      children: [
        'HTTPS'
      ]
    }
  ]
}

function getlitespeedidebar (groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: true,
      sidebarDepth: 2,
      children: [
        ''
      ]
    },
    {
      title: groupB,
      collapsable: false,
      sidebarDepth: 3,
      children: [
        'Activation'
      ]
    },
    {
      title: groupC,
      collapsable: false,
      sidebarDepth: 3,
      children: [
        'waf'
      ]
    }
  ]
}
