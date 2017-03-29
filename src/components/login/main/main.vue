<template>
<div class="main_" id="main">
  <div class="menu clear">
    <ul class="menu_Router" >
      <li class="goLeft" >
          <i class="Left"></i>
      </li>
      <li class="account">
        <router-link to="/account" ><i></i>账户信息</router-link>
      </li>
      <li class="data">
        <router-link to="/data"><i></i>资料信息</router-link>
      </li>
      <li class="demand">
        <router-link to="/demand" ><i></i>需求信息</router-link>
      </li>
      <li class="Order">
          <router-link to="/Order" ><i></i>订单管理</router-link>
      </li>
    </ul>
    <router-view  :Data="Data"></router-view>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import $ from 'jquery';
import '../../../common/js/jquery.cookie.js';
export default {
  props:{
      Data:{
        type:Object
      }
  },
  created (){

  },
  methods:{

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
  min-height: 890px
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
      li
        cursor:pointer
        line-height:59px
        text-align:center
        color:#fff
      a
        display:block
        color:#fff
        width:200px
        height:59px
        font-size:18px
        &.active
          background:#262626
      .account
        i
          display:inline-block
          vertical-align: -12px
          width:30px
          height:30px
          background:url("../../../ilb/image/login/login_icon.png") no-repeat
          background-position:-24px -127px
      .data
        i
          display:inline-block
          vertical-align: -12px
          width:30px
          height:30px
          background:url("../../../ilb/image/login/login_icon.png") no-repeat
          background-position:-74px -128px
      .demand
        i
          display:inline-block
          vertical-align: -12px
          width:30px
          height:30px
          background:url("../../../ilb/image/login/login_icon.png") no-repeat
          background-position:-124px -127px
      .Order
        i
          display:inline-block
          vertical-align: -12px
          width:30px
          height:30px
          background:url("../../../ilb/image/login/login_icon.png") no-repeat
          background-position:-175px -127px
      .goLeft
        display:inline-block
        width:200px
        height:70px
        cursor:pointer
        .Left
          display:inline-block
          float:right
          margin:5px 8px 0 0
          width:20px
          height:10px
          background:url("../../../ilb/image/login/left.png") no-repeat
</style>
