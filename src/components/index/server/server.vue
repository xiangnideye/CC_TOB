<template>
  <div class="server" id="server">
    <div class="server_title">
      <p class="server_title1">服务范围</p>
      <p class="server_title2"><i></i>SERVICE<i></i></p>
    </div>
    <ul class="server_Img">
      <li class="server_1">
        <div class="bg"></div>
        <div class="content">
          <span></span>
          <p>海外雇主品牌推广</p>
          <div class="P_font1">
            “好酒也怕巷子深”，吸引国际化人才，首要推广自己！我们为您提供定制360度渠道推广方案，树立海外雇主品牌形象，从源头上加强海外人才吸引能力。
          </div>
        </div>
      </li>
      <li class="server_2">
        <div class="bg"></div>
        <div class="content">
          <span></span>
          <p>人力派遣管理</p>
          <div class="P_font1">
            我们为您提供外籍人才招聘和管理全包解决方案，包括选拔、面试、签约、签证办理、来华后的管理和服务如薪酬核算、保险、法律法规培训等各种服务。
          </div>
        </div>
      </li>
      <li class="server_3">
        <div class="bg"></div>
        <div class="content">
          <span></span>
          <p>招聘代理服务</p>
          <div class="P_font1">
            专业的沟通和面试流程，可以帮助用人单位很快锁定目标人选。我们为您量身定制招聘方案，开展招聘服务，确保按时提供高质量人选。
          </div>
        </div>
      </li>
      <li class="server_4">
        <div class="bg"></div>
        <div class="content">
          <span></span>
          <p>签证代理服务</p>
          <div class="P_font1">
            外籍人才来华工作，手续繁琐但要求时效性和准确性都很高。我们提供签证服务全流程解决方案和专业咨询服务，不仅授之以鱼，而且授之以渔。
          </div>
        </div>
      </li>
    </ul>
     <div class="button"><a class="play" href="/module/signup.html#/Land" >客户申请</a></div>
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
    height:675px
    .server_title
      padding-top: 67px
      text-align:center
      .server_title1
        margin-bottom:16px
        font-size:24px
      .server_title2
        font-size:14px
        margin-bottom:28px
        i
         display:inline-block
         width:30px
         height:1px
         vertical-align: 4px
         margin:0 5px
         background:#000
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
        background:url("../../../ilb/image/server.png") no-repeat
        span
          display:inline-block
          width:60px
          height:54px
          background:url("../../../ilb/image/icon.png") no-repeat
          background-position:0 0
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
        background:url("../../../ilb/image/server.png") no-repeat
        span
          display:inline-block
          width:60px
          height:54px
          background:url("../../../ilb/image/icon.png") no-repeat
          background-position:-75px 0
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
        background:url("../../../ilb/image/server.png") no-repeat
        span
          display:inline-block
          width:60px
          height:54px
          background:url("../../../ilb/image/icon.png") no-repeat
          background-position:-138px -3px
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
        background:url("../../../ilb/image/server.png") no-repeat
        span
          display:inline-block
          width:60px
          height:54px
          background:url("../../../ilb/image/icon.png") no-repeat
          background-position:-138px -3px
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
     margin:59px auto 77px
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
              .Required1
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
