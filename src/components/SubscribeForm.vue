<template>
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
</template>

<script>
export default {
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

.error-message
    color: red
    font-size: 1.6rem

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

@media screen and ( min-width: 1024px)
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
</style>
