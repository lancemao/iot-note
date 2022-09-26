export default {
  title: '',
  base: '/iot-note/',
  themeConfig: {
    siteTitle: '物联网笔记',
    // logo: '/images/logo.png',

    nav: [
      { text: '概念', link: '/concepts/architecture'},
      { text: '教程', link: '/tutorials/' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lancemao/iot-note' }
    ],

    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
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
    },

    footer: {
      message: 'Released under the MIT License.'
    }
  }
}