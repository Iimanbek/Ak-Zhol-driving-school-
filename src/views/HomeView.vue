<script>
import MainPage from '../components/MainPage.vue';
export default {
  components : {
    MainPage
  }
}
</script>

<template>
  <Layout>
    <div class="main">
      <MainPage/>
    </div>
  </Layout>
</template>

<style lang="scss">
.main{
  background: pink;
  height: 100vh ;
}
</style>
