<template>
    <div class="abouttmeWrapper">
        <div class="headerAboutMe">
            <h2>Обо мне</h2>
        </div>
        <div class="wraperCards">
            <div class=" cards cards1">card1</div>
            <div class=" cards cards2">card2</div>
            <div class=" cards cards3">card3</div>
            <div class=" cards cards4">card4</div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
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
.wraperCards{
    display: grid;
    grid-template-columns: 400px  400px 400px;
    grid-template-rows:  ;
    
    .cards{
        border: 1px solid black;
    }
}
</style>
