import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/Login',
    name: 'login',
    component: () => import( '../views/Login.vue')
  },

  {
    path: '/Gallery',
    name: 'gallery',
    component: () => import( '../views/Gallery.vue')
  },

  {
    path: '/About',
    name: 'about',
    component: () => import( '../views/About.vue')
  },

  {
    path: '/Pricelist',
    name: 'pricelist',
    component: () => import( '../views/Pricelist.vue')
  },

  {
    path: '/Events',
    name: 'events',
    component: () => import( '../views/Events.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
