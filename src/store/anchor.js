import { defineStore } from "pinia";

export const useAnchorStore = defineStore('anchor',{
    state: () => ({
        cordinatAboutMe: 0,
        Manual: 0,
        lessons: 0,
        reviews : 0 ,
        contact: 0,
        status: false 
    }),
    
})