export default {
  title: '',
  base: '/iot-note/',
  themeConfig: {
    siteTitle: '物联网笔记',
    // logo: '/images/logo.png',

    nav: [
      { text: '概念', link: '/concepts/architecture'},
      { text: '快速开始', link: '/quickstart/connect-your-first-device' },
      { text: '教程', link: '/tutorials/' },
      { text: 'API', link: '/api/' },
      {
        text: 'SDK',
        items: [
          {
            text: '后端',
            items: [
              { text: 'Java', link: '/sdk/java/' },
              { text: 'Go', link: '/sdk/go/' },
              { text: 'Node', link: '/sdk/node/' },
              { text: 'Python', link: '/sdk/python/' }
            ]
          },
          {
            text: '前端',
            items: [
              { text: 'Javascript', link: '/sdk/javascript/' },
              { text: 'Vue', link: '/sdk/vue/' },
              { text: 'React', link: '/sdk/react/' }
            ]
          },
          {
            text: '移动端',
            items: [
              { text: 'Android', link: '/sdk/android/' },
              { text: 'iOS', link: '/sdk/ios/' }
            ]
          },
          {
            text: '设备', link: '/sdk/device/'
          },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lancemao/iot-note' }
    ],

    sidebar: {
      '/concepts/': [
        {
          text: '基础',
          collapsible: true,
          items: [
            { text: '架构', link: '/concepts/architecture' },
            { text: '租户', link: '/concepts/tenant' },
            { text: '应用', link: '/concepts/application' },
            { text: '产品', link: '/concepts/product' },
          ]
        },
        {
          text: '设备',
          collapsible: true,
          items: [
            { text: '设备分类', link: '/concepts/device/category' },
            { text: '设备注册', link: '/concepts/device/register' },
            { text: '设备认证', link: '/concepts/device/authentication' },
            { text: '设备注销', link: '/concepts/device/delete' },
          ]
        },
        {
          text: '协议',
          collapsible: true,
          items: [
            { text: 'MQTT', link: '/concepts/protocol/mqtt' },
            { text: 'CoAP', link: '/concepts/protocol/coap' },
            { text: 'AMQP', link: '/concepts/protocol/amqp' },
            { text: 'HTTP(s)', link: '/concepts/protocol/http' },
          ]
        },
        {
          text: '数据',
          collapsible: true,
          items: [
            { text: '格式规范', link: '/concepts/data/spec' },
            { text: '数据分析', link: '/concepts/data/analyze' },
          ]
        },
      ],

      '/quickstart/': [
        {
          items: [
            { text: '连接第一台设备', link: '/quickstart/connect-your-first-device' },
            { text: '设置规则和动作', link: '/quickstart/set-rules-and-actions' },
            { text: '数据分析', link: '/quickstart/data-analyze' },
          ]
        }
      ],

      '/api/': [
        {
          text: '帐号管理',
          collapsible: true,
          items: [
            { text: '注册帐号', link: '/api/account/register' },
            { text: '登录', link: '/api/account/login' },
            { text: '登出', link: '/api/account/logout' },
            { text: '删除帐号', link: '/api/account/delete' },
          ]
        },
        {
          text: '租户管理',
          collapsible: true,
          items: [
            { text: '创建租户', link: '/api/tenant/create' },
            { text: '获取租户 Access Token', link: '/api/tenant/get-access-token' },
            { text: '删除租户', link: '/api/tenant/delete' },
          ]
        },
        {
          text: '应用管理',
          collapsible: true,
          items: [
            { text: '创建应用', link: '/api/application/create' },
            { text: '获取应用列表', link: '/api/application/list' },
            { text: '获取应用详情', link: '/api/application/detail' },
            { text: '更新应用', link: '/api/application/update' },
            { text: '删除租户', link: '/api/application/delete' },
          ]
        },
        {
          text: '设备管理',
          collapsible: true,
          items: [
            { text: '设备注册', link: '/api/device/register' },
            { text: '设备认证', link: '/api/device/auth' },
            { text: '设备注销', link: '/api/device/logout' },
            { text: '设备删除', link: '/api/device/delete' },
          ]
        },
        {
          text: '数据分析',
          collapsible: true,
          items: [
            { text: '查询', link: '/api/data/query' },
          ]
        }
      ],

      '/sdk/java/': [
        {
          text: '设备管理',
          collapsible: true,
          items: [
            { text: '设备注册', link: '/sdk/java/register' },
            { text: '设备认证', link: '/sdk/java/auth' },
            { text: '设备注销', link: '/sdk/java/logout' },
            { text: '设备删除', link: '/sdk/java/delete' },
          ]
        }
      ],

      '/sdk/go/': [
        {
          text: '设备管理',
          collapsible: true,
          items: [
            { text: '设备注册', link: '/sdk/go/register' },
            { text: '设备认证', link: '/sdk/go/auth' },
            { text: '设备注销', link: '/sdk/go/logout' },
            { text: '设备删除', link: '/sdk/go/delete' },
          ]
        }
      ],

      '/sdk/node/': [
        {
          text: '设备管理',
          collapsible: true,
          items: [
            { text: '设备注册', link: '/sdk/node/register' },
            { text: '设备认证', link: '/sdk/node/auth' },
            { text: '设备注销', link: '/sdk/node/logout' },
            { text: '设备删除', link: '/sdk/node/delete' },
          ]
        }
      ],

      '/sdk/python/': [
        {
          text: '设备管理',
          collapsible: true,
          items: [
            { text: '设备注册', link: '/sdk/python/register' },
            { text: '设备认证', link: '/sdk/python/auth' },
            { text: '设备注销', link: '/sdk/python/logout' },
            { text: '设备删除', link: '/sdk/python/delete' },
          ]
        }
      ],
    },

    footer: {
      message: 'Released under the MIT License.'
    }
  }
}