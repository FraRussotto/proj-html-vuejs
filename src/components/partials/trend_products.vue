<script>

import { store } from '../../data/store'

export default {
  name: 'Trend_products',
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

        <div v-for="item in store.trend_product" :key="item.id" class="card_fr">
          <div class="card_image">
            <img :src="getImagePath(item.img)" :alt="item.name">
            <div v-if="item.sale" class="badge_sale">
              <span>sale!</span>
            </div>
            <div class="card_action d-flex">
              <div class="save"><i class="fa-solid fa-heart"></i></div>
              <div class="add_cart"><i class="fa-solid fa-cart-shopping"></i></div>
              <div class="watch"><i class="fa-solid fa-eye"></i></div>
            </div>
          </div>
          <div class="card_info">
            <p>{{ item.name }}</p>
            <span v-if="item.sale" class="old">{{ item.oldprice }}</span>
            <span class="last">{{ item.lastprice }}</span>
          </div>
        </div>

      </div>
      <button class="btn">all products</button>
    </div>
  </div>

</template>


<style lang="scss" scoped>

@use '../../scss/variables' as *;

.trending_organic{
  width: $container_max;
  margin: 0 auto;
  background-image: url('../../assets/img/shop-bg-img.jpg');
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
        overflow: hidden;
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
        .card_action{
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%);
          transition: bottom .5s;
          & > *{
            color: $green;
            background-color: rgb(252, 252, 252);
            border-radius: 50%;
            margin: 0 5px;
            &:hover{
              color: white;
              background-color: $yellow;
              cursor: pointer;
            }
            i{
              font-size: 1.5rem;
              padding: 8px;
            }
          }
        }
        &:hover .card_action{
          bottom: 10px
          
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
        .old{
          text-decoration: line-through;
          color: darken($yellow, 5%);
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


</style>