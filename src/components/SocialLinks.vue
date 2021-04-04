<template>
  <div class="links-container">
    <span class="icon-facebook social-icon"></span>
    <span class="icon-instagram social-icon"></span>
    <span class="icon-twitter social-icon"></span>
    <span class="icon-youtube social-icon"></span>
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
        font-size: 4.6rem
        color: $light-gray-color

@media screen and ( min-width: 1024px)
    .links-container
        margin: 0 auto 30px auto
        width: 60%
        .social-icon
            font-size: 3.5rem
            color: $light-gray-color
</style>
