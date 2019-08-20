<template>
  <div class="component container products">
    <h1 class="component__heading">Products</h1>
    <div class="products" v-for="band in products" :key="band.name.length*Math.random()*500">
      <ul class="products__list">
        <li
          class="products__list-item"
          v-for="productItem in band.albums"
          :key="productItem.title.length*Math.random()*500">
          <app-product-item
            :albumTitle="productItem.title"
            :bandName="band.name"
            :albumYear="productItem.year"
            :productPrice="productItem.price"
            :albumCover="`${productItem.coverUrl ? productItem.coverUrl : 'logo.png'}`"
          ></app-product-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem'

export default {
  name: 'Products',
  data () {
    return {
      products: [
        {
          name: 'The Beatles',
          albums: [
            {
              title: 'Please Please Me',
              year: 1963,
              coverUrl: 'the beatles/ppm.jpg',
              price: 50
            },
            {
              title: 'With The Beatles',
              year: 1963,
              coverUrl: 'the beatles/wtb.jpg',
              price: 50
            },
            {
              title: 'A Hard Day’s Night',
              year: 1964,
              coverUrl: 'the beatles/hdn.jpg',
              price: 50
            },
            {
              title: 'Beatles For Sale',
              year: 1964,
              coverUrl: 'the beatles/bfs.jpg',
              price: 50
            },
            {
              title: 'Help!',
              year: 1965,
              coverUrl: 'the beatles/help.jpg',
              price: 50
            },
            {
              title: 'Rubber Soul',
              year: 1965,
              coverUrl: 'the beatles/rs.jpg',
              price: 50
            },
            {
              title: 'Revolver',
              year: 1966,
              coverUrl: 'the beatles/revolver.jpg',
              price: 50
            },
            {
              title: 'Sgt. Pepper’s Lonely Hearts Club Band',
              year: 1967,
              coverUrl: 'the beatles/sp.jpg',
              price: 50
            },
            {
              title: 'Magical Mystery Tour',
              year: 1967,
              coverUrl: 'the beatles/mmt.jpg',
              price: 50
            },
            {
              title: 'The Beatles',
              year: 1968,
              coverUrl: 'the beatles/wa.jpg',
              price: 50
            },
            {
              title: 'Yellow Submarine',
              year: 1969,
              coverUrl: 'the beatles/ys.jpg',
              price: 50
            },
            {
              title: 'Abbey Road',
              year: 1969,
              coverUrl: 'the beatles/ar.jpg',
              price: 50
            },
            {
              title: 'Let It Be',
              year: 1970,
              coverUrl: 'the beatles/lib.jpg',
              price: 50
            }
          ]
        },
        {
          name: 'Led Zeppelin',
          albums: [
            {
              title: 'Led Zeppelin',
              year: 1969,
              coverUrl: 'led zeppelin/lz.jpg',
              price: 50
            },
            {
              title: 'Led Zeppelin II',
              year: 1969,
              coverUrl: 'led zeppelin/lz2.jpg',
              price: 50
            },
            {
              title: 'Led Zeppelin III',
              year: 1970,
              coverUrl: 'led zeppelin/lz3.jpg',
              price: 50
            },
            {
              title: 'Led Zeppelin IV',
              year: 1971,
              coverUrl: 'led zeppelin/lz4.jpg',
              price: 50
            },
            {
              title: 'Houses of the Holy',
              year: 1973,
              coverUrl: 'led zeppelin/hoth.jpg',
              price: 50
            },
            {
              title: 'Physical Graffiti',
              year: 1975,
              coverUrl: 'led zeppelin/pg.jpg',
              price: 50
            },
            {
              title: 'Presence',
              year: 1976,
              coverUrl: 'led zeppelin/p.jpg',
              price: 50
            },
            {
              title: 'In Through the Out Door',
              year: 1979,
              coverUrl: 'led zeppelin/ittod.jpg',
              price: 50
            },
            {
              title: 'Coda',
              year: 1982,
              coverUrl: 'led zeppelin/c.jpg',
              price: 50
            }
          ]
        },
        {
          name: 'Pink Floyd',
          albums: [
            {
              title: 'The Piper at the Gates of Dawn',
              year: 1967,
              coverUrl: 'pink floyd/tpatgod.jpg',
              price: 50
            },
            {
              title: 'A Saucerful of Secrets',
              year: 1968,
              coverUrl: 'pink floyd/asos.jpg',
              price: 50
            },
            {
              title: 'Music from the Film More',
              year: 1969,
              coverUrl: 'pink floyd/more.jpg',
              price: 50
            },
            {
              title: 'Ummagumma',
              year: 1969,
              coverUrl: 'pink floyd/u.jpg',
              price: 50
            },
            {
              title: 'Atom Heart Mother',
              year: 1970,
              coverUrl: 'pink floyd/ahm.jpg',
              price: 50
            },
            {
              title: 'Meddle',
              year: 1971,
              coverUrl: 'pink floyd/meddle.jpg',
              price: 50
            },
            {
              title: 'Obscured by Clouds',
              year: 1972,
              coverUrl: 'pink floyd/obc.jpg',
              price: 50
            },
            {
              title: 'The Dark Side of the Moon',
              year: 1973,
              coverUrl: 'pink floyd/tdsotm.jpg',
              price: 50
            },
            {
              title: 'Wish You Were Here',
              year: 1975,
              coverUrl: 'pink floyd/wywh.jpg',
              price: 50
            },
            {
              title: 'Animals',
              year: 1977,
              coverUrl: 'pink floyd/animals.jpg',
              price: 50
            },
            {
              title: 'The Wall',
              year: 1979,
              coverUrl: 'pink floyd/tw.jpg',
              price: 50
            },
            {
              title: 'The Final Cut',
              year: 1983,
              coverUrl: 'pink floyd/tfc.jpg',
              price: 50
            },
            {
              title: 'A Momentary Lapse of Reason',
              year: 1987,
              coverUrl: 'pink floyd/amlor.jpg',
              price: 50
            },
            {
              title: 'The Division Bell',
              year: 1994,
              coverUrl: 'pink floyd/tdb.jpg',
              price: 50
            },
            {
              title: 'The Endless River',
              year: 2014,
              coverUrl: 'pink floyd/ter.jpg',
              price: 50
            }
          ]
        }
      ]
    }
  },
  components: {
    'app-product-item': ProductItem
  }
}
</script>

<style>
  .component {
    padding: 20px;
  }
  .component__heading {
    font-size: 40px;
  }
  .products__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style: none;
  }
  .products__list-item {
    display: flex;
    align-items: stretch;
  }
</style>
