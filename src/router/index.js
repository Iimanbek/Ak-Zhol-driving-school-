import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import See_all from '../components/Videos/See_all.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vidios',
      name: 'vidios',
      component: See_all
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/testing/:id',
      name: 'testing',
      component: () => import('../views/TestingView.vue')
    },
    {
      path: '/testingg/finish',
      name: 'finish',
      component: () => import('../components/testFinish.vue')
    }
  ]
})

export default router
