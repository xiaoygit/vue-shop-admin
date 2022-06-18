<template>
    <div class="container">
        <a-menu mode="inline" :open-keys="openKeys" style="width: 256px; height: 100vh;" @openChange="onOpenChange" :selectedKeys="[$route.path]">
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
        <div class="w-100 p-10">
            <div class="w-100">
                <Header />
                <Search v-if="$route.path !== '/home'" />
                <div class="main" v-if="$route.path !== '/home'">
                    <router-view />
                </div>
                <div class="p-10" v-else>
                    <img src="../../assets/image/home_bac.png" alt="" class="absolute center_h_w image">
                </div>
            </div>
            <div class="footer" v-if="$route.path !== '/home'">
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../../components/header/index.vue'
import Search from '../../components/search/index.vue'
import Footer from '../../components/footer/index.vue'
export default {
    components: {
        Header,
        Search,
        Footer
    },
    data () {
        return {
            rootSubmenuKeys: ['sub1', 'sub2'],
            openKeys: ['sub1']
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
    background-color: rgba(238, 238, 238, 0.384);
}
.main {
    height: 80vh;
    // background-color: #fff;
}
.image {
    transform: translate(-20%, -50%);
}
</style>
