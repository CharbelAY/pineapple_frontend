<template>
  <div class="links-container">
    <div class="circle-base circle-facebook shadow">
      <span class="icon-facebook social-icon"></span>
    </div>
    <div class="circle-base circle-instagram shadow">
      <span class="icon-instagram social-icon"></span>
    </div>
    <div class="circle-base circle-twitter shadow">
      <span class="icon-twitter social-icon"></span>
    </div>
    <div class="circle-base circle-youtube shadow">
      <span class="icon-youtube social-icon"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="sass">
.links-container
    margin: 0 auto 30px auto
    width: 75%
    display: flex
    align-content: center
    justify-content: space-between
    .social-icon
        font-size: 2.5rem
        color: $light-gray-color

@media screen and ( min-width: 1024px)
    .links-container
        margin: 0 auto 30px auto
        width: 60%
        .social-icon
            font-size: 2.5rem
            color: $light-gray-color
</style>
