import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [
      {"bandName":"The Beatles","albumYear":1964,"albumTitle":"A Hard Day’s Night","price":50},
      {"bandName":"The Beatles","albumYear":1963,"albumTitle":"With The Beatles","price":50},
      {"bandName":"The Beatles","albumYear":1964,"albumTitle":"A Hard Day’s Night","price":50},
      {"bandName":"The Beatles","albumYear":1965,"albumTitle":"Rubber Soul","price":50},
      {"bandName":"The Beatles","albumYear":1965,"albumTitle":"Help!","price":50}]
  },
  mutations: {
    addProduct(state, payload) {
      state.cart.push(payload)
    }
  }
})
