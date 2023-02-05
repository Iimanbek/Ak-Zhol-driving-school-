<template>  
<ContentPhoneNav/>
    <button @click="this.openCloseStore.open()">
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>

<script>
import {mapStores} from 'pinia'
import {useOpenCloseStore} from '@/store/closeOpenmeniu'
import ContentPhoneNav from '../ContentPhoneNav.vue'
export default {   
    components: {
        ContentPhoneNav  
    },
   computed: {
    ...mapStores(useOpenCloseStore)
   },
   methods: {
    openMeniu() {
        this.openClose.open()
    }
   }
   
   
}

</script>

<style lang="scss" scoped>
button {
    display: none;

    span{
       width:  70px;
        border: 4px solid white;
    }

}

@media screen and (max-width: 1000px) {
    button {
        display: block;
        width: 70px;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: #032660;
        margin-left: 10px;
    }
}
</style>