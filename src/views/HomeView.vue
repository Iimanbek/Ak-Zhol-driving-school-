<script>
// import Slider from "../components/Slider.vue";
export default {
    components: {
        // Slider,
    },
};
</script>

<template>
    <Layout>
        <div class="main">
            <div class="container">
                <!-- <Slider /> -->
                <router-link to="/testing">
                    <v-btn>hello</v-btn>
                </router-link>
            </div>
        </div>
    </Layout>
</template>

<style lang="scss">
.main {
    background: pink;
    min-height: 100vh;
}
</style>
