<template >
    <div class="mainwrapper">
        <header>
            <nav>
                <BurgerMeniu />
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
    }
}
</script>
<style lang="scss" scoped>
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

    .navMainConteiner {
        width: 90%;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }


}

@media screen and (max-width: 1000px) {
    nav {
        background-color: #408440;
        height: 100px;
        display: flex;
        align-items: center;
    
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
.navButton{
    display: flex;
    align-items: center;
}

</style>