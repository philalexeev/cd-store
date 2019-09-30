<template>
  <div class="component container products__page">
    <div class="products">
      <div class="products__controls">
        <div class="products__search-wrapper">
          <label class="visuallyhidden" for="search">Search input</label>
          <input
            id="search"
            class="product__input products__search"
            type="search"
            placeholder="Search album"
            v-model="search">
        </div>
        <div class="products__select-wrapper">
          <label class="visuallyhidden" for="sorting">Sort typy select</label>
          <select class="product__input products__sorting-select" name="sorting" id="sorting" v-model="sortType">
            <option value="byDefault">Default</option>
            <option value="byBandName">Band Name</option>
            <option value="byAlbumTitle">Album Title</option>
            <option value="byPrice(highToLow)">Price (high to low)</option>
            <option value="byPrice(lowToHigh)">Price (low to high)</option>
            <option value="byYear">Year</option>
          </select>
        </div>
      </div>
      <ul class="products__list">
        <li
          class="products__list-item"
          v-for="album in sortedProducts"
          :key="album.wikiPageId">
          <app-product-item
            :albumTitle="album.title"
            :bandName="album.band"
            :albumYear="album.year"
            :productPrice="album.price"
            :wikiPageId="album.wikiPageId"
            :albumCover="`${album.coverUrl ? album.coverUrl : 'logo.png'}`"
          ></app-product-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  name: 'Products',
  data () {
    return {
      search: '',
      sortType: 'byDefault',
      products: this.$store.state.products
    }
  },
  computed: {
    sortedProducts () {
      switch (this.sortType) {
        case 'byDefault':
          return this.filteredSearchProducts.sort(this.sortByDefault);
        case 'byBandName':
          return this.filteredSearchProducts.sort(this.sortByBandName);
        case 'byAlbumTitle':
          return this.filteredSearchProducts.sort(this.sortByAlbumTitle);
        case 'byPrice(highToLow)':
          return this.filteredSearchProducts.sort(this.sortByPriceToLow);
        case 'byPrice(lowToHigh)':
          return this.filteredSearchProducts.sort(this.sortByPriceToHigh);
        case 'byYear':
          return this.filteredSearchProducts.sort(this.sortByYear);
      }
    },
    filteredSearchProducts() {
      return this.products.filter(album => {
        return album.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  components: {
    'app-product-item': ProductItem
  },
  methods: {
    addIndex() {
      this.products.forEach( (elem, i) => {
        elem.index = i;
      })
    },
    sortByDefault(d1, d2) {
      return (d1.index > d2.index) ? 1 : -1;
    },
    sortByBandName(d1, d2) {
      return (d1.band.toLowerCase() > d2.band.toLowerCase()) ? 1 : -1;
    },
    sortByAlbumTitle(d1, d2) {
      return (d1.title.toLowerCase() > d2.title.toLowerCase()) ? 1 : -1;
    },
    sortByPriceToHigh(d1, d2) {
      return (d1.price > d2.price) ? 1 : -1
    },
    sortByPriceToLow(d1, d2) {
      return (d1.price > d2.price) ? -1 : 1
    },
    sortByYear(d1, d2) {
      return (d1.year > d2.year) ? -1 : 1
    }
  },
  beforeMount () {
    this.addIndex()
  }
}
</script>

<style lang="scss">
  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
  }
  
  .products__controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  
    @media screen and (min-width: 580px) {
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
  }

  .products__search-wrapper,
  .products__select-wrapper {
    width: 100%;
  
    @media screen and (min-width: 580px) {
      width: 250px;
    }
  
    @media screen and (min-width: 870px) {
      width: 300px;
    }
  
    @media screen and (min-width: 1500px) {
      width: 350px;
    }
  }
  
  .product__input {
    font-size: 20px;
    width: 100%;
    padding: 5px 10px;
  }

  .products__sorting-select {
    margin-top: 10px;
    cursor: pointer;
  
    @media screen and (min-width: 580px) {
      margin-top: 0;
    }
  }

  .products__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
    list-style: none;
  }
  
  .products__list-item {
    display: flex;
    align-items: stretch;
    width: 47%;
    margin-right: 6%;
  
    &:nth-child(2n) {
      margin-right: 0;
    }

    @media screen and (min-width: 580px) {
      width: auto;
      margin-right: 20px;

      &:nth-child(2n) {
        margin-right: 0;
      }
    }

    @media screen and (min-width: 870px) {
      &:nth-child(2n) {
        margin-right: 20px;
      }

      &:nth-child(3n) {
        margin-right: 0;
      }
    }

    @media screen and (min-width: 1200px) {
      &:nth-child(3n) {
        margin-right: 20px;
      }

      &:nth-child(4n) {
        margin-right: 0;
      }
    }

    @media screen and (min-width: 1500px) {
      &:nth-child(4n) {
        margin-right: 20px;
      }

      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
</style>
