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
    path: '/order',
    name: 'Order',
    component: () => import('@views/order/orderInfo.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@views/detail/detailInfo.vue')
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
