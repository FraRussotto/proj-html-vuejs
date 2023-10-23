<script>
import { store } from '../../data/store';

export default {
  name: 'Card_feed',
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
  <div v-for="item in store.feed" :key="item.num_feed" class="card_latest_feed">
    <div class="img_bkg">
      <img :src="getImagePath(item.img)" alt="">
    </div>
    <div class="info">
      <i class="fa-solid fa-user"></i>
      <span>{{ item.user }}</span>
      <i class="fa-regular fa-clock"></i>
      <div class="date">{{ item.date }}</div>
    </div>
    <div class="text_feed">
      <div class="title">{{ item.title }}</div>
      <p>{{ item.text }}</p>
      <span>read more....</span>

    </div>
  </div>

</template>


<style lang="scss" scoped>

@use '../../scss/variables' as *;

  .card_latest_feed{
    width: calc((100% - 50px) / 3);
    .img_bkg{
      background-color: black;
    }
    &:hover img{
      opacity: 0.5;
      cursor: pointer;
    }
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

</style>