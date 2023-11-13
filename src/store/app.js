import { defineStore } from 'pinia'

export const useApp = defineStore('app', {
  state: () => ({
    toggle: false,
  }),
  getters: {
    getToggle(state) {
      return state.toggle;
    },
  },
  actions: {
    isToggle() {
      this.toggle = !this.toggle;
    }
  }

})
