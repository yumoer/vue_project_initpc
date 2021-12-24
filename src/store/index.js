// Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
// 核心模块：State、Mutations、Actions、Module、Getters
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    name: "yumoer",
    age: 30,
    count: 0,
    index: {} //首页信息
  },
  getters:{
    //getters 相当于是vuex的计算属性,主要作用是对state中的值进行处理
    jia(state,num){
      return state.age + 1;
    },
    jian(state,num){
      return state.age - 1;
    }
  },
  mutations: {
    //vuex用于修改state中数据的方法
    gaiming(state, name) {
      state.name = name
    },
    getIndex(state, indexData) {
      state.index = indexData
    }
  },
  actions:{
    //actions 用于异步执行vuex mutations中的方法 它不会直接修改state而是作用于mutations
    //actions 中的方法可以接收一个context参数,这里的context就指vuex
    increment (context) {
      setTimeout(function(){
        //调用方式跟在.vue中一样
        context.commit('gaiming',"abc")
        //1秒后调用mutations中的gaiming方法,名字已经修改了
        console.log(context.state.name);
      }, 1000)
    }
  },
  modules: {
    // 子状态树
    // a: model1
  }
});
