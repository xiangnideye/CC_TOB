<template>
  <div class="Maccount">
    <div class="Header">
      <a class="Header_img" href="/module/Login_home.html"></a>
      <span class="Header_title">我的账户</span>
    </div>
    <ul class="List">
      <li class="List_li"><a href="/module/M_modifyNumber.html" class="List_a">
        <span class="List_title">手机号码</span>
        <i class="List_img"></i>
        <span class="List_main">{{this.PhotoNumber}}</span>
      </a></li>
      <li class="List_li"><a href="/module/M_modifyPassword.html" class="List_a">
        <span class="List_title">更换密码</span>
        <i class="List_img"></i>
        <span class="List_main"></span>
      </a></li>
      <li class="List_li" style="border:none;"><a href="#" class="List_a">
        <span class="List_title">注册时间</span>
        <span class="List_main" style="margin-right:15px;">{{this.UserTime}}</span>
      </a></li>
    </ul>
  </div>
</template>

<script>
  import localhost from '../../common/js/public.js';
  const access_token = $.cookie('B-access_token');
  const BcustomerId =  $.cookie('B-customerId');
  const loginSuccess = $.cookie('loginSuccess');
  var scrollHeight = document.documentElement.clientHeight || document.body.clientHeight;
  $('body').css('height',scrollHeight);
  export default {
    data (){
      return {
        PhotoNumber:'',
        UserTime:''
      }
    },
    created (){
      this.UserTime = $.cookie('B-createTime');
      // var uuid = $.cookie('UUId');
      // var phoneNumber = $.cookie('userNum');
      //  this.$http.get(Localhost+"/cc/responseAccountInfo.action?"+"phoneNumber"+"="+phoneNumber+'&'+'uuid'+'='+uuid).then((response) =>{
      //    if(response.body.msg == 'not login!'){
      //      alert('登录超时，请重新登录！');
      //      location.href="/module/terminal.html";
      //      $.cookie('loginSuccess','false');
      //      $.cookie('userId','');
      //      $.cookie('userNum','');
      //      $.cookie('UUId',"");
      //      $.cookie('phoneNum',"");
      //    };
      //    this.PhotoNumber = response.body.phoneNumber
      //
      //  },(response) =>{
      //
      //  });
    },
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  .Maccount
    background:#f7f7fc
    height:100%
    .Header
      position:relative
      height:44px
      background:#3082e6
      .Header_img
        margin: 10px 0 0 15px
        width:22px
        height:22px
        display:inline-block
        background:url('../../ilb/image/APP/icon-b-mobile@2x.png')no-repeat
        background-position: -130px -32px
        background-size: 187px 113px
      .Header_title
        position: absolute
        top: 50%
        left: 50%
        margin-top: -22px
        margin-left: -40px
        line-height: 44px
        height: 44px
        font-size: 18px
        color: #fff
    .List
      margin-top:20px
      height:171px
      background:#fff
      .List_li
        width:355px
        float:right
        height:57px
        line-height:57px
        border-bottom:1px solid #e3e7ed
        .List_a
          display:block
          font-size:18px
          color:#474747
          .List_main
            float:right
            color: #8d8d8d
          .List_img
            float:right
            margin: 17px 15px 0px 0
            width:22px
            height:22px
            display:inline-block
            background:url('../../ilb/image/APP/icon-b-mobile@2x.png')no-repeat
            background-position: -98px -32px
            background-size: 187px 113px
</style>
