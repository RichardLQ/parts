<template>
  <div class="order">
    <div class="order_header">
      <div class="header_img">
        <img
          src="~@/assets/img/header.jpg"
          alt=""
        />
      </div>
      <div class="header_title">
        <div class="title_title">龙猫兼职</div>
        <div class="title_middle">龙猫兼职</div>
        <div class="title_date">
          <van-icon
            name="clock-o"
            style="margin-right: 0.3rem"
            color="#07c160"
          />90天&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<van-icon
            name="label-o"
            style="vertical-align: top"
            size="1.4rem"
            color="#07c160"
          />话题：88
        </div>
        <div class="title_middle"></div>
      </div>
    </div>
    <div style="padding-top: 0.6rem">
      <!-- <van-divider /> -->
    </div>
    <div class="order_users">
      <div class="users_title">已有<span>6598人</span>加入</div>
      <div class="users_img">
        <div>
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            :src = "require('../../assets/img/cat.jpeg')"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            :src = "require('../../assets/img/cat.jpeg')"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
           :src = "require('../../assets/img/cat.jpeg')"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
           :src = "require('../../assets/img/cat.jpeg')"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            :src = "require('../../assets/img/cat.jpeg')"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
           :src = "require('../../assets/img/cat.jpeg')"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
           :src = "require('../../assets/img/cat.jpeg')"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            :src = "require('../../assets/img/cat.jpeg')"
          />
          <van-icon
            class="img_num"
            style="vertical-align: middle; padding-bottom: 1.3rem"
            size="1.5rem"
            name="ellipsis"
          />
        </div>
      </div>
    </div>
    <div style="padding-top: 0.6rem"></div>
    <div class="order_desc">
      <div class="desc_title"><span class="title_span"></span> 社群简介</div>
      <van-divider />
      <div class="desc_content">
        帮助更多人找到兼职信息，每天都会实时分享深圳优质兼职，也可在社群上发布兼职信息，进入会员社群后可看到所有联系方式噢OVO
      </div>
    </div>
    <div class="order_topic">
      <div class="topic_title">
        <div class="desc_title"><span class="title_span"></span> 话题预览</div>
      </div>

      <van-cell class="order_container">
        <div v-for="(item, index) in partlist" :key="index">
          <div class="order_item">
            <div class="topic_user">
              <div class="user_img">
                <van-image
                  round
                  class="img_num"
                  width="2.4rem"
                  height="2.4rem"
                  fit="fill"
                  :src = "require('../../assets/img/header.jpg')"
                />
              </div>
              <div class="user_title">{{ item.username }}</div>
              <div class="user_date">{{ item.createtime }}</div>
            </div>
            <div class="order_content">
              <div class="content_item">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </van-cell>
      <!-- <van-back-top /> -->

      <van-sticky :offset-bottom="0" position="bottom">
        <div class="order_bottom">
          <div class="bottom_content">
            ￥<span style="font-size: 1.5rem">9.90</span>元/月
          </div>
          <div class="bottom_btn">
            <van-button type="warning" @click="onBridgeReady" size="small">购买</van-button>
          </div>
        </div>
      </van-sticky>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import wx from "weixin-js-sdk";
import { hotlist, getOrders,getSign,getOpeind,payOrders } from "@api/order/order";
import { Icon, Divider, Image as VanImage, BackTop, Sticky, Button,showToast } from "vant";
export default defineComponent({
  components: {
    [Icon.name]: Icon,
    [Divider.name]: Divider,
    [VanImage.name]: VanImage,
    [BackTop.name]: BackTop,
    [Sticky.name]: Sticky,
    [Button.name]: Button,
  },
  data() {
    return {
      partlist: [],
    };
  },
  mounted() {
      this.getPartList()
  },
  methods: {
   getPartList() {
      let params = {
        userid: 2,
      };
      hotlist(params).then((res) => {
        console.log(res);
        this.$data.partlist = res.data;
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.title_span {
  border: 1px solid #07c160;
  margin-right: 0.2rem;
}
.order {
  background-color: #f3f3f3;
  .order_header {
    padding: 1rem 1rem 0.1rem 1rem;
    background-color: white;
    display: flex;
    .header_img {
      flex: 1;
      img {
        width: 100%;
      }
    }
    .header_title {
      flex: 2;
      .title_title {
        font-weight: 800;
        font-size: 1.5rem;
      }
      .title_middle {
        margin-top: 0.2rem;
        font-weight: 300;
      }
      .title_date {
        margin-top: 0.2rem;
      }
    }
  }
  .order_users,
  order_topic {
    padding: 1rem 1rem 0.1rem 1rem;
    background-color: white;
    padding-top: 0.6rem;
    .users_title {
      span {
        color: #07c160;
      }
    }
    .users_img {
      padding-top: 0.4rem;
      .img_num {
        margin-left: 0.7rem;
      }
    }
  }
  .order_desc {
    padding: 1rem 1rem 0.1rem 1rem;
    background-color: white;
    .van-divider {
      margin: 1rem 0 0.3rem 0;
    }
    .desc_title {
      padding-top: 0.5rem;
      font-weight: 700;
    }
    .desc_content {
      padding-bottom: 0.5rem;
    }
  }
  .order_topic {
    padding-top: 0.4rem;
    .topic_title {
      padding: 1rem 1rem 0;
      background-color: white;
      border-bottom: 3px solid #f3f3f3;
      .desc_title {
        padding-bottom: 0.8rem;
      }
    }
    .topic_user {
      padding: 1rem 1rem 0.1rem 1rem;
      .user_img {
        flex: 1;
      }
      padding-top: 1rem;
      background-color: white;
      display: flex;
      .user_title,
      .user_date {
        margin-top: 0.7rem;
        vertical-align: bottom;
        margin-left: 0.6rem;
      }
      .user_title {
        color: #f09b4a;
      }
      .user_date {
        flex: 6;
        text-align: right;
        font-size: 0.6rem;
        color: #c8c8c8;
      }
    }
  }
  .order_content {
    padding: 1rem 1rem 0.1rem 1rem;
    background-color: white;
    padding-top: 1rem;
    padding-bottom: 0.1rem;
    margin-bottom: 0.6rem;
    .content_item {
      padding: 0 0.2rem 0.2rem;
      margin-bottom: 1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
  .order_bottom {
    display: flex;
    padding: 0.5rem 0.8rem 0.5rem 0.8rem;
    border: 3px solid #f3f3f3;
    background-color: white;
    .bottom_content {
      flex: 1;
      color: #ff976a;
    }
    .bottom_btn {
      float: right;
      width: 7rem;
      .van-button--small {
        width: 100%;
      }
    }
  }
}
</style>
