<template>
  <div class="order">
    <div class="order_header">
      <div class="header_img">
        <img
          src="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
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
    <div style="padding-top:.6rem;">
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
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <van-image
            round
            class="img_num"
            width="1.8rem"
            height="1.8rem"
            fit="fill"
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
          <van-icon class="img_num" style="vertical-align:middle;padding-bottom:1.3rem" size="1.5rem" name="ellipsis" />
        </div>
      </div>
    </div>
    <div  style="padding-top:.6rem;">
    </div>
    <div class="order_desc">
      <div class="desc_title">社群简介</div>
      <van-divider />
      <div class="desc_content">帮助更多人找到兼职信息</div>
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Icon, Divider, Image as VanImage } from "vant";
export default defineComponent({
  components: {
    [Icon.name]: Icon,
    [Divider.name]: Divider,
    [VanImage.name]: VanImage,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less"  scoped>
.order {
  margin: 1rem 1rem 0.1rem 1rem;
  background-color: #f3f3f3;
  .order_header {
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
  .order_users {
     background-color: white;
     padding-top: .6rem;
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
  .order_desc{
    background-color: white;
  }
}
</style>
