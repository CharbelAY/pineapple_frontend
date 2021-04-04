<template>
  <div class="top-bar-container">
    <div class="logo-containers">
      <div class="pineapple-logo-container">
        <span class="icon-pineapple-logo"></span>
        <span class="icon-pineapple-text"></span>
      </div>
      <div class="pineapple-logo-text-container"></div>
    </div>
    <ul class="navigation-list">
      <li class="about navigation-item">
        <a href="#" class="navigation-link">About</a>
      </li>
      <li class="how-it-works navigation-item">
        <a href="#" class="navigation-link">How it works</a>
      </li>
      <li class="contact navigation-item">
        <a href="#" class="navigation-link">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="sass">

.top-bar-container
    grid-area: 1/1/2/2
    display: flex
    justify-content: space-between
    .logo-containers
        margin: 2.6% 0 0 5.3%
        .pineapple-logo-container
            .icon-pineapple-logo
                font-size: 4rem
            .icon-pineapple-text
                font-size: 1.6rem
                display: none
    .navigation-list
        display: flex
        list-style: none
        justify-content: space-between
        align-items: center
        margin-right: 5.7%
        .navigation-item
            font-family: $font-family-secondary
            font-weight: $font-weight-primary
            line-height: 2.4rem
            font-size: 1.4rem
            .navigation-link
                text-decoration: none
                color: $dark-gray-color
        .about
            margin-right: 2rem
        .how-it-works
            margin-right: 2rem

@media screen and ( min-width: 1024px)
    .top-bar-container
        grid-area: 1/1/2/2
        align-items: flex-end
        padding-bottom: 1rem
        .logo-containers
            margin: 2.6% 0 0 14.7%
            .pineapple-logo-container
                display: flex
                align-items: flex-end
                .icon-pineapple-logo
                    font-size: 3.5rem
                .icon-pineapple-text
                    margin-left: 1.3rem
                    font-size: 1.6rem
                    display: inherit
        .navigation-list
            margin:2rem 8.75rem 0 0
            .about
                margin-right: 2.5rem
            .how-it-works
                margin-right: 2.5rem
</style>
