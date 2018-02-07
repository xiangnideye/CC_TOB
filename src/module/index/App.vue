<template>
  <div id="index">
    <v-nav-menu></v-nav-menu>
    <div class="index-header">
      <span class="index-header-img"></span>
      <span class="index-header-position"></span>
      <div class="index-header-Hs">
        <h2 class="index-header-h2" style="font-weight:400;">Career China</h2>
        <h3 class="index-header-h3" style="font-weight:100;">做中国更有品质的外教服务</h3>
      </div>
      <div class="inidex-header-botton">
        <a href="signup.html#/register" class="inidex-header-GotoLogin">我要外教</a>
        <div class="index-header-playVideo" @click="playVideo('http://material.careerchina.com/video/c3a88780-4e6d-4fb4-b0d7-eb8ab0c0ad49.mp4')">
          <span class="index-play-span">观看视频</span>
          <i class="index-play-i"></i>
        </div>
      </div>
    </div>
    <div class="index-bg">
      <div class="index-news">
        <div class="index-news-content clear">
          <span class="index-news-span">最新动态</span>
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(swiperList,index) in swiperArr">
                <span class="swiper-span-time">
                  {{swiperList.strUpdateTime}}
                </span>
                <span class="swiper-line"></span>
                <a class="swiper-maxWidth" :href="swiperList.url" target="_blank">
                  {{swiperList.title}}
                </a>
                <i class="swiper-newImg"></i>
              </div>
            </div>
          </div>
          <div class="index-news-Gotomore">
            <a class="index-news-more" href="TalentCommunity.html">MORE</a>
            <i class="inde-news-moreImg"></i>
          </div>
        </div>
      </div>
      <div class="index-server">
        <div class="index-server-title">
          <h2 class="index-server-h2">我们能为你做什么</h2>
          <h3 class="index-server-h3">WHY CHOOSE US</h3>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane :label="TabList.label" :name="TabList.name" v-for="(TabList,index) in TabArr">
            <div class="index-server-content clear">
              <img :src="TabList.imgSrc" alt="" class="index-server-img" :class="{imgCont:TabList.isCont,imgCont3:TabList.isCont3}">
              <ul class="index-server-ulList clear">
                <li v-for="(aLi,index) in TabList.aliArr" class="index-server-List">{{aLi.title}}</li>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="index-server-play" @click='getApplication'>外教服务申请</div>
      </div>
      <div class="index-moreServe">
        <div class="index-moreServe-title">
          <h2 class="index-moreServe-h2">续航服务</h2>
          <h3 class="index-moreServe-h3">MORE</h3>
        </div>
        <ul class="index-moreServe-ulList clear">
          <li class="index-moreServe-li">
            <span class="index-moreServe-img"></span>
            <span class="index-moreServe-span">外教招聘培训</span>
          </li>
          <li class="index-moreServe-li">
            <span class="index-moreServe-img img-2"></span>
            <span class="index-moreServe-span">外事管理培训</span>
          </li>
          <li class="index-moreServe-li">
            <span class="index-moreServe-img img-3"></span>
            <span class="index-moreServe-span">签证办理培训</span>
          </li>
          <li class="index-moreServe-li">
            <span class="index-moreServe-img img-4"></span>
            <span class="index-moreServe-span">海外校招代理</span>
          </li>
          <li class="index-moreServe-li">
            <span class="index-moreServe-img img-5"></span>
            <span class="index-moreServe-span">政策解答咨询</span>
          </li>
          <li class="index-moreServe-li">
            <span class="index-moreServe-img img-6"></span>
            <span class="index-moreServe-span">医疗保险帮扶</span>
          </li>
          <li class="index-moreServe-li">
            <span class="index-moreServe-img img-7"></span>
            <span class="index-moreServe-span">外籍人才招聘会</span>
          </li>
          <li class="index-moreServe-li">
            <span class="index-moreServe-img img-8"></span>
            <span class="index-moreServe-span">外籍人才高峰论坛</span>
          </li>
        </ul>
        <div class="index-server-play" @click='getApplication'>外教服务申请</div>
      </div>
      <div class="index-userSound">
        <div class="index-userSound-title">
          <h2 class="index-userSound-h2">用户的声音</h2>
          <h3 class="index-userSound-h3">COSTOMER</h3>
        </div>
        <div class="index-userSound-bg"></div>
        <div class="swiper-container-1">
          <span class="blurry-left"></span>
          <span class="blurry-left-1"></span>
          <span class="blurry-right"></span>
          <span class="blurry-right-1"></span>
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="swiper-slide-title">
                <span class="title-img first_leap"></span>
                <div class="title-playVideo" @click="playVideo('http://material.careerchina.com/video/b5d295c8-f00a-489c-b5b2-d66e9d0a88f8.mp4')">
                  <span class="title-span">观看视频</span>
                  <i class="title-playIcon"></i>
                </div>
              </div>
              <div class="swiper-slide-content">
                励步英语与Career China从2012年开始合作，为我们招募了1000余名来自英美澳加的优质外教，在中国北京，上海，沈阳等地工作。Career China有着优质的外教招聘服务，同时在签证服务方面也很完善，非常棒的合作伙伴。
              </div>
              <div class="swiper-slide-footer clear">
                <span class="footer-name">Charlie</span>
                <span class="footer-position">励步英语CEO</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-title">
                <span class="title-img renda"></span>
                <div class="title-playVideo" @click="playVideo('http://material.careerchina.com/video/092a4cfa-1736-4f3a-a07c-0c11ef6c882d.mp4')">
                  <span class="title-span">观看视频</span>
                  <i class="title-playIcon"></i>
                </div>
              </div>
              <div class="swiper-slide-content">
                很享受在中国工作的环境，和这里的文化氛围。我们的外教工作重心就是以学生为中心，所以家长对这里的教学都非常满意和支持。外籍教师的品质是我们考量的关键。寻找资质优秀的老师就成了我们工作开展的重中之重。Career China很好地帮助我们解决了这个难题，为我们的工作与教学提拱了莫大的帮助。
              </div>
              <div class="swiper-slide-footer clear">
                <span class="footer-name">Tony Fiorentino</span>
                <span class="footer-position">人大附中西山分校副校长</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-title">
                <span class="title-img hasi"></span>
                <div class="title-playVideo" @click="playVideo('http://material.careerchina.com/video/f87839e2-4c0f-413d-a043-b8d326bad2d4.mp4')">
                  <span class="title-span">观看视频</span>
                  <i class="title-playIcon"></i>
                </div>
              </div>
              <div class="swiper-slide-content">
                Career China的专业精神让我们觉得放心。合作时会与我们沟通很多职位的细节和重点，对每一位候选人都非常认真地面试，推荐的人选质量不错。是一家让我们非常信赖的猎头公司！
              </div>
              <div class="swiper-slide-footer clear">
                <span class="footer-name">曹强</span>
                <span class="footer-position">哈斯教育CEO</span>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="swiper-slide-title">
                <span class="title-img EF"></span>
                <!-- <div class="title-playVideo">
                  <span class="title-span">观看视频</span>
                  <i class="title-playIcon"></i>
                </div> -->
              </div>
              <div class="swiper-slide-content">
                外教质量是企业运营的基石，感谢Career China团队对外教精准且专业的把关，对客户需求能够耐心且快速地响应，Career China是一直值得信赖，值得托付的团队，愿与Career China继续保持密切且顺畅的合作，携手共赢！
              </div>
              <div class="swiper-slide-footer clear">
                <span class="footer-name">Amy Yang</span>
                <span class="footer-position">EF长春人事总监</span>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-container-2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(serveLog,index) in LogArr">
              <img :src="serveLog.src" alt="">
            </div>
          </div>
        </div>
      </div>
      <v-runNum></v-runNum>
      <div class="index-sound">
        <div class="index-sound-bg">
          <div class="index-sound-city-1">
            <div class="index-sound-icon"></div>
            <span class="index-sound-font">爱尔兰</span>
          </div>
          <!--Daniel-->
          <div class="index-sound-city-2">
            <span class="index-sound-icon"></span>
            <span class="index-sound-font"></span>
            <span class="index-sound-playVideo" @click="playVideo('http://careerchina-material.oss-us-west-1.aliyuncs.com/video/43aba01b-3fb3-413e-b89c-5eb0a04a4074.mp4')"></span>
          </div>
          <div class="index-sound-city-3">
            <span class="index-sound-icon"></span>
            <span class="index-sound-font">新西兰</span>
          </div>
          <div class="index-sound-city-4">
            <span class="index-sound-icon"></span>
            <span class="index-sound-font">英国</span>
          </div>
          <div class="index-sound-city-5">
            <span class="index-sound-icon"></span>
            <span class="index-sound-font">加拿大</span>
          </div>
          <div class="index-sound-city-6">
            <span class="index-sound-icon"></span>
            <span class="index-sound-font">南非</span>
          </div>
          <div class="index-sound-city-7">
            <span class="index-sound-icon"></span>
            <span class="index-sound-font">澳大利亚</span>
          </div>
          <!--josh-->
          <div class="index-sound-city-8">
            <span class="index-sound-icon"></span>
            <span class="index-sound-font"></span>
            <span class="index-sound-playVideo" @click="playVideo('http://careerchina-material.oss-us-west-1.aliyuncs.com/video/92d5c4a7-5894-439e-9150-f6d270bcc96e.mp4')"></span>
          </div>
          <!--thea-->
          <div class="index-sound-city-9">
            <span class="index-sound-icon"></span>
            <span class="index-sound-font"></span>
            <span class="index-sound-playVideo" @click="playVideo('http://careerchina-material.oss-us-west-1.aliyuncs.com/video/48ec01e1-499a-42a7-a80d-4ba0701e9f7a.mp4')"></span>
          </div>
        </div>
        <div class="index-sound-title">
          <h2 class="index-sound-h2">即刻拥有专属你的外籍人才服务</h2>
          <h3 class="index-sound-h3">现在注册，便可立即获得优质服务</h3>
        </div>
        <div class="index-sound-play" @click='getApplication'>一键申请</div>
      </div>
      <v-footer></v-footer>
    </div>
    <v-popups v-show="maskPopUps"></v-popups>
    <div class="VideoMaskBox" v-show="VideoMaskShow" @click="closeVideo">
      <div class="videomask"></div>
      <video :src="this.VideoUrl" autoplay controls='controls' class="VideoMask-video" v-show="videoPlay" v-if="viderFlag"></video>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  import cookie from 'jquery.cookie';
  import 'common/css/reset.min.css';
  import '../../common/css/swiper.min.css'
  import nav from 'components/NavMenu/NavMenu.vue';
  import runNum from 'components/runNum/runNum.vue';
  import popups from '../../components/PopUpsForm/PopUpsForm.vue';
  import localhost from '../../common/js/public.js';
  import Swiper from '../../common/js/swiper.min.js';
  import footer from 'components/footer/footer.vue';
  import {bus} from '../../common/js/bus.js';

  const Baccess_token = $.cookie('B-access_token');
  export default {
    name: 'index',
    components: {
      'v-nav-menu':nav,
      'v-runNum':runNum,
      'v-footer':footer,
      'v-popups':popups
    },
    data(){
      return {
        swiperArr:[],
        activeName: 'first',
        maskPopUps:false,
        VideoMaskShow:false,
        VideoUrl:'',
        LogArr:[
          {src:require('../../common/img/icon-home-userlogo-1.png')},
          {src:require('../../common/img/icon-home-userlogo-2.png')},
          {src:require('../../common/img/icon-home-userlogo-3.png')},
          {src:require('../../common/img/icon-home-userlogo-4.png')},
          {src:require('../../common/img/icon-home-userlogo-5.png')},
          //{src:require('../../common/img/icon-home-userlogo-6.png')},
          {src:require('../../common/img/icon-home-userlogo-7.png')},
          {src:require('../../common/img/icon-home-userlogo-8.png')},
          {src:require('../../common/img/icon-home-userlogo-9.png')},
          //{src:require('../../common/img/icon-home-userlogo-10.png')},
        ],
        TabArr:[
          {
            label:'雇主海外品牌推广',
            name:'first',
            isCont:false,
            isCont3:false,
            imgSrc:require('../../common/img/icon-home-why-1@2x.png'),
            aliArr:[
              {
                title:'联通海外资源'
              },
              {
                title:'海外营销拓展'
              },
              {
                title:'海外网络宣传'
              },
              {
                title:'代理校招展会'
              },
              {
                title:'线上营销推广'
              },
              {
                title:'社区媒体运营'
              }
            ]
          },
          {
            label:'人力资源外包服务',
            name:'second',
            isCont:true,
            isCont3:false,
            imgSrc:require('../../common/img/icon-home-why-2@2x.png'),
            aliArr:[
              {
                title:'外籍人力资源规划'
              },
              {
                title:'海外招聘甄选面试'
              },
              {
                title:'外教评价签约录用'
              },
              {
                title:'薪酬福利保险设计'
              },
              {
                title:'工资福利制度设计'
              },
              {
                title:'绩效考核激励设计'
              },
              {
                title:'外教岗前技能培训'
              },
              {
                title:'外事人员管理培训'
              },
              {
                title:'外教合同法务管理'
              },
              {
                title:'外教人力资源调配'
              },
              {
                title:'外教人力档案管理'
              },
            ]
          },
          {
            label:'海外招聘服务',
            name:'third',
            isCont:false,
            isCont3:false,
            imgSrc:require('../../common/img/icon-home-why-3@2x.png'),
            aliArr:[
              {
                title:'聚焦海外师资'
              },
              {
                title:'专业猎聘渠道'
              },
              {
                title:'海外团队沟通'
              },
              {
                title:'国内团队跟单'
              },
              {
                title:'无跨文化差异'
              },
              {
                title:'遍布主流国家'
              },
              {
                title:'分享在华经历'
              },
              {
                title:'及时有效沟通'
              }
            ]
          },
          {
            label:'签证代理服务',
            name:'fourth',
            isCont:false,
            isCont3:false,
            imgSrc:require('../../common/img/icon-home-why-4@2x.png'),
            aliArr:[
              {
                title:'专业团队办理'
              },
              {
                title:'海外三级认证'
              },
              {
                title:'海外签证加急'
              },
              {
                title:'国内工签申请'
              },
              {
                title:'外教来华安排'
              },
              {
                title:'落地服务支持'
              },
              {
                title:'外事服务咨询'
              },
              {
                title:'外教上岗培训'
              }
            ]
          },
          {
            label:'外籍人才社区运营',
            name:'fifth',
            isCont:false,
            isCont3:true,
            imgSrc:require('../../common/img/icon-home-why-5@2x.png'),
            aliArr:[
              {
                title:'推广雇主品牌'
              },
              {
                title:'连接国际合作'
              },
              {
                title:'政府关系互动'
              },
              {
                title:'客户关系经营'
              },
              {
                title:'业内交流资讯'
              },
              {
                title:'国际教育合作'
              },
              {
                title:'员工管理EHR'
              },
              {
                title:'客户关系CRM'
              },
              {
                title:'社群运营frame'
              }
            ]
          },
        ]
      }
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
             autoplay: 5000,//可选选项，自动滑动
             direction : 'vertical',//垂直
             loop : true,
          }),
        soundSwiper = new Swiper('.swiper-container-1', {
             //autoplay: 5000,//可选选项，自动滑动
             slidesPerView : 3,
             spaceBetween : 60,
             loop : true,
        }),
        LogSwiper = new Swiper('.swiper-container-2', {
             // autoplay: 5000,//可选选项，自动滑动
             // loop : true,
             slidesPerView : 7,
             slidesPerGroup : 1,
          })
    },
    created(){
      if($.cookie('B-access_token') === undefined || $.cookie('B-access_token') == 'null' || $.cookie('B-access_token') == ''){
        this.$http.get(localhost+'/cc/bg/user/accesstoken?client=B').then((response) =>{
          if(response.body.error_code == 200){
            $.cookie('B-access_token',response.body.resultObj.access_token)
          }
        });
      };
      bus.$on('closeIcon',(data)=>{
        this.maskPopUps = data;
      });
      this.getNewDynamic()
    },
    methods:{
      getNewDynamic(){
        this.$http.get(localhost+'cc/blog/busi/article/list/b?access_token='+Baccess_token+'&categoryId='+-1+'&pageIndex='+1+'&pageSize='+10).then((response)=>{
          this.swiperArr = response.body.resultObj.list.splice(0,3);
        });
      },
      handleClick(tab){
        //console.log(tab.index);
      },
      getApplication(){
        this.maskPopUps = true;
      },
      playVideo(videourl){
        this.viderFlag = true;
        this.videoPlay = true;
        this.VideoMaskShow = true;
        this.VideoUrl = videourl;
      },
      closeVideo(e){
        if(e.target.className === 'VideoMask-video'){
          return false
        };
        if(e.target.className === 'videomask'){
          this.videoPlay = false;
          this.VideoMaskShow = false;
          this.VideoUrl = '';
        };
      }
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  $font-weight1 = 100;
  $font-weight2 = 200;
  $font-weight3 = 300;
  $font-weight4 = 400;
  #index
    min-width:1100px
    font-family:PingFang SC,Microsoft YaHei,Hiragino Sans GB,SimSun,sans-serif,Helvetica Neue,Helvetica;
    .index-header
      position:relative
      .index-header-position
        height:660px
        position:relative
        display:block
        z-index:-1
      .index-header-img
        position:fixed
        display:block
        width:100%
        height:660px
        background:url('../../common/img/bg-home-1.jpg') no-repeat 50%
        background-size:cover
      .index-header-Hs
        position:absolute
        top:230px
        //left:300px
        left:50%
        margin-left:-500px
        width:1000px
        .index-header-h2,.index-header-h3
          margin-bottom:18px
          font-size: 38px
          color: #FFFFFF
          font-weight:300
      .inidex-header-botton
        position:absolute
        top:396px
        left:50%
        margin-left:-500px
        width:1000px
        height:44px
        .inidex-header-GotoLogin,.index-header-playVideo
          float:left
          cursor:pointer
          width:150px
          height:44px
          line-height:44px
          text-align:center
          font-size: 16px
          color: #FFFFFF
          margin-right:20px
          font-weight:100
        .inidex-header-GotoLogin
          background: #2061FF
        .index-header-playVideo
          border:1px solid rgba(255,225,225,.4)
          .index-play-i
            background:url('../../common/img/icon-b-1.png') no-repeat
            background-position:-28px -23px
            width:6px
            height:10px
            display:inline-block
            margin-left:5px
    .index-news
      height:80px
      width:100%
      min-width:1100px
      cursor:pointer
      border-bottom:1px solid #E5E7EB
      .index-news-content
        margin:0 auto
        width:1000px
        .index-news-span
          float:left
          margin:24px 30px 24px 0px
          width:90px
          height:32px
          line-height:32px
          text-align:center
          border: 1px solid #BEA474
          font-size:14px
          color: #BEA474
          font-weight:$font-weight3
        .swiper-container
          float:left
          width:550px
          height:80px
          line-height:80px
          .swiper-slide
            font-size: 14px
            color: #424953
            font-weight:300
            .swiper-span-time
              float:left
            .swiper-maxWidth
              float:left
              max-width:390px
              overflow:hidden
              text-overflow:ellipsis
              white-space:nowrap
              color: #424953
            .swiper-line
              float:left
              margin:34px 12px
              width:1px
              height:12px
              display:inline-block
              background: #D8D8D8
            .swiper-newImg
              margin-left:10px
              vertical-align:-2px
              width:34px
              height:16px
              display:inline-block
              // background:url('../../common/img/icon-b-1.png') no-repeat
              //background-position:-11px -43px
              background:url('../../common/img/icon-home-news@2x.png') no-repeat
              background-size: contain
        .index-news-Gotomore
          float:right
          margin:34px 0px 34px 20px
          font-size: 14px
          color: #989898
          cursor:pointer
          .index-news-more
            font-weight:$font-weight3
            color: #424953
          .inde-news-moreImg
            margin-left:5px
            vertical-align:1px
            display:inline-block
            width:5px
            height:8px
            background:url('../../common/img/icon-b-1.png') no-repeat
            background-position:-16px -65px
    .index-server
     .index-server-title
      margin:96px auto 50px
      width:240px
      .index-server-h2
        font-weight:$font-weight4
        font-size: 30px
        color: #424953
      .index-server-h3
        margin-top:10px
        font-weight:$font-weight3
        font-size: 12px
        color: #CFD3D8
        text-align:center
     .el-tabs
      .el-tabs__header
         width:1100px
         margin:0 auto
         border:none
        .el-tabs__nav-wrap
         .el-tabs__nav-scroll
          .el-tabs__nav
           float:none
           .el-tabs__active-bar
             width:220px !important
             height:2px
             background: #2061FF
           .el-tabs__item
             width:220px
             height:52px
             font-size: 16px
             color: #424953
             line-height:normal
             text-align:center
             &.is-active
              color: #2061FF
      .el-tabs__content
       width:100%
       background: #F9FAFC
       .index-server-content
         width:970px
         margin:0 auto
         .index-server-img
            float:left
            margin:43px 120px 0px 0px
            width:120px
            height:120px
         .imgCont
           margin:66px 120px 29px 0px
         .imgCont3
           margin:53px 95px 29px 0px
         .index-server-ulList
          float:left
          margin:70px auto 44px
          width:720px
          .index-server-List
            float:left
            margin:0 90px 26px 0
            font-size: 14px
            color: #7F8794
            font-weight:$font-weight3
          .index-server-List:nth-child(4)
            margin-right:0
          .index-server-List:nth-child(8)
            margin-right:0
     .index-server-play
        margin:50px auto 90px
        width:180px
        height:44px
        line-height:44px
        background: #2061FF
        text-align:center
        font-size: 16px
        color: #FFFFFF
        cursor:pointer
    .index-moreServe
      background:url('../../common/img/bg-home-2.jpg') no-repeat 50%
      width:100%
      height:698px
      background-size:cover
      .index-moreServe-title
        padding-top:70px
        margin:0px auto 40px
        width:120px
        .index-moreServe-h2
          font-weight:$font-weight4
          font-size: 30px
          color: #FFFFFF
        .index-moreServe-h3
          margin-top:10px
          text-align:center
          font-size: 12px
          color: #868889
          font-weight:$font-weight3
      .index-moreServe-ulList
        margin:40px auto 20px
        width:1310px
        .index-moreServe-li
          float:left
          text-align:center
          margin:0 30px 30px 0px
          width:23.25%
          height:170px
          background:rgba(225,225,225,.09)
          .index-moreServe-img
            display:block
            margin:42px auto 24px
            background:url('../../common/img/icon-home-more-recruitment@2x.png') no-repeat
            background-size:contain
            width:37px
            height:44px
          .img-2
            width:43px
            height:43px
            background:url('../../common/img/icon-home-more-management@2x.png') no-repeat
            background-size:contain
          .img-3
            width:44px
            height:44px
            background:url('../../common/img/icon-home-more-visa@2x.png') no-repeat
            background-size:contain
          .img-4
            width:48px
            height:44px
            background:url('../../common/img/icon-home-more-school@2x.png') no-repeat
            background-size:contain
          .img-5
            width:48px
            height:44px
            background:url('../../common/img/icon-home-more-policy@2x.png') no-repeat
            background-size:contain
          .img-6
            width:48px
            height:40px
            background:url('../../common/img/icon-home-more-medical@2x.png') no-repeat
            background-size:contain
          .img-7
            width:44px
            height:40px
            background:url('../../common/img/icon-home-more-meeting@2x.png') no-repeat
            background-size:contain
          .img-8
            width:44px
            height:40px
            background:url('../../common/img/icon-home-more-bbs@2x.png') no-repeat
            background-size:contain
          .index-moreServe-span
            font-size: 18px
            color: #EEF3FF
        .index-moreServe-li:nth-child(4),.index-moreServe-li:nth-child(8)
          margin-right:0
      .index-server-play
        margin:20px auto 70px
        width:180px
        height:44px
        line-height:44px
        background: #2061FF
        text-align:center
        font-size: 16px
        color: #FFFFFF
        cursor:pointer
      @media (max-width:1300px)
        .index-moreServe-ulList
          width:1100px
          .index-moreServe-li
            margin:0 20px 30px 0px
    .index-userSound
      position:relative
      .index-userSound-title
        margin:96px auto 50px
        width:150px
        .index-userSound-h2
          font-weight:$font-weight4
          font-size: 30px
          color: #424953
        .index-userSound-h3
          margin-top:10px
          font-weight:300
          font-size: 12px
          color: #CFD3D8
          text-align:center
      .index-userSound-bg
        position:absolute
        top:125px
        left:50%
        margin:0 -500px 0
        width:1000px
        height:411px
        background:url('../../common/img/bg-home-map.png') no-repeat
        opacity:.4
      .swiper-container-1
        margin-top:137px
        width:100%
        min-width:1100px !important
        //height:420px
        height:420px
        overflow:hidden
        .blurry-left,.blurry-right
          display:block
          width:300px
          height:400px
          background:#fff
          -webkit-filter: blur(30px); /* Chrome, Opera */
          -moz-filter: blur(30px);
          -ms-filter: blur(30px);
          filter: blur(30px);
          z-index:100
        .blurry-left-1,.blurry-right-1
          display:block
          width:100px
          height:400px
          background:#fff
          z-index:120
        .blurry-left,.blurry-left-1
          position:absolute
          left:0px
        .blurry-right,.blurry-right-1
          position:absolute
          right:0px
        .swiper-slide
          margin-right:60px
          // width:590px !important
          height:350px
          background:#fff
          box-shadow: 0 4px 36px 0 rgba(181,191,230,0.20)
          .swiper-slide-title
            margin:50px auto 0
            //width:500px
            padding:0 60px
            height:33px
            .title-img
              float:left
              width:95px
              height:33px
              background-size: contain
              // background:url('../../common/img/icon-b-1.png') no-repeat
              // background-position:-337px -107px
            .first_leap
              background:url('../../common/img/icon-home-customer-libu@2x.png') no-repeat
              background-size: contain
            .renda
              background:url('../../common/img/icon-home-customer-rendafuzhong@2x.png') no-repeat
              background-size: contain
            .hasi
              background:url('../../common/img/icon-home-customer-hasi@2x.png') no-repeat
              background-size: contain
            .EF
              background:url('../../common/img/icon-home-customer-yingfu@2x.png') no-repeat
              background-size: contain
            .title-playVideo
              float:right
              height:33px
              line-height:33px
              cursor:pointer
              .title-span
                float:left
                font-size: 12px
                color: #2061FF
              .title-playIcon
                float:left
                margin:11px 0 0 7px
                background:url('../../common/img/icon-b-1.png') no-repeat
                background-position:-607px -36px
                width:6px
                height:10px
          .swiper-slide-content
            margin:23px auto 20px
            //width:500px
            padding:0 60px
            //height:84px
            line-height:28px
            font-weight:$font-weight4
            font-size: 14px
            color: #66698C
          .swiper-slide-footer
            margin:0 auto
            padding:0 60px
            //width:500px
            .footer-name
              text-align:right
              margin-bottom:8px
              display:block
              font-size: 14px
              color: #66698C
            .footer-position
              text-align:right
              display:block
              font-size: 12px
              color: #B3B5D0
      @media(max-width:1500px)
        .swiper-container-1
          width:100%
          height:450px
          .swiper-slide
            height:430px
      .swiper-container-2
        margin:120px auto 0
        overflow:hidden
        width:1100px
        height:40px
        .swiper-slide
          width:100px
          height:26px
          img
            display:block !important
            margin:0 auto !important
    .index-sound
      margin-top:90px
      width:100%
      .index-sound-bg
        position:relative
        margin:0 auto
        width:849px
        height:411px
        background:url('../../common/img/bg-home-map.png') no-repeat
        .index-sound-city-1
          position:absolute
          top: 30px
          left: 290px
          cursor:pointer
          .index-sound-icon
            position:relative
            display:inline-block
            width:22px
            height:22px
            background:url('../../common/img/icon-home-circle-green@2x.png') no-repeat
            background-size:contain
            .scale-1
              position:absolute
              top:50%
              left:50%
              margin:-22px 0 0 -22px
              display:block
              width:44px
              height:44px
              border:4px solid red
              border-radius:50%
              // -webkit-animation: ripple 4.5s ease-out 225ms infinite
              // animation: ripple 4.5s ease-out 225ms infinite
              // -webkit-animation: brand 1.95s infinite
              // animation: brand 4.5s 1.95s infinite
            .scale-2
              position:absolute
              top:50%
              left:50%
              margin:-33px 0 0 -33px
              width:66px
              height:66px
              border:4px solid red
              border-radius:50%
              // -webkit-animation: brand 1.95s infinite
              // animation: brand 4.5s 1.95s infinite
          .index-sound-font
            vertical-align:6px
            margin-left:8px
            font-size: 14px
            color: #424953
        .index-sound-city-2
          position:absolute
          // top:160px
          // left:155px
          top:115px
          left:375px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:22px
            height:22px
            background:url('../../common/img/icon-home-circle-gray@2x.png') no-repeat
            background-size:contain
            -webkit-animation: zoomIn 2s ease-out .35s infinite
            animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            vertical-align:6px
            margin-left:8px
            font-size: 14px
            color: #424953
          .index-sound-playVideo
            position:absolute
            top:-65px
            left:-100px
            display:inline-block
            cursor:pointer
            width:220px
            height:67px
            background:url('../../common/img/icon-home-people-1@2x.png') no-repeat
            background-size:contain
        //新西兰
        .index-sound-city-3
          position:absolute
          top: 365px
          left: 773px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:22px
            height:22px
            background:url('../../common/img/icon-home-circle-blue@2x.png') no-repeat
            background-size:contain
            // -webkit-animation: zoomIn 2s ease-out .35s infinite
            // animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            vertical-align:6px
            margin-left:8px
            font-size: 14px
            color: #424953
        //英国
        .index-sound-city-4
          position:absolute
          top: 120px
          left: 395px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:22px
            height:22px
            background:url('../../common/img/icon-home-circle-blue@2x.png') no-repeat
            background-size:contain
            // -webkit-animation: zoomIn 2s ease-out .35s infinite
            // animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            vertical-align:6px
            margin-left:8px
            font-size: 14px
            color: #424953
        //加拿大
        .index-sound-city-5
          position:absolute
          top: 85px
          left: 115px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:22px
            height:22px
            background:url('../../common/img/icon-home-circle-blue@2x.png') no-repeat
            background-size:contain
            // -webkit-animation: zoomIn 2s ease-out .35s infinite
            // animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            vertical-align:6px
            margin-left:8px
            font-size: 14px
            color: #424953
        //美国
        .index-sound-city-6
          position:absolute
          top:213px
          left:444px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:22px
            height:22px
            background:url('../../common/img/icon-home-circle-orange@2x.png') no-repeat
            background-size:contain
            // -webkit-animation: zoomIn 2s ease-out .35s infinite
            // animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            vertical-align:6px
            margin-left:8px
            font-size: 14px
            color: #424953
        //澳大利亚
        .index-sound-city-7
          position:absolute
          top: 300px
          left: 700px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:22px
            height:22px
            background:url('../../common/img/icon-home-circle-green@2x.png') no-repeat
            background-size:contain
            // -webkit-animation: zoomIn 2s ease-out .35s infinite
            // animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            vertical-align:6px
            margin-left:8px
            font-size: 14px
            color: #424953
        //
        .index-sound-city-8
          position:absolute
          top:165px
          left:155px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:22px
            height:22px
            background:url('../../common/img/icon-home-circle-gray@2x.png') no-repeat
            background-size:contain
            -webkit-animation: zoomIn 2s ease-out .35s infinite
            animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            vertical-align:6px
            margin-left:8px
            font-size: 14px
            color: #424953
          .index-sound-playVideo
            position:absolute
            top:-65px
            left:-100px
            display:inline-block
            cursor:pointer
            width:220px
            height:67px
            background:url('../../common/img/icon-home-people-2@2x.png') no-repeat
            background-size:contain
        //
        .index-sound-city-9
          position:absolute
          top: 74px;
          left: 20px;
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:22px
            height:22px
            background:url('../../common/img/icon-home-circle-gray@2x.png') no-repeat
            background-size:contain
            -webkit-animation: zoomIn 2s ease-out .35s infinite
            animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            vertical-align:6px
            margin-left:8px
            font-size: 14px
            color: #424953
          .index-sound-playVideo
            position:absolute
            top:-65px
            left:-100px
            display:inline-block
            cursor:pointer
            width:220px
            height:67px
            background:url('../../common/img/icon-home-people-3@2x.png') no-repeat
            background-size:contain
        @keyframes brand{
            0% {
              -webkit-transform: scale(.8,.8);
            }
            10% {
              -webkit-transform: scale(1,1);
            }
            20% {
              -webkit-transform: scale(1.25,1.25);
            }
            100%, 30% {
              -webkit-transform: scale(1,1);
            }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
          }

          50% {
            opacity: 1;
          }
        }
      .index-sound-title
        margin:80px auto 50px
        width:420px
        .index-sound-h2
          margin-bottom:30px
          font-size: 30px
          color: #424953
          font-weight:$font-weight4
        .index-sound-h3
          text-align:center
          font-size: 16px
          color: #7F8794
          font-weight:$font-weight3
      .index-sound-play
        margin:50px auto 90px
        width:180px
        height:44px
        line-height:44px
        background: #2061FF
        text-align:center
        font-size: 16px
        color: #FFFFFF
        cursor:pointer
    .VideoMaskBox
      width:100%
      height:100%
      position:fixed
      top:0
      left:0
      z-index:1000
      .videomask
        width:100%
        height:100%
        opacity:.5
        background:#000
      .VideoMask-video
        position:fixed
        top:50%
        left:50%
        margin-left:-400px
        margin-top:-300px
        width:800px
        height:600px
        display:block
        background:#333
  .index-bg
    position:relative
    z-index:100
    background:#fff

</style>
