<script>
import MainPage from '../components/MainPage.vue';
import sliderss from '../components/Slider.vue'
export default {
  components : {
    MainPage,
    sliderss
  }
}
</script>

<template>
  <Layout>
    <div class="main">
      <MainPage/>
      <sliderss/>
    </div>
  </Layout>
</template>

<style lang="scss">
.main{
  height: 100vh ;
}
</style>
