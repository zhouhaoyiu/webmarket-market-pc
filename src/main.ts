import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "./assets/reset.scss";
import "element-ui/lib/theme-chalk/index.css";
import _ from "lodash";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.prototype.$axios.defaults.baseURL = "http://localhost:8090/";
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(Vuex);
Vue.prototype._ = _;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
