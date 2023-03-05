<template>
  <div class="mm">
    <div class="top">
      <router-link class="router" to="/"><p>←</p></router-link>
      <h2>Видеоуроки</h2>
    </div>
    <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :pagination="{
      clickable: true,
    }"
        class="mySwiper"
        ref="swiper"
    >
      <swiper-slide v-for="(vid, index) in videos" :key="vid.id">
        <video :poster="vid.address" src="./video.mp4" ref="video"></video>
        <h3>{{vid.title}}</h3>
        <div class="absolute" :style="{ visibility: !vid.playing ? 'visible' : 'hidden' }">
          <button class="play" @click="playVideo(index)">
            <img src="./play.png" alt="">
          </button>
        </div>
        <div class="absolute" :style="{ visibility: vid.playing ? 'visible' : 'hidden' }">
          <button class="pause" @click="pauseVideo(index)">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/012/996/544/small/pause-icon-for-media-player-button-interface-video-and-audio-player-navigations-symbol-in-line-design-style-png.png" alt="">
          </button>
        </div>
      </swiper-slide>
    </swiper>
    <div class="top">
      <h2 class="class">Нарушение ПДД</h2>
    </div>
    <swiper
        :slidesPerView="4"
        :spaceBetween="30"
        :pagination="{
      clickable: true,
    }"
        class="mySwiper"
        ref="swiper"
    >
      <swiper-slide v-for="(vid, index) in videos" :key="vid.id">
        <video :poster="vid.address" src="./video.mp4" ref="video"></video>
        <h3>{{vid.title}}</h3>
        <div class="absolute" :style="{ visibility: !vid.playing ? 'visible' : 'hidden' }">
          <button class="play" @click="playVideo(index)">
            <img src="./play.png" alt="">
          </button>
        </div>
        <div class="absolute" :style="{ visibility: vid.playing ? 'visible' : 'hidden' }">
          <button class="pause" @click="pauseVideo(index)">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/012/996/544/small/pause-icon-for-media-player-button-interface-video-and-audio-player-navigations-symbol-in-line-design-style-png.png" alt="">
          </button>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';
import('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      videos: [],
    };
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  methods: {
    async getComments() {
      const URL = "http://localhost:3000/swiper-video";
      const res = await fetch(URL);
      const data = await res.json();
      this.videos = await data.map(v => ({...v, playing: false}));
    },
    playVideo(index) {
      const video = this.$refs.swiper.$el.getElementsByClassName("swiper-slide")[index].querySelector("video");
      video.play();
      video.requestFullscreen();
      this.videos[index].playing = true;
    },
    pauseVideo(index) {
      const video = this.$refs.swiper.$el.getElementsByClassName("swiper-slide")[index].querySelector("video");
      video.pause();
      this.videos[index].playing = false;
    }
  },
  mounted() {
    this.getComments();
  },
};
</script>

<style scoped>
a{
  text-decoration: none;
}
.class{
  border: 3px solid #FFFFFF;
  margin: 50px 0;
  padding: 10px;
  background: #000;
  border-radius: 0 20px 0 20px;
}
.mm{
  padding: 104px;
  background: #306358;
}
.top{
  display: flex;
  align-items: center;
}
.router{
  color: #FFFFFF;
}
.absolute button{
  width: 100%;
  height: 100%;
}
.absolute{
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 295px;
  height: 211px;
}
.play img{
  width: 121px;
  height: 121px;
}
.play{
  position: relative;
  z-index: 10;
}
.pause{
  position: relative;
  z-index: 10;
}
.pause img{
  width: 100px;
  height: 100px;
}
h2{
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 33px;
  color: #FFFFFF;
}
h3{
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-shadow: 1px 1px 1px 1px black;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide{
  width: 295px;
  margin: 20px;
}
.swiper-slide:first-child {
  margin: 20px 0;
}
.swiper-slide video {
  position: relative;
  border-radius: 12px;
  width: 295px;
  height: 211px;
}
</style>