<template>
  <div class="Reset" >
    <a href="index.html" class="Link"></a>
      <p class="title" v-show="titleSHow">重置手机号</p>
      <div v-show="Reset_1">
        <div class="POsition">
          <input type="text" @focus="phoneHide" v-model="UserPhone" class="Phone" placeholder="请填写新手机账号">
          <p class="NewPhoneNumer">{{NewPhoneNumer}}</p>
        </div>
        <div class="POsition1">
            <input type="text" @focus="codeHide"  v-model="userCode" class="Pleasecode" placeholder="请输入验证码">
              <button id="code" class="code" @click="GetCode" :disabled="boolean" :class="None">{{Code}}</button>
            <p class="NewCode">{{NewCode}}</p>
        </div>

          <div @click="GoReset" class="Yes">确定</div>
      </div>
      <div v-show="Reset_2">
        <div class="Position1">
          <input type="text" @focus="FocusPhide" class="pass1" placeholder="请输入原手机号" v-model="PhotoNum">
          <p class="PhoneNumber_">{{PhoneNumber_}}</p>
        </div>
        <div class="Position2">
          <input type="password" @focus="FocusWhide" class="pass2" placeholder="请输入密码" v-model="PhotoWord">
          <p class="PassNumber_1">{{PassNumber_}}</p>
        </div>
        <div class="Yes" @click="YesReset">确定</div>
      </div>
      <div class="Reset_3" v-show="Success">
        <p class="title_3">
          手机号重置成功，新手机号将作为登录账号。
          <br>
          <br>
          请重新登录
        </p>
        <i class="Pic"></i>
        <a href="index.html" class="Ok_">确定</a>
      </div>
  </div>
</template>

<script>
import $ from 'jquery';
import '../../common/js/jquery.cookie.js';

export default {
    data (){
      return {
        Code:'获取验证码',
        UserPhone:'',
        titleSHow:true,
        Reset_1:false,
        Reset_2:true,
        PhotoWord:'',
        PhotoNum:'',
        userCode:'',
        Success:false,
        PhoneNumber_:'',
        PassNumber_:'',
        NewPhoneNumer:'',
        NewCode:''
      }
    },
  methods:{
    GetCode (){
      //验证码
      if(!(/^1[34578]\d{9}$/.test(this.UserPhone))){
          this.NewPhoneNumer = '请输入正确的手机号码';
      }else{
        this.$http.post('http://192.168.1.11/cc/to/b/getResetPhoneIdentifyCode.action',{newPhoneNumber:this.UserPhone,validationCode:'getValidationCode'}).then((response) =>{
          console.log(response.body.getResetIndentifyCodeSuccess)
            if(response.body.getResetIndentifyCodeSuccess == true){
              var Code = document.getElementById('code')
              var _this = this;
              var time = 60;
              clearInterval(timer);
              var timer = setInterval(function(){
                time --;
                if(time > 0){
                  _this.Code = time + '秒获取验证码' ;
                  _this.boolean = true;
                  Code.style.backgroundColor = '#989898';
                }else if(time === 0){
                  _this.boolean = false;
                  _this.Code ='从发验证码';
                  Code.style.backgroundColor = '#0ed666';
                }
              }, 1000);
            }else{
              console.log(response.body.register)
              if(response.body.register == true){
                 this.NewPhoneNumer = '该手机号已绑定，请填写其他手机号'
             }
            }
         },(response) =>{
            console.log('打印错误信息')
         });
      }
    },
    phoneHide (){
        this.NewPhoneNumer = '';
    },
    GoReset (){
      if(this.UserPhone == ''){
          this.NewPhoneNumer = '手机号码不能为空';
      }else if(!(/^1[34578]\d{9}$/.test(this.UserPhone))){
          this.NewPhoneNumer ='手机号码格式不正确';
      }
      if (this.userCode=='') {
          this.NewCode = '验证码不能为空';
      }else if(!Number(this.userCode) || (this.userCode).length != 4){
        this.NewCode = '请输入正确的验证码';
      }

      if(this.NewCode == '' && this.NewPhoneNumer == '' ){
          this.$http.post('http://192.168.1.11/cc/to/b/resetAccountPhone.action',{newPhoneNumber:this.UserPhone,identifyCode:this.userCode}).then((response)=>{
            if(response.body.newPhoneNumberResetSuccess == true){
              this.Reset_1 = false;
              this.Reset_2 = false;
              this.Success = true;
              this.titleSHow = false;
              $.cookie('loginSuccess','false');
              $.cookie('userNum','');
              $.cookie('userId',"");
            }else {
              if(response.body.newPhoneRegistered == true){
                this.NewPhoneNumer = '该手机号已绑定，请填写其他手机号';
              }
            }
            if(response.body.newPhoneRegistered == true){
              this.NewPhoneNumer = '该手机号已绑定，请填写其他手机号';
            }
            if(response.body.validationCodeError == true){
              this.NewCode = '验证码错误'
            }
          },(response) =>{
            console.log('错误')
          });

      }
    },
    YesReset (){
      if(this.PhotoNum == ''){
        this.PhoneNumber_ = ' 手机号不能为空';
      }else if(!(/^1[34578]\d{9}$/.test(this.PhotoNum))){
          this.PhoneNumber_ = '手机号格式不正确';
      }
      if(this.PhotoWord == ''){
        this.PassNumber_ = '密码不能为空';
      }
      if(this.PhoneNumber_ == '' && this.PassNumber_ == ''){
        this.$http.post('http://192.168.1.11/cc/to/b/checkPhoneAndPwd.action',{phoneNumber:this.PhotoNum,password:this.PhotoWord}).then((response) =>{
            if(response.body.phoneAndPwdPassCheck == true){
              this.Reset_1 = true;
              this.Reset_2 = false;
              this.Success = false;
            }else{
              if(response.body.phoneNumberNotMatch == true){
                this.PhoneNumber_ = '您的手机号与登录账号不一致';
              }
              if(response.body.pwdError == true){
                this.PassNumber_ = '密码错误';
              }
            }
            if(response.body.pwdError == true){
              this.PassNumber_ = '密码错误';
            }
        },(response) =>{

        })
      }


    },
    codeHide (){
        this.NewCode = '';
    },
    FocusPhide (){
      this.PhoneNumber_ = '';
    },
    FocusWhide (){
      this.PassNumber_ = '';
    }
  },

}
</script>

