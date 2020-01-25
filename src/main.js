import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  data: ()=>({
    pauseTime: "00:00:00",
  }),
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
