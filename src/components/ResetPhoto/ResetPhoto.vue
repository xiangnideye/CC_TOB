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
      <i class="Pic"></i>
      <p class="title_3">
        手机号重置成功，新手机号将作为登录账号。
        <br>
        请重新登录
      </p>
      <a href="index.html" class="Ok_">确定</a>
    </div>
  </div>
</template>

<script>
import localhost from '../../common/js/public.js';
const access_token = $.cookie('B-access_token');
const BcustomerId =  $.cookie('B-customerId');
const loginSuccess = $.cookie('loginSuccess');
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
      this.$http.get(localhost+'/cc/account/number/verifycode?phoneNumber='+this.UserPhone+'&access_token='+access_token).then((response) =>{
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
              _this.CodeMask = false;
              _this.boolean = false;
              _this.Code = '重新发送验证码';
              Code.style.backgroundColor = '#0ed666';
            }
          }, 1000);
        }else if (response.body.error_code == 1003) {
          this.NewCode = '您的手机号已经注册';
        };
      });
    },
    phoneHide (){
        this.NewPhoneNumer = '';
    },
    GoReset (){
      if(this.UserPhone == ''){
          this.NewPhoneNumer = '手机号码不能为空';
      }else if(!(/^1[234578]\d{9}$/.test(this.UserPhone))){
          this.NewPhoneNumer ='手机号码格式不正确';
      };
      if (this.userCode=='') {
          this.NewCode = '验证码不能为空';
      }else if(!Number(this.userCode) || (this.userCode).length != 4){
        this.NewCode = '请输入正确的验证码';
      };
      if(this.NewCode == '' && this.NewPhoneNumer == '' ){
          this.$http.post(localhost+'/cc/account/reset/phone',{
            access_token:access_token,
            phoneNumber:this.UserPhone,
            numIdentifyCode:this.userCode
          },{emulateJSON:true}).then((response)=>{
            console.log(response.body)
            if(response.body.error_code == 200){
              this.Reset_1 = false;
              this.Reset_2 = false;
              this.Success = true;
              this.titleSHow = false;
              $.cookie('loginSuccess','false');
              $.cookie('userNum','');
              $.cookie('B-customerId',"");
            }else if(response.body.error_code == 1003){
              this.NewPhoneNumer = '该手机号已绑定，请填写其他手机号';
            }
          });
      }
    },
    YesReset (){
      if(this.PhotoNum == ''){
        this.PhoneNumber_ = ' 手机号不能为空';
      }else if(!(/^1[234578]\d{9}$/.test(this.PhotoNum))){
          this.PhoneNumber_ = '手机号格式不正确';
      }
      if(this.PhotoWord == ''){
        this.PassNumber_ = '密码不能为空';
      }
      if(this.PhoneNumber_ == '' && this.PassNumber_ == ''){
        this.$http.get(localhost+'/cc/account/reset/check?phoneNumber='+this.PhotoNum+'&password='+this.PhotoWord+'&access_token='+access_token).then((response)=>{
          console.log(response.body)
          if(response.body.error_code == 200){
            this.Reset_2 = false;
            this.Reset_1 = true;
          }else if (response.body.error_code == 1001) {
            this.PassNumber_ = '密码错误';
          }else if (response.body.error_code == 1002) {
            this.PhoneNumber_ = '没有账户信息';
          }else if (response.body.error_code == 1003) {
            this.PhoneNumber_ = '您的手机号与登录账号不一致';
          }
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
      margin-bottom:10px
      margin-top:15px
      color:#3183e7
      font-size:18px
      font-weight:600
      text-align:center
    .Link
      background:url('../../ilb/image/cclogo-01.png') no-repeat
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
        margin-top:10px
        margin-bottom:20px
        color:#3183e7
        font-size:18px
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
        margin:25px auto 0
        width:280px
        height:40px
        background:#3183e7
        border-radius:5px
        line-height:40px
        text-align:center
        color:#fff
</style>
