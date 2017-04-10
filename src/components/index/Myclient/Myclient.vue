<template>
<div class="Myclient" id="Myclient">
  <div class="Myclient_body">
    <div class="Myclient_title">
      <span>我们的客户</span>
      <p><i></i>CLIENTS<i></i></p>
    </div>
    <div class="slider autoplay">
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-1.png" alt=""></div>
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-2.png" alt=""></div>
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-3.png" alt=""></div>
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-4.png" alt=""></div>
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-5.png" alt=""></div>
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-6.png" alt=""></div>
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-7.png" alt=""></div>
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-8.png" alt=""></div>
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-9.png" alt=""></div>
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-10.png" alt=""></div>
    <div class="bg1"><img src="../../../ilb/image/Banner/icon-institutes-11.png" alt=""></div>

    </div>
     <div class="button"><a class="play" href="/module/signup.html#/Land">成为客户</a></div>
  </div>
</div>
</template>

<script>
import $ from 'jquery';
import  '../../../common/css/slick.css';
 import slick  from '../../../common/js/slick.min.js';

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
    $('.autoplay').slick({

      slidesToShow: 3,

      slidesToScroll: 1,

      autoplay: true,

      autoplaySpeed: 2000,
      arrows:true

    });

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
   .slider
      margin:58px auto 70px
      height:150px
      width:1000px
      .bg1
        img
          width:334px
          height:200px
      .slick-prev
        width:60px
        height:60px
        background:url('../../../ilb/image/jiantou.png') no-repeat
        background-position:-22px -60px
        left:-60px
      .slick-next
        width:60px
        height:60px
        background:url('../../../ilb/image/jiantou.png') no-repeat
        background-position:-60px -60px
        right:-60px
   .button
     position:relative
     z-index:10
     margin:100px auto 60px
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
