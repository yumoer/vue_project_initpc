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
            class="image_3"
            @click="onBack"
        />
        <span class="text_1">我的</span>
      </div>
    </div>
    <div class="flex-col group_3">
      <div class="flex-row section_1">
        <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328637855616.png"
            class="image_4"
        />
        <span class="text_2">Fan Chen</span>
      </div>
      <div class="flex-col section_2">
        <span class="text_3">我的订单</span>
        <div class="flex-row equal-division">
          <div class="flex-col items-center equal-division-item">
            <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337528305414.png"
                class="image_5"
            />
            <span class="text_4">待付款</span>
          </div>
          <div class="equal-division-item_1 flex-col items-center">
            <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337794454995.png"
                class="image_6"
            />
            <span class="text_5">待使用</span>
          </div>
          <div class="equal-division-item_1 flex-col items-center">
            <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337834988033.png"
                class="image_6"
            />
            <span class="text_5">待评价</span>
          </div>
          <div class="flex-col items-center equal-division-item_2">
            <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337859367126.png"
                class="image_9"
            />
            <span class="text_8">退款/售后</span>
          </div>
        </div>
      </div>
      <div class="flex-col section_3">
        <div class="flex-row">
          <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632357078987519.png"
              class="image_10"
          />
          <span class="text_9">我的浏览记录</span>
        </div>
        <div class="flex-row group_7">
          <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328709050413.png"
              class="image_11"
          />
          <span class="text_10">我的收藏</span>
        </div>
        <div class="flex-row group_8">
          <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632357080184657.png"
              class="image_12"
          />
          <span class="text_11">我的预约</span>
        </div>
      </div>
      <div class="section_4 flex-row">
        <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328724869484.png"
            class="image_13"
        />
        <span class="text_12">咨询热线</span>
      </div>
      <div class="section_4 flex-col">
        <div class="flex-row group_9">
          <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632357082541476.png"
              class="image_15"
          />
          <span class="text_13">服务条款</span>
        </div>
        <div class="flex-row group_10">
          <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328615957223.png"
              class="image_16"
          />
          <span class="text_14">我要反馈</span>
        </div>
        <div class="flex-row group_11">
          <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337181384256.png"
              class="image_13"
          />
          <span class="text_15">关于我们</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {}
  },
  methods: {
    onBack() {
      this.$router.back();
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .header {
    padding: 14.5px 14px 9px 25px;
    background-color: rgb(255, 255, 255);
    height: 88px;
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
        margin-left: 135px;
      }
    }
  }
  .group_3 {
    padding: 16px 0 63px;
    flex: 1 1 auto;
    overflow-y: auto;
    .section_1 {
      padding: 16px 20px;
      color: rgb(0, 0, 0);
      font-size: 18px;
      font-weight: 600;
      line-height: 25px;
      white-space: nowrap;
      background-color: rgb(255, 255, 255);
      .image_4 {
        border-radius: 50%;
        width: 64px;
        height: 64px;
      }
      .text_2 {
        margin-left: 16px;
        align-self: center;
      }
    }
    .section_2 {
      margin-top: 16px;
      padding: 20px 19px 15px;
      background-color: rgb(255, 255, 255);
      .text_3 {
        color: rgb(0, 0, 0);
        font-size: 15px;
        font-weight: 600;
        line-height: 21px;
        white-space: nowrap;
      }
      .equal-division {
        margin-top: 8.5px;
        color: rgb(0, 0, 0);
        font-size: 13px;
        line-height: 18px;
        white-space: nowrap;
        .equal-division-item {
          padding: 8.5px 0 5px;
          flex: 1 1 84px;
          .image_5 {
            width: 32px;
            height: 26px;
          }
          .text_4 {
            margin-top: 13px;
          }
        }
        .equal-division-item_1 {
          flex: 1 1 84px;
          padding: 5.5px 0 5px;
          .image_6 {
            width: 32px;
            height: 32px;
          }
          .text_5 {
            margin-top: 10px;
          }
        }
        .equal-division-item_2 {
          padding: 5px 0 5px;
          flex: 1 1 84px;
          .image_9 {
            width: 32px;
            height: 33px;
          }
          .text_8 {
            margin-top: 9.5px;
          }
        }
      }
    }
    .section_3 {
      margin-top: 16px;
      padding: 13px 20px;
      color: rgb(0, 0, 0);
      font-size: 17px;
      line-height: 24px;
      white-space: nowrap;
      background-color: rgb(255, 255, 255);
      .group_7 {
        margin-top: 26px;
        padding: 0 1px;
        .image_11 {
          margin: 2px 0 1px;
          width: 22px;
          height: 21px;
        }
        .text_10 {
          margin-left: 17px;
        }
      }
      .group_8 {
        margin-top: 26px;
        padding: 0 2px;
        .image_12 {
          width: 20px;
          height: 23px;
        }
        .text_11 {
          margin-left: 18px;
        }
      }
      .image_10 {
        margin: 5px 0 4px;
        width: 24px;
        height: 15px;
      }
      .text_9 {
        margin-left: 16px;
      }
    }
    .section_4 {
      margin-top: 16px;
      color: rgb(0, 0, 0);
      font-size: 17px;
      line-height: 24px;
      white-space: nowrap;
      padding: 13px 21px;
      background-color: rgb(255, 255, 255);
      .text_12 {
        margin-left: 17px;
      }
      .group_9 {
        padding: 0 1.5px;
        .image_15 {
          width: 19px;
          height: 22px;
        }
        .text_13 {
          margin-left: 18.5px;
        }
      }
      .group_10 {
        margin-top: 26px;
        padding: 0 1px;
        .image_16 {
          margin-bottom: 1.5px;
          width: 21px;
          height: 22px;
        }
        .text_14 {
          margin-left: 17px;
        }
      }
      .group_11 {
        margin-top: 26px;
        .text_15 {
          margin-left: 17px;
        }
      }
      .image_13 {
        width: 22px;
        height: 22px;
      }
    }
  }
}
</style>
