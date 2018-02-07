<template>
  <div class="Pop-up">
    <div class="mask"></div>
    <div class="TalentCommunity-form" v-show="submitHide">
      <div class="contactUs-form">
        <span class="close" @click="clickClose"></span>
        <div class="contactUs-form-hs">
          <h2 class="contactUs-form-h2">服务申请</h2>
          <span class="APPLY">APPLY</span>
          <h3 class="contactUs-form-h3">请您填写真实信息，我们将有专属客服在1-2个工作日内联系您。Career China不会将您的信息分享、售卖、或交还给任何第三方公司。同时也欢迎您直接联系我们的专属客服17611670953（微信同号）为您提供服务。</h3>
        </div>
        <div class="contactUs-form-content">
          <div class="form-flex">
            <div class="flex-1 clear">
              <input type="text" name="" v-model="valueMechanism" class="mechanism" :placeholder="this.mechanism" :class="{required:isRequired1,border:isBorder1}" @click="focusMechanism" maxlength="50"/>

              <input type="text" name="" v-model="valueName" class="name" :placeholder="this.name" :class="{required:isRequired2,border:isBorder2}"
              @click="focusName" maxlength="25" />
            </div>
            <div class="flex-1 clear">
              <input type="text" name="" v-model="valuePhone" class="phonenumber" :placeholder="this.phonenumber" :class="{required:isRequired3,border:isBorder3}"
              @click="focusPhone" maxlength="25" />

              <input type="text" name="" v-model="valueWechat" class="wechat" :placeholder="this.wechat" :class="{required:isRequired4,border:isBorder4}"
              @click="focusWechat" maxlength="25" />

              <input type="text" name="" v-model="valueEmail" class="email" :placeholder="this.email" maxlength="60"
              :class="{required:isRequired5,border:isBorder5}"
              @click="focusEmail"/>
            </div>
            <div class="flex-1 clear">
              <textarea name="name" rows="8" cols="80" :placeholder="this.Related" class="Related" v-model="valueRelated" maxlength="200"></textarea>
            </div>
            <div class="form-button" @click="postData">申请服务</div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-success"  v-show="successHide">
      <span class="close" @click="clickClose"></span>
      <span class="icon"></span>
      <span class="title">提交成功</span>
      <span class="font">您的专属客服将在1-2个工作日内联系您！</span>
    </div>
  </div>
</template>

<script>
  import 'common/css/reset.min.css'
  import Vue from 'vue'
  import VueResource from 'vue-resource'
  import {bus} from '../../common/js/bus.js';
  import localhost from'../../common/js/public.js'
  import $ from 'jquery';
  import cookie from 'jquery.cookie';
  Vue.use(VueResource)
  export default {
    data(){
      return{
        submitHide:true,
        successHide:false,
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
      clickClose(){
        bus.$emit('closeIcon',false)
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
              this.submitHide = false;
              this.successHide = true;
            }
            console.log(response.body)
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
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  .Pop-up
    position:fixed
    top:0
    left:0
    width:100%
    height:100%
    z-index:1000
    .mask
      position:fixed
      top:0
      left:0
      width:100%
      height:100%
      opacity: 0.5
      background: #000000
    .TalentCommunity-form
      position:absolute
      top:50%
      left:50%
      margin-left:-500px
      margin-top:-298px
      height:596px
      width: 1000px
      background:#FFFFFF
      z-index:1000
      .contactUs-form
        .contactUs-form-hs
          position:absolute
          top:60px
          left:50%
          margin-left:-400px
          width: 800px
          .contactUs-form-h2
            font-weight: 400
            font-size: 30px
            color: #424953
            text-align:center
          .contactUs-form-h3
            font-weight: 200
            text-align: center
            font-size: 14px
            color: #424953
            line-height:30px
          .APPLY
            margin:10px auto 30px
            display:block
            font-size: 12px
            color: #CFD3D8
            text-align:center
            font-weight:200
        .close
          position:absolute
          right:26px
          top:26px
          width:30px
          height:30px
          color:#DDE1EB
          cursor:pointer
          background:url('../../common/img/icon-popups-close@2x.png') no-repeat
          background-size:contain
        .contactUs-form-content
          position:absolute
          top:210px
          left:50%
          margin-left:-500px
          background:#fff
          width:1000px
          height:436px
          .form-flex
            margin: 40px auto 0
            width: 680px
           .flex-1
            .mechanism,.name,.phonenumber,.wechat,.email,.Related
              float:left
              padding-left: 18px
              margin-bottom: 20px
              height: 50px
              background: #F9FAFC
              width:450px
              border:none
              font-size: 14px
              color: #87888A
              font-weight: 200
            .phonenumber,.wechat,.email
              margin-left: 10px
              width: 220px
            .phonenumber
              margin-left:0px
            .Related
              padding-top: 18px
              width: 680px
              height: 100px
              resize:none
              margin-bottom: 0
            .name
              margin-left: 10px
              width: 220px
            .border
              border: 1px solid #ED4E13
          .form-button
              margin: 40px auto 0px
              width: 180px
              height: 44px
              line-height: 44px
              text-align: center
              background: #2061FF
              font-size: 16px
              cursor: pointer
              color: #FFFFFF
              font-weight:200
    .form-success
      position:absolute
      top:50%
      left:50%
      margin-left:-380px
      margin-top:-245px
      width:760px
      height:490px
      background:#fff
      text-align:center
      .icon
        display:block
        margin:124px auto 40px
        background:url('../../common/img/icon-submit-success.png') no-repeat
        width:100px
        height:100px
        background-size:cover
      .close
        position:absolute
        top:10px
        right:10px
        width:30px
        height:30px
        background:url('../../common/img/icon-popups-close@2x.png') no-repeat
        background-size:contain
      .title
        display:block
        margin-bottom:20px
        font-size: 30px
        color: #424953
      .font
        font-size: 14px
        color: #424953
        font-weight:300
    .mechanism::-webkit-input-placeholder
      color:#87888A
    .required::-webkit-input-placeholder
      color:#ED4E13
</style>
