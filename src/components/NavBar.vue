<template >
    <div class="mainwrapper">
        <header>
            <div class="phoneNavbar">
                <BurgerMeniu />
            </div>
            <nav :class="{ scrollNav: this.heightSCroll > 90 }">
                <div class="dwd">
                    <div class="navMainConteiner">
                        <NavLogo />
                        <NavNavigation />
                        <div class="navButton">
                            <language />
                            <Button-v> Пройти тестирование </Button-v>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
    </div>
</template>
<script>
import NavNavigation from '@/components/navComponents/NavNavigations.vue';
import NavButton from '@/components/navComponents/NavButton.vue';
import NavLogo from './navComponents/NavLogo.vue';
import BurgerMeniu from './navComponents/navBarPhone/BurgerMeniuComponents/BurgerMeniu.vue';
import language from './navComponents/NavlanguageDown.vue';

export default {
    components: {
        'Button-v': NavButton,
        NavLogo,
        NavNavigation,
        BurgerMeniu,
        language
    },
    data() {
        return {
            heightSCroll: 0
        }
    },
    methods: {
        navScrol() {
            window.addEventListener('scroll', () => {
                this.heightSCroll = window.scrollY
            })
        }
    },
    mounted() {
        this.navScrol()
    }

}
</script>
<style lang="scss" scoped>
.phoneNavbar {
    background-color: #408440;
    height: 100px;
    width: 100%;
    display: none;
    position: fixed;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}

.scrollNav {
    background-color: rgba(48, 99, 88, 0.966);
    transition: 400ms;
    border-radius: 600px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    margin-top: 3px;
}

* {
    padding: 0px;
    margin: 0px;
    color: black;
    text-decoration: none;
}

.dwd {
    width: 100%;
    display: flex;
    justify-content: center;
}

.mainwrapper {
    height: 90px;
    position: relative;
    z-index: 2;
}

nav {
    width: 100%;
    position: fixed;
    transition: 400ms;

    .navMainConteiner {
        width: 90%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

@media screen and (max-width: 1000px) {
    .phoneNavbar {
        display: block;
    }
}

@media screen and (max-width: 1000px) {
    .dwd {
        display: none;
    }
}

@media screen and (max-width: 1108px) {
    .navMainConteiner {
        width: 100%;
    }
}

@media screen and (max-width: 1095px) {
    .navButton {
        margin-left: 35px;
    }
}

.navButton {
    display: flex;
    align-items: center;
}
</style>