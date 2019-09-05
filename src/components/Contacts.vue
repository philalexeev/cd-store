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
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 3.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 4.557z'/%3E%3C/svg%3E" alt="Twitter">
          </a>
        </li>
        <li class="contacts__links-item">
          <a class="contacts__link" href="#">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'/%3E%3C/svg%3E" alt="Instagram">
          </a>
        </li>
        <li class="contacts__links-item">
          <a class="contacts__link" href="#">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Cpath d='M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z'/%3E%3C/svg%3E" alt="Facebook">
          </a>
        </li>
      </ul>
      <div class="contacts__offer">
        <p>&copy;Copyright</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contacts'
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
    text-decoration: none;

    &:hover {
      color: #FF5C00;
    }
  }

  .contacts__links {
    display: flex;
    margin-top: 30px;
    list-style: none;
  }

  .contacts__links-item {
    width: 50px;
    height: 50px;
  }

  .contacts__links-item + .contacts__links-item {
    margin-left: 20px;
  }

  .contacts__offer {
    margin-top: 30px;
    text-align: right;
  }
</style>
