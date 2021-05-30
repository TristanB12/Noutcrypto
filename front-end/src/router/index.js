import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import store from "@/store";

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
  {
    path: '/farm-details',
    name: 'FarmDetails',
    component: () => import(/* webpackChunkName: "FarmDetails" */ '../views/FarmDetails.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: ''
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!store.state.user) {
      next({name: 'Auth'})
    }
    else {
      next()
    }
  }
  else {
    next()
  }
})

export default router
