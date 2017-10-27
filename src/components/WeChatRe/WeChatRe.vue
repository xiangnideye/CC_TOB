<template>
  <div class="Msignup">
    <div class="tabs clear">
      <div class="A_right">
        <a href="#" class="Right_">注册</a>
      </div>
    </div>
    <div id="tabs-container" class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="content-slide">
              <div class="Register_">
                <p class="Re_p">
                  欢迎您选择Career China。注册成为我们用户，您将即刻享有专业的雇主品牌推广和外教招聘相关服务。
                </p>
                <form class="form_Register">
                  <div class="UserPhoto">
                    <input type="tel" v-model="UserPhoto" placeholder="请输入手机号" class="Input UserPhoto_" @focus="focus_Photo">
                    <i class="Error" v-show="Error_1"></i>
                  </div>
                  <div class="UserNumCode">
                    <input type="tel" v-model="phoneCode" oninput="if(value.length>4)value=value.slice(0,4)" placeholder="请输入验证码" class="Input NumCode" @focus="focus_Numcode">
                    <div id="code" class="Code_" @click="GetNumCode">{{Code}}</div>
                    <i class="Error Error_code" v-show="Error_4"></i>
                    <div class="MASK" v-show="mask"></div>
                  </div>
                  <div class="UserPassWord">
                    <input type="password" v-model="UserPassWord" placeholder="请设置密码（8-20位字符)" class="Input UserPassWord_" @focus="focus_Password" maxlength="20">
                    <i class="Error" v-show="Error_3"></i>
                  </div>
                  <div class="UserPeople">
                    <input type="text" v-model="UserPeople" placeholder="联系人(最大30字符)" class="Input UserPeople_" @focus="focus_People" :maxlength="30">
                    <i class="Error" v-show="Error_4"></i>
                  </div>
                  <div class="mechanism">
                    <input type="text" v-model="mechanism" placeholder="机构名称(最大50字符)" class="Input mechanism_" @focus="focus_Mechanism" :maxlength="50">
                    <i class="Error" v-show="Error_5"></i>
                  </div>
                  <div class="UserPhotoNumber">
                    <input type="tel" v-model="UserPhotoNumber" placeholder="联系电话(最大50字符)" class="Input UserPhotoNumber_" @focus="focus_Photonumber" maxlength="50">
                    <i class="Error" v-show="Error_6"></i>
                  </div>
                  <div class="UserImgCode">
                    <input type="text" v-model="UserImgCode" placeholder="请输入图片验证码" class="Input UserImgCode_" @focus="focus_ImgCode" maxlength="4">
                    <p class="ImgCode_" @click="getImgCode" v-show="ImgFont">点击获取图片验证码</p>
                    <div class="" v-show="GetImgCode">
                      <img :src="CODE_IMG" alt="请输入验证码" class="BackgrounCode"  @click="Toupdate">
                    </div>
                    <i class="Error Error_ImgCode" v-show="Error_7"></i>
                  </div>
                    <button type="button" @click="Register" class="Button">确认信息无误，注册！</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
