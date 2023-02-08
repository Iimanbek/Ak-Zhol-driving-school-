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

.closeWrapper {
    width: 100%;
    height: 610px;
    position: absolute;
    top: 0;



}

.meniuDefult {
    display: none;
}



.activeMeniu {
    display: block;
    position: absolute;
    top: 0px;

}

.meniuWrapper {
    position: relative;
    background-color: rgba(0, 0, 0, 0.61);
    width: 1000px;
    height: 100vh;

    .contentMeniu {
        width: 400px;
        position: absolute;
        top: 0px;
        left: -400px;
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        border-radius: 10px;
        -webkit-box-shadow: 4px 4px 8px 0px #408448;
        -moz-box-shadow: 4px 4px 8px 0px #408448;
        box-shadow: 4px 4px 8px 0px #408448;
        border: 2px solid #408448;


    }

    .activeContentMeniu {
        position: absolute;
        left: 0;

        .meniuConteiner {
            width: 90%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 50px 30px;

            .burgerLogo {
                margin-bottom: 50px;
                cursor: pointer;
            }
        }
    }
}

@media screen and (min-width: 1001px) {
    .activeMeniu {
        display: none;
    }

}
</style>