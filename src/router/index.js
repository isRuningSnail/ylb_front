import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import IndexView from '@/views/IndexView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'IndexView',
    component: IndexView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/page/product/List',
    name: 'ProductList',
    component: () => import('../views/ProductList.vue')
  }
  ,
  {
    path: '/page/product/detail',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
