import Vue from 'vue'
import App from './App.vue'
import Notifications from "vue-notification";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);

Vue.component("menu-icon", MenuIcon);
Vue.use(Notifications)
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
