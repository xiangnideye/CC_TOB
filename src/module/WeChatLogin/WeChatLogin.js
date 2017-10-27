import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import WeChatRe from "../../components/WeChatRe/WeChatRe.vue"

Vue.use(VueResource);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#WeChatRe',
  template: '<App/>',
  components: { App }
})
