<template>
<div class="check">
    <h2>审核页面</h2>
    <div class="check_search">
        <div>
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="options1" />
            </van-dropdown-menu>
        </div>
        <div>
            <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
        </div>
    </div>
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
                <van-button v-if="item.status ==1" type="success" size="mini">正常</van-button>
                <van-button v-if="item.status ==3" type="primary" @click="showPopup(item)" size="mini">通过</van-button>
                <van-button v-if="item.status ==2" type="primary" @click="showPopup(item)" size="mini">下线</van-button>
                <van-button type="primary" @click="showPopup(item)" size="mini">置顶</van-button>
            </van-col>
        </van-row>
    </div>
    <div class="check_page">
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
    DropdownMenu,
    DropdownItem,
    Search,
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
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
        [Search.name]: Search,
    },
    data() {
        return {
            partlist: [],
            page: 1,
            isLoad: true,
            total: 0,
            pageSize: 10,
            finished: false,

            value1: 0,
            value2: 1,
            options1: [{
                    text: '全部列表',
                    value: 0
                },
                {
                    text: '正常列表',
                    value: 1
                },
                {
                    text: '置顶列表',
                    value: 2
                },
                {
                    text: '删除列表',
                    value: 3
                },
                {
                    text: '待审核',
                    value: 3
                },
            ],
            options2: [{
                    text: '全部商品',
                    value: 0
                },
                {
                    text: '新款商品',
                    value: 1
                },
                {
                    text: '活动商品',
                    value: 2
                },
            ],
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
        onConfirm() {
            // this.$data.item.value.toggle();
        }
    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.check {
    height: 90vh;
    text-align: center;
    padding: 10px;
    position: relative;

    .check_search {
        display: flex;

        div {
            flex: 1
        }
    }

    .check_container {
        background-color: white;
        font-size: 13px;

        .van-row {
            text-align: center;
            padding: 4px;
            border-bottom: 1px solid white;
        }
    }

    .check_page {
        // position: absolute;
        //  bottom:0;left:0 ;right:0;
    }

}
</style>
