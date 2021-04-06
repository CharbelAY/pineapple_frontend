import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

Vue.prototype.$http = axios;

const app = new Vue({
  render: (h) => h(App),
});

app.$mount("#app");
