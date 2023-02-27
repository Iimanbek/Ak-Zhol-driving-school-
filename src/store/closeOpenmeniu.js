import { defineStore } from "pinia";
export const useOpenCloseStore = defineStore('openClose', {
    state: () => ({
        status: null
    }),
    actions: {
        open() {
            this.status = true
        },
        close() {
            this.status = false
        }
        
    }
})