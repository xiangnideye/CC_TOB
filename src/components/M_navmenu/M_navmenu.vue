<!--导航-->
<template>
  <nav class="nav" :class="{BgOpacity:isActive}">
    <div class="nav-logo clear" v-if="scrollFlag">
      <h1 class="nav-logo-Bcc">
        <a href="http://business.careerchina.com" class="nav-logo-aCc">
          <img src="../../common/img/M_img/icon-logo-white-1@2x.png" alt="" class="nav-logo-imgCc">
        </a>
      </h1>
      <span class="nav-logo-line"></span>
      <h2 class="nav-logo-Tal">
        <a href="http://www.100tal.com/" target="_blank">
          <img src="../../common/img/M_img/icon-logo-white-2@2x.png" alt="" class="nav-logo-imgTal">
        </a>
      </h2>
    </div>
    <div class="nav-logo clear" v-else>
      <h1 class="nav-logo-Bcc">
        <a href="http://business.careerchina.com" class="nav-logo-aCc">
          <img src="../../common/img/M_img/m-icon-logo-colour-1@2x.png" alt="" class="nav-logo-imgCc">
        </a>
      </h1>
      <span class="nav-logo-line"></span>
      <h2 class="nav-logo-Tal">
        <a href="http://www.100tal.com/" target="_blank">
          <img src="../../common/img/M_img/m-icon-logo-colour-2@2x.png" alt="" class="nav-logo-imgTal">
        </a>
      </h2>
    </div>
    <div class="nav-right">
      <a class="nav-Login" :class="{'nav-Login1':Login1}" @click="goToLogin"></a>
      <span class="nav-menu" :class="{'nav-menu2':menu2}" @click="goToHtml"></span>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery';
