<template>
  <div class="product__wrapper">
    <div class="product__image">
      <img :src="require(`@/assets/products/${albumCover}`)" alt="">
    </div>
    <div class="product__description">
      <h2 class="product__album-title">{{ albumTitle }}</h2>
      <h3 class="product__album-year">{{ albumYear }}</h3>
      <h3 class="product__band-name">{{ bandName }}</h3>
      <button class="product__btn btn btn--orange" type="button" @click="addToCart">Add to cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsItem',
  props: {
    albumTitle: String,
    bandName: String,
    albumYear: [String, Number],
    productPrice: [String, Number],
    albumCover: {
      default: 'logo.png'
    }
  },
  data() {
    return {

    }
  },
  methods: {
    addToCart() {
      return this.$store.commit('addProduct', {
        bandName: this.bandName,
        albumYear: this.albumYear,
        albumTitle: this.albumTitle,
        price: this.productPrice
      })
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
  }
  .product__image {
    position: relative;
    width: 250px;
    height: 250px;
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
