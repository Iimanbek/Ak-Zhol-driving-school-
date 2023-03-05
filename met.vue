<template>
    <div class="metWraper">
        <div>
            <img src="../assets/images/met.jpg" alt="">
        </div>
        <div class="leftContent">
            <div>
                <h4>Информация о методичке</h4>
            </div>
            <div>
                <p>Во время преподавания ПДД в автошколе, обнаружил ошибки и не полную информацию в ПДД Кыргызстана от 5
                    февраля 2020 года. Отталкиваясь от этих ошибок, составил свою методичку по ПДД.</p>
            </div>
            <div>
                <NavButton>Купить</NavButton>
            </div>
        </div>

    </div>
</template>

<script>

import NavButton from "@/components/navComponents/navButton.vue"
export default {
    components: {
        NavButton
    }
}
</script>

<style lang="scss">
.metWraper {
  position: relative;
  z-index: 2;
    display: flex;
    margin-top: 100px;
    justify-content: space-between;

    .leftContent {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        h4 {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 33px;
            color: #306358;
        }

        p {
            font-family: 'Raleway',sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 36px;
            color: #000000;
        }
    }
}
</style>