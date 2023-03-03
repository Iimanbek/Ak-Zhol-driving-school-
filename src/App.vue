<script>
    import customCursor from './components/customCursor.vue';
    export default{
        data: () => ({

        }),
        components:{
            'v-custom':customCursor,
        }
    }
</script>

<template>
    <v-custom/>
    <RouterView />
</template>

<style>
</style>
