<template>
    <div class="svich">
        <v-switch v-model="model" hide-details inset></v-switch>
    </div>
</template>

<script>
export default {
    data() {
        return {
            model: false,
        }
    }
}
</script>

<style lang="scss" scoped>
        .svich {
        margin-left: 45px;
    }



@media screen and (max-width: 1176px) {

    .svich {
        margin-right: 20px;
    }
}
</style>