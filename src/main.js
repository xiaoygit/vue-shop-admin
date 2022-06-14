import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import Form from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$form = Form
Vue.prototype.axios = axios
Vue.use(Antd);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
