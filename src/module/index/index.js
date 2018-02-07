import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import $ from 'jquery';
import cookie from 'jquery.cookie';

Vue.use(ElementUI)
Vue.use(VueResource);

// Vue.http.interceptors.push((request, next) => {
// 　　next((response) => {
//        if(response.body.error_code == 103){
//          $.cookie('B-access_token',null);
//          $.cookie('loginSuccess',null)
//          //alert('登录超时，请重新登录');
//          location.href='index.html'
//        }
// 　　　　return response;
//   });
// });
~function () {
 var reg1 = /AppleWebKit.*Mobile/i,
     reg2 = /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/,
     location = window.location.href,
     online = "https://business.careerchina.com/module/index.html",
     onlineSecond = "https://business.careerchina.com",
     IndexHtml = "/module/index.html",
     testSecond = "devb.careerchina.com:8077",
     onlinePhone = "https://business.careerchina.com/module/M_index.html",
     testPhone = "/module/M_index.html";
    // 生产 线上
     if (reg1.test(navigator.userAgent) || reg2.test(navigator.userAgent)) {
         if (location.indexOf(online) >= 0 || location.indexOf(onlineSecond) >= 0) {
            window.location.href="https://business.careerchina.com/module/M_index.html";
         }
         return;
       }
       if (location.indexOf(onlinePhone) >= 0) {
           window.location.href="https://business.careerchina.com/module/index.html";
       }
    //本地 测试
     // if (reg1.test(navigator.userAgent) || reg2.test(navigator.userAgent)) {
     //   if (location.indexOf(IndexHtml) >= 0 || location.indexOf(testSecond)>= 0) {
     //      window.location.href="/module/M_index.html";
     //     }
     //      return;
     //  }
     // if (location.indexOf(testPhone) >= 0) {
     //    window.location.href="/module/index.html";
     //  }
  }();
/* eslint-disable no-new */
new Vue({
  el: '#index',
  template: '<App/>',
  components: { App }
})
