// 配置
window.Config = {

  // 站点名
  SiteName: '简单导航 服务器状态监控',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur2238195-144cf78b720b587a3811c0b4',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 90,

  // 导航栏菜单
  Navi: [
    {
      text: '晓空blog',
      url: 'https://blog.moeworld.tech/'
    },
    {
      text: '关于',
      url: 'https://about.moeworld.top/'
    }
  ]
};
