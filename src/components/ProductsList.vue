<template>
  <div class="component container products__page">
    <div class="products">
      <select class="products__sorting-select" name="sorting" id="sorting" v-model="sortType">
        <option value="byDefault">Default</option>
        <option value="byBandName">Band Name</option>
        <option value="byAlbumTitle">Album Title</option>
        <option value="byPrice(highToLow)">Price (high to low)</option>
        <option value="byPrice(lowToHigh)">Price (low to high)</option>
        <option value="byYear">Year</option>
      </select>
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
import jsonList from '../products.json'

export default {
  name: 'Products',
  data () {
    return {
      sortType: 'byDefault'
    }
  },
  computed: {
    products() {
      return jsonList.products.forEach( function(elem, i) {
        elem.index = i;
      })
    },
    sortedProducts () {
      switch (this.sortType) {
        case 'byDefault':
          return this.products.sort(this.sortByDefault);
        case 'byBandName':
          return this.products.sort(this.sortByBandName);
        case 'byAlbumTitle':
          return this.products.sort(this.sortByAlbumTitle);
        case 'byPrice(highToLow)':
          return this.products.sort(this.sortByPriceToLow);
        case 'byPrice(lowToHigh)':
          return this.products.sort(this.sortByPriceToHigh);
        case 'byYear':
          return this.products.sort(this.sortByYear);
      }
    }
  },
  components: {
    'app-product-item': ProductItem
  },
  methods: {
    sortByDefault(d1, d2) {
      return (d1.index.toLowerCase() > d2.index.toLowerCase()) ? 1 : -1;
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
  }
}
</script>

<style lang="scss">
  .products {
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    padding-top: 20px;
  }

  .products__sorting-select {
    align-self: flex-end;
    font-size: 20px;
    width: 300px;
    padding: 5px 10px;
    cursor: pointer;
  }

  .products__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    list-style: none;

    @media screen and (min-width: 580px) {
      justify-content: flex-start;
    }
  }
  .products__list-item {
    display: flex;
    align-items: stretch;
    margin-right: 0;

    @media screen and (min-width: 580px) {
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
