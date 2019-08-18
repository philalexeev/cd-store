<template>
  <div class="product__wrapper">
    <div class="product__image"></div>
    <div class="product__description">
      <h2 class="product__album-title">{{ albumTitle }}</h2>
      <h3 class="product__album-year">{{ albumYear }}</h3>
      <h3 class="product__band-name">{{ bandName }}</h3>
      <button class="product__btn btn btn--blue" type="button">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsItem',
  props: ['albumTitle', 'bandName', 'albumYear']
}
</script>

<style scoped lang="scss">
  .product__wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 250px;
    margin-top: 20px;
  }
  .product__image {
    position: relative;
    width: 250px;
    height: 250px;
    background-color: darkgoldenrod;
  
    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border: 20px solid #fff;
    }

    &::before {
      top: 0;
      left: 0;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
    &::after {
      right: 0;
      bottom: 0;
      border-left-color: transparent;
      border-top-color: transparent;
    }
  }
  .product__description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    padding: 10px;
  }
  .product__album-year {
    font-size: 20px;
  }
  .product__band-name {
    color: #777;
    margin-bottom: auto;
  }
  .product__btn {
    width: 100%;
    margin-top: 10px;
  }
</style>
