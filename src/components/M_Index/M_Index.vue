<template>
  <ul class="OpenMenu">
      <li class="ul_header">
        <span class="close_img" @click="GoToIndex"></span>
        <span class="Head_portrait"></span>
        <div class="cd_ clear">
          <a href="/module/LoginM.html?state=0">登录</a>
          <i style="height:15px;width:1px;background:#fff;float:left;margin-top:5px;opacity:.6;"></i>
          <a href="/module/LoginM.html?state=1">注册</a>
        </div>
      </li>
      <li class="li_" style="padding-top: 10px;"><a href="terminal.html#Server" class="a_"><i class="li_img_1 li_img"></i>首页</a></li>
      <li class="li_"><a href="terminal.html#Server" class="a_"><i class="li_img_2 li_img"></i>服务</a></li>
      <li class="li_"><a href="terminal.html#Teach" class="a_"><i class="li_img_3 li_img"></i>技术支持</a></li>
      <li class="li_"><a href="terminal.html#Team" class="a_"><i class="li_img_4 li_img"></i>团队</a></li>
      <li class="li_"><a href="terminal.html#MyClient" class="a_"><i class="li_img_5 li_img"></i>客户</a></li>
      <li class="li_"><a href="terminal.html#abousUs" class="a_"><i class="li_img_6 li_img"></i>关于我们</a></li>
    </ul>
</template>

<script>
export default {
  methods :{
    GoToIndex (){
      location.href="/module/terminal.html"
    },
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.OpenMenu
  position: fixed
  top: -1px
  left: 0
  width:100%
  border-top: 1px solid #eee
  background:#fff
  height:800px
  .ul_header
    height:194px
    background:#3082e7
    position:relative
    .Head_portrait
      position:absolute
      top:50%
      left:50%
      margin-left:-35px
      margin-top:-35px
      display:inline-block
      width:70px
      height:70px
      border-radius:50%
      background:url('../../ilb/image/APP/icon-login-user@2x.png') no-repeat
      background-size: cover
    .close_img
      position:absolute
      top:10%
      right:7%
      width:16px
      height:16px
      background: url('../../ilb/image/APP/icon-b-mobile-1@2x.png') no-repeat;
      background-position: -87px -28px
      background-size: 150px 110px
    .cd_
      width:100%
      position:absolute
      top:154px
      a
        font-size: 18px
        color: #fff
        width: 49%
        float: left
        text-align: center
  .li_
    height:55px
    line-height:55px
    width:100%
    font-size:18px
    .a_
      color:#474747
      padding-left:24px
      width:90%
      display:inline-block
      height:100%
      font-size:18px
    .li_img
      display:inline-block
      margin-right:19px
      width:23px
      height:23px
    .li_img_1
      background: url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat center
      background-position: -7px -3px
      background-size: 180px 110px
      vertical-align: -4px
    .li_img_2
      background: url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat center
      background-position: -36px -3px
      background-size: 180px 110px
      vertical-align: -4px
    .li_img_3
      background: url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat center
      background-position: -64px -3px
      background-size: 180px 110px
      vertical-align: -4px
    .li_img_4
        background: url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat center
        background-position: -92px -3px
        background-size: 180px 110px
        vertical-align: -4px
    .li_img_5
        background: url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat center
        background-position: -122px -3px
        background-size: 180px 110px
        vertical-align: -4px
    .li_img_6
        background: url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat center
        background-position: -150px -3px
        background-size: 180px 116px
        vertical-align: -4px
</style>
