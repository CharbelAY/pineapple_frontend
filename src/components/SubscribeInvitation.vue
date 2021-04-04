<template>
  <div>
    <div class="heading">Subscribe to newsletter</div>
    <div class="subheading">
      Subscribe to our newsletter and get 10% discount on pineapple glasses
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="sass">
.heading
    font-family: $font-family-primary
    font-weight: $font-weight-primary
    font-size: 2.4rem
    line-height: 3.4rem
    color: $black-color
    margin-bottom: 1rem
.subheading
    font-family: $font-family-secondary
    font-weight: $font-weight-primary
    font-size: 1.4rem
    line-height: 2.6rem
    color: $dark-gray-color
    margin-bottom: 2rem
@media screen and ( min-width: 1024px)
    .heading
        font-size: 2.8rem
        margin-bottom: 1.5rem
    .subheading
        line-height: 2.6rem
</style>
