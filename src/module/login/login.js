import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import account from '../../components/login/account/account'
import data from '../../components/login/data/data'
import demand from '../../components/login/demand/demand'
import Order from '../../components/login/Order/Order'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(VueResource);
Vue.use(VueRouter);

let app = Vue.extend(App);

Vue.http.interceptors.push((request, next) => {
　　next((response) => {//在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
       if(response.body.error_code == 103){
         $.cookie('B-access_token',null);
         $.cookie('loginSuccess',null)
         alert('登录超时，请重新登录');
         location.href='index.html'
       }
　　　　return response;
  });
});

const router = new VueRouter({
  linkActiveClass:'active',
  routes:[
    {
       path: '/account',
       component: account
     },
     {
       name:'11',
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
