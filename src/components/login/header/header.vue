<template>
  <div class="nav">
    <div class="title clear">
      <a href="index.html" class="title_C"></a>
    </div>
    <!-- <div class="information clear">
      <div class="Headportrait clear"></div>
      <div class="userName">{{Data.phoneNumber}}</div>
    </div> -->
    <ul class="Success_login">
      <li class="Header">
        <i class="hea_p"></i>
        <span class="_data">{{Data.phoneNumber}}</span>
      </li>
      <li class="main">
        <ul class="main_content">
          <li class="login1 li">
            <a href="/module/login.html#/account">账户信息</a>
          </li>
          <li class="login2 li">
            <a href="/module/login.html#/data">资料管理</a>
          </li>
          <!-- <li class="login3 li">
            <a href="/module/login.html#/demand">需求管理</a>
          </li>
          <li class="login4 li">
            <a href="/module/login.html#/Order">订单管理</a>
          </li> -->
          <li class="login5 li" @click="Sign_Up">退出</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery';
import '../../../common/js/jquery.cookie';
export default {
  props:{
      Data:{
        type:Object
      }
  },
  created(){

  },
  methods:{
    Sign_Up (){
        $.cookie('loginSuccess',"false");
        $.cookie('userId',"");
        $.cookie('userNum',"");
        location.href="/module/index.html";
    },
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.nav
  position:relative
  z-index:10
  width:100%
  height:60px
  box-shadow:0px 0px 4px #000
  .title
    float:left
    height:100%
    .title_C
      display:inline-block
      height:60px
      line-height:60px
      margin-left:40px
      margin-top:15px
      width:140px
      height:30px
      background:url("../../../ilb/image/cc logo-01.png") no-repeat
      background-size:100% 100%
  .Success_login
    display:block
    position:absolute
    top:1px
    right:27px
    width:196px
    background#fff
    .Header
      width:196px
      .hea_p
        margin:14px 10px 10px 23px
        display:inline-block
        width:32px
        height:32px
        cursor:pointer
        background:url("../../../ilb/image/login/small.png") no-repeat
      ._data
          vertical-align:17px
          font-size:16px
          color:#0ed666
          font-weight:600
    .main
        display:none
        border-top: 1px solid #eee
        .main_content
          .li
            height:40px
            line-height:40px
            text-align:center
            font-size:16px
            cursor:pointer
            a
              color:#838383
              display:inline-block
              width:100%
              height:100%
          .login5
            border-top:1px solid #eee
            color:#c5c5c5
  .Success_login:hover .main{
          display:block
      }
  .li:hover{
        background:#3183e7
        color:#fff !important
      }
  .li:hover a{
        color:#fff !important
      }
</style>
