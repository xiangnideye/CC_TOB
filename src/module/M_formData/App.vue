<template >
  <div class="contactUs-form">
    <div class="" v-if="formHide">
      <span class="close-img" @click="close"></span>
      <div class="contactUs-form-hs">
        <h2 class="contactUs-form-h2">服务申请</h2>
        <h3 class="contactUs-form-h3">SERVICE</h3>
      </div>
      <div class="contactUs-form-content">
        <span class="content-title">请您填写真实信息，我们将有专属客服在1-2个工作日内联系您。Career China不会将您的信息分享、售卖、或交还给任何第三方公司。同时也欢迎您直接联系我们的专属客服17611670953（微信同号）为您提供服务。</span>
        <div class="form-flex">
          <div class="flex-1 clear">
            <input type="text" name="" v-model="valueMechanism" class="mechanism" :placeholder="this.mechanism" :class="{required:isRequired1,border:isBorder1}" @click="focusMechanism" maxlength="50"/>

            <input type="text" name="" v-model="valueName" class="name" :placeholder="this.name" :class="{required:isRequired2,border:isBorder2}"
            @click="focusName" maxlength="25" />
          </div>
          <div class="flex-1 clear">
            <input type="text" name="" v-model="valuePhone" class="phonenumber" :placeholder="this.phonenumber" :class="{required:isRequired3,border:isBorder3}"
            @click="focusPhone" maxlength="25" />

            <input type="text" name="" v-model="valueWechat" class="wechatinput" :placeholder="this.wechat" :class="{required:isRequired4,border:isBorder4}"
            @click="focusWechat" maxlength="25" />

            <input type="text" name="" v-model="valueEmail" class="email" :placeholder="this.email" maxlength="60"
            :class="{required:isRequired5,border:isBorder5}"
            @click="focusEmail"/>
          </div>
          <div class="flex-1 clear">
            <textarea name="name" rows="8" cols="80" :placeholder="this.Related" class="Related" v-model="valueRelated" maxlength="200"></textarea>
          </div>
          <div class="form-button" @click="postData">一键申请</div>
        </div>
      </div>
    </div>
    <div class="success" v-else>
      <span class="close-img" @click="close"></span>
      <span class="close-success"></span>
      <span class="font-span">提交成功</span>
      <span class="font-p">您的专属客服将在1-2个工作日内联系您！</span>
    </div>
  </div>
</template>

<script>
  import localhost from'../../common/js/public.js';
  import $ from 'jquery';
  import cookie from 'jquery.cookie';
  const getQueryString = (name)=>{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }
export default {
  data(){
    return {
      formHide:true,
      mechanism:"您的企业名称 *",
      name:"您的姓名 *",
      phonenumber:"手机 *",
      wechat:"微信号 *",
      email:"邮箱（选填）",
      Related:"您的其它服务要求（选填）",
      valueMechanism:'',
      valueName:'',
      valuePhone:'',
      valueWechat:'',
      valueEmail:'',
      valueRelated:'',
      isRequired1:false,
      isRequired2:false,
      isRequired3:false,
      isRequired4:false,
      isRequired5:false,
      isBorder1:false,
      isBorder2:false,
      isBorder3:false,
      isBorder4:false,
      isBorder5:false,
    }
  },
  methods:{
    close(){
      let QueryString =  getQueryString('HrefId');
      if(QueryString == 1){
        location.href="M_index.html"
      }else if (QueryString == 2) {
        location.href="M_Recruitment"
      }else if (QueryString == 3) {
        location.href="M_Technical.html"
      }
    },
    postData(){
      let regUrl = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if(!this.valueMechanism){
        this.isRequired1 = true;
        this.isBorder1 = true;
        this.mechanism = '请填写机构名称';
      }
      if(!this.valueName){
        this.isRequired2 = true;
        this.isBorder2 = true;
        this.name = '请填写您的姓名';
      }
      if(!this.valuePhone){
        this.isRequired3 = true;
        this.isBorder3 = true;
        this.phonenumber = '请填写您的手机号';
      }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.valuePhone))){
        this.valuePhone = '';
        this.isRequired3 = true;
        this.isBorder3 = true;
        this.phonenumber = '请填写正确的手机号';
      }
      if(!this.valueWechat){
        this.isRequired4 = true;
        this.isBorder4 = true;
        this.wechat = '请填写您的微信账号';
      }
      if(this.valueEmail && !regUrl.test(this.valueEmail)){
        this.isRequired5 = true;
        this.isBorder5 = true;
        this.valueEmail = '';
        this.email = '请填写正确的邮箱';
      }
      if(this.isRequired1 || this.isRequired2 || this.isRequired3 || this.isRequired4 || this.isRequired5){
        return false
      }else{
        this.$http.post(localhost+'/cc/customer/feedback/create',{
          access_token:$.cookie('B-access_token'),
          companyName:this.valueMechanism,
          contactName:this.valueName,
          contactPhone:this.valuePhone,
          wechat:this.valueWechat,
          email:this.valueEmail,
          notes:this.valueRelated,
        },{emulateJSON:true}).then((response)=>{
          if(response.body.error_code == 200){
            this.formHide = false;
          }
          //console.log(response.body)
        })
      };
    },
    focusMechanism(){
      this.isRequired1 = false;
      this.isBorder1 = false;
      this.mechanism = '机构名称 *';
    },
    focusName(){
      this.isRequired2 = false;
      this.isBorder2 = false;
      this.name = '您的姓名 *';
    },
    focusPhone(){
      this.isRequired3 = false;
      this.isBorder3 = false;
      this.phonenumber = '机构手机号名称 *';
    },
    focusWechat(){
      this.isRequired4 = false;
      this.isBorder4 = false;
      this.wechat = '微信账号 *';
    },
    focusEmail(){
      this.isRequired5 = false;
      this.isBorder5 = false;
      this.email = '邮箱（选填）';
    }
  },
}
</script>

