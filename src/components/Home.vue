<template>
  <div class="container home">
    <div class="home__heading-wrapper">
      <h1 class="home__heading">Vinyl Store</h1>
      <div class="home__subheading-wrapper">
        <h2 class="home__subheading">your home for rare, limited edition and exclusive vinyl</h2>
      </div>
    </div>
    <router-link to="/products" tag="a" class="btn btn--orange btn--large">Go To Store</router-link>
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
    font-family: 'prostoone', sans-serif;
    font-size: 180px;
    line-height: 1;
    text-transform: uppercase;
    text-shadow: 6px 7px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
  }
  
  .home__subheading-wrapper {
    position: relative;
    margin-bottom: 100px;
  }

  .home__subheading {
    position: relative;
    display: inline-block;
    padding-right: 20px;
    font-family: 'prostoone', sans-serif;
    font-size: 30px;
    background-color: #fff;
    z-index: 2;
  }
  
  .home__subheading-wrapper::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-15%);
    display: block;
    width: 100%;
    height: 4px;
    background-color: #FF5C00;
    z-index: 1;
  }
</style>
