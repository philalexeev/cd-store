import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { routes } from './routes'

Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store()

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
