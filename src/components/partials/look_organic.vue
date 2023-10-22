<script>

import { store } from '../../data/store';

export default {
  name: 'Look_organic',
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
  <div class="look_organic">

    <div class="description d-flex">
      <p class="text_full"><span>Look what</span> consumer power has done with <span>organic food;</span> we can do the same with clothes.</p>
      <p class="text">I have a need to make these sorts of connections literal sometimes, and a vehicle often helps to do that.<br>I have a relationship to hosting culture. <span>It isn't really about it helps to do that. I gave a relationship to hosting culuter.</span><br><br>Need to make these sorts of connections literal sometimes, and a vehicle often helps to do that, i have a relationship to hosting culture.</p>
    </div>

    <div class="image_food">
      <div class="row mt-4">
        <div class="col d-flex justify-content-between">
          <img v-for="item in store.organic_food" :key="item.id" :src="getImagePath(item.img)" alt="">
        </div>
      </div>
    </div>

    <img src="../../assets/img/fe-shap1-1.png" alt="" class="image_allnatural">

  </div>

</template>

<style lang="scss">

@use '../../scss/variables' as *;

.look_organic{
  position: relative;
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
  .image_allnatural{
    position: absolute;
    top: 120px;
    right: -250px
  }
}

</style>