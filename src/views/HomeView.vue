<script>
import MainPage from '../components/MainPage.vue';
import sliderss from '../components/Slider.vue'
import onLst from '../components/onLst.vue';
export default {
  components : {
    MainPage,
    sliderss,
    onLst
  }
}
</script>

<template>
  <Layout>
    <div class="main">
      <MainPage/>
      <sliderss/>
      <onLst/>
    </div>
  </Layout>
</template>

<style lang="scss">
.main{
  // height: 200vh ;
}
</style>
