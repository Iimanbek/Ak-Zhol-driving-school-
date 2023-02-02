<template>
    <button class="button">
        <slot/>
    </button>
</template>

<style lang="scss" scoped>
.button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 10px;
    background: #032660;
    border: 3px solid #032660;
    border-radius: 8px;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #fff;
    transition-duration: 300ms;


    &:hover {
        background: #fff;
        color: #032660;
        font-weight: bold;
    }


}
</style>