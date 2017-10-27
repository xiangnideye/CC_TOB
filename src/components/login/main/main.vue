<template>
<div class="main_" id="main">
  <div class="menu clear">
    <ul class="menu_Router" >
      <li class="goLeft li" ></li>
      <li class="account li">
        <router-link to="/account" >
          <i class="main_i"></i>
          <span class="router-font">我的账户</span>
          <i class="main_i-2 account-hover">
            <div class="main-div account-hover-Details">
              <span class="main-left">
                <span class="main-right">
                  管理登录账号（手机号），登录密码等。
                </span>
              </span>
            </div>
          </i>
        </router-link>
      </li>
      <li class="data li">
        <router-link to="/data">
          <i class="main_i"></i>
          <span class="router-font">机构信息</span>
          <i class="main_i-2 data-hover">
            <div class="main-div data-hover-Details">
              <span class="main-left">
                <span class="main-right data-right-top">
                  完善关于您的企业信息，我们将为您提供更细致化的服务。
                </span>
              </span>
            </div>
          </i>
        </router-link>
      </li>
      <li class="demand li">
        <router-link to="/demand" >
          <i class="main_i"></i>
          <span class="router-font">岗位需求</span>
          <i class="main_i-2 demand-hover">
            <div class="main-div demand-hover-Details">
              <span class="main-left">
                <span class="main-right">
                  提交待招聘的岗位要求和人才需求计划。
                </span>
              </span>
            </div>
          </i>
        </router-link>
      </li>
      <li class="Order li">
        <router-link to="/Order" >
          <i class="main_i"></i>
          <span class="router-font">订单管理</span>
          <i class="main_i-2 Order-hover">
            <div class="main-div Order-hover-Details">
              <span class="main-left">
                <span class="main-right data-right-top">
                  管理已确定需求的订单，查看最新为您推荐的外事人才。
                </span>
              </span>
            </div>
          </i>
          <span class="orderNum" v-show="orderFeedbackTotalNumHide">{{this.Data}}</span>
          </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import localhost from '../../../common/js/public.js';
import Vue from 'vue'
import VueRouter from 'vue-router'
const access_token = $.cookie('B-access_token');
const BcustomerId =  $.cookie('B-customerId');
Vue.use(VueRouter);
export default {
  data (){
    return {
      orderFeedbackTotalNum:'',
      orderFeedbackTotalNumHide:false,
      Data:'',
    }
  },
  // props:{
  //     Data:{
  //       type:Number
  //     }
  // },
  created (){
    this.$http.get(localhost+'/cc/order/feedback/number?access_token='+access_token+'&customerId='+BcustomerId).then((response)=>{
      if(response.body.error_code == 200){
        this.Data = response.body.resultObj;
        console.log(this.Data)
        if(this.Data == 0){
          this.orderFeedbackTotalNumHide = false;
        }else {
          this.orderFeedbackTotalNumHide = true;
        }
      }
    });
  },
  methods:{

  },
  mounted(){

  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
body,html
  height:100%
.main_
  position:relative
  width:100%
  background: #fbfbfb
  min-height:1000px
  .menu
    width:1200px
    margin:0 auto
    .menu_Router
      width:200px
      height:100%
      position:absolute
      top: 0px
      left: 0
      background:#373737
      .li
        cursor:pointer
        // line-height:59px
        // text-align:center
        color:#fff
      a
        display:block
        color:#fff
        width:200px
        height:59px
        &.active
          background:#262626
      .main_i-2
        position:relative
        width:20px
        height:20px
        float:left
        background:url('../../../ilb/image/login/icon-b-1.png') no-repeat
        background-position:-67px -17px
        vertical-align:-4px
        margin:20px 10px
        .main-div
          position: absolute
          top: 5px
          left: 25px
          z-inde:100
          display:none
          .main-left
            width: 0
            height: 0
            border-top: 6px solid transparent
            border-right: 6px solid #525252
            border-left: 6px solid transparent
            border-bottom: 6px solid transparent
            float:left
            position:relative
            z-index:150
            .main-right
              position:absolute
              top:-30px
              left:6px
              width:260px
              min-height:20px
              background:#525252
              float:left
              padding:20px
              color:#b5b5b5
              z-index:100
              box-shadow: 2px 0px 10px 0px rgba(34,34,34,.36)
              font-style:normal
              font-size:14px
      .data-right-top
        top:-40px !important
      .account-hover:hover .account-hover-Details
        display:block
      .data-hover:hover .data-hover-Details
        display:block
      .demand-hover:hover .demand-hover-Details
        display:block
      .Order-hover:hover .Order-hover-Details
        display:block
      .router-font
        font-size:18px
        float:left
        margin-top: 17px
      .account
        .main_i
          float:left
          vertical-align: -2px
          width:18px
          height:18px
          background:url("../../../ilb/image/login/icon-b-1.png") no-repeat
          background-position:-19px -17px
          margin:20px 10px 0 20px
      .data
        .main_i
          float:left
          vertical-align: -2px
          width:18px
          height:18px
          background:url("../../../ilb/image/login/icon-b-1.png") no-repeat
          background-position:-19px -77px
          margin:20px 10px 0 20px
      .demand
        .main_i
          float:left
          vertical-align: -2px
          width:18px
          height:18px
          background:url("../../../ilb/image/login/icon-b-1.png") no-repeat
          background-position:-19px -136px
          margin:20px 10px 0 20px
      .Order
        position:relative
        .main_i
          float:left
          vertical-align: -2px
          width:18px
          height:18px
          background:url("../../../ilb/image/login/icon-b-1.png") no-repeat
          background-position:-19px -196px
          margin:20px 10px 0 20px
        .orderNum
          display:inline-block
          position:absolute
          right:15px
          top:24px
          background:#da523f
          color:#fff
          min-width:14px
          height:20px
          text-align:center
          line-height:20px
          border-radius:10px
          font-size:14px
          padding:0 3px
      .goLeft
        display:inline-block
        width:200px
        height:70px
        cursor:pointer
</style>
