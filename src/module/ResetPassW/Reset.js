import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import ResetPassW from "../../components/ResetPassW/Reset.vue"

Vue.use(VueResource);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#ResetPassW',
  template: '<App/>',
  components: { App }
})
