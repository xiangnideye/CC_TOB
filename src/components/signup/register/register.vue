<template>
  <div class="register_body">
    <p class="PPP_">欢迎您选择Career China。注册成为我们用户，您将即刻享有专业的雇主品牌推广和外教招聘相关服务。</p>
    <div class="Position1">
      <el-input v-model="UserPhone" @focus="focusPhoneNumber" placeholder="请输入手机号" id="PHONE"></el-input>
      <p class="ResNumber">{{ResNumber}}</p>
    </div>
    <div class="Position">
      <el-input v-model="phoneCode" @focus="focusNumberCode" :maxlength="4" placeholder="请输入验证码"></el-input>
      <button id="code" class="code" @click="GetCode" :disabled="boolean" :class="None">{{Code}}</button>
      <span class="CodeMask" v-show='CodeMask'></span>
      <p class="ResCode">{{ResCode}}</p>
    </div>
    <div class="Position2">
      <el-input type="password" @focus="focusPassword" :maxlength="20" v-model="UserWord" placeholder="请设置密码 (8-20位字符)"></el-input>
      <p class="ResPass">{{ResPass}}</p>
    </div>
    <div class="Position3">
      <el-input v-model="UserName" @focus="focusContactPerson" placeholder="联系人(最大30字符)" :maxlength="30"></el-input>
      <p class="ResUser">{{ResUser}}</p>
    </div>
    <div class="Position4">
      <el-input v-model="ToBName" @focus="focusInstitutionName" placeholder="机构名称(最大50字符)" :maxlength="50"></el-input>
      <p class="ResToB">{{ResToB}}</p>
    </div>
    <div class="Position5">
      <el-input v-model="ToBPhone" @focus="focusContactNumber" placeholder="联系电话(最大50字符)" :maxlength="50"></el-input>
      <p class="ResPhone">{{ResPhone}}</p>
    </div>
    <div class="Position6" >
      <el-input  @focus="focusNumbrCode" placeholder="请输入图片验证码" :maxlength="4" class="CODE_" v-model="CODE"></el-input>
      <div class="" v-show="CODE_HIDE">
        <img :src="CODE_IMG" alt="" class="CODE"  @click="Toupdate">
        <img src="../../../ilb/image/button-reload.png" alt="" class="NEW" @click="Toupdate">
      </div>
      <p class="ErrCode">{{ErrCode}}</p>
      <a @click="getImgCoed" class="GETCode" v-show="FONT">点击获取图片验证码</a>
    </div>
    <div class="logon-mask-parent">
      <div class="login" @click="Register">确认信息无误，注册！</div>
      <span class="Register-mask" v-show="loginMask"></span>
    </div>

  </div>
</template>

<script>
import localhost from '../../../common/js/public.js';
const access_token = $.cookie('B-access_token');

