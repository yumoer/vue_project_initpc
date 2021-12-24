import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "group-foo" */ '@/pages/Home'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import(/* webpackChunkName: "group-foo" */ '@/pages/About'),
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import(/* webpackChunkName: "group-foo" */ '@/pages/Message'),
    },
    {path:"*",redirect:'/'} //默认跳转
  ]
})
