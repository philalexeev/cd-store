<template>
  <div class="app">
    <!--<div class="app__bg"></div>-->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  components: {
    'app-header': Header
  }
}
</script>

<style lang="scss">
  @import "styles/global";
  
  .app {
    padding-top: 64px;
    height: 100vh;
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  
  /*.app__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('./assets/misc/bg__4k-bw.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(3px);
    z-index: -1;
  }*/
</style>
