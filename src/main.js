// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
//加载vue store
import store from './store/index'
//图片懒加载 ----------------------------------------
import VueLazyload from 'vue-lazyload';
//初始化
//加载自己的js ----------------------------------------
import MyPlugin from '../static/js/plugin.js';
Vue.use(MyPlugin)
// 图片懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  //loading: ‘../static/loading.gif',
  // loading: require('./assets/loading.gif'),
  attempt: 1
})
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 将创建的共享数据对象，挂载到 Vue 实例中
  // 所有的组件，就可以直接用 store 中获取全局的数据了
  store,
  components: { App },
  template: '<App/>'
})
