// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/admin',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/HomePage.vue'),
      },
      {
        path: 'account',
         component: () => import('@/components/StaffAccount.vue'),
      },
      {
        path: 'contract',
        component: () => import('@/components/ListContract.vue'),
      },



    ],
  },
  {
    path: '/',
    component: () => import('@/components/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
