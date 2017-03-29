import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Land from "../../components/signup/Land/Land"
import register from "../../components/signup/register/register"

Vue.use(VueResource);
Vue.use(VueRouter);

let app = Vue.extend(App);


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

// router.push('/Land')
