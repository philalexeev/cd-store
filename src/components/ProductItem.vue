<template>
  <router-link
    class="product__wrapper"
    :to="{ name: 'album', params: {
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
  methods: {
    addToCart() {
      return this.$store.commit('addProduct', {
        bandName: this.bandName,
        albumYear: this.albumYear,
        albumTitle: this.albumTitle,
        price: this.albumPrice,
        albumId: this.wikiPageId
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
    width: 280px;
    margin-top: 20px;
    background-color: #fff;
    text-decoration: none;
    color: #333;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    
    &:hover .product__btn {
      opacity: 1;
    }

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
  .product__album-price {
    align-self: flex-end;
    font-size: 24px;
    font-weight: bold;
    color: #FF5C00;
  }
  .product__btn {
    opacity: 0;
    width: 23px;
    height: 23px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    transition: opacity 0.2s ease-in;
  }

  .product__btn-icon {
    width: 100%;
    height: 100%;
    fill: #00bf07;
  }
</style>
