/*
 * @Author: yhlyl
 * @Date: 2019-11-18 20:35:54
 * @LastEditTime: 2019-11-18 20:55:17
 * @LastEditors: yhlyl
 * @Description: 
 * @FilePath: /webwork/proj/src/router/index.js
 * @https://github.com/android-coco
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import First from '../views/First.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'First',
    component: First
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
