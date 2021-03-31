<template>
  <div class="base-container">
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
    <div class="content">
      <div class="heading">Subscribe to newsletter</div>
      <div class="subheading">
        Subscribe to our newsletter and get 10% discount on pineapple glasses
      </div>
      <form action="">
        <div class="email-input-container">
          <div class="band"></div>
          <input
            type="email"
            class="email-input"
            placeholder="Type your email address here..."
            v-model="email"
          />
          <span class="icon-arrow-right"></span>
        </div>
        <div
          class="error-message"
          v-for="(error, index) in emailErrors"
          :key="index"
        >
          {{ error }}
        </div>
        <div class="tos">
          <input type="checkbox" class="checkbox" />
          <div class="tos-message">
            I agree to <span class="tos-message-link">terms of service</span>
          </div>
        </div>
      </form>
      <hr class="horizontal-seperator-form-social" />
      <div class="links-container">
        <span class="icon-facebook social-icon"></span>
        <span class="icon-instagram social-icon"></span>
        <span class="icon-twitter social-icon"></span>
        <span class="icon-youtube social-icon"></span>
      </div>
    </div>
    <div class="main-pineapple-image"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      email: "",
      emailErrors: {
        mustBeEmailMessage: "",
      },
    };
  },
  methods: {
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
  watch: {
    email(newValue) {
      if (!this.validEmail(newValue)) {
        this.emailErrors["mustBeEmailMessage"] = "This should be a valid email";
      } else {
        this.emailErrors["mustBeEmailMessage"] = "";
      }
    },
  },
};
</script>

<style scoped lang="sass">
//Base colors
$blue-color:#4066A5
$black-color: #131821
$dark-gray-color:#6A707B
$light-gray-color:#E3E3E4
$dark-white-color:#F2F5FA

//Base fonts
$font-size: 10px
$font-family-primary:'Georgia'
$font-weight-primary:400
$font-family-secondary:'Arial'

//Mobile first
.base-container
    height: 100vh
    width: 100vw
    display: grid
    grid-template-rows: 8.2% 23% auto 23%
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

    .content
        grid-area: 3/1/4/2
        margin: 0 5.3%
        background: linear-gradient(180deg, #FFFFFF 0%, $dark-white-color 100%)
        z-index:999
        padding: 3rem 2rem 0 2rem
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

        .email-input-container
            display: flex
            font-size: 1rem
            flex-direction: row
            border: 1px solid #E3E3E4
            margin-bottom: 2rem
            .band
                width: 1.3%
                background-color: #4066A5
            .email-input
                width: 76.94%
                outline: none
                border: none
                background-color: inherit
                font-family: $font-family-secondary
                font-size: 1.6rem
                font-weight: 400
                line-height: 2.4rem
                margin: 1.125em 0.625em 1.125em 0.93em
            .icon-arrow-right
                font-size: 2.7rem
                align-self: center
                color: $black-color
                opacity: 0.3
        .error-message
          color: red
          font-size: 1.6rem
        .tos
            display: flex
            flex-direction: row
            margin-bottom: 2rem
            .checkbox
                width: 8.8%
                height: 26px
                margin-right: 5.1%
            .tos-message
                width: 86.1%
                font-family: 'Arial'
                font-weight: 400
                font-size: 1.6rem
                line-height: 1.75em
                color: #6A707B
            .tos-message-link
                font-family: 'Arial'
                font-weight: 500
                color: $black-color
                text-decoration: underline
                opacity: 0.7
        .horizontal-seperator-form-social
            font-size: 1rem
            background-color: $light-gray-color
            opacity: 0.3
            margin-bottom: 2rem
        .links-container
            margin: 0 auto 30px auto
            width: 75%
            display: flex
            align-content: center
            justify-content: space-between
            .social-icon
                font-size: 4.6rem
                color: $light-gray-color

    .main-pineapple-image
        grid-area: 2/1/5/2
        background-image: url('../assets/image_summer.png')
        background-position: 58.5% 0%
        background-size: cover

//Very small mobile in height
@media screen and ( max-height:580px)
    .base-container
        grid-template-rows: 10% 10% auto auto

//slightly larger screens
// @media screen and ( min-width: 780px)
//     .base-container
//         .top-bar-container
//             background-color: green

//slightly larger screens
@media screen and ( min-width: 1024px)
    .base-container
        grid-template-rows: 16% auto
        grid-template-columns: max(511px,35.5%) auto
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
        .content
            grid-area: 2/1/3/2
            background: none
            padding: 19.5rem 8rem 0 9rem
            .heading
                font-size: 2.8rem
                margin-bottom: 1.5rem
            .subheading
                line-height: 2.6rem
            .email-input-container
                background-color: white
                position: relative
                width: 580px
                left: -55px
                top: 20px
                font-size: 1rem
                flex-direction: row
                margin: 0 2em 2em 2em
                border: 1px solid #E3E3E4
                .band
                    width: 0.6%
                .email-input
                    width: 76.94%
                    outline: none
                    border: none
                    background-color: inherit
                    font-family: $font-family-secondary
                    font-size: 1.6rem
                    font-weight: 400
                    line-height: 2.4rem
                    margin: 1.125em 4em 1.125em 0.93em
            .tos
                padding-top: 40px
                margin-bottom: 40px
                .checkbox
                    width: 7%
                    height: 24px
            .horizontal-seperator-form-social
                margin-bottom: 4rem
            .links-container
                margin: 0 auto 30px auto
                width: 60%
                .social-icon
                    font-size: 3.5rem
                    color: $light-gray-color


        .main-pineapple-image
            grid-area: 1/2/3/3
</style>
