<template>
    <div class="meniuDefult" :class="{ activeMeniu: this.openCloseStore.status }">
        <div class="meniuWrapper">
            <div class="closeWrapper" @click="closeMeniu" />
            <div class="contentMeniu " :class="{ activeContentMeniu: this.openCloseStore.status === true }">
                <div @click="closeMeniu">
                    <CloseBurButton />
                </div>
                <div class="meniuConteiner">

                    <button class="burgerLogo" @click="closeMeniu">
                        <NavLogo />
                    </button>
                    <NavBurger />
                    <NavButton>Пройти тестирование</NavButton>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia'
import { useOpenCloseStore } from '@/store/closeOpenmeniu'
import NavLogo from '../NavLogo.vue';
import NavBurger from '../navBarPhone/BurgerMeniuComponents/NavigatonsBurger.vue';
import NavButton from '@/components/navComponents/NavButton.vue'
import CloseBurButton from './BurgerMeniuComponents/CloseBurButton.vue'
export default {
    components: {
        NavLogo,
        NavBurger,
        NavButton,
        CloseBurButton
    },
    computed: {
        ...mapStores(useOpenCloseStore)
    },

    methods: {
        closeMeniu() {
            this.openCloseStore.close()
        }

    }


}


</script>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

}

.meniuDefult {
    width: 100%;
    height: 100vh;
    background-color: rgb(59, 48, 48);
    display: none;
    position: absolute;
    top: 0;
    left: -1000;
    overflow: hidden;

}

.activeMeniu {
    display: block;
    left: 0;

}

@media screen and (min-width: 1001px) {
    .activeMeniu {
        display: none;
    }

}
</style>