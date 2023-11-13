import { defineStore } from 'pinia'
import request from "@/utils/request"
export const useCategories = defineStore("categories", {
    state: () => ({
        categories: [],
    }),
    getters: {
      getCategories(state)  {
      return state.categories
      }
    },
    actions: {
      async fetchCategories() {
        try {
          const data = await request.get('/categories')
            this.categories = data.categories
          }
          catch (error) {
          return error
        }
      },
      // async addProducts(payload) {
      //   try {
      //      await request.post('/products', payload)
      //     }
      //     catch (error) {
      //     return error
      //   }
      // },

    },
})
