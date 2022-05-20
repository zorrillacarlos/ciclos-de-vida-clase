import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bind',
    name: 'bind',
    component: () => import('../views/BindView.vue')
  },
  {
    path: '/props-emit',
    name: 'propsEmit',
    component: () => import( '../views/PropsEmitView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
