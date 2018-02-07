<template>
  <div class="ModifyNumber">
    <div class="Header">
      <a class="Return" href="/module/LoginM.html?state=0"></a>
      <span class="Font">重置密码</span>
    </div>
    <form class="form_Register" v-show="oldInformation">
      <div class="UserPhoto">
        <input type="tel" v-model="newPhoto" placeholder="请输入手机号" class="Input UserPhoto_ NewPhoto" @focus="focus_NewPhoto">
        <i class="Error" v-show="Error_3"></i>
      </div>
      <div class="UserNumCode">
        <input type="tel" v-model="phoneCode" oninput="if(value.length>4)value=value.slice(0,4)" placeholder="请输入验证码" class="Input NumCode" @focus="focus_Numcode">
        <div id="code" class="Code_" @click="GetNumCode">{{Code}}</div>
        <i class="Error Error_code" v-show="Error_4"></i>
        <div class="MASK" v-show="mask"></div>
      </div>
      <div class="Determine" @click="oldDetermine">确定</div>
    </form>
    <form class="form_Register Success" v-show="newInformation">
      <div class="UserPhoto">
        <input type="password" v-model="NewPassword" placeholder="请输入新密码(8-20位)" class="Input UserPhoto_" @focus="focus_Photo">
        <i class="Error" v-show="Error_1"></i>
      </div>
      <div class="UserNumCode">
        <input type="password" v-model="NewPasswords" placeholder="再次输入新密码" class="Input UserPass_" @focus="focus_Password">
        <i class="Error" v-show="Error_2"></i>
      </div>
      <div class="Determine" @click="newInformations">确定</div>
    </form>
    <div class="ModifySuccess" v-show="ModifySuccess">
      <span class="SuccessPhoto"></span>
      <h3 class="SuccessTitle">手机号重置成功</h3>
      <p class="SuccessP">新手机号将作为登录账号，请重新登录</p>
      <a class="Determine" href="/module/LoginM.html">确定</a>
    </div>
  </div>
</template>

