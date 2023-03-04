<template>
    <div class="inf_testWrapper">
        <div class="leftConteiner">
            <div class="infHeader">
                <h3>Информация о тесте</h3>
            </div>
            <div class="infParagraf">
                <p>Какой нибудь текст про тест</p>
                <p>Какой нибудь текст про тест</p>
            </div>
            <div class="infButton">
                <NavBuuton>Пройти тестирование</NavBuuton>
            </div>
        </div>
        <div class="rightConteiner">
            <img src="../assets/images/girlGuy.jpg">
        </div>
    </div>
</template>
<script>


import NavBuuton from '@/components/navComponents/NavButton.vue'
export default {
    components: {
        NavBuuton
    }
}

</script>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.inf_testWrapper {
  position: relative;
  z-index: 2;
    margin-top: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;


    .leftConteiner {
        width: 43%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        h3 {
            font-family: 'Montserrat', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            letter-spacing: -0.017em;
            color: #1C3D35;
        }

        p {
            font-family: 'Raleway', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 33px;
            color: #000000;
        }
    }

    .rightConteiner {
        width: 57%;

        img {
            width: 100%;
        }
    }
}
</style>