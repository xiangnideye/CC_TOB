<template>
  <div class="terminal_body">
    <div class="header clear" id="header_menu">
      <div class="clear">
        <h1 class="title">
          <a href="terminal.html" class="CCLOGO"></a>
          <i class="HEIGHT"></i>
          <a href="http://www.100tal.com/" class="TALLOGO"></a>
        </h1>
        <span class="Nav_img" @click="GoToM_Index"></span>
      </div>
    </div>
    <div class="Banner">
        <div class="Banner_inner">
            <p class="F1">做中国更有品质的外教服务</p>
            <p class="F2">让客户招聘外教便捷更有效</p>
        </div>
        <div class="button"><a class="play"  @click="Login">我要外教</a></div>
        <i class="Bg"></i>
    </div>
    <div class="Server" id="Server">
        <div class="P">
            <p class="P1">特色服务</p>
            <p class="P2"><span class="Left"></span> SERVICE <span class="Right"></span> </p>
            <div class="Img"></div>
        </div>
        <div class="Server_main">
            <ul class="S_ul clear">
              <li class="Li_1">
                <i class="S_image"></i>
                <span class="S_title">雇主海外品牌推广</span>
                <p class="S_Content">“酒香也怕巷子深”，吸引心仪的外教，首先要推广自己！我们为用户量身定制360度海外渠道推广方案，树立海外品牌形象，增强品牌吸引力。</p>
              </li>
              <li class="Li_2">
              <i class="S_image"></i>
              <span class="S_title">签证代理服务</span>
              <p class="S_Content">专业的服务在这里！高效、合法、准确的签证全流程是我们对服务的保证；专注招聘符合工作签证的外教，是我们对品质的承诺。</p>
              </li>
              <li class="Li_3">
                <i class="S_image"></i>
                <span class="S_title">招聘代理服务</span>
                <p class="S_Content">  细致的招聘方案，完善的沟通和面试流程，帮助用户轻松快速的锁定心仪的外教。</p>
              </li>
              <li class="Li_4">
                <i class="S_image"></i>
                <span class="S_title">人力派遣管理</span>
                <p class="S_Content">我们提供个性化的外教一站式人力资源服务解决方案，把繁琐复杂的外事工作交给我们专业的团队，让您的精力更聚焦。</p>
              </li>
            </ul>
        </div>
        <div class="button"><a class="play" @click="Login">外教服务申请</a></div>
    </div>
    <div class="Teach" id="Teach">
        <div class="Top_bg"></div>
        <div class="P">
            <p class="P1">强大的技术支持</p>
            <p class="P2"><span class="Left"></span> SUPPORT <span class="Right"></span> </p>
        </div>
        <div class="Tea_main">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <i class="Bg1"></i>
                    <p class="Bg_p">我们提供专业的人力预测方案和海量的合格外教资源，帮助用人单位早储备早安排，确保既不降低要求又能及时到位，同时为用人单位做好核算，不浪费资金，精准服务。</p>
                  </div>
                  <div class="swiper-slide">
                    <i class="Bg2"></i>
                    <p class="Bg_p">采用先进的海外招聘ATS系统和海外招聘呼叫系统，严格执行SOP标准流程，精准对接海外优秀外教资源。</p>
                  </div>
                  <div class="swiper-slide">
                    <i class="Bg3"></i>
                    <p class="Bg_p">通过自主研发的外教EHR管理系统，对外教在华工作、生活进行全方位跟踪及管理服务，在降低用户人工成本，提高工作效率的同时，提升用户满意度。</p>
                  </div>
                  <div class="swiper-slide">
                    <i class="Bg4"></i>
                    <p class="Bg_p">通过签证管理服务系统，用户可以全程监管招聘服务流程，及时跟进服务状态。</p>
                  </div>
                  <div class="swiper-slide">
                    <i class="Bg5"></i>
                    <p class="Bg_p">  我们致力于开发海外优秀外教资源，从源头上解决国内外教紧缺的现状；通过分享我们的外事管理实战经验，与用户一起成长，帮助更多用户走出国门，成为海外知名的中国教育品牌。同时，我们保持着与中国政府主管部门政策上的紧密联系与沟通，第一时间为用户正确解读中国最新的政策法规，在海外传播中国好声音，为中国外教服务行业打造一抹蓝天，成为最受尊敬的外教服务商。</p>
                  </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
              </div>
        </div>
      <div class="button"><a class="play" @click="Login">外教服务申请</a></div>
    </div>
    <div class="Life">
      <div class="P">
          <p class="P1">续航服务</p>
          <p class="P2"><span class="Left"></span> MORE <span class="Right"></span> </p>
      </div>
        <ul class="Life_Ul clear">
          <li class="Li_1">
            <i class="Life_bg"></i>
            <span class="Title">外教招聘培训</span>
            <p class="Life_P">如何成为专业的面试官，如何更好地与目标人卓有成效地进行沟通，如何发问，如何获取有效信息，在单位时间内如何最快对候选人进行筛选和敲定？我们帮您成为专业海外面试官！</p>
          </li>
          <li class="Li_2">
            <i class="Life_bg"></i>
            <span class="Title">签证办理培训</span>
          <p class="Life_P">由于国家对等原则，中国法律法规和不同区域特点，签证办理貌似大同但有很多小异。我们为用人单位提供各种相关培训，帮助机构团队正确解读国家政策，专业办理外籍人来华手续。</p>
          </li>
          <li class="Li_3">
            <i class="Life_bg"></i>
            <span class="Title">外事管理培训</span>
              <p class="Life_P">不是擅长讲英文的人就擅长做管理，不是擅长中国人团队管理的人就管地好外籍团队。我们为您提供外籍团队管理的实操培训，理解文化差异，搭建管理架构，创造最好的外事管理氛围。</p>
          </li>
          <li class="Li_4">
            <i class="Life_bg"></i>
            <span class="Title">海外校招代理</span>
            <p class="Life_P">走出国门，直接建立和海外高校的合作。听起来容易，做起来难。投入高，产出效率低，收获寥寥，需要专业帮助。我们提供海外校招代理业务，配合地面宣传，帮您招募合格外教。</p>
          </li>
          <li class="Li_5">
            <i class="Life_bg"></i>
            <span class="Title">外籍人才招聘会</span>
            <p class="Life_P">定期组织海外优秀人才交流会，为中国教育机构提供人才双选机会；引进海外直接合作招聘资源，协助用人单位提高自主招聘能力。</p>
          </li>
          <li class="Li_6">
            <i class="Life_bg"></i>
            <span class="Title">外事人才交流峰会</span>
            <p class="Life_P">定期为中国教育机构、国内人才服务机构和用人单位提供资源共享、思想交流机会，我们相信一起努力，可以让我们的行业变得更健康更强大！</p>
          </li>
        </ul>
    </div>
    <div class="Team clear" id="Team">
      <div class="P_">
          <p class="P1">精英团队</p>
          <p class="P2"><span class="Left"></span> TEAM <span class="Right"></span> </p>
      </div>
      <div class="swiper-container_ clear ">
          <div class="swiper-wrapper clear">
              <div class="swiper-slide clear">
                <div class="Left">
                    <i class="Pic1"></i>
                    <span class="Title">海外精英团队</span>
                    <p class="P">英美澳加本土面试官：具备多年在华工作和生活经历，与目标外教沟通零时差，无代沟</p>
                </div>
                <div class="Right">
                    <i class="Pic2"></i>
                    <span class="Title">业内资深签证团队</span>
                    <p class="P">熟悉中国法律法规和签证政策，善于对外沟通，专业签证服务全流程</p>
                  </div>
              </div>
              <div class="swiper-slide">
                <div class="Left">
                    <i class="Pic3"></i>
                    <span class="Title">国内资深招聘团队</span>
                    <p class="P">熟悉国内机构招聘需求，深谙机构招聘痛点，完备周到的落地服务</p>
                </div>
                <div class="Right">
                    <i class="Pic4"></i>
                    <span class="Title">品牌宣传和市场推广团队</span>
                    <p class="P">熟悉海内外网络社区，擅长品牌推广、活动策划、发布原创信息，增强用户品牌粘合度</p>
                  </div>
              </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
    </div>
    <div class="MyClient" id="MyClient">
      <div class="P">
          <p class="P1">我们的客户</p>
          <p class="P2"><span class="Left"></span> CLIENTS <span class="Right"></span> </p>
      </div>
      <div class="Image"></div>
      <div class="button"><a class="play" @click="Login" >申请成为客户</a></div>

    </div>
    <div class="abousUs" id="abousUs">
      <div class="P">
          <p class="P1">关于我们</p>
          <p class="P2"><span class="Left"></span> ABOUT US <span class="Right"></span> </p>
      </div>
      <p class="about_p">好未来自2006年成立以来，致力科技推动教育进步，旗下拥有子品牌：学而思培优、学而思网校、爱智康、摩比、乐外教、家长帮、考研帮、高考帮、海边、考满分、励步英语、顺顺留学和CareerChina。2010年，好未来的前身学而思在美国纽交所正式挂牌交易（NYSE:XRS，现已更名为NYSE:TAL），成为国内首家在美上市的中小学教育机构。
        <br>
        <br>
      Career China（法律主体：抹蓝人力资源管理顾问有限公司）成立于2017年2月，作为好未来旗下全资子公司， 致力于为中国教育行业引进海量优秀国际化人才和资源，尤其聚焦为机构提供合法、合格的优秀母语外籍教师，并提供全方位专业人力外包解决方案和相关技术支持。</p>
    </div>
    <div class="Footer">
        <div class="Title"></div>
        <ul class="foot_left clear">
          <li class="about_us">联系我们：</li>
          <li class="email">Email: business@careerchina.com</li>
          <li class="tel">Tel: +86 400-669-7618</li>
          <li class="address">地址：北京市朝阳区和平街东土城路8号林达大厦B座5层C室</li>
          <li class="record">京ICP备16068124号-1</li>
        </ul>
        <div class="foot_right clear">
          <p class="P1">最新外教服务政策信息请关注我们的公众号</p>
          <i class="pic"></i>
          <p class="P2">更多信息请关注我们的英文站点</p>
          <a  href="http://www.careerchina.com" target="_blank" class="P3"><span>www.careerchina.com</span></a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
        OpenMenu:false
    }
  },
  created (){
    ~function () {
      var reg1 = /AppleWebKit.*Mobile/i,
          reg2 = /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/;
      //->条件成立说明当前页面是运行在移动端设备中的
      if (reg1.test(navigator.userAgent) || reg2.test(navigator.userAgent)) {
          //->如果当前页面的URL是PC端项目的地址:我们需要跳转到移动端项目
          if (window.location.href.indexOf("http://business.careerchina.com/module/index.html") >= 0) {
                window.location.href="http://business.careerchina.com/module/terminal.html";
          }
          return;
      }
      //->反之则说明当前的页面是运行在PC端设备中的,如果访问的URL地址是移动端的,我们需要跳转到PC端地址上
      if (window.location.href.indexOf("http://business.careerchina.com/module/terminal.html") >= 0) {
          window.location.href="http://business.careerchina.com/module/index.html";
      }
     }();
  },
  mounted () {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
      });
      var mySwiper1 = new Swiper('.swiper-container_', {
        loop: true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
      });
    },
  methods :{
      open_close (){
        if($(".cd-slideshow-nav").hasClass("nav-open")){
          $(".cd-slideshow-nav").removeClass("nav-open");
          this.OpenMenu = false;
        }else {
          $(".cd-slideshow-nav").addClass("nav-open");
          this.OpenMenu = true;

          // let Height_ = document.documentElement.clientHeight||document.body.clientHeight;
          $(".OpenMenu").css('overflow-y','hidden');
          $(".OpenMenu").css('height','800px');
          $('body,html').css('overflow-y','hidden');
        }
        //移动端区分
        // location.href='/module/signup.html#/Land'
      },
      close (){
        header_menu.style.height='44px';
        $(".cd-slideshow-nav").removeClass("nav-open");
        this.OpenMenu = false;
      },
      Login (){
        if($.cookie('loginSuccess') == 'true'){
            location.href="/module/Login_data.html";
        }else {
            location.href="/module/LoginM.html?state=1";
        }
      },
      GoToM_Index (){
        location.href='/module/M_Index.html';
      }
    }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .terminal_body
    width:100%
    .header
      width:100%
      position:fixed
      background:#fff
      z-index:50
      height:44px
      box-shadow: 5px 2px 13px rgba(0,0,0,.3)
      .title
        margin-top:5px
        margin-left:11px
        float:left
        color:#fff
        .CCLOGO
          display:inline-block
          width:100%
          height:100%
          height:30px
          width:110px
          background:url('../../ilb/image/icon-logo-1.png') no-repeat
          background-size:100% 100%
        .HEIGHT
          display:inline-block
          width:1px
          height:24px
          background:#ddd
          margin:auto 7.5px
        .TALLOGO
          display:inline-block
          width:100%
          height:100%
          height:30px
          width:90px
          background:url('../../ilb/image/icon-logo-2.png') no-repeat
          background-size:100% 100%
      .Nav_img
        position: absolute
        z-index: 2
        top: 12px
        right: 15px
        display:inline-block
        width:20px
        height:16px
        background: url('../../ilb/image/APP/icon-b-mobile-1@2x.png') no-repeat;
        background-position: -57px -28px
        background-size: 150px 110px
      .cd-nav-trigger
          position: absolute
          z-index: 2
          top: 12px
          right: 15px
          height: 25px
          width: 25px
          cursor: pointer
          border: none
          outline: none
          overflow: hidden
          text-indent: 100%
          white-space: nowrap
          color: transparent
      .cd-nav-trigger span, .cd-nav-trigger span::after, .cd-nav-trigger span::before {
            /* used to create the menu icon */
            position: absolute;
            height: 2px;
            width: 18px;
            background-color: #474747;
          }
      .cd-nav-trigger span {
            /* menu icon middle line */
            left: 50%;
            top: 50%;
            bottom: auto;
            right: auto;
            -webkit-transform: translateX(-50%) translateY(-50%);
            -moz-transform: translateX(-50%) translateY(-50%);
            -ms-transform: translateX(-50%) translateY(-50%);
            -o-transform: translateX(-50%) translateY(-50%);
            transform: translateX(-50%) translateY(-50%);
            -webkit-transition: background-color 0.3s;
            -moz-transition: background-color 0.3s;
            transition: background-color 0.3s;
          }
      .cd-nav-trigger span::after, .cd-nav-trigger span::before {
            content: '';
            left: 0;
            -webkit-transition: -webkit-transform 0.3s;
            -moz-transition: -moz-transform 0.3s;
            transition: transform 0.3s;
          }
      .cd-nav-trigger span::before {
            /* menu icon middle top line */
            -webkit-transform: translateY(-6px);
            -moz-transform: translateY(-6px);
            -ms-transform: translateY(-6px);
            -o-transform: translateY(-6px);
            transform: translateY(-6px);
          }
      .cd-nav-trigger span::after {
            /* menu icon middle bottom line */
            -webkit-transform: translateY(6px);
            -moz-transform: translateY(6px);
            -ms-transform: translateY(6px);
            -o-transform: translateY(6px);
            transform: translateY(6px);
          }
      .nav-open .cd-nav-trigger span {
            background-color: transparent;
        }
      .nav-open .cd-nav-trigger span::before {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            background: #fff;
        }
      .nav-open .cd-nav-trigger span::after {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
            background: #fff;
          }
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
            background: url('../../ilb/image/APP/icon-b-mobile.png') no-repeat center
            background-position:-7px -4px
            vertical-align: -4px
          .li_img_2
            background: url('../../ilb/image/APP/icon-b-mobile.png') no-repeat center
            background-position:-36px -4px
            vertical-align: -4px
          .li_img_3
            background: url('../../ilb/image/APP/icon-b-mobile.png') no-repeat center
            background-position:-63px -4px
            vertical-align: -4px
          .li_img_4
              background: url('../../ilb/image/APP/icon-b-mobile.png') no-repeat center
              background-position:-89px -4px
              vertical-align: -4px
          .li_img_5
              background: url('../../ilb/image/APP/icon-b-mobile.png') no-repeat center
              background-position:-117px -4px
              vertical-align: -4px
          .li_img_6
              background: url('../../ilb/image/APP/icon-b-mobile.png') no-repeat center
              background-position:-144px -4px
              vertical-align: -4px
    .Banner
      margin-bottom:45px
      width:100%
      height:235px
      background:#2773c1
      position:relative
      padding-top:44px
      .Banner_inner
        padding-top:50px
        text-align:center
        .F1
          font-size:24px
          color:#fff
          font-weight:600
          margin-bottom:14px
        .F2
          font-size:18px
          color:#dcdada
          margin-bottom:25px
      .button
           position:relative
           z-index:10
           margin:25px auto 77px
           width:125px
           height:35px
           font-size:15px
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
          color:#333
        .P2
            font-size:12px
            color:#333
            text-align:center
            .Left,.Right
              margin-bottom:2px
              display:inline-block
              width:15px
              height:1px
              background:#333
        .Img
          margin:0px 0 35px 0
          width:100%
          height:180px
          background:url("../../ilb/image/bg-1.jpg") no-repeat
          background-size:100% 100%
      .Server_main
        .S_ul
          padding-left:45px
          li
            width:112px
            float:left
            margin-bottom:23px
          .Li_1
            margin-right: 67px
            .S_image
              display:block
              margin:0 auto 5px
              width:50px
              height:45px
              background:url("../../ilb/image/icon-home.png") no-repeat
              background-position:-24px -261px
            .S_title
              margin-bottom:18px
              text-align:center
              display:block
              font-size:14px
              color:#40bdf2
              text-align:center
            .S_Content
              font-size:12px
              color:#535353
              line-height:14px
          .Li_2
              .S_image
                  display:block
                  margin:0 auto 5px
                  width:50px
                  height:45px
                  background:url("../../ilb/image/icon-home.png") no-repeat
                  background-position:-240px -261px
                .S_title
                  margin-bottom:18px
                  text-align:center
                  display:block
                  font-size:13px
                  color:#40bdf2
                  text-align:center
                .S_Content
                  font-size:12px
                  color:#535353
                  line-height:14px
          .Li_3
            margin-right: 67px
            .S_image
                  display:block
                  margin:0 auto 5px
                  width:50px
                  height:45px
                  background:url("../../ilb/image/icon-home.png") no-repeat
                  background-position:-170px -261px
                .S_title
                  margin-bottom:18px
                  text-align:center
                  display:block
                  font-size:13px
                  color:#40bdf2
                  text-align:center
                .S_Content
                  font-size:12px
                  color:#535353
                  line-height:14px
          .Li_4
              .S_image
                  display:block
                  margin:0 auto 5px
                  width:50px
                  height:45px
                  background:url("../../ilb/image/icon-home.png") no-repeat
                  background-position:-100px -258px
                .S_title
                  margin-bottom:18px
                  text-align:center
                  display:block
                  font-size:13px
                  color:#40bdf2
                  text-align:center
                .S_Content
                  font-size:12px
                  color:#535353
                  line-height:14px
      .button
                       position:relative
                       z-index:10
                       margin:8px auto 45px
                       width:125px
                       height:35px
                       font-size:15px
                       background:#fff
                       border-radius:4px
                       cursor: pointer
                       box-shadow: 0 20px 45px rgba(0,0,0,0.1)
                       .play
                        display:inline-block
                        color:#2ba0f0
                        text-align:center
                        width:100%
                        height:35px
                        line-height:35px
    .Teach
      overflow:hidden
      position:relative
      width:100%
      height:600px
      .Top_bg
        background:url("../../ilb/image/bg-green.png") no-repeat
        height:274px
        background-size:100% 100%
        width:100%
      .P
          position:absolute
          top:45px
          width:100%
          .P1
            font-size:15px
            text-align:center
            margin-bottom:6px
            color:#333
          .P2
              font-size:12px
              color:#333
              text-align:center
              .Left,.Right
                margin-bottom:2px
                display:inline-block
                width:15px
                height:1px
                background:#333
      .swiper-container
        width:100%
        position:absolute
        top:17%
        left:9%
        .swiper-slide
          .Bg1
              display:block
              width:300px
              height:180px
              background:url('../../ilb/image/computer1.png') no-repeat
              background-size:cover
          .Bg2
                display:block
                width:300px
                height:180px
                background:url('../../ilb/image/computer2.png') no-repeat
                background-size:cover
          .Bg3
              display:block
              width:300px
              height:180px
              background:url('../../ilb/image/computer3.png') no-repeat
              background-size:cover
          .Bg4
                display:block
                width:300px
                height:180px
                background:url('../../ilb/image/computer4.png') no-repeat
                background-size:cover
          .Bg5
                display:block
                width:300px
                height:180px
                background:url('../../ilb/image/computer5.png') no-repeat
                background-size:cover
          .Bg_p
            width:220px
            margin: 30px 20px 0px 45px;
            font-size:12px
            color:#4e4d4d
        .swiper-button-prev
          top:65%
          left:0
          background:url('../../ilb/image/jiantou.png') no-repeat
          background-position: -22px -66px
        .swiper-button-next
          left:75% !important
          top:65%
          background: url('../../ilb/image/jiantou.png') no-repeat
          background-position: -90px -66px
      .button
               position:absolute
               bottom: -15px
               left: 50%
               z-index: 10
               margin-left: -62.5px
               margin-bottom: 60px
               width:125px
               height:35px
               font-size:15px
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
    .Life
      margin-top:20px
      width:100%
      background:url('../../ilb/image/zhuceBg.png') no-repeat
      height: 100%
      background-size: cover
      .P
          margin-bottom:25px
          padding-top:45px
          .P1
            font-size:15px
            text-align:center
            margin-bottom:6px
            color:#333
          .P2
              font-size:12px
              color:#333
              text-align:center
              .Left,.Right
                margin-bottom:2px
                display:inline-block
                width:15px
                height:1px
                background:#333
      .Life_Ul
        padding-left:45px
        li
          float:left
          width:112px
          margin-bottom:23px
        .Li_1
          margin-right: 67px
          .Life_bg
            display:block
            margin:0 auto 5px
            width:50px
            height:45px
            background:url("../../ilb/image/icon-home.png") no-repeat
            background-position:-25px -80px
          .Title
              margin-bottom:18px
              text-align:center
              display:block
              font-size:14px
              color:#40bdf2
              text-align:center
          .Life_P
            font-size:12px
            color:#535353
            line-height:14px
        .Li_2
              .Life_bg
                display:block
                margin:0 auto 5px
                width:50px
                height:45px
                background:url("../../ilb/image/icon-home.png") no-repeat
                // background-position:-103px -80px
                background-position:-170px -80px
              .Title
                  margin-bottom:18px
                  text-align:center
                  display:block
                  font-size:14px
                  color:#40bdf2
                  text-align:center
              .Life_P
                font-size:12px
                color:#535353
                line-height:14px
        .Li_3
            margin-right: 67px
            .Life_bg
              display:block
              margin:0 auto 5px
              width:50px
              height:45px
              background:url("../../ilb/image/icon-home.png") no-repeat
              background-position:-100px -80px
            .Title
                margin-bottom:18px
                text-align:center
                display:block
                font-size:14px
                color:#40bdf2
                text-align:center
            .Life_P
              font-size:12px
              color:#535353
              line-height:14px
        .Li_4
            .Life_bg
              display:block
              margin:0 auto 5px
              width:50px
              height:45px
              background:url("../../ilb/image/icon-home.png") no-repeat
              background-position:-245px -82px
            .Title
                margin-bottom:18px
                text-align:center
                display:block
                font-size:14px
                color:#40bdf2
                text-align:center
            .Life_P
              font-size:12px
              color:#535353
              line-height:14px
        .Li_5
            margin-right: 67px
            .Life_bg
              display:block
              margin:0 auto 5px
              width:50px
              height:45px
              background:url("../../ilb/image/icon-home.png") no-repeat
              background-position:-25px -140px
            .Title
                margin-bottom:18px
                text-align:center
                display:block
                font-size:14px
                color:#40bdf2
                text-align:center
            .Life_P
              font-size:12px
              color:#535353
              line-height:14px
        .Li_6
            .Life_bg
              display:block
              margin:0 auto 5px
              width:50px
              height:45px
              background:url("../../ilb/image/icon-home.png") no-repeat
              background-position:-95px -139px
            .Title
                margin-bottom:18px
                text-align:center
                display:block
                font-size:14px
                color:#40bdf2
                text-align:center
            .Life_P
              font-size:12px
              color:#535353
              line-height:14px
    .Team
      position:relative
      background:url('../../ilb/image/heiban.jpg') no-repeat
      overflow:hidden
      .P_
          margin-bottom:25px
          padding-top:45px
          .P1
            font-size:15px
            text-align:center
            margin-bottom:6px
            color:#fff
          .P2
              font-size:12px
              color:#fff
              text-align:center
              .Left,.Right
                margin-bottom:2px
                display:inline-block
                width:15px
                height:1px
                background:#fff
      .swiper-container_
        width:100%
        margin-bottom:27px
        .swiper-slide
          .Left
            margin-left:30px
            float:left
            width:40%
            display:inline-block
            .p
              display:inline-block
              font-size:12px
              color:#fff
              text-align:center
              width:100%
            .Pic1
              margin:auto
              width:80px
              height:80px
              display:block
              background:url("../../ilb/image/pinpai.png") no-repeat
              background-size:100% 100%
            .Pic3
                margin:auto
                width:80px
                height:80px
                display:block
                background:url("../../ilb/image/waishi.png") no-repeat
                background-size:100% 100%
            .Title
              margin:15px 0 8px 0
              display:block
              width:100%
              text-align:center
              font-size:13px
              color:#fff
              font-weight:700
          .Right
            margin-right:30px
            float:right
            width:40%
            display:inline-block
            .Pic2
                margin:auto
                width:80px
                height:80px
                display:block
                background:url("../../ilb/image/qianzheng.png") no-repeat
                background-size:100% 100%
            .Pic4
                    margin:auto
                    width:80px
                    height:80px
                    display:block
                    background:url("../../ilb/image/tuiguang.png") no-repeat
                    background-size:100% 100%
            .Title
                  margin:15px 0 8px 0
                  width:100%
                  display:block
                  text-align:center
                  font-size:13px
                  color:#fff
                  font-weight:700
           .P
              display:inline-block
              font-size:12px
              color:#fff
              text-align:center
              width:100%
        .swiper-button-prev
            top:50%
            height:60px
            background:url('../../ilb/image/jiantou.png') no-repeat
            background-position:-22px -60px
        .swiper-button-next
            top:50%
            height:60px
            background:url('../../ilb/image/jiantou.png') no-repeat
            background-position:-90px -60px
    .MyClient
      margin:45px 0 28px 0
      .P
        margin-bottom:20px
        .P1
          font-size:15px
          text-align:center
          margin-bottom:6px
          color:#333
        .P2
            font-size:12px
            color:#333
            text-align:center
            .Left,.Right
              margin-bottom:2px
              display:inline-block
              width:15px
              height:1px
              background:#333
      .Image
        width:90%
        height:130px
        margin:auto
        background:url('../../ilb/image/icon-clients.png') no-repeat
        background-size:100% 100%
      .button
             position:relative
             z-index:10
             margin:20px auto 45px
             width:125px
             height:35px
             font-size:15px
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
    .abousUs
      width:100%
      background:#f6f6f6
      .P
        margin-bottom:25px
        padding-top:45px
        .P1
          font-size:15px
          text-align:center
          margin-bottom:6px
          color:#333
        .P2
            font-size:12px
            color:#333
            text-align:center
            .Left,.Right
              margin-bottom:2px
              display:inline-block
              width:15px
              height:1px
              background:#333
      .about
        padding-top:25px
        margin-bottom:14px
        font-size:15px
        color:#8e8d8d
        text-align:center
      .about_p
        margin:0 34px
        padding-bottom:45px
        font-size:12px
        color:#3c4188
    .Footer
      height:500px
      background:#49505b
      .Title
        position:relative
        top:20px
        padding-top:45px
        margin:auto
        height:34px
        width:199px
        background:url('../../ilb/image/icon-footer-logo-b.png') no-repeat
      .foot_left
        text-align:center
        width:80%
        margin:auto
        font-size:14px
        li
          margin-bottom: 8px
          color:#a1a1a1
        .about_us
          color:#8a9ab2
      .foot_right
        font-size:14px
        width:80%
        margin:auto
        text-align:center
        .P1,.P2
          color:#dbdada
          margin-bottom:8px
          margin-top:18px
        .pic
          display:inline-block
          width:63px
          height:63px
          background:url("../../ilb/image/pic_.jpg") no-repeat
          background-size:100% 100%
        .P3
            font-size:14px
            display:inline-block
            margin:auto
            color:#000
            background:#fff
            text-align:center
            width:230px
            height:30px
            line-height:30px
            border:1px solid #fff
            border-radius:15px
</style>
