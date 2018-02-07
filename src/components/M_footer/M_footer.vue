<template>
  <div class="">
    <div class="index-footer">
      <div class="index-footer-conten">
        <div class="footer-title">
          <div class="title-left">
            <img src="../../common/img/icon-logo-white-1@2x.png" alt="" class="title-logo">
          </div>
          <div class="title-right">
            <span class="right-font">英文站点</span>
            <a href="https://www.careerchina.com" class="right-email" target="_blank">www.careerchina.com</a>
          </div>
        </div>
        <ul class="footer-SiteMap clear">
          <li class="footer-SiteMap-li" style="width:229px;margin-right:0;">
            <span class="SiteMap-title">联系方式</span>
            <span class="SiteMap-title-a">电话：+86-10-84240926</span>
            <span class="SiteMap-title-a">微信：careerchina01</span>
            <span class="SiteMap-title-a">邮箱：business@careerchina.com</span>
            <span class="SiteMap-title-a" style="margin-bottom: 20px;">地址：北京市朝阳区和平街东土城路8号林达大厦B座5层C室</span>

          </li>
          <li class="footer-SiteMap-li wechat">
            <div class="SiteMap-title-img clear" style="width:65px;text-align:center;">
              <div class="wechatBox">
                <span class="wechat-1"></span>
              </div>
              <span class="SiteMap-title-a" style="font-size:10px;">微信公众号</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-footer-Filing">
      <div class="Filing-content">
        <div class="Filing-content-bottom clear">
          <span class="Filing-1">Copyright © 2017 Career China. 京ICP备16068124号-1</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  $font-weight1 = 100;
  $font-weight2 = 200;
  .index-footer
    width:375px
    background: #232936
    // opacity:.98
    .index-footer-conten
      margin:0 auto
      width:335px
      .footer-title
        height:43px
        border-bottom:1px solid rgba(225,225,225,.08)
        .title-left
          float:left
          margin:13px 0 0 0
          .title-logo
            margin-right:34.5px
            opacity: 0.9
            width:82px
            height:17.5px
            vertical-align:-7px
          .title-font
            opacity: 0.6
            font-family: PingFangSC
            font-size: 10px
            color: #FFFFFF
            font-weight:$font-weight1
        .title-right
          float:right
          .right-font
            margin-right:8px
            opacity: 0.6
            font-family: PingFangSC
            font-size: 14px
            color: #FFFFFF
            font-weight:$font-weight1
            margin:12px 0 0 0
            display:inline-block
          .right-email
            text-decoration:underline
            opacity: 0.9
            font-family: PingFangSC
            font-size: 14px
            color: #FFFFFF
            font-weight:$font-weight1
            margin:10px 0 0 0
            display:inline-block
      .footer-SiteMap
        margin:0 auto
        //width:375px
        position:relative
        .footer-SiteMap-li
          float:left
          margin:20px 108px 0 0
          .SiteMap-title
            margin-bottom:14px
            display:block
            opacity: 0.9
            font-family: PingFangSC
            font-size: 14px
            color: #fff
            font-weight:$font-weight2
          .SiteMap-title-a
            cursor:pointer
            margin-bottom:14px
            display:block
            opacity: 0.6
            font-family: PingFangSC
            font-size: 14px
            color: #FFF
            font-weight:$font-weight1
          .SiteMap-title-img
            margin-bottom:40px
            width:210px
            .wechatBox
              display:block
              margin-right:20px
              margin-bottom:7px
              position:relative
              background:rgba(225,225,225,.18)
              width:65px
              height:65px
              .wechat-1
                position:absolute
                top:50%
                left:50%
                margin:-27.5px 0 0 -27.5px
                width:55px
                height:55px
                background:url('../../common/img/M_img/icon-homecode-1@2x.png') no-repeat
                background-size:contain
        .wechat
          width:65px
          position:absolute
          right: -92px
          top:50px
  .index-footer-Filing
    width:100%
    height:40px
    background: #1F2532
    .Filing-content
      margin:0 auto
      width:375px
      height:40px
      line-height:40px
      .Filing-content-top
        height:48px
        line-height:48px
        border-bottom:1px solid rgba(225,225,225,.08)
        .content-font
          display:inline-block
          width:62px
          opacity: 0.9
          font-family: PingFangSC
          font-size: 12px
          color: #fff
          font-weight:$font-weight1
        .content-a
          opacity: 0.6
          font-family: PingFangSC
          font-size: 12px
          color: #FFFFFF
          font-weight:$font-weight1
      .Filing-content-bottom
        height:40px
        line-height:40px
        text-align: center
        .Filing-1
          opacity: 0.6
          font-family: PingFangSC
          font-size: 12px
          color: #FFFFFF
        .Filing-2
          float:left
          margin:17px 8px 0 0
          width:16px
          height:16px
          background:url('../../common/img/WechatIMG145.png') no-repeat
          background-size:cover
        .Filing-3
          float:left
          opacity: 0.6
          font-family: PingFangSC
          font-size: 12px
          color: #FFFFFF
</style>
