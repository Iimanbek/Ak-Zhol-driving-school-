<template >
    <div>
        <nav>
            <div class="navMainConteiner">
                <div class="navLogoWrapper">
                    <h2> Жакшы Жол</h2>
                </div>
                <div class="navLinks">
                    <router-link to="#">Обо мне</router-link>
                    <router-link to="#">Методичка</router-link>
                    <router-link to="#">Видеоуроки</router-link>
                    <router-link to="#">Отзывы</router-link>
                    <router-link to="#">Контакты</router-link>
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

            a {
                font-family: 'Raleway', sans-serif;
                font-style: normal;
                font-weight: 400;
                font-size: 18px;
                line-height: 21px;
                color: #000000;
            }

        }

        h2 {
            font-family: 'Comfortaa', cursive;
            font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 40px;
            color: #000000;
        }

        .button {
            box-sizing: border-box;
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
            color: #FFFFFF;
        }
    }
}
</style>