<script>
import { store } from '../../data/store';

export default {
  name: 'Latest_blogs',
  data(){
    return {
      store,
    }
  },
  methods:{
    getLatestFeed(){
      store.latest_blogs = store.feed.sort((a, b) => {
      return b.num_feed - a.num_feed;
    }).slice(0,2);
  },
    getImagePath(img){
      return new URL(`${img}`, import.meta.url).href
    }
  },
  mounted(){
    this.getLatestFeed();
  }


}
</script>
<template>
  <div class="latest_blogs">
    <h3>Our latest blog.</h3>
    <div v-for="item in store.latest_blogs" :key="item.num_feed" class="latest_blogs">
      <div class="blog">
        <img :src="getImagePath(item.img)" alt="">
        <div class="preview">
          <span class="title">{{ item.title }}</span>
          <div class="date">{{ item.date }}</div>
        </div>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>

@use '../../scss/variables' as *;

.latest_blogs{
    color: white;
    h3{
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 30px;
    }
    .blog{
      margin-bottom: 10px;
      display: flex;
      img{
        width: 80px;
        height: 80px;
        margin-right: 20px;
        padding-top: 10px;
      }
      .preview{
        .title{
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 30px;
        }
        .date{
          font-size: 1.1rem;
        }
      }
    }
    &:hover{
      opacity: 0.8;
      cursor: pointer;
    }
  }

</style>