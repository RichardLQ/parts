import { createRouter, createWebHashHistory, createWebHistory,RouteRecordRaw } from 'vue-router'
import globals from '../global/index'
// import Home from '../views/Home.vue'
// import Order from '@views/order/orderInfo.vue'
import {
  getCurrentInstance
} from "vue";
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    component: () => import('@views/About.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@views/list/listInfo.vue')
  },
  {
    path: '/order',
    name: 'Order',
    // component :Order,
    component: () => import('@views/order/orderInfo.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('@views/detail/detailInfo.vue')
  },
  {
    path: '/release',
    name: 'Release',
    component: () => import('@views/release/releaseInfo.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('@views/my/myInfo.vue')
  },
  {
    path: '/check',
    name: '审核',
    component: () => import('@views/check/checkInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'+globals["globalPath"]),
  routes
})

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes
// })

export default router
