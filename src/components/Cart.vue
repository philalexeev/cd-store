<template>
  <div class="component cart">
    <h1 class="component__heading">Cart</h1>
    <table class="cart__table">
      <tr v-for="item in cart"
          :key="Math.round()*50">
        <td class="cart__table-cell">{{ item.bandName }}</td>
        <td class="cart__table-cell">{{ item.albumYear }}</td>
        <td class="cart__table-cell">{{ item.albumTitle }}</td>
        <td class="cart__table-cell">{{ item.price }}$</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'Cart',
  data() {
    return {
      cart: this.$store.state.cart
    }
  }
}
</script>

<style scoped>
  .cart__table {
    width: 100%;
  }
  .cart__table tr:nth-child(odd) {
    background-color: #eee;
  }
  .cart__table-cell {
    padding: 10px 20px;
    white-space: nowrap;
  }
  .cart__table-cell:nth-child(3) {
    width: 100%;
  }
</style>
