import Vue from 'vue'
import VueRouter from 'vue-router'
import modify from '../views/modify.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 'listpage',
    component: () => import( '../views/listpage.vue')
  },
  {
    path: '/modify',
    name: 'modify',
    component: modify
  },
  {
    path: '/addto',
    name: 'addto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/addto.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
