<template>
  <div class="about">
    <h1 @click="open">name : {{obj.name}} age : {{obj.age}} wife : {{obj.wife.name}}
      <h3>
        <div>pos: {{x}}, {{y}}</div>
        <div>counter:{{counter.counter}} {{names.name}}</div>
        <div>doubleCount:{{counter.doubleCount*10}} {{names.addName}}</div>
        <div><button @click="open()">change</button></div>
        Count: {{count}}
        <a @click='inc()' style='margin-right:10px'>+</a>
        <a @click='dec()'>-</a>
      </h3>
    </h1>
  </div>
</template>
<script>
  import { useMouse, useCounter } from '@vueuse/core'
  import { useCounterStore } from '../stores/counter'
  import { userNameStore } from '../stores/index'
  import {ref,reactive} from 'vue'
  export default {
    setup(){
      const counter = useCounterStore()
      const names = userNameStore()
      const obj = reactive({
        name: 'tom',
        age: 25,
        wife: {
          name: 'marry',
          age: 22
        },
      })

      function open(){
        counter.increment()
        names.longName()
      }
      const { x, y } = useMouse()
      const { count, inc, dec } = useCounter()
      return { x, y,count,obj,inc, dec,counter,open,names}
    }
  }
</script>
<style>
html, body, h1, h2, h3, p {
  user-select: none;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
