const navbar = [
  { text: '首页', link: '/' },
  {
    text: '安装',
    children: [
      { text: 'OLStack', link: '/ols/' },
      { text: 'LLStack', link: '/lsws/install/' },
    ],
  },
  { text: '虚拟主机管理', link: '/vhost/' },
  {
    text: 'OLS组件管理',
    children: [
      { text: 'OpenLiteSpeed', link: '/ols/openlitespeed/' },
      { text: 'PHP', link: '/ols/php/' },
      { text: 'MySQL', link: '/ols/mysql/' },
      { text: 'Redis', link: '/ols/redis/' },
      { text: 'Dockerfiles', link: '/ols/dockerfiles/' },
    ],
  },
  {
    text: 'LSWS组件管理',
    children: [
      { text: 'LiteSpeed', link: '/lsws/LiteSpeed/' },
      { text: 'PHP', link: '/lsws/php/' },
      { text: 'MySQL', link: '/lsws/mysql/' },
      { text: 'Redis', link: '/lsws/redis/' },
    ],
  },
  {
    text: '其他设置',
    children: [
      { text: '防火墙', link: '/others/firewall.html' },
      { text: '安全组', link: '/others/Security-group.html' },
      { text: '磁盘挂载', link: '/others/fdisk.html' },
    ],
  },
  { text: '老版LSWS说明书', link: 'https://old-v0.llstack.com/' },
]

const sidebar = {
  '/vhost/': getVhostSidebar('虚拟主机管理', 'HTTPS管理'),
  '/lsws/LiteSpeed/': getLiteSpeedSidebar('介绍', '激活', 'WAF'),
}

module.exports = {
  navbar,
  sidebar,
  repo: 'https://github.com/LLStack',
  docsRepo: 'https://github.com/LLStack/Docs',
  docsDir: 'docs',
  editLink: true,
  editLinkText: '帮助我们改善此页面！',
  record: '浙ICP备15006212号-6',
  recordLink: 'https://beian.miit.gov.cn/',
}

function getVhostSidebar(groupA, groupB) {
  return [
    {
      text: groupA,
      collapsible: false,
      children: [''],
    },
    {
      text: groupB,
      collapsible: false,
      children: ['HTTPS'],
    },
  ]
}

function getLiteSpeedSidebar(groupA, groupB, groupC) {
  return [
    {
      text: groupA,
      collapsible: true,
      children: [''],
    },
    {
      text: groupB,
      collapsible: false,
      children: ['Activation'],
    },
    {
      text: groupC,
      collapsible: false,
      children: ['waf'],
    },
  ]
}
