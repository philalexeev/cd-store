<template>
  <header class="header">
    <div class="header__inner">
      <div class="container burger-btn__wrapper">
        <button class="burger-btn" @click="toggleMenu">
          Menu
          <svg class="burger-btn__icon" width="30" viewBox="0 0 30 25" fill="#333">
            <rect width="30" height="5" x="0" y="0"/>
            <rect width="30" height="5" x="0" y="10"/>
            <rect width="30" height="5" x="0" y="20"/>
          </svg>
        </button>
        <router-link
            to="/cart"
            tag="a"
            active-class="burger-btn__cart-link--active"
            class="burger-btn__cart-link"
            @click.native="routeClick">
          <svg class="burger-btn__cart-icon">
            <use xlink:href="#cart"></use>
          </svg>
          <span
            class="burger-btn__cart-link-number"
            :class="{'burger-btn__cart--not-empty': emptyCart}">
              {{cart.length ? `${cart.length}` : ''}}
          </span>
        </router-link>
      </div>
      <nav class="container header__nav" ref="menu">
          <ul class="menu">
            <router-link
                to="/"
                tag="li"
                active-class="menu-item--active"
                class="menu__item"
                @click.native="routeClick"
                exact>
              <a class="menu__link" href="#">Home</a>
            </router-link>
            <router-link
                to="/store"
                tag="li"
                active-class="menu-item--active"
                class="menu__item"
                @click.native="routeClick">
              <a class="menu__link" href="#">Store</a>
            </router-link>
            <router-link
                to="/contacts"
                tag="li"
                active-class="menu-item--active"
                class="menu__item"
                @click.native="routeClick">
              <a class="menu__link" href="#">Contacts</a>
            </router-link>
            <router-link to="/cart" tag="li" active-class="menu-item--active" class="menu__item">
              <a class="menu__link" href="#">Cart{{cart.length ? `(${cart.length})` : ''}}</a>
            </router-link>
          </ul>
        </nav>
    </div>
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
  computed: {
    emptyCart() {
      return !!this.cart.length
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('toggleMenu')
    },
    routeClick() {
      if ( window.matchMedia('(max-width: 580px)').matches ) {
        this.toggleMenu()
      }
    }
  }
}
</script>

<style lang="scss">
  @import "../styles/transitions";

  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    line-height: 0;
    background-color: #eee;
    box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.15);
    z-index: 100;
  }

  .burger-btn__wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: #eee;
    z-index: 100;

    @media screen and (min-width: 580px) {
      display: none;
    }
  }

  .burger-btn {
    width: 30px;
    height: 25px;
    font-size: 0;
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  .burger-btn__cart-link {
    position: relative;
    width: 35px;
    height: 25px;
    font-size: 0;
    line-height: 1;
  }

  .burger-btn__cart-link-number {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    display: inline-block;
    min-width: 16px;
    padding: 2px;
    font-size: 16px;
    color: #fff;
    text-align: center;
  }

  .burger-btn__cart--not-empty {
    background-color: #FF5C00;
  }

  .burger-btn__cart-icon {
    width: 35px;
    height: 25px;
  }

  .header__nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(-100%);
    line-height: 1;
    z-index: 90;
    background-color: #eee;
    transition: transform 0.5s ease-in-out;

    &--open {
      transform: translateY(65px);
    }

    @media screen and (min-width: 580px) {
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      bottom: auto;
      transform: none;
      display: block;
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;

    @media screen and (min-width: 580px) {
      flex-direction: row;
    }
  }

  .menu__item {
    font-weight: bold;

    & + .menu__item {
      margin-top: 20px;

      @media screen and (min-width: 580px) {
        margin-top: 0;
        margin-left: 20px;
      }
    }

    &:last-child {
      display: none;

      @media screen and (min-width: 580px) {
        margin-left: auto;
        display: block;
      }
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
