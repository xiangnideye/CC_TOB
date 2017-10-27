<template>
  <div class="server" id="server">
    <div class="server_title">
      <p class="server_title1">特色服务</p>
      <p class="server_title2"><i></i>SERVICE<i></i></p>
    </div>
    <ul class="server_Img">
      <li class="server_1">
        <div class="bg"></div>
        <div class="content">
          <span></span>
          <p>雇主海外品牌推广</p>
          <div class="P_font1">
          “酒香也怕巷子深”，吸引心仪的外教，首先要推广自己！我们为用户量身定制360度海外渠道推广方案，树立海外品牌形象，增强品牌吸引力。
          </div>
        </div>
      </li>
      <li class="server_2">
        <div class="bg"></div>
        <div class="content">
          <span></span>
          <p>人力派遣管理</p>
          <div class="P_font1">
            我们提供个性化的外教一站式人力资源服务解决方案，把繁琐复杂的外事工作交给我们专业的团队，让您的精力更聚焦。
          </div>
        </div>
      </li>
      <li class="server_3">
        <div class="bg"></div>
        <div class="content">
          <span></span>
          <p>招聘代理服务</p>
          <div class="P_font1">
            细致的招聘方案，完善的沟通和面试流程，帮助用户轻松快速的锁定心仪的外教。
          </div>
        </div>
      </li>
      <li class="server_4">
        <div class="bg"></div>
        <div class="content">
          <span></span>
          <p>签证代理服务</p>
          <div class="P_font1">
            专业的服务在这里！高效、合法、准确的签证全流程是我们对服务的保证；专注招聘符合工作签证的外教，是我们对品质的承诺。
          </div>
        </div>
      </li>
    </ul>
     <div class="button"><a class="play" @click="Login1">外教服务申请</a></div>
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
    Login1 (){
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
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .server
    margin:0 auto
    width:1200px
    .server_title
      padding-top: 90px
      text-align:center
      .server_title1
        margin-bottom:16px
        font-size:24px
        color:#333
      .server_title2
        font-size:14px
        margin-bottom:60px
        color:#333
        i
         display:inline-block
         width:30px
         height:1px
         vertical-align: 4px
         margin:0 5px
         background:#333
    .server_Img
      margin: 0 auto;
      height: 360px;
      width: 1028px;
      li
       position:relative
       float:left
       text-align:center
       width:257px
       height:360px
       .bg
         width:100%
         height:100%
         background:#161A1D
         opacity:0.5
         -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
         -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
         -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
         transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
       .content
        position: absolute
        top: 100px
        left: 50%
        width: 100%
        height: 260px
        margin-left: -128px
        -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        .P_font1
         font-size: 14px
         height:30px
         line-height:30px
         color: #fff
         width: 209px
         margin: 26px auto 0
         opacity:0
         -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
         -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
         -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
         transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
      .server_1
        // background:url("../../../ilb/image/server.png") no-repeat
        background:url('../../../ilb/image/bg-service.jpg') no-repeat
        background-position:0 0
        span
          display:inline-block
          width:60px
          height:54px
          background:url("../../../ilb/image/icon-home.png") no-repeat
          background-position:-24px -22px
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        p
          margin-top:24px
          color:#fff
          font-size:24px
      .server_1:hover .bg
        background:#09aee9
        opacity:.85
      .server_1:hover span
        opacity:0
        -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
      .server_1:hover .content
        top: 0
        -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
      .server_1:hover .content .P_font1
        margin-top:22px
        opacity:1
        -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)

      .server_2
        // background:url("../../../ilb/image/server.png") no-repeat
        background:url('../../../ilb/image/bg-service.jpg') no-repeat
        background-position:-257px  0px
        span
          display:inline-block
          width:60px
          height:54px
          background:url("../../../ilb/image/icon-home.png") no-repeat
          background-position:-103px -18px
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
        p
          margin-top:24px
          color:#fff
          font-size:24px
      .server_2:hover .bg
          background:#09aee9
          opacity:.85
      .server_2:hover span
          opacity:0
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
      .server_2:hover .content
          top: 0
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
      .server_2:hover .content .P_font1
          margin-top:22px
          opacity:1
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)


      .server_3
        // background:url("../../../ilb/image/server.png") no-repeat
        background:url('../../../ilb/image/bg-service.jpg') no-repeat
        background-position:-514px  0px
        span
          display:inline-block
          width:60px
          height:54px
          background:url("../../../ilb/image/icon-home.png") no-repeat
          background-position:-170px -19px
        p
          margin-top:24px
          color:#fff
          font-size:24px
      .server_3:hover .bg
          background:#09aee9
          opacity:.85
      .server_3:hover span
          opacity:0
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
      .server_3:hover .content
          top: 0
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
      .server_3:hover .content .P_font1
          margin-top:22px
          opacity:1
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)

      .server_4
        // background:url("../../../ilb/image/server.png") no-repeat
        background:url('../../../ilb/image/bg-service.jpg') no-repeat
        background-position:-772px  0px
        span
          display:inline-block
          width:60px
          height:54px
          background:url("../../../ilb/image/icon-home.png") no-repeat
          background-position:-240px -17px
        p
          margin-top:24px
          color:#fff
          font-size:24px
      .server_4:hover .bg
          background:#09aee9
          opacity:.85
      .server_4:hover span
          opacity:0
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
      .server_4:hover .content
          top: 0
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
      .server_4:hover .content .P_font1
          margin-top:22px
          opacity:1
          -webkit-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -moz-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          -o-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1)
    .button
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
