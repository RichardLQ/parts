<template>
<div class="release">
    <div class="release_container">
        <van-form @failed="onFailed">
            <van-cell-group inset>
                <!-- 通过 pattern 进行正则校验 -->
                <van-field v-model="title" name="标题" label="标题" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="content" rows="8" autosize label="内容" type="textarea" maxlength="100" placeholder="请输入内容" show-word-limit />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button @click="add" round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>

    </div>

</div>
</template>

<script lang="ts">
import {
    defineComponent,
} from "vue";
import {
    addContent
} from "@api/my/my";
import {
    Form,
    Field,
    CellGroup,
    Button,
    showToast
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
            title:"",
            content:"",
        };
    },

    methods: {
        goTo(name) {
            this.$router.push('/' + name);
        },
        add(){
            let params = {
                openid: localStorage.getItem("openid"),
                title:this.$data.title,
                content:this.$data.content,
            };
            addContent(params).then((res:any) => {
                console.log(res)
                if (res.code == 200) {
                    showToast('提交成功');
                    this.$router.push('/my');
                }
            })
        }

    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.release {
    padding: .4rem .4rem .4rem .4rem;
}
</style>
