<!--导航-->
<template>
  <nav class="nav" :class="{BgOpacity:isActive}">
    <div class="nav-logo clear" v-if="scrollFlag">
      <h1 class="nav-logo-Bcc">
        <a href="http://business.careerchina.com" class="nav-logo-aCc">
          <img src="../../common/img/icon-logo-white-1@2x.png" alt="" class="nav-logo-imgCc">
        </a>
      </h1>
      <span class="nav-logo-line"></span>
      <h2 class="nav-logo-Tal">
        <a href="http://www.100tal.com/" target="_blank">
          <img src="../../common/img/icon-logo-white-2@2x.png" alt="" class="nav-logo-imgTal">
        </a>
      </h2>
    </div>
    <div class="nav-logo clear" v-else>
      <h1 class="nav-logo-Bcc">
        <a href="http://business.careerchina.com" class="nav-logo-aCc">
          <img src="../../common/img/icon-logo-colour-1@2x.png" alt="" class="nav-logo-imgCc">
        </a>
      </h1>
      <span class="nav-logo-line"></span>
      <h2 class="nav-logo-Tal">
        <a href="http://www.100tal.com/" target="_blank">
          <img src="../../common/img/icon-logo-colour-2@2x.png" alt="" class="nav-logo-imgTal">
        </a>
      </h2>
    </div>
    <ul class="nav-menu" :class="{navMenu:isNavMenu}">
      <li v-for="(aLi,index) in liArr" class="nav-menu-li" @click="getGoToHtml(aLi,index)" :class="{isActiveLi:aLi.isActiveLi}"><a :href="aLi.href">{{aLi.content}}</a></li>
    </ul>
    <div class="nav-login clear" v-show="Successlogin">
      <a class="nav-login-span nav-login-log" href="/module/signup.html#/Land" :class="{navloginlog:isNavLogin}">登录</a>
      <a class="nav-login-span nav-login-register" href="/module/signup.html#/register" :class="{navloginReg:isNavLoginReg}">注册</a>
    </div>
    <ul class="Success_login" v-show="ulShow">
      <li class="Header">
        <span class="_data" :class="{Color:isColor}">{{this.userNum}}</span>
        <!-- <span class="Triangle"></span> -->
      </li>
      <li class="main">
        <ul class="main_content">
          <li class="login1 li">
            <a href="/module/login.html#/account">我的账户</a>
          </li>
          <li class="login2 li">
            <a href="/module/login.html#/data">机构信息</a>
          </li>
          <li class="login3 li">
            <a href="/module/login.html#/demand">岗位需求</a>
          </li>
          <li class="login4 li">
            <a href="/module/login.html#/Order">订单管理</a>
          </li>
          <li class="login5 li" @click="Sign_Up">退出</li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import $ from 'jquery';
import cookie from 'jquery.cookie';
import localhost from '../../common/js/public.js'
var URL = window.location.href,
    urlFirst = /index/,
    urlSecond = /RecruitmentProcess/,
    urlThired = /TechnicalSupport/,
    urlFourth = /TalentCommunity/,
    urlFifth = /aboutUs/;

