<template>
  <div class="container album">
    <div class="album__image-wrapper">
      <img class="album__image" :src="require(`@/assets/products/${albumKeys.albumCover}`)" :alt="`${albumKeys.bandName} - ${albumKeys.albumTitle}`">
      <button
        :class="['btn', 'btn--large', addedToCart ? 'btn--done' : 'btn--orange']"
        :disabled="addedToCart"
        type="button"
        ref="btn"
        @click="addToCart">
          <span class="album__btn-inner">
            <span class="album__btn-name">{{ `${addedToCart ? 'Added to Cart' : 'Add to Cart'}` }}</span>
            <span class="album__price">{{ albumKeys.albumPrice }}$</span>
          </span>
      </button>
    </div>
    <div class="album__description">
      <div class="album__heading-wrapper">
        <h1 class="album__heading">{{ albumKeys.albumTitle }}</h1>
      </div>
      <p class="album__review" ref="review">{{ summaryDescription }}</p>
    </div>
  </div>
</template>

<script>
import wikijs from 'wikijs';

export default {
  name: 'Album',
  data() {
    return {
      summaryDescription: ''
    }
  },
  computed: {
    albumKeys() {
      let propsObj = {};
      for ( let key in this.$route.query) {
        propsObj[key] = this.$route.query[key]
      }
      return propsObj
    },
    addedToCart() {
      let cart = this.$store.state.cart;
      for (let i = 0; i < cart.length; i++) {
        if ( this.albumKeys.wikiPageId === cart[i].wikiPageId ) {
          return true
        }
      }
      return false
    }
  },
  methods: {
    getDescription() {
      let review = this.$refs.review;
      const cssStyles = 'height: auto;background-image: none;';
      wikijs().findById(this.albumKeys.wikiPageId)
        .then(page => page.summary())
        .then(response => {
          review.style.cssText = cssStyles;
          this.summaryDescription = response
        })
    },
    addToCart() {
      this.$refs.btn.disabled = true;
      return this.$store.commit('addProduct', this.albumKeys)
    }
  },
  mounted () {
    this.getDescription();
  }
}
</script>

<style scoped lang="scss">
  .album {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    width: 100%;
    font-size: 0;

    @media screen and (min-width: 360px) {
      width: 320px;
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
    background-color: darken(#ec4404, 10%);
  }

  .btn--done .album__price {
    background-color: darken(#00bf07, 10%);
  }

  .btn--done[disabled] .album__price {
    background-color: darken(#6d996f, 10%);
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
    font-size: 16px;
    line-height: 1.5;
    text-align: justify;
    background-image: url('../assets/misc/preloader.svg');
    background-repeat: no-repeat;
    background-size: 160px 30px;
    background-position: center top;

    @media screen and (min-width: 870px) {
      font-size: 20px;
    }
  }

  .btn--large {
    width: 100%;
    padding: 0;
    margin-bottom: 20px;

    @media screen and (min-width: 870px) {
      margin-bottom: 0;
    }
  }
</style>