<script>
import Localhost from '../../common/js/public.js';
// var UUID = $.cookie('UUId');
const Login = $.cookie('loginSuccess');
const access_token = $.cookie('B-access_token');
export default {
  created (){
    Login == 'true'?this.True_Flase = true:this.True_Flase = false;
  },
  data (){
    return {
      newPhoto:'',
      phoneCode:'',
      NewPassword:'',
      NewPasswords:'',
      oldInformation:true,
      newInformation:false,
      ModifySuccess:false,
      Code:'获取验证码',
      Error_1:false,
      Error_2:false,
      Error_3:false,
      Error_4:false,
      mask:false,
      True_Flase:''
    }
  },
  methods:{
    oldDetermine (){
      console.log(access_token)
      if(this.newPhoto == ''){
        this.Error_3 = true;
        $('.NewPhoto').css('border','1px solid #ffcfd1');
      }else if(!(/^1[34578]\d{9}$/.test(this.newPhoto))){
        this.Error_3 = true;
        $('.NewPhoto').css('border','1px solid #ffcfd1');
      }
      if(this.phoneCode == ''){
        this.Error_4 = true;
        $('.NumCode').css('border','1px solid #ffcfd1');
      }
      if (this.Error_3 !=true  && this.Error_4 !=true ) {
        // this.$http.post(Localhost+'/cc/to/b/identifyCodeValidation.action', {
        //   phoneNumber: this.newPhoto,
        //   validationCode: this.phoneCode,
        //   access_token:access_token
        // },{emulateJSON:true}).then((response) => {
        //   console.log(response.body)
        //   if (response.body.IdentifyCodeCorrect == true) {
        //     $.cookie('phoneNum', this.newPhoto);
        //     this.oldInformation = false;
        //     this.newInformation = true;
        //   }else{
        //     alert('验证码错误');
        //   }
        // });
        this.$http.get(Localhost+'/cc/account/reset/pwd/check?access_token='+access_token+'&phoneNumber='+this.newPhoto+'&numIdentifyCode='+this.phoneCode).then((response) => {
          console.log(response.body)
          if(response.body.error_code == 200){
              $.cookie('phoneNum', this.newPhoto);
              this.oldInformation = false;
              this.newInformation = true;
          }else if (response.body.error_code == 1003) {
            alert('验证码错误');
          }else if (response.body.error_code == 1002) {
            alert('手机号码不正确');
          }
        });
      }
    },
    newInformations (){
      if (this.NewPassword != this.NewPasswords) {
        alert('两次输入密码不一致');
        this.Error_2 = true;
        $('.UserPass_').css('border','1px solid #ffcfd1');
      };
      if (this.NewPassword == '') {
        alert('密码不能为空');
        this.Error_1 = true;
        $('.UserPhoto_').css('border','1px solid #ffcfd1');
      };
      if (!((this.NewPassword).length >= 8&& (this.NewPassword).length <= 20)) {
        alert('请将密码设置在8-20位');
        this.Error_1 = true;
        $('.UserPhoto_').css('border','1px solid #ffcfd1');
      };
      var UserPhone_ = $.cookie('phoneNum');
      if (this.Error_1 != true && this.Error_2 != true) {
        this.$http.post(Localhost+'cc/account/reset/pwd', {
          phoneNumber: this.newPhoto,
          password: this.NewPassword,
          access_token:access_token
        },{emulateJSON:true}).then((response) => {
          if(response.body.error_code == 200){
            this.newInformation = false;
            this.oldInformation = false;
            this.ModifySuccess = true;
            $.cookie('loginSuccess','false');
            $.cookie('userNum','');
            $.cookie('B-customerId',"");
          }else{
            alert('修改不成功');
          }
        })
      }
    },
    GetNumCode (){
      //验证码
      if (!(/^1[234578]\d{9}$/.test(this.newPhoto))) {
        alert('请输入正确的手机号码');
      } else {
        this.mask = true;
        this.$http.get(Localhost+'/cc/account/number/verifycode?phoneNumber='+this.newPhoto+'&access_token='+access_token+'&modifyPwdToken='+'true').then((response) =>{
          console.log(response.body)
          if(response.body.error_code == 200){
            let Code = document.getElementById('code');
            let _this = this;
                let time = 60;
                clearInterval(timer);
                let timer = setInterval(function() {
                  time--;
                  if (time > 0) {
                    _this.Code = time + '秒获取验证码';
                    _this.boolean = true;
                    Code.style.backgroundColor = '#989898';
                  } else if (time === 0) {
                    _this.boolean = false;
                    _this.Code = '重新发送验证码';
                    Code.style.backgroundColor = '#0ed666';
                  }
                }, 1000);
          }else if (response.body.error_code == 1003) {
            alert('您的手机号已经注册');
          };
        });
      }
    },
    focus_Photo (){
      this.Error_1 = false;
      $('.UserPhoto_').css('border','none');
    },
    focus_Password (){
      this.Error_2 = false;
      $('.UserPass_').css('border','none');
    },
    focus_NewPhoto (){
      this.Error_3 = false;
      this.mask = false;
      $('.NewPhoto').css('border','none');
    },
    focus_Numcode (){
      this.Error_4 = false;
      this.mask = false;
      $('.NumCode').css('border','none');
    },
    GoToHome (){
      location.href='/module/Login_home.html';
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .Header
    position:relative
    width:100%
    height:44px
    background:#3082e6
    text-align:center
    margin-bottom:20px
    .Return
      float:left
      margin:10px 0 0 15px
      width:20px
      height:20px
      display:inline-block
      background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
      background-position: -130px -34px
      background-size: 187px 113px
    .Font
     position:absolute
     top:50%
     left:50%
     margin-top:-22px
     margin-left:-40px
     line-height:44px
     height:44px
     font-size:18px
     color:#fff
    .Header_right_img
       float:right
       margin: 10px 15px 0 0
       width:22px
       height:22px
       display:inline-block
       background:url('../../ilb/image/APP/icon-b-mobile@2x.png')no-repeat
       background-position: -130px -85px
       background-size: 187px 113px
  .form_Register
    width:305px
    margin:0 auto
    .UserPhoto,.UserNumCode
      position:relative
      width:100%
      height:44px
      margin-bottom:10px
      .Input
        width:295px
        height:100%
        background:#f7f8fa
        border:none
        border-radius:4px
        font-size:16px
        color:#474747
        padding-left:10px
      .Error
        position:absolute
        top:15px
        right:10px
        display:inline-block
        width:16px
        height:16px
        background:url('../../ilb/image/APP/icon-b-mobile.png') no-repeat
        background-position: -65px -36px
      .Error_code
        right:140px
    .UserNumCode
      position:relative
      .NumCode
        width:160px
      .Code_
        position: absolute
        right: 0
        top: 0
        width:125px
        border-radius:4px
        height:44px
        background:#0ed667
        font-size:16px
        color:#fff
        line-height:44px
        text-align:center
      .MASK
        position:absolute
        right:0
        top:0
        z-index:100
        width:110px
        height:44px
    .Determine
      width:100%
      text-align:center
      height:44px
      line-height:44px
      margin:25px auto 0
      background: #3082e7
      font-size:17px
      color:#fff
      border-radius:4px
  .ModifySuccess
    width:100%
    .SuccessPhoto
      display:block
      width:180px
      height:165px
      background:url('../../ilb/image/APP/icon-reset-password@2x.png')no-repeat
      background-size:cover
      margin:50px auto 35px
    .SuccessTitle
      margin-bottom:20px
      font-size:20px
      color:#474747
      text-align:center
    .SuccessP
      font-size:14px
      color:#898989
      text-align:center
      margin-bottom:50px
    .Determine
      display:block
      width:305px
      text-align:center
      height:44px
      line-height:44px
      margin:25px auto 0
      background: #3082e7
      font-size:17px
      color:#fff
      border-radius:4px
  ::-ms-input-placeholder{color:#adadad}
  ::-webkit-input-placeholder{color:#adadad}
  ::-moz-placeholder{color:#adadad}
</style>
