<template>
  <div class="about" id="about">
    <v-nav-menu></v-nav-menu>
    <div class="about-header">
      <span class="about-header-img"></span>
      <div class="about-header-h">
        <h2 class="about-header-h2">Career China</h2>
        <h3 class="about-header-h3">让客户招聘外教便捷更有效</h3>
      </div>
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="公司简介" name="first">
        <div class="about-first">
          <span class="first-span-1">
            好未来自2006年成立以来，致力科技推动教育进步，旗下拥有子品牌：学而思培优、学而思网校、爱智康、摩比、乐外教、家长帮、考研帮、高考帮、海边、考满分、励步英语、顺顺留学和Career China。2010年，好未来的前身学而思在美国纽交所正式挂牌交易（NYSE:XRS，现已更名为NYSE:TAL），成为国内首家在美上市的中小学教育机构。
          </span>
          <span class="first-span-2">
            Career China（法律主体：抹蓝人力资源管理顾问有限公司）成立于2017年2月，作为好未来旗下全资子公司， 致力于为中国教育行业引进海量优秀国际化人才和资源，尤其聚焦为机构提供合法、合格的优秀母语外籍教师，并提供全方位专业人力外包解决方案和相关技术支持。
          </span>
        </div>
        <div class="about-imgs">
          <span class="about-left-img"></span>
          <span class="about-right-img"></span>
        </div>
      </el-tab-pane>
      <el-tab-pane label="团队介绍" name="second">
        <div class="people_introduction">
          <!--web ipad 人物介绍-->
          <div :class="index===0?'per_one_line_box clear active':'per_one_line_box clear'" v-for="(leader,index) in leaderArr">
            <div class="img_box">
              <img :src="leader.funnyImg.materialUrl" :alt="leader.funnyImg.altText">
            </div>
            <div class="per_infor">
              <h6>{{leader.staffName}}<span class="position">/ {{leader.title}}</span></h6>
              <p class="motto">{{leader.selfIntroduction}}</p>
              <ul class="links_tab">
                <li class="links_list" v-if="leader.email">
                  <a :href="'mailto:'+leader.email" class="email_icon" :title="leader.email"></a>
                </li>
                <li class="links_list" v-if="leader.facebook">
                  <a :href="leader.facebook" class="facebook_icon" target="_blank"></a>
                </li>
                <li class="links_list" v-if="leader.twitter">
                  <a :href="leader.twitter" class="twitter_icon" target="_blank"></a>
                </li>
                <li class="links_list" v-if="leader.instagram">
                  <a :href="leader.instagram" class="instagram_icon" target="_blank"></a>
                </li>
                <li class="links_list" v-if="leader.linkedIn">
                  <a :href="leader.linkedIn" class="linkedln_icon" target="_blank"></a>
                </li>
                <li class="links_list" v-if="leader.youtube">
                  <a :href="leader.youtube" class="youtube_icon" target="_blank"></a>
                </li>
                <li class="links_list" v-if="leader.pinterest">
                  <a :href="leader.pinterest" class="pinterest_icon" target="_blank"></a>
                </li>
              </ul>
              <div class="cut_btn">
                <span class="prev" @click="prev(index)"></span>
                <span class="next" @click="next(index)"></span>
              </div>
            </div>
          </div>
          <ul class="pic_tab clear">
            <li class="pic_list" v-for="(leaderList,index) in leaderArr" @click="picClick(index)" @mouseenter="mouseOver(index,1)" @mouseleave="mouseOut(index,1)">
              <img class="list_img" :src="leaderList.coverImg.materialUrl" :alt="leaderList.coverImg.altText">
              <img class="list_img1" :src="leaderList.funnyImg.materialUrl" :alt="leaderList.funnyImg.altText">
            </li>
          </ul>
          <ul class="pic_tab clear pic_tab2">
            <template v-for="(personList,index) in peopleArr">
              <li class="pic_list" @click.prevent="picClick1(index)" @mouseenter="mouseOver(index,2)" @mouseleave="mouseOut(index,2)">
                <img class="list_img" :src="personList.coverImg.materialUrl" :alt="personList.coverImg.altText">
                <img class="list_img1" :src="personList.funnyImg.materialUrl" :alt="personList.funnyImg.altText">
              </li>
              <li class="per2 clear" v-if="((index+1)%rowsize == 0 || index == (arraysize-1))">
                <div class="img_box">
                  <img :src="tempinfo.funnyImg.materialUrl" :alt="tempinfo.funnyImg.altText">
                </div>
                <div class="per_infor">
                  <h6>{{tempinfo.staffName}}<span class="position">/ {{tempinfo.title}}</span></h6>
                  <p class="motto">{{tempinfo.selfIntroduction}}</p>
                  <ul class="links_tab">
                    <li class="links_list" v-if="tempinfo.email">
                      <a :href="'mailto:'+tempinfo.email" class="email_icon" :title="tempinfo.email"></a>
                    </li>
                    <li class="links_list" v-if="tempinfo.facebook">
                      <a :href="tempinfo.facebook" class="facebook_icon" target="_blank"></a>
                    </li>
                    <li class="links_list" v-if="tempinfo.twitter">
                      <a :href="tempinfo.twitter" class="twitter_icon" target="_blank"></a>
                    </li>
                    <li class="links_list" v-if="tempinfo.instagram">
                      <a :href="tempinfo.instagram" class="instagram_icon" target="_blank"></a>
                    </li>
                    <li class="links_list" v-if="tempinfo.linkedIn">
                      <a :href="tempinfo.linkedIn" class="linkedln_icon" target="_blank"></a>
                    </li>
                    <li class="links_list" v-if="tempinfo.youtube">
                      <a :href="tempinfo.youtube" class="youtube_icon" target="_blank"></a>
                    </li>
                    <li class="links_list" v-if="tempinfo.pinterest">
                      <a :href="tempinfo.pinterest" class="pinterest_icon" target="_blank"></a>
                    </li>
                  </ul>
                  <div class="cut_btn">
                    <span class="prev" @click="prev1(tempinfo.index)"></span>
                    <span class="next" @click="next1(tempinfo.index)"></span>
                  </div>
                </div>
              </li>
            </template>
          </ul>
          <!--手机端 人物列表图片-->
          <ul class="m_people_tab clear" v-show="m_per_list">
            <li class="m_people_list" v-for="(person,index) in personAll" @click="m_perList_click(index)">
              <img :src="person.coverImg.materialUrl" :alt="person.coverImg.altText" class="m_people_img">
            </li>
          </ul>
          <!--手机端弹窗人物介绍-->
          <div class="per_infor_popup" v-show="inforPopup">
            <i class="close_btn" @click="popup_close"></i>
            <img :src="m_perInfor.funnyImg.materialUrl" :alt="m_perInfor.funnyImg.altText" class="popup_img">
            <div class="popup_bottom">
              <h6>
                {{m_perInfor.staffName}}
                <span class="m_position">/ {{m_perInfor.title}}</span>
              </h6>
              <p class="m_pes">{{m_perInfor.selfIntroduction}}</p>
              <div class="outer_box">
                <div class="inner_box">
                  <ul class="m_links clear">
                    <li class="m_link_list" v-if="m_perInfor.email">
                      <a :href="'mailto:'+m_perInfor.email" class="email_icon" :title="m_perInfor.email"></a>
                    </li>
                    <li class="m_link_list" v-if="m_perInfor.facebook">
                      <a :href="m_perInfor.facebook" class="facebook_icon" target="_blank"></a>
                    </li>
                    <li class="m_link_list" v-if="m_perInfor.twitter">
                      <a :href="m_perInfor.twitter" class="twitter_icon" target="_blank"></a>
                    </li>
                    <li class="m_link_list" v-if="m_perInfor.instagram">
                      <a :href="m_perInfor.instagram" class="instagram_icon" target="_blank"></a>
                    </li>
                    <li class="m_link_list" v-if="m_perInfor.linkedIn">
                      <a :href="m_perInfor.linkedIn" class="linkedln_icon" target="_blank"></a>
                    </li>
                    <li class="m_link_list" v-if="m_perInfor.youtube">
                      <a :href="m_perInfor.youtube" class="youtube_icon" target="_blank"></a>
                    </li>
                    <li class="m_link_list" v-if="m_perInfor.pinterest">
                      <a :href="m_perInfor.pinterest" class="pinterest_icon" target="_blank"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="联系我们" name="third">
        <div class="about-contactUs">
          <div class="contactUs-h">
            <h2 class="contactUs-h2">联系我们</h2>
            <h3 class="contactUs-h3">CONTRACT</h3>
          </div>
          <div class="contactUs-map">
            <div class="map-left clear">
              <div class="map-left-div clear">
                <span class="map-title">座&nbsp; &nbsp; &nbsp; &nbsp;机:</span>
                <span class="map-font">400-669-7618</span>
              </div>
              <div class="map-left-div clear">
                <span class="map-title">微信客服:</span>
                <span class="map-font">17611670953</span>
              </div>
              <div class="map-left-div clear">
                <span class="map-title">邮&nbsp; &nbsp; &nbsp; &nbsp;箱:</span>
                <span class="map-font">business@careerchina.com</span>
              </div>
              <div class="map-left-div clear">
                <span class="map-title">地&nbsp; &nbsp; &nbsp; &nbsp;址:</span>
                <span class="map-font">北京市朝阳区和平街东土城路8号林达大厦B座5层C室</span>
              </div>
            </div>
            <div id="dituContent"></div>
          </div>
          <div class="contactUs-form">
            <div class="contactUs-form-hs">
              <h2 class="contactUs-form-h2">获取专属客服</h2>
              <h3 class="contactUs-form-h3">SERVICE</h3>
            </div>
            <div class="contactUs-form-content">
              <span class="content-title">请您填写真实信息，我们将有专属客服在1-2个工作日内联系您。Career China不会将您的信息分享、售卖、或交还给任何第三方公司。同时也欢迎您直接联系我们的专属客服17611670953（微信同号）为您提供服务。</span>
              <div class="form-flex">
                <div class="flex-1 clear">
                  <input type="text" name="" v-model="valueMechanism" class="mechanism" :placeholder="this.mechanism" :class="{required:isRequired1,border:isBorder1}" @click="focusMechanism" maxlength="50"/>

                  <input type="text" name="" v-model="valueName" class="name" :placeholder="this.name" :class="{required:isRequired2,border:isBorder2}"
                  @click="focusName" maxlength="25" />
                </div>
                <div class="flex-1 clear">
                  <input type="text" name="" v-model="valuePhone" class="phonenumber" :placeholder="this.phonenumber" :class="{required:isRequired3,border:isBorder3}"
                  @click="focusPhone" maxlength="25" />

                  <input type="text" name="" v-model="valueWechat" class="wechat" :placeholder="this.wechat" :class="{required:isRequired4,border:isBorder4}"
                  @click="focusWechat" maxlength="25" />

                  <input type="text" name="" v-model="valueEmail" class="email" :placeholder="this.email" maxlength="60"
                  :class="{required:isRequired5,border:isBorder5}"
                  @click="focusEmail"/>
                </div>
                <div class="flex-1 clear">
                  <textarea name="name" rows="8" cols="80" :placeholder="this.Related" class="Related" v-model="valueRelated" maxlength="200"></textarea>
                </div>
                <div class="form-button" @click="postData">一键申请</div>
              </div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <v-footer></v-footer>
  </div>