export default {
  created(){
    var userNum = $.cookie("userNum")
    var loginSuccess = $.cookie('loginSuccess');
    if(loginSuccess == "true"){
      this.userNum = userNum;
      this.Successlogin = false;
      this.ulShow = true;
    }else if(loginSuccess == "false"){
      this.Successlogin = true;
      this.ulShow = false;
    };
    //判断当前页面是那个页面
    if(urlFirst.test(URL)){
      $.cookie('el',0);
    }else if (urlSecond.test(URL)) {
      $.cookie('el',1);
    }else if (urlThired.test(URL)) {
      $.cookie('el',2);
      this.isActive = true;
      this.isNavMenu = true;
      this.scrollFlag = false;
      this.isNavLogin = true;
      this.isNavLoginReg = true;
    }else if (urlFourth.test(URL)) {
      $.cookie('el',3);
    }else if (urlFifth.test(URL)) {
      $.cookie('el',4);
    }else {
      $.cookie('el',0);
    };
    this.liArr.map((x,i) =>{
      if($.cookie('el') == i){
        x.isActiveLi = true;
      }
    });
    if($.cookie('B-access_token') === undefined || $.cookie('B-access_token') == 'null'){
      this.$http.get(localhost+'/cc/bg/user/accesstoken?client=B').then((response) =>{
        if(response.body.error_code == 200){
          $.cookie('B-access_token',response.body.resultObj.access_token)
        }
      });
    }
  },
  data (){
    return {
      Successlogin:true,
      isColor:false,
      ulShow:false,
      isActive:false,
      scrollFlag:true,
      isNavMenu:false,
      isNavlogin:false,
      isNavLogin:false,
      isNavLoginReg:false,
      liArr:[
        {
         content:'首页',
         isActiveLi:false,
         href:'index.html'
        },
        {
          content:'招聘流程',
          isActiveLi:false,
          href:'RecruitmentProcess.html'
        },
        {
          content:'技术支持',
          isActiveLi:false,
          href:'TechnicalSupport.html'
        },
        {
          content:'人才社区',
          isActiveLi:false,
          href:'TalentCommunity.html'
        },
        {
          content:'关于我们',
          isActiveLi:false,
          href:'aboutUs.html'
        },
      ]
    }
  },
  mounted(){
    // if(!urlThired.test(URL)){
    //   window.addEventListener('scroll', this.setScroll)
    // }
    window.addEventListener('scroll', this.setScroll)
  },
  methods:{
    setScroll(){
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(urlThired.test(URL)){

        this.isActive = true;
        this.scrollFlag = false;
        this.isNavMenu = true;
        this.isNavLogin = true;
        this.isNavLoginReg = true;
        this.isColor = true;
      }else {

        if(scrollTop !== 0){

          this.isActive = true;
          this.scrollFlag = false;
          this.isNavMenu = true;
          this.isNavLogin = true;
          this.isNavLoginReg = true;
          this.isColor = true;
        }else {

          this.isActive = false;
          this.scrollFlag = true;
          this.isNavMenu = false;
          this.isNavLogin = false;
          this.isNavLoginReg = false;
          this.isColor = false;
        }
      }
    },
    getGoToHtml(index,el){

    },
    Sign_Up (){
        this.Successlogin=true;
        this.ulShow=false;
        $.cookie('loginSuccess',"false");
        $.cookie('userId',"");
        $.cookie('userNum',"");
        // $.cookie('B-access_token',null);
    },
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  $font-weight1 = 100;
  $font-weight2 = 200;
  $font-weight3 = 300;
  $font-weight4 = 400;
  .nav
    position:fixed
    top:0
    z-index:400
    display:flex
    display:-webkit-flex
    min-width:1200px
    width:100%
    height:70px
    background:#000
    transition: all .5s
    -webkit-transition: all .5s
    background: transparent
    .nav-logo
      justify-content: flex-start
      -webkit-box-pack: start
      margin-left:40px
      height:70px
      .nav-logo-Bcc
        float:left
        margin-top:21px
        width:120px
        height:24px
        .nav-logo-aCc
          .nav-logo-imgCc
            width:100%
            height:100%
      .nav-logo-Tal
        float:left
        margin-top:21px
        width:120px
        height:24px
        .nav-logo-imgTal
          width:120px
          height:24px
      .nav-logo-line
        float:left
        margin:25px 20px
        width:1px
        height:20px
        opacity: 0.6
        background: #FFFFFF
    .nav-menu
      justify-content: flex-center
      -webkit-box-pack: center
      margin:0 auto
      height:70px
      line-height:70px
      color: #fff
      .nav-menu-li
        float:left
        text-align:center
        font-weight:300
        cursor:pointer
        padding:0 29px
        height:70px
        font-size: 16px
        a
          color:#fff
          display:block
      .isActiveLi
        border-bottom:3px solid rgba(225,225,225,.2)
    .navMenu
      .nav-menu-li
        a
          display:block
          color: #424953
          height:70px
      .isActiveLi
        border-bottom:3px solid rgba(32,97,255,.2)
        a
         display:block
         color: #2061FF
         height:70px
    .nav-login
      -webkit-box-pack: end
      -ms-flex-pack: end
      justify-content: flex-end
      margin:17px 40px 17px 0
     .nav-login-span
      float:left
      width:90px
      height:36px
      cursor:pointer
      border: 1px solid rgba(255,255,255,.4)
      font-size: 16px
      color: #FFFFFF
      text-align:center
      line-height:36px
      font-weight:$font-weight2
     .navloginlog
       color: #424953;
       border:1px solid rgba(66,73,83,.4)
     .nav-login-register
       background:rgba(255,255,255,.2)
       border:none
     .navloginReg
       background: #2061FF
       border:none
     .nav-login-log
      margin-right:20px
    .Success_login
      display:block
      position:absolute
      right:0
      width:196px
      line-height: 70px
      text-align: center
      .Header
        width:196px
        height:70px
        .hea_p
           margin:14px 10px 10px 23px
           display:inline-block
           width:32px
           height:32px
           cursor:pointer
           // background:url("../../ilb/image/login/small.png") no-repeat
        .Triangle
           display:block
           display:none
           margin:-15px auto 0
           width: 0
           height: 0
           border-left: 5px solid transparent
           border-right: 5px solid transparent
           border-top: 10px solid red
        ._data
          vertical-align:17px
          font-size:16px
          color:#fff
          font-weight:200
          display:block
        .Color
          color:#000
      .main
        display:none
        border-top: 1px solid #eee
        .main_content
          background:#fff
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
    .Success_login:hover .main
        display:block
    .Success_login:hover .Triangle
        display:block
    .li:hover
      background:#3183e7
    .li:hover a
      color:#fff !important
  .BgOpacity
    opacity:1
    background:#fff
    color: #424953;
    transition: all 0s
    -webkit-transition: all .5s
    box-shadow:0 2px 6px 0 rgba(0,0,0,.04)
    .nav-logo-line
      background:rgba(59,61,69,.36) !important
</style>
