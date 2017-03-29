<template>
  <div class="Reset" >
      <p class="title" v-show="titleSHow">重置密码</p>
      <div v-show="Reset_1">
        <input type="text" @focus="phoneHide" v-model="UserPhone" class="Phone" placeholder="填写手机号">
        <button id="code" class="code" @click="GetCode" :disabled="boolean" :class="None">{{Code}}</button>
        <p class="PhoneShow" v-show="PhoneShow">请输入正确的手机号码</p>
        <p class="PhoneShow" v-show="Registered">您的手机号已经注册</p>
        <input type="text" @focus="codeHide"  v-model="userCode" class="Pleasecode" placeholder="请输入验证码">
        <p class="CodeShow1" v-show="CodeShow1">验证码不能为空</p>
        <p class="CodeShow2" v-show="CodeShow2">验证码不正确</p>
          <div @click="GoReset" class="Yes">确定</div>
      </div>
      <div v-show="Reset_2">
        <input type="password" class="pass1" placeholder="请输入新密码(8-20位)" v-model="passWOrd1">
        <p class="PhoneShow" v-show="PassShow1">密码不能为空</p>
        <input type="password" class="pass2" placeholder="再次输入新密码" v-model="passWOrd2">
        <p class="PhoneShow" v-show="PassShow2">两次输入密码不一致</p>
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
        Reset_1:true,
        Reset_2:false,
        passWOrd1:'',
        passWOrd2:'',
        userCode:'',
        CodeShow1:false,
        CodeShow2:false,
        Success:false
      }
    },
  methods:{
    GetCode (){
      //验证码
      if(!(/^1[34578]\d{9}$/.test(this.UserPhone))){
          this.PhoneShow = true;
      }else{
        this.$http.post('http://192.168.1.11/cc/to/b/getIdentifyCode.action',{phoneNumber:this.UserPhone,validationCode:'getValidationCode'}).then((response) =>{
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
          this.$http.post('http://192.168.1.11/cc/to/b/identifyCodeValidation.action',{phoneNumber:this.UserPhone,validationCode:this.userCode}).then((response)=>{
            if(response.body.IdentifyCodeCorrect == true){
              $.cookie('phoneNum',this.UserPhone);
              this.Reset_1 = false;
              this.Reset_2 = true;
            }
            // if(response.body.redisNonValue == true){
            //   this.msg="手机号不是获取验证码时用的手机号"
            // }
            // if(response.body.unregist == true){
            //   this.msg="手机号未注册"
            // }
          },(response) =>{
            console.log('错误')
          });

      }
    },
    YesReset (){
      if(this.passWOrd1 != this.passWOrd2){
        this.PassShow2 = true;
      }
      if(this.passWOrd1 == ''){
        this.PassShow1 = true;
      }
      var UserPhone_ = $.cookie('phoneNum');
      if(this.PassShow2 == true || this.PassShow1 == true){
        return false
      }
        this.$http.post('http://192.168.1.11/cc/to/b/updatePwd.action',{phoneNumber:UserPhone_,newPwd:this.passWOrd1}).then((response) =>{
            console.log(response.body)
            this.titleSHow = false;
            this.Reset_2 = false;
            this.Success = true;
        },(response) =>{

        })

    },
    codeHide (){
      this.CodeShow1 = false;
      this.CodeShow2 = false;
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
      top: 64px
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
    .PhoneShow,.CodeShow1,.CodeShow2
      position: absolute
      top:75px
      right: -95px
      font-size:14px
      color:#b14343
    .CodeShow1,.CodeShow2
      top:138px
      right: -55px
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
