<template>
  <div class="component container products__page">
    <div class="products">
      <ul class="products__list">
        <li
          class="products__list-item"
          v-for="album in products"
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
      products: jsonList.products
    }
  },
  components: {
    'app-product-item': ProductItem
  }
}
</script>

<style lang="scss">
  .products__list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
  }
  .products__list-item {
    display: flex;
    align-items: stretch;
    margin-right: 20px;

    @media screen and (min-width: 590px) {
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
