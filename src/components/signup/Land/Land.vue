<template>
  <div class="Land_body">
    <div class="Login">
      <el-input @focus="FocusPhide" v-model="UserPhone" placeholder="请输入手机号"></el-input>
      <p class="PhoneShow" v-show="Pshow">请输入正确的手机号码</p>
      <p class="PhoneShow" v-show="Perror">账号或密码错误</p>
      <el-input @focus="FocusWhide" type="password" v-model="PassWord" placeholder="请输入密码"></el-input>
      <p class="PasswordShow" v-show="Wshow">请输入密码</p>
      <a href="/module/Reset.html" class="Forget">忘记密码</a>
      <div class="login" @click="LoginUp">登陆</div>
    </div>
  </div>

</template>

<script>
import Vue from 'vue'
import $ from 'jquery';
import '../../../common/js/jquery.cookie'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

export default {
  data (){
    return {
      UserPhone:'',
      PassWord:'',
      Pshow:false,
      Wshow:false,
      DisPlay:true,
      Success_:false,
      Perror:false
    }
  },
  methods:{
    LoginUp (){
      if(!(/^1[34578]\d{9}$/.test(this.UserPhone))){
        this.Pshow = true;
      }
      if((this.PassWord).length<6 || (this.PassWord).length>20){
        this.Wshow = true;
      }else{
        this.Wshow = false;
      }
      if((this.Pshow == false) && (this.Wshow == false)){
        this.$http.post('http://192.168.1.11/cc/receiveLogin.action',{phoneNumber:this.UserPhone,password:this.PassWord}).then((response) =>{
          console.log(response.body)
            if(response.body.loginSuccess === true && response.body.custComplete === false){
              $.cookie('userId',response.body.customerId);
              $.cookie('userNum',response.body.phoneNumber);
              $.cookie('loginSuccess',response.body.loginSuccess);
              location.href = '/module/success.html';
              $.cookie("frequency","first");
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
      }
    },
    FocusPhide (){
      this.Pshow = false;
      this.Perror = false;
    },
    FocusWhide (){
      this.Wshow = false;
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.Land_body
  position:relative
  input
    font-size:14px
  .el-input
    margin-left:58px
    width:260px
    height:40px
    border:1px solid #eee
    border-radius:5px
    .el-input__inner
      height:40px
  .el-input
    margin-bottom:19px
  .PhoneShow
    position:absolute
    top: 10px
    right: -70px
    font-size:14px
    color:#b14343
  .PasswordShow
    position:absolute
    top: 72px
    right: 0px
    font-size:14px
    color:#b14343
  .Forget
    position:absolute
    right: 78px
    bottom: 90px
    color:#777
  .login
    margin:56px 0 0 58px
    cursor:pointer
    width:260px
    height:40px
    line-height:40px
    background:#3183e7
    color:#fff
    text-align:center
    border-radius:5px
</style>
