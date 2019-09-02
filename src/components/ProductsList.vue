<template>
  <div class="component container products__page">
    <div class="products" v-for="band in products" :key="band.name.length*Math.random()*500">
      <ul class="products__list">
        <li
          class="products__list-item"
          v-for="productItem in band.albums"
          :key="productItem.title.length*Math.random()*500">
          <app-product-item
            :albumTitle="productItem.title"
            :bandName="band.name"
            :albumYear="productItem.year"
            :productPrice="productItem.price"
            :wikiPageId="productItem.wikiPageId"
            :albumCover="`${productItem.coverUrl ? productItem.coverUrl : 'logo.png'}`"
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

<style>
  .component__heading {
    font-size: 40px;
  }
  .products__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    list-style: none;
  }
  .products__list-item {
    display: flex;
    align-items: stretch;
  }
</style>