export default {
  creater (){
  },
  data() {
    return {
      loginMask:false,
      CodeMask:false,
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
      ResPhone:'',
      CODE_IMG:'',
      CODE:'',
      ErrCode:'',
      CODE_HIDE:false,
      FONT:true
    }
  },
  methods: {
    //获取短信验证码
    GetCode() {
      if (!(/^1[34578]\d{9}$/.test(this.UserPhone))) {
        this.ResNumber = '请输入您的手机号';
      } else {
        if(!this.CodeMask){
          this.CodeMask = true;
        }
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
            this.ResNumber = '您的手机号已经注册';
          };
        });
      }
    },
    //获取图片验证码
    getImgCoed (){
      if (!(/^1[34578]\d{9}$/.test(this.UserPhone))) {
        this.ResNumber = '请输入您的手机号';
      }else {
        let Timer = new Date().getTime();
          this.FONT = false;
          this.CODE_HIDE = true;
          this.CODE_IMG=localhost+'/cc/account/image/verifycode?phoneNumber='+this.UserPhone+'&Time='+Timer+'&access_token='+access_token;
      }
    },
    //刷新图片验证码
    Toupdate (){
      let timer = new Date().getTime();
      this.CODE_IMG=localhost+'/cc/account/image/verifycode?phoneNumber='+this.UserPhone+'&Time='+timer+'&access_token='+access_token;
    },
    //注册
    Register() {
      if (!(/^1[34578]\d{9}$/.test(this.UserPhone))) {
        this.ResNumber = '请输入您的手机号';
      }
      if (!Number(this.phoneCode) || (this.phoneCode).length != 4) {
        this.ResCode = '请输入您收到的验证码';
      }
      if (!((this.UserWord).length >= 8&& (this.UserWord).length <= 20)) {
        this.ResPass = '请设置密码(长度8-20位)';
      }
      if (this.UserName === '') {
        this.ResUser = '您的姓名';
      }
      if (this.ToBName === '') {
        this.ResToB = '您的公司或学校名称';
      }
      if (this.ToBPhone === '') {
        this.ResPhone = '您的联系电话'
      }
      if(this.CODE === ''){
        this.ErrCode='请输入图片验证码'
      }
      if (this.ResNumber === '' && this.ResCode === '' && this.ResPass === '' && this.ResUser === '' && this.ResToB === '' && this.ResPhone === '') {
        this.loginMask = true;
        this.$http.post(localhost+'/cc/account/create', {
          phoneNumber: this.UserPhone,
          password: this.UserWord,
          numIdentifyCode: this.phoneCode,
          customerName: this.ToBName,
          contactPerson: this.UserName,
          contactNumber: this.ToBPhone,
          imgIdentifyCode:this.CODE,
          access_token:access_token
        },{emulateJSON:true}).then((response) => {
          if(response.body.error_code == 200){
            //登陆
            this.$http.get(localhost+'/cc/account/login?phoneNumber='+this.UserPhone+'&password='+this.UserWord+'&access_token='+access_token).then((response) =>{
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
            this.ErrCode='图片验证码错误';
          }else if (response.body.error_code == 1003) {
            this.ResCode = '验证码错误';
          };
        });
      }
    },
    focusPhoneNumber() {
      this.ResNumber = '';
    },
    focusNumberCode() {
      this.ResCode = '';
    },
    focusPassword() {
      this.ResPass = '';
    },
    focusContactPerson() {
      this.ResUser = '';
    },
    focusInstitutionName() {
      this.ResToB = '';
    },
    focusContactNumber() {
      this.ResPhone = '';
    },
    focusNumbrCode (){
      this.ErrCode = ''
    },

  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.register_body
  position:relative
  .PPP_
    color:#777
    margin-bottom:30px
    text-align:center
    line-height:20px
  .Position,.Position1,.Position2,.Position3,.Position4,.Position5,.Position6
    position:relative
  input
    margin-bottom:19px
  .CODE
    width:100px
    height:40px
    position:absolute
    top:0
    right:112px
    cursor:pointer
  .NEW
    width:25px
    height:25px
    position:absolute
    top:9px
    right:80px
    cursor:pointer
  .CODE_
    width:120px !important
    .el-input
      width:100%
  p
    font-size:14px
    color:#b14343
  .el-input
    margin-left:58px
    margin-bottom:12px
    width:260px
    height:40px
    border:1px solid #eee
    border-radius:5px
    .el-input__inner
      height:40px
  .ResNumber,.ResCode,.ResPass,.ResUser,.ResToB,.ResPhone,.ErrCode
    width:155px
    position:absolute
    top:12px
    right:-85px
  .CodeMask
    width:105px
    height:40px
    background:red
    opacity:0
    position:absolute
    top:1px
    right:81px
    z-index:1000
  .GETCode
    width:155px
    position:absolute
    top:15px
    right:55px
    cursor:pointer
    font-size:13px
    color:#b1b1b1
  .GETCode:hover
      text-decoration: underline
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
  .logon-mask-parent
    position:relative
    .login
      margin:20px 0 0 58px
      cursor:pointer
      width:260px
      height:40px
      line-height:40px
      background:#3183e7
      color:#fff
      text-align:center
      border-radius:5px
      margin-bottom:100px
    .Register-mask
      position:absolute
      top:0
      left:0
      z-index:100
      width:100%
      cursor:pointer
      height:40px
  .login:hover
    background:#286cd5
</style>
