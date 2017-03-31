<template>
  <div class="account_main">
    <div class="A_information">
      <div class="title">
        <i class="account_Pic"></i>
        <span class="account_Font">账户信息</span>
      </div>
      <div class="content">
        <img src="../../../ilb/image/login/big.png" alt="" class="header_Pic">
        <div class="Login">
          <div class="Login1">
            <span class="Login_A">登陆账号:</span>
            <span class="userName">{{Data.phoneNumber}}</span>
          </div>
          <div class="Login2">
            <span class="Registration_T">注册时间:</span>
            <span class="userTime">{{Data.createTime}}</span>
          </div>

        </div>
      </div>
    </div>
    <div class="ChangePhone">
      <div class="Phone">
        <i class="phone_p"></i>
        <span class="phone_user">{{Data.phoneNumber}}</span>
      </div>
      <div class="changeP" @click="goIPhone">更换手机</div>
    </div>
    <div class="ChangePass">
      <div class="Pass">
        <i class="Pass_p"></i>
        <span class="Pass_user">********</span>
      </div>
      <div class="change_pass" @click="goReser">更换密码</div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import '../../../common/js/jquery.cookie.js';

export default {
  props:{
    Data:{
      type:Object
    }
  },
  created (){
    var loginSuccess = $.cookie('loginSuccess');
    console.log(loginSuccess)
    if(loginSuccess === 'false'){
        console.log(loginSuccess)
        location.href = '/module/index.html'
    }
  },
  methods :{
    goReser (){
      location.href="/module/Reset.html";
    },
    goIPhone (){
      location.href = '/module/ResetPhoto.html'
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.account_main
  // position:absolute
  // top:66px
  // left:299px
  float:right
  margin-top:66px
  background:#fff
  border-radius:4px
  width:1000px
  .A_information
    box-shadow: 0px 1px 3px rgba(0,0,0,.4)
    .title
      width:100%
      height:46px
      background:#ebebeb
      font-size:18px
      color:#898989
      border-top-left-radius: 4px
      border-top-right-radius: 4px
      .account_Pic
        display:inline-block
        margin:11px 8px 0px 19px
        width:25px
        height:25px
        background:url("../../../ilb/image/login/icon.png") no-repeat
        background-position:-93px -23px
      .account_Font
        vertical-align: 5px
    .content
      width:100%
      height:254px
      .header_Pic
        float:left
        margin:37px 24px 97px 51px
        width:120px
        height:120px
        border-radius:50%
      .Login
        float:left
        margin-top:74px
        width:300px
        .Login_A,.Registration_T
          font-size:16px
          color:#a1a1a1
        .userName,.userTime
          font-size:16px
          color:#000
          margin-left:20px
        .Login1
          margin-bottom:19px
  .ChangePhone,.ChangePass
    margin-top:10px
    box-shadow: 0px 1px 3px rgba(0,0,0,.4)
    width:1000px
    height:125px
    border-radius:4px
    background:#fff
    .Phone,.Pass
      display:inline-block
      .phone_p
        display:inline-block
        width:25px
        height:40px
        margin:44px 28px 43px 51px
        background:url("../../../ilb/image/login/icon.png") no-repeat
        background-position:-93px -77px
      .phone_user,.Pass_user
        font-size:14px
        color:#4b4b4b
        vertical-align: 57px
    .changeP,.change_pass
      float:right
      margin:49px 43px 47px 0
      width:117px
      height:29px
      text-align:center
      line-height:29px
      background:#0ed666
      border-radius:14.5px
      cursor:pointer
      color:#fff
      font-size:14px
      box-shadow:3px 4px 7px rgba(0,0,0,.3)
  .ChangePass
    .Pass_p
      display:inline-block
      width:30px
      height:40px
      margin:44px 28px 43px 51px
      background:url("../../../ilb/image/login/icon.png") no-repeat
      background-position:-93px -135px
</style>
