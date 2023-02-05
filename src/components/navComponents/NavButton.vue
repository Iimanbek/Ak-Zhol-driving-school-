<template>
    <button >
        <slot />
    </button>
</template>

<style lang="scss" scoped>
    button{
        width: 213px;
        height: 58.6px;
        background-color:rgba(3, 38, 96, 1);
        border-radius: 8px;
        color: white;
        font-family: 'Raleway',sans-serif;
        font-size: 18px;
        line-height: 21px;
        transition: 200ms;
        transition-duration: 300ms;
        border: 3px solid rgba(3, 38, 96, 1);

        &:hover{
            color:rgba(3, 38, 96, 1); 
            background-color: #fff;
            font-weight: bold;
         
        }
    }
// @media screen and (max-width: 1020px) {
//     button{
//         margin-left: 15px;
//     }
// }
</style>