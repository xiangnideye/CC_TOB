import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import WeChatB from "../../components/WeChatB/WeChatB.vue"

Vue.use(VueResource);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#WeChatB',
  template: '<App/>',
  components: { App }
})
