import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';

Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    counter: 12,
    todos: [
      { id: 1, done: true },
      { id: 2, done: false },
      { id: 3, done: false },
      { id: 4, done: true },
      { id: 5, done: false },
      { id: 6, done: true },
      { id: 7, done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter( todo => todo.done )
    },
    getTodoById: state => id => {
      return state.todos.find( todo => todo.id === id )
    }
  },
  mutations: {
    increase(state, payload) {
      state.counter += payload
    }
  },
  actions: {
    add({ commit }) {
      commit('increase')
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
