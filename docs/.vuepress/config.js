module.exports = {
  title: 'agel-form | 使用文档',
  description: '基于 element-ui form 的二次封装加强组件',
  dest: './distdocs',
  base: '/agel-form/',
  themeConfig: {
    updatePopup: true,
    nav: [
      { text: '首页', link: '/' },
      // { text: '教程', link: '/example' },
      {
        text: '教程',
        items: [
          { text: '使用教程', link: '/example' },
          { text: '自定义组件', link: '/custom-component' }
        ]
      },
      { text: 'API', link: '/api' },
      { text: '更新日志', link: '/log' },
      { text: 'Github', link: 'https://github.com/agrass-GitHub/agel-form' }
    ],
  },
};
