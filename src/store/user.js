import { defineStore } from 'pinia'
import request from "@/utils/request"
export const userStore = defineStore("user", {
    state: () => ({
        user: [],
    }),
    actions: {
      async login(payload) {
        try {
          const data = await request.post('/login', payload)
          return data
          }
          catch (error) {
          return error
        }
      }
    },
})
