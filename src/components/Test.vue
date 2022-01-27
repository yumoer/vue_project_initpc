// test.vue
<template>
  <div>
    tests {{ word }}
  </div>
</template>
<script lang="ts">
export default {
  name: 'Test',
  props: {
    word: {
      type: String,
      default: ''
    }
  },
  setup() {
    const testFun = () => {
      console.log('test--->')
    }
    return {
      testFun
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
