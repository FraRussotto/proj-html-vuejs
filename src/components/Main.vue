<script>

  import Jumbotron from './partials/jumbotron.vue';
  import look_organic from './partials/look_organic.vue';
  import trend_products from './partials/trend_products.vue';
  import card_offer from './partials/card_offer.vue';
  import top_trending from './partials/top_trending.vue';

  import { store } from '../data/store';

  export default {
    name: 'Main',
    components:{
      Jumbotron,
      look_organic,
      trend_products,
      card_offer,
      top_trending
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
  <Jumbotron />

  <look_organic />

  <trend_products />

  <section>
    <div class="comment_manager text-center">
      <img src="../assets/img/testi-icon.png" alt="">
      <p>"Dessert pudding desset jelly beans sweet caramels gingebread. Fruitcake biscuit cheescake. <br>
        Cookie topping sweets muffin pudding tart bear claw sugar plum croissant." We started as a small legal consultancy. We have proved oyr competence and had many satisfied clients.</p>
      <span>martha alex</span><br>
      <span>manager</span>
    </div>
  </section>

  <section>
    <div class="offers">
        <div class="d-flex justify-content-between">

          <card_offer />

        </div>
    </div>
  </section>

  <section>
    <div class="results d-flex justify-content-center align-items-center">
      <div class="wave d-flex">
        <div class="result">
          <span>29+</span>
          <span>Years of Experienced</span>
        </div>
      </div>
      <div class="wave d-flex">
        <div class="result">
          <span>200+</span>
          <span>everyday online delivery</span>
        </div>
      </div>
      <div class="wave d-flex">
        <div class="result">
          <span>20k</span>
          <span>client satysfaction</span>
        </div>
      </div>
      <div class="result">
        <span>30+</span>
        <span>award winning</span>
      </div>
    </div>
  </section>

  <section>
    <div class="top_trending text-center">
      <div class="title">
        <span>Running week top selling</span>
        <h2>top <span>trending</span> organic food</h2>
        <img src="../assets/img/title-shap.png" alt="">
      </div>
      <div class="list_trend">
        <div class="d-flex justify-content-between">
          
          <top_trending />

          <!-- <div class="card">
            <img src="../assets/img/s5.jpg" alt="">
            <span class="card_name">Fress Apple</span>
            <span class="price">$18</span>
          </div>
          <div class="card">
            <img src="../assets/img/s2.jpg" alt="">
            <span class="card_name">Fress Apple</span>
            <span class="price">$18</span>
          </div>
          <div class="card">
            <img src="../assets/img/s8.jpg" alt="">
            <span class="card_name">Fress Apple</span>
            <span class="price">$18</span>
          </div>
          <div class="card">
            <img src="../assets/img/s1.jpg" alt="">
            <span class="card_name">Fress Apple</span>
            <span class="price">$18</span>
          </div> -->
        </div>
      </div>
    </div>

  </section>

  <section>
    <div class="appointment text-center">
      <div class="text">
        <span>here you can get 100% fresh organic food</span>
        <h2>Best organic food up to 25% off for all product</h2>
        <p>The most beatiful people we have known are those who have known defeat, known struggle, known loss, and have found their way out of those depths. The most beatiful people we have known are those who have known defeat, known suffering</p>
      </div>
      <div class="button">
        <button class="btn"><i class="fa-solid fa-square-phone"></i><span>+088123 56 906</span></button>
        <button class="btn">appointment</button>
      </div>
    </div>
  </section>

  <section>
      <div class="last_feed text-center">
        <div class="title">
          <span>The news what we have</span>
          <h2>gogrin latest <span>news</span> feed</h2>
          <img src="../assets/img/title-shap.png" alt="">
        </div>
        <div class="card_container d-flex justify-content-between ">
          <div class="card_latest_feed">
            <img src="../assets/img/blo1-390x250.jpg" alt="">
            <div class="info">
              <i class="fa-solid fa-user"></i>
              <span>Gogrin</span>
              <i class="fa-regular fa-clock"></i>
              <div class="date">17 Dec 2022</div>
            </div>
            <div class="text_feed">
              <div class="title">
                Where i live, i am surrounded by fresh, organic food, so i eat really well.
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugit repellendus culpa! Similique ea distinctio atque architecto natus velit aut, vitae animi aliquid quia. Consequuntur.</p>
              <span>read more....</span>

            </div>
          </div>
          <div class="card_latest_feed">
            <img src="../assets/img/blo2-390x250.jpg" alt="">
            <div class="info">
              <i class="fa-solid fa-user"></i>
              <span>Gogrin</span>
              <i class="fa-regular fa-clock"></i>
              <div class="date">17 Dec 2022</div>
            </div>
            <div class="text_feed">
              <div class="title">
                What we get at home is 100% organic food. We are also 90% vegetarian.
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus at sunt rerum blanditiis id obcaecati minus accusamus? Reiciendis tenetur cupiditate sunt consequuntur magnam ea ad!</p>
              <span>read more....</span>

            </div>
          </div>
          <div class="card_latest_feed">
            <img src="../assets/img/blo3-390x250.jpg" alt="">
            <div class="info">
              <i class="fa-solid fa-user"></i>
              <span>Gogrin</span>
              <i class="fa-regular fa-clock"></i>
              <div class="date">17 Dec 2022</div>
            </div>
            <div class="text_feed">
              <div class="title">
                Where i live, i am surrounded by fresh, organic food, so i eat really well.
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odio eos exercitationem, odit ex dolorem omnis voluptatem dolor enim. Facilis reiciendis dignissimos eaque non dicta!</p>
              <span>read more....</span>
            </div>

          </div>
        </div>
      </div>
  </section>

  <section class="logo_images">
    <div class="list_logo">
      <ul class="d-flex justify-content-between">
        <a href="#">
          <li><img src="../assets/img/brand1.png" alt=""></li>
        </a>
        <a href="#">
          <li><img src="../assets/img/brand2.png" alt=""></li>
        </a>        
        <a href="#">
          <li><img src="../assets/img/brand3.png" alt=""></li>
        </a>        
        <a href="#">
          <li><img src="../assets/img/brand4.png" alt=""></li>
        </a>        
        <a href="#">
          <li><img src="../assets/img/brand1.png" alt=""></li>
        </a>
      </ul>
    </div>
  </section>

</template>

<style lang="scss" scoped>

@use '../scss/variables' as *;

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
  margin: 0 auto;
  margin-bottom: 100px;
  img{
    margin-top: 100px;
    width: 80px;
    height: 50px;
  }
  p{
    font-size: 1.7rem;
    width: 1000px;
    margin: 0 auto;
    color: black;
    margin-bottom: 20px;
  }
  span{
    text-transform: capitalize;
    &:first-of-type{
      font-size: 1.6rem;
      font-weight: 600;
    }
    &:last-of-type{
      font-size: 1.2rem;
      font-weight: 600;
      color: $yellow;
    }
  }
  
}

.offers{
  width: $container_min;
  margin: 0 auto;
}

.results{
  width: $container_max;
  height: 300px;
  margin: 150px auto;
  background-image: url(../assets/img/counter-bg.jpg);
  .wave::after{
    content: url(../assets/img/counter-shap1.png);
    margin: 0 50px;
  }
  .result{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span{
      &:first-of-type{
        display: block;
        font-size: 5rem;
        line-height: 5rem;
        font-weight: 700;
        color: $yellow;
      }
      &:last-of-type{
        font-size: 1.8rem;
        font-weight: 600;
        color: white;
        text-transform: capitalize;
      }
    }
  }
}

.top_trending{
  width: $container_min;
  margin: 0 auto;
  margin-bottom: 100px;
  .title{
    position: relative;
    margin-bottom: 50px;
    span{
      font-size: 1.7rem;
      font-weight: 500;
      color: $yellow;
    }
    h2{
      font-size: 3.3rem;
      font-weight: 600;
      text-transform: uppercase;
      color: $green;
      span{
        font-size: 3.3rem;
        font-weight: 600;
        text-transform: uppercase;
        color: $yellow;
      }
    }
    img{
      position: absolute;
      top: 20%;
      left: 50%;
      z-index: -1;
      transform: translate(-50%, -50%);
      width: 140px;

    }
  }
  .list_trend{
    .card{
      width: calc(25% - 25px);
      border: 0;
      box-shadow: 0px 0px 15px 0.5px rgba(206, 206, 206, 0.5);
      .card_name{
        font-size: 1.6rem;
        font-weight: 600;
      }
    }
  }
}


.appointment{
  width: $container_max;
  height: 450px;
  margin: 0 auto;
  background-image: url(../assets/img/call-to-bg.jpg);
  background-size: cover;
  padding: 100px;
  color: white;
  .text{
    width: 70%;
    margin: 0 auto;
    span{
      font-size: 1.3rem;
      text-transform: uppercase;
      font-weight: 600;
    }
    h2{
      font-size: 3.4rem;
      font-weight: 600;
    }
    p{
      margin-top: 20px;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 30px;
    }
  }
  .btn{
    margin-top: 30px;
    padding: 15px 30px;
    text-transform: uppercase;
    color: white;
    border-radius: 8px;
    margin-right: 20px;
    font-weight: 500;
    &:first-of-type{
      background-color: $yellow;
      i{
        margin-right: 5px;
        font-size: 1.2rem;
      }
      &:hover{
        background-color: $green;
      }
    }
    &:last-of-type{
      background-color: $green;
      &:hover{
        background-color: $yellow;
      }
    }
  }
  
  
}

.last_feed{
  width: $container_min;
  margin: 0 auto;
  margin: 150px auto 100px auto;
  .title{
    position: relative;
    span{
      font-size: 1.6rem;
      font-weight: 500;
      color: $yellow;
    }
    h2{
      font-size: 3rem;
      font-weight: 600;
      text-transform: uppercase;
      color: $green;
      span{
        font-size: 3rem;
        font-weight: 600;
        text-transform: uppercase;
        color: $yellow;
      }
    }
    img{
      position: absolute;
      top: 20%;
      left: 50%;
      z-index: -1;
      transform: translate(-50%, -50%);
      width: 140px;

    }
  }
  .card_latest_feed{
    width: calc((100% - 50px) / 3);
    img{
      width: 100%;
      height: 250px;
    }
    .info{
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 20px;
      color: darkgrey;
      i{
        color: $yellow;
      }
    }
    .text_feed{
      text-align: start;

      .title{
        color: $green;
        font-size: 1.5rem;
        font-weight: 600;
      }
      p{
        color: darkgrey;
        margin: 20px 0;
      }
      span{
        color: $green;
        text-transform: uppercase;
      }
    }
  }

}

.logo_images{
  width: $container_min;
  margin: 0 auto;
}

</style>