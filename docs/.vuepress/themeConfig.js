// VuePress v1 theme config (UTF-8)
const nav = [
  { text: '首页', link: '/' },
  {
    text: '选择栈',
    items: [
      { text: 'OLStack', link: '/ols/' },
      { text: 'LLStack', link: '/lsws/install/' },
    ],
  },
  { text: '虚拟主机', link: '/vhost/' },
  {
    text: 'OLS 文档',
    items: [
      { text: 'OpenLiteSpeed', link: '/ols/openlitespeed/' },
      { text: 'PHP', link: '/ols/php/' },
      { text: 'MySQL', link: '/ols/mysql/' },
      { text: 'Redis', link: '/ols/redis/' },
      { text: 'Dockerfiles', link: '/ols/dockerfiles/' },
    ],
  },
  {
    text: 'LSWS 文档',
    items: [
      { text: 'LiteSpeed', link: '/lsws/LiteSpeed/' },
      { text: 'PHP', link: '/lsws/php/' },
      { text: 'MySQL', link: '/lsws/mysql/' },
      { text: 'Redis', link: '/lsws/redis/' },
    ],
  },
  {
    text: '其它',
    items: [
      { text: '防火墙', link: '/others/firewall.html' },
      { text: '安全组', link: '/others/Security-group.html' },
      { text: '分区', link: '/others/fdisk.html' },
    ],
  },
  { text: '旧版文档（LSWS v0）', link: 'https://old-v0.llstack.com/' },
]

const sidebar = {
  '/vhost/': getVhostSidebar('虚拟主机', 'HTTPS 配置'),
  '/lsws/LiteSpeed/': getLiteSpeedSidebar('入门', '激活', 'WAF'),
}

module.exports = {
  nav,
  sidebar,
  repo: 'https://github.com/LLStack',
  docsRepo: 'https://github.com/LLStack/Docs',
  docsDir: 'docs',
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页',
  record: '蜀ICP备15006212号-6',
  recordLink: 'https://beian.miit.gov.cn/',
}

function getVhostSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [''],
    },
    {
      title: groupB,
      collapsable: false,
      children: ['HTTPS'],
    },
  ]
}

function getLiteSpeedSidebar(groupA, groupB, groupC) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [''],
    },
    {
      title: groupB,
      collapsable: false,
      children: ['Activation'],
    },
    {
      title: groupC,
      collapsable: false,
      children: ['waf'],
    },
  ]
}
