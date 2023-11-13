import { defineStore } from 'pinia'
import request from "@/utils/request"
export const userStore = defineStore("user", {
    state: () => ({
        user: [],
    }),
    // getters: {
    //   getUsers(state){
    //       return state.products
    //     }
    // },
    actions: {
      async login(payload) {
        try {
          const data = await request.post('/owners/login', payload)
          return data
          }
          catch (error) {
            return error
        }
      }
    },
})
