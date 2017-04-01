<template>
<div class="register_body">
  <div class="Position1">
    <el-input v-model="UserPhone" @focus="phoneHide" placeholder="请输入手机号"></el-input>
    <p class="ResNumber">{{ResNumber}}</p>
  </div>

  <div class="Position">
    <el-input v-model="phoneCode" @focus="CodeHide" :maxlength="4" placeholder="请输入验证码"></el-input>
    <button id="code" class="code" @click="GetCode" :disabled="boolean" :class="None">{{Code}}</button>
      <p class="ResCode">{{ResCode}}</p>
  </div>

  <div class="Position2">
    <el-input type="password" @focus="WordHide" :maxlength="20" v-model="UserWord" placeholder="请设置密码 (8-20位字符)"></el-input>
    <p class="ResPass">{{ResPass}}</p>
  </div>

  <div class="Position3">
    <el-input v-model="UserName" @focus="NameHide" placeholder="联系人(最大30字符)" :maxlength="10"></el-input>
    <p class="ResUser">{{ResUser}}</p>
  </div>

  <div class="Position4">
    <el-input v-model="ToBName" @focus="ToBHide" placeholder="机构名称(最大50字符)" :maxlength="50"></el-input>
    <p class="ResToB">{{ResToB}}</p>
  </div>
  <div class="Position5">
    <el-input v-model="ToBPhone" @focus="ToBPHide" placeholder="联系电话(最大50字符)" :maxlength="50"></el-input>
    <p class="ResPhone">{{ResPhone}}</p>
  </div>
  <div class="login" @click="Register">注册</div>


</div>
</template>

<script>
import Vue from 'vue';
import $ from 'jquery';
import '../../../common/js/jquery.cookie'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);

export default {
  data() {
    return {
      UserPhone: '',
      phoneCode: '',
      UserWord: '',
      UserName: '',
      ToBName: '',
      ToBPhone: '',
      Code: '获取验证码',
      ResNumber:'',
      ResCode:'',
      ResPass:'',
      ResUser:'',
      ResToB:'',
      ResPhone:''
    }
  },
  methods: {
    GetCode() {
      //验证码
      if (!(/^1[34578]\d{9}$/.test(this.UserPhone))) {
        this.ResNumber = '请输入正确的手机号码';
      } else {
        this.$http.post('http://192.168.1.11/cc/receiveRegisterValidationCode.action', {
          phoneNumber: this.UserPhone,
          validationCode: 'getValidationCode'
        }).then((response) => {
          console.log(response.body.unregistered);
          if (response.body.unregistered == true) {
            console.log('发送成功')
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
          } else {
            this.ResNumber = '您的手机号已经注册';
          }
        }, (response) => {
          console.log('打印错误信息')
        });
      }
    },
    phoneHide() {
      this.ResNumber = '';
    },
    CodeHide() {
      this.ResCode = '';
    },
    WordHide() {
      this.ResPass = '';
    },
    NameHide() {
      this.ResUser = '';
    },
    ToBHide() {
      this.ResToB = '';
    },
    ToBPHide() {
      this.ResPhone = '';
    },
    Register() {
      if (!(/^1[34578]\d{9}$/.test(this.UserPhone))) {
        this.ResNumber = '请输入正确的手机号码';
      }
      if (!Number(this.phoneCode) || (this.phoneCode).length != 4) {
        this.ResCode = '请输入验证码';
      }
      if (!((this.UserWord).length >= 6 && (this.UserWord).length <= 20)) {
        this.ResPass = '请输入密码';
      }
      if (this.UserName === '') {
        this.ResUser = '请输入联系人';
      }
      if (this.ToBName === '') {
        this.ResToB = '请输入机构名称';
      }
      if (this.ToBPhone === '') {
        this.ResPhone = '请输入机构phone'
      }
      if (this.ResNumber === '' && this.ResCode === '' && this.ResPass === '' && this.ResUser === '' && this.ResToB === '' && this.ResPhone === '') {
        this.$http.post('http://192.168.1.11/cc/receiveRegister.action', {
          phoneNumber: this.UserPhone,
          password: this.UserWord,
          validationCode: this.phoneCode,
          customerName: this.ToBName,
          contactPerson: this.UserName,
          contactNumber: this.ToBPhone
        }).then((response) => {
          this.$http.post('http://192.168.1.11/cc/receiveLogin.action', {
            phoneNumber: this.UserPhone,
            password: this.UserWord
          }).then((response) => {
            console.log(response.body)
            if (response.body.loginSuccess === true && response.body.custComplete === false) {
              $.cookie('userId', response.body.customerId);
              $.cookie('userNum', response.body.phoneNumber);
              $.cookie('loginSuccess', response.body.loginSuccess);
              location.href = '/module/success.html'
            } else if (response.body.loginSuccess === true && response.body.custComplete === true) {
              $.cookie('userId', response.body.customerId);
              $.cookie('userNum', response.body.phoneNumber);
              $.cookie('loginSuccess', response.body.loginSuccess);
              location.href = '/module/index.html'
            } else if (response.body.loginSuccess === false) {
              this.ResNumber ='账号或者密码错误';
            }
          }, (response) => {
            console.log('打印错误信息')
          });
        }, (response) => {
          console.log('打印错误信息')
        });
      }
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.register_body
  position:relative
  .Position,.Position1,.Position2,.Position3,.Position4,.Position5,.Position6
    position:relative
  input
    margin-bottom:19px
  p
    font-size:14px
    color:#b14343
  .el-input
    margin-left:58px
    margin-bottom:19px
    width:260px
    height:40px
    border:1px solid #eee
    border-radius:5px
    .el-input__inner
      height:40px
  .ResNumber,.ResCode,.ResPass,.ResUser,.ResToB,.ResPhone
    position:absolute
    top:15px
    right:-75px
  .ResCode,.ResUser
    right:-19px
  .ResPass
    right:-5px
  .ResToB
    right:-35px
  .ResPhone
    right:-45px
  .code
    position: absolute
    top:1px
    right:81px
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
    z-index:10
  .login
    margin:50px 0 0 58px
    cursor:pointer
    width:260px
    height:40px
    line-height:40px
    background:#3183e7
    color:#fff
    text-align:center
    border-radius:5px
</style>
