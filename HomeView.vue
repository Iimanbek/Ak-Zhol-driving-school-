<script>
import { mapStores } from 'pinia'
import { useOpenCloseStore } from '@/store/closeOpenmeniu'
import Slider from "../components/Slider.vue";
import MainPage from '../components/MainPage.vue';
import AboutMe from "../components/AboutMe.vue";
import onLst from "../components/onLst.vue";
import Videos from "@/components/Videos/Videos.vue";
import BackFigura from "../components/MainPageComponents/BackFigura.vue";
import InformationTest from '../components/InformationTest.vue';
import HowToContactWithMe from '../components/HowToContactWithMe.vue';
import { useAnchorStore } from '@/store/anchor'
import met from '../components/met.vue';
export default {
  components: {
    Slider,
    MainPage,
    AboutMe,
    met,
    onLst,
    BackFigura,
    InformationTest,
    HowToContactWithMe,
    Videos
  },
  computed: {
    ...mapStores(useOpenCloseStore, useAnchorStore)
  },
  mounted() {
    let slidera = document.querySelector('.d')
    this.anchorStore.reviews = slidera.getBoundingClientRect().top
  }

}; 
</script>

<template>
  <div class="back_color" :class="{ activScrolnon: this.openCloseStore.status }">
    <Layout>
      <div class="main">
        <div class="container">
          <BackFigura />
          <MainPage />
          <AboutMe />
          <met/>
          <Videos/>
          <div class="d">
            <Slider />
          </div>
          <InformationTest />
          <HowToContactWithMe />
        </div>
      </div>
    </Layout>
  </div>
</template>
