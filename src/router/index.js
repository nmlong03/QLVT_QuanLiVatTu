// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/admin',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue'),
      },
      {
        path: 'danh-sach-vat-tu',
        // component: () => import('@/'),
      },
      {
        path: 'thong-tin-vat-tu',
        // component: () => import('@/'),
      },
      {
        path: 'danh-sach-khach-hang-thue',
        // component: () => import('@/'),
      },
      {
        path: 'xuat-hoa-don',
        // component: () => import('@/'),
      },
      {
        path: 'thong-ke-hoa-don',
        // component: () => import('@/'),
      },
      {
        path: 'danh-sach-lich-su-giao-dich',
        // component: () => import('@/'),
      },
      {
        path: 'thong-ke-doanh-thu',
        // component: () => import('@/'),
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
