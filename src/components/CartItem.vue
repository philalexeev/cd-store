<template>
  <li class="cart__item">
    <div class="cart__item-description clearfix">
      <div class="cart__album-image-wrapper">
        <img class="cart__album-image" :src="require(`@/assets/products/${albumCover}`)" alt="111">
      </div>
      <div class="cart__table-cell cart__band-name cart__block">{{ bandName }}</div>
      <div class="cart__table-cell cart__album-title cart__block">{{ albumTitle }}</div>
      <div class="cart__additions">
        <hr class="division-line">
        <a class="cart__link" href="#">Delivery options</a>
        <a class="cart__link" href="#">Read description</a>
      </div>
    </div>
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
  props: ['bandName', 'albumYear', 'albumTitle', 'price', 'index', 'albumCover'],
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

<style lang="scss">
  .cart__item {
    background-color: #eee;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }
  .cart__item + .cart__item {
    margin-top: 20px;
  }
  .cart__table-cell {
    padding: 10px;
    font-size: 18px;
    line-height: 1;

    &-remove {
      display: flex;
      align-items: stretch;
      padding: 0;
    }
  
    @media screen and (min-width: 580px) {
      font-size: 20px;
    }
  }
  .cart__album-image-wrapper {
    float: left;
    margin: 0 10px 0 0;
    font-size: 0;
    line-height: 0;
  }
  .cart__album-image {
    width: 102px;
    height: 102px;
  
    @media screen and (min-width: 870px) {
      width: 200px;
      height: 200px;
    }
  }
  .cart__band-name {
    padding-bottom: 0;
    color: #777;
  }
  .cart__album-title {
    margin-right: auto;
    font-weight: bold;
  }
  
  .cart__link {
    display: block;
    color: #FF5C00;
    text-decoration: none;
    
    &:hover {
      color: darken(#FF5C00, 5%);
    }
    
    & + .cart__link {
      margin-top: 10px;
    }
  }

  .cart__amount-wrapper {
    display: flex;
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
    color: #000;
    background-color: #aaa;
    border: none;
    cursor: pointer;
    transition: background-color 0.1s ease-in, color 0.1s ease-in;

    &:hover {
      background-color: #d03;
      color: #fff;
    }
  }

  .cart__price {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }
</style>
