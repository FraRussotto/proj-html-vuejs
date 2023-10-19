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
    <div class="trending_organic">
      trending_organic
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
  height: 500px;
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
  height: 800px;
  margin: 0 auto;
  background-color: brown;
  background-image: '../assets/img/shop-bg-img.jpg';
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