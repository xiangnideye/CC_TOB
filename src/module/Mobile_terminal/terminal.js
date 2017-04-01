import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#Mobile_terminal',
  template: '<App/>',
  components: { App }
})
