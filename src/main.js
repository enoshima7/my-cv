import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './assets/scss/style.scss';
Vue.config.productionTip = false;
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
import store from './store'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
