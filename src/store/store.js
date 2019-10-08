import Vue from 'vue';
import Vuex from 'vuex';
import jsonList from '../products.json';
import createPersistedState from 'vuex-persistedstate'
import sharedMutations from 'vuex-shared-mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: jsonList.products,
    sortedProducts: [],
    cart: [],
    totalSum: 0,
    isMenuOpened: false
  },
  getters: {
    totalSum(state) {
      state.totalSum = 0;
      for ( let i = 0; i < state.cart.length; i++ ) {
        if ( state.cart[i].amount ) {
          state.totalSum += parseInt(state.cart[i].albumPrice) * state.cart[i].amount
        } else {
          state.totalSum += parseInt(state.cart[i].albumPrice)
        }
      }
      return state.totalSum;
    }
  },
  mutations: {
    addProduct(state, payload) {
      state.cart.unshift(payload)
    },
    removeProduct(state, payload) {
      return state.cart.splice(payload, 1)
    },
    addAmount(state, payload) {
      Vue.set(state.cart[payload.index], 'amount', payload.amount)
    },
    toggleMenu(state) {
      document.body.classList.toggle('blocked')
      document.querySelector('.header__nav').classList.toggle('header__nav--open')
      state.isMenuOpened = !state.isMenuOpened
    }
  },
  plugins: [createPersistedState(), sharedMutations({ predicate: ['addProduct', 'removeProduct', 'addAmount'] })]
})
