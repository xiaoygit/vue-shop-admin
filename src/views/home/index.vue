<template>
    <div class="container">
        <a-menu mode="inline" :open-keys="openKeys" style="width: 256px" @openChange="onOpenChange" :selectedKeys="[$route.path]">
            <a-sub-menu key="sub1">
                <span slot="title"><a-icon type="mail" /><span>人员配置</span></span>
                <a-menu-item key="/user">
                    <router-link :to="'/user'">
                        使用人员清单
                    </router-link>
                </a-menu-item>
                <a-menu-item key="/approval">
                    <router-link :to="'/approval'">
                        资格审批
                    </router-link>
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
        <div class="main">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            rootSubmenuKeys: ['sub1', 'sub2'],
            openKeys: ['sub1'],
        }
    },
    methods: {
        onOpenChange(openKeys) {
            const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
            if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
                this.openKeys = openKeys;
            } else {
                this.openKeys = latestOpenKey ? [latestOpenKey] : [];
            }
        },
    }
}
</script>

<style lang="scss">
.container {
    display: flex;
}
</style>
