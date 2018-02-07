<template>
  <!--技术支持-->
  <div id="Technical">
    <v-nav-menu v-show="navHide"></v-nav-menu>
    <div class="nav-second" v-show="secondMenuHide">
      <ul class="nav-second-ul clear">
        <li v-for="(el,index) in navArr" class="second-ul-li"   @click="setScrollHeight(el,index)">
          <a class="second-a" :class="{activeColor:el.isActive}"
          @mouseover="navMouseOver(el,index)"
          @mouseout="navMouseOut(el,index)"
          >{{el.title}}</a>
        </li>
      </ul>
    </div>
    <div class="Technical-header">
      <div class="Technical-header-hs">
        <h2 class="Technical-header-h2">Career China客户关系管理系统</h2>
        <h3 class="Technical-header-h3">通过业内最先进的外教招聘系统，用科技为您打造最优人力资源平台</h3>
      </div>
      <span class="Technical-header-bgFirst"></span>
      <span class="Technical-header-bgSecond"></span>
      <div class="Technical-header-secondaryMenu" v-show="secondaryMenuHide">
        <ul class="Secondary-Menu-ul">
          <li v-for="(aLi,index) in aliArr" class="Secondary-Menu-li" :class="'menuLi'+index"
          @mouseover="mouseOver(aLi,index)"
          @mouseout="mouseOut(aLi,index)"
          @click="setScrollHeight(aLi,index)"
          >
            <a :href="aLi.Href" class="li-href">
              <i class="a-img" :class="aLi.className" :style="{backgroundPositionY:aLi.BGPY}"></i>
              <span class="a-font" :class="{fontClass:aLi.fontClass}">{{aLi.title}}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="Technical-content">
      <div class="Technical-content-Agency" id="content-1">
        <div class="server-list">
          <div class="Agency-left font">
            <span class="title-1">机构信息完善</span>
            <span class="title-2">知您痛点，精准服务</span>
            <span class="title-3">通过在线完善您的企业相关信息，我们将极速响应，为您提供定制化解决方案。</span>
          </div>
          <div class="Agency-right img" >
            <img src="../../common/img/bg-technology-3.png" alt="" class="right-img" :class="{slideInUp:imgHide1}">
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-2">
        <div class="server-list">
          <div class="Agency-left img" >
            <img src="../../common/img/bg-technology-4.png" alt="" class="right-img" :class="{slideInUp:imgHide2}">
          </div>
          <div class="Agency-right font">
            <span class="title-1">岗位详情管理</span>
            <span class="title-2">岗位要求，一站式掌控</span>
            <span class="title-3">精细化的岗位详情描述，事无巨细，只为为您提供最合适的人选。</span>
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-3">
        <div class="server-list">
          <div class="Agency-left font">
            <span class="title-1">招聘需求提交</span>
            <span class="title-2">招聘计划自动化部署，再无后顾之忧</span>
            <span class="title-3">您可以提前在线上部署未来多个月的招聘计划，我们将更周密的筹备，按需匹配。</span>
          </div>
          <div class="Agency-right img">
            <img src="../../common/img/bg-technology-5.png" alt="" class="right-img" style="height:388px;" :class="{slideInUp:imgHide3}">
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-4">
        <div class="server-list">
          <div class="Agency-left img" >
            <img src="../../common/img/bg-technology-6.png" alt="" class="right-img" :class="{slideInUp:imgHide4}">
            <img src="../../common/img/bg-technology-7.png" alt="" class="right-img img-two" :class="{slideInUp2:imgHide8}">
          </div>
          <div class="Agency-right font">
            <span class="title-1">招聘订单管理</span>
            <span class="title-2">实时了解招聘进度，当能运筹帷幄</span>
            <span class="title-3">多视图管理招聘过程中所有细节，招聘状态一目了然。您可以通过状态对所有的招聘详情进行筛选，高效化管理正在进行的招聘流程。</span>
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-5">
        <div class="server-list">
          <div class="Agency-left font" style="margin-right:40px;">
            <span class="title-1">外教在线指派</span>
            <span class="title-2">标准化外教简历，专业评级与评语</span>
            <span class="title-3">所有候选人指派均在线上完成，标准化的简历与行业权威评分，轻松获取外教信息。</span>
          </div>
          <div class="Agency-right img">
            <img src="../../common/img/bg-technology-8.png" alt="" class="right-img" :class="{slideInUp:imgHide5}">
            <img src="../../common/img/bg-technology-9.png" alt="" class="right-img img-two" :class="{slideInUp2:imgHide9}" style="width:275px;height:178px;right:-50px;">
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-6">
        <div class="server-list">
          <div class="Agency-left img">
            <img src="../../common/img/bg-technology-10.png" alt="" class="right-img" :class="{slideInUp:imgHide6}">
          </div>
          <div class="Agency-right font">
            <span class="title-1">线上面试反馈</span>
            <span class="title-2">面试全流程线上化</span>
            <span class="title-3">针对招聘中的外教，您可以直接通过线上反馈筛选及面试结果，省去繁琐沟通。</span>
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-7">
        <div class="server-list">
          <div class="Agency-left font">
            <span class="title-1">微信即时通知</span>
            <span class="title-2">绑定微信服务号，便捷化移动办公</span>
            <span class="title-3">将系统账号绑定微信服务号“外教”，用手机即时接收和管理所有招聘全流程。</span>
          </div>
          <div class="Agency-right img">
            <img src="../../common/img/bg-technology-11.png" alt="" class="right-img" :class="{slideInUp:imgHide7}" style="width:520px;height:391px;">
          </div>
        </div>
      </div>
    </div>
    <div class="Technical-hs">
      <h2 class="Technical-h2">开启智能化外教线上招聘，就在当下</h2>
      <h3 class="Technical-h3">您可立即注册账号体验系统，或直接联系我们
        <span style="color:#ED4E13;">17611670953</span>，为您提供专属体验账号。</h3>
      <span class="Technical-button" @click="getApplication">一键申请</span>
    </div>
    <v-footer></v-footer>
    <v-popups v-show="maskPopUps"></v-popups>
  </div>
