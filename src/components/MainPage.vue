<template>
    <backFigura/>
    <div class="mainWraper">
        <div class="mainConteiner">
            <div class="contConeiner">
                <div class="Header">
                    <h1>Почувствуй себя на дороге уверенно!</h1>
                </div>
                <div class="paragraf">
                    <p>Права категории В и восстановление навыков вождения</p>
                </div>
                <div class="buttonWrapper">
                    <NavButton>Записаться</NavButton>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import NavButton from './navComponents/NavButton.vue';
import backFigura from './MainPageComponents/BackFigura.vue';
export default {
    components: {
        NavButton,
        backFigura
    }
}
</script>
<style lang="scss" scoped>
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}
.mainWraper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0  0 100px 0;
    padding-top: 30px;
    height: 580px;
    .mainConteiner {
        width: 100%;
        background: url('../imagesHeader/bacraundMain.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 20px;  
        z-index: 1; 
        box-shadow: 2px 2px 20px 5px  rgba(0, 0, 0, 0.25); 
        .contConeiner {
            width: 95%;
            height: 95%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            .Header {
                width: 45%;

                h1 {
                    font-family: 'Montserrat' sans-serif;
                    font-style: normal;
                    font-weight: 400;
                    font-size: 60px;
                    line-height: 78px;
                    display: flex;
                    align-items: flex-end;
                    color: #FFFFFF;
                }
            }

            .paragraf {
                width: 60%;

                p {
                    font-family: 'Raleway' sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 26px;
                    line-height: 33px;
                    color: #FFFFFF;
                }
            }
        }

    }
}
@media screen and (max-width: 1000px) {
    .mainWraper{
        margin-top: 20px;
    }
}
@media screen and (max-width: 1000px) {
    .buttonWrapper{
        margin-top: 20px;
    }
}
</style>