<template>
<div class="check">
    <h2>审核页面</h2>
    <van-loading v-show="isLoad" size="24px" style="text-align:center">加载中...</van-loading>
    <van-row justify="space-between">
        <van-col span="6">Id</van-col>
        <van-col span="8">标题</van-col>
        <van-col span="4">内容</van-col>
        <van-col span="6">操作</van-col>
    </van-row>
    <van-row justify="space-between" v-for="(item, index) in partlist" :key="index">
        <van-col span="6">{{item.id}}</van-col>
        <van-col span="8">{{item.title}}</van-col>
        <van-col span="4">内容</van-col>
        <van-col span="6">置顶/通过</van-col>
    </van-row>

    <van-pagination
  v-model="currentPage"
  :total-items="125"
  :show-page-size="3"
  force-ellipses
/>
</div>
</template>

<script lang="ts">
import {
    partlist
} from "@api/order/order";
import wx from "@api/wx";
import {
    defineComponent,
} from "vue";
import {
    Col,
    Row,
    Loading,Pagination
} from "vant";
export default defineComponent({
    components: {
        [Col.name]: Col,
        [Row.name]: Row,
        [Loading.name]: Loading,
        [Pagination.name]: Pagination,
    },
    data() {
        return {
            partlist: [],
            page: 1,
            isLoad: true,
            pageSize: 10,
            finished: false,
        };
    },
    mounted() {
        this.getPartList()
        console.log(this.$data.partlist)
    },
    methods: {
        getPartList() {
            //获取列表信息
            let params = {
                openid: localStorage.getItem("openid"),
                page: this.$data.page,
                pageSize: this.$data.pageSize,
            };
            partlist(params).then((res) => {
                this.$data.isLoad = false
                let partlists: any[] = []
                if (res.data.length < 10) {
                    this.$data.finished = true
                }
                res.data.forEach((data: never) => {
                    this.$data.partlist.push(data)
                })
            })

        },
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>

.check {
    height: 100%;
    text-align: center;
    padding: 10px;
    background-color:#eff2f5;
    .van-row {
            text-align: center;
            padding:4px;
            border-bottom:1px solid white;
        }
}
</style>
