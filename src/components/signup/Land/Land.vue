<template>
  <div class="Land_body">
    <div class="Login">
      <el-input @focus="FocusPhide" v-model="UserPhone" placeholder="请输入手机号" class="userPhone"></el-input>
      <p class="Prompt_Name">{{Prompt_Name}}</p>
      <el-input @focus="FocusWhide" type="password" v-model="PassWord" placeholder="请输入密码" @change="clearNotice" id="PassWordInput"></el-input>
      <p class="Prompt_Pass">{{Prompt_Pass}}</p>
      <a href="/module/Reset.html" class="Forget">忘记密码</a>
      <div class="login" @click="LoginUp">登录</div>
    </div>
  </div>

</template>

<script>
import localhost from '../../../common/js/public.js';
// const access_token = $.cookie('B-access_token');
// console.log(access_token)

export default {
  mounted (){
    var _this = this;
    window.onkeydown = function (event){
      if(event.keyCode==13){
        _this.LoginUp();
      }
    }
  },
  data (){
    return {
      UserPhone:'',
      PassWord:'',
      Pshow:false,
      Wshow:false,
      DisPlay:true,
      Success_:false,
      Perror:false,
      Prompt_Name:'',
      Prompt_Pass:''
    }
  },
  methods:{
    //登陆
    LoginUp (){
      if(!(/^1[234578]\d{9}$/.test(this.UserPhone))){
        this.Prompt_Name = '请输入正确的手机号码';
      }
      if (!((this.PassWord).length >= 8&& (this.PassWord).length <= 20)) {
        this.Prompt_Pass = '请输入正确的密码';
      }else{
        this.Prompt_Pass = '';
      }
      if((this.Prompt_Name == '') && (this.Prompt_Pass == '')){
        this.$http.get(localhost+'/cc/account/login?phoneNumber='+this.UserPhone+'&password='+this.PassWord+'&access_token='+$.cookie('B-access_token')).then((response) =>{
          if(response.body.error_code == 200){
            console.log(response.body)
            let resData = response.body.resultObj;
            //用户账号
            $.cookie('B-userAccount',this.UserPhone);
            //用户密码
            $.cookie('B-userPassword',this.PassWord);
            //customerId
            $.cookie('B-customerId',resData.customerId);
            //创建时间
            $.cookie('B-createTime',resData.createTime);
            //机构是否审批
            $.cookie('B-custInfoComplete',resData.custInfoComplete);
            //当前登陆的手机号
            $.cookie('userNum', this.UserPhone);
            //是否登陆成功
            $.cookie('loginSuccess', 'true');

            //是否完善所有信息
            $.cookie('basicInfoComplete', resData.basicInfoComplete);
            //是否需要设置空闲时间
            $.cookie('needSetFreeTime', resData.needSetFreeTime);
            if(resData.interviewer){
              //时区
              $.cookie('timezone', resData.interviewer.zone);
              //面试官ID
              $.cookie('interviewId', resData.interviewer.id);
              //是否启用周视图
              $.cookie('isEnable',resData.interviewer.enableRegular);
            }
            //只缺少logo
            $.cookie('oldUserOnlyAbsentLogo', resData.oldUserOnlyAbsentLogo);
            location.href = '/module/login.html#/homePage';
          }else if (response.body.error_code == 1002) {
            this.Prompt_Name = '账号没有注册';
          }else if (response.body.error_code == 1003) {
            this.Prompt_Name = '账号或密码错误';
          }
        });
      }
    },
    FocusPhide (){
      // this.Pshow = false;
      // this.Perror = false;
      this.Prompt_Name = '';
    },
    FocusWhide (){
      // this.Wshow = false;
      this.Prompt_Pass = '';
      this.Prompt_Name = '';
    },
    clearNotice (){
      this.Prompt_Name = '';
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
    margin-bottom:12px
  .PhoneShow
    position:absolute
    top: 10px
    right: -70px
    font-size:14px
    color:#b14343
  .Prompt_Name,.Prompt_Pass
    width:140px
    position:absolute
    top:12px
    right:-70px
    font-size:14px
    color:#b14343
  .Prompt_Pass
    top:67px
  .PasswordShow
    position:absolute
    top: 72px
    right: 0px
    font-size:14px
    color:#b14343
  .Forget
    position:absolute
    right: 78px
    top: 105px
    color:#777
  .login
    margin:30px 0 0 58px
    cursor:pointer
    width:260px
    height:40px
    line-height:40px
    background:#3183e7
    color:#fff
    text-align:center
    border-radius:5px
  .login:hover
    background:#286cd5
</style>
