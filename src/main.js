import Vue from "vue";
import VueRouter from "vue-router";
import App from './App.vue'
import axios from 'axios';
import router from './router'

Vue.use(VueRouter); 

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
