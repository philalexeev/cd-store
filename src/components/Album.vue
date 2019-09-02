<template>
  <div class="container album">
    <div class="album__image-wrapper">
      <img class="album__image" :src="require(`@/assets/products/${albumCover}`)" alt="111">
      <button
        :class="['btn', 'btn--large', addedToCart ? 'btn--done' : 'btn--orange']"
        type="button"
        @click="addToCart">{{ `${addedToCart ? 'Added to Cart' : 'Add to Cart'}` }}</button>
    </div>
    <div class="album__description">
      <div class="album__heading-wrapper">
        <h1 class="album__heading">{{ albumTitle }}</h1>
        <h2 class="album__price">{{ albumPrice }}$</h2>
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
      wikijs().findById(this.wikiPageId)
        .then(page => page.summary())
        .then(response => {
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
    align-items: flex-start;
    padding: 50px 20px 50px;
  }

  .album__image-wrapper {
    display: inline-block;
    flex-shrink: 0;
    width: 500px;
    margin-right: 50px;
    font-size: 0;
  }

  .album__image {
    margin-bottom: 50px;
  }

  .album__description {
    width: 100%;
    color: #333;
  }

  .album__heading-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .album__heading,
  .album__price {
    font-size: 40px;
  }

  .album__review {
    margin-top: 50px;
    line-height: 1.5;
    text-align: justify;
  }

  .btn--large {
    width: 100%;
  }
</style>
