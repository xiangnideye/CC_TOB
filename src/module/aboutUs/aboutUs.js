import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#aboutUs',
  template: '<App/>',
  components: { App }
})
