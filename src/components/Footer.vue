<template>
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
    background: rgba(176, 211, 197,0.9);
}
</style>