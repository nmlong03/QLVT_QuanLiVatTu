import { defineStore } from 'pinia'
import request from "@/utils/request"
export const productStore = defineStore("products", {
    state: () => ({
        products: [],
        totalPages: Number
    }),
    getters: {
      getTotalPages(state){
          return state.totalPages
        }
    },
    actions: {
      async fetchProducts() {
        try {
          const data = await request.get('/products')
            this.products = data.products
            this.totalPages = data.totalPages
          }
          catch (error) {
          return error
        }
      },
      async addProducts(payload) {
        try {
           await request.post('/products', payload)
          }
          catch (error) {
          return error
        }
      },

    },
})
