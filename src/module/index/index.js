import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#mechanism',
  template: '<App/>',
  components: { App }
})
