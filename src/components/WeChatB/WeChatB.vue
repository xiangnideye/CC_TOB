<template>
  <div class="">
    <div class="WeChatB" v-show="WeChatBHide">
      <p class="WeChatB-p">将您的微信号与careerchina绑定后，可及时收到指派外教通知及订单状态更新通知。</p>
      <div class="WeChat-From">
          <div class="UserName">
            <i class="Username_img"></i>
            <input type="text" v-model="UserName" class="UserName_input" placeholder="CareerChina登录账号"
            @focus="focus_Username">
            <i class="Error" v-show="Error_Img1"></i>
          </div>
          <p class="ErrorPrompt" v-show="UserNamePrompt">{{this.NameError}}</p>
          <div class="PassWord">
            <i class="PassWord_img"></i>
            <input type="password" v-model="PassWord" class="PassWord_input" placeholder="CareerChina登录密码" @focus="focus_PassWord">
            <i class="Error" v-show="Error_Img2"></i>
          </div>
          <p class="ErrorPrompt_2" v-show="PassWordPrompt">{{this.WordError}}</p>
          <div class="Submit" @click="SignIn">确认绑定</div>
          <div class="WeChat-register">
            <span class="left_span">还没有注册账号？</span>
            <span class="right_span" @click="GoToRegister">注册账号</span>
          </div>
      </div>
    </div>
    <div class="Success" v-show="WeChatBShow">
      <span class="success-Img"></span>
      <span class="success-Title">绑定成功</span>
      <span class="success-Phone">已绑定:{{this.UserName}}</span>
      <span class="success-Font">您将收到指派外教通知和订单状态更新通知。</span>
      <span class="success-Button" @click="SuccessGoList">确定</span>
    </div>
    <div class="footer">
      <span class="footer-img"></span>
      <span class="footer-font">京公网安备 11010502033181号</span>
    </div>
  </div>
</template>

