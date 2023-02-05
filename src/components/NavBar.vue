<template >
    <div class="mainwrapper">
        <header>
            <nav>
                <BurgerMeniu/>
                <!-- <ContentPhoneNav/> -->
                <div class="dwd"> 
                    <div class="navMainConteiner">
                       
                        <NavLogo />
                        <NavNavigation />
                        <NavSwich />
                        <div class="navButton">
                            <Button-v>
                                Пройти тестирование
                            </Button-v>
                        </div>
                    </div>
                </div>

            </nav>
        </header>


    </div>
</template>
<script>
// import ContentPhoneNav from './navComponents/NavbarPhone/ContentPhoneNav.vue';
import NavNavigation from '@/components/navComponents/NavNavigations.vue'
import NavButton from '@/components/navComponents/NavButton.vue'
import NavLogo from './navComponents/NavLogo.vue';
import NavSwich from './navComponents/NavSwich.vue';
import BurgerMeniu from './navComponents/navBarPhone/BurgerMeniuComponents/BurgerMeniu.vue';
export default {
    components: {
        'Button-v': NavButton,
        NavLogo,
        NavNavigation,
        NavSwich,
        BurgerMeniu,
        // ContentPhoneNav
    }
}
</script>
<style lang="scss" scoped>
* {
    padding: 0px;
    margin: 0px;
    color: black;
    text-decoration: none;
    background-color: #D9D9D9
}

.dwd {
    width: 100%;
    display: flex;
    justify-content: center;
}

.mainwrapper {
    height: 90px;
    position: relative;
    z-index: 1;
}

nav {
    width: 100%;
    border-bottom: 3px solid #032660;
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
    nav{
        background-color: #032660;
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
</style>