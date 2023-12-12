// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/admin",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "home",
        component: () => import("@/HomePage.vue"),
      },
      {
        path: "account",
        component: () => import("@/components/StaffAccount.vue"),
      },
      {
        path: "contract",
        component: () => import("@/components/ListContract.vue"),
      },
      {
        path: "list-product",
        component: () => import("@/views/products/ListProduct.vue"),
      },
      {
        path: "list-customer",
        component: () => import("@/views/customer/ListCustomer.vue"),
      },
      {
        path: "list-history",
        component: () => import("@/views/transaction_history/ListHistory.vue"),
      },
      {
        path: "list-contract",
        component: () => import("@/views/contract/ListContract.vue"),
      },
      {
        path: 'list-categories',
        component: () => import('@/views/categorires/ListCategories.vue')
      },
    ],
  },
  {
    path: "/",
    
    component: () => import("@/components/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
