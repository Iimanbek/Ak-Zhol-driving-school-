<script>
import Slider from "../components/Slider.vue";
import MainPage from '../components/MainPage.vue';
export default {
  components: {
    Slider,
    MainPage,
  },
}; 
</script>

<template>
  <Layout>
    <div class="main">
      <div class="container">
        <MainPage />
        <Slider />
      </div>
    </div>
  </Layout>
</template>


