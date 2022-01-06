<script lang="ts">
import {ref,reactive,toRefs,onMounted} from "vue";
import {useRouter} from "vue-router";
import {mokeGet} from '../api'
export default {
  data(){
    return{
      homeData: [
        {
          id:1,
          image:
              'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093853079242.png',
          name: '维新软件科学园',
          address: '深圳市南山区中心路3331号',
          price: '¥1,870',
          info: '起/工位/月',
        },
        {
          id:2,
          image:
              'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093836713715.png',
          name: '中集大厦',
          address: '深圳市南山区高新南九道9号',
          price: '¥2,240',
          info: '起/工位/月',
        },
        {
          id:3,
          image:
              'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093817997494.png',
          name: '深业大厦',
          address: '深圳市福田区后山路500号',
          price: '¥1,650',
          info: '起/工位/月',
        },
      ],
      iconData:[
        {
          image:
              'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113644013648.png',
          name: '地图找楼',
        },
        {
          image:
              'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113644167452.png',
          name: '核心商圈',
        },
        {
          image:
              'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113669698766.png',
          name: '全景参观',
        },
        {
          image:
              'https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010113663525642.png',
          name: '咨询热线',
        }
      ],
      banner:
          'https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093791214053.png',
    };
  },
  setup(){
    let centerDialogVisible = ref(false)
    onMounted(async () => {
      await mokeGet().then(res=>{
        console.log(res.data,res.status)

      }).catch(err=>{
        console.log(err)
        if(err.status === 401){
          centerDialogVisible = ref(true)
        }
      })
    })
    const router = useRouter()
    const state = reactive({
      list:[],
      goToPage(path,item){
        console.log(item)
        router.push(path+'?id='+item.id)
      }
    })

    return{...toRefs(state),centerDialogVisible}
  }
}
</script>

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
      <span class="text_1">FF办公空间</span>
    </div>
    <div class="flex-col group_2">
      <img class="image_3" :src="banner" />
      <div class="flex-row equal-division">
        <div class="equal-division-item flex-col items-center" v-for="(item,i) in iconData">
          <img class="image_4" :src="item.image" />
          <span class="text_2">{{item.name}}</span>
        </div>
      </div>
      <div class="flex-col group_7">
        <span class="text_7">热推空间</span>
        <div class="flex-col list">
          <div class="list-item flex-row" :key="i" v-for="(item, i) in homeData" @click="goToPage('/detail',item)" >
            <img class="image_9" :src="item.image" />
            <div class="right-group flex-col">
              <div class="flex-col">
                <span class="text_8">{{item.name}}</span>
                <span class="text_10">{{item.address}}</span>
              </div>
              <div class="bottom-group justify-end">
                <span class="text_12">{{item.price}}</span>
                <span class="text_14">{{item.info}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <el-dialog v-model="centerDialogVisible" title="success" width="30%" center>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.page {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .header {
    padding: 14.5px 14px 6px 35px;
    height: 85px;
    .group {
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
    .text_1 {
      margin-top: 21.5px;
      align-self: center;
      color: rgb(0, 0, 0);
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      white-space: nowrap;
    }
  }
  .group_2 {
    padding: 11px 19px 37px;
    flex: 1 1 auto;
    overflow-y: auto;
    .image_3 {
      border-radius: 8px;
      width: 335px;
      height: 150px;
    }
    .equal-division {
      margin-top: 27px;
      color: rgb(0, 0, 0);
      font-size: 13px;
      line-height: 18px;
      white-space: nowrap;
      .equal-division-item {
        flex: 1 1 84px;
        padding: 5px 0;
        .image_4 {
          width: 44px;
          height: 44px;
        }
        .text_2 {
          margin-top: 8px;
        }
      }
    }
    .group_7 {
      margin-top: 23px;
      .text_7 {
        color: rgb(0, 0, 0);
        font-size: 15px;
        font-weight: 600;
        line-height: 21px;
        white-space: nowrap;
      }
      .list {
        margin-top: 12px;
        .list-item {
          padding: 0 1px 15.5px;
          &:not(:last-of-type) {
            border-bottom: solid 1px rgb(221, 221, 221);
          }
          .image_9 {
            border-radius: 4px;
            width: 100px;
            height: 100px;
          }
          .right-group {
            margin-left: 16px;
            flex: 1 1 auto;
            .bottom-group {
              margin-top: 29px;
              .text_12 {
                margin-right: 3px;
                color: rgb(0, 0, 0);
                font-size: 17px;
                line-height: 24px;
                white-space: nowrap;
              }
              .text_14 {
                margin: 4px 0 2px;
                color: rgb(136, 136, 136);
                font-size: 13px;
                line-height: 18px;
                white-space: nowrap;
              }
            }
            .text_8 {
              color: rgb(0, 0, 0);
              font-size: 15px;
              line-height: 21px;
              white-space: nowrap;
            }
            .text_10 {
              margin-top: 8px;
              color: rgb(136, 136, 136);
              font-size: 13px;
              line-height: 18px;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>
