<template>
  <div class="header" id="header">
    <div class="nav">
      <div class="nav_left">
        <a href="index.html"  class="nav_CC">
        </a><i class="vertical"></i><a href="http://www.100tal.com/" target="_blank" class="nav_TAL"></a>
      </div>
      <div class="nav_right">
        <ul class="navR_Font clear">
          <li><a href="#header">首页</a></li>
          <li><a href="#server">服务</a></li>
          <li><a href="#technology_Body">技术支持</a></li>
          <li><a href="#team">团队</a></li>
          <li><a href="#Myclient">客户</a></li>
          <li><a href="#about">关于我们</a></li>
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
    <div class="nav_Banner">
      <div class="nav_title">
        <p class="nav_title1">做中国更有品质的外教服务</p>
        <p class="nav_title2">让客户招聘外教便捷更有效</p>
      </div>
      <!-- <div class="button draw"><a class="play" href="/module/signup.html#/Land">我要外教</a></div> -->
      <a class="button draw" href="/module/signup.html#/Land">我要外教</a>
      <div class="Parent" @click="CLICK">
        <video class="video" id="video1" >
          </video>
          <i class="suspend"  v-show="SHOWBG"></i>
      </div>
      </div>
    </div>
    <!-- <span class="Bg"></span> -->

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

      ~function () {
    var reg1 = /AppleWebKit.*Mobile/i,
        reg2 = /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/;

    //->条件成立说明当前页面是运行在移动端设备中的
    if (reg1.test(navigator.userAgent) || reg2.test(navigator.userAgent)) {
        //->如果当前页面的URL是PC端项目的地址:我们需要跳转到移动端项目
        if (window.location.href.indexOf("http://business.careerchina.com/module/index.html") >= 0 || window.location.href.indexOf("http://business.careerchina.com") >= 0) {
              window.location.href="http://business.careerchina.com/module/terminal.html";
        }
        return;
    }
    //->反之则说明当前的页面是运行在PC端设备中的,如果访问的URL地址是移动端的,我们需要跳转到PC端地址上
    if (window.location.href.indexOf("http://business.careerchina.com/module/terminal.html") >= 0) {
        window.location.href="http://business.careerchina.com/module/index.html";
    }
 }();
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
    },
    CLICK (){
      if(video1.paused){
          video1.play();
          $('#video1').attr('controls','controls')
          $('.suspend').css('display','none')
        }else{
          $('.suspend').css('display','block')
          video1.pause();
        }

    },

  },
  data(){
    return {
      formShow:false,
      successShow:false,
      LoSuccess:true,
      ulShow:false,
      userNum:'',
      SHOWBG:true
    }
  }
 }
</script>

<style lang="stylus" res="stylesheet/stylus">
  .header
    position:relative
    min-width:1200px
    height:100%
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
          margin-top:15px
          margin-left:40px
          width:140px
          height:30px
          background:url("../../../ilb/image/cclogo-01.png") no-repeat
          background-size:100% 100%
        .vertical
          display:inline-block
          margin-left:18px
          width:2px
          height:30px
          background:#4583c8
        .nav_TAL
          display:inline-block
          width:126px
          height:30px
          margin-left:18px
          background:url("../../../ilb/image/好未来logo-01.png") no-repeat
          background-size:100% 100%
      .nav_right
        height: 60px;
        line-height: 60px
        float:left
        margin-left: 11%
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
        right:0
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
                display:block
                width:100%
                heught:100%
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
      margin:0px auto 40px
      padding-top: 55px
      width: 100%
      text-align: center
      background:url('../../../ilb/image/bg-home-top.jpg') no-repeat
      background-size:100% 100%
      height:645px
      .nav_title
        .nav_title1
          text-align:center
          font-size:40px
          font-weight:600
          color:#fff
        .nav_title2
          margin-top:16px
          font-size:20px
          color:#dbe5f6
      .button
        // position:relative
        // z-index:
        line-height:15px
        display:block
        width:240px
        height:50px
        margin:30px auto 35px
        // border:1px solid #eee
        border-radius:4px
        cursor: pointer
        // box-shadow: 0 25px 70px rgba(0,0,0,0.3)
        font-size:18px
        background: none
        border: 0
        box-sizing: border-box
        box-shadow: inset 0 0 0 2px #fff
        color: #fff
        font-weight: 700
        // margin: 1em
        padding: 1em 2em
        text-align: center
        text-transform: capitalize
        position: relative
        vertical-align: middle
        // .play
        //   display:inline-block
        //   color:#fff
        //   text-align:center
        //   width:100%
        //   height:40px
        //   line-height:40px
      .button::before, .button::after
          box-sizing: border-box
          content: ''
          position: absolute
          width: 100%
          height: 100%
      .draw
          -webkit-transition: color 0.25s
          transition: color 0.25s
      .draw::before, .draw::after
          border: 3px solid transparent;
          width: 0;
          height: 0;
      .draw::before
          top: 0;
          left: 0;
      .draw::after
          bottom: 0
          right: 0
      .draw:hover
          color: #fff;
      .draw:hover::before, .draw:hover::after
          width: 100%;
          height: 100%;
      .draw:hover::before
          border-top-color: #fff
          border-right-color: #fff
          -webkit-transition: width 0.25s ease-out, height 0.25s ease-out 0.25s
          transition: width 0.25s ease-out, height 0.25s ease-out 0.25s
      .draw:hover::after
              border-bottom-color: #fff;
              border-left-color: #fff;
              -webkit-transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
              transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
      .Parent
        position:relative
        width:705px
        margin:auto
        .video
              display:block
              position:relative
              margin:auto
              width:100%
              height:400px
              background:url('../../../ilb/image/bg-home-video.jpg') no-repeat
              // background-size:100% 100%
              box-shadow: 8px 10px 30px rgba(0,0,0,.4)
        .suspend
                display:inline-block
                position:absolute
                top:50%
                left:50%
                margin-top:-40px
                margin-left:-40px
                cursor:pointer
                width:80px
                height:80px
                background:url('../../../ilb/image/button-home-S.png') no-repeat
                background-size:100% 100%
      // .button:hover
      //   font-size:20px
      //   font-weight:600
  </style>
