<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerList" :key="index">
          <img :src="item.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import {getHomeBanner} from '../utils/api'
export default{
  name:"swiper",
  data(){
    return{
      bannerList:[]
    }
  },
  created () {
    const mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  },
  mounted(){
    this.getDate()
  },
  methods:{
    getDate () {
      let query = {key:'index_lbt'}
      getHomeBanner(query).then(res=>{
        console.log(res.data)
        this.bannerList = res.data
      })
    }
  }
}
</script>
<style>
@import 'https://unpkg.com/swiper/swiper-bundle.css';
.swiper-container {
  width: 100%;
  height: 300px;
}
</style>
