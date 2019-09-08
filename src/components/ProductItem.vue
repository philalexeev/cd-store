<template>
  <router-link class="product__wrapper" :to="{ name: 'album', params: {
    albumTitle: albumTitle,
    bandName: bandName,
    albumPrice: productPrice,
    wikiPageId: wikiPageId,
    albumYear: albumYear,
    albumCover: `${albumCover ? albumCover : 'logo.png'}`
    }}">
    <div class="product__image">
      <img :src="require(`@/assets/products/${albumCover}`)" alt="">
    </div>
    <div class="product__description">
      <h2 class="product__album-title">{{ albumTitle }}</h2>
      <h3 class="product__band-name">{{ bandName }}</h3>
      <h3 class="product__album-year">{{ albumYear }}</h3>
      <div class="product__album-price-wrap">
        <button class="product__btn" type="button" @click="addToCart">
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M24 10H14V0h-4v10H0v4h10v10h4V14h10z' fill='%2300BF07'/%3E%3C/svg%3E" alt="">
        </button>
        <p class="product__album-price">{{ productPrice }}$</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ProductsItem',
  props: {
    albumTitle: String,
    bandName: String,
    albumYear: [String, Number],
    productPrice: [String, Number],
    wikiPageId: Number,
    albumCover: {
      default: 'logo.png'
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  .product__wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 280px;
    margin-top: 20px;
    background-color: #fff;
    text-decoration: none;
    color: #333;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 580px) {
      width: 250px;
    }
  }
  .product__image {
    position: relative;
    width: 100%;
    height: auto;
  }
  .product__description * {
    font-size: 20px;
    font-weight: normal;
  }
  .product__description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    padding: 10px;
  }
  .product__album-title {
    margin-bottom: auto;
    font-weight: bold;
  }
  .product__album-year {
    font-weight: bold;
    margin-top: 10px;
  }
  .product__band-name {
    margin-top: 10px;
    color: #777;
  }
  .product__album-price-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    margin-top: 10px;
  }
  .product__album-price {
    font-size: 24px;
    font-weight: bold;
    color: #FF5C00;
  }
  .product__btn {
    width: 23px;
    height: 23px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
</style>
