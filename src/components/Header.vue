<script>
  export default {
    name: 'Header'
  }
</script>

<template>


  <!-- Suddivisione dell'header in 2 contenitori separati -->
    <div class="header_top">
      <div class="fr_container d-flex justify-content-between">
        <div class="left d-flex">
          <div class="location"> Palermo, Italia</div>
          <div class="email">demo@example.com</div>
        </div>
        <div class="right d-flex">
          <div class="hours_active">8.30AM-8.30PM</div>
          <div class="social">
            <ul class="d-flex list-unstyled ">
              <li>social</li>
              <li>social</li>
              <li>social</li>
              <li>social</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="header_bottom">

    </div>

</template>

<style lang="scss" scoped>

@use '../scss/variables' as *;
  .header_top{
    height: 30px;
    color: white;
    background-color: $green;
    .fr_container{
      width: $container_max;
      margin: 0 auto;
    }
  }
</style>