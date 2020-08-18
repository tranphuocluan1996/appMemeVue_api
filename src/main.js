import Vue from 'vue'
import App from './App.vue'
import './plugins'
import VueRouter from "vue-router";
import store from './store'

Vue.use(VueRouter);
import router from './router'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
