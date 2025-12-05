export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/training/index',
    'pages/diet/index',
    'pages/body/index',
    'pages/profile/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: '练记',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#999',
    selectedColor: '#333',
    backgroundColor: '#fff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        // iconPath: 'assets/tabbar/home.png',
        // selectedIconPath: 'assets/tabbar/home-active.png'
      },
      {
        pagePath: 'pages/training/index',
        text: '训练',
        // iconPath: 'assets/tabbar/training.png',
        // selectedIconPath: 'assets/tabbar/training-active.png'
      },
      {
        pagePath: 'pages/diet/index',
        text: '饮食',
        // iconPath: 'assets/tabbar/diet.png',
        // selectedIconPath: 'assets/tabbar/diet-active.png'
      },
      {
        pagePath: 'pages/body/index',
        text: '身体',
        // iconPath: 'assets/tabbar/body.png',
        // selectedIconPath: 'assets/tabbar/body-active.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        // iconPath: 'assets/tabbar/profile.png',
        // selectedIconPath: 'assets/tabbar/profile-active.png'
      }
    ]
  }
})
