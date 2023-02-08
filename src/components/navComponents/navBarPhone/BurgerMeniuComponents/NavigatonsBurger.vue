
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    

    .aboutMe {
        font-size: 32px;
        font-weight: 800;
        color: #408448;
        line-height: 21px;
    }

    a {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 21px;
        line-height: 21px;
        color: #000000;
        transition-duration: 400ms;
        text-decoration: none;
        margin-bottom: 50px;

        &:hover {
            color: #408448;
            font-weight: 900;
        }
    }

}
</style>
