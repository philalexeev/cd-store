<template>
  <div class="container album">
    <div class="album__image-wrapper">
      <img class="album__image" :src="require(`@/assets/products/${albumCover}`)" alt="111">
      <button
        :class="['btn', 'btn--large', addedToCart ? 'btn--done' : 'btn--orange']"
        type="button"
        @click="addToCart">
          <span class="album__btn-inner">
            <span class="album__btn-name">{{ `${addedToCart ? 'Added to Cart' : 'Add to Cart'}` }}</span>
            <span class="album__price">{{ albumPrice }}$</span>
          </span>
      </button>
    </div>
    <div class="album__description">
      <div class="album__heading-wrapper">
        <h1 class="album__heading">{{ albumTitle }}</h1>
      </div>
      <p class="album__review">{{ summaryDescription }}</p>
    </div>
  </div>
</template>

<script>
import wikijs from 'wikijs';

export default {
  name: 'Album',
  props: {
    albumTitle: String,
    bandName: String,
    albumYear: Number,
    albumPrice: [String, Number],
    wikiPageId: [String, Number],
    albumCover: {
      default: 'logo.png'
    }
  },
  data() {
    return {
      summaryDescription: ''
    }
  },
  computed: {
    addedToCart() {
      let cart = this.$store.state.cart;
      for (let i = 0; i < cart.length; i++) {
        if ( this.wikiPageId === cart[i].albumId ) {
          return true
        }
      }
      return false
    }
  },
  methods: {
    getDescription() {
      let review = document.querySelector('.album__review');
      const cssStyles = 'height: auto;background-image: none;';
      wikijs().findById(this.wikiPageId)
        .then(page => page.summary())
        .then(response => {
          review.style.cssText = cssStyles;
          this.summaryDescription = response
        })
    },
    addToCart() {
      return this.$store.commit('addProduct', {
        bandName: this.bandName,
        albumYear: this.albumYear,
        albumTitle: this.albumTitle,
        price: this.albumPrice,
        albumId: this.wikiPageId
      })
    }
  },
  mounted () {
    this.getDescription()
  }
}
</script>

<style scoped lang="scss">
  .album {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /*padding: 50px 20px 50px;*/
    padding: 20px;

    @media screen and (min-width: 870px) {
      display: block;
    }

    @media screen and (min-width: 1200px) {
      display: flex;
      flex-direction: row;
    }
  }

  .album__image-wrapper {
    display: inline-block;
    flex-shrink: 0;
    /*width: 500px;*/
    /*margin-right: 50px;*/
    width: 100%;
    font-size: 0;

    @media screen and (min-width: 580px) {
      width: 400px;
      margin: 0 auto;
    }

    @media screen and (min-width: 870px) {
      float: left;
      margin-right: 30px;
    }

    @media screen and (min-width: 1200px) {
      float: none;
    }

    @media screen and (min-width: 1500px) {
      width: 500px;
      margin-right: 50px;
    }
  }

  .album__image {
    width: 100%;
    background-color: #eee;
    margin-bottom: 20px;

    @media screen and (min-width: 1500px) {
      width: 500px;
      height: 500px;
      margin-bottom: 50px;
    }
  }

  .album__btn-inner {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .album__btn-name {
    flex-grow: 1;
    padding: 15px 5px;
    font-size: 24px;
  }

  .album__price {
    flex-shrink: 0;
    padding: 15px;
    font-size: 24px;
    background-color: darken(#FF5C00, 10%);
  }

  .btn--done .album__price {
    background-color: darken(#00bf07, 10%);
  }

  .album__description {
    width: 100%;
    color: #333;
  }

  .album__heading {
    font-size: 30px;
    line-height: 1;

    @media screen and (min-width: 1500px) {
      font-size: 40px;
    }
  }

  .album__review {
    height: 50px;
    margin-top: 20px;
    line-height: 1.5;
    text-align: justify;
    background-image: url('../assets/misc/preloader.svg');
    background-repeat: no-repeat;
    background-size: 160px 30px;
    background-position: center top;
  }

  .btn--large {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;
  }
</style>
