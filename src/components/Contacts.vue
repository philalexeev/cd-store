<template>
  <div class="contacts container">
    <div class="contacts__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13416.347600037589!2d-75.69949933758802!3d45.428096631043296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050236fe6381%3A0x42431f2dc9c3fbad!2sGiant%20Tiger!5e0!3m2!1sru!2sru!4v1567668520571!5m2!1sru!2sru"
        frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    </div>
    <div class="contacts__details">
      <h1 class="contacts__details-name">Vinyl Store Inc.</h1>
      <p class="contacts__details-item">98 George St, Ottawa, ON K1N 5W2, Canada</p>
      <p class="contacts__details-item">
        Phone: <a class="contacts__details-link" href="tel:6135550148">613-555-0148</a>
      </p>
      <p class="contacts__details-item">
        Email: <a class="contacts__details-link" href="mailto:vinylstore@vs.qa">vinylstore@vs.qa</a>
      </p>
      <ul class="contacts__links">
        <li class="contacts__links-item">
          <a class="contacts__link" href="#">
            <SvgIcon iconName="twitter" className="contacts__link-icon contacts__link-twitter"/>
          </a>
        </li>
        <li class="contacts__links-item">
          <a class="contacts__link" href="#">
            <SvgIcon iconName="instagram" className="contacts__link-icon contacts__link-instagram"/>
          </a>
        </li>
        <li class="contacts__links-item">
          <a class="contacts__link" href="#">
            <SvgIcon iconName="facebook" className="contacts__link-icon contacts__link-facebook"/>
          </a>
        </li>
      </ul>
      <div class="contacts__offer">
        <p>&copy;Copyright</p>
        <p class="contacts__offer-right">All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon'

export default {
  name: 'Contacts',
  components: {
    SvgIcon: SvgIcon
  }
}
</script>

<style lang="scss">
  iframe {
    width: 100%;
    height: 100%;
  }

  .contacts {
    padding-top: 20px;
  }

  .contacts__map {
    height: 500px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    background-image: url('../assets/icons/preloader.svg');
    background-size: 160px 30px;
    background-position: center;
    background-repeat: no-repeat;
  }

  .contacts__details {
    padding-top: 30px;
  }

  .contacts__details-name {
    margin-bottom: 20px;
    font-size: 30px;
  }

  .contacts__details-item {
    margin-bottom: 5px;
  }

  .contacts__details-link {
    color: #000;
    text-decoration: underline;

    &:hover {
      color: #ec4404;
    }
  }

  .contacts__links {
    display: flex;
    margin-top: 30px;
    list-style: none;
  }

  .contacts__link {
    display: block;
    width: 50px;
    height: 50px;
  }

  .contacts__links-item + .contacts__links-item {
    margin-left: 20px;
  }

  .contacts__link-icon {
    display: block;
    width: 50px;
    height: 50px;
    transition: filter 0.2s ease-in;
  }

  .contacts__link-twitter {
    fill: #1da1f2;

    &:hover {
      filter: drop-shadow(0 0 20px #1da1f2);
    }
  }

  .contacts__link-instagram {
    fill: #c13584;

    &:hover {
      filter: drop-shadow(0 0 20px #c13584);
    }
  }

  .contacts__link-facebook {
    fill: #3b5998;

    &:hover {
      filter: drop-shadow(0 0 20px #3b5998);
    }
  }

  .contacts__offer {
    margin-top: 30px;
    text-align: right;
  }

  .contacts__offer-right {
    margin-top: 5px;
  }
</style>
