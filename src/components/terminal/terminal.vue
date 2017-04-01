<template>
  <div class="terminal_body">
    <div class="header clear">
        <h1 class="title"></h1>
        <span class="More"></span>
    </div>
    <div class="Banner">
        <div class="Banner_inner">
            <p class="F1">中国最好的外教服务</p>
            <p class="F2">致力于打通机构与外教的沟通与合作</p>
        </div>
        <div class="Apply">客户申请</div>
        <i class="Bg"></i>
    </div>
    <div class="Server">
        <div class="P">
            <p class="P1">服务范围</p>
            <p class="P2"><span class="Left"></span> server <span class="Right"></span> </p>
        </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .terminal_body
    width:100%
    .header
      width:100%
      height:44px
      background:#eee
      .title
        margin-top:5px
        margin-left:11px
        float:left
        color:#fff
        height:35px
        width:140px
        background:url('../../ilb/image/cc logo-01.png') no-repeat
        background-size:100% 100%
      .More
        float:right
        display:inline-block
        margin: 5px 16px;
        width:35px
        height:35px
        background:url("../../ilb/image/icon-navigation.png") no-repeat
        background-size:100% 100%
    .Banner
      margin-bottom:45px
      width:100%
      height:235px
      background:#2773c1
      position:relative
      .Banner_inner
        padding-top:67px
        text-align:center
        .F1
          font-size:24px
          color:#fff
          font-weight:600
          margin-bottom:14px
        .F2
          font-size:18px
          color:#dcdada
          margin-bottom:35px
      .Apply
        width:125px
        height35px
        background:#fff
        color:#2773c1
        line-height:35px
        text-align:center
        cursor:pointer
        font-size:15px
        margin:auto
        background:#fff
      .Bg
        position:absolute
        bottom: 0
        left: 50%
        width: 80%
        margin-left: -40%
        display:block
        width:80%
        height:50%
        background:url('../../ilb/image/yinying.png') no-repeat
        background-size:100% 100%
    .Server
      width:100%
      .P
        margin-bottom:34px
        .P1
          font-size:15px
          text-align:center
          margin-bottom:6px
          color:#5d5d5d
        .P2
            font-size:12px
            color:#000
            text-align:center
            .Left,.Right
              margin-bottom:2px
              display:inline-block
              width:15px
              height:1px
              background:#000
</style>
