<script>
  export default {
    name: 'Header'
  }
</script>

<template>


  <!-- Suddivisione dell'header in 2 contenitori separati -->
    <div class="header_top">
      <div class="fr_container d-flex justify-content-between align-items-center">

        <div class="left d-flex">
          <div class="location">
            <i class="fa-solid fa-location-dot"></i>
            <span>Palermo, Sicilia, Italia</span>
          </div>
          <div class="email">
            <i class="fa-solid fa-envelope"></i>
            <span>demo@example.com</span></div>
        </div>

        <div class="right d-flex">
          <div class="hours_active">
            <i class="fa-regular fa-clock"></i>
            <span>8.30AM-8.30PM</span>
          </div>
          <div class="social ms-1 d-flex">
            <ul class="d-flex">
              <a href="#"><li><i class="fa-brands fa-facebook-f"></i></li></a>
              <a href="#"><li><i class="fa-brands fa-instagram"></i></li></a>
              <a href="#"><li><i class="fa-brands fa-twitter"></i></li></a>
              <a href="#"><li><i class="fa-brands fa-pinterest-p"></i></li></a>
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
          <div class="button_search"><i class="fa-solid fa-magnifying-glass"></i></div>
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
  height: 45px;
  color: white;
  background-color: $green;

  .left{
    i{
      margin-right: 5px;
    }
    .location{
      margin-right: 25px;
    }
  }

  .right{
    align-items: center;
    .hours_active{
      span{
        margin-left: 10px;
      }
    }
    .social{
      ul{
        margin-bottom: 0;
        a{
          color: white;
          line-height: 45px;
          margin-left: 10px;
        }
      }
    }
  }
}

.header_bottom{
  height: 100px;
  color: black;
  background-color: lighten($green, 50%);
}
</style>