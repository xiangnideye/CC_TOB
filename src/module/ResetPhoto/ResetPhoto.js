import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import ResetPhoto from "../../components/ResetPhoto/ResetPhoto.vue"

Vue.use(VueResource);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#ResetPhoto',
  template: '<App/>',
  components: { App }
})
