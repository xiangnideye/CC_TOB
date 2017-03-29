<template>
  <div class="header" id="header">
    <div class="nav">
      <div class="nav_left">
        <a href="http://www.careerchina.com/index" target="_blank" class="nav_CC"></a><i class="vertical"></i><a href="http://www.100tal.com/" target="_blank" class="nav_TAL"></a>
      </div>
      <div class="nav_right">
        <ul class="navR_Font clear">
          <li><a href="signup.html">首页</a></li>
          <li><a href="#server">服务</a></li>
          <li><a href="#technology_Body">技术支持</a></li>
          <li><a href="#team">团队</a></li>
          <li><a href="#Myclient">客户</a></li>
          <li><a href="#about">关于我们</a></li>
          <!-- <li><a href="login.html#/account">点击登陆</a></li> -->
        </ul>
      </div>
      <div class="Login" v-show="LoSuccess">
        <span class="Lo" @click="LO">登录</span>
        <span class="Re" @click="RE">注册</span>
      </div>
      <ul class="Success_login" v-show="ulShow">
        <li class="Header">
          <i class="hea_p"></i>
          <span class="_data">{{this.userNum}}</span>
        </li>
        <li class="main">
          <ul class="main_content">
            <li class="login1 li">
              <a href="/module/login.html#/account">账户信息</a>
            </li>
            <li class="login2 li">
              <a href="/module/login.html#/data">资料管理</a>
            </li>
            <li class="login3 li">
              <a href="/module/login.html#/demand">需求管理</a>
            </li>
            <li class="login4 li">
              <a href="/module/login.html#/Order">订单管理</a>
            </li>
            <li class="login5 li" @click="Sign_Up">退出</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="nav_Banner">
      <div class="nav_title">
        <p class="nav_title1">中国最好的外教服务</p>
        <p class="nav_title2">致力于打通机构与外教的沟通合作</p>
      </div>
       <div class="button"><a class="play" href="/module/signup.html#/Land" target="_block">客户申请</a></div>
    </div>
    <span class="Bg"></span>
  </div>
</template>

<script type="ecmascript-6">
import $ from 'jquery';
import '../../../common/js/jquery.cookie';
export default {
  created(){
      var userNum = $.cookie("userNum")
      var loginSuccess = $.cookie('loginSuccess');
      if(loginSuccess == "true"){
          this.userNum = userNum;
          this.LoSuccess = false;
          this.ulShow = true;
      }else if(loginSuccess == "false"){
        this.LoSuccess = true;
        this.ulShow = false;
      }
  },
  methods:{
    showForm() {
      this.formShow = true
    },
    hideForm() {
      this.formShow = false
    },
    successHide() {
      this.successShow = false
    },
    Sign_Up (){
        this. LoSuccess=true;
        this.ulShow=false;
        $.cookie('loginSuccess',"false");
        $.cookie('userId',"");
        $.cookie('userNum',"");
    },
    LO (){
        location.href = '/module/signup.html#/Land'
    },
    RE (){
        location.href = '/module/signup.html#/register'
    }
  },
  data(){
    return {
      formShow:false,
      successShow:false,
      LoSuccess:true,
      ulShow:false,
      userNum:''
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .header
    position:relative
    width:100%
    height:560px
    background:#2773c1
    .Bg
      position: absolute
      bottom: 0
      left: 50%
      z-index:0
      margin-left: -430px
      display: inline-block
      width: 860px
      height: 340px
      background:url("../../../ilb/image/yinying.png") no-repeat
    .nav
      margin:0 auto
      min-width:1200px
      height:60px
      background:#fff
      .nav_left
        float:left
        width:352px
        height:60px
        .nav_CC
          display:inline-block
          margin-top:13px
          margin-left:40px
          width:160px
          height:30px
          background:url("../../../ilb/image/icon.png") no-repeat
          background-position:-70px -205px
        .vertical
          display:inline-block
          margin-left:18px
          width:2px
          height:30px
          background:#4583c8
        .nav_TAL
          display:inline-block
          width:114px
          height:30px
          margin-left:18px
          background:url("../../../ilb/image/icon.png") no-repeat
          background-position:-247px -202px
      .nav_right
        height: 60px;
        line-height: 60px
        position: absolute
        left: 50%
        margin-left: -278px
        .navR_Font li
          float:left
          margin-right:50px
          font-size:16px
          a
            color:#949494
      .Login
          width:100px
          float: right
          height: 60px
          line-height: 60px
          .Lo,.Re
            cursor:pointer
            font-size:14px
            color:#949494
          .Re
            margin-left:10px
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
            .login5
                border-top:1px solid #eee
                color:#c5c5c5
      .Success_login:hover .main{
          display:block
      }
      .li:hover{
        background:#3183e7
      }
      .li:hover a{
        color:#fff !important
      }
    .nav_Banner
      margin:192px auto
      width:450px
      .nav_title
        .nav_title1
          text-align:center
          font-size:48px
          font-weight:600
          color:#fff
        .nav_title2
          margin-top:16px
          font-size:30px
          color:#dcdada
      .button
        position:relative
        z-index:10
        margin:45px auto
        width:130px
        height:36px
        background:#fff
        border-radius:4px
        cursor: pointer
        box-shadow: 0 25px 70px rgba(0,0,0,0.3)
        .play
          display:inline-block
          color:#2ba0f0
          text-align:center
          width:100%
          height:36px
          line-height:36px
</style>
