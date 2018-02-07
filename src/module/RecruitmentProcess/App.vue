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
          <span class="service-title">注册账号、提交需求</span>
          <span class="service-font">注册账号、绑定公号／提交岗位需求／明确岗位需求、商定职位细节</span>
        </li>
        <li class="recruitment-li-img">
          <span class="span-icon"></span>
        </li>
        <li class="recruitment-service-li">
          <span class="service-img service-img-2"></span>
          <span class="service-title">达成共识、签订协议</span>
          <span class="service-font">沟通服务模式／确认解决方案／双方签订协议</span>
        </li>
        <li class="recruitment-li-img">
          <span class="span-icon"></span>
        </li>
        <li class="recruitment-service-li">
          <span class="service-img service-img-3"></span>
          <span class="service-title">推送简历、预约面试</span>
          <span class="service-font">线上推送外教简历／跟踪面试进程／及时反馈面试情况</span>
        </li>
        <li class="recruitment-li-img">
          <span class="span-icon"></span>
        </li>
        <li class="recruitment-service-li">
          <span class="service-img service-img-4"></span>
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
    <v-popups v-show="maskPopUps"></v-popups>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import 'common/css/reset.min.css';
  import nav from '../../components/NavMenu/NavMenu.vue';
  import popups from '../../components/PopUpsForm/PopUpsForm.vue';
  import footer from '../../components/footer/footer.vue';
  import {bus} from '../../common/js/bus.js';

  export default {
    data(){
      return{
        maskPopUps:false,
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
      'v-popups':popups
    },
    created(){
      bus.$on('closeIcon',(data)=>{
        this.maskPopUps = data;
      })
    },
    methods:{
      getApplication (){
        this.maskPopUps = true;
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
    min-width:1100px
    font-family:PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif,Helvetica Neue,Helvetica;
    .recruitment-header
      position:relative
      height:660px
      .recruitment-header-img
        position:fixed
        z-index:-1
        display:block
        width:100%
        height:660px
        background:url('../../common/img/bg-flow-1.jpg') no-repeat 50%
        background-size:cover
      .recruitment-header-h
        position:absolute
        top:270px
        left:50%
        margin-left:-228px
        width:456px
        .recruitment-header-h2
          margin-bottom:30px
          text-align:center
          font-size: 38px
          color: #FFFFFF
          font-weight:$font-weight4
        .recruitment-header-h3
          font-weight:$font-weight1
          font-size: 38px
          color: #FFFFFF
    .recruitment-service-Process
      padding:90px 0 90px 0
      background: #F9FAFC
      .recruitment-service-title
        margin:0px auto
        width:120px
        text-align:center
        .title-h2
          margin-bottom:10px
          font-weight:$font-weight4
          font-size: 30px
          color: #424953
        .title-h3
          font-weight:$font-weight1
          font-size: 12px
          color: #CFD3D8
      .recruitment-service-ul
        margin:50px auto
        width:1100px
        .recruitment-service-li
          float:left
          width:220px
          cursor:pointer
          .service-img
            display:block
            margin:0 auto
            width:120px
            height:120px
            background:url('../../common/img/icon-b-1.png') no-repeat -505px -85px
          .service-title
            display:block
            margin:30px auto 12px
            text-align:center
            font-size: 16px
            color: #424953
          .service-font
            font-size: 14px
            color: #AEB0B8
            font-weight:$font-weight3
          .service-img-2
            background-position:-652px -85px
          .service-img-3
            background-position:-509px -227px
          .service-img-4
            background-position:-651px -227px
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
      .recruitment-service-title
        margin:0px auto
        width:120px
        text-align:center
        .title-h2
          margin-bottom:10px
          font-weight:$font-weight4
          font-size: 30px
          color: #424953
        .title-h3
          font-weight:$font-weight1
          font-size: 12px
          color: #CFD3D8
      .recruitment-item-ul
        position:relative
        display:block
        margin:50px auto 0
        padding-bottom:150px
        width:1100px
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
          border:1px solid #EAEAEA
          border-top:2px solid #28292C
          margin-right:20px
          background:#fff
          width:320px
          height:810px
          .item-content
            margin:52px auto 0
            width:240px
            .item-title
              display:block
              width:100%
              text-align:center
              font-size: 18px
              color: #424953
            .item-font
              display:block
              height:134px
              margin:24px auto
              line-height:26px
              font-size: 14px
              color: #7F8794
              font-weight:$font-weight3
            .item-button
              display:block
              margin:0 auto
              width:180px
              height:40px
              line-height:40px
              background: #2061FF
              color:#fff
              font-size: 14px
              text-align:center
              cursor:pointer
            .item-line
              margin:31px auto 26px
              display:block
              width:100%
              height:1px
              border:.1px dotted #DCDCDC
            .item-ul-titleArr
              height:396px
              .ul-titleArr-li
                height:37px
                line-height:37px
                .li-Dots
                  float:left
                  margin:16px 8px 0 0
                  width:3px
                  height:3px
                  border-radius:50%
                  background: #2061FF
                .li-font
                  float:left
                  width:226px
                  font-size: 14px
                  color: #7F8794
                  font-weight:$font-weight3
        .recruitment-item-li:nth-child(4)
          margin-right:0
</style>
