<template>
  <h1>Products</h1>
</template>

<script>
export default {
  name: 'Products',
  data() {
    return {
      products: [
        {
          name: 'The Beatles',
          albums: [
            {
              title: 'Please Please Me',
              year: 1963,
              coverUrl: '../assets/products/beatles/ppm.jpg'
            },
            {
              title: 'With The Beatles',
              year: 1963,
              coverUrl: '../assets/products/beatles/wtb.jpg'
            },
            {
              title: 'A Hard Day’s Night',
              year: 1964,
              coverUrl: '../assets/products/beatles/hdn.jpg'
            },
            {
              title: 'Beatles For Sale',
              year: 1964,
              coverUrl: '../assets/products/beatles/bfs.jpg'
            },
            {
              title: 'Help!',
              year: 1965,
              coverUrl: '../assets/products/beatles/help.jpg'
            },
            {
              title: 'Rubber Soul',
              year: 1965,
              coverUrl: '../assets/products/beatles/rs.jpg'
            },
            {
              title: 'Revolver',
              year: 1966,
              coverUrl: '../assets/products/beatles/revolver.jpg'
            },
            {
              title: 'Sgt. Pepper’s Lonely Hearts Club Band',
              year: 1967,
              coverUrl: '../assets/products/beatles/sp.jpg'
            },
            {
              title: 'Magical Mystery Tour',
              year: 1967,
              coverUrl: '../assets/products/beatles/mmt.jpg'
            },
            {
              title: 'The Beatles',
              year: 1968,
              coverUrl: '../assets/products/beatles/wa.jpg'
            },
            {
              title: 'Yellow Submarine',
              year: 1969,
              coverUrl: '../assets/products/beatles/ys.jpg'
            },
            {
              title: 'Abbey Road',
              year: 1969,
              coverUrl: '../assets/products/beatles/ar.jpg'
            },
            {
              title: 'Let It Be',
              year: 1970,
              coverUrl: '../assets/products/beatles/lib.jpg'
            }
          ]
        },
        {
          name: 'Led Zeppelin',
          albums: [
            {
              title: 'Led Zeppelin',
              year: 1969
            },
            {
              title: 'Led Zeppelin II',
              year: 1969
            },
            {
              title: 'Led Zeppelin III',
              year: 1970
            },
            {
              title: 'Led Zeppelin IV',
              year: 1971
            },
            {
              title: 'Houses of the Holy',
              year: 1973
            },
            {
              title: 'Physical Graffiti',
              year: 1975
            },
            {
              title: 'Presence',
              year: 1976
            },
            {
              title: 'In Through the Out Door',
              year: 1979
            },
            {
              title: 'Coda',
              year: 1982
            }
          ]
        },
        {
          name: 'Pink Floyd',
          albums: [
            {
              title: 'The Piper at the Gates of Dawn',
              year: 1967
            },
            {
              title: 'A Saucerful of Secrets',
              year: 1968
            },
            {
              title: 'Music from the Film More',
              year: 1969
            },
            {
              title: 'Ummagumma',
              year: 1969
            },
            {
              title: 'Atom Heart Mother',
              year: 1970
            },
            {
              title: 'Meddle',
              year: 1971
            },
            {
              title: 'Obscured by Clouds',
              year: 1972
            },
            {
              title: 'The Dark Side of the Moon',
              year: 1973
            },
            {
              title: 'Wish You Were Here',
              year: 1975
            },
            {
              title: 'Animals',
              year: 1977
            },
            {
              title: 'The Wall',
              year: 1979
            },
            {
              title: 'The Final Cut',
              year: 1983
            },
            {
              title: 'A Momentary Lapse of Reason',
              year: 1987
            },
            {
              title: 'The Division Bell',
              year: 1994
            },
            {
              title: 'The Endless River',
              year: 2014
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
