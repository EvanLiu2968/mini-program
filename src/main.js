import Vue from 'vue'
import App from './App'

//全局处理重复页面跳转详情初始化,和详情跳详情返回的bug
import MyPlugin from './minxins'
//引入store
import store from './store/index'
// 公共组件
import ParseHtml from './components/ParseHtml'

Vue.use(MyPlugin)


//把store挂载到全局
Vue.prototype.$store = store;

Vue.config.productionTip = false
App.mpType = 'app'


Vue.component('mpParseHtml', ParseHtml)

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    "pages": [
      "pages/photo/main",
      "pages/article/main",
      "pages/articledetail/main",
      "pages/mappage/main"
    ],
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "捕风捉影",
      "navigationBarTextStyle": "black"
    },
    "tabBar": {
      "backgroundColor": "#fafafa",
      "borderStyle": "white",
      "selectedColor": "#b4282d",
      "color": "#666",
      "list": [{
          "pagePath": "pages/index/main",
          "iconPath": "static/images/ic_menu_choice_nor.png",
          "selectedIconPath": "static/images/ic_menu_choice_pressed.png",
          "text": "首页"
        },
        {
          "pagePath": "pages/photo/main",
          "iconPath": "static/images/ic_menu_topic_nor.png",
          "selectedIconPath": "static/images/ic_menu_topic_pressed.png",
          "text": "照片"
        },
        {
          "pagePath": "pages/article/main",
          "iconPath": "static/images/ic_menu_sort_nor.png",
          "selectedIconPath": "static/images/ic_menu_sort_pressed.png",
          "text": "文章"
        },
        {
          "pagePath": "pages/my/main",
          "iconPath": "static/images/ic_menu_me_nor.png",
          "selectedIconPath": "static/images/ic_menu_me_pressed.png",
          "text": "我的"
        }
      ]
    }
  }
}
