<template>
  <div class="app">
    <scrollbar class="scrollbar" :settings="scrollbarSettings">
      <div class="app__bg"></div>
      <app-header></app-header>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </scrollbar>
  </div>
</template>

<script>
import Header from './components/Header'
import vueCustomScrollbar from 'vue-custom-scrollbar'

export default {
  data() {
    return {
      scrollbarSettings: {
        wheelSpeed: 2,
      }
    }
  },
  components: {
    'app-header': Header,
    'scrollbar': vueCustomScrollbar
  }
}
</script>

<style lang="scss">
  @import "styles/global";
  @import "styles/transitions";

  .scrollbar {
    width: 100%;
    height: 100%;
  }

  .app {
    padding-top: 64px;
    height: 100vh;
    width: 100%;
  }

  .app__bg {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('./assets/misc/5007.jpg');
    background-repeat: repeat;
    z-index: -1;
  }
</style>
