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

  <div v-for="item in store.top_trending" :key="item.id" class="card_fr">
  <div class="card_image">
    <img :src="getImagePath(item.img)" :alt="item.name">
    <div v-if="item.sale" class="badge_sale">
      <span>sale!</span>
    </div>
  </div>
  <div class="card_info">
    <p>{{ item.name }}</p>
    <span v-if="item.sale" class="old">{{ item.oldprice }}</span>
    <span class="last">{{ item.lastprice }}</span>
  </div>

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
  .card_fr{
      width: calc((100% - 100px) / 4);
      aspect-ratio: 1;
      padding-bottom: 20px;
      margin-bottom: 50px;
      box-shadow: 0px 0px 15px 0.5px rgba(206, 206, 206, 0.5);

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
          margin: 20px 0;
        }
        span{
          font-size: 1.2rem;
          font-weight: 600;
          color: $yellow;
          margin-right: 5px;
        }
        .old{
          text-decoration: line-through;
          color: darken($yellow, 5%);
        }
      }
    }
  }

</style>