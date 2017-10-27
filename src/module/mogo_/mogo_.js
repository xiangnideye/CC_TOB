import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import mogo_ from "../../components/mlogin/mlogin.vue"

Vue.use(VueResource);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#mogo_',
  template: '<App/>',
  components: { App }
})
