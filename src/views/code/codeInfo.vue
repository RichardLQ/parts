<template>
  <div class="code">
   授权页面
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  components: {
  },
  data() {
    return {
      partlist :[]
    };
  },
  mounted() {
    this.getCode()
  },
  methods: {
    getCode() {         //微信网页授权返回code
      let UrlEncode  = encodeURIComponent("https://www.sourcandy.cn/totoro/#/order")
      let wx_url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxde2cf49d6527e57a&redirect_uri='+UrlEncode+'&response_type=code&scope=snsapi_userinfo#wechat_redirect'
      window.location.href = wx_url;
    },
  },
});
</script>

<style lang="less" scoped>

</style>
