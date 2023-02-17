<template>
    <button>
        <slot />
    </button>
</template>

<style lang="scss" scoped>
* {
    box-sizing: border-box;
    padding: 0%;
    margin: 0;
}

button {
    width: 213px;
    height: 58.6px;
    background: #408448;
    border-radius: 8px;

    transition: box-shadow 0.5s, transform 0.5s;
    transform: scale(1);
    color: white;
    font-family: 'Raleway', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    transition: all 200ms;



    &:hover {
        border: 1px solid #fff;
        transform: scale(1.1);
        box-shadow: 0 0 15px 7px rgba(248, 255, 246, 0.219);
        transition: box-shadow 0.5s, transform 0.5s;
        font-weight: bold;
        background-color: #ffffff00;

    }
}
</style>