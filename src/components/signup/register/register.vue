<template>
  <div class="register_body">
    <el-input v-model="UserPhone" @focus="phoneHide" placeholder="请输入手机号"></el-input>

    <p class="PhoneShow" v-show="PhoneShow">请输入正确的手机号码</p>
    <p class="PhoneShow" v-show="Registered">您的手机号已经注册</p>
    <div class="Position">
        <el-input v-model="phoneCode" @focus="CodeHide" :maxlength="4" placeholder="请输入验证码"></el-input>
        <button id="code" class="code" @click="GetCode" :disabled="boolean" :class="None">{{Code}}</button>
    </div>




    <p class="CodeShow" v-show="CodeShow">请输入验证码</p>

    <!-- <button id="code" class="code" @click="GetCode" :disabled="boolean" :class="None">{{Code}}</button> -->

    <el-input type="password" @focus="WordHide" :maxlength="20" v-model="UserWord" placeholder="请设置密码 (8-20位字符)"></el-input>

    <p class="WordShow" v-show="WordShow">请输入密码</p>

    <el-input v-model="UserName" @focus="NameHide" placeholder="联系人(最大30字符)" :maxlength="10"></el-input>
    <p class="Contacts" v-show="Contacts">请输入联系人</p>

    <el-input v-model="ToBName" @focus="ToBHide" placeholder="机构名称(最大50字符)" :maxlength="50"></el-input>

    <p class="Organization" v-show="Organization">请输入机构名称</p>

    <el-input v-model="ToBPhone" @focus="ToBPHide" placeholder="联系电话(最大50字符)" :maxlength="50"></el-input>
    <p class="OrganizationPhone" v-show="OrganizationPhone">请输入联系电话</p>
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
  data (){
    return {
      UserPhone:'',
      phoneCode:'',
      UserWord:'',
      UserName:'',
      ToBName:'',
      ToBPhone:'',
      Registered:false,
      Code:'获取验证码',
      PhoneShow:false,
      CodeShow:false,
      WordShow:false,
      Contacts:false,
      Organization:false,
      OrganizationPhone:false
    }
  },
  methods:{
    GetCode (){
      //验证码
      if(!(/^1[34578]\d{9}$/.test(this.UserPhone))){
          this.PhoneShow = true;
      }else{
        this.$http.post('http://192.168.1.11/cc/receiveRegisterValidationCode.action',{phoneNumber:this.UserPhone,validationCode:'getValidationCode'}).then((response) =>{
            console.log(response.body.unregistered);
          if(response.body.unregistered == true){
            console.log('发送成功')
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
            this.Registered = true;
          }
         },(response) =>{
            console.log('打印错误信息')
         });
      }
    },
    phoneHide (){
      this.PhoneShow = false;
      this.Registered = false;
    },
    CodeHide (){
      this.CodeShow = false;
    },
    WordHide (){
      this.WordShow = false;
    },
    NameHide (){
        this.Contacts = false;
    },
    ToBHide (){
      this.Organization = false;
    },
    ToBPHide (){
      this.OrganizationPhone = false;
    },
    Register (){
      if(!(/^1[34578]\d{9}$/.test(this.UserPhone))){
        this.PhoneShow = true;
      }
      if(!Number(this.phoneCode) || (this.phoneCode).length!=4){
        this.CodeShow = true;
      }
      if(!((this.UserWord).length>=6 && (this.UserWord).length<=20)){
        this.WordShow = true;
      }
      if(this.UserName === ''){
        this.Contacts = true;
      }
      if(this.ToBName === ''){
        this.Organization = true;
      }
      if(this.ToBPhone === ''){
        this.OrganizationPhone = true;
      }
      if(this.PhoneShow === false && this.CodeShow === false && this.WordShow === false  && this.Contacts === false && this.Organization === false  && this.OrganizationPhone === false){
        this.$http.post('http://192.168.1.11/cc/receiveRegister.action',{phoneNumber:this.UserPhone,password:this.UserWord,validationCode:this.phoneCode,customerName:this.ToBName,contactPerson:this.UserName,contactNumber:this.ToBPhone}).then((response) =>{
          this.$http.post('http://192.168.1.11/cc/receiveLogin.action',{phoneNumber:this.UserPhone,password:this.UserWord}).then((response) =>{
            console.log(response.body)
              if(response.body.loginSuccess === true && response.body.custComplete === false){
                $.cookie('userId',response.body.customerId);
                $.cookie('userNum',response.body.phoneNumber);
                $.cookie('loginSuccess',response.body.loginSuccess);
                location.href = '/module/success.html'
              }else if(response.body.loginSuccess === true && response.body.custComplete === true){
                $.cookie('userId',response.body.customerId);
                $.cookie('userNum',response.body.phoneNumber);
                $.cookie('loginSuccess',response.body.loginSuccess);
                location.href = '/module/login.html#/data'
              }else if(response.body.loginSuccess === false){
                  this.Perror = true;
              }
           },(response) =>{
              console.log('打印错误信息')
           });
         },(response) =>{
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
  .PhoneShow
    position: absolute
    top: 11px
    right: -70px
  .Position
    position:relative
  .CodeShow
    position: absolute
    top: 72px
    right: -12px
  .WordShow
    position: absolute
    top: 134px
    right:1px
  .Contacts
    position: absolute
    top:196px
    right: -13px
  .Organization
    position: absolute
    top:256px
    right: -28px
  .OrganizationPhone
    position: absolute
    top: 319px
    right: -26px
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
