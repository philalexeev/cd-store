<template>
  <div class="container home">
    <div class="home__heading-wrapper">
      <h1 class="home__heading">Vinyl Store</h1>
      <div class="home__subheading-wrapper">
        <h2 class="home__subheading">your home for rare, limited edition and exclusive vinyl</h2>
        <div class="decoration-line"></div>
      </div>
    </div>
    <router-link to="/store" tag="a" class="btn btn--orange btn--large">Go To Store</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .home__heading-wrapper {

  }
  .home__heading {
    font-size: 80px;
    line-height: 1;
    color: #333;
    text-transform: uppercase;
    text-shadow: 6px 7px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
  
    @media screen and (min-width: 870px) {
      font-size: 120px;
    }
  
    @media screen and (min-width: 1200px) {
      font-size: 160px;
    }
  
    @media screen and (min-width: 1500px) {
      font-size: 180px;
    }
  }

  .home__subheading-wrapper {
    position: relative;
    margin-bottom: 30px;
  
    @media screen and (min-width: 870px) {
      display: flex;
      margin-bottom: 80px;
    }
  }

  .home__subheading {
    flex-shrink: 0;
    display: inline-block;
    padding: 0 10px;
    font-size: 24px;
    text-align: center;
    color: #333;
    z-index: 2;
  
    @media screen and (min-width: 870px) {
      margin-right: 20px;
    }
  
    @media screen and (min-width: 1200px) {
      font-size: 30px;
    }
  }

  .decoration-line {
    position: relative;
    display: none;
    flex-grow: 1;
  
    @media screen and (min-width: 870px) {
      display: block;
    }
  }

  .decoration-line::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: block;
    height: 4px;
    background-color: #ec4404;
  }
</style>
