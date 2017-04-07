<template>
<div class="Reset">
  <a href="index.html" class="Link"></a>
  <p class="title" v-show="titleSHow">重置密码</p>
  <div v-show="Reset_1">
    <div class="position1">
      <input type="text" @focus="phoneHide" v-model="UserPhone" class="Phone" placeholder="填写手机号">

      <p class="phone_">{{phoneNumber_}}</p>
    </div>
    <div class="position2">
      <input type="text" @focus="codeHide" maxlength="4" v-model="userCode" class="Pleasecode" placeholder="请输入验证码">
      <button id="code" class="code" @click="GetCode" :disabled="boolean" :class="None">{{Code}}</button>
      <p class="code_">{{phoneCode_}}</p>
    </div>
    <div @click="GoReset" class="Yes">确定</div>
  </div>
  <div v-show="Reset_2">
    <div class="position3">
      <input type="password" @focus="PassP" class="pass1" placeholder="请输入新密码(8-20位)" v-model="passWOrd1">
      <p class="Pass_">{{passNumber}}</p>
    </div>
  <div class="position3">
    <input type="password" @focus="PassP2" class="pass2" placeholder="再次输入新密码" v-model="passWOrd2">
    <p class="Pass_2">{{passNumber1}}</p>
  </div>

    <div class="Yes" @click="YesReset">确定</div>
  </div>
  <div class="Reset_3" v-show="Success">
    <p class="title_3">密码修改成功，请重新登录</p>
    <i class="Pic"></i>
    <a href="index.html" class="Ok_">确定</a>
  </div>
</div>
</template>

<script>
import $ from 'jquery';
import '../../common/js/jquery.cookie.js';

export default {
  created() {
    var _this = this;
    window.onkeydown = function(event) {
      if (event.keyCode == 13) {
        _this.GoReset();
        _this.YesReset();
      }
    }
  },
  data() {
    return {
      Code: '获取验证码',
      UserPhone: '',
      titleSHow: true,
      Reset_1: true,
      Reset_2: false,
      passWOrd1: '',
      passWOrd2: '',
      userCode: '',
      Success: false,
      phoneNumber_:'',
      phoneCode_:'',
      passNumber:'',
      passNumber1:''
    }
  },
  methods: {
    GetCode() {
      var Login = $.cookie('loginSuccess');
      console.log(Login)
      //验证码
      if (!(/^1[34578]\d{9}$/.test(this.UserPhone))) {
        this.phoneNumber_ = '请输入正确的手机号码';
      } else {
          console.log(Login)
        if(Login == 'true'){
            console.log(1)
          this.$http.post('http://192.168.1.11/cc/to/b/getIdentifyCode.action', {
            phoneNumber: this.UserPhone,
            validationCode: 'getValidationCode',
            loggedInFlag:'loggedIn'
          }).then((response) => {
            console.log('发送成功')
            if(response.body.getSuccess == true){
              var Code = document.getElementById('code')
              var _this = this;
              var time = 60;
              clearInterval(timer);
              var timer = setInterval(function() {
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
            }else {
              if(response.body.phoneNumberNotMatch == true){
                this.phoneNumber_ = '您的手机号与登录账号不一致'
              }
            }
          }, (response) => {
            console.log('打印错误信息')
          });
        }else if(Login == 'false'){
            console.log(2)
          this.$http.post('http://192.168.1.11/cc/to/b/getIdentifyCode.action', {
            phoneNumber: this.UserPhone,
            validationCode: 'getValidationCode'
          }).then((response) => {
            console.log('发送成功')
            if(response.body.getSuccess == true){
              var Code = document.getElementById('code')
              var _this = this;
              var time = 60;
              clearInterval(timer);
              var timer = setInterval(function() {
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
            }else {
              if(response.body.unregister == true){
                this.phoneNumber_ = '您的手机号为注册'
              }
            }
          }, (response) => {
            console.log('打印错误信息')
          });
        }

      }
    },
    phoneHide() {
      this.phoneNumber_ = '';
    },
    GoReset() {
      if (this.UserPhone == '') {
        this.phoneNumber_ = '手机号码不能为空';
      } else if (!(/^1[34578]\d{9}$/.test(this.UserPhone))) {
        this.phoneNumber_ = '请输入正确的手机号码';
      }
      if (this.userCode == '') {
        this.phoneCode_ = '验证码不能为空';
      }else if(!Number(this.userCode) || (this.userCode).length != 4){
        this.phoneCode_ = '请输入正确的验证码';
      }
      if (this.phoneNumber_ == '' && this.phoneCode_ == '' ) {
        this.$http.post('http://192.168.1.11/cc/to/b/identifyCodeValidation.action', {
          phoneNumber: this.UserPhone,
          validationCode: this.userCode
        }).then((response) => {
          if (response.body.IdentifyCodeCorrect == true) {
            $.cookie('phoneNum', this.UserPhone);
            this.Reset_1 = false;
            this.Reset_2 = true;
          }else{
            this.phoneCode_ = '验证码错误'
          }
        }, (response) => {
          console.log('错误')
        });

      }
    },
    YesReset() {
      if (this.passWOrd1 != this.passWOrd2) {
        this.passNumber1 = '两次输入密码不一致';
      }
      if (this.passWOrd1 == '') {
        this.passNumber = '密码不能为空';
      }
      if (!((this.passWOrd1).length >= 8&& (this.passWOrd1).length <= 20)) {
        this.passNumber = '请将密码设置在8-20位';
      }
      var UserPhone_ = $.cookie('phoneNum');
      if (this.passNumber1 == '' && this.passNumber == '') {
        this.$http.post('http://192.168.1.11/cc/to/b/updatePwd.action', {
          phoneNumber: UserPhone_,
          newPwd: this.passWOrd1
        }).then((response) => {
          console.log(response.body)
          if(response.body.updatePwdSuccess == true){
            this.titleSHow = false;
            this.Reset_2 = false;
            this.Success = true;
            $.cookie('loginSuccess','false');
            $.cookie('userNum','');
            $.cookie('userId',"");
          }else{
            this.passNumber = '修改不成功'
          }
        }, (response) => {

        })
      }
    },
    codeHide() {
      this.phoneCode_ = '';
    },
    PassP() {
      this.passNumber = '';
    },
    PassP2() {
      this.passNumber1 = '';
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
    .position1,.position2,.position3,.position4
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
    .phone_,.code_,.Pass_2,.Pass_
      width:200px
      position: absolute
      top:15px
      right: -165px
      font-size:14px
      color:#b14343
    // .Pass_
    //   right:-40px
    // .Pass_2
    //   right:-85px
    // .code_
    //   right:-55px
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
        font-size:24px
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
