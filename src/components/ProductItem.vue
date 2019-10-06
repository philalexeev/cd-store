<template>
  <router-link
    class="product__wrapper"
    :to="{ name: 'album', params: { selfId: wikiPageId }}"
    @click.native="addCurrentAlbum">
    <div class="product__image">
      <img :src="require(`@/assets/products/${albumCover}`)" alt="">
    </div>
    <div class="product__description">
      <h2 class="product__album-title product__text">{{ albumTitle }}</h2>
      <h3 class="product__band-name product__text">{{ bandName }}</h3>
      <h3 class="product__album-year product__text">{{ albumYear }}</h3>
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
    },
    setCurrentAlbum() {
      return this.$store.commit('setCurrentAlbum', {
        albumTitle: this.albumTitle,
        bandName: this.bandName,
        albumPrice: this.productPrice,
        wikiPageId: this.wikiPageId,
        albumYear: this.albumYear,
        albumCover: `${this.albumCover ? this.albumCover : 'logo.png'}`
      })
    },
    addCurrentAlbum() {
      return this.$store.commit('addCurrentAlbum', {
        albumTitle: this.albumTitle,
        bandName: this.bandName,
        albumPrice: this.productPrice,
        wikiPageId: this.wikiPageId,
        albumYear: this.albumYear,
        albumCover: `${this.albumCover ? this.albumCover : 'logo.png'}`
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
    width: 100%;
    margin-top: 20px;
    background-color: #fff;
    text-decoration: none;
    color: #333;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    transition: box-shadow 0.2s ease-in, transform 0.2s ease-in;

    &:hover, &:focus {
      box-shadow: 2px 2px 20px rgba(0, 0, 0, 1);
      transform: scale(1.01) translateY(-3px);
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
    padding: 5px 10px 10px;
  }
  .product__text {
    margin-top: 5px;
    font-size: 14px;
    font-weight: bold;
    
    @media screen and (min-width: 480px) {
      font-size: 18px;
    }
    
    @media screen and (min-width: 580px) {
      font-size: 20px;
    }
  }
  .product__album-title {
    margin-top: 0;
    margin-bottom: auto;
  }
  .product__band-name {
    color: #777;
    font-weight: normal;
  }
  .product__album-price {
    align-self: flex-end;
    font-size: 20px;
    font-weight: bold;
    color: #FF5C00;
  
    @media screen and (min-width: 580px) {
      font-size: 24px;
    }
  }
</style>
