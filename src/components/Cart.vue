<template>
  <div class="component cart">
    <div class="component__heading-wrapper">
      <h1 class="component__heading">Cart</h1>
      <div class="total">Total: {{ totalSum }}$</div>
    </div>
    <table class="cart__table">
      <tr v-for="(item, index) in cart"
          :key="Math.random()*50">
        <td class="cart__table-cell">{{ item.bandName }}</td>
        <td class="cart__table-cell">{{ item.albumYear }}</td>
        <td class="cart__table-cell">{{ item.albumTitle }}</td>
        <td class="cart__table-cell">{{ item.price }}$</td>
        <td class="cart__table-cell">
          <button class="cart__remove-item" type="button" @click="removeItem(index)">X</button>
        </td>
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
  },
  computed: {
    totalSum() {
      return this.$store.getters.totalSum
    }
  },
  methods: {
    removeItem(index) {
      this.$store.commit('removeItem', index)
    }
  }
}
</script>

<style scoped lang="scss">
  .component__heading-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart__table {
    width: 100%;
    margin-top: 20px;
  }
  .cart__table tr:nth-child(odd) {
    background-color: #eee;
  }
  .cart__table tr:hover {
    background-color: #ddd;
  }
  .cart__table-cell {
    padding: 10px 20px;
    white-space: nowrap;
  }
  .cart__table-cell:nth-child(3) {
    width: 100%;
  }
  .cart__table-cell:last-child {
    padding: 0;
  }
  .cart__remove-item {
    padding: 10px 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in;

    &:hover {
      background-color: #d03;
      color: #fff;
    }
  }
</style>
