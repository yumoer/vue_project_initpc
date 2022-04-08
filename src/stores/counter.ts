import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter',{
  state: () => ({
    counter: 200
  }),
  getters: {  // 计算属性
    doubleCount: (state) => state.counter * 2
  },
  actions: { // 异步方法
    increment() {
      this.counter++
    }
  }
})
