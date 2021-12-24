<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-button @click="goToPage('/about')">about</el-button>
    <el-button @click="goToPage('/message')">message</el-button>
    <!-- 引用路由 -->
    <router-view></router-view>
    <div v-for="(item,index) in bannerList" :key="index">
      <img style="width: 800px;height: 300px" :src="item.image" alt="">
    </div>
  </div>
</template>

<script>
import {getHomeBanner} from '../utils/api';
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'First',
      bannerList:[]
    }
  },

  mounted () {
    setTimeout(()=>{
      this.getDate()
    },2000)
    console.log(this.$yumoer.pinjie("你","好","吗"));
  },
  methods:{
    getDate () {
      let query = {key:'index_lbt'}
      getHomeBanner(query).then(res=>{
        console.log(res.data)
        this.bannerList = res.data
      })
    },
    goToPage(url){
      this.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
