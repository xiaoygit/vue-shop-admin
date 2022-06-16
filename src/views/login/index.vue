<template>
    <div class="login">
        <div class="height100 w-100 background-admin relative">
            <div class="loginForm w-70 absolute center_h_w h-300">
                <div class="text-center">
                    <h3 class="size-45 letter white">登录</h3>
                </div>
                <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 14 }" :hideRequiredMark="true">
                    <a-form-item label="账号">
                        <a-input
                            v-decorator="['phone', { rules: [{ required: true, message: 'Please input your user!' }] }]"
                        />
                    </a-form-item>
                    <a-form-item label="密码">
                        <a-input
                            v-decorator="['password', { rules: [{ required: true, message: 'Please input your password!' }] }]"
                        />
                    </a-form-item>
                    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                        <a-button type="primary" @click="login">
                            登录
                        </a-button>
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '@/api/login/index'
export default {
    data () {
        return {
            queryData: {},
            form: this.$form.createForm(this)
        }
    },
    created () {
    },
    methods: {
        login () {
            const { form: { validateFields } } = this
            validateFields((error, values) => {
                if (error) return
                login(values).then(res => {
                    console.log(res)
                    if (res.data.status !== 200) return this.$message.error(res.data.message)
                    this.$message.success(res.data.message)
                    window.localStorage.setItem('token', res.data.token)
                    this.$router.push({ path: '/home' })
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.loginForm {
    transform: translate(-50%, -100%)
}
.login ::v-deep
.ant-form-item-label > label {
    color: #fff !important;
}
</style>