<script>
  export default {
    name: 'Footer'
  }
</script>

<template>

    <div class="footer_top">
      <div class="fr_container">
        footer_top
      </div>
    </div>

    <div class="footer_bottom">
      <div class="fr_container">
        footer_bottom
      </div>
    </div>

</template>

<style lang="scss" scoped>

@use '../scss/variables' as *;
.fr_container{
  width: $container_min;
  margin: 0 auto;
}
.footer_top{
  height: 300px;
  padding-top: 50px;
  background-color: darkgreen;
}

.footer_bottom{
  height: 50px;
  background-color: $green;
}
</style>