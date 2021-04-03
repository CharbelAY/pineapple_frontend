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
      <form
        ref="subscriptionForm"
        method="post"
        action="http://localhost:8080/addemail"
      >
        <div class="email-input-container">
          <div class="band"></div>
          <input
            type="email"
            id="email"
            name="email"
            class="email-input"
            placeholder="Type your email address here..."
            v-model="email"
            ref="emailInput"
          />
          <button
            class="arrow-button"
            :disabled="!submitActive"
            @click="submitForm"
          >
            <span
              class="icon-arrow-right"
              :class="[{ active: submitActive }]"
            ></span>
          </button>
        </div>
        <div v-if="errors.email.active">
          <div class="error-container">
            <div
              class="error-message"
              v-for="(error, index) in errors.email.rules"
              :key="index"
            >
              <div v-if="!error.value">
                {{ error.errorMessage }}
              </div>
            </div>
          </div>
        </div>
        <div class="tos">
          <input
            type="checkbox"
            id="tos"
            name="tos"
            class="checkbox"
            v-model="tos"
          />
          <div class="tos-message">
            I agree to <span class="tos-message-link">terms of service</span>
          </div>
        </div>
        <div
          v-for="(error, index) in errors.tos.rules"
          :key="index"
          class="error-message"
        >
          <div v-if="!error.value">{{ error.errorMessage }}</div>
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
  mounted() {
    this.$refs.emailInput.addEventListener(
      "input",
      () => {
        this.errors.email.active = true;
      },
      { once: true }
    );
  },
  data() {
    return {
      email: "",
      tos: true,
      errors: {
        email: {
          active: false,
          emailValid: function() {
            return Object.entries(this.rules).every(([, value]) => value.value);
          },
          rules: {
            valid: {
              value: false,
              errorMessage: "Please provide a valid e-mail address",
            },
            notEmpty: {
              value: false,
              errorMessage: "Email address is required",
            },
            notColombia: {
              value: false,
              errorMessage:
                "We are not accepting subscriptions from Colombia emails",
            },
          },
        },
        tos: {
          tosValid: function() {
            return Object.entries(this.rules).every(([, value]) => value.value);
          },
          rules: {
            checked: {
              value: true,
              errorMessage: "You must accept the terms and conditions",
            },
          },
        },
      },
    };
  },
  methods: {
    validEmail: function(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    emailFromColombia(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+(co)))$/;
      return re.test(email);
    },
    submitForm(e) {
      e.preventDefault();
      console.log(this.$refs.subscriptionForm.submit());
    },
  },
  watch: {
    email(newValue) {
      if (!this.validEmail(newValue)) {
        this.errors.email.rules.valid.value = false;
      } else {
        this.errors.email.rules.valid.value = true;
      }
      if (newValue === "") {
        this.errors.email.rules.notEmpty.value = false;
      } else {
        this.errors.email.rules.notEmpty.value = true;
      }
      if (this.emailFromColombia(newValue)) {
        this.errors.email.rules.notColombia.value = false;
      } else {
        this.errors.email.rules.notColombia.value = true;
      }
    },
    tos(newValue) {
      this.errors.tos.rules.checked.value = newValue;
    },
  },
  computed: {
    submitActive() {
      return this.errors.email.emailValid() && this.errors.tos.tosValid();
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
$shadow-color:#D3D3D3

//Base fonts
$font-size: 10px
$font-family-primary:'Georgia'
$font-weight-primary:400
$font-family-secondary:'Arial'

//Mobile first
.error-message
    color: red
    font-size: 1.6rem
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
            border: 1px solid $light-gray-color
            margin-bottom: 2rem
            &:focus-within
              box-shadow: 0 0 5pt 0.5pt $shadow-color
            &:hover
              border: 1px solid #4066A5
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
            .arrow-button
              border: none
              background: inherit
              outline: none
            .icon-arrow-right
                font-size: 2.7rem
                align-self: center
                color: $black-color
                opacity: 0.3
            .active
              color: $blue-color
              opacity: 1
        .error-container
            height: 2rem
        .tos
            display: flex
            flex-direction: row
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
@media screen and ( min-width: 1024px)
    .error-message
        color: red
        font-size: 1.6rem
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
                margin: 0 2em 2rem 2em
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
            .error-container
                height: 2rem
            .tos
                padding-top: 40px
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
