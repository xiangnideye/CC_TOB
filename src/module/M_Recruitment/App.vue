<template>
  <div id="recruitment">
   <v-nav-menu></v-nav-menu>
    <div class="recruitment-header">
      <span class="recruitment-header-img"></span>
      <div class="recruitment-header-h">
        <h2 class="recruitment-header-h2">Career China</h2>
        <h3 class="recruitment-header-h3">让客户招聘外教便捷更有效</h3>
      </div>
    </div>
    <div class="recruitment-service-Process clear" id="serveProcess">
      <div class="recruitment-service-title">
        <h2 class="title-h2">服务流程</h2>
        <h3 class="title-h3">FLOW</h3>
      </div>
      <ul class="recruitment-service-ul clear">
        <li class="recruitment-service-li">
          <span class="service-img"></span>
          <i class="line"></i>
          <span class="service-title">注册账号、提交需求</span>
          <span class="service-font">注册账号、绑定公号／提交岗位需求／明确岗位需求、商定职位细节</span>
        </li>
        <li class="recruitment-service-li">
          <span class="service-img"></span>
          <i class="line"></i>
          <span class="service-title">达成共识、签订协议</span>
          <span class="service-font">沟通服务模式／确认解决方案／双方签订协议</span>
        </li>
        <li class="recruitment-service-li">
          <span class="service-img"></span>
          <i class="line"></i>
          <span class="service-title">推送简历、预约面试</span>
          <span class="service-font">线上推送外教简历／跟踪面试进程／及时反馈面试情况</span>
        </li>
        <li class="recruitment-service-li">
          <span class="service-img"></span>
          <span class="service-title">外教签约，落地服务</span>
          <span class="service-font">外教签订offer／外教资质认证／外教签证办理／居留及保险办理</span>
        </li>
      </ul>
      </div>
    <div class="recruitment-service-items">
      <div class="recruitment-service-title">
        <h2 class="title-h2">服务项目</h2>
        <h3 class="title-h3">SERVICE</h3>
      </div>
      <ul class="recruitment-item-ul clear">
        <li class="item-recommend"></li>
        <li class="recruitment-item-li" v-for="(itemLi,index) in itmeArr">
          <div class="item-content">
            <span class="item-title">{{itemLi.title}}</span>
            <span class="item-font">{{itemLi.font}}</span>
            <span class="item-button" @click="getApplication">{{itemLi.button}}</span>
            <span class="item-line"></span>
            <ul class="item-ul-titleArr">
              <li class="ul-titleArr-li" v-for="(serverList,index) in itemLi.serverArr">
                <span class="li-Dots"></span>
                <span class="li-font">{{serverList.title}}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import 'common/css/reset.min.css';
  import nav from '../../components/M_navmenu/M_navmenu.vue';
  import footer from 'components/M_footer/M_footer.vue';
  import {bus} from '../../common/js/bus.js';

  export default {
    data(){
      return{
        itmeArr:[
          {
            title:'一站式服务',
            font:'一站式全方位信息咨询和业务代理服务。由Career China全权代理雇主品牌海外推广、外籍人力招聘面试、签证办理全流程、来华落地入职手续等全方位服务及在华全程管理协助。',
            button:'我要申请',
            serverArr:[
              {
                title:'雇主品牌及职位推广',
              },
              {
                title:'外籍人才筛选及面试',
              },
              {
                title:'代理或协助签约',
              },
              {
                title:'协助办理候选人海外三级认证、公证',
              },
              {
                title:'外国人工作许可通知办理',
              },
              {
                title:'来华单程票、接机落地服务',
              },
              {
                title:'工作许可证及居留代办',
              },
              {
                title:'试用期内外教离职更换',
              },
              {
                title:'合同期内的签证续签服务',
              },
              {
                title:'基本款外教商业保险以及每月外教薪资的代扣代发服务',
              }
            ]
          },
          {
            title:'一次性服务',
            font:'仅提供外籍人才来华前的推荐、面试、信息咨询及指导办理外籍人力来华手续相关服务。',
            button:'我要申请',
            serverArr:[
              {
                title:'雇主品牌及职位推广',
              },
              {
                title:'外籍人才筛选及面试',
              },
              {
                title:'代理或协助签约',
              },
              {
                title:'指导候选人海外三级认证、公证',
              },
            ]
          },
          {
            title:'专业签证服务',
            font:'提供外籍人才工作签证所需的全程海外三级认证、公证办理，解决客户签证难题。',
            button:'我要申请',
            serverArr:[
              {
                title:'候选人境外资料认证、公证',
              },
              {
                title:'海外体检指导',
              },
              {
                title:'办理外国人工作许可通知',
              },
              {
                title:'使领馆签证指导',
              },
              {
                title:'办理工作许可证',
              },
              {
                title:'办理居留许可',
              },
            ]
          },
        ]
      }
    },
    name: 'recruitment',
    components: {
      'v-nav-menu':nav,
      'v-footer':footer,
    },
    created(){
      // bus.$on('closeIcon',(data)=>{
      //   this.maskPopUps = data;
      // })
    },
    methods:{
      getApplication (){
        location.href="M_formData.html?HrefId="+2
      },

    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  $font-weight1 = 100;
  $font-weight2 = 200;
  $font-weight3 = 300;
  $font-weight4 = 400;
  #recruitment
    font-family:PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif,Helvetica Neue,Helvetica;
    background: #F9FAFC
    .recruitment-header
      position:relative
      height:240px
      .recruitment-header-img
        display:block
        width:100%
        height:240px
        background:url('../../common/img/M_img/m-bg-community-1@2x.png') no-repeat 50%
        background-size:cover
      .recruitment-header-h
        position:absolute
        top:104px
        left:50%
        margin-left:-112px
        width:224px
        .recruitment-header-h2
          margin-bottom:4px
          text-align:center
          font-size: 17px
          color: #FFFFFF
          font-weight:500
        .recruitment-header-h3
          font-size: 17px
          color: #FFFFFF
          font-weight:300
    .recruitment-service-Process
      padding:35px 0 25px 0
      width:335px
      margin:0 auto
      .recruitment-service-title
        margin:0px auto
        width:78px
        text-align:center
        .title-h2
          margin-bottom:2px
          font-weight:$font-weight4
          font-size: 17px
          color: #424953
        .title-h3
          font-weight:$font-weight1
          font-size: 8px
          color: #c2c3c5
      .recruitment-service-ul
        margin:25px auto 35px
        width:335px
        .recruitment-service-li
          position:relative
          float:left
          width:295px
          cursor:pointer
          .line
            position: absolute
            top: 17px
            left: 5px
            width: .5px
            height: 80px
            border: .1px dashed #a2a3a6
          .service-img
            display:inline-block
            width:12px
            height:12px
            background:url('../../common/img/M_img/m-icon-flow-circle@2x.png') no-repeat
            background-size:contain
          .service-title
            display:inline-block
            margin:0 0 10px 18px
            text-align:center
            font-size: 15px
            color: #424953
            font-weight: 500
          .service-font
            margin: 0 0 20px 33px
            display:block
            width:295px
            font-size: 14px
            color: #AEB0B8
            font-weight:$font-weight3
        .recruitment-li-img
          float:left
          margin:35px auto
          width:50px
          height:50px
          cursor:pointer
          .span-icon
            display:block
            width:50px
            height:50px
            background:url('../../common/img/icon-b-1.png') no-repeat -335px -262px
    .recruitment-service-items
      background: #F9FAFC
      width:335px
      margin:0 auto
      .recruitment-service-title
        margin:0px auto
        width:78px
        text-align:center
        .title-h2
          margin-bottom:6px
          font-weight:$font-weight4
          font-size: 17px
          color: #424953
        .title-h3
          font-weight:$font-weight1
          font-size: 8px
          color: #CFD3D8
      .recruitment-item-ul
        position:relative
        display:block
        margin:27px auto 0
        padding-bottom:20px
        width:335px
        .item-recommend
          position: absolute
          top: -4px
          left: -4px
          width: 82px
          height: 82px
          background: url('../../common/img/icon-flow-recommended@2x.png') no-repeat
          background-size: contain
        .recruitment-item-li
          float:left
          margin:0 20px 20px 0
          border:1px solid #EAEAEA
          border-top:2px solid #28292C
          background:#fff
          width:335px
          //height:810px
          .item-content
            margin:52px auto 0
            overflow: hidden
            width:275px
            .item-title
              display:block
              width:100%
              text-align:center
              font-size: 18px
              color: #424953
            .item-font
              display:block
              margin:24px auto 15px
              line-height:26px
              font-size: 14px
              color: #7F8794
              font-weight:$font-weight3
            .item-button
              display:block
              margin:0 auto
              width:130px
              height:33px
              line-height:33px
              background: #2061FF
              color:#fff
              font-size: 13px
              text-align:center
              cursor:pointer
            .item-line
              margin:25px auto 20px
              display:block
              width:305px
              height:1px
              border:.1px dashed #DCDCDC
            .item-ul-titleArr
              margin-bottom:60px
              .ul-titleArr-li
                height:37px
                line-height:37px
                .li-Dots
                  float:left
                  margin:16px 8px 0 0
                  width:3px
                  height:3px
                  border-radius:50%
                  background: #B7B8B8
                .li-font
                  float:left
                  width:226px
                  font-size: 14px
                  color: #7F8794
                  font-weight:$font-weight3
        .recruitment-item-li:nth-child(4)
          margin-right:0
</style>
