<template>
  <div class="Login_Home">
    <div class="Header_ clear">
      <div class="Header_close">
        <span class="Close" @click="CloseAll" v-show="WeChatHide"></span>
      </div>
      <div class="Header_Img"></div>
      <p class="UserPhone">{{this.Photo}}</p>
    </div>
    <div class="Main">
      <ul class="List_Data">
        <li class="LI">
          <i class="I"></i>
          <a href="/module/maccount.html" class="A">我的账户<span class="Rgith"></span></a>
        </li>
        <li class="LI">
          <i class="I L2"></i>
          <a href="/module/Login_data.html" class="A">机构信息<span class="Rgith"></span></a>
        </li>
        <li class="LI">
          <i class="I L3"></i>
          <a href="/module/Login_demand.html" class="A">岗位需求<span class="Rgith"></span></a>
        </li>
        <li class="LI">
          <i class="I L4"></i>
          <a href="/module/Login_order.html" class="A" style="border:none;">订单管理<span class="Rgith"></span></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import localhost from '../../common/js/public.js';
  var scrollHeight = document.documentElement.clientHeight || document.body.clientHeight;
  $('body').css('height',scrollHeight);
  var openId = $.cookie('openid');

  export default {
    created (){
       this.Photo = $.cookie('userNum');
       if(!openId || openId == 'null'){
         this.WeChatHide = true;
       }else {
         this.WeChatHide = false;
       };
    },
    data (){
      return {
        Photo:'',
        WeChatHide:true
      }
    },
    methods:{
      CloseAll (){
        var mymessage=confirm("你确定退出么？");
        if(mymessage){
            location.href = '/module/M_index.html';
            $.cookie('loginSuccess','false');
            $.cookie('B-customerId','');
            $.cookie('userNum','');
            $.cookie('B-access_token',"");
            $.cookie('phoneNum',"");
          }else{
            return false
          }
      }
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  .Login_Home
    height:100%
    background:#f7f7fc
    .Header_
      height:194px
      width:100%
      background:#3082e7
      .Header_close
        height:44px
        .Close
          margin:15px
          float:right
          height:22px
          width:22px
          background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
          background-position:-97px -62px
          background-size: 187px 113px
      .Header_Img
        margin:15px auto 16px
        width:70px
        height:70px
        background:url('../../ilb/image/APP/icon-login-user@2x.png') no-repeat
        background-size:cover
      .UserPhone
        font-size:18px
        color:#fff
        text-align:center
    .Main
      .List_Data
        margin-top:20px
        height:228px
        background:#fff
        .LI
          height:57px
          font-size:18px
          .I
            margin:19px 20px 0px 28px
            float:left
            width:22px
            height:22px
            background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
            background-position:-158px -33px
            background-size: 187px 113px
          .L2
            background-position:-8px -61px
          .L3
            margin:21px 20px 0px 28px
            background-position:-41px -62px
          .L4
            margin:21px 20px 0px 28px
            background-position:-68px -61px
          .A
            float:right
            color:#474747
            width:305px
            height:57px
            line-height:57px
            border-bottom:1px solid #e3e7ed
            .Rgith
              float:right
              margin:22px 15px 0 0
              width:8px
              height:14px
              background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
              background-position: -101px -32px
              background-size: 180px 100px
</style>
