<template>
<div class="Myclient" id="Myclient">
  <div class="Myclient_body">
    <div class="Myclient_title">
      <span>我们的客户</span>
      <p><i></i>CLIENTS<i></i></p>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper1"></div>
        <div class="swiper-slide swiper2"></div>
        <div class="swiper-slide swiper3"></div>
        <div class="swiper-slide swiper4"></div>
        <div class="swiper-slide swiper5"></div>
        <div class="swiper-slide swiper6"></div>
        <div class="swiper-slide swiper7"></div>
        <div class="swiper-slide swiper8"></div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
     <div class="button"><a class="play" href="/module/signup.html#/Land" target="_block">客户申请</a></div>
  </div>
</div>
</template>

<script>
import Swiper from "../../../common/js/swiper.min";
import "../../../common/css/swiper.min.css";
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
    }
  },
  data(){
    return {
      formShow:false,
      successShow:false
    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      loop : true,
      slidesPerView : 3,
      centeredSlides : true,
      prevButton:'.swiper-button-prev',
      nextButton:'.swiper-button-next'
    })
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.Myclient
  width:100%
  background:#fff
  .Myclient_body
    width:1200px
    margin:0 auto
   .Myclient_title
    p
     display:inline-block
     margin-top: 16px;
     width:100%
     font-size:14px
     color:#717171
     text-align:center
     i
      display:inline-block
      width:30px
      height:1px
      vertical-align: 4px
      margin:0 5px
      background:#000
    span
     display:block
     padding-top:90px
     text-align:center
     font-size:24px
     color:#5d5d5d
   .swiper-container
      margin:58px auto 70px
      width:1000px
      height:150px
      .swiper-wrapper
        height:100%
        width:100%
        .swiper-slide
          width:250px !important
          height:150px
          margin-right:20px
        .swiper1
          background:url("../../../ilb/image/ToBlogo.png") no-repeat
          background-position: -25px 5px
        .swiper2
          background:url("../../../ilb/image/ToBlogo.png") no-repeat
          background-position: -263px 5px
        .swiper3
          background:url("../../../ilb/image/ToBlogo.png") no-repeat no-repeat
          background-position: -531px 5px
        .swiper4
          background:url("../../../ilb/image/ToBlogo.png") no-repeat
          background-position: -771px 0px
        .swiper5
          background:url("../../../ilb/image/ToBlogo.png") no-repeat
          background-position: 0 -132px
        .swiper6
          background:url("../../../ilb/image/ToBlogo.png") no-repeat
          background-position: -253px -136px
        .swiper7
          background:url("../../../ilb/image/ToBlogo.png") no-repeat
          background-position: -533px -132px
        .swiper8
          background:url("../../../ilb/image/ToBlogo.png") no-repeat
          background-position:-777px -154px
   .button
     margin:59px auto 60px
     width:130px
     height:36px
     background:#fff
     border-radius:4px
     cursor: pointer
     box-shadow: 0 25px 70px rgba(0,0,0,0.3)
     .play
      display:inline-block
      color:#2ba0f0
      text-align:center
      width:100%
      height:36px
      line-height:36px
  .form_body
    position:fixed
    top:0
    left:0
    z-index:100
    width:100%
    height:100%
    background:rgba(000,000,000,.5)
    .Form
      position:fixed
      top:50%
      left:50%
      margin-left:-300px
      margin-top:-250px
      z-index:500
      width:600px
      height:500px
      background:#fff
      .close
          display:inline-block
          width:22px
          height:22px
          position: absolute
          right: 20px
          top: 19px
          background:url("../../../ilb/image/xx.png") no-repeat
        .form_title
          color:#3183e7
          font-size:18px
          text-align:center
          margin:61px 0 31px 0
        .From_Post
          width:281px
          height:334px
          margin:0 auto
          .server
            width:283px
            height:41px
            .Server
              color:#b4b3b3
              width:283px
              option
                color:#000
          .Name,.Photo,.Server,.School,.botton
            width: 263px
            padding-left:18px
            height:41px
            border:1px solid #e4e1e1
            margin-bottom:14px
            border-radius:5px
          .botton
            background:#3183e7
            font-size:16px
            cursor:pointer
            color:#fff
            text-align:center
            height:41px
            line-height:41px
            margin-top:36px
          .Required
              display:none
              font-size:14px
              color:red
              margin-top:10px
              text-align:center
  .form_success
        position:fixed
        top:0
        left:0
        z-index:100
        width:100%
        height:100%
        background:rgba(000,000,000,.5)
        .success
            position:fixed
            top:50%
            left:50%
            margin-left:-300px
            margin-top:-250px
            z-index:500
            width:600px
            height:500px
            background:#fff
            .title
              font-size:30px
              color:#3183e7
              font-weight:600
              text-align:center
              margin:75px 0 17px 0
            .thanks
              display:block
              font-size:18px
              color:#b4b3b3
              text-align:center
              padding:0
            .pic
                display:block
                width:136px
                height:136px
                background:url('../../../ilb/image/yes.png') no-repeat
                background-size:136px 136px
                margin:22px 233px 14px 231px
            .callBack
                display:block
                font-size:14px
                color:#b4b3b3
                text-align:center
                padding:0
            .success_close
                width:289px
                height:40px
                line-height:40px
                text-align:center
                background:#3183e7
                color:#fff
                font-size:16px
                border-radius:5px
                margin:36px 161px 98px 159px
                cursor:pointer

            .close_top
                display:inline-block
                width:22px
                height:22px
                position: absolute
                right: 20px
                top: 19px
                background:url("../../../ilb/image/xx.png") no-repeat
</style>