</template>

<script type="text/ecmascript-6">
  import 'common/css/reset.min.css'
  // import config from'../../common/js/config.js'
  import localhost from'../../common/js/public.js'
  import nav from '../../components/NavMenu/NavMenu.vue';
  import footer from '../../components/footer/footer.vue';
  import $ from 'jQuery'
  const getQueryString = (name)=>{
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }
  export default{
    data(){
      return{
        activeName: 'third',
        rowsize:6,
        arraysize:0,
        tempinfo:{
          'coverImg':{
             'materialUrl':'',
             'altText':''
          },
          'funnyImg':{
            'materialUrl':'',
            'altText':''
          },
          'staffName':'',
          'title':'',
          'selfIntroduction':'',
          'index':0,
          'email':'',
          'facebook':'',
          'twitter':'',
          'instagram':'',
          'linkedIn':'',
          'youtube':'',
          'pinterest':'',
        },
        ipad:false,
        personAll:[],
        leaderArr:[],
        peopleArr:[],
        inforPopup:false,
        m_perInfor:{
          'coverImg':{
              'materialUrl':'',
              'altText':''
          },
          'funnyImg':{
            'materialUrl':'',
            'altText':''
          },
          'staffName':'',
          'title':'',
          'selfIntroduction':'',
          'email':'',
          'facebook':'',
          'twitter':'',
          'instagram':'',
          'linkedIn':'',
          'youtube':'',
          'pinterest':'',
        },
        m_per_list:true,
        footer:true,
        team_introduce:true,
        mechanism:"您的企业名称 *",
        name:"您的姓名 *",
        phonenumber:"手机 *",
        wechat:"微信号 *",
        email:"邮箱（选填）",
        Related:"您的其它服务要求（选填）",
        valueMechanism:'',
        valueName:'',
        valuePhone:'',
        valueWechat:'',
        valueEmail:'',
        valueRelated:'',
        isRequired1:false,
        isRequired2:false,
        isRequired3:false,
        isRequired4:false,
        isRequired5:false,
        isBorder1:false,
        isBorder2:false,
        isBorder3:false,
        isBorder4:false,
        isBorder5:false,
      }
    },
    components:{
      'v-nav-menu':nav,
      'v-footer':footer
    },
    created(){

    },
    methods:{
      //创建和初始化地图函数：
      initMap(){
        this.createMap();//创建地图
        this.setMapEvent();//设置地图事件
        this.addMapControl();//向地图添加控件
      },
      getStaffList(rowsize){
        this.$http.get(localhost+'/cc/staff/list').then((res)=>{
          let allStaff = res.body.resultObj,
              workStaff = [];
          for(let i=0;i<allStaff.length;i++){
            if(allStaff[i].status===1){
              workStaff.push(allStaff[i])
            }
          }
          this.leaderArr = workStaff.splice(0,rowsize);
          this.peopleArr = workStaff;
          this.arraysize = this.peopleArr.length;
          this.personAll = this.leaderArr.concat(this.peopleArr);
        })
      },
      ifWindowWidth(){
        let Width = $(window).width();
        if(Width<=768){
          this.rowsize = 5;
          this.getStaffList(this.rowsize)
        }else {
          this.rowsize = 6;
          this.getStaffList(this.rowsize)
        }
      },
      ipadShow(){
        this.ipad=true
      },
      ipadHide(){
        this.ipad=false
      },
      picClick(index){
        $('.per_one_line_box').eq(index).addClass('active').siblings().removeClass('active');
        setTimeout(function () {
          $('html,body').animate({
            scrollTop: $('.per_one_line_box').eq(index).offset().top - 100
          }, 500);
        },300);
      },
      picClick1(index){
        //ev.preventDefault=true;//阻止默认事件（原生方法）
        var lineMaxIndex = (Math.floor(index/this.rowsize)+1)-1;
        if(parseInt(index/this.rowsize) == parseInt((this.peopleArr.length-1)/this.rowsize)) lineMaxIndex=parseInt(index/this.rowsize);
        $('.per2').eq(lineMaxIndex).addClass('per2Active').siblings().removeClass('per2Active');
        this.tempinfo = this.peopleArr[index];
        this.tempinfo.index = index;
        setTimeout(function () {
          $('html,body').animate({
            scrollTop: $('.per2Active').offset().top - 250
          }, 500);
        },300);
      },
      prev(index){
        if(index===0){
          return
        }else {
          $('.per_one_line_box').eq(index-1).addClass('active').siblings().removeClass('active');
        }
      },
      next(index){
        if(index===this.leaderArr.length-1){
          return
        }else {
          $('.per_one_line_box').eq(index+1).addClass('active').siblings().removeClass('active');
        }
      },
      prev1(index){
          index -= 1;
        if(index === -1){
          return
        }
        this.picClick1(index)
      },
      next1(index){
          index += 1;
        if(index === this.peopleArr.length){
            return
        }
        this.picClick1(index)
      },
      m_perList_click(index){
        this.m_perInfor = this.personAll[index];
        this.inforPopup=true;
        //this.m_per_list=false;
        this.footer=false;
        this.team_introduce=false;
      },
      popup_close(){
        this.inforPopup=false;
       // this.m_per_list=true;
        this.footer=true;
        this.team_introduce=true;
      },
      mouseOver(index,flag){
        //this.leaderArr[index].flag = 1;
        if(flag===1){
          $('.pic_tab li').eq(index).children('.list_img').hide();
          $('.pic_tab li').eq(index).children('.list_img1').show()
        }else {
          $('.pic_tab2 .pic_list').eq(index).children('.list_img').hide();
          $('.pic_tab2 .pic_list').eq(index).children('.list_img1').show()
        }

      },
      mouseOut(index,flag){
        if(flag===1){
          $('.pic_tab li').eq(index).children('.list_img').show();
          $('.pic_tab li').eq(index).children('.list_img1').hide()
        }else {
          $('.pic_tab2 .pic_list').eq(index).children('.list_img').show();
          $('.pic_tab2 .pic_list').eq(index).children('.list_img1').hide()
        }

      },
      //创建地图函数：
      createMap(){
          var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
          var point = new BMap.Point(116.439533,39.9622);//定义一个中心点坐标
          map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
          window.map = map;//将map变量存储在全局
      },
      //地图事件设置函数：
      setMapEvent(){
          map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
          map.enableScrollWheelZoom();//启用地图滚轮放大缩小
          map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
          map.enableKeyboard();//启用键盘上下左右键移动地图
      },
      //地图控件添加函数：
      addMapControl(){
        //向地图中添加缩放控件
      	var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      	map.addControl(ctrl_nav);
              //向地图中添加缩略图控件
      	var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
      	map.addControl(ctrl_ove);
              //向地图中添加比例尺控件
      	var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      	map.addControl(ctrl_sca);
      },
      postData(){
        let regUrl = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(!this.valueMechanism){
          this.isRequired1 = true;
          this.isBorder1 = true;
          this.mechanism = '请填写机构名称';
        }
        if(!this.valueName){
          this.isRequired2 = true;
          this.isBorder2 = true;
          this.name = '请填写您的姓名';
        }
        if(!this.valuePhone){
          this.isRequired3 = true;
          this.isBorder3 = true;
          this.phonenumber = '请填写您的手机号';
        }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.valuePhone))){
          this.valuePhone = '';
          this.isRequired3 = true;
          this.isBorder3 = true;
          this.phonenumber = '请填写正确的手机号';
        }
        if(!this.valueWechat){
          this.isRequired4 = true;
          this.isBorder4 = true;
          this.wechat = '请填写您的微信账号';
        }
        if(this.valueEmail && !regUrl.test(this.valueEmail)){
          this.isRequired5 = true;
          this.isBorder5 = true;
          this.valueEmail = '';
          this.email = '请填写正确的邮箱';
        }
        if(this.isRequired1 || this.isRequired2 || this.isRequired3 || this.isRequired4 || this.isRequired5){
          return false
        }else{
          this.$http.post(localhost+'/cc/customer/feedback/create',{
            access_token:$.cookie('B-access_token'),
            companyName:this.valueMechanism,
            contactName:this.valueName,
            contactPhone:this.valuePhone,
            wechat:this.valueWechat,
            email:this.valueEmail,
            notes:this.valueRelated,
          },{emulateJSON:true}).then((response)=>{
            if(response.body.error_code == 200){
              this.submitHide = false;
              this.successHide = true;
            }
            //console.log(response.body)
          })
        };
      },
      focusMechanism(){
        this.isRequired1 = false;
        this.isBorder1 = false;
        this.mechanism = '机构名称 *';
      },
      focusName(){
        this.isRequired2 = false;
        this.isBorder2 = false;
        this.name = '您的姓名 *';
      },
      focusPhone(){
        this.isRequired3 = false;
        this.isBorder3 = false;
        this.phonenumber = '机构手机号名称 *';
      },
      focusWechat(){
        this.isRequired4 = false;
        this.isBorder4 = false;
        this.wechat = '微信账号 *';
      },
      focusEmail(){
        this.isRequired5 = false;
        this.isBorder5 = false;
        this.email = '邮箱（选填）';
      }
    },
    mounted(){
      if(getQueryString('page') == 1){
        this.activeName = 'first';
      }else if (getQueryString('page') == 2) {
        this.activeName = 'second';
      }else if(getQueryString('page') == 3){
        this.activeName = 'third';
      }else {
        this.activeName='first'
      }
      this.ifWindowWidth();
      this.initMap();
    }
  }
