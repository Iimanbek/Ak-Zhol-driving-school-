<template>

    <button class="buttonClose">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="20px " height="20px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;"
            xml:space="preserve">
            <g>
                <g id="keyboard-arrow-right">
                    <polygon points="58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306" />
                </g>
            </g>
        </svg>
    </button>
</template>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    fill: #408448;
}


.buttonClose {
    rotate: 180deg;
    margin: 10px 10px;
    border-radius: 5px;
    text-align: center;
    padding: 0px 5px;
    padding-top: 5px;
    transition: all 200ms;
    border: 4px solid white;
    position: absolute;
    top: 0;
    left: 0;

    &:hover {
        border: 4px solid  #408448;

    }
}


svg {
    fill: #032660;

}
</style>


