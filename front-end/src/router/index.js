import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "AuthPage" */ '../views/AuthPage.vue')
  },
  {
    path: '/farms',
    name: 'Farms',
    component: () => import(/* webpackChunkName: "FarmsPage" */ '../views/FarmsPage.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