</script>

<style>
  #about{
    font-family:PingFang SC,Microsoft YaHei,Hiragino Sans GB,SimSun,sans-serif,Helvetica Neue,Helvetica;
  }
  .mechanism::-webkit-input-placeholder{
    color:#87888A;
  }

  .required::-webkit-input-placeholder{
    color:#ED4E13;
  }

  /*input::-webkit-input-placeholder {
    color: #87888A;
  }
  :-moz-placeholder {
    color: #87888A;
  }
  ::-moz-placeholder {
    color: #87888A;
  }
  input:-ms-input-placeholder {
    color: #87888A;
  }*/
  .at-share-dock.atss{
    z-index: 110 !important;
  }
  .about{
    min-width: 1100px;
    background: #F9F9FB;
  }
  .about-header{
    position: relative;
  }
  .about-header-img{
    display: block;
    width: 100%;
    height: 680px;
    background: url("../../common/img/bg-aboutus-1.jpg")no-repeat center fixed;
    background-size: cover;
  }
  .about-header-h{
    position:absolute;
    top:270px;
    left:50%;
    margin-left:-228px;
    width:456px;
  }
  .about-header-h2{
    margin-bottom:30px;
    text-align:center;
    font-size: 38px;
    color: #FFFFFF;
    font-weight: 400;
  }
  .about-header-h3{
    font-weight: 100;
    font-size: 38px;
    color: #FFFFFF;
  }
  .el-tabs{
    margin:0 auto;
    width: 100%;
  }
  .el-tabs .el-tabs__header{
    margin:0 ;
    height: 80px;
    line-height: 80px;
    border:none;
    background: #fff;
  }
  .el-tabs .el-tabs__item{
    padding:0 38px;
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    color: #7F8794;
    font-weight: 200;
  }
  .el-tabs__item.is-active{
    color: #2061ff !important;
  }
  .el-tabs__active-bar{
    background: #2061ff !important;
  }
  .el-tabs .el-tabs__nav-wrap{
    margin: 0 auto;
    width: 460px;
  }
  .about-first{
    margin:100px auto 60px;
    width: 760px;
  }
  .about-first .first-span-1{
    margin-bottom: 30px;
    display: block;
    font-size: 14px;
    color: #424953;
    font-weight: 200;
    line-height: 30px;
  }
  .about-first .first-span-2{
    display: block;
    font-weight: 200;
    font-size: 14px;
    color: #424953;
    line-height: 30px;
  }
  .about-imgs{
    margin:0 auto 150px;
    width: 760px;
    height: 180px;
  }
  .about-left-img{
    float: left;
    margin-right:20px;
    width: 370px;
    height: 180px;
    background: url('../../common/img/bg-us-1.png') no-repeat;
  }
  .about-right-img{
    float: left;
    width: 370px;
    height: 180px;
    background: url('../../common/img/bg-us-2.png') no-repeat;
  }
  .about-contactUs{
    margin:100px auto;
    width: 1000px;
  }
  .contactUs-h{
    margin:0 auto 50px;
    width: 120px;
    text-align: center;
  }
  .contactUs-h2{
    margin-bottom: 10px;
    font-size: 30px;
    color: #424953;
    font-weight: 400;
  }
  .contactUs-h3{
    font-weight: 100;
    font-size: 12px;
    color: #CFD3D8;
  }
  .contactUs-form-content{
    margin: 0 auto 150px;
    width: 1000px;
    height: 514px;
    background-color: #fff;
  }
  #dituContent{
    float: left;
    margin:20px;
    width:400px;
    height:240px;
    border:#ccc solid 1px;
  }
  .contactUs-map{
    width:1000px;
    height: 280px;
    background: #fff;
  }
  .map-left-div{
    margin-bottom:22px;
  }
  .map-left{
    float: left;
    margin:66px 100px 0px 40px;
  }
  .map-title{
    float: left;
    margin-right: 24px;
    font-size: 14px;
    color: #424953;
    font-weight:300;
  }
  .map-font{
    font-weight:300;
    float: left;
    width: 331px;
    font-size: 14px;
    color: #424953;
  }
  .contactUs-form{
    width: 1000px;
  }
  .contactUs-form-hs{
    margin:100px auto 50px;
    width: 180px;
  }
  .contactUs-form-h2{
    font-weight: 400;
    font-size: 30px;
    margin-bottom: 10px;
    color: #424953;
  }
  .contactUs-form-h3{
    font-weight: 100;
    text-align: center;
    font-size: 12px;
    color: #CFD3D8;
  }
  .content-title{
    display: block;
    text-align: center;
    font-weight: 300;
    padding-top:50px;
    margin:0px auto 30px;
    width: 800px;
    line-height: 30px;
    font-size: 14px;
    color: #424953;
  }
  .form-flex{
    margin: 0 auto;
    width: 680px;
  }
  .flex-1{
    display: flex;
  }
  .mechanism,.name,.phonenumber,.wechat,.email,.Related{
    padding-left: 18px;
    margin-bottom: 20px;
    height: 50px;
    background: #F9FAFC;
    width:450px;
    border:none;
    font-size: 14px;
    color: #87888A;
    font-weight: 200;
  }
  .phonenumber,.wechat,.email{
    margin-left: 10px;
    width: 220px;
  }
  .phonenumber{
    margin-left:0px;
  }
  .Related{
    padding-top: 18px;
    width: 680px;
    height: 100px;
    resize:none;
    margin-bottom: 0;
  }
  .name{
    margin-left: 10px;
    width: 220px;
  }
  .border{
    border: 1px solid #ED4E13;
  }

  .form-button{
    margin: 40px auto 0px;
    width: 180px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #2061FF;
    font-size: 16px;
    cursor: pointer;
    color: #FFFFFF;
  }
  .auto{
    width: 1040px;
    margin: auto;
  }
  h1{
    text-align: center;
    font-size: 50px;
    color: #FFFFFF;
  }
  .head_des{
    margin-top: 20px;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
  }
  .people_introduction{
    width: 1062px;
    margin: 0 auto 150px;
    padding-top: 100px;
  }
  .people_introduction .per_one_line_box{
    position: relative;
    margin: auto;
    width: 1040px;
    height: 0;
    background: #fff;
    display: none;
  }
  .people_introduction .per2{
    position: relative;
    display: block;
    float: left;
    width: 1040px;
    height: 0;
    margin:0 11px;
    transition: all .5s;
    overflow: hidden;
  }
  .people_introduction .per2Active{
    margin: 50px 11px 22px;
    height: 427px;
    background: #fff;
  }
  .people_introduction .active{
    height: 427px;
    display: block;
  }
  .per_one_line_box .img_box,.per2 .img_box{
    float: left;
    width: 320px;
    height: 100%;
  }
  .per_one_line_box img,.per2 img{
    width: 100%;
    height: 100%;
  }
  .per_one_line_box .per_infor,.per2 .per_infor{
    float: left;
    margin-left: 140px;
    width: 440px;
    padding-top: 88px;
  }
  .per_one_line_box .per_infor h6,.per2 .per_infor h6{
    font-size: 34px;
    color: #333435;
  }
  .per_one_line_box .per_infor h6 .position,.per2 .per_infor h6 .position{
    margin-left: 10px;
    font-size: 14px;
    color: #333435;
    font-weight: 400;
  }
  .per_one_line_box .per_infor .motto,.per2 .per_infor .motto{
    margin: 55px 0;
    max-height: 78px;
    font-size: 14px;
    color: #888888;
    line-height: 26px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .per_infor .links_tab .links_list{
    float: left;
    width: 40px;
    height: 40px;
    margin-right: 11px;
    cursor: pointer;
  }
  .per_infor .links_tab .links_list a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .email_icon{
     background: url("../../common/img/icon-aboutus-email-normal@2x.png")no-repeat center;
     background-size: cover;
   }
  .email_icon:hover{
    background: url("../../common/img/icon-aboutus-email-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .facebook_icon{
    background: url("../../common/img/icon-aboutus-facebook-normal@2x.png")no-repeat center;
    background-size: cover;
  }
  .facebook_icon:hover{
    background: url("../../common/img/icon-aboutus-facebook-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .twitter_icon{
    background: url("../../common/img/icon-aboutus-twitter-normal@2x.png")no-repeat center;
    background-size: cover;
  }
  .twitter_icon:hover{
    background: url("../../common/img/icon-aboutus-twitter-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .instagram_icon{
    background: url("../../common/img/icon-aboutus-instagram-normal@2x.png")no-repeat center;
    background-size: cover;
  }
  .instagram_icon:hover{
    background: url("../../common/img/icon-aboutus-instagram-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .linkedln_icon{
    background: url("../../common/img/icon-aboutus-linkin-normal@2x.png")no-repeat center;
    background-size: cover;
  }
  .linkedln_icon:hover{
    background: url("../../common/img/icon-aboutus-linkin-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .youtube_icon{
    background: url("../../common/img/icon-aboutus-youtube-normal@2x.png")no-repeat center;
    background-size: cover;
  }
  .youtube_icon:hover{
    background: url("../../common/img/icon-aboutus-youtube-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .pinterest_icon{
    background: url("../../common/img/icon-aboutus-pinterest-normal@2x.png")no-repeat center;
    background-size: cover;
  }
  .pinterest_icon:hover{
    background: url("../../common/img/icon-aboutus-pinterest-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .per_one_line_box .per_infor .links_tab .links_list:last-child{
    margin-right: 0;
  }
  .per2 .per_infor .links_tab .links_list:last-child{
    margin-right: 0;
  }
  .per_one_line_box .per_infor .cut_btn,.per2 .per_infor .cut_btn{
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .per_infor .cut_btn .prev,.next{
    display: inline-block;
    width: 26px;
    height: 26px;
    cursor: pointer;
  }
  .per_infor .cut_btn .prev{
    margin-right: 10px;
    background: url("../../common/img/icon-aboutus-arrow-left-normal@2x.png")no-repeat center;
    background-size: cover;
  }
  .per_infor .cut_btn .prev:hover{
    background: url("../../common/img/icon-aboutus-arrow-left-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .per_infor .cut_btn .next{
    background: url("../../common/img/icon-aboutus-arrow-right-normal@2x.png")no-repeat center;
    background-size: cover;
  }
  .per_infor .cut_btn .next:hover{
    background: url("../../common/img/icon-aboutus-arrow-right-press@2x.png")no-repeat center;
    background-size: cover;
  }
  .pic_tab{
    margin-top: 50px;
  }
  .pic_tab .pic_list{
    position: relative;
    float: left;
    width: 16.66%;
    height: 200px;
    cursor: pointer;
    padding: 0 1.11%;
  }
  .pic_tab2{
    margin-top: 0;
  }
  .pic_tab2 .pic_list{
    margin-top: 28px;
  }
  .pic_tab .pic_list .list_img,.list_img1{
    width: 100%;
    height: 100%;
  }
  .pic_tab .pic_list .list_img1{
    display: none;
  }
  .m_people_tab{
    margin-left: -2.55%;
    width: 105%;
    display: none;
  }
  .m_people_tab .m_people_list{
    float: left;
    margin-bottom: 10px;
    width: 33.33%;
    height: 139px;
    padding: 0 1.55%;
    cursor: pointer;
  }
  .m_people_tab .m_people_list .m_people_img{
    width: 100%;
    height: 100%;
  }
  .per_infor_popup{
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 115;
  }
  .per_infor_popup .close_btn{
    position: absolute;
    top:16.5px;
    right: 12.5px;
    width: 18px;
    height: 18px;
    background: url("../../common/img/icon-aboutus-close@2x.png")no-repeat center;
    background-size: cover;
    cursor: pointer;
  }
  .per_infor_popup .popup_img{
    width: 100%;
  }
  .per_infor_popup .popup_bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 22px 0 22px 24px;
    z-index: 116;
    background: #fff;
  }
  .per_infor_popup h6{
    font-size: 18px;
    color: #333435;
  }
  .per_infor_popup h6 .m_position{
    margin-left: 12px;
    font-size: 12px;
    color: #333435;
  }
  .per_infor_popup .m_pes{
    margin: 16px 0;
    width: 300px;
    max-height: 60px;
    font-size: 14px;
    color: #888888;
    line-height: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  /*.per_infor_popup .outer_box,.m_links{
    width: 100%;
    height: 44px;
  }*/
  .per_infor_popup .outer_box{
    position: relative;
    width: 100%;
    height: 44px;
    overflow: hidden;
  }
  .per_infor_popup .outer_box .inner_box{
    width: 100%;
    height: 60px;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .per_infor_popup .m_links{
    width: 460px;
  }
  .per_infor_popup .m_links .m_link_list{
    float: left;
    margin-right: 22px;
    width: 44px;
    height: 44px;
    cursor: pointer;
  }
  .per_infor_popup .m_links .m_link_list a{
    display: block;
    width: 100%;
    height: 100%;
  }
  .per_infor_popup .m_links .m_link_list:last-child{
    margin-right: 0;
  }
  @media (max-width: 768px){
    .head_box{
      padding-top: 213px;
      height: 434px;
    }
    .auto{
      width: 688px;
    }
    h1{
      font-size: 28px;
    }
    .head_des{
      margin-top: 16px;
      font-size: 16px;
    }

    .people_introduction{
      width: 695.6px;
      padding-top: 60px;
    }
    .people_introduction .per_one_line_box{
      width: 688px;
    }
    .people_introduction .per2{
      width: 688px;
      margin:0 3.8px;
    }
    .people_introduction .per2Active{
      margin: 30px 3.8px 13px;
      height: 267px;
    }
    .people_introduction .active{
      height: 267px;
    }
    .per_one_line_box .img_box,.per2 .img_box{
      width: 200px;
    }
    .per_one_line_box .per_infor,.per2 .per_infor{
      margin-left: 30px;
      width: 428px;
      padding-top: 40px;
    }
    .per_one_line_box .per_infor h6,.per2 .per_infor h6{
      font-size: 20px;
    }
    .per_one_line_box .per_infor .motto,.per2 .per_infor .motto{
      margin: 30px 0;
    }
    .per_one_line_box .per_infor .cut_btn,.per2 .per_infor .cut_btn{
      bottom: 14px;
      right: 14px;
    }
    .pic_tab{
      margin-top: 30px;
    }
    .pic_tab2 {
      margin-top: 0;
    }
    .pic_tab .pic_list{
      width: 20%;
      height: 173px;
      padding: 0 0.55%;
    }
    .pic_tab2 .pic_list{
      margin-top: 17px;
    }

    .team_introduce{
      width: 688px;
      margin: 60px auto;
    }
    .team_introduce .part_tab .part_every{
      margin-bottom: 40px;
    }
    .team_introduce .part_tab .part_every .part_des_box{
      margin-bottom: 40px;
    }
    .part_every .part_des_box .detailed_des{
      width: 500px;
      line-height: 24px;
    }
    .part_every .part_des_box .detailed_des1{
      margin-left: 42px;
    }
    .part_every .part_des_box .detailed_des2{
      margin-right: 35px;
    }
    .part_every .part_des_box .detailed_des3{
      margin-left: 31px;
    }
    .part_every .part_img,.part_img1{
      width: 500px;
      height: 256px;
    }
  }
  @media (max-width: 415px){
    .head_box{
      padding-top: 156px;
      height: 337px;
    }
    .auto{
      width: 90%;
    }
    h1{
      font-size: 18px;
    }
    .head_des{
      width: 302px;
      margin: 16px auto;
      font-size: 14px;
      line-height: 16px;
    }
    .people_introduction{
      width: 90%;
      padding-top: 20px;
    }
    .people_introduction .per_one_line_box{
      display: none;
    }
    .people_introduction .per2{
      display: none;
    }
    .pic_tab{
      display: none;
    }
    .pic_tab2{
      display: none;
    }
    .m_people_tab{
      display: block;
    }

    .team_introduce{
      width: 90%;
      margin: 30px auto;
    }
    .team_introduce .part_tab .part_every{
      margin-bottom: 30px;
    }
    .team_introduce .part_tab .part_every .part_des_box{
      margin-bottom: 20px;
    }
    .part_every .part_des_box .title_field1,.title_field2,.title_field3{
      display: none;
    }
    .part_every .part_des_box .detailed_des{
      width: 100%;
    }
    /*.part_every .part_des_box .detailed_des .spacing{
      display: block;
      width: 100%;
      height: 12px;
    }*/
    .part_every .part_des_box .detailed_des1{
      float: inherit;
      margin-left: 0;
    }
    .part_every .part_des_box .detailed_des2{
      float: inherit;
      margin-right: 0;
    }
    .part_every .part_des_box .detailed_des3{
      float: inherit;
      margin-left: 0;
    }
    .part_every .part_img,.part_img1{
      width: 100%;
      height: 172px;
    }
    .part_every .part_img{
      float: inherit;
    }
    .part_every .part_img1{
      float: inherit;
    }
    .m_h2{
      display: block;
    }
  }
</style>
