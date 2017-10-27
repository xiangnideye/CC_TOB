<template>
<div class="foot">
  <div class="foot_body">
    <p class="title clear"></p>
    <ul class="foot_left clear">
      <li class="about_us">联系我们：</li>
      <li class="email">Email: <a href="mailto:business@careerchina.com">business@careerchina.com</a></li>
      <li class="tel">Tel: +86 400-669-7618</li>
      <li class="address">地址：北京市朝阳区和平街东土城路8号林达大厦B座5层C室</li>
      <li class="record" style="margin-bottom:0;">京ICP备16068124号-1</li>
      <li>
        <div style="width:300px;margin-left:0px; padding:20px 0;">
     <a target="_blank"   href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502033181" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="../../../ilb/image/WechatIMG145.png" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#bbb;">京公网安备 11010502033181号</p ></a>
     </div>
      </li>
    </ul>
    <div class="foot_right clear">
      <p class="P1">最新外教招聘政策信息请关注我们的公众号</p>
      <i class="pic"></i>
      <p class="P2">更多信息请关注我们的英文站点</p>
      <a  href="http://www.careerchina.com" target="_blank" class="P3"><span>www.careerchina.com</span></a>
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
  height:340px
  min-width:1200px
  background:#364350
  .foot_body
    margin:0 auto
    width:1200px
    height:100%
    .title
      float:left
      padding-left:20px
      margin-right:18px
      margin-left:96px
      font-size:36px
      color:#bcbbbb
      height:34px
      line-height:310px
      background:url('../../../ilb/image/icon-footer-logo-b.png') no-repeat
      width:199px
      margin-top:131px
    .foot_left
      position:relative
      z-index:20
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
        color:#999
      .email
        a
          color:#bbb
      .email :hover
          text-decoration:underline
    .foot_right
      float:left
      height:310px
      text-align:center
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
        background:url("../../../ilb/image/pic_.jpg") no-repeat
        background-size:100% 100%
      .P3
        position:relative
        z-index:1
        display:inline-block
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
