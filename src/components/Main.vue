<script>

  import Jumbotron from './partials/jumbotron.vue';

  export default {
    name: 'Main',
    components:{
      Jumbotron
    },
    data(){
      return{
      }
    }

  }
</script>

<template>
  <Jumbotron />

  <section>
    <div class="look_organic">

      <div class="description d-flex">
        <p class="text_full"><span>Look what</span> consumer power has done with <span>organic food;</span> we can do the same with clothes.</p>
        <p class="text">I have a need to make these sorts of connections literal sometimes, and a vehicle often helps to do that.<br>I have a relationship to hosting culture. <span>It isn't really about it helps to do that. I gave a relationship to hosting culuter.</span><br><br>Need to make these sorts of connections literal sometimes, and a vehicle often helps to do that, i have a relationship to hosting culture.</p>
      </div>

      <div class="image_food">
        <div class="row mt-4">
          <div class="col d-flex justify-content-between ">
            <img src="../assets/img/fe3.jpg" alt="">
            <img src="../assets/img/fe1.jpg" alt="">
            <img src="../assets/img/fe2.jpg" alt="">
            <img src="../assets/img/fe1.jpg" alt="">
          </div>
        </div>
      </div>

    </div>
  </section>

  <section>
    <div class="trending_organic d-flex flex-column">
      <div class="fr_container text-center">
        <h4>trending online store</h4>
        <h1>gogrin all <span>organic</span> food</h1>
        <ul class="d-flex justify-content-center ">
          <li>all product</li>
          <li>apple</li>
          <li>food</li>
          <li>orange</li>
          <li>vegetable</li>
        </ul>

        <div class="d-flex justify-content-between flex-wrap">

          <div class="card_fr">
            <div class="card_image">
              <img src="../assets/img/s5.jpg" alt="">
            </div>
            <div class="card_info">
              <p>Fress Apple</p>
              <span>$18</span>
            </div>
          </div>

          <div class="card_fr">
            <div class="card_image">
              <img src="../assets/img/s2.jpg" alt="">
              <div class="badge_sale"><span>sale!</span></div>
            </div>
            <div class="card_info">
              <p>Fress Cobies</p>
              <span>$19</span><span>$17</span>
            </div>

          </div>
          <div class="card_fr">
            <div class="card_image">
              <img src="../assets/img/s8.jpg" alt="">
            </div>
            <div class="card_info">
              <p>Fresh Watermelon</p>
              <span>$15</span>
            </div>

          </div>
          <div class="card_fr">
            <div class="card_image">
              <img src="../assets/img/s1.jpg" alt="">
              <div class="badge_sale"><span>sale!</span></div>
            </div>
            <div class="card_info">
              <p>Organic Juice</p>
              <span>$20</span><span>$15</span>
            </div>

          </div>
          <div class="card_fr">
            <div class="card_image">
              <img src="../assets/img/s4.jpg" alt="">
              <div class="badge_sale"><span>sale!</span></div>
            </div>
            <div class="card_info">
              <p>Fresh Blueberries</p>
              <span>$19</span><span>$14</span>
            </div>

          </div>
          <div class="card_fr">
            <div class="card_image">
              <img src="../assets/img/s10.jpg" alt="">
            </div>
            <div class="card_info">
              <p>Organic Letus</p>
              <span>$23</span>
            </div>

          </div>
          <div class="card_fr">
            <div class="card_image">
              <img src="../assets/img/s9.jpg" alt="">
              <div class="badge_sale"><span>sale!</span></div>
            </div>
            <div class="card_info">
              <p>Red Gajor</p>
              <span>$29</span><span>$26</span>
            </div>

          </div>
          <div class="card_fr">
            <div class="card_image">
              <img src="../assets/img/s7.jpg" alt="">
            </div>
            <div class="card_info">
              <p>Naga Pepper</p>
              <span>$21</span>
            </div>

          </div>
        </div>
        <button class="btn">all products</button>
      </div>
    </div>
  </section>

  <section>
    <div class="comment_manager">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facere deserunt, officia sit quae est totam recusandae similique nam? Modi labore quidem asperiores saepe, dignissimos omnis eius incidunt blanditiis id!</p>
    </div>
  </section>

  <section>
    <div class="offers">
      offers
    </div>
  </section>

  <section>
    <div class="results">
      results
    </div>
  </section>

  <section>
    <div class="top_trending">
      top_trending
    </div>
  </section>

  <section>
    <div class="appointment">
      appointment
    </div>
  </section>

  <section>
    <div class="last_feed">
      last_feed
    </div>
  </section>

  <section class="logo_subscribe">
    <div class="list_logo">
      <ul class="d-flex justify-content-between">
        <a href="">
          <li>logo</li>
        </a>
        <a href="">
          <li>logo</li>
        </a>
        <a href="">
          <li>logo</li>
        </a>
        <a href="">
          <li>logo</li>
        </a>
        <a href="">
          <li>logo</li>
        </a>
      </ul>
    </div>
    <div class="subscribe">
      subscribe
    </div>
  </section>

