<script>
  export default {
    name: 'Header'
  }
</script>

<template>


  <!-- Suddivisione dell'header in 2 contenitori separati -->
    <div class="header_top">
      <div class="fr_container d-flex justify-content-between">
        <div class="left d-flex">
          <div class="location"> Palermo, Italia</div>
          <div class="email">demo@example.com</div>
        </div>
        <div class="right d-flex">
          <div class="hours_active">8.30AM-8.30PM</div>
          <div class="social">
            <ul class="d-flex">
              <li>social</li>
              <li>social</li>
              <li>social</li>
              <li>social</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="header_bottom">
      <div class="fr_container d-flex justify-content-between align-items-center">
        <div class="left d-flex">
          <div class="logo_header">Logo</div>
          <div class="menu_header">
            <ul class="d-flex">
              <li>menu</li>
              <li>menu</li>
              <li>menu</li>
              <li>menu</li>
              <li>menu</li>
              <li>menu</li>
            </ul>
          </div>
        </div>
        <div class="right d-flex">
          <div class="button_search">Search</div>
          <div class="cart">Cart</div>
          <div class="button_order btn btn-warning">
            Bottone
          </div>
        </div>
      </div>
    </div>

</template>

<style lang="scss" scoped>

@use '../scss/variables' as *;

.fr_container{
  width: $container_max;
  margin: 0 auto;
}
.header_top{
  height: 30px;
  color: white;
  background-color: $green;
}
.header_bottom{
  height: 70px;
  color: black;
  background-color: lighten($green, 50%);
}
</style>