</template>

<script>
  import 'common/css/reset.min.css';
  import $ from 'jQuery'
  import nav from '../../components/navmenu/navmenu.vue';
  import popups from '../../components/PopUpsForm/PopUpsForm.vue';
  import footer from 'components/footer/footer.vue';
  import {bus} from '../../common/js/bus.js';

  export default {
    name: 'Technical',
    components: {
      'v-nav-menu':nav,
      'v-footer':footer,
      'v-popups':popups
    },
    data(){
      return {
        navHide:true,
        maskPopUps:false,
        secondaryMenuHide:true,
        secondMenuHide:false,
        imgHide1:false,
        imgHide2:false,
        imgHide3:false,
        imgHide4:false,
        imgHide5:false,
        imgHide6:false,
        imgHide7:false,
        imgHide8:false,
        imgHide9:false,
        aliArr:[
          {
            title:'机构信息',
            className:'img-1',
            Href:'#Information',
            BGPY:'-17px',
            fontClass:false,
            index:0,
            href:'#content-1',
          },
          {
            title:'岗位详情',
            className:'img-2',
            Href:'#Information',
            BGPY:'-17px',
            fontClass:false,
            index:1,
            href:'#content-2',
          },
          {
            title:'外教招聘',
            className:'img-3',
            Href:'#Information',
            BGPY:'-17px',
            fontClass:false,
            index:2,
            href:'#content-3',
          },
          {
            title:'订单管理',
            className:'img-4',
            Href:'#Information',
            BGPY:'-17px',
            fontClass:false,
            index:3,
            href:'#content-4',
          },
          {
            title:'线上指派',
            className:'img-5',
            Href:'#Information',
            BGPY:'-17px',
            fontClass:false,
            index:4,
            href:'#content-5',
          },
          {
            title:'面试反馈',
            className:'img-6',
            Href:'#Information',
            BGPY:'-17px',
            fontClass:false,
            index:5,
            href:'#content-6',
          },
          {
            title:'微信通知',
            className:'img-7',
            Href:'#Information',
            BGPY:'-17px',
            fontClass:false,
            index:6,
            href:'#content-7',
          }
        ],
        navArr:[
          {
            href:'#content-1',
            title:'机构信息',
            isActive:false,
            index:0
          },
          {
            href:'#content-2',
            title:'岗位详情',
            isActive:false,
            index:1
          },
          {
            href:'#content-3',
            title:'外教招聘',
            isActive:false,
            index:2
          },
          {
            href:'#content-4',
            title:'订单管理',
            isActive:false,
            index:3
          },
          {
            href:'#content-5',
            title:'线上指派',
            isActive:false,
            index:4
          },
          {
            href:'#content-6',
            title:'面试反馈',
            isActive:false,
            index:5
          },
          {
            href:'#content-7',
            title:'微信通知',
            isActive:false,
            index:6
          },
        ]
      }
    },
    created(){
      bus.$on('closeIcon',(data)=>{
        this.maskPopUps = data;
      })
    },
    mounted(){
      window.addEventListener('scroll',this.getScroll);
      window.addEventListener('DOMMouseScroll', this.scrollFunc, false);
      window.onmousewheel = document.onmousewheel = this.scrollFunc;
    },
    methods:{
      getApplication(){
        this.maskPopUps = true;
      },
      scrollFunc(e){
        e = e || window.event;
        let ScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
           if (e.wheelDelta > 0) { //当滑轮向上滚动时
              // alert("滑轮向上滚动");
              this.navHide = true;
              this.secondMenuHide = false;
           }
           if (e.wheelDelta < 0 ) { //当滑轮向下滚动时
               //alert("滑轮向下滚动");
               if(ScrollTop >= 766){
                 this.navHide = false;
                 this.secondMenuHide = true;
                  this.secondaryMenuHide = false;
               }else {
                 this.navHide = true;
                 this.secondMenuHide = false;
                 this.secondaryMenuHide = true;
               }
           }
         } else if (e.detail) {  //Firefox滑轮事件
           if (e.detail> 0) { //当滑轮向上滚动时
              // alert("滑轮向上滚动");
              this.navHide = true;
              this.secondMenuHide = false;
           }
           if (e.detail< 0) { //当滑轮向下滚动时
               //alert("滑轮向下滚动");
               if(ScrollTop >= 766){
                 this.navHide = false;
                 this.secondMenuHide = true;
                  this.secondaryMenuHide = false;
               }else {
                 this.navHide = true;
                 this.secondMenuHide = false;
                 this.secondaryMenuHide = true;
               }
           }
         }
      },
      mouseOver(el,index){
        this.aliArr.map((i,index)=>{
          if(el == i){
            el.BGPY = '-59px',
            el.fontClass = true
          }
        })
      },
      mouseOut(el,index){
        this.aliArr.map((i,index)=>{
          if(el == i){
            el.BGPY = '-17px'
            el.fontClass = false
          }
        })
      },
      getScroll (e){
        let ScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(ScrollTop >= 560){
          this.imgHide1 = true;
        }
        if (ScrollTop >= 1125) {
          this.imgHide2 = true;
        }
        if (ScrollTop >= 1675) {
          this.imgHide3 = true;
        }
        if (ScrollTop >= 2245) {
          this.imgHide4 = true;
          this.imgHide8 = true;
        }
        if (ScrollTop >= 2800) {
          this.imgHide5 = true;
          this.imgHide9 = true;
        }
        if (ScrollTop >= 3360) {
          this.imgHide6 = true;
        }
        if (ScrollTop >= 3940) {
          this.imgHide7 = true;
        }
        this.navArr.map((i,index)=>{
          if( (ScrollTop>700) && (ScrollTop<1450)){
            if(index == 0){
              i.isActive = true;
            }else {
              i.isActive = false;
            }
          }
          if((ScrollTop>1450) && (ScrollTop<2000)){
            if(index == 1){
              i.isActive = true;
            }else {
              i.isActive = false;
            }
          }
          if((ScrollTop>2000) && (ScrollTop<2500)){
            if(index == 2){
              i.isActive = true;
            }else {
              i.isActive = false;
            }
          }
          if((ScrollTop>2500) && (ScrollTop<3100)){
            if(index == 3){
              i.isActive = true;
            }else {
              i.isActive = false;
            }
          }
          if((ScrollTop>3100) && (ScrollTop<3700)){
            if(index == 4){
              i.isActive = true;
            }else {
              i.isActive = false;
            }
          }
          if((ScrollTop>3700) && (ScrollTop<4300)){
            if(index == 5){
              i.isActive = true;
            }else {
              i.isActive = false;
            }
          }
          if((ScrollTop>4300) && (ScrollTop<4850)){
            if(index == 6){
              i.isActive = true;
            }else {
              i.isActive = false;
            }
          }
        });
      },
      setScrollHeight(el,index){
        if(index == el.index){
          el.isActive = true;
          $('html,body').animate({
            scrollTop: $(el.href).offset().top - 70
          }, 500)
        }
      },
      navMouseOver(el,index){
        this.navArr.map((i,index)=>{
          if(el == i){
            el.isActive = true
          }
        })
      },
      navMouseOut(el,index){
        this.navArr.map((i,index)=>{
          if(el == i){
            el.isActive = false
          }
        })
      }
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  $font-weight1 = 100;
  $font-weight2 = 200;
  $font-weight3 = 300;
  $font-weight4 = 400;
  #Technical
    min-width:1100px
    background: #F9FAFC
    font-family:PingFang SC,Microsoft YaHei,Hiragino Sans GB,SimSun,sans-serif,Helvetica Neue,Helvetica;
    .nav-second
      position:fixed
      top:0
      left:0
      z-index:500
      width:100%
      height:70px
      background:#fff
      display:flex
      box-shadow: 0 2px 6px 0 rgba(0,0,0,.04)
      .nav-second-ul
        justify-content: flex-center
        -webkit-box-pack: center
        -ms-flex-pack: center
        width:1000px
        margin:0 auto
        height:70px
        .second-ul-li
          float:left
          margin-left:58px
          height:70px
          line-height:70px
          cursor:pointer
          .second-a
            font-size: 16px
            font-weight:$font-weight1
            color: #7F8794
          .activeColor
            color: #2061FF
      .nav-login
        justify-content: flex-end
        -webkit-box-pack: end
        -ms-flex-pack: end
        margin:17px 40px 17px 0
       .nav-login-span
          float:left
          width:90px
          height:36px
          cursor:pointer
          border: 1px solid rgba(255,255,255,.4)
          font-size: 16px
          color: #FFFFFF
          text-align:center
          font-weight:$font-weight2
          line-height:36px
       .nav-login-register
         background: #2061FF
         border:none
       .nav-login-log
         margin-right:20px
         color: #424953
         border:1px solid rgba(66,73,83,.4)
    .Technical-header
      position:relative
      margin-bottom:140px
      width:100%
      height:844px
      background:#fff
      .Technical-header-hs
        margin:0px auto 247px
        padding-top:150px
        width:820px
        text-align:center
        .Technical-header-h2
          font-weight:$font-weight4
          font-size: 30px
          color: #424953
        .Technical-header-h3
          margin-top:20px
          font-weight:$font-weight1
          font-size: 24px
          color: #333333
      .Technical-header-bgFirst
        position:absolute
        top:274px
        left:50%
        margin-left:-416px
        width:854px
        height:514px
        background:url('../../common/img/bg-technology-2.png') no-repeat
        background-size:cover
      .Technical-header-bgSecond
        display:block
        width:100%
        height:373px
        background:url('../../common/img/bg-technology-1.png') no-repeat
        background-size:cover
      .Technical-header-secondaryMenu
        position:absolute
        bottom:-101px
        left:50%
        margin-left:-500px
        width:1000px
        height:110px
        background:#fff
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08)
        .Secondary-Menu-ul
          padding:0px 96px 0
          margin-top:30px
          height:50px
          .Secondary-Menu-li
            float:left
            margin-right:58px
            width:64px
            .li-href
              .a-img
                display:block
                margin-left:18.5px
                width:27px
                height:24px
                background: url("../../common/img/icon-b-2@2x.png") no-repeat -17px -17px
                background-size: 260px 100px !important
              .a-font
                margin:10px auto 0
                display:block
                width:64px
                text-align:center
                font-size: 16px
                color: #7F8794
                font-weight:$font-weight1
              .fontClass
                color: #2061FF
                font-weight:$fong-weight3
              .img-1
                background: url("../../common/img/icon-b-2@2x.png") no-repeat -17px -17px
              .img-2
                background: url("../../common/img/icon-b-2@2x.png") no-repeat -56px -17px
              .img-3
                background: url("../../common/img/icon-b-2@2x.png") no-repeat -91px -17px
              .img-4
                background: url("../../common/img/icon-b-2@2x.png") no-repeat -125px -17px
              .img-5
                background: url("../../common/img/icon-b-2@2x.png") no-repeat -159px -17px
              .img-6
                background: url("../../common/img/icon-b-2@2x.png") no-repeat -193px -17px
              .img-7
                background: url("../../common/img/icon-b-2@2x.png") no-repeat -222px -17px
          .Secondary-Menu-li:nth-child(7)
            margin-right:0
    .Technical-content
      margin:0 auto
      width:100%
      .Technical-content-Agency
        width:100%
        background:#fff
        .server-list
          margin:0 auto 30px
          width:1000px
          height:540px
          overflow:hidden
          .Agency-left
            position:relative
            float:left
            margin-right:90px
            width:300px
            .title-1
              display:block
              font-size: 30px
              color: #424953
            .title-2
              display:block
              margin:20px 0
              font-size: 16px
              color: #424953
            .title-3
              display:block
              font-size: 14px
              color: #7F8794
              font-weight:$font-weight2
            .right-img
               display:inline-block
               width:610px
               height:360px
               opacity:0
            .img-two
             position:absolute
             top:93px
             right:-50px
             width:150px
             height:267px
             display:inline-block
          .img
            margin-top:90px
            width:610px
          .font
            padding-top:205px
            width:300px
          .Agency-right
            position:relative
            float:left
            .title-1
              display:block
              font-size: 30px
              color: #424953
            .title-2
              display:block
              margin:20px 0
              font-size: 16px
              color: #424953
            .title-3
              display:block
              font-size: 14px
              color: #7F8794
              font-weight:$font-weight2
            .right-img
               display:inline-block
               width:610px
               height:360px
               opacity:0
            .img-two
             position:absolute
             top:93px
             right:-50px
             width:150px
             height:267px
             display:inline-block
      @keyframes slideInUp {
        from {
          opacity:0
          transform: translate3d(0, 100%, 0);
          visibility: visible;
        }

        to {
          opacity:1
          transform: translate3d(0, 0, 0);
        }
      }
      @keyframes slideInUp2 {
        from {
          opacity:0
          transform: translate3d(0, 100%, 0);
          visibility: visible;
        }

        to {
          opacity:1
          transform: translate3d(0, 0, 0);
        }
      }
      .slideInUp
        animation: slideInUp 1s forwards
      .slideInUp2
        animation: slideInUp2 1s .5s forwards
    .Technical-hs
      margin:140px auto
      width:615px
      .Technical-h2
        font-weight:$font-weight4
        text-align:center
        font-size: 30px
        color: #424953
      .Technical-h3
        display:block
        margin:30px auto 50px
        font-size: 16px
        font-weight:$font-weight2
        color: #7F8794
      .Technical-button
        display:block
        margin:0 auto
        cursor:pointer
        width:180px
        height:44px
        line-height:44px
        text-align:center
        font-size: 16px
        color: #FFFFFF
        background: #2061FF
</style>
