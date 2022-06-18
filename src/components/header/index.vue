<template>
    <div class="container">
        <div class="header p-5 d-flex between">
            <div class="d-flex">
                <div class="avatar width-50 h-50 border-r5 overHidden">
                    <img class="w-100" src="../../assets/image/header.gif" alt="" v-if="userInfo.avatar === null">
                    <img class="w-100" :src="userInfo.avatar" alt="" v-else>
                </div>
                <div class="userInfo">
                    <p class="ml-10 mt-5">{{ userInfo.username }}</p>
                    <p class="ml-10 email">xiaoyigit@163.com</p>
                </div>
            </div>
            <div class="icons d-flex align-item-center">
                <a-icon type="setting" theme="filled" :spin="true" />
                <a-icon type="github" theme="filled" />
                <a-icon type="star" theme="filled" />
                <a-icon type="code-sandbox-circle" theme="filled" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            userInfo: {}
        }
    },
    created () {
        // 用户信息
        this.userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 60px;
    .header {
        background-color: #fff;
        width: 100%;
        box-shadow: 0px 5px 5px #ccc;
        .email {
            margin-top: -10px;
        }
        .icons ::v-deep .anticon {
            margin-left: 20px;
            margin-right: 10px;
            font-size: 24px;
            :hover {
                font-size: 36px;
                transition: all .25s ease-in-out;
                color: #1890FF;
            }
        }
    }
}
</style>