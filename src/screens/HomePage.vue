<template>
  <div class="base-container">
    <top-bar></top-bar>
    <div class="content">
      <div v-if="!subscribed">
        <subscribe-invitation></subscribe-invitation>
        <h2 v-if="errorMessage != ''" class="error">{{ errorMessage }}</h2>
        <subscribe-form @formSubmitted="submitForm"></subscribe-form>
      </div>
      <div v-else>
        <subscribe-success></subscribe-success>
      </div>
      <hr class="horizontal-seperator-form-social" />
      <social-links></social-links>
    </div>
    <div class="main-pineapple-image"></div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import SubscribeInvitation from "../components/SubscribeInvitation.vue";
import SubscribeForm from "../components/SubscribeForm.vue";
import SocialLinks from "../components/SocialLinks.vue";
import SubscribeSuccess from "../components/SubscribeSuccess.vue";
export default {
  name: "HomePage",
  components: {
    TopBar,
    SubscribeInvitation,
    SubscribeForm,
    SocialLinks,
    SubscribeSuccess,
  },
  data() {
    return {
      subscribed: false,
      errorMessage: "",
    };
  },
  methods: {
    submitForm(data) {
      let headers = {
        "Content-Type": "application/json",
      };
      this.$http
        .post("http://localhost:8080/addemail", data, { headers: headers })
        .then((response) => {
          if (response.data["value"] === "Success") {
            this.subscribed = true;
            console.log(response.data["value"]);
          } else {
            this.errorMessage = response.data["value"];
          }
        });
    },
  },
};
</script>

<style scoped lang="sass">

.error
  color: red

//Mobile first
.base-container
    height: 100vh
    width: 100vw
    display: grid
    grid-template-rows: 8.2% 23% auto 23%
    .content
        grid-area: 3/1/4/2
        margin: 0 5.3%
        background: linear-gradient(180deg, #FFFFFF 0%, $dark-white-color 100%)
        z-index:999
        padding: 3rem 2rem 0 2rem
        .horizontal-seperator-form-social
            font-size: 1rem
            background-color: $light-gray-color
            opacity: 0.3
            margin-bottom: 2rem
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
        .content
            grid-area: 2/1/3/2
            background: none
            padding: 19.5rem 8rem 0 9rem
            .horizontal-seperator-form-social
                margin-bottom: 4rem
        .main-pineapple-image
            grid-area: 1/2/3/3
</style>
