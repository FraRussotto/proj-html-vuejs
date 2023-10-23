<script>
import latest_blogs from './partials/latest_blogs.vue';

import { store } from '../data/store';

export default {
  name: 'Footer',
  components: { 
  latest_blogs 
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getImagePath(img){
      return new URL(`${img}`, import.meta.url).href
    }
  }
}
</script>

<template>

    <div class="footer_top">

      <div class="fr_container">
        <div class="subscribe d-flex justify-content-between align-items-center">
          <h2>subscribe our newsletter</h2>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Insert your email">
            <div class="input-group-append">
              <button class="btn" type="button">Send</button>
            </div>
          </div>        
        </div>

        <div class="footer_menus d-flex justify-content-between gap-3">

          <div class="footer_logo">
            <img src="../assets/img/footer-logo.png" alt="">
            <p>War should never be entered upon until every agency of peace has failed not to be good
            </p>
            <ul class="d-flex">
              <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-google-plus-g"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
              <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
            </ul>
          </div>

          <div class="emergency_link">
            <h3>Emergency Link.</h3>
            <ul>
              <li>organic food shop</li>
              <li>our term & condition</li>
              <li>gogrin faw section</li>
              <li>our team member</li>
              <li>our latest news feed</li>
            </ul>
          </div>

          <latest_blogs class="latest_blogs"/>

          <div class="gallery">
            <h3>Our Gallery.</h3>
            <div class="d-flex justify-content-between flex-wrap row-gap-2">
              <img v-for="item in store.gallery" :key="item.id" :src="getImagePath(item.img)" alt="">
            </div>
          </div>

        </div>
      </div>

    </div>

    <div class="footer_bottom">
      <div class="fr_container d-flex justify-content-between align-items-center">
        <div class="copyright">Copyright <i class="fa-regular fa-copyright"></i> gogrin all rights reserved.</div>
        <div class="links">
          <ul class="d-flex align-items-center">
            <li><a href="#">Service</a></li>
            <li><a href="#">Pricing Table</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>

</template>

<style lang="scss" scoped>

@use '../scss/variables' as *;
.fr_container{
  width: $container_min;
  margin: 0 auto;
}
.footer_top{
  position: relative;
  width: 100%;
  padding: 140px 0 50px 0;
  margin-top: 200px;
  background-image: url('../assets/img/footer-bg.jpg');
  background-size: cover;
  .subscribe{
    position: absolute;
    z-index: 999;
    top: -90px;
    width: $container_min;
    height: 180px;
    padding: 40px;
    background-image: url('../assets/img/milesim-bg.jpg');
    background-size: cover;
    h2{
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      text-transform: uppercase;
    }
    .input-group{
      border-radius: 0;
      width: 50%;
      height: 50px;
      .form-control{
        width: 70%;
      }
      .btn{
        height: 50px;
        color: white;
        text-transform: uppercase;
        background-color: $green;
      }
    }
  }
  .footer_logo{
    width: 20%;
    img{
      margin-bottom: 30px;
      width: 200px;
    }
    p{
      color: white;
      line-height: 30px;
    }
    ul{
      padding: 0;
      li{
        width: 40px;
        aspect-ratio: 1;
        background-color: $green;
        display: grid;
        place-items: center;
        margin-right: 15px;
        border-radius: 5px;
        a{
          color: white;
        }
        &:hover{
          background-color: $yellow;
        }
      }
    }
  }
  .emergency_link{
    color: white;
    width: 35%;
    h3{
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 30px;
    }
    ul{
      padding: 0;
      li{
        font-size: 1.2rem;
        margin-bottom: 15px;
        text-transform: capitalize;
      }
    }
  }
  .latest_blogs{
    width: 70%;
  }
  .gallery{
    width: 55%;
    color: white;
    h3{
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 30px;
    }
    img{
      width: 100px;
    }
  }

}

.footer_bottom{
  font-size: 1.1rem;
  height: 80px;
  background-color: $green;
  color: white;
  .fr_container{
    height: 100%;
  }
  .links{
    display: flex;
    align-items: center;
    ul{
      margin-bottom: 0;
      li{
        margin-left: 30px;
        a{
          color: white;
        }
      }
    }
  }
}

</style>