<template>
  <div class="">
    <div class="index-footer">
      <div class="index-footer-conten">
        <div class="footer-title">
          <div class="title-left">
            <img src="../../common/img/icon-logo-white-1@2x.png" alt="" class="title-logo">
            <span class="title-font">做中国更有品质的外教服务</span>
          </div>
          <div class="title-right">
            <span class="right-font">更多信息请关注我们的英文站点</span>
            <a href="https://www.careerchina.com" class="right-email" target="_blank">www.careerchina.com</a>
          </div>
        </div>
        <ul class="footer-SiteMap clear">
          <li class="footer-SiteMap-li">
            <span class="SiteMap-title">外教招聘</span>
            <a href="RecruitmentProcess.html#serveProcess" class="SiteMap-title-a">服务流程</a>
          </li>
          <li class="footer-SiteMap-li">
            <span class="SiteMap-title">技术支持</span>
            <a href="TechnicalSupport.html" class="SiteMap-title-a">功能介绍</a>
          </li>
          <li class="footer-SiteMap-li">
            <span class="SiteMap-title">人才社区</span>
            <a href="TalentCommunity.html#TalentCommunityHref" class="SiteMap-title-a" v-for="el in TalentArr">{{el.categoryName}}</a>
          </li>
          <li class="footer-SiteMap-li">
            <span class="SiteMap-title">关于我们</span>
            <a href="aboutUs.html?page=1" class="SiteMap-title-a">公司简介</a>
            <a href="aboutUs.html?page=2" class="SiteMap-title-a">团队介绍</a>
            <a href="aboutUs.html?page=3" class="SiteMap-title-a">联系我们</a>
          </li>
          <li class="footer-SiteMap-li" style="width:373px;margin-right:0;">
            <span class="SiteMap-title">联系方式</span>
            <span class="SiteMap-title-a">电话：+86-10-84240926</span>
            <span class="SiteMap-title-a">微信：careerchina01</span>
            <span class="SiteMap-title-a">邮箱：business@careerchina.com</span>
            <span class="SiteMap-title-a">地址：北京市朝阳区和平街东土城路8号林达大厦B座5层C室</span>
            <span class="SiteMap-title-a">关注公众号了解更多外教招聘详情</span>
            <div class="SiteMap-title-img clear">
              <div class="wechatBox">
                <span class="wechat-1"></span>
              </div>
              <div class="wechatBox">
                <span class="wechat-2"></span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-footer-Filing">
      <div class="Filing-content">
        <div class="Filing-content-top">
          <span class="content-font">友情链接：</span>
          <a href="http://www.safea.gov.cn/" class="content-a" target="_blank">国家外国专家局</a>
        </div>
        <div class="Filing-content-bottom clear">
          <span class="Filing-1">Copyright © 2017 Career China. All rights reserved. 京ICP备16068124号-1</span>
          <span class="Filing-2"></span>
          <a class="Filing-3" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502033181" target="_blank">京公网安备11010502033181号</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import cookie from 'jquery.cookie';
import localhost from '../../common/js/public.js'
const access_token = $.cookie('B-access_token');
export default {
  data(){
    return {
      TalentArr:[]
    }
  },
  created(){
    this.$http.get(localhost+'/cc/blog/busi/category/list?access_token='+access_token+'&categoryStatus='+-1).then((response)=>{
      console.log(response.body)
      this.TalentArr = response.body.resultObj;
    });
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  $font-weight1 = 100;
  $font-weight2 = 200;
  .index-footer
    width:100%
    background: #232936
    font-family:PingFang SC,Microsoft YaHei,Hiragino Sans GB,SimSun,sans-serif,Helvetica Neue,Helvetica;
    .index-footer-conten
      margin:0 auto
      width:1100px
      .footer-title
        height:87px
        border-bottom:1px solid rgba(225,225,225,.08)
        .title-left
          float:left
          margin:40px 0 0 0
          .title-logo
            margin-right:20px
            opacity: 0.9
            width:127px
            height:27px
            vertical-align:-7px
          .title-font
            opacity: 0.6
            font-size: 14px
            color: #FFFFFF
            font-weight:$font-weight1
        .title-right
          float:right
          margin:40px 0 0 0
          .right-font
            margin-right:10px
            opacity: 0.6
            font-size: 12px
            color: #FFFFFF
            font-weight:$font-weight1
          .right-email
            text-decoration:underline
            opacity: 0.9
            font-size: 14px
            color: #FFFFFF
            font-weight:$font-weight1
      .footer-SiteMap
        margin:0 auto
        width:1100px
        .footer-SiteMap-li
          float:left
          margin:32px 108px 0 0
          width:56px
          .SiteMap-title
            margin-bottom:24px
            display:block
            opacity: 0.9
            font-size: 14px
            color: #fff
            font-weight:$font-weight2
          .SiteMap-title-a
            //cursor:pointer
            margin-bottom:18px
            display:block
            opacity: 0.6
            font-size: 14px
            color: #FFF
            font-weight:$font-weight1
          .SiteMap-title-img
            margin-bottom:40px
            width:210px
            .wechatBox
              float:left
              margin-right:20px
              position:relative
              background:rgba(225,225,225,.18)
              width:70px
              height:70px
              .wechat-1,.wechat-2
                position:absolute
                top:50%
                left:50%
                margin:-30px 0px 0 -30px
                width:60px
                height:60px
                background:url('../../common/img/icon-b-1.png') no-repeat
                background-position:-337px -167px
              .wechat-2
                background-position:-427px -167px
  .index-footer-Filing
    width:100%
    height:99px
    background: #1F2532
    .Filing-content
      margin:0 auto
      width:1000px
      height:99px
      .Filing-content-top
        height:48px
        line-height:48px
        border-bottom:1px solid rgba(225,225,225,.08)
        .content-font
          display:inline-block
          width:62px
          opacity: 0.9
          font-size: 12px
          color: #fff
          font-weight:$font-weight1
        .content-a
          opacity: 0.6
          font-size: 12px
          color: #FFFFFF
          font-weight:$font-weight1
      .Filing-content-bottom
        height:50px
        line-height:50px
        .Filing-1
          float:left
          margin-right:50px
          opacity: 0.6
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
          font-size: 12px
          color: #FFFFFF
</style>
