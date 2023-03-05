<template>
<div class="release">
    <div class="release_container">
        <van-form @failed="onFailed">
            <van-cell-group inset>
                <!-- 通过 pattern 进行正则校验 -->
                <van-field v-model="username" name="用户名" label="标题" placeholder="用户名" :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="message" rows="8" autosize label="内容" type="textarea" maxlength="100" placeholder="请输入内容" show-word-limit />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
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
    Form,
    Field,
    CellGroup,
    Button
} from "vant";
export default defineComponent({
    components: {
        [Form.name]: Form,
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
        [Button.name]: Button,
    },
    data() {
        return {};
    },

    methods: {
        goTo(name) {
            this.$router.push('/' + name);
        },

    },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="less" scoped>
.release {
    padding: .4rem .4rem .4rem .4rem;
}
</style>
