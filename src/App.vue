<script>
import customCursor from './components/customCursor.vue';
export default{
  components:{
    'v-custom':customCursor
  }
}
</script>

<template>
  <RouterView />
  <v-custom/> 
</template>

<style></style>