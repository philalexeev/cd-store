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
<!--      <button class="product__btn btn btn&#45;&#45;orange" type="button" @click="addToCart">Add to cart</button>-->
      <p class="product__album-price">{{ productPrice }}$</p>
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
    width: 250px;
    margin-top: 20px;
    background-color: #fff;
    text-decoration: none;
    color: #333;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
  }
  .product__image {
    position: relative;
    width: 250px;
    height: 250px;
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
  .product__album-price {
    align-self: stretch;
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
    text-align: right;
    color: #FF5C00;
  }
  .product__btn {
    width: 100%;
  }
</style>
