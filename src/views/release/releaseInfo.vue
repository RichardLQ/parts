<template>
<div class="order">
    <div class="release_container">
        <div class="order_topic">
            <div class="topic_title">
                <div class="desc_title"><span class="title_span"></span> 详情列表</div>
            </div>
            <div class="order_item">
                <div class="topic_user">
                    <div class="user_img">
                        <van-image round class="img_num" width="2.4rem" height="2.4rem" fit="fill" :src="require('../../assets/img/header.jpg')" />
                    </div>
                    <div class="user_title">{{users.title}}</div>
                    <div class="user_date">{{ users.createtime }}</div>
                </div>
                <div class="order_content">
                    <div class="content_item">
                        {{ users.content }}
                        <div v-show="$store.state.isBuy">联系方式:<span style="color:red">{{ users.tele }}</span></div>
                    </div>
                </div>
            </div>

            <van-back-top right="5vw" bottom="6.5vh" style="background-color:#ff976a !important;" />

        </div>

    </div>

</div>
</template>

<script lang="ts">
import {
    defineComponent,
} from "vue";
import {
    Form,
    Field,
    CellGroup,
    Button,
} from "vant";
export default defineComponent({
    components: {
        [Form.name]: Form,
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button,
    },
    data() {
        return {
            users: {},
        };
    },
mounted() {
    this.getInfo()
},
    methods: {
        getInfo(){
            let user = localStorage.getItem("userInfo")|| ''
             this.$data.users = JSON.parse(user)
        }
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
    height: 100%;

    // overflow: scroll;
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
        background-color: #f3f3f3;

        .order_item {
            padding-bottom: .1rem;
        }

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
