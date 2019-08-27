<template>
	<div class="container album">
    <div class="album__image-wrapper">
      <img class="album__image" src="@/assets/products/the beatles/ar.jpg" alt="111">
      <button class="btn btn--orange btn--large" type="button">Add to Cart</button>
    </div>
    <div class="album__description">
      <div class="album__heading-wrapper">
        <h1 class="album__heading">Abbey Road</h1>
        <h2 class="album__price">50$</h2>
      </div>
      <p class="album__review">Abbey Road is the eleventh studio album by English rock band the Beatles, released on 26 September 1969 by Apple Records. The recording sessions were the last in which all four Beatles participated. Let It Be was the final album that the Beatles completed and released before the band's dissolution in April 1970, but most of the album had been recorded before the Abbey Road sessions began. The two-sided hit single from the album, "Something" backed with "Come Together", was released in October and topped the Billboard Hot 100 chart in the United States.

        Abbey Road incorporates genres such as blues, pop and progressive rock, and makes prominent use of the Moog synthesizer and the Leslie speaker. Side two contains a medley of song fragments edited together to form a single piece. The album was recorded amid a more enjoyable atmosphere than the Get Back/Let It Be sessions earlier in the year, but there were still frequent disagreements within the band. John Lennon had privately left the group by the time that the album was released, and Paul McCartney publicly quit the following year.

        Abbey Road was an immediate commercial success and reached number one in the UK and US, although it initially received mixed reviews, with some critics describing its music as inauthentic and bemoaning the production's artificial effects. Over time, the album became viewed as among the Beatles' best and many critics have ranked it as one of the greatest albums of all time. In particular, George Harrison's contributions in "Something" and "Here Comes the Sun" are considered to be among the best songs that he wrote for the group. The album's cover features the four band members walking across a zebra crossing outside Abbey Road Studios and has become one of the most famous and imitated images in popular music.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Album'
  }
</script>

<style scoped lang="scss">
  .album {
    display: flex;
    align-items: flex-start;
    padding-top: 50px;
  }

  .album__image-wrapper {
    display: inline-block;
    flex-shrink: 0;
    width: 500px;
    margin-right: 50px;
    font-size: 0;
  }

  .album__image {
    margin-bottom: 50px;
  }

  .album__description {
    width: 100%;
    color: #fff;
  }

  .album__heading-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .album__heading,
  .album__price {
    font-family: 'prostoone', sans-serif;
    font-size: 40px;
  }

  .album__review {
    margin-top: 50px;
    font-family: 'prostoone', sans-serif;
    text-align: justify;
  }

  .btn--large {
    width: 100%;
  }
</style>
