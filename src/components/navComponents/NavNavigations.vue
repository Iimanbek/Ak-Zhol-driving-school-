
<template>
    <nav class="navLinks">
        <a @click="aboutMe">Обо мне</a>
        <a @click="">Методичка</a>
        <a @click="">Видеоуроки</a>
        <a @click="Slider">Отзывы</a>
        <a @click="contactwithme">Контакты</a>
    </nav>
</template>

<script>
import { mapStores } from 'pinia'
import { useAnchorStore } from '@/store/anchor'
import Slider from '../Slider.vue';
import { url } from 'inspector';
import { data } from 'dom7';
export default {
    computed: {
        ...mapStores(useAnchorStore)
    },
    data() {
        return {
            aboutMeMark: false,
            SliderMark: false,
            contactwithmeMark: false,
            data: null

        }
    },
    methods: {
        aboutMe() {
            this.aboutMeMark = true
            scroll(0, this.anchorStore.cordinatAboutMe)
        },
        Slider() {
            this.SliderMark = true
            scroll(0, this.anchorStore.reviews)
        },
        contactwithme() {
            this.contactwithmeMark = true
            scroll(0, this.anchorStore.contact)
        },

        async fetcNav() {
            const URL = 'http://localhost:3000/kg'
            const response = await fetch(URL)
            this.data = response.json()
        }


    },
    mounted() {
        this.fetcNav()
    }


}
</script>

<style lang="scss" scoped>
.navLinks {
    width: 500px;
    display: flex;


    a {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #ffffff;
        transition-duration: 400ms;
        text-decoration: none;
        margin: 0px 10px;
        cursor: pointer;

        &:hover {
            color: #408448;
            font-weight: 900;
        }
    }

}
</style>