<template lang="">
    <footer>
        <v-under/>
    </footer>
</template>
<script>
import underLst from './underLst.vue';
export default {
    components:{
        'v-under':underLst
    }
}
</script>
<style lang="scss">
footer{
    height: 100vh;
    background: rgb(250, 249, 249);
}
</style>