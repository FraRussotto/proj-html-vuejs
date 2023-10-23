<script>
import { store } from '../../data/store'

export default {
  name: 'Jumbotron',
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
  <div class="jumbo_slider">

    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div v-for="(item,index) in store.slider" :key="item.id" class="carousel-item" :class="{'active' : index == 0}">
        <div class="content_slider">
          <img :src="getImagePath(item.img)" class="d-block w-100" alt="">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div class="jumbo_text">

    <div class="jumbo_title d-flex flex-column justify-content-center align-items-center">
      <h1>gogrin organic food store</h1>
      <span>Eating naturally & organic is always be healthy.</span>
      <div class="jumbo_btn d-flex">
        <button class="btn">about us</button>
        <button class="btn">our history</button>
      </div>
    </div>

  </div>

</div>
</template>


<style lang="scss" scoped>

@use '../../scss/variables' as *;

.jumbo_slider{
  position: relative;
  }
  .jumbo_text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .jumbo_title{
      color: white;
      h1{
        font-size: 1.7rem;
        text-transform: uppercase;
        font-weight: 600;
      }
      span{
        text-align: center;
        font-size: 6rem;
        font-weight: 700;
        line-height: 100px;
      }
    }
    .btn{
    margin-top: 50px;
    padding: 20px 70px;
    background-color: $yellow;
    text-transform: uppercase;
    color: white;
    border-radius: 0 20px;
    margin-right: 20px;
      &:hover{
        background-color: $green;
      }
    }
  }

</style>