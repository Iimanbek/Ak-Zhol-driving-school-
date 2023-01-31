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
                    <button class="button">Пройти тестирование</button>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    data () {
      return {
        model: false,
      }
    },
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

        .button {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 20px;
            gap: 10px;
            background: #032660;
            border: 3px solid #032660;
            border-radius: 8px;
            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 21px;
            color: #fff;
            transition-duration: 300ms;


            &:hover {
                background: #fff;
                color: #032660;
                font-weight: bold;
            }

        }
    }
}
</style>