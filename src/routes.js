import Home from './components/Home'
import Products from './components/ProductsList'
import Cart from './components/Cart'
import Album from './components/Album'
import Store from './components/Store'
import Contacts from './components/Contacts'

export const routes = [
  { path: '/', component: Home },
  { path: '/store',
    component: Store,
    children: [
      { path: '', component: Products },
      { path: 'albums', component: Album, name: 'album', props: true }
    ]
  },
  { path: '/contacts', component: Contacts },
  { path: '/cart', component: Cart }
]
