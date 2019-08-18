<template>
  <div class="container">
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
  * {
    font-family: 'Verdana', sans-serif;
    font-size: 20px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    @media screen and (min-width: 768px) {
      width: 90%;
    }

    @media screen and (min-width: 1440px) {
      width: 80%;
    }
  }
  
  .btn {
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.1s ease-in;
    
    &--blue {
      color: #fff;
      background-color: #09c;
    }
    
    &:hover {
      background-color: darken(#09c, 10%);
    }
  }
</style>
