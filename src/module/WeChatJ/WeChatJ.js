import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import WeChatJ from "../../components/WeChatJ/WeChatJ.vue"

Vue.use(VueResource);
Vue.use(VueRouter);

/* eslint-disable no-new */
new Vue({
  el: '#WeChatJ',
  template: '<App/>',
  components: { App }
})
