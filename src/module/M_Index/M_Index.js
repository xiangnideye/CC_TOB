import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import M_Index from "../../components/M_Index/M_Index.vue"

Vue.use(VueResource);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#M_Index',
  template: '<App/>',
  components: { App }
})