<style lang="stylus" res="stylesheet/stylus">
 .Reset
    position:absolute
    top:50%
    left:50%
    width:400px
    height:400px
    margin-left:-200px
    margin-top:-200px
    .title
      margin-bottom:25px
      margin-top:15px
      color:#3183e7
      font-size:18px
      font-weight:600
      text-align:center
    .Link
      background:url('../../ilb/image/cc logo-01.png') no-repeat
      background-size:100% 100%
      height:20px
      padding-bottom: 30px
      margin:auto
      display:block
      width:240px
      font-weight:700
      text-align:center
      font-size:26px
      color:#3183e7 !important
    .POsition,.Position1,.Position2,.POsition1
      position:relative
    .Phone,.Pleasecode,.pass1,.pass2
      width:260px
      height:40px
      font-size:14px
      border-radius:5px
      margin-bottom:19px
      border: 2px solid #eee
      padding-left:20px
      margin-left:60px
    .code
      position: absolute
      top: 2px
      right:57px
      cursor:pointer
      border: none
      font-size:14px
      color:#fff
      width:105px
      height:40px
      line-height:39px
      text-align:center
      border-top-right-radius:5px
      border-bottom-right-radius:5px
      background:#0ed666
    .PhoneNumber_,.PassNumber_1,.NewPhoneNumer,.NewCode
      width:225px
      position: absolute
      top:15px
      right: -180px
      font-size:14px
      color:#b14343
    .Yes
      width:285px
      height:40px
      background:#3183e7
      text-align:center
      line-height:40px
      border-radius:5px
      color:#fff
      font-size:14px
      margin-left:60px
      cursor:pointer
    .Reset_3
      .title_3
        margin-bottom:38px
        color:#3183e7
        font-size:20px
        font-weight:600
        text-align:center
      .Pic
        width:145px
        height:145px
        display:block
        margin:auto
        background:url("../../ilb/image/yes.png") no-repeat
      .Ok_
        display:block
        margin:45px auto 0
        width:280px
        height:40px
        background:#3183e7
        border-radius:5px
        line-height:40px
        text-align:center
        color:#fff
</style>
