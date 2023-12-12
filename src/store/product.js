import { defineStore } from 'pinia'
import request from "@/utils/request"
export const productStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  getters: {
    getTotalPages(state) {
      return state.totalPages
    }
  },
  actions: {
    async fetchProducts() {
      try {
        const data = await request.get('/products')
        this.products = data.products
      }
      catch (error) {
        return error
      }
    },
    async addProducts(payload) {
      try {
        const res = await request.post('/products', payload, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        this.products.push(res.product)
        return res
      }
      catch (error) {
        return error
      }
    },
    async deleteProduct(id) {
      try {
        await request.delete('/products/' + id)
        this.products = this.products.filter((item) => id !== item.id)
      }
      catch (error) {
        return error
      }
    },

  },
})
