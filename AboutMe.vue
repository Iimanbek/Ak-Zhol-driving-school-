<template>
    <div class="abouttmeWrapper">
        <div class="headerAboutMe">
            <h2>Обо мне</h2>
        </div>
        <div class="wraperBlok">
            <div class="blok blok_1">
                <div class="contConteiner">
                    <div class="content">
                        <h5>1500+</h5>
                        <p>студентов <br> подготовил <br> индивидуально к практическому вождению</p>
                    </div>
                    <div class="imgConeiner">
                        <img src="@/assets/images/carGerl.png">
                    </div>
                </div>
            </div>
            <div class="blok blok_2">
                <div class="betweenContent">
                    <h5>25 + лет</h5>
                    <p>водительский стаж</p>
                </div>
                <div class="betwenImg">
                    <img src="@/assets/images/honda.png">
                </div>

            </div>
            <div class="blok blok_3">

                <div class="betweenContent">
                    <h5>6 лет</h5>
                    <p>преподавания в автошколе</p>
                </div>
                <div class="book">
                    <div class="imgbetween">
                        <img src="@/assets/images/book.png">
                    </div>
                </div>

            </div>
            <div class="blok blok_4">
                <div class="contConteiner">
                    <div class="content">
                        <h5>1600+</h5>
                        <p>студентов <br> было выпущено в автошколе</p>
                    </div>
                    <div class="imgConeiner">
                        <img src="@/assets/images/carMark.png">
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useAnchorStore } from '@/store/anchor'
export default {
    computed: {
        ...mapStores(useAnchorStore)
    },
    mounted() {
        let cont = document.querySelector('.abouttmeWrapper')
   
            this.anchorStore.cordinatAboutMe = cont.getBoundingClientRect().top


    }
}
</script >

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;

}

img {
    width: 100%;
    height: 100%;
}

.headerAboutMe {
    width: 100%;
    padding-bottom: 50px;


    h2 {
        color: #306358;
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 33px;
        font-family: 'Montserrat', sans-serif;
    }
}

h5 {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 33px;
    color: #032660;
}

p {
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: #000;
}

.wraperBlok {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    grid-auto-rows: minmax(10px, 10px);
    grid-gap: 10px;
    height: 400px;
    margin-bottom: 50px;

    .blok {
        background: #D9D9D9;
        border-radius: 12px;
        padding: 7px 7px;
        box-shadow: 2px 0px 2px 2px rgba(0, 0, 0, 0.25);


        .contConteiner {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .content {
                width: 90%;
                margin-top: 10px;
                height: 50%;
            }
        }
    }
}

.blok_2 {
    grid-column: 2/2;
    grid-row: 1/1;
    height: 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;


    .betweenContent {
        width: 90%;
        margin-top: 20px;
    }

    .betwenImg {
        width: 100%;
        height: 50%;
        position: relative;


        img {
            width: 70%;
            height: 100%;
            position: absolute;
            top: 0;
            right: -5px;
            object-fit: cover;
        }
    }
}


.blok_3 {
    padding: 0 5px;
    grid-column: 2/2;
    grid-row: 2/1;
    height: 48%;
    align-self: end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .book {
        width: 90%;
    }

    .imgbetween {
        width: 50%;
        display: flex;
        justify-content: flex-start;

    }
}

.abouttmeWrapper {
    position: relative;
  z-index: 2;
}

@media (max-width: 546px) {
    .abouttmeWrapper {
        height: 90vh;
    }

    .wraperBlok {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;

    }

    .blok_2 {
        height: 100%;
    }

    .blok_3 {
        grid-column: 2/2;
        grid-row: 2/2;
        height: 100%;
    }

    .blok {
        display: flex;
    }
}

@media (max-width: 390px) {

    .abouttmeWrapper {
        height: 140vh;
    }

    .wraperBlok {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
}
</style>

     