</template>

<style lang="scss" scoped>

@use '../scss/variables' as *;
.look_organic{
  width: $container_min;
  margin: 0 auto;
  padding: 120px 0;
  span{
    color: $yellow;
  }
  .text_full{
    flex-basis: 50%;
    padding-right: 20px;
    color: $green;
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 65px;
  }
  .text{
    flex-basis: 50%;
    padding-top: 15px;
    line-height: 27px;
    padding-right: 15px;
  }
}
.trending_organic{
  width: $container_max;
  margin: 0 auto;
  background-color: brown;
  background-image: url('../assets/img/shop-bg-img.jpg');
  background-size: cover;
  .fr_container{
    width: $container_min;
    margin: 0 auto;
    h4{
      text-align: center;
      color: $yellow;
      text-transform: capitalize;
      font-weight: 600;
      padding-top: 20px;
    }
    h1{
      text-align: center;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 800;
      color: white;
      span{
        color: $yellow;
      }
    }
    ul{
      color: white;
      text-transform: capitalize;
      margin: 50px 0;
      padding: 0;
      li{
        margin: 0 35px;
      }
    }
    .card_fr{
      width: calc((100% - 100px) / 4);
      aspect-ratio: 1;
      margin-bottom: 50px;
      .card_image{
        position: relative;
        width: 100%;
        img{
          width: 100%;
        }
        .badge_sale{
          position: absolute;
          top: 10px;
          right: 10px;
          color: white;
          background-color: $yellow;
          width: 60px;
          height: 35px;
          span{
            text-transform: uppercase;
            font-weight: 700;
            padding-top: 10px;
            line-height: 35px;
          }
        }
      }
      .card_info{
        text-align: center;
        p{
          font-size: 1.5rem;
          font-weight: 600;
          color: white;
          margin: 20px 0;
        }
        span{
          font-size: 1.2rem;
          font-weight: 600;
          color: $yellow;
          margin-right: 5px;
        }
      }
    }
    .btn{
    margin-top: 30px;
    padding: 20px 80px;
    background-color: $yellow;
    text-transform: uppercase;
    color: white;
    border-radius: 0 20px;
    margin-bottom: 100px;

    }
  }
}

.comment_manager{
  width: $container_min;
  height: 250px;
  margin: 0 auto;
  background-color: blueviolet;
}

.offers{
  width: $container_min;
  height: 250px;
  margin: 0 auto;
  background-color: blue;
}

.results{
  width: $container_max;
  height: 200px;
  margin: 0 auto;
  background-color: $green;
}

.top_trending{
  width: $container_min;
  height: 400px;
  margin: 0 auto;
  background-color: $lightgrey;
}

.appointment{
  width: $container_max;
  height: 350px;
  margin: 0 auto;
  background-color: crimson;
}

.last_feed{
  width: $container_min;
  height: 400px;
  margin: 0 auto;
  background-color: dodgerblue;
}

.logo_subscribe{
  position: relative;
  width: $container_min;
  margin: 0 auto;
  .list_logo{
    height: 200px;
    background-color: darkslategray;
  }
  .subscribe{
    position: absolute;
    z-index: 999;
    bottom: -50px;
    width: 100%;
    height: 100px;
    background-color: mediumvioletred;
  }
}

</style>