<style lang="css">
  .mechanism::-webkit-input-placeholder{
    color:#87888A;
  }
  .required::-webkit-input-placeholder{
    color:#ED4E13;
  }
  .contactUs-form{
    margin:0 auto;
    background: #fff;
    padding-bottom: 30px;
  }
  .contactUs-form-hs{
    padding-top: 35px;
    margin:0 auto;
    width: 180px;
  }
  .contactUs-form-h2{
    font-weight: 400;
    font-size: 17px;
    color: #424953;
    text-align: center;
  }
  .contactUs-form-h3{
    font-weight: 100;
    text-align: center;
    font-size: 8px;
    color: #CFD3D8;
  }
  .content-title{
    display: block;
    font-weight: 300;
    padding-top:25px;
    margin:0px auto 30px;
    width: 305px;
    line-height: 30px;
    font-size: 14px;
    color: #424953;
  }
  .form-flex{
    margin: 0 auto;
    width: 305px;
  }
  .flex-1{

  }
  .mechanism,.name,.phonenumber,.wechatinput,.email,.Related{
    padding-left: 12px;
    margin-bottom: 10px;
    height: 44px;
    background: #F9FAFC;
    width:293px;
    border:none;
    font-size: 14px;
    color: #87888A;
    font-weight: 200;
    display: block;
  }
  .phonenumber{
    margin-left:0px;
  }
  .Related{
    padding-top: 12px;
    width: 293px;
    height: 110px;
    resize:none;
    margin-bottom: 0;
  }
  .border{
    border: 1px solid #ED4E13;
  }
  .success{
    width: 375px;
    min-height: 667px;
    background: #fff;
    position: relative;
  }
  .close-img{
    position: absolute;
    right:22px;
    top:14px;
    width: 17px;
    height: 17px;
    background: url('../../common/img/M_img/icon-aboutus-close@2x.png') no-repeat;
    background-size:contain;
  }
  .close-success{
    position: absolute;
    left:50%;
    top:175px;
    display: block;
    margin-left: -50px;
    width: 100px;
    height: 100px;
    background: url('../../common/img/M_img/m-icon-submit-success@2x.png') no-repeat;
    background-size:contain;
  }
  .font-span{
    position: absolute;
    left:50%;
    top:315px;
    width: 100px;
    margin-left:-50px;
    display: block;
    text-align: center;
    font-size: 17px;
    color: #424953;
  }
  .font-p{
    position: absolute;
    left:50%;
    top:352px;
    display: block;
    width: 270px;
    margin-left:-135px;
    text-align: center;
    font-size: 14px;
    color: #424953;
  }
  .form-button{
    margin: 25px auto 0px;
    width: 130px;
    height: 33px;
    line-height: 33px;
    text-align: center;
    background: #2061FF;
    font-size: 13px;
    cursor: pointer;
    color: #FFFFFF;
  }
</style>
