import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import account from '../../components/login/account/account'
import data from '../../components/login/data/data'
import demand from '../../components/login/demand/demand'
import Order from '../../components/login/Order/Order'

Vue.use(VueResource);
Vue.use(VueRouter);

let app = Vue.extend(App);

const router = new VueRouter({
  linkActiveClass:'active',
  routes:[
    {
       path: '/account',
       component: account
     },
     {
       path: '/data',
       component: data
     },
     {
       path: '/demand',
       component: demand
     },
     {
       path:'/Order',
       component:Order
     }
  ]
});

const appRouter = new Vue({
router:router,
  render:h=>h(App)
}).$mount('#login');
