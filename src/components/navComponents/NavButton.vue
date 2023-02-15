<template>
    <button >
        <slot />
    </button>
</template>

<style lang="scss" scoped>
    button{
        width: 213px;
        height: 58.6px;
        background: #408448;
        border-radius: 8px;
        border: 2px solid #408448;
        

        color: white;
        font-family: 'Raleway',sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        transition: all 200ms;
      
       

        &:hover{
         
         color:#408448; 
         background-color: #b3b3b300;
            font-weight: bold;
         
        }
    }

</style>