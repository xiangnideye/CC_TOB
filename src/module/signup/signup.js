import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Land from "../../components/signup/Land/Land"
import register from "../../components/signup/register/register"
import {Input} from 'element-ui'
Vue.use(Input)

Vue.use(VueResource);
Vue.use(VueRouter);

let app = Vue.extend(App);
Vue.http.interceptors.push((request, next) => {


  // Vue.$http.get(localhost+'/cc/bg/user/accesstoken').then((response) =>{
  //   if(response.body.error_code == 200){
  //     console.log(response.body)//此处this为请求所在页面的Vue实例
  //     $.cookie('B-access_token',response.body.resultObj.access_token)
  //   }
  // });

    console.log(request)//此处this为请求所在页面的Vue实例
　　next((response) => {//在响应之后传给then之前对response进行修改和逻辑判断。对于token时候已过期的判断，就添加在此处，页面中任何一次http请求都会先调用此处方法
       if(response.body.error_code == 103){
         $.cookie('B-access_token',null);
         $.cookie('loginSuccess',null);
         location.reload();
        // location.href='signup.html#/Land?r='+Math.random();
        //  alert('登录超时，请重新登录');
        //  location.href='index.html'
       }
　　　　return response;
  });
});

const router = new VueRouter({
  linkActiveClass:'active',
  routes:[
    {
       path: '/Land',
       component: Land
     },
     {
       path: '/register',
       component: register
     }
  ]
});

const appRouter = new Vue({
router:router,
  render:h=>h(App)
}).$mount('#signup');
