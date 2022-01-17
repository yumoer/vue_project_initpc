<template>
  <div class="flex-col page">
    <div class="flex-col header">
      <div class="justify-between group">
        <span>9:41</span>
        <div class="flex-row group_1">
          <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834185347774.png"
              class="image"
          />
          <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834150509331.png"
              class="image_1"
          />
          <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009849815279916.png"
              class="image_2"
          />
        </div>
      </div>
      <div class="flex-row group_2">
        <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009834202809352.png"
            @click="onBack"
            class="image_3"
        />
        <span class="text_1">空间详情</span>
      </div>
    </div>
    <div class="flex-col group_3">
      <div class="flex-col">
        <div class="flex-col">
          <span class="text_2">维新软件科学园</span>
          <span class="text_3">深圳市南山区中心路3331号</span>
        </div>
        <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234009955010780805.png"
            class="image_4"
        />
      </div>
      <div class="flex-col group_6">
        <span class="text_4">简介</span>
        <span class="text_5"
        >FF办公空间之维新软件科学园，全新一站式办公空间与生活中心。地处深圳湾超级总部基地，与深圳宝安机场这样的国际化交通枢纽链接，使这处办公空间尽享得天独厚的地理优势，助您的事业通达全球。</span
        >
      </div>
      <div class="flex-col group_7">
        <span class="text_6">价格</span>
        <span class="text_7">专属办公室</span>
        <div class="justify-between group_8">
          <span class="text_8">1 ~ 4 人</span>
          <div class="flex-row">
            <span class="text_9">¥2,240</span>
            <span class="text_10">起/工位/月</span>
          </div>
        </div>
        <div class="justify-between group_10">
          <span class="text_11">5 ~ 10 人</span>
          <div class="flex-row">
            <span class="text_12">¥2,180</span>
            <span class="text_13">起/工位/月</span>
          </div>
        </div>
        <div class="justify-between group_12">
          <span class="text_14">10+ 人</span>
          <div class="flex-row">
            <span class="text_15">¥2,120</span>
            <span class="text_16">起/工位/月</span>
          </div>
        </div>
      </div>
      <div @click="goToPage" class="flex-col items-center button">
        <span>预约参观</span>
      </div>
    </div>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
export default {
  data(){
    return{

    }
  },
  methods:{
    onBack() {
      this.$router.back();
    },
    goToPage() {
      this.$router.push({ name: 'user' });
    },
  },
  setup(){
    const router = useRouter()
    console.log(router.currentRoute.value.query)
    let data = router.currentRoute.value.query
    return{data}
  }
}
</script>

<style lang="scss" scoped>
.page {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .header {
    padding: 14.5px 14px 11px 25px;
    height: 90px;
    .group {
      padding-left: 10px;
      color: rgb(0, 0, 0);
      font-size: 15px;
      line-height: 18px;
      letter-spacing: -0.3px;
      white-space: nowrap;
      .group_1 {
        margin: 3px 0 3.5px;
        .image {
          width: 17px;
          height: 11px;
        }
        .image_1 {
          margin-left: 4.5px;
          width: 16px;
          height: 11px;
        }
        .image_2 {
          margin-left: 4.5px;
          width: 24.5px;
          height: 11.5px;
        }
      }
    }
    .group_2 {
      margin-top: 21.5px;
      color: rgb(0, 0, 0);
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      white-space: nowrap;
      .image_3 {
        margin: 3px 0 4px;
        width: 10px;
        height: 18px;
      }
      .text_1 {
        margin-left: 117px;
      }
    }
  }
  .group_3 {
    padding: 14px 20px 19px;
    flex: 1 1 auto;
    overflow-y: auto;
    .group_6 {
      margin-top: 32px;
      .text_4 {
        color: rgb(0, 0, 0);
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        white-space: nowrap;
      }
      .text_5 {
        margin-right: 7px;
        margin-top: 16px;
        color: rgb(0, 0, 0);
        font-size: 13px;
        line-height: 24px;
        text-align: left;
      }
    }
    .group_7 {
      margin-top: 38px;
      .text_6 {
        color: rgb(0, 0, 0);
        font-size: 18px;
        font-weight: 600;
        line-height: 25px;
        white-space: nowrap;
      }
      .text_7 {
        margin-top: 12px;
        color: rgb(0, 0, 0);
        font-size: 15px;
        font-weight: 600;
        line-height: 21px;
        white-space: nowrap;
      }
      .group_8 {
        margin-top: 13px;
        .text_8 {
          color: rgb(0, 0, 0);
          font-size: 13px;
          line-height: 18px;
          white-space: nowrap;
        }
        .text_9 {
          color: rgb(0, 0, 0);
          font-size: 13px;
          line-height: 18px;
          white-space: nowrap;
        }
        .text_10 {
          margin-left: 3px;
          color: rgb(136, 136, 136);
          font-size: 13px;
          line-height: 18px;
          white-space: nowrap;
        }
      }
      .group_10 {
        margin-top: 12px;
        .text_11 {
          color: rgb(0, 0, 0);
          font-size: 13px;
          line-height: 18px;
          white-space: nowrap;
        }
        .text_12 {
          color: rgb(0, 0, 0);
          font-size: 13px;
          line-height: 18px;
          white-space: nowrap;
        }
        .text_13 {
          margin-left: 3px;
          color: rgb(136, 136, 136);
          font-size: 13px;
          line-height: 18px;
          white-space: nowrap;
        }
      }
      .group_12 {
        margin-top: 12px;
        .text_14 {
          color: rgb(0, 0, 0);
          font-size: 13px;
          line-height: 18px;
          white-space: nowrap;
        }
        .text_15 {
          color: rgb(0, 0, 0);
          font-size: 13px;
          line-height: 18px;
          white-space: nowrap;
        }
        .text_16 {
          margin-left: 3px;
          color: rgb(136, 136, 136);
          font-size: 13px;
          line-height: 18px;
          white-space: nowrap;
        }
      }
    }
    .button {
      margin-top: 24px;
      padding: 10px 0;
      align-self: center;
      color: rgb(255, 255, 255);
      font-size: 17px;
      line-height: 24px;
      white-space: nowrap;
      background-color: rgb(0, 110, 255);
      border-radius: 4px;
      width: 167px;
    }
    .image_4 {
      margin-top: 16px;
      border-radius: 8px;
      width: 335px;
      height: 200px;
    }
    .text_2 {
      color: rgb(0, 0, 0);
      font-size: 24px;
      font-weight: 600;
      line-height: 33px;
      white-space: nowrap;
    }
    .text_3 {
      margin-top: 4px;
      color: rgb(0, 0, 0);
      font-size: 13px;
      line-height: 18px;
      white-space: nowrap;
    }
  }
}
</style>
