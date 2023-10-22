<script>

import { store } from '../../data/store';

export default {
  name: 'Card_offer',
  data(){
    return{
      store
    }
  }
}
</script>

<template>

<div v-for="item in store.combo_offer" :key="item.id" class="offer">
  <div class="text_offer">
    <span>{{ item.text }}{{ item.price }}</span>
    <a href="#"><span>shop now</span></a>
  </div>
</div>

</template>


<style lang="scss" scoped>

@use '../../scss/variables' as *;

.offer{
  width: 49%;
  height: 280px;
  background-color: $green;
  padding: 25px 40px;
  .text_offer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;
    width: 75%;
    height: 100%;
    span{
      font-size: 2.5rem;
      font-weight: 700;
    }
    a{
      color: white;
      span{
      padding: 5px;
      font-size: 1.3rem;
      font-weight: 700;
      text-transform: uppercase;
      &:hover{
        background-color: $yellow;
      }
    }
    }
  }
  &:first-of-type{
    background-image: url(../../assets/img/offer-img01.jpg);
    background-size: cover;
  }
  &:last-of-type{
    background-image: url(../../assets/img/offer-img02.jpg);
    background-size: cover;
  }
}

</style>