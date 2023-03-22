<template>
<div class="release">
    <div class="release_container">
        <van-form @failed="onFailed">
            <van-cell-group inset>
                <!-- 通过 pattern 进行正则校验 -->
                <van-field v-model="title" name="兼职名称" label="兼职名称" placeholder="兼职名称" :rules="[{ required: true, message: '兼职名称' }]" />
                <van-field v-model="tele" name="联系方式" label="联系方式" placeholder="联系方式" :rules="[{ required: true, message: '联系方式' }]" />
                <van-field v-model="content" rows="8" autosize label="兼职内容" type="textarea" maxlength="100" placeholder="请输入兼职内容" show-word-limit />
            </van-cell-group>

            <van-field name="uploader" label="文件上传">
            <template #input >
                <van-uploader v-model="value" preview-size="60" :after-read="afterRead" :max-count="9" />
            </template>
            </van-field>

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
    Button,Uploader,
    showToast
} from "vant";
export default defineComponent({
    components: {
        [Form.name]: Form,
        [Field.name]: Field,
        [Uploader.name]: Uploader,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button,
    },
    data() {
        return {
            title:"",
            tele:"",
            content:"",
            value:[
      { url: 'https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg' },
    ]
        };
    },
    methods: {
        afterRead(){
            console.log(333)
        },
        goTo(name) {
            this.$router.push('/' + name);
        },
        add(){
            let params = {
                openid: localStorage.getItem("openid"),
                title:this.$data.title,
                tele:this.$data.tele,
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
.preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
</style>