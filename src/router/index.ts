import { createRouter, createWebHashHistory, createWebHistory,RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
// import Order from '@views/order/orderInfo.vue'
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
    path: '/order',
    name: 'Order',
    // component :Order,
    component: () => import('@views/order/orderInfo.vue')
    // children: [
    //   {
		// 		path: 'my',
		// 		name: 'My',
		// 		component: () => import('@views/my/myInfo.vue'),
		// 	},
    // ]
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
