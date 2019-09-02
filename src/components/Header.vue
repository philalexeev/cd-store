<template>
  <header class="header">
    <nav class="header__nav container">
      <ul class="menu">
        <router-link to="/" tag="li" active-class="menu-item--active" class="menu__item" exact>
          <a class="menu__link" href="#">Home</a>
        </router-link>
        <router-link to="/store" tag="li" active-class="menu-item--active" class="menu__item">
          <a class="menu__link" href="#">Store</a>
        </router-link>
        <router-link to="/contacts" tag="li" active-class="menu-item--active" class="menu__item">
          <a class="menu__link" href="#">Contacts</a>
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px 0;
    background-color: #eee;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.15);
    z-index: 100;
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
