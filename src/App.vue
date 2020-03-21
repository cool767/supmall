<template>
  <div id="app">
   <MainTabbar></MainTabbar>
   <keep-alive exclude="Detial"> <!--  此中的Detial是Detial.vue中的name值  -->
   <router-view/>
   </keep-alive>
  </div>
</template>

<script>
import MainTabbar from './components/contest/maintabbar'
export default {
  components: {
    MainTabbar
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
