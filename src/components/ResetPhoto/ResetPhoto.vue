<template>
  <div class="Reset" >
      <p class="title" v-show="titleSHow">重置手机号</p>
      <div v-show="Reset_1">
        <div class="POsition">
          <input type="text" @focus="phoneHide" v-model="UserPhone" class="Phone" placeholder="填写手机号">
          <button id="code" class="code" @click="GetCode" :disabled="boolean" :class="None">{{Code}}</button>
        </div>

        <p class="PhoneShow3" v-show="PhoneShow">请输入正确的手机号码</p>
        <p class="PhoneShow4" v-show="Registered">您的手机号已经注册</p>
        <input type="text" @focus="codeHide"  v-model="userCode" class="Pleasecode" placeholder="请输入验证码">
        <p class="CodeShow1" v-show="CodeShow1">验证码不能为空</p>
        <p class="CodeShow2" v-show="CodeShow2">验证码不正确</p>
          <div @click="GoReset" class="Yes">确定</div>
      </div>
      <div v-show="Reset_2">
        <input type="text" @focus="FocusPhide" class="pass1" placeholder="请输入原手机号" v-model="PhotoNum">
        <p class="PhoneShow" v-show="PassShow1">手机号格式不正确</p>
        <p class="PhoneShow2" v-show="PassShow2">手机号不能为空</p>
        <p class="PhoneShow6" v-show="PassShow6">手机号或者密码不正确</p>
        <input type="password" @focus="FocusWhide" class="pass2" placeholder="请输入密码" v-model="PhotoWord">
        <p class="PhoneShow1" v-show="PassShow3">密码不能为空</p>
        <div class="Yes" @click="YesReset">确定</div>
      </div>
      <div class="Reset_3" v-show="Success">
        <p class="title_3">密码修改成功，请重新登录</p>
        <i class="Pic"></i>
        <a href="/module/index.html" class="Ok_">确定</a>
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
        PhoneShow:false,
        Registered:false,
        Reset_1:false,
        Reset_2:true,
        PhotoWord:'',
        PhotoNum:'',
        userCode:'',
        CodeShow1:false,
        CodeShow2:false,
        PassShow2:false,
        PassShow1:false,
        PassShow3:false,
        PassShow6:false,
        Success:false
      }
    },
  methods:{
    GetCode (){
      //验证码
      if(!(/^1[34578]\d{9}$/.test(this.UserPhone))){
          this.PhoneShow = true;
      }else{
        this.$http.post('http://192.168.1.11/cc/to/b/getResetPhoneIdentifyCode.action',{newPhoneNumber:this.UserPhone,validationCode:'getValidationCode'}).then((response) =>{
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
         },(response) =>{
            console.log('打印错误信息')
         });
      }
    },
    phoneHide (){
      this.PhoneShow = false;
      this.Registered = false;
    },
    GoReset (){
      if(this.UserPhone == ''){
          this.PhoneShow = true;
      }else if(!(/^1[34578]\d{9}$/.test(this.UserPhone))){
          this.Registered = true;
      }
      if (this.userCode=='') {
          this.CodeShow1 = true;
      }
      if(this.PhoneShow == false && this.Registered == false && this.CodeShow1 == false){
          this.$http.post('http://192.168.1.11/cc/to/b/resetAccountPhone.action',{newPhoneNumber:this.UserPhone,identifyCode:this.userCode}).then((response)=>{
            if(response.body.newPhoneNumberResetSuccess == true){
              this.Reset_1 = false;
              this.Reset_2 = false;
              this.Success = true;
            }
          },(response) =>{
            console.log('错误')
          });

      }
    },
    YesReset (){
      if(this.PhotoNum == ''){
        this.PassShow2 = true;
      }else if(!(/^1[34578]\d{9}$/.test(this.PhotoNum))){
          this.PassShow1 = true;
      }
      if(this.PhotoWord == ''){
        this.PassShow3 = true;
      }
      if(this.PassShow1 == true || this.PassShow2 == true){
        return false
      }
        this.$http.post('http://192.168.1.11/cc/to/b/checkPhoneAndPwd.action',{phoneNumber:this.PhotoNum,password:this.PhotoWord}).then((response) =>{
            if(response.body.phoneAndPwdPassCheck == true){
              this.Reset_1 = true;
              this.Reset_2 = false;
              this.Success = false;
            }else{
              this.PassShow6 = true;
            }
        },(response) =>{

        })

    },
    codeHide (){
      this.CodeShow1 = false;
      this.CodeShow2 = false;
    },
    FocusPhide (){
      this.PassShow1 = false;
      this.PassShow2 = false;
      this.PassShow6 = false;
    },
    FocusWhide (){
      this.PassShow3 = false;
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
      margin-bottom:38px
      color:#3183e7
      font-size:18px
      font-weight:600
      text-align:center
    .POsition
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
    .PhoneShow,.CodeShow1,.CodeShow2,.PhoneShow1,.PhoneShow2,.PhoneShow3,.PhoneShow4,.PhoneShow6
      position: absolute
      top:75px
      right: -75px
      font-size:14px
      color:#b14343
    .PhoneShow6
      right:-100px
    .PhoneShow1
      top:140px
      right: -50px
    .PhoneShow2
      right: -65px
    .CodeShow1,.CodeShow2
      top:138px
      right: -55px
    .PhoneShow3
      right:-95px
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
