<template>
  <div class="">
    <div class="WeChatB" v-show="WeChatBHide">
      <p class="WeChatB-p">已绑定:{{this.phone}}</p>
      <p class="WeChatJ-p">您将收到指派外教通知和订单状态更新通知。</p>
      <div class="WeChatJ-button" @click="ClickCancel">解除绑定</div>
    </div>
    <div class="Success" v-show="WeChatBShow">
      <span class="success-Img"></span>
      <span class="success-Title">解绑成功</span>
      <span class="success-Font">您已成功解绑</span>
      <span class="success-Button" @click="SuccessGoList">确定</span>
    </div>
    <div class="WeChatMask" v-show="MaskHide">
      <div class="mask"></div>
      <div class="Determine">
        <span class="Determine-Title">解绑确认</span>
        <p class="Determine-Content">解绑后，您将不能收到推送的指派外教通知和订单状态更新通知.确认解绑吗？</p>
        <div class="Determine-Button">
          <span class="Determine-Button-left" @click="cancel">取消</span>
          <span class="line"></span>
          <span class="Determine-Button-right" @click="Determine">确认</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import localhost from '../../common/js/public.js';
const access_token = $.cookie('B-access_token');
let getQueryString = (name)=>{
  let reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
};
export default {
  data (){
    return {
      MaskHide:false,
      UserName:'',
      PassWord:'',
      Error_Img1:false,
      Error_Img2:false,
      ErrorPrompt:false,
      UserNamePrompt:false,
      PassWordPrompt:false,
      WeChatBHide:true,
      WeChatBShow:false,
      NameError:'',
      WordError:'',
      openid:getQueryString('openid'),
      phone:getQueryString('phone'),
    }
  },
  created (){

  },
  methods :{
    SuccessCandel (){
      this.$http.post(localhost+'/cc/wechat/unblindWechat',{
        openid:this.openid,
        access_token:access_token
      },{emulateJSON:true}).then((response)=>{
        console.log(response.body)
        if(response.body.error_code === 0){
          this.WeChatBShow = true;
        }else {
          alert(response.body);
        };
      });
    },
    ClickCancel (){
      this.MaskHide = true;
    },
    SuccessGoList (){
      location.href="/module/WeChatB.html?openid="+this.openid+"&access_token="+access_token;
    },
    cancel(){
      this.MaskHide = false;
    },
    Determine (){
      this.WeChatBHide = false;
      this.MaskHide = false;
      this.SuccessCandel();
    },
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .WeChatB
    .WeChatB-p
      margin-top:100px
      text-align:center
      font-size:20px
      color:#474747
    .WeChatJ-p
      margin:20px auto 50px
      font-size:14px
      color:#898989
      text-align:center
    .WeChatJ-button
      width:305px
      margin:0px auto
      background:#3082e7
      text-align:center
      color:#fff
      height:44px
      line-height:44px
      border-radius:4px
      font-size:17px
  .Success
    width:100%
    .success-Img
      width:180px
      height:165px
      display:block
      margin:50px auto 35px
      background:url('../../ilb/image/APP/icon-unbundling@2x.png') no-repeat
      background-size:cover
    .success-Title
      font-size:20px
      text-align:center
      color:#474747
      display:block
      margin-bottom:15px
    .success-Phone
      font-size:14px
      color:#474747
      display:block
      text-align:center
      margin-bottom:15px
    .success-Font
      font-size:14px
      color:#898989
      text-align:center
      margin-bottom:40px
      display:block
    .success-Button
      width:305px
      height:44px
      background:#3082e7
      border-radius:4px
      text-align:center
      line-height:44px
      margin:0 auto
      display:block
      color:#fff
      font-size:17px
  .WeChatMask
    width:100%
    height:100%
    position:fixed
    top:0
    left:0
    .mask
      width:100%
      height:100%
      position:fixed
      top:0
      left:0
      background:#000
      opacity:.6
    .Determine
      position:fixed
      top:170px
      left:50%
      width:320px
      background:#fff
      margin-left:-160px
      border-radius:4px
      .Determine-Title
        font-size:17px
        color:#474747
        text-align:center
        display:block
        margin:30px auto 20px
      .Determine-Content
        font-size:14px
        color:#898989
        text-align:center
        width:270px
        margin:0 auto
        display:block
      .Determine-Button
        width:100%
        height:44px
        line-height:44px
        border-top:1px solid #e3e7ed
        margin-top:30px
        .Determine-Button-left,.Determine-Button-right
          font-size:16px
          float:left
          width:159px
          text-align:center
          color:#8d8d8d
        .Determine-Button-right
          color:#3082e7
          border-left:1px solid #e3e7ed
</style>
