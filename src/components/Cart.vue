<template>
  <div class="component container cart">
    <div class="component__heading-wrapper">
      <div class="total">Total: {{ totalSum }}$</div>
    </div>
    <ul class="cart__table">
      <cart-item
        v-for="(item, index) in cart"
        :key="item.wikiPageId"
        :bandName="item.bandName"
        :albumYear="item.albumYear"
        :albumTitle="item.albumTitle"
        :price="item.albumPrice"
        :index="index"
        :albumCover="item.albumCover"
      />
    </ul>
    <button class="btn btn--orange btn--large" @click="checkout" v-if="cart.length !== 0">Checkout</button>
  </div>
</template>

<script>
import CartItem from './CartItem'

export default {
  name: 'Cart',
  data() {
    return {
      cart: this.$store.state.cart
    }
  },
  computed: {
    totalSum() {
      return this.$store.getters.totalSum
    }
  },
  components: {
    'cart-item': CartItem
  },
  methods: {
    checkout() {
      this.cart = [];
      this.$store.commit('checkout')
    }
  }
}
</script>

<style scoped lang="scss">
  .cart {
    padding-top: 20px;
    text-align: right;
  }

  .component__heading-wrapper {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .total {
    font-size: 30px;
    font-weight: 700;
  }

  .cart__table {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 40px;
    list-style: none;
  }

  .cart__table tr {
    transition: background-color 0.1s ease-in;
  }

  .cart__table tr:hover {
    background-color: #ddd;
  }
</style>
