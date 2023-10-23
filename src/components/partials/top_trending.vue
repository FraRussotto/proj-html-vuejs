<script>

import { store } from '../../data/store';

export default {
  name: 'Top_trending',
  data(){
    return {
      store,
    }
  },
  methods:{
    getMaxSold(){
      store.top_trending = store.trend_product.sort((a, b) => {
      return b.sold - a.sold;
    }).slice(0,4);
    console.log(store.top_trending);
    console.log(store.trend_product);
  },
    getImagePath(img){
        return new URL(`${img}`, import.meta.url).href
    }
  },
  mounted(){
    this.getMaxSold();
    // store.top_trending.length = 4;
  }


}
</script>

<template>
  <div v-for="item in store.top_trending" :key="item.id" class="card">
    <img :src="getImagePath(item.img)" alt="">
    <span class="card_name">{{ item.name }}</span>
    <span class="price">{{ item.lastprice }}</span>
  </div>

</template>


<style lang="scss" scoped>

@use '../../scss/variables' as *;

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

</style>