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
        line-height: 21px;
        color: #408448;
        font-weight: 400;
     
    }

    a {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        transition-duration: 400ms;
        text-decoration: none;

        &:hover {
            color: #408448;
            font-weight: 900;
        }
    }

}

@media screen and (max-width: 1180px) {
    .navLinks {
        margin: 0px 10px;
        text-align: start;
    }
}


@media screen and (max-width: 1036px) {
    .navLinks {
        margin-right: 20px;
      
    }
}
@media screen and (max-width: 1100px) {
    .navLinks {
        flex: none;
          margin: 0px 10px;
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