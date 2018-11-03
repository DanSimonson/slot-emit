import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//our event bus is created and exported for use
export const bus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
