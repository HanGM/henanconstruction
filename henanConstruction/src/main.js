// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'//路由组件
import store from './store'//数据仓库组件
import axios from 'axios'//ajax组件
import ElementUI from 'element-ui'//element-ui插件
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'//Vue图片懒加载插件
import Bscroll from './components/Bscroll'//引入回弹组件
import Media from './components/Media'//引入媒体对象组件
import '../node_modules/swiper/dist/css/swiper.css'//引入轮播图的css文件
import App from './App'

Vue.config.productionTip = false
Vue.prototype.ajax = axios
Vue.prototype.baseURL = 'http://560af7d6.nat123.cc'
Vue.use(ElementUI)
Vue.use(VueLazyLoad,{
	preLoad: 1.3,	//预加载高度，默认1.3倍屏
  	attempt: 1,//加载错误后最大尝试次数
	error: require('@/assets/img/error.png'),//图片加载失败时显示的图片
	loading: require('@/assets/img/loading.gif'),//图片加载状态下显示的图片
})
Vue.component('bscroll',Bscroll)//注册回弹全局组件
Vue.component('media',Media)//注册媒体对象组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
