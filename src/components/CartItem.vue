<template>
  <li>
    <div class="cart__album-image"></div>
    <div class="cart__block">
      <div class="cart__table-cell">{{ bandName }}</div>
    </div>
    <div class="cart__block">
      <div class="cart__table-cell">{{ albumYear }}</div>
    </div>
    <div class="cart__table-cell cart__album-title cart__block">{{ albumTitle }}</div>
    <div class="cart__amount-wrapper">
      <div class="cart__table-cell">
        <button class="cart__amount-btn cart__amount-btn-decrease" @click="decreaseAmount(index)">
          <svg class="cart__amount-btn-icon">
            <use xlink:href="#minus"></use>
          </svg>
        </button>
        <span class="cart__amount">{{ amount }}</span>
        <button class="cart__amount-btn cart__amount-btn-increase" @click="increaseAmount(index)">
          <svg class="cart__amount-btn-icon">
            <use xlink:href="#plus"></use>
          </svg>
        </button>
      </div>
      <div class="cart__price">
        <span>{{ price }}$</span>
      </div>
      <button class="cart__remove-item" type="button" @click="removeItem(index)">X</button>
    </div>
  </li>
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
      this.$store.commit('addAmount', {
        index,
        amount: this.amount
      })
    },
    decreaseAmount(index) {
      this.amount < 2 ? this.amount = 1 : this.amount--
      this.$store.commit('addAmount', {
        index,
        amount: this.amount
      })
    }
  }
}
</script>

<style scoped lang="scss">
  li {
    /*display: flex;*/
    /*flex-direction: column;*/
  }
  li > div {
    display: flex;
    align-items: center;
  }
  .cart__table-cell {
    padding: 10px;
    white-space: nowrap;
    
    &-remove {
      display: flex;
      align-items: stretch;
      padding: 0;
    }
  }
  .cart__album-image {
    display: none;
    width: 30px;
    height: 30px;
    background-color: #f00;
  }
  .cart__album-title {
    order: -1;
    margin-right: auto;
  }

  .cart__amount-wrapper {
    justify-content: space-between;
    align-items: stretch;
    background-color: #ddd;
  }

  .cart__amount {
    display: inline-block;
    width: 70px;
    padding: 0 10px;
    text-align: center;
    vertical-align: middle;
  }

  .cart__amount-btn {
    height: 27px;
    width: 27px;
    padding: 3px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    vertical-align: middle;

    &:hover .cart__amount-btn-icon {
      fill: #FF5C00;
    }
  }

  .cart__amount-btn-icon {
    width: 21px;
    height: 21px;
    transition: fill 0.2s ease-in;
  }

  .cart__remove-item {
    width: 47px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.1s ease-in;

    &:hover {
      background-color: #d03;
      color: #fff;
    }
  }
  
  .cart__price {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
