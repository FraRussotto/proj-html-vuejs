<script>
  export default {
    name: 'Jumbotron'
  }
</script>

<template>
  <div class="jumbo_bkg">

    <div class="jumbo_title d-flex flex-column justify-content-center align-items-center">
      <h1>gogrin organic food store</h1>
      <span>Eating naturally & organic is always be healthy.</span>
      <div class="jumbo_btn d-flex">
        <button class="btn">about us</button>
        <button class="btn">our history</button>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>

@use '../../scss/variables' as *;

.jumbo_bkg{
  width: 100%;
  height: 850px;
  background-image: url('../../assets/img/H3-slider3.jpg');
  background-position: center;
  background-size: cover;

  .jumbo_title{
    color: white;
    width: 1200px;
    margin: 0 auto;
    height: 100%;
    h1{
      font-size: 1.6rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    span{
      line-height: 100px;
      font-size: 6rem;
      font-weight: 700;
      text-align: center;
      word-spacing: 5px;
    }
  }
  .btn{
    margin-top: 30px;
    padding: 20px 80px;
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