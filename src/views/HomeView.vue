<script>
import Slider from "../components/Slider.vue";
import MainPage from '../components/MainPage.vue';
import AboutMe from "../components/AboutMe.vue";
export default {
  components: {
    Slider,
    MainPage,
    AboutMe
  },
}; 
</script>

<template>
    <div class="back_color">
    <Layout>
    <div class="main">
      <div class="container">
          <MainPage />
          <AboutMe />
        <Slider />
      </div>
    </div>
  </Layout>
  </div>
</template>
