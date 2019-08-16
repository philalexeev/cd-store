import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'

export const routes = [
  { path: '/', component: Home},
  { path: '/products', component: Products},
  { path: '/cart', component: Cart}
];
