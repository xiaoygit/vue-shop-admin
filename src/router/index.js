import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/index.vue'),
    children: [
        {
            path: '/user',
            name: 'User',
            component: () => import('../views/user/index.vue')
        },
        {
            path: '/approval',
            name: 'Approval',
            component: () => import('../views/approval/index.vue')
        }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
