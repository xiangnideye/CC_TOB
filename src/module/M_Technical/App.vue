<template>
  <!--技术支持-->
  <div id="Technical">
    <v-nav-menu v-show="navHide"></v-nav-menu>
    <div class="Technical-header">
      <div class="Technical-header-hs">
        <h2 class="Technical-header-h2">Career China客户关系管理系统</h2>
        <h3 class="Technical-header-h3">通过业内最先进的外教招聘系统，用科技为您打造最优人力资源战略（平台）</h3>
      </div>
      <span class="Technical-header-bgFirst"></span>
      <span class="Technical-header-bgSecond"></span>
    </div>
    <div class="Technical-content">
      <div class="Technical-content-Agency" id="content-1">
        <div class="server-list">
          <div class="Agency-left font">
            <span class="title-1">机构信息完善</span>
            <span class="title-2">知您痛点，精准服务</span>
            <span class="line"></span>
            <span class="title-3">通过在线完善您的企业相关信息，我们将极速响应，为您提供定制化解决方案。</span>
          </div>
          <div class="Agency-right img" >
            <img src="../../common/img/M_img/m-bg-technology-3@2x.png" alt="" class="right-img" :class="{slideInUp:imgHide1}">
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-2">
        <div class="server-list">
          <div class="Agency-right font clear">
            <span class="title-1">岗位详情管理</span>
            <span class="title-2">岗位要求，一站式掌控</span>
            <span class="line"></span>
            <span class="title-3">精细化的岗位详情描述，事无巨细，只为为您提供最合适的人选。</span>
          </div>
          <div class="Agency-left img" >
            <img src="../../common/img/M_img/m-bg-technology-4@2x.png" alt="" class="right-img" :class="{slideInUp:imgHide2}">
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-3">
        <div class="server-list">
          <div class="Agency-left font">
            <span class="title-1">招聘需求提交</span>
            <span class="title-2">招聘计划自动化部署，再无后顾之忧</span>
            <span class="line"></span>
            <span class="title-3">您可以提前在线上部署未来多个月的招聘计划，我们将更周密的筹备，按需匹配。</span>
          </div>
          <div class="Agency-right img">
            <img src="../../common/img/M_img/m-bg-technology-5@2x.png" alt="" class="right-img" style="height:194px;" :class="{slideInUp:imgHide3}">
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-4">
        <div class="server-list">
          <div class="Agency-right font clear">
            <span class="title-1">招聘订单管理</span>
            <span class="title-2">实时了解招聘进度，当能运筹帷幄</span>
            <span class="line"></span>
            <span class="title-3">多视图管理招聘过程中所有细节，招聘状态一目了然。您可以通过状态对所有的招聘详情进行筛选，高效化管理正在进行的招聘流程。</span>
          </div>
          <div class="Agency-left img" >
            <img src="../../common/img/M_img/m-bg-technology-6@2x.png" alt="" class="right-img" :class="{slideInUp:imgHide4}">
            <img src="../../common/img/M_img/m-bg-technology-7@2x.png" alt="" class="right-img img-two" :class="{slideInUp2:imgHide8}">
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-5">
        <div class="server-list">
          <div class="Agency-left font" style="margin-right:40px;">
            <span class="title-1">外教在线指派</span>
            <span class="title-2">标准化外教简历，专业评级与评语</span>
            <span class="line"></span>
            <span class="title-3">所有候选人指派均在线上完成，标准化的简历与行业权威评分，轻松获取外教信息。</span>
          </div>
          <div class="Agency-right img">
            <img src="../../common/img/M_img/m-bg-technology-8@2x.png" alt="" class="right-img" :class="{slideInUp:imgHide5}">
            <img src="../../common/img/M_img/m-bg-technology-9@2x.png" alt="" class="right-img img-two" :class="{slideInUp2:imgHide9}" style="width:118px;height:69px;right:0px;top:58px;">
          </div>
        </div>
      </div>
      <div class="Technical-content-Agency" id="content-6">
        <div class="server-list">
          <div class="Agency-right font clear">
            <span class="title-1">线上面试反馈</span>
            <span class="title-2">面试全流程线上化</span>
            <span class="line"></span>
            <span class="title-3">针对招聘中的外教，您可以直接通过线上反馈筛选及面试结果，省去繁琐沟通。</span>
          </div>
          <div class="Agency-left img">
            <img src="../../common/img/M_img/m-bg-technology-11@2x.png" alt="" class="right-img" :class="{slideInUp:imgHide6}" style="width:260px;height:195px;">
          </div>
        </div>
      </div>
      <!-- <div class="Technical-content-Agency" id="content-7">
        <div class="server-list">
          <div class="Agency-left font">
            <span class="title-1">微信即时通知</span>
            <span class="title-2">绑定微信服务号，便捷化移动办公</span>
            <span class="line"></span>
            <span class="title-3">将系统账号绑定微信服务号“外教”，用手机即时接收和管理所有招聘全流程。</span>
          </div>
          <div class="Agency-right img">
            <img src="../../common/img/bg-technology-11.png" alt="" class="right-img" :class="{slideInUp:imgHide7}" style="width:520px;height:391px;">
          </div>
        </div>
      </div> -->
    </div>
    <div class="Technical-hs">
      <h2 class="Technical-h2">开启智能化外教线上招聘，就在当下</h2>
      <h3 class="Technical-h3">您可立即注册账号体验系统，或直接联系我们
        <span style="color:#ED4E13;">17611670953</span>，为您提供专属体验账号。</h3>
      <span class="Technical-button" @click="getApplication">一键申请</span>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import 'common/css/reset.min.css';
  import $ from 'jQuery'
  import nav from '../../components/M_navmenu/M_navmenu.vue';
  import {bus} from '../../common/js/bus.js';
  import footer from 'components/M_footer/M_footer.vue';

  export default {
    name: 'Technical',
    components: {
      'v-nav-menu':nav,
      'v-footer':footer,
    },
    data(){
      return {
        navHide:true,
        maskPopUps:false,
        secondaryMenuHide:true,
        secondMenuHide:false,
        imgHide1:true,
        imgHide2:true,
        imgHide3:true,
        imgHide4:true,
        imgHide5:true,
        imgHide6:true,
        imgHide7:true,
        imgHide8:true,
        imgHide9:true,
      }
    },
    created(){
      // bus.$on('closeIcon',(data)=>{
      //   this.maskPopUps = data;
      // })
    },
    mounted(){
      // window.addEventListener('scroll',this.getScroll);
      // window.addEventListener('DOMMouseScroll', this.scrollFunc, false);
      // window.onmousewheel = document.onmousewheel = this.scrollFunc;
    },
    methods:{
      getApplication(){
        location.href="M_formData.html?HrefId="+3
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
    width:375px
    background: #F9FAFC
    font-family:PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif,Helvetica Neue,Helvetica;
    .Technical-header
      position:relative
      margin-bottom:20px
      width:100%
      height:360px
      background:#fff
      .Technical-header-hs
        margin:0px auto 15px
        padding-top:79px
        width:315px
        text-align:center
        .Technical-header-h2
          font-weight:500
          font-size: 17px
          color: #424953
        .Technical-header-h3
          margin-top:12px
          font-weight:300
          font-size: 14px
          color: #333333
      .Technical-header-bgFirst
        position:absolute
        top:164px
        left:50%
        margin-left:-172px
        width:345px
        height:195px
        background:url('../../common/img/M_img/m-bg-technology-2@2x.png') no-repeat
        background-size:cover
      .Technical-header-bgSecond
        display:block
        width:100%
        height:200px
        background:url('../../common/img/M_img/m-bg-technology-1@2x.png') no-repeat
        background-size:cover
    .Technical-content
      margin:0 auto
      width:100%
      .Technical-content-Agency
        width:100%
        background:#fff
        .server-list
          margin:0 auto 20px
          width:305px
          //height:540px
          overflow:hidden
          .Agency-left
            position:relative
            //float:left
            //margin-right:90px
            width:305px
            .title-1
              display:block
              font-size: 16px
              color: #424953
              font-weight:500
            .title-2
              display:block
              margin: 2px 0 10px
              font-size: 14px
              color: #424953
            .line
              display:block
              margin-bottom:9px
              width:17px
              height:1px
              background: #2061FF
            .title-3
              display:block
              font-size: 13px
              color: #7F8794
            .right-img
               display:inline-block
               width:305px
               height:180px
               opacity:0
            .img-two
             position:absolute
             top:109px
             right:0px
             width:75px
             height:134px
             display:inline-block
          .img
            //margin-top:90px
            margin: 25px 0 15px 0
            width:305px
          .font
            //padding-top:205px
            width:305px
            margin: 25px 0 15px 0
          .Agency-right
            margin:25px 0 15px 0
            position:relative
            text-align:right
            //float:left
            .title-1
              display:block
              font-size: 16px
              color: #424953
              font-weight:500
            .title-2
              display:block
              margin: 2px 0 10px
              font-size: 14px
              color: #424953
            .line
              display:block
              margin-bottom:9px
              width:17px
              height:1px
              float:right
              background: #2061FF
            .title-3
              display:block
              float:right
              font-size: 13px
              color: #7F8794
            .right-img
               display:inline-block
               width:305px
               height:180px
               opacity:0
            .img-two
              position:absolute
              top:109px
              right:0px
              width:75px
              height:134px
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
      margin:35px auto 40px
      width:282px
      .Technical-h2
        font-weight:$font-weight5
        text-align:center
        font-size: 17px
        color: #424953
      .Technical-h3
        display:block
        margin:12px auto 30px
        font-size: 14px
        font-weight:$font-weight3
        color: #7F8794
        text-align: center;
      .Technical-button
        display:block
        margin:0 auto
        cursor:pointer
        width:130px
        height:33px
        line-height:33px
        text-align:center
        font-size: 13px
        color: #FFFFFF
        background: #2061FF
</style>