<script>
import localhost from '../../common/js/public.js';
// const access_token = $.cookie('B-access_token');
let getQueryString = (name)=>{
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
$.cookie('openid',getQueryString('openid'));
$.cookie('B-access_token',getQueryString('access_token'));
const access_token = $.cookie('B-access_token');
export default {
  data (){
    return {
      UserName:'',
      PassWord:'',
      Error_Img1:false,
      Error_Img2:false,
      ErrorPrompt:false,
      UserNamePrompt:false,
      PassWordPrompt:false,
      WeChatBHide:true,
      WeChatBShow:false,
      NameError:'',
      WordError:'',
      openid:getQueryString('openid')
    }
  },
  created (){
    //1e4974fb-12ac-43b6-84f8-a72a42421638
    console.log()
  },
  methods :{
    SignIn (){
      if(!(/^1[234578]\d{9}$/.test(this.UserName))){
        this.Error_Img1 = true;
        this.UserNamePrompt = true;
        this.NameError = '请输入正确的登录账号';
        $('.UserName_input').css('border','1px solid #ffcfd1');
      };
      if (!((this.PassWord).length >= 8&& (this.PassWord).length <= 20)) {
        this.Error_Img2 = true;
        this.PassWordPrompt = true;
        this.WordError = '请输入正确的登录密码';
        $('.PassWord_input').css('border','1px solid #ffcfd1');
      };
      if(this.Error_Img1 != true && this.Error_Img2  != true){
        this.$http.get(localhost+'/cc/account/login?phoneNumber='+this.UserName+'&password='+this.PassWord+'&access_token='+access_token).then((response) =>{
          console.log(response.body)
          if(response.body.error_code == 200){
            //customerId
            $.cookie('B-customerId',response.body.resultObj.customerId);
            //创建时间
            $.cookie('B-createTime',response.body.resultObj.createTime);
            //机构是否审批
            $.cookie('B-custInfoComplete',response.body.resultObj.custInfoComplete);
            //当前登陆的手机号
            $.cookie('userNum', this.UserName);
            //是否登陆成功
            $.cookie('loginSuccess', 'true');
            //location.href = '/module/Login_home.html';
            this.$http.post(localhost+'/cc/wechat/blindWechat',{
              openid:this.openid,
              access_token:access_token,
              customerId:response.body.resultObj.customerId
            },{emulateJSON:true}).then((response) =>{
              if(response.body.error_code == 0){
                this.WeChatBHide = false;
                this.WeChatBShow = true;
              };
            });
          }else if (response.body.error_code == 1002) {
            alert('账号没有注册');
          }else if (response.body.error_code == 1003) {
            alert('账号或密码错误');
          }
        });
      }
    },
    focus_Username (){
      this.Error_Img1 = false;
      this.UserNamePrompt = false;
      this.NameError = '';
      this.UserName = '';
      $('.UserName_input').css('border','none');
    },
    focus_PassWord (){
      this.Error_Img2 = false;
      this.PassWordPrompt = false;
      this.PassWord = '';
      this.WordError = '';
      $('.PassWord_input').css('border','none');
    },
    GoToRegister (){
      location.href="/module/WeChatLogin.html";
    },
    SuccessGoList (){
      location.href="/module/Login_home.html";
    },
  }
}
</script>
<style lang="stylus" res="stylesheet/stylus">
  .WeChatB
    .WeChatB-p
      width:305px
      margin:25px auto 20px
      font-size:14px
      color:#474747
    .WeChat-From
      width:305px
      margin:0 auto
      .UserName,.PassWord
        position:relative
        .UserName_input,.PassWord_input
          width:263px
          height:44px
          background:#f7f7f7
          border:none
          border-radius:4px
          font-size:16px
          color:#474747
          padding-left:42px
          outline:none
          -webkit-appearance:none
        .UserName_input
          margin-bottom: 12px
        .Error
          position:absolute
          top:15px
          right:10px
          display:inline-block
          width:16px
          height:16px
          background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
          background-position: -67px -35px
          background-size: 180px 110px
        .Username_img
            display:inline-block
            position:absolute
            top:13px
            left:13px
            background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
            background-position: -8px -41px
            background-size: 210px 130px
            width:20px
            height:20px
            z-index:10
        .PassWord_img
            display:inline-block
            position:absolute
            top:13px
            left:13px
            background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
            background-position: -44px -37px
            background-size: 219px 118px
            width:20px
            height:20px
            z-index:10
      .Submit
        width:305px
        margin:25px auto
        background:#3082e7
        text-align:center
        color:#fff
        height:44px
        line-height:44px
        border-radius:4px
        font-size:17px
      .WeChat-register
        .left_span,.right_span
          font-size:14px
          color:#474747
        .right_span
            color:#3082e7
      .ErrorPrompt,.ErrorPrompt_2
        font-size:12px
        color:#fd3d4b
        margin-bottom:15px
      .ErrorPrompt_2
        margin-top:10px
  .Success
    width:100%
    .success-Img
      width:180px
      height:165px
      display:block
      margin:50px auto 35px
      background:url('../../ilb/image/APP/icon-bundling@2x.png') no-repeat
      background-size:cover
    .success-Title
      font-size:20px
      text-align:center
      color:#474747
      display:block
      margin-bottom:10px
    .success-Phone
      font-size:14px
      color:#474747
      display:block
      text-align:center
      margin-bottom:15px
    .success-Font
      font-size:14px
      color:#898989
      text-align:center
      margin-bottom:40px
      display:block
    .success-Button
      width:305px
      height:44px
      background:#3082e7
      border-radius:4px
      text-align:center
      line-height:44px
      margin:0 auto
      display:block
      color:#fff
      font-size:17px
  .footer
    margin-top:250px
    text-align:center
    .footer-img
      background:url('../../ilb/image/WechatIMG145.png') no-repeat
      display:inline-block
      width:15px
      height:15px
      margin-right:6px
      background-size:cover
      vertical-align: -3px
    .footer-font
      font-size:12px
      color:#adadad
</style>
