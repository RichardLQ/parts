<template>
<div class="my">
    <div class="my_header">
        <van-space align="center">
            <div class="header_img">
                <van-image round width="4.5rem" height="4.5rem" fit="cover" :src="userInfo.address" />
            </div>
            <div class="header_name">{{userInfo.username}}</div>
            <div class="header_uid">Uid:<span style="font-weight:600">{{userInfo.id}}</span></div>
        </van-space>
    </div>
    <div class="my_vip">
        <van-space :align="baseline">
            <span style="font-weight:600">会员到期</span>：<span style="color:red">{{userInfo.cuttime}}</span>
        </van-space>
    </div>

    <div class="my_vip">
        <van-space :align="baseline" @click="goTo('release')">
            <span style="font-weight:600">发布兼职</span>
        </van-space>
    </div>
    <div class="my_vip">
        <van-space :align="baseline" @click="goTo('order')">
            <span style="font-weight:600">返回首页</span>
        </van-space>
    </div>
    <div class="my_bottom">
        <div class="bottom_dsc">粤ICP备124353445号</div>
    </div>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" @click="goTo('list')" icon="guide-o">龙猫社群</van-tabbar-item>
        <van-tabbar-item name="my" icon="contact">我的</van-tabbar-item>
    </van-tabbar>

</div>
</template>

<script lang="ts">
import {
    getLogin
} from "@api/my/my";
import wx from "@api/wx";
import {
    defineComponent,
} from "vue";
import {
    Icon,
    Tabbar,
    TabbarItem,
    Space,
    Image as VanImage
} from "vant";
export default defineComponent({
    components: {
        [Icon.name]: Icon,
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
        [Space.name]: Space,
        [VanImage.name]: VanImage,
    },
    data() {
        return {
            userInfo: {}
        };
    },
    mounted() {
        this.getLoginInfo();
    },
    methods: {
        goTo(name) {
            this.$router.push('/' + name);
        },
        getLoginInfo() {
            let openid = localStorage.getItem("openid")
            if (openid) {
                wx.getCode()
            }
            getLogin({
                openid: openid
            }).then((res) => {
                this.$data.userInfo = res.data
            });
        }

    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.my {
    background-color: #f3f3f3;
    height: 100%;

    .my_header {
        padding: 1rem 1rem 0.1rem 1rem;
        background-color: white;

        .header_name {
            font-weight: 700;
        }

        .header_uid {
            float: right;
            margin-right: 0;
        }
    }

    .my_vip {
        background-color: white;
        margin-top: .4rem;
        padding: .5rem 1rem .5rem 1rem;
    }

    .my_bottom {
        .bottom_dsc {
            text-align: center;
            margin-top: .3rem;
            font-size: .4rem;
            color: #bbbbbb;
        }
    }
}
</style>
