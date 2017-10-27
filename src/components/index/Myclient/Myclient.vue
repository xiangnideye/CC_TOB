<template>
<div class="Myclient" id="Myclient">
  <div class="Myclient_body">
    <div class="Myclient_title">
      <span>我们的客户</span>
      <p><i></i>CLIENTS<i></i></p>
    </div>
    <div class="slider autoplay"></div>

     <div class="button"><a class="play" @click="Login">申请成为客户</a></div>
  </div>
</div>
</template>

<script>

export default {
  methods:{
    showForm() {
      this.formShow = true
    },
    hideForm() {
      this.formShow = false
    },
    successHide() {
      this.successShow = false
    },
    Login (){
      if($.cookie('loginSuccess') == 'true'){
          location.href="/module/login.html#/data";
      }else {
          location.href="/module/signup.html#/register";
      }
    }
  },
  data(){
    return {
      formShow:false,
      successShow:false
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.Myclient
  min-width:1200px
  background:#fff
  .Myclient_body
    width:1200px
    margin:0 auto
   .Myclient_title
    span
      color:#333
    p
     display:inline-block
     margin-top: 16px;
     width:100%
     font-size:14px
     color:#333
     text-align:center
     i
      display:inline-block
      width:30px
      height:1px
      vertical-align: 4px
      margin:0 5px
      background:#333
    span
     display:block
     padding-top:90px
     text-align:center
     font-size:24px
     color:#5d5d5d
   .slider
      margin:40px auto 40px
      height:380px
      width:1100px
      background:url('../../../ilb/image/icon-institutes.jpg') no-repeat
      background-size:100% 100%
   .button
     position:relative
     z-index:10
     margin:60px auto 90px
     width:130px
     height:36px
     background:#fff
     border-radius:4px
     cursor: pointer
     box-shadow: 0 20px 45px rgba(0,0,0,0.1)
     .play
      display:inline-block
      color:#2ba0f0
      text-align:center
      width:100%
      height:36px
      line-height:36px
   .button :hover
      font-size:14px
      font-weight:600
</style>
