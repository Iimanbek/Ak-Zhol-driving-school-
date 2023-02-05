<template>

    <div class="meniuDefult" :class="{ activeMeniu: this.openCloseStore.status  }">
        <div :class="{ closed: this.close === false }">
            <div class="meniuWrapper">
                <div class="contentMeniu" :class="{ activeContentMeniu: this.openCloseStore.status === true }">
                    <div class="meniuConteiner">
                        <button class="burgerLogo" @click="closeMeniu">
                            <NavLogo />
                        </button>
                        <NavBurger />

                    </div>
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
export default {
    components: {
        NavLogo,
        NavBurger,

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
.meniuDefult {
    display: none;
}

.closed {
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
        width: 500px;
        position: absolute;
        top: 0px;
        left: -500px;
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
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
            height: 400px;

            .burgerLogo {
                margin-bottom: 50px;
                cursor: pointer;
            }
        }
    }
}
</style>