let getQueryString = (name)=>{
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
import localhost from '../../common/js/public.js';
  export default {
  mounted (){

  },
  data (){
    return {
      LoginHide:true,
      PageNumber:0,
      Code:'获取验证码',
      UserPhoto:'',
      phoneCode:'',
      UserPassWord:'',
      UserPeople:'',
      mechanism:'',
      UserPhotoNumber:'',
      UserImgCode:'',
      UserName:'',
      PassWord:'',
      ImgFont:true,
      GetImgCode:false,
      CODE_IMG:'',
      Error_1:false,
      Error_2:false,
      Error_3:false,
      Error_4:false,
      Error_5:false,
      Error_6:false,
      Error_7:false,
      Error_11:false,
      Error_12:false,
      mask:false
    }
  },
  methods :{
    GetNumCode () {
      //验证码
      if (!(/^1[34578]\d{9}$/.test(this.UserPhoto))) {
        alert('请输入您的手机号');
      } else {
        this.$http.get(localhost+'/cc/account/number/verifycode?phoneNumber='+this.UserPhoto+'&access_token='+access_token).then((response) =>{
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
            alert('您的手机号已经注册');
          };
        });
      }
    },
    Register() {
      if (!(/^1[234578]\d{9}$/.test(this.UserPhoto))) {
          this.Error_1 = true;
          $('.UserPhoto_').css('border','1px solid #ffcfd1');
      }
      if (!Number(this.phoneCode) || (this.phoneCode).length != 4) {
          this.Error_2 = true;
          $('.NumCode').css('border','1px solid #ffcfd1');
      }
      if (!((this.UserPassWord).length >= 8&& (this.UserPassWord).length <= 20)) {
          this.Error_3 = true;
          $('.UserPassWord_').css('border','1px solid #ffcfd1');
      }
      if (this.UserPeople === '') {
          this.Error_4 = true;
          $('.UserPeople_').css('border','1px solid #ffcfd1');
      }
      if (this.mechanism === '') {
          this.Error_5 = true;
          $('.mechanism_').css('border','1px solid #ffcfd1');
      }
      if (this.UserPhotoNumber === '') {
          this.Error_6 = true;
          $('.UserPhotoNumber_').css('border','1px solid #ffcfd1');
      }
      if(this.UserImgCode === ''){
          this.Error_7 = true;
          $('.UserImgCode_').css('border','1px solid #ffcfd1');
      }
      if (this.Error_1 != true && this.Error_2 != true && this.Error_3 != true && this.Error_4 != true && this.Error_5 != true && this.Error_6 != true && this.Error_7 != true) {


        this.$http.post(localhost+'/cc/account/create', {
          phoneNumber: this.UserPhoto,
          password: this.UserPassWord,
          numIdentifyCode: this.phoneCode,
          customerName:  this.UserPeople,
          contactPerson: this.mechanism,
          contactNumber: this.UserImgCode,
          imgIdentifyCode:this.UserImgCode,
          access_token:access_token
        },{emulateJSON:true}).then((response) => {
          console.log(response.body)
          if(response.body.error_code == 200){
            //登陆
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
                $.cookie('userNum', this.UserPhone);
                //是否登陆成功
                $.cookie('loginSuccess', 'true');
                if(response.body.resultObj.approved == false){
                  location.href = '/module/success.html';
                }else {
                  location.href = '/module/index.html';
                };
              }
            });
          }else if (response.body.error_code == 1005) {
            alert('图片验证码错误');
          }else if (response.body.error_code == 1003) {
            alert('验证码错误');
          };
        });
        // this.$http.post(Localhost+'/cc/receiveRegister.action', {
        //   phoneNumber: this.UserPhoto,
        //   password: this.UserPassWord,
        //   validationCode: this.phoneCode,
        //   customerName: this.UserPeople,
        //   contactPerson: this.mechanism,
        //   contactNumber: this.UserImgCode,
        //   verifyCode:this.UserImgCode
        // }).then((response) => {
        //   $.cookie('UUId', response.body.uuid);
        //   if(response.body.registerSuccess == true){
        //     this.$http.post(Localhost+'/cc/receiveLogin.action', {
        //       phoneNumber: this.UserPhoto,
        //       password: this.UserPassWord
        //     }).then((response) => {
        //       $.cookie('UUId', response.body.uuid);
        //       if (response.body.loginSuccess === true && response.body.custComplete === false) {
        //         $.cookie('userId', response.body.customerId);
        //         $.cookie('userNum', response.body.phoneNumber);
        //         $.cookie('loginSuccess', response.body.loginSuccess);
        //         location.href = '/module/mogo_.html';
        //       } else if (response.body.loginSuccess === true && response.body.custComplete === true) {
        //         $.cookie('userId', response.body.customerId);
        //         $.cookie('userNum', response.body.phoneNumber);
        //         $.cookie('loginSuccess', response.body.loginSuccess);
        //         location.href = '/module/terminal.html';
        //       } else if (response.body.loginSuccess === false) {
        //         alert('账号或者密码错误');
        //       }
        //     }, (response) => {
        //
        //     });
        //   }else if(response.body.registerSuccess == false && response.body.validationCodeError== true){
        //     alert('短信验证码错误');
        //   }else if (response.body.registerSuccess == false && response.body.ImageVerifyCodeError== true) {
        //     alert('图片验证码错误');
        //   }
        // }, (response) => {
        // });
      }
    },
    getImgCode (){
      if (!(/^1[34578]\d{9}$/.test(this.UserPhoto))) {
        alert('请输入您的手机号');
      }else {
        let Timer = new Date().getTime();
        this.ImgFont = false;
        this.GetImgCode = true;
        this.CODE_IMG=localhost+'/cc/account/image/verifycode?phoneNumber='+this.UserPhoto+'&Time='+Timer+'&access_token='+access_token;
      }
    },
    Toupdate (){
        let timer = new Date().getTime();
        this.CODE_IMG=localhost+'/cc/account/image/verifycode?phoneNumber='+this.UserPhoto+'&Time='+timer+'&access_token='+access_token;
    },
    LoginUp (){
      if(!(/^1[234578]\d{9}$/.test(this.UserName))){
        this.Error_11 = true;
        $('.UserName_input').css('border','1px solid #ffcfd1');
      }
      if (!((this.PassWord).length >= 8&& (this.PassWord).length <= 20)) {
        this.Error_12 = true;
        $('.PassWord_input').css('border','1px solid #ffcfd1');
      }else{
        this.Error_12 = false;
      }
      if(this.Error_11 != true && this.Error_12  != true){
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
            $.cookie('userNum', this.UserPhone);
            //是否登陆成功
            $.cookie('loginSuccess', 'true');
            location.href = '/module/Login_home.html';
          }else if (response.body.error_code == 1002) {
            alert('账号没有注册');
          }else if (response.body.error_code == 1003) {
            alert('账号或密码错误');
          }
        });
      }
    },
    focus_Photo (){
      this.Error_1 = false;
      this.mask = false;
      $('.UserPhoto_').css('border','none');
    },
    focus_Numcode (){
      this.Error_2= false;
      this.mask = false;
      $('.NumCode').css('border','none');
    },
    focus_Password (){
      this.Error_3 = false;
      $('.UserPassWord_').css('border','none');
    },
    focus_People (){
      this.Error_4 = false;
      $('.UserPeople_').css('border','none');
    },
    focus_Mechanism (){
      this.Error_5 = false;
      $('.mechanism_').css('border','none');
    },
    focus_Photonumber (){
      this.Error_6 = false;
      $('.UserPhotoNumber_').css('border','none');
    },
    focus_ImgCode (){
      this.Error_7 = false;
      $('.UserImgCode_').css('border','none');
    },
    focus_Username (){
      this.Error_11 = false;
      $('.UserName_input').css('border','none');
    },
    focus_PassWord (){
      this.Error_12 = false;
      $('.PassWord_input').css('border','none');
    },
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.Msignup
  height:100%
  .tabs
    margin:0 auto
    width:100%
    height:44px
    background:#3082e7
    text-align: center
    .A_right
      text-align:left
    .A_left,.A_right
      text-align: center
      a
        display:inline-block
        font-size: 18px
        text-align:center
        width:55px
        height: 44px
        line-height: 44px
        color: #fff
  .Login_
    width:305px
    margin:50px auto 0
    height:100%
    .Header_Img
      margin:0 auto 40px
      width:85px
      height:85px
      background:url('../../ilb/image/APP/icon-login-user@2x.png') no-repeat
      background-size:cover
    .form_login
      width:100%
      margin-bottom:25px
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
        .Error
          position:absolute
          top:15px
          right:10px
          display:inline-block
          width:16px
          height:16px
          background:url('../../ilb/image/APP/icon-b-mobile.png') no-repeat
          background-position: -65px -36px
        .UserName_input
          margin-bottom:12px
        .Username_img
            display:inline-block
            position:absolute
            top:13px
            left:13px
            background:url('../../ilb/image/APP/icon-b-mobile.png') no-repeat
            background-position:-6px -34px
            width:20px
            height:20px
            z-index:10
        .PassWord_img
            display:inline-block
            position:absolute
            top:13px
            left:13px
            background:url('../../ilb/image/APP/icon-b-mobile.png') no-repeat
            background-position:-36px -34px
            width:20px
            height:20px
            z-index:10
    .Forgot_password
      margin-bottom:25px
      font-size:14px
      color:#474747
      text-align: right
      width: 100%
      display: inline-block
      cursor:pointer
    .Button
      width:100%
      height:44px
      background:#3082e7
      color:#fff
      text-align:center
      font-size:18px
      line-height:44px
      border-radius:4px
      cursor:pointer
  .Register_
    width:305px
    margin:20px auto 0
    .Re_p
      margin-bottom:20px
      font-size:14px
      color:#474747
    .form_Register
      width:100%
      .UserPhoto,.UserNumCode,.UserPassWord,.UserPeople,.mechanism,.UserPhotoNumber,.UserImgCode
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
          right:126px
        .Error_ImgCode
          right:165px
      .UserNumCode
        position:relative
        .NumCode
          width:180px
        .Code_
          position: absolute
          right: 0
          top: 0
          width:105px
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
      .UserImgCode
        position:relative
        margin-bottom:0
        .UserImgCode_
          width:140px
          height:44px
        .ImgCode_
          position:absolute
          top:0
          right:0
          font-size:16px
          color:#0ed667
          height:44px
          line-height:44px
        .BackgrounCode
          position:absolute
          top:0
          right:45px
      .Button
        margin:25px auto 50px
        width:100%
        height:44px
        line-height:44px
        color:#fff
        text-align:center
        background:#3082e7
        border-radius:4px
        border:none
        font-size: 17px
  ::-ms-input-placeholder{color:#adadad}
  ::-webkit-input-placeholder{color:#adadad}
  ::-moz-placeholder{color:#adadad}
</style>