import cookie from 'jquery.cookie';
import localhost from '../../common/js/public.js'
var URL = window.location.href,
    urlFirst = /M_index/,
    urlSecond = /M_Recruitment/,
    urlThired = /M_Technical/,
    urlFourth = /M_TalentCommunity/,
    urlFifth = /M_aboutUs/;

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
    if(urlThired.test(URL)) {
      this.isActive = true;
      this.isNavMenu = true;
      this.scrollFlag = false;
      this.isNavLogin = true;
      this.isNavLoginReg = true;
      this.Login1 = true;
      this.menu2 = true;
    }
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
      Login1:false,
      menu2:false,
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
        this.Login1 = true;
        this.menu2 = true;
      }else {
        if(scrollTop !== 0){
          this.isActive = true;
          this.scrollFlag = false;
          this.isNavMenu = true;
          this.isNavLogin = true;
          this.isNavLoginReg = true;
          this.isColor = true;
          this.Login1 = true;
          this.menu2 = true;
        }else {
          this.isActive = false;
          this.scrollFlag = true;
          this.isNavMenu = false;
          this.isNavLogin = false;
          this.isNavLoginReg = false;
          this.isColor = false;
          this.Login1 = false;
          this.menu2 = false;
        }
      }
    },
    goToHtml(){
      if(urlFirst.test(URL)){
        location.href='M_menu.html?page='+1
      }else if (urlSecond.test(URL)) {
        location.href='M_menu.html?page='+2
      }else if (urlThired.test(URL)) {
        location.href='M_menu.html?page='+3
      }else if (urlFourth.test(URL)) {
        location.href='M_menu.html?page='+4
      }else if (urlFifth.test(URL)) {
        location.href='M_menu.html?page='+5
      }
    },
    Sign_Up (){
        this.Successlogin=true;
        this.ulShow=false;
        $.cookie('loginSuccess',"false");
        $.cookie('userId',"");
        $.cookie('userNum',"");
        // $.cookie('B-access_token',null);
    },
    goToLogin (){
      location.href="/module/LoginM.html?state=0";
    }
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
    // display:flex
    // display:-webkit-flex
    width:375px
    height:44px
    background:#000
    transition: all .5s
    -webkit-transition: all .5s
    background: transparent
    .nav-logo
      // justify-content: flex-start
      // -webkit-box-pack: start
      margin-left:20px
      float:left
      width:191px
      height:44px
      .nav-logo-Bcc
        float:left
        margin-top:11px
        width:78px
        height:14px
        .nav-logo-aCc
          width:78px
          height:14px
          .nav-logo-imgCc
            width:78px
            height:14px
      .nav-logo-Tal
        float:left
        margin-top:15px
        width:65px
        height:15px
        .nav-logo-imgTal
          width:65px
          height:15px
      .nav-logo-line
        float:left
        margin:15px 14px 0
        width:1px
        height:16px
        opacity: 0.6
        background: #FFFFFF
    .nav-right
      float:right
      margin:15px 0px 0 0
      height:44px
      .nav-Login
        display:inline-block
        margin:0 29px 0 0
        width:19px
        height:19px
        background:url('../../common/img/M_img/m-icon-home-user-white@2x.png') no-repeat
        background-size: contain
        vertical-align: -3px
      .nav-menu
        display:inline-block
        margin:0 20px 0 0
        width:16px
        height:13px
        background:url('../../common/img/M_img/m-icon-home-navigation-white@2x.png') no-repeat
        background-size: contain
      .nav-Login1
        background:url('../../common/img/M_img/m-icon-home-user-gray@2x.png') no-repeat
        background-size: contain
      .nav-menu2
        background:url('../../common/img/M_img/m-icon-home-navigation-gray@2x.png') no-repeat
        background-size: contain
    // .nav-menu
    //   justify-content: flex-center
    //   -webkit-box-pack: center
    //   margin:0 auto
    //   height:70px
    //   line-height:70px
    //   color: #fff
    //   .nav-menu-li
    //     float:left
    //     text-align:center
    //     font-weight:300
    //     cursor:pointer
    //     padding:0 29px
    //     height:70px
    //     font-size: 16px
    //     a
    //       color:#fff
    //       display:block
    //   .isActiveLi
    //     border-bottom:3px solid rgba(225,225,225,.2)
    // .navMenu
    //   .nav-menu-li
    //     a
    //       display:block
    //       color: #424953
    //       height:70px
    //   .isActiveLi
    //     border-bottom:3px solid rgba(32,97,255,.2)
    //     a
    //      display:block
    //      color: #2061FF
    //      height:70px
    // .nav-login
    //   -webkit-box-pack: end
    //   -ms-flex-pack: end
    //   justify-content: flex-end
    //   margin:17px 40px 17px 0
    //  .nav-login-span
    //   float:left
    //   width:90px
    //   height:36px
    //   cursor:pointer
    //   border: 1px solid rgba(255,255,255,.4)
    //   font-size: 16px
    //   color: #FFFFFF
    //   text-align:center
    //   line-height:36px
    //   font-weight:$font-weight2
    //  .navloginlog
    //    color: #424953;
    //    border:1px solid rgba(66,73,83,.4)
    //  .nav-login-register
    //    background:rgba(255,255,255,.2)
    //    border:none
    //  .navloginReg
    //    background: #2061FF
    //    border:none
    //  .nav-login-log
    //   margin-right:20px
    // .Success_login
    //   display:block
    //   position:absolute
    //   right:0
    //   width:196px
    //   line-height: 70px
    //   text-align: center
    //   .Header
    //     width:196px
    //     height:70px
    //     .hea_p
    //        margin:14px 10px 10px 23px
    //        display:inline-block
    //        width:32px
    //        height:32px
    //        cursor:pointer
    //        // background:url("../../ilb/image/login/small.png") no-repeat
    //     .Triangle
    //        display:block
    //        display:none
    //        margin:-15px auto 0
    //        width: 0
    //        height: 0
    //        border-left: 5px solid transparent
    //        border-right: 5px solid transparent
    //        border-top: 10px solid red
    //     ._data
    //       vertical-align:17px
    //       font-size:16px
    //       color:#fff
    //       font-weight:200
    //       display:block
    //     .Color
    //       color:#000
    //   .main
    //     display:none
    //     border-top: 1px solid #eee
    //     .main_content
    //       background:#fff
    //       .li
    //         height:40px
    //         line-height:40px
    //         text-align:center
    //         font-size:16px
    //         cursor:pointer
    //         a
    //           color:#838383
    //           display:block
    //           width:100%
    //           heught:100%
    //       .login5
    //           border-top:1px solid #eee
    //           color:#c5c5c5
    // .Success_login:hover .main
    //     display:block
    // .Success_login:hover .Triangle
    //     display:block
    // .li:hover
    //   background:#3183e7
    // .li:hover a
    //   color:#fff !important
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
