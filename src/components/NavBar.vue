<template >
    <div>
        <nav>
            <div class="navMainConteiner">
                <div class="navLogoWrapper">
                    <h2> Жакшы Жол</h2>
                </div>
                <div class="navLinks">
                    <router-link to="#" class="aboutMe">Обо мне</router-link>
                    <router-link to="#">Методичка</router-link>
                    <router-link to="#">Видеоуроки</router-link>
                    <router-link to="#">Отзывы</router-link>
                    <router-link to="#">Контакты</router-link>
                </div>
                <div class="svich">
                    <v-switch v-model="model" hide-details inset></v-switch>
                </div>
                <div class="navButton">
                    <Button-v/>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>

import NavButton from '@/components/navComponents/NavButton.vue'
export default {
    data () {
      return {
        model: false,
      }
    },
    components: {
        'Button-v': NavButton
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

nav {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: 3px solid #032660;
    position: fixed;
    background-color: #fff;

    .navMainConteiner {
        width: 90%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .navLinks {
            width: 40%;
            display: flex;
            justify-content: space-between;

            .aboutMe {
                font-size: 18px;
                font-weight: bolder;
                color: #032660;
                line-height: 21px;
            }

            a {
                font-family: 'Raleway', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 21px;
                color: #000000;
                transition-duration: 400ms;

                &:hover {
                    color: #032660;
                    font-weight: 900;
                }
            }

        }
        h2 {
            font-family: 'Comfortaa', cursive;
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 40px;
            color: #032660;
        }
        .svich{
            padding-left: 120px;
        }
    }
}
</style>