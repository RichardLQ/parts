import { createRouter, createWebHashHistory, createWebHistory,RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@views/About.vue')
  },
  {
    path: '/code',
    name: 'Code',
    component: () => import('@views/code/codeInfo.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('@views/order/orderInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/totoro'),
  routes
})

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })


export default router
