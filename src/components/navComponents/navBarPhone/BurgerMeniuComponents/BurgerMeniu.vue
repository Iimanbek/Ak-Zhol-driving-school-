<template>
    <ContentPhoneNav />
    <button @click="this.openCloseStore.open()">
        <span></span>
        <span></span>
        <span></span>
    </button>
</template>

<script>
import { mapStores } from 'pinia'
import { useOpenCloseStore } from '@/store/closeOpenmeniu'
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
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

button {
    display: none;
    transition: all 400ms;

    &:hover{
        background-color: rgba(48, 99, 88, 0.966);
        box-shadow: 6px 6px 6px  rgba(0, 0, 0, 0.25);

        span{
            border: 4px solid #408448;
        }
    }


    span {
        width: 60px;
        border: 4px solid white;
        border-radius: 20px;
        transition: all 300ms;

       
    }

}

@media screen and (max-width: 1000px) {
    button {
        display: block;
        width: 80px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background: #408448;
        padding: 1px;
        margin: 10px;
        padding: 7px;
        border-radius: 100%;
    }
}
</style>