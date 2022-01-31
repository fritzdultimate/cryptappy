import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import routes from "./router/routes";
import BlockUI from 'vue-blockui';
import Spinner from 'vue-spinkit';

Vue.component('Spinner', Spinner)

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(BlockUI);
const router = new VueRouter({ routes, mode: "history" });

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
