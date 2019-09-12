import Vue from 'vue';
import Vuex from 'vuex';
import jsonList from '../products.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: jsonList.products,
    sortedProducts: [],
    cart: [],
    totalSum: 0,
  },
  getters: {
    totalSum: state => {
      state.totalSum = 0;
      for ( let i = 0; i < state.cart.length; i++ ) {
        state.totalSum += parseInt(state.cart[i].price)
      }
      return state.totalSum;
    }
  },
  mutations: {
    addProduct(state, payload) {
      state.cart.unshift(payload)
    },
    removeItem(state, payload) {
      return state.cart.splice(payload, 1)
    }
  }
})
