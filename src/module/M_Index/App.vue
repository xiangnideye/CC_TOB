<template>
  <div id="index">
    <v-nav-menu></v-nav-menu>
    <div class="index-header">
      <span class="index-header-img"></span>
      <div class="index-header-Hs">
        <h2 class="index-header-h2" style="font-weight:500;">Career China</h2>
        <h3 class="index-header-h3" style="font-weight:200;">做中国更有品质的外教服务</h3>
      </div>
      <div class="inidex-header-botton">
        <a href="LoginM.html?state=0" class="inidex-header-GotoLogin">我要外教</a>
        <div class="index-header-playVideo" @click="playVideo('http://material.careerchina.com/video/c3a88780-4e6d-4fb4-b0d7-eb8ab0c0ad49.mp4')">
          <span class="index-play-span">观看视频</span>
          <i class="index-play-i"></i>
        </div>
      </div>
    </div>
    <div class="index-server">
      <div class="index-server-title">
        <h2 class="index-server-h2">我们能为你做什么</h2>
        <h3 class="index-server-h3">WHY CHOOSE US</h3>
      </div>
      <div v-for="(TabList,index) in TabArr" class="clear select-server">
        <div class="server-title" @click="ListHide(TabList,index)">
          <span class="title-img" :class="'title-img'+index"></span>
          <span class="title-p">{{TabList.label}}</span>
          <span class="title-icon" :class="{isIcon:TabList.IsIcon}"></span>
        </div>
        <ul class="index-server-ulList clear" v-show="TabList.show">
          <li v-for="(aLi,index) in TabList.aliArr" class="index-server-List">·{{aLi.title}}</li>
        </ul>
      </div>
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
      <div class="swiper-container-1 swiper-container">
        <div class="swiper-wrapper clear">
          <div class="swiper-slide">
            <div class="swiper-slide-2">
              <div class="swiper-slide-title clear">
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
          </div>
          <div class="swiper-slide">
            <div class="swiper-slide-2">
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
          </div>
          <div class="swiper-slide">
            <div class="swiper-slide-2">
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
          </div>
          <div class="swiper-slide">
            <div class="swiper-slide-2">
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
          <span class="index-sound-font">新西兰</span>
          <span class="index-sound-icon"></span>
        </div>
        <div class="index-sound-city-4">
          <span class="index-sound-font">英国</span>
          <span class="index-sound-icon"></span>
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
          <span class="index-sound-font">澳大利亚</span>
          <span class="index-sound-icon"></span>
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
  import nav from '../../components/M_navmenu/M_navmenu.vue';
  import runNum from '../../components/M_runNum/M_runNum.vue';
  import localhost from '../../common/js/public.js';
  import Swiper from '../../common/js/swiper.min.js';
  import footer from 'components/M_footer/M_footer.vue';
  import {bus} from '../../common/js/bus.js';

  const Baccess_token = $.cookie('B-access_token');
  export default {
    name: 'index',
    components: {
      'v-nav-menu':nav,
      'v-runNum':runNum,
      'v-footer':footer,
    },
    data(){
      return {
        swiperArr:[],
        activeNames: ['1'],
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
            show:false,
            IsIcon:false,
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
            show:false,
            IsIcon:false,
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
            show:false,
            IsIcon:false,
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
            show:false,
            IsIcon:false,
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
            show:false,
            IsIcon:false,
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
      var mySwiper = new Swiper('.swiper-container',{
            slidesPerView : 1,
            loop:true,
            width:310,
            spaceBetween : 7.5,
            // slidesOffsetBefore :7.5,
            centeredSlides:true
            // spaceBetween : '10%',
          });
      var LogSwiper = new Swiper('.swiper-container-2', {
           autoplay: 5000,
           loop : true,
           slidesPerView : 4,
           slidesPerGroup : 1,
        });
    },
    created(){
      this.getNewDynamic();
      if($.cookie('B-access_token') === undefined || $.cookie('B-access_token') == 'null' || $.cookie('B-access_token') == ''){
        this.$http.get(localhost+'/cc/bg/user/accesstoken?client=B').then((response) =>{
          if(response.body.error_code == 200){
            $.cookie('B-access_token',response.body.resultObj.access_token)
          }
        });
      }
    },
    methods:{
      ListHide(el,elIndex){
        var isSelf = false;
        this.TabArr.map((x,index)=>{
          if(this.TabArr[elIndex].show && elIndex == index){
            isSelf = true;
          }
          this.TabArr[index].show=false;
          this.TabArr[index].IsIcon = false;
        })
         if(!isSelf){
           this.TabArr[elIndex].show=true;
           this.TabArr[elIndex].IsIcon = true;
         }
      },
      getNewDynamic(){
        this.$http.get(localhost+'/cc/blog/busi/article/list/b?access_token='+Baccess_token+'&categoryId='+-1+'&pageIndex='+1+'&pageSize='+10).then((response)=>{
          this.swiperArr = response.body.resultObj.list.splice(0,3);
        });
      },
      handleClick(tab){
        //console.log(tab.index);
      },
      getApplication(){
        location.href="M_formData.html?HrefId="+1
      },
      playVideo(videourl){
        this.viderFlag = true;
        this.videoPlay = true;
        this.VideoMaskShow = true;
        this.VideoUrl = videourl;
      },
      closeVideo(e){
        console.log(e)
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
    //width:375px
    font-family:PingFang SC,Microsoft YaHei,Hiragino Sans GB,SimSun,sans-serif,Helvetica Neue,Helvetica;
    .index-header
      position:relative
      .index-header-img
        display:block
        width:100%
        height:240px
        background:url('../../common/img/M_img/m-bg-home-1@2x.png') no-repeat 50%
        background-size:cover
      .index-header-Hs
        position:absolute
        top:76px
        left:20px
        .index-header-h2,.index-header-h3
          margin-bottom:4px
          font-size: 17px
          color: #FFFFFF
          font-weight:300
        .index-header-h3
          font-weight:200
      .inidex-header-botton
        position:absolute
        top:146px
        left:20px
        width:190px
        height:33px
        .inidex-header-GotoLogin,.index-header-playVideo
          float:left
          cursor:pointer
          width:90px
          height:33px
          line-height:33px
          text-align:center
          font-size: 13px
          color: #FFFFFF
        .inidex-header-GotoLogin
          background: #2061FF
          margin-right:10px
        .index-header-playVideo
          border:1px solid rgba(255,225,225,.4)
          .index-play-i
            background:url('../../common/img/M_img/m-icon-home-banner-video-normal@2x.png') no-repeat
            width:3px
            height:5px
            display:inline-block
            margin-left:5px
            background-size:contain
            vertical-align: 2px
    .index-server
     margin-bottom:35px
     .index-server-title
      margin:35px auto 25px
      width:146px
      text-align: center
      .index-server-h2
        font-weight:$font-weight4
        font-size: 17px
        color: #424953
      .index-server-h3
        margin-top:2px
        font-weight:$font-weight3
        font-size: 8px
        color: #CFD3D8
     .el-collapse
      margin:0 auto
      width:335px
      border:none
      .el-collapse-item
        margin-bottom:10px
        width:335px
        border:none
        box-shadow: 0 2px 12px 0 rgba(181,191,230,0.24)
        .el-collapse-item__header
         height:55px
         line-height:55px
         border:none
         color: #424953
         font-size:15px
         .el-collapse-item__header__arrow
          display:inline-block
          width:30px
          height:30px
          background-size:contain
          vertical-align: -10px
          margin-right: 20px
         .el-icon-arrow-right:before
          content:" "
        .el-collapse-item__wrap
          border:none
          .el-collapse-item__content
            background: #fff
            position: relative
           .index-server-ulList
            margin:0px auto
            width:335px
            .index-server-List
              float:left
              margin:0 20px 8px 0
              font-size: 12px
              color: #7F8794
              font-weight:$font-weight3
      .el-collapse-item:nth-child(1) .el-collapse-item__header__arrow
         background:url('../../common/img/M_img/m-icon-home-why-1@2x.png') no-repeat
         background-size:contain
      .el-collapse-item:nth-child(2) .el-collapse-item__header__arrow
         background:url('../../common/img/M_img/m-icon-home-why-2@2x.png') no-repeat
         background-size:contain
      .el-collapse-item:nth-child(3) .el-collapse-item__header__arrow
        background:url('../../common/img/M_img/m-icon-home-why-3@2x.png') no-repeat
        background-size:contain
      .el-collapse-item:nth-child(4) .el-collapse-item__header__arrow
        background:url('../../common/img/M_img/m-icon-home-why-4@2x.png') no-repeat
        background-size:contain
      .el-collapse-item:nth-child(5) .el-collapse-item__header__arrow
        background:url('../../common/img/M_img/m-icon-home-why-5.png') no-repeat
        background-size:contain
     .select-server
        margin-bottom:10px
       .server-title
         margin:0 auto
         width:335px
         height:55px
         line-height:55px
         box-shadow: 0 2px 12px 0 rgba(181,191,230,0.24)
         .title-img
           float:left
           margin: 13px 20px 0 15px
           width:30px
           height:30px
           background:url('../../common/img/M_img/m-icon-home-why-1@2x.png') no-repeat
           background-size:contain
         .title-img1
           background:url('../../common/img/M_img/m-icon-home-why-2@2x.png') no-repeat
           background-size:contain
         .title-img2
           background:url('../../common/img/M_img/m-icon-home-why-3@2x.png') no-repeat
           background-size:contain
         .title-img3
           background:url('../../common/img/M_img/m-icon-home-why-4@2x.png') no-repeat
           background-size:contain
         .title-img4
           background:url('../../common/img/M_img/m-icon-home-why-5.png') no-repeat
           background-size:contain
         .title-p
           float:left
           font-size:15px
           color: #424953
         .title-icon
           float:right
           margin:25px 15px 0 0
           width:10px
           height:10px
           background:url('../../common/img/M_img/m-icon-home-arrow-down@2x.png') no-repeat
           background-size:contain
         .isIcon
           background:url('../../common/img/M_img/m-icon-home-arrow-up@2x.png') no-repeat
           background-size:contain
       .index-server-ulList
        border-top:.1px dashed #999EA7
        margin:0px auto 10px
        padding-top: 15px
        padding-left: 15px
        padding-bottom: 7px
        width:335px
        background:#fff
        box-shadow: 0 2px 12px 0 rgba(181,191,230,0.24)
        .index-server-List
          float:left
          margin:0 20px 8px 0
          font-size: 13px
          color: #7F8794
          font-weight:$font-weight3
    .index-moreServe
      background:url('../../common/img/M_img/m-bg-home-2@2x.png') no-repeat
      width:375px
      height:544px
      background-size:cover
      .index-moreServe-title
        padding-top: 26px
        margin: 0px auto 20px
        width:78px
        text-align: center
        .index-moreServe-h2
          font-weight:$font-weight4
          font-size: 17px
          color: #FFFFFF
        .index-moreServe-h3
          margin-top:2px
          font-size: 8px
          color: #868889
          font-weight:$font-weight3
      .index-moreServe-ulList
        margin:0px auto 10px
        width:325px
        .index-moreServe-li
          float:left
          text-align:center
          margin:0 10px 10px 0px
          width:155px
          height:85px
          background:rgba(225,225,225,.09)
          .index-moreServe-img
            display:block
            margin:19px auto 11px
            background:url('../../common/img/M_img/m-icon-home-more-recruitment@2x.png') no-repeat
            background-size:contain
            width:19px
            height:22px
          .img-2
            width:22x
            height:22px
            background:url('../../common/img/M_img/m-icon-home-more-management@2x.png') no-repeat
            background-size:contain
          .img-3
            width:22px
            height:22px
            background:url('../../common/img/M_img/m-icon-home-more-visa@2x.png') no-repeat
            background-size:contain
          .img-4
            width:24px
            height:20px
            background:url('../../common/img/M_img/m-icon-home-more-school@2x.png') no-repeat
            background-size:contain
          .img-5
            width:20px
            height:20px
            background:url('../../common/img/M_img/m-icon-home-more-policy@2x.png') no-repeat
            background-size:contain
          .img-6
            width:21px
            height:21px
            background:url('../../common/img/M_img/m-icon-home-more-medical@2x.png') no-repeat
            background-size:contain
          .img-7
            width:22px
            height:20px
            background:url('../../common/img/M_img/m-icon-home-more-meeting@2x.png') no-repeat
            background-size:contain
          .img-8
            width:21px
            height:19px
            background:url('../../common/img/M_img/m-icon-home-more-bbs@2x.png') no-repeat
            background-size:contain
          .index-moreServe-span
            font-size: 14px
            color: #EEF3FF
        .index-moreServe-li:nth-child(2),.index-moreServe-li:nth-child(4),.index-moreServe-li:nth-child(6),.index-moreServe-li:nth-child(8)
          margin-right:0
      .index-server-play
        margin:5px auto 0px
        width:130px
        height:33px
        line-height:33px
        background: #2061FF
        text-align:center
        font-size: 13px
        color: #FFFFFF
        cursor:pointer
    .index-userSound
      position:relative
      .index-userSound-title
        margin:35px auto 20px
        width:95px
        text-align:center
        .index-userSound-h2
          font-weight:$font-weight4
          font-size: 17px
          color: #424953
        .index-userSound-h3
          margin-top:2px
          font-weight:300
          font-size: 8px
          color: #CFD3D8
      .index-userSound-bg
        position: absolute
        top: 64px
        left: 0
        width: 375px
        height: 411px
        background: url(/static/img/m-bg-home-map@2x.1a67606.png) no-repeat
        opacity: 0.4
        background-size: contain
      .swiper-container-1
        margin-top:30px
        width:100%
        height:380px
        overflow:hidden
        .swiper-wrapper
          width:1240px
          .swiper-slide
            position:relative
            margin-top: 10px
            width:310px !important
            height:350px
            margin-left:7.5px
            background:#fff
            box-shadow: 0 2px 22px 0 rgba(147,154,183,0.20)
            .swiper-slide-2
              position: absolute
              top: 0
              left: 50%
              margin-left: -150px
              width: 300px
              .swiper-slide-title
                margin:25px auto 0
                padding:0 25px
                height:40px
                .title-img
                  float:left
                  //margin-top: 8px
                  background-size: contain
                .first_leap
                  width:72px
                  height:33px
                  background:url('../../common/img/M_img/icon-home-customer-libu.png') no-repeat
                  background-size: contain
                .renda
                  width:31px
                  height:33px
                  background:url('../../common/img/M_img/icon-home-customer-rendafuzhong.png') no-repeat
                  background-size: contain
                .hasi
                  width:105px
                  height:31px
                  background:url('../../common/img/M_img/icon-home-customer-hasi.png') no-repeat
                  background-size: contain
                .EF
                  width:34px
                  height:33px
                  background:url('../../common/img/M_img/icon-home-customer-yingfu.png') no-repeat
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
                margin:6.5px auto 7px
                padding:0 25px
                line-height:28px
                font-weight:$font-weight4
                font-size: 12px
                color: #66698C
                width:300px
              .swiper-slide-footer
                margin:0 auto
                // padding:0 60px
                .footer-name
                  margin-right: 25px
                  text-align:right
                  margin-bottom:8px
                  display:block
                  font-size: 14px
                  color: #66698C
                .footer-position
                  margin-right: 25px
                  text-align:right
                  display:block
                  font-size: 12px
                  color: #B3B5D0
      .swiper-container-2
        margin:20px auto 0
        overflow:hidden
        width:375px
        height:20px
        .swiper-slide
          height:26px
          img
            height:26px
            display:block !important
            margin:0 auto !important
    .index-sound
      margin-top:40px
      width:100%
      .index-sound-bg
        position:relative
        margin:0 auto
        width:375px
        height:193.5px
        background:url('../../common/img/M_img/m-bg-home-map@2x.png') no-repeat
        background-size:cover
        .index-sound-city-1
          position:absolute
          top: -2px
          left: 136px
          cursor:pointer
          .index-sound-icon
            position:relative
            display:inline-block
            width:11px
            height:11px
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
            .scale-2
              position:absolute
              top:50%
              left:50%
              margin:-33px 0 0 -33px
              width:66px
              height:66px
              border:4px solid red
              border-radius:50%
          .index-sound-font
            vertical-align:6px
            margin-left:8px
            font-size: 14px
            color: #424953
        .index-sound-city-2
          position:absolute
          top: 57px
          left: 175px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:11px
            height:11px
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
            top: -14px
            left: 10px
            display:inline-block
            cursor:pointer
            width:143px
            height:43px
            background:url('../../common/img/M_img/m-icon-home-people-1@2x.png') no-repeat
            background-size:contain
        //新西兰
        .index-sound-city-3
          position:absolute
          top: 160px
          left: 301px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:11px
            height:11px
            background:url('../../common/img/icon-home-circle-blue@2x.png') no-repeat
            background-size:contain
          .index-sound-font
            vertical-align:1px
            margin-left:8px
            font-size: 14px
            color: #424953
        //英国
        .index-sound-city-4
          position:absolute
          top: 24px
          left: 166px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:11px
            height:11px
            background:url('../../common/img/icon-home-circle-blue@2x.png') no-repeat
            background-size:contain
            // -webkit-animation: zoomIn 2s ease-out .35s infinite
            // animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            vertical-align:6px
            display:block
            font-size: 14px
            color: #424953
        //加拿大
        .index-sound-city-5
          position:absolute
          top: 58px
          left: 45px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:11px
            height:11px
            background:url('../../common/img/icon-home-circle-blue@2x.png') no-repeat
            background-size:contain
          .index-sound-font
            vertical-align:1px
            font-size: 14px
            color: #424953
        //南非
        .index-sound-city-6
          position:absolute
          top: 100px;
          left: 198px;
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:11px
            height:11px
            background:url('../../common/img/icon-home-circle-orange@2x.png') no-repeat
            background-size:contain
            // -webkit-animation: zoomIn 2s ease-out .35s infinite
            // animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            vertical-align:0px
            margin-left:0px
            font-size: 14px
            color: #424953
        //澳大利亚
        .index-sound-city-7
          position:absolute
          top: 142px
          left: 254px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:11px
            height:11px
            background:url('../../common/img/icon-home-circle-green@2x.png') no-repeat
            background-size:contain
            // -webkit-animation: zoomIn 2s ease-out .35s infinite
            // animation: zoomIn 2s ease-out .35s infinite
          .index-sound-font
            // vertical-align:6px
            // margin-left:8px
            font-size: 14px
            color: #424953
        //
        .index-sound-city-8
          position:absolute
          top: 78px
          left: 60px
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:11px
            height:11px
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
            top: 14px
            left: -8px
            display:inline-block
            cursor:pointer
            width:140px
            height:46px
            background:url('../../common/img/M_img/m-icon-home-people-2@2x.png') no-repeat
            background-size:contain
        //
        .index-sound-city-9
          position:absolute
          top: 25px;
          left:10px;
          cursor:pointer
          .index-sound-icon
            display:inline-block
            width:11px
            height:11px
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
            top: -4px
            left: 10px
            display:inline-block
            cursor:pointer
            width:143px
            height:43px
            background:url('../../common/img/M_img/m-icon-home-people-3@2x.png') no-repeat
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
        margin:41px auto 30px
        width:258px
        text-align:center
        .index-sound-h2
          margin-bottom:2px
          font-size: 17px
          color: #424953
          font-weight:500
        .index-sound-h3
          font-size: 14px
          color: #7F8794
          font-weight:$font-weight3
      .index-sound-play
        margin:5px auto 40px
        width:130px
        height:33px
        line-height:33px
        background: #2061FF
        text-align:center
        font-size: 13px
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
        background:#333
      .VideoMask-video
        position:fixed
        top:50%
        margin-top:-150px
        width: 100%
        height: 300px
        display:block
        background:#333

</style>
