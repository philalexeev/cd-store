<template>
  <header class="header">
    <nav class="header__nav container">
      <ul class="menu">
        <router-link to="/" tag="li" active-class="menu-item--active" class="menu__item" exact>
          <a class="menu__link" href="#">Home</a>
        </router-link>
        <router-link to="/products" tag="li" active-class="menu-item--active" class="menu__item">
          <a class="menu__link" href="#">Products</a>
        </router-link>
        <router-link to="/cart" tag="li" active-class="menu-item--active" class="menu__item">
          <a class="menu__link" href="#">Cart{{cart.length ? `(${cart.length})` : ''}}</a>
        </router-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      cart: this.$store.state.cart
    }
  },
}
</script>

<style scoped lang="scss">
  .header {
    padding: 20px 0;
    background-color: #eee;
  }

  .menu {
    display: flex;
    width: 100%;
    list-style: none;
  }

  .menu__item {
    font-weight: bold;

    & + .menu__item {
      margin-left: 20px;
    }

    &:last-child {
      margin-left: auto;
    }
  }

  .menu__link {
    color: #333;
    text-decoration: none;

    &:hover {
      color: #777;
    }
  }

  .menu-item--active .menu__link {
    color: orangered;
  }
</style>
