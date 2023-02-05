<template>
    <div class="navLinks">
        <router-link to="#" class="aboutMe">Обо мне</router-link>
        <router-link to="#">Методичка</router-link>
        <router-link to="#">Видеоуроки</router-link>
        <router-link to="#">Отзывы</router-link>
        <router-link to="#">Контакты</router-link>
    </div>
</template>

<style lang="scss" scoped>
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
        text-decoration: none;

        &:hover {
            color: #032660;
            font-weight: 900;
        }
    }

}

@media screen and (max-width: 1180px) {
    .navLinks {
        margin-left: 30px;
    }
}

@media screen and (max-width: 1100px) {
    .navLinks {
        flex: none;
    }
}
@media screen and (max-width: 1167px) {

a {
    margin-left: 10px;
    height: 20px;
    width: 150px;
}
}
@media screen and (max-width: 1167px) {

a {
    margin-left: 10px;
    height: 20px;
    width: 150px;
}
}
</style>