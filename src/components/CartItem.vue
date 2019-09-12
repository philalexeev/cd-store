<template>
  <tr>
    <td class="cart__table-cell">{{ bandName }}</td>
    <td class="cart__table-cell">{{ albumYear }}</td>
    <td class="cart__table-cell">{{ albumTitle }}</td>
    <td class="cart__table-cell">
      <button class="cart__amount-btn cart__amount-btn-decrease" @click="decreaseAmount(index)">-</button>
      <span class="cart__amount">{{ amount }}</span>
      <button class="cart__amount-btn cart__amount-btn-increase" @click="increaseAmount(index)">+</button>
    </td>
    <td class="cart__table-cell">{{ price }}$</td>
    <td class="cart__table-cell">
      <button class="cart__remove-item" type="button" @click="removeItem(index)">X</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['bandName', 'albumYear', 'albumTitle', 'price', 'index'],
  data() {
    return {
      amount: 1,
      cart: this.$store.state.cart
    }
  },
  computed: {

  },
  methods: {
    removeItem(index) {
      this.$store.commit('removeItem', index)
    },
    increaseAmount(index) {
      this.amount++
      this.$store.state.cart[index].amount = this.amount
    },
    decreaseAmount(index) {
      this.amount < 2 ? this.amount = 1 : this.amount--
      this.$store.state.cart[index].amount = this.amount
    }
  }
}
</script>

<style scoped lang="scss">
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

  .cart__amount {
    display: inline-block;
    width: 70px;
    padding: 0 10px;
    text-align: center;
  }

  .cart__amount-btn {
    height: 27px;
    width: 27px;
    background-color: pink;
    border: none;
    cursor: pointer;
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
