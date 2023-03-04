
<template>
    <nav class="navLinks">
        <a class="aboutMe"  @click="aboutMe">Обо мне</a>
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
export default {
    computed: {
        ...mapStores(useAnchorStore)
    },
    data () {
        return {
            aboutMeMark: false,
            SliderMark: false,
            contactwithmeMark : false

        }
    },
    methods: {
        aboutMe() {
            this.aboutMeMark =true
            scroll(0, this.anchorStore.cordinatAboutMe)
        },
        Slider() {
            this.SliderMark = true
            scroll(0, this.anchorStore.reviews)
        },
        contactwithme() {
            this.contactwithmeMark =true
            scroll(0, this.anchorStore.contact)
        },


    },


}
</script>

<style lang="scss" scoped>
.navLinks {
    width: 500px;
    display: flex;


    .aboutMe {
        font-size: 18px;

        color: #ffffff;
        font-weight: 400;

    }

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