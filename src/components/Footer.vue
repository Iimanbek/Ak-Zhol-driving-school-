<template lang="">
    <footer>
        <v-under/>
    </footer>
</template>
<script>
import underLst from './underLst.vue';
export default {
    components:{
        'v-under':underLst,
    }
}
</script>
<style lang="scss">
footer{
    position: relative;
    z-index: 2;
    background: rgb(250, 249, 249);
}
</style>