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
            <span>North baukhula, tala, USA</span>
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
              <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="header_bottom fr_container d-flex justify-content-between align-items-center">
      <div class="left d-flex align-items-center ">
        <div class="logo_header">
          <img src="../assets/img/logo.png" alt="">
        </div>
        <div class="menu_header">
          <ul class="d-flex">
              <li><a href="#">home<i class="fa-solid fa-chevron-down"></i></a></li>
              <li><a href="#">about<i class="fa-solid fa-chevron-down"></i></a></li>
              <li><a href="#">service</a></li>
              <li><a href="#">portfolio<i class="fa-solid fa-chevron-down"></i></a></li>
              <li><a href="#">shop<i class="fa-solid fa-chevron-down"></i></a></li>
              <li><a href="#">blog <i class="fa-solid fa-chevron-down"></i></a></li>
              <li><a href="#">contact</a></li>
          </ul>
        </div>
      </div>
      <div class="right d-flex align-items-center">
          <div class="button_search">
            <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
          </div>
          <div class="cart d-flex">
            <a href="#">
              <i class="fa-solid fa-cart-shopping"></i>
              <span>0</span>
            </a>
          </div>
          <div class="button_order">
            <a href="#"><button class="btn">order now</button></a>
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
      font-size: 0.8rem;
      margin-right: 8px;
    }
    .location{
      margin-right: 40px;
    }
  }

  .right{
    align-items: center;
    .hours_active{
      i{
        font-size: .9rem;
      }
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
          margin-left: 20px;
        }
      }
    }
  }
}

.header_bottom{
  height: 100px;
  .left{
    align-items: center;
    .logo_header{
      img{
        width: 200px;
      }
    }
    .menu_header{
      margin-left: 100px;
      ul{
        margin-bottom: 0;
        a{
          font-size: 1.1rem;
          color: black;
          text-transform: uppercase;
          margin-right: 35px;
          i{
            margin-left: 10px;
            font-size: 0.7rem;
          }
        }
      }
    }
  }
  .right{
    .button_search{
      a{
        background-color: $yellow;
        color: white;
        border-radius: 50%;
        padding: 12px;
        i{
          font-size: 1.2rem;
        }
      }
    }
    .cart {
      a{
        position: relative;
        margin: 0 30px;
        font-size: 1.4rem;
        color: $green;
        span{
          font-size: 1.2rem;
          position: absolute;
          top: -10px;
          right: -14px;
          line-height: 10px;
          color: white;
          background-color: $yellow;
          padding: 7px;
          border-radius: 50%;
        }
      }
    }
    .button_order{
      a button{
        font-size: 1.2rem;
        text-transform: uppercase;
        background-color: $yellow;
        padding: 12px 25px;
        border-radius: 0 25px;
        color: white;
      }
    }
  }
}
</style>