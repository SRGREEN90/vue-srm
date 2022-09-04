import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout:'empty'},
    component: () => import('../views/Login')
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {layout:'main'},
    component: () => import('../views/Categories')
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {layout:'detail'},
    component: () => import('../views/Detail')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout:'history'},
    component: () => import('../views/History')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout:'planning'},
    component: () => import('../views/Planning')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {layout:'profile'},
    component: () => import('../views/Profile')
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout:'record'},
    component: () => import('../views/Record')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout:'register'},
    component: () => import('../views/Register')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
