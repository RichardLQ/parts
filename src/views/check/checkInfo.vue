<template>
<div class="check">
    <h2>审核页面</h2>
    <van-loading v-show="isLoad" size="24px" style="text-align:center">加载中...</van-loading>
    <div class="check_container">
        <van-row justify="space-between">
            <van-col span="4">Id</van-col>
            <van-col span="8">标题</van-col>
            <van-col span="4">内容</van-col>
            <van-col span="8">操作</van-col>
        </van-row>
        <van-row justify="space-between" v-for="(item, index) in partlist" :key="index">
            <van-col span="4">{{item.id}}</van-col>
            <van-col span="8" style="font-weight:700">{{item.title}}</van-col>
            <van-col span="4">
                <van-button type="primary" @click="showPopup(item)" size="mini">内容</van-button>
            </van-col>
            <van-col span="8">
                <van-button type="primary" @click="showPopup(item)" size="mini">置顶</van-button> / <van-button type="primary" @click="showPopup(item)" size="mini">通过</van-button>
            </van-col>
        </van-row>
    </div>
    <div>
        <van-pagination v-model="page" :total-items="total" @change="changePage" :show-page-size="4" force-ellipses />
    </div>
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
    Loading,
    Pagination,
    Dialog,
    showDialog,
    Button
} from "vant";
export default defineComponent({
    components: {
        [Col.name]: Col,
        [Row.name]: Row,
        [Loading.name]: Loading,
        [Pagination.name]: Pagination,
        [Dialog.name]: Dialog,
        [Button.name]: Button,
    },
    data() {
        return {
            partlist: [],
            page: 1,
            isLoad: true,
            total: 0,
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
                this.$data.total = res.total
                this.$data.isLoad = false
                let partlists: any[] = []
                if (res.data.length < 10) {
                    this.$data.finished = true
                }
                this.$data.partlist = res.data
                // res.data.forEach((data: never) => {
                //     this.$data.partlist.push(data)
                // })
            })

        },
        showPopup(e) {
            showDialog({
                title: e.title,
                message: e.content,
                theme: 'round-button',
            })
        },
        changePage(e) {
            this.$data.page = e
            this.getPartList()
            console.log(e)
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

    .check_container {
        background-color: white;
        font-size: 13px;

        .van-row {
            text-align: center;
            padding: 4px;
            border-bottom: 1px solid white;
        }
    }

}
</style>
