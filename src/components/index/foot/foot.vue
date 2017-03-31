<template>
<div class="foot">
  <div class="foot_body">
    <p class="title clear">Career China</p>
    <ul class="foot_left clear">
      <li class="about_us">联系我们：</li>
      <li class="email">Email:service@careerchina.com</li>
      <li class="tel">Tel:+86 10-84240926</li>
      <li class="address">地址：北京市朝阳区和平街东土城路8号林大大厦B座5层C室</li>
      <li class="record">京ICP备16068124号-1</li>
    </ul>
    <div class="foot_right clear">
      <p class="P1">关注公众号</p>
      <i class="pic"></i>
      <p class="P2">更多信息请关注我们的英文站点</p>
      <p class="P3">www.careerchina.com</p>
    </div>
    <span class="Bg"></span>
  </div>
</div>
</template>

<script>

export default {
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.foot
  height:310px
  min-width:1200px
  background:#364350
  .foot_body
    margin:0 auto
    width:1200px
    height:100%
    .title
      float:left
      padding-left:20px
      margin-right:50px
      font-size:36px
      color:#bcbbbb
      height:310px
      line-height:310px
    .foot_left
      float:left
      margin-right:150px
      height:310px
      li
        margin-bottom:22px
        font-size:14px
        color:#bbbbbb
      .about_us
        margin:80px 0 16px 0
        font-size:14px
        color:#707070
    .foot_right
      float:left
      height:310px
      .P1
        margin:70px 0 12px 0
      .P2
        margin-bottom:14px
      .P1,.P2
        color:#dbdada
        font-size:14px
      .pic
        display:inline-block
        margin-bottom:28px
        width:57px
        height:57px
        background:url("../../../ilb/image/icon.png") no-repeat
        background-position:-14px -144px
      .P3
        font-size:18px
        color:#fff
        text-align:center
        width:230px
        height:30px
        line-height:30px
        border:1px solid #fff
        border-radius:15px
    .Bg
      position: absolute
      left: 50%
      margin-left: -430px
      display: inline-block
      width: 860px
      height: 310px
      background:url("../../../ilb/image/yinying.png") no-repeat
</style>
