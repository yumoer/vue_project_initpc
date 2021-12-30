<template>
  <div class="about">
    <h1 @click="open">This is an about {{ count }} name : {{obj.name}} age : {{obj.age}} wife : {{obj.wife.name}}</h1>
  </div>
</template>
<script>
  import {ref,reactive} from 'vue'
  export default {
    setup(){
      const count = ref(22)
      const obj = reactive({
        name: 'tom',
        age: 25,
        wife: {
          name: 'marry',
          age: 22
        },
      })
      function open(){
        count.value++
      }
      return {count,obj,open}
    }
  }
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
