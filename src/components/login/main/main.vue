<template>
<div class="main_" id="main">
  <div class="menu clear">
    <ul class="menu_Router">
      <li class="goLeft li" ></li>
      <li class="index li">
        <router-link to="/homePage" >
          <i class="main_i"></i>
          <span class="router-font">招聘首页</span>
          <i class="main_i-2 account-hover">
            <div class="main-div account-hover-Details">
              <span class="main-left">
                <span class="main-right">
                  管理登录账号（手机号），登录密码等。
                </span>
              </span>
            </div>
          </i>
        </router-link>
      </li>
      <li class="management li">
        <router-link to="/InterviewManagement" >
          <i class="main_i"></i>
          <span class="router-font">面试管理</span>
          <i class="main_i-2 account-hover">
            <div class="main-div account-hover-Details">
              <span class="main-left">
                <span class="main-right">
                  管理登录账号（手机号），登录密码等。
                </span>
              </span>
            </div>
          </i>
        </router-link>
      </li>
      <li class="data li">
        <router-link to="/data">
          <i class="main_i"></i>
          <span class="router-font">机构信息</span>
          <i class="main_i-2 data-hover">
            <div class="main-div data-hover-Details">
              <span class="main-left">
                <span class="main-right data-right-top">
                  完善关于您的企业信息，我们将为您提供更细致化的服务。
                </span>
              </span>
            </div>
          </i>
        </router-link>
      </li>
      <li class="demand li">
        <router-link to="/demand" >
          <i class="main_i"></i>
          <span class="router-font">岗位需求</span>
          <i class="main_i-2 demand-hover">
            <div class="main-div demand-hover-Details">
              <span class="main-left">
                <span class="main-right">
                  提交待招聘的岗位要求和人才需求计划。
                </span>
              </span>
            </div>
          </i>
        </router-link>
      </li>
      <li class="Order li">
        <router-link to="/Order" >
          <i class="main_i"></i>
          <span class="router-font">订单管理</span>
          <i class="main_i-2 Order-hover">
            <div class="main-div Order-hover-Details">
              <span class="main-left">
                <span class="main-right data-right-top">
                  管理已确定需求的订单，查看最新为您推荐的外事人才。
                </span>
              </span>
            </div>
          </i>
          <span class="orderNum" v-show="orderFeedbackTotalNumHide">{{this.Data}}</span>
          </router-link>
      </li>
      <li class="account li">
        <router-link to="/account" >
          <i class="main_i"></i>
          <span class="router-font">我的账户</span>
          <i class="main_i-2 account-hover">
            <div class="main-div account-hover-Details">
              <span class="main-left">
                <span class="main-right">
                  管理登录账号（手机号），登录密码等。
                </span>
              </span>
            </div>
          </i>
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
    <div class="pop-ups" v-show='popupsHide'>
      <div class="information" v-show='informationHide'>
        <div class="title">
          <span class="title_Data">完善信息</span>
        </div>
        <div class="Data_main">
          <div class="Data_main-header">
            您需要完善以下资料，才能获得外籍人才服务。
          </div>
          <form class="Data_Form clear" v-show="infoSHow">
            <div class="left-text">机构信息</div>
            <div class="recruit-div clear">
              <span class="lineHeight70"><span class="required">*</span>机构LOGO</span>
              <div class="recruit-header">
                <img :src="headerImg" alt="" class="recruit-header-img">
                <input type="file" id="upload2" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 2)">
              </div>
              <span class="recruit-font">
                支持jpg、jpeg、png图片文件
                <br>
                图片大小需小于10MB
              </span>
            </div>
            <div class="Name form-div clear">
              <label><span class="Stars">* </span> 联系人</label>
              <input @focus="Name_" v-model="contactPerson" type="text" class="UserName" id="UserName" maxlength=30>
              <p class="Name_P public" v-show="public1">必填</p>
            </div>
            <div class="ToBName form-div clear">
              <label><span class="Stars">* </span> 机构名称</label>
              <input @focus="ToBName_" type="text" v-model="customerName" class="UserToB" maxlength=30>
              <p class="ToBNameP public" v-show="public2">必填</p>
            </div>
            <div class="School form-div clear">
              <label><span class="Stars">* </span> 机构类型</label>
              <div class="div-box">
                <input type="radio" name="School" class="UserYes" v-model="School" @click="Qualifications_" value='3'>
                <span class="m-Right">培训机构</span>
                <input type="radio" name="School" class="UserNo"   v-model="School"  @click="Qualifications_" value='2'>
                <span>公立学校</span>
                <br>
                <input type="radio" name="School" class="UserNo"   v-model="School" @click="Qualifications_" value='1'>
                <span class="m-Right">私立学校</span>
                <input type="radio" name="School" class="UserNo"   v-model="School" @click="Qualifications_" value='4'>
                <span>留学机构</span>
                <br>
                <input type="radio" name="School" class="UserNo"   v-model="School" @click="Qualifications_" value='5'>
                <span>其他</span>
              </div>
              <p class="QualificationsP public" v-show="public3">必填</p>
            </div>
            <div class="Photo form-div clear">
              <label><span class="Stars">* </span> 联系电话</label>
              <input @focus="Photo_" type="text" v-model="contactNumber" class="UserPhoto" maxlength=30>
              <p class="PhotoP public" v-show="public4">必填</p>
            </div>
            <div class="Email form-div clear">
              <label><span class="Stars">* </span> 工作邮箱</label>
              <input @focus="Email_" type="Email" v-model="contactEmail" class="UserEmail" maxlength=30>
              <p class="EmailP public" v-show="public5">必填</p>
              <p class="ToBEmailE public" v-show="public6">请输入正确的邮箱</p>
            </div>
            <div class="WeChat form-div clear">
              <label><span class="Stars Stars_">* </span>微信号</label>
              <input v-model="WeChat" type="text" class="WeChat" id="WeChat" maxlength=30>
            </div>
            <div class="ToBEmail form-div clear">
              <label><span class="Stars Stars_">* </span>机构网址</label>
              <input type="text" v-model="website" class="UserToBEmail" maxlength=50>
            </div>
            <div class="ToBAddress form-div clear">
              <label><span class="Stars">* </span> 办公地址</label>
              <input @focus="ToBAddress_" type="text" v-model="officeAddress" class="UserToBAddress" maxlength=50>
              <p class="ToBAddressP public" v-show="public7">必填</p>
            </div>
            <div class="Qualifications form-div clear">
              <label style="margin-right:0;"><span class="Stars">* </span> 是否具备办学许可资质</label>
              <i class="main_i-2 Order-hover">
                <div class="main-div Order-hover-Details">
                  <span class="main-left">
                    <span class="main-right">
                      即您所在企业的法律主体是否具有办学许可证。办学许可证将允许您具备聘请外籍教师来华工作的合法资格。我们的专业人士将根据您的实际情况，为您提供最佳的人才招聘策略。
                    </span>
                  </span>
                </div>
              </i>
              <input type="radio" name="Qualifications" class="UserYes Quali1" id="Quali1" v-model="have_qualification" value = 0 @focus="have_focus">
              <span class="width100">是</span>
              <input type="radio" name="Qualifications" class="UserNo Quali2"  id="Quali2" v-model="have_qualification" value = 1
              @focus="have_focus">
              <span>否</span>
              <p class="QualificationsP public" v-show="public8">必填</p>
            </div>
            <div class="staff form-div ">
              <label><span class="Stars Stars_">* </span>外籍员工人数</label>
              <input type="radio" name="staff" @click="staff_" class="UserYes staff1" value=0 v-model="have_foreignstaff">
              <span class="width100">0-5名</span>
              <input type="radio" name="staff" @click="staff_" class="UserNo staff2" value=1  v-model="have_foreignstaff">
              <span>5名以上</span>
            </div>
          </form>
          <div class="interviewInformation">
            <div class="left-text">面试官信息</div>
            <div class="recruit-div clear">
              <span class="recruit-title"><span class="required">*</span>英文称呼</span>
              <div class="recruit-right">
                <input type="text" v-model='englishName' placeholder="用于向求职者展示，例HaHa" class="recruit-input">
              </div>
              </span>
            </div>
            <div class="recruit-div clear">
              <span class="recruit-title"><span class="required">*</span>邮箱</span>
              <div class="recruit-right">
                <input type="text" v-model='userEmail' placeholder="用于接收面试等消息通知，例zhangsan@163.com" class="recruit-input">
              </div>
              </span>
            </div>
          </div>
          <div class="button-box">
            <div class="cancel" @click="returnIndex">返回首页</div>
            <div class="Save" @click="Save">保存</div>
          </div>
        </div>
      </div>
      <div class="oldUser" v-show='oldUserHide'>
        <div class="title">
          <span class="title_Data">完善信息</span>
        </div>
        <div class="oldUser-content">
          <div class="Data_main-header">
            您需要完善以下资料，才能获得外籍人才服务。
          </div>
          <div class="oldUser-center">
            <div class="left-text">面试官信息</div>
            <div class="recruit-div clear">
              <span class="lineHeight70">
                <span class="required">*</span>
                机构LOGO
               </span>
              <div class="recruit-header">
                <img :src="headerImg" alt="" class="recruit-header-img">
                <input type="file" id="upload2" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 2)">
              </div>
              <span class="recruit-font">
                支持jpg、jpeg、png图片文件
                <br>
                图片大小需小于10MB
               </span>
              <span class="require Height70" v-show='require1'>必填</span>
            </div>
            <div class="recruit-div clear">
              <span class="recruit-title">
                <span class="required">*</span>
                英文称呼
               </span>
              <div class="recruit-right">
                <input type="text" v-model='englishName' placeholder="用于向求职者展示，例HaHa" class="recruit-input" @focus='focusRequire2'>
              </div>
              <span class="require" v-show='require2'>必填</span>
            </div>
            <div class="recruit-div clear">
              <span class="recruit-title">
                <span class="required">*</span>
                邮箱
               </span>
              <div class="recruit-right">
                <input type="text" v-model='userEmail' placeholder="用于接收面试等消息通知，例zhangsan@163.com" class="recruit-input" @focus='focusRequire3'>
              </div>
              <span class="require" v-show='require3'>必填</span>
            </div>
          </div>
          <div class="button-box">
            <div class="cancel" @click="returnIndex">返回首页</div>
            <div class="Save" @click="InterviewSave">保存</div>
          </div>
        </div>
      </div>
      <div class="header-mask" :class="{opacityHide:isopacityHide}">
        <vueCropper
          ref="cropper"
          :img="example.img"
          :outputSize="example.size"
          :outputType="example.outputType"
          :info="example.info"
          :canScale="example.canScale"
          :autoCrop="example.autoCrop"
          :autoCropWidth="example.autoCropWidth"
          :autoCropHeight="example.autoCropHeight"
          :fixed="example.fixed"
          :fixedNumber="example.fixedNumber"
          >
        </vueCropper>
        <div class="button-center">
          <button @click="finish2('base64')" class="btn">preview(base64)</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import localhost from '../../../common/js/public.js';
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCropper from 'vue-cropper'
const access_token = $.cookie('B-access_token');
const BcustomerId =  $.cookie('B-customerId');
//用户账号
const userAccount = $.cookie('B-userAccount');
//用户密码
const userPassword = $.cookie('B-userPassword');

const b = $.cookie('basicInfoComplete');
const n = $.cookie('needSetFreeTime');
const o = $.cookie('oldUserOnlyAbsentLogo');

Vue.use(VueRouter);
export default {
  data (){
    return {
      require1:false,
      require2:false,
      require3:false,
      freeTimeHide:false,
      logoUrl:'',
      userEmail:'',
      popupsHide:true,
      isopacityHide:true,
      informationHide:false,
      oldUserHide:true,
      headerImg:require('../../../common/img/icon-interview-photo@2x.png'),
      orderFeedbackTotalNum:'',
      orderFeedbackTotalNumHide:false,
      Data:'',
      have_foreignstaffHide:true,
      wechatShow:true,
      websiteShow:true,
      schoolType:'',
      School:[],
      WeChat:'',
      CANCEL:'',
      contactPerson:'',
      customerName:'',
      contactNumber:'',
      contactEmail:'',
      website:'',
      officeAddress:'',
      have_qualification:[],
      have_foreignstaff:[],
      studentAgeStage:[],
      have_chineseTA:[],
      classScale:[],
      studentEnLevel:[],
      classContent:[],
      classContent_Others:'',
      have_textbook:[],
      textbook_name:'',
      public1:false,
      public2:false,
      public3:false,
      public4:false,
      public5:false,
      public6:false,
      public7:false,
      public8:false,
      public9:false,
      public10:false,
      public11:false,
      public12:false,
      public13:false,
      public14:false,
      public15:false,
      Show:false,
      CourseHide:false,
      OtherHide:false,
      cust:'',
      infoSHow:true,
      infoHide:false,
      example:{
        img: require('../../../common/img/icon-interview-photo@2x.png'),
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: true,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 300,
        autoCropHeight: 250,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [4, 3],
        fixedBox:false,
        canMove:true,
        canMoveBox:true,
        original:true
      },
    }
  },
  components:{
    'VueCropper':VueCropper,
  },
  created (){
    //获取订单有多少未处理的简历
    this.$http.get(localhost+'/cc/order/feedback/number?access_token='+access_token+'&customerId='+BcustomerId).then((response)=>{
      if(response.body.error_code == 200){
        this.Data = response.body.resultObj;
        if(this.Data == 0){
          this.orderFeedbackTotalNumHide = false;
        }else {
          this.orderFeedbackTotalNumHide = true;
        }
      }
    });
  },
  mounted(){
    if(b == 'true'){
      this.popupsHide = false;
    }else {
      this.popupsHide = true;
      this.oldUserHide = false;
      this.informationHide = true;
      if(o == 'true'){
        this.popupsHide = true;
        this.informationHide = false;
        this.oldUserHide = true;
      }else {
        this.popupsHide = true;
        this.informationHide = true;
        this.oldUserHide = false;
      }
    }
  },
  methods:{
    //1. callBackLogin 回调登陆接口更新用户个人信息状态
    //2. returnIndex   点击返回首页
    //3. focusRequire2 点击取消必填
    //3. focusRequire3
    focusRequire2 () {
      this.require2 = false;
    },
    focusRequire3 () {
      this.require3 = false;
    },
    returnIndex () {
      location.href='index.html'
    },
    callBackLogin () {
      this.$http.get(localhost+'/cc/account/login?phoneNumber='+userAccount+'&password='+userPassword+'&access_token='+$.cookie('B-access_token')).then((response) =>{
        if(response.body.error_code == 200){
          console.log(response.body)
          let resData = response.body.resultObj;
          //用户账号
          $.cookie('B-userAccount',this.UserPhone);
          //用户密码
          $.cookie('B-userPassword',this.PassWord);
          //customerId
          $.cookie('B-customerId',resData.customerId);
          //创建时间
          $.cookie('B-createTime',resData.createTime);
          //机构是否审批
          $.cookie('B-custInfoComplete',resData.custInfoComplete);
          //当前登陆的手机号
          $.cookie('userNum', this.UserPhone);
          //是否登陆成功
          $.cookie('loginSuccess', 'true');
          //是否完善所有信息
          $.cookie('basicInfoComplete', resData.basicInfoComplete);
          //是否需要设置空闲时间
          $.cookie('needSetFreeTime', resData.needSetFreeTime);
          if(resData.interviewer){
            //时区
            $.cookie('timezone', resData.interviewer.zone);
            //面试官ID
            $.cookie('interviewId', resData.interviewer.id);
            //是否启用周视图
            $.cookie('isEnable',resData.interviewer.enableRegular);
          }
          //只缺少logo
          $.cookie('oldUserOnlyAbsentLogo', resData.oldUserOnlyAbsentLogo);
        }
      });
    },
    //面试官保存
    InterviewSave () {
      if(!this.logoUrl){
        this.require1 = true;
      }
      if(!this.englishName){
        this.require2 = true;
      }
      if(!this.userEmail){
        this.require3 = true;
      }
      if(this.require1 || this.require2 || this.require3){
        return false
      }else {
        this.$http.post(localhost+'cc/customer/interview/save',{
          access_token:access_token,
          customerId:BcustomerId,
          logoUrl:this.logoUrl,
          name:this.englishName,
          email:this.userEmail,
        },{emulateJSON:true}).then((response) =>{
          console.log(response.body)
          if(response.body.error_code == 200){
            $.cookie('InterviewId',response.body.resultObj);
            this.popupsHide = false;
            this.callBackLogin();
            location.href = 'login.html#/homePage'
          }
        })
      }

    },
    OtherShow (){
      this.OtherHide = this.OtherHide == false ? true : false;
      this.public14 = false;
    },
    CourseYes_ (){
      this.CourseHide = true;
      this.public15 = false;
    },
    CourseNo (){
      this.CourseHide = false;
      this.public15 = false;
    },
    Cancel (){

    },
    Save (){
      function unique1(array){
        var n = [];
        for(var i = 0; i < array.length; i++){
            if (n.indexOf(array[i]) == -1) n.push(array[i]);
          }
          return n;
        };
      var  reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      //联系人
      this.contactPerson == undefined?this.contactPerson = '':this.contactPerson = this.contactPerson;
      this.contactPerson=this.contactPerson.replace(/(^\s*)|(\s*$)/g,"");
      if(this.contactPerson.length === 0){
        this.public1 = true;
      };
      //机构名称
      this.customerName == undefined?this.customerName = '':this.customerName = this.customerName;
      this.customerName=this.customerName.replace(/(^\s*)|(\s*$)/g,"");
      if(this.customerName.length === 0 || this.customerName == undefined){
        this.public2 = true;
      };
      //学校类型
      if((this.School).length === 0){
        this.public3 = true;
      };
      //联系电话
      this.contactNumber == undefined?this.contactNumber = '':this.contactNumber = this.contactNumber;
      this.contactNumber=this.contactNumber.replace(/(^\s*)|(\s*$)/g,"");
      if(this.contactNumber.length === 0){
        this.public4 = true;
      };
      //联系邮箱
      this.contactEmail == undefined?this.contactEmail = '':this.contactEmail = this.contactEmail;
      this.contactEmail=this.contactEmail.replace(/(^\s*)|(\s*$)/g,"");
      if(this.contactEmail.length === 0 || this.contactEmail == undefined){
        this.public5 = true;
      }else if(!reg.test(this.contactEmail)){
        this.public6 = true;
      }
      //办公地址
      this.officeAddress == undefined?this.officeAddress = '':this.officeAddress = this.officeAddress;
      this.officeAddress=this.officeAddress.replace(/(^\s*)|(\s*$)/g,"");
      if(this.officeAddress.length === 0 || this.officeAddress == undefined){
        this.public7 = true;
      };
      //非必填
      this.website=this.website.replace(/(^\s*)|(\s*$)/g,"");
      this.WeChat=this.WeChat.replace(/(^\s*)|(\s*$)/g,"");
      if(this.have_qualification.length === 0){
          this.public8 = true;
      };
      if(this.public1==true || this.public2==true || this.public3==true || this.public4==true || this.public5==true || this.public6==true || this.public7==true || this.public8==true || this.public9==true)
      {
        return false;
      }else{
        this.$http.post(localhost+'/cc/customer/b/update',
        {
          contactPerson:this.contactPerson,
          customerName:this.customerName,
          contactNumber:this.contactNumber,
          contactEmail:this.contactEmail,
          website:this.website,
          officeAddress:this.officeAddress,
          haveQualification:this.have_qualification,
          haveForeignStaff:this.have_foreignstaff,
          wechat:this.WeChat,
          schoolType:this.School,
          customerId:BcustomerId,
          logoUrl:this.logoUrl,
          interviewerName:this.englishName,
          interviewerEmail:this.userEmail,
          access_token:access_token
        },{emulateJSON:true}).then((response) =>{
          console.log(response.body);
          if(response.body.error_code == 200){
            this.infoSHow = false;
            this.infoHide = true;
            //获取详情
            this.$http.get(localhost+'/cc/customer/detail?customerId='+BcustomerId+'&access_token='+access_token).then((response)=>{
              if(response.body.error_code == 200){
                $.cookie('InterviewId',response.body.resultObj);
                this.popupsHide = false;
                this.callBackLogin();
                location.href = 'login.html#/homePage'
              };
            });
          }
         });
      }
    },
    Edit (){
      function Arr(ary,num){
        if(ary.indexOf(num)===-1){
           ary.push(num);
        }else {
          return
        }
        return ary;
      };
      //------------------------------------------
      this.public1 = false;
      this.public2 = false;
      this.public3 = false;
      this.public4 = false;
      this.public5 = false;
      this.public6 = false;
      this.public7 = false;
      this.public8 = false;
      this.public9 = false;
      this.infoSHow = true;
      this.infoHide = false;
      this.contactPerson = this.cust.contactPerson;
      this.customerName =this.cust.customerName;
      this.contactNumber = this.cust.contactPhone;
      this.contactEmail = this.cust.contactEmail;
      this.website = this.cust.website;
      this.officeAddress = this.cust.officeAddress;
      this.WeChat = this.cust.wechat;

      if(this.cust.schoolType == '私立学校'){
        this.School = 1;
      }else if (this.cust.schoolType == '公立学校') {
        this.School = 2;
      }else if (this.cust.schoolType == '培训机构') {
        this.School = 3;
      }else if (this.cust.schoolType == '留学机构') {
        this.School = 4;
      }else if (this.cust.schoolType == '其他') {
        this.School = 5;
      }

       this.cust.haveQualification === '是'?  this.have_qualification = 0:this.have_qualification = 1;

       if(this.cust.haveForeignStaff == 'null'){
         this.cust.have_foreignstaff = [];
       }else if(this.cust.haveForeignStaff === '0-5名'){
         this.have_foreignstaff = 0
       }else if (this.cust.haveForeignStaff === '5名以上') {
         this.have_foreignstaff = 1;
       }
    },
    Name_ (){
        this.public1 = false;
    },
    ToBName_ (){
        this.public2 = false;
    },
    Qualifications_ (){
        this.public3 = false;
    },
    Photo_ (){
        this.public4 = false;
    },
    Email_ (){
        this.public5 = false;
        this.public6 = false;
    },
    ToBAddress_ (){
      this.public7 = false;
    },
    have_focus (){
      this.public8 = false;
    },
    //转化图片
    uploadImg (e, num) {
      this.require1 = false;
        //上传图片
        // this.option.img
      var file = e.target.files[0]
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
         alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
         return false
       }
      var reader = new FileReader()
      reader.onload = (e) => {
        let data
        if (typeof e.target.result === 'object') {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]))
        } else {
          data = e.target.result
        }
        if (num === 1) {
          this.option.img = data
        } else if (num === 2) {
          this.example.img = data
        }
      }
      this.isopacityHide = false;
      this.informationHide = false;
      reader.readAsArrayBuffer(file)
    },
    //将头像生成URL
    finish2 (type) {
      this.$refs.cropper.getCropData((data) => {
        this.headerImg = data;
        this.isopacityHide = true;
        this.informationHide = false;
        this.$http.post(localhost+'cc/blog/uploadImg/str',{
          imgStr:data,
          progressId:Date.parse(new Date()),
          access_token:access_token
        },{emulateJSON:true}).then((response)=>{
          //console.log(response.body.resultObj.url);
          this.logoUrl = response.body.resultObj.url;
        })
      })
    },
  },

}
</script>

<style lang="stylus" res="stylesheet/stylus">
body,html
  height:100%
.main_
  position:relative
  width:100%
  background: #fbfbfb
  min-height:1000px
  .menu
    width:1200px
    margin:0 auto
    .menu_Router
      width:200px
      height:100%
      position:absolute
      top: 0px
      left: 0
      background:#373737
      .li
        cursor:pointer
        color:#fff
      a
        display:block
        color:#fff
        width:200px
        height:59px
        &.active
          background:#262626
      .main_i-2
        position:relative
        width:20px
        height:20px
        float:left
        background:url('../../../common/img/icon-b-1.png') no-repeat
        background-position:-67px -17px
        vertical-align:-4px
        margin:20px 10px
        .main-div
          position: absolute
          top: 5px
          left: 25px
          z-inde:100
          display:none
          .main-left
            width: 0
            height: 0
            border-top: 6px solid transparent
            border-right: 6px solid #525252
            border-left: 6px solid transparent
            border-bottom: 6px solid transparent
            float:left
            position:relative
            z-index:150
            .main-right
              position:absolute
              top:-30px
              left:6px
              width:260px
              min-height:20px
              background:#525252
              float:left
              padding:20px
              color:#b5b5b5
              z-index:100
              box-shadow: 2px 0px 10px 0px rgba(34,34,34,.36)
              font-style:normal
              font-size:14px
      .data-right-top
        top:-40px !important
      .account-hover:hover .account-hover-Details
        display:block
      .data-hover:hover .data-hover-Details
        display:block
      .demand-hover:hover .demand-hover-Details
        display:block
      .Order-hover:hover .Order-hover-Details
        display:block
      .router-font
        font-size:18px
        float:left
        margin-top: 17px
      .account,.index,.management
        .main_i
          float:left
          vertical-align: -2px
          width:18px
          height:18px
          background:url("../../../common/img/icon-b-1.png") no-repeat
          background-position:-19px -17px
          margin:20px 10px 0 20px
      .index
        .main_i
          float:left
          vertical-align: -2px
          width:18px
          height:18px
          background:url("../../../common/img/icon-b-1.png") no-repeat
          background-position:-71px -74px
          margin:20px 10px 0 20px
      .data
        .main_i
          float:left
          vertical-align: -2px
          width:18px
          height:18px
          background:url("../../../common/img/icon-b-1.png") no-repeat
          background-position:-19px -77px
          margin:20px 10px 0 20px
      .demand
        .main_i
          float:left
          vertical-align: -2px
          width:18px
          height:18px
          background:url("../../../common/img/icon-b-1.png") no-repeat
          background-position:-19px -136px
          margin:20px 10px 0 20px
      .Order
        position:relative
        .main_i
          float:left
          vertical-align: -2px
          width:18px
          height:18px
          background:url("../../../common/img/icon-b-1.png") no-repeat
          background-position:-19px -196px
          margin:20px 10px 0 20px
        .orderNum
          display:inline-block
          position:absolute
          right:15px
          top:24px
          background:#da523f
          color:#fff
          min-width:14px
          height:20px
          text-align:center
          line-height:20px
          border-radius:10px
          font-size:14px
          padding:0 3px
      .goLeft
        display:inline-block
        width:200px
        height:70px
        cursor:pointer
    .pop-ups
      position:absolute
      top:0
      left:0
      width:100%
      height:100%
      min-height:1300px
      background:rgba(000,000,000,.6)
      z-index:10
      .information
        position:absolute
        left:50%
        margin:120px 0 0 -500px
        background:#fff
        border-radius:4px
        width:1000px
        box-shadow: 0px 1px 3px rgba(0,0,0,0.4)
        .title
          width:100%
          height:46px
          background:#ebebeb
          border-top-left-radius:4px
          border-top-right-radius:4px
          text-align:center
          .title_Data
            display:inline-block
            font-size:18px
            color:#333
            margin:11px 0 0 25px
        .Data_main
          width:800px
          margin:0px auto 0
          .Data_main-header
            margin:30px auto 20px;
            text-align:center;
            font-size: 14px;
            color: #AE3B3B;
            height:50px;
            line-height:50px;
            background: #FFFBFB;
            border: 1px solid #F5D1D1;
          .Data_Form
            width:800px;
            margin:20px auto;
            background: #F9F9F9;
            padding-bottom:40px;
            .left-text
              font-size: 16px;
              color: #283644;
              padding-left:34px;
              padding-top:20px;
              font-weight:700;
            .recruit-div
              margin: 20px auto 12px;
              .lineHeight70
                line-height: 70px;
                float: left;
                font-size: 14px;
                color: #999999;
                height:70px;
                text-align: right;
                width:187px;
                .required
                  font-size: 14px;
                  color: #EA3522;
                  display: inline-block;
                  margin: 0 10px 0 0;
              .recruit-header
                float: left;
                margin: 0 14px 0 51px;
                position: relative;
                .recruit-header-img
                  width: 70px;
                  height: 70px;
                  display: inline-block;
                  cursor: pointer;
                  border-radius: 50%;
              .recruit-font
                float: left;
                width: 159px;
                font-size: 12px;
                margin-top: 15px;
                color: #999999;
                line-height: 20px;
              .recruit-right
                margin: 0 0 0 30px;
                float: left;
                .recruit-input
                  width: 348px;
                  height: 34px;
                  padding-left: 12px;
                  display: inline-block;
                  border: 1px solid #D8E1EB;
            .Stars
              font-size:14px
              color:red
            .Stars_
              opacity:0
            .form-div
              position:relative
              width:100%
              margin-bottom:10px
              .main_i-2
                position:relative
                width:20px
                height:20px
                background:url('../../../ilb/image/login/icon-b-1.png') no-repeat
                background-position:-103px -17px
                vertical-align:-8px
                display:inline-block
                margin:0 22px 0 6px
                .main-div
                  position: absolute
                  top: -13px
                  left: 4px
                  z-index:100
                  display:none
                  .main-left
                    width: 0
                    height: 0
                    border-right: 6px solid transparent
                    border-top: 6px solid #525252
                    border-left: 6px solid transparent
                    border-bottom: 6px solid transparent
                    float:left
                    position:relative
                    z-index:150
                    .main-right
                      position:absolute
                      top:-146px
                      left:-146px
                      width:260px
                      min-height:20px
                      background:#525252
                      float:left
                      padding:20px
                      color:#b5b5b5
                      z-index:100
                      box-shadow: 0px 0px 10px 0px rgba(34,34,34,.36)
                      font-style:normal
                      font-size:14px
              .main_i-2:hover .main-div
                display:block
              label
                display:inline-block
                float:left
                width:187px
                font-size:14px
                color:#a1a1a1
                height: 31px
                line-height: 31px
                text-align:right
                margin-right:51px
              input
                float:left
                height:29px
                width:300px
                border-radius:3px
                border: 1px solid #dee5ed
                padding-left:11px
              .width100
                  width:91px
                  display:inline-block
              .width50
                  width:50px
                  display:inline-block
              .right95_
                margin-right:97px
              .right96_
                width:98px
              .public
                font-size:14px
                color:#b14343
                position:absolute
                top: 5px
                right: 20px
              .ToBEmailE
                right: -63px
              .m-Right
                margin-right:40px
              .div-box
                width:200px
                float:left
            .Student
              height:56px
            .Grade,.Curriculum,.scale
              height:87px
            .Qualifications,.staff,.Assistant,.Student,.scale,.Course,.Grade,.Curriculum,.School
              .UserYes,.UserNo,.UserS5,.UserS10,.UserS20,.User3,.UserS5_,.UserS15_,.UserS25_,.UserS35_,.UserS50_,.CourseYse,.CourseNo,.UserGrade1,.UserGrade2,.UserGrade3,.UserCurr1,.UserCurr2,.UserCurr3,.UserCurr4,.UserCurr5,.UserCurr6
                width:20px
                height:31px
                float:none
                vertical-align: -10px
              .UserGrade1
                line-height:31px
              .UserGrade2,.UserGrade3,.UserCurr3,.UserCurr5
                margin:0 0px 0 190px
              .UserS10,.UserS25_,.UserS50_
                margin-left:191px
          .interviewInformation
            width:800px;
            margin:0 auto;
            background: #F9F9F9;
            padding-bottom:40px;
            .recruit-div
              margin: 20px auto 12px;
              .recruit-title
                line-height: 32px;
                float: left;
                font-size: 14px;
                color: #999999;
                height:32px;
                text-align: right;
                width:187px;
              .lineHeight70
                line-height: 70px;
                float: left;
                font-size: 14px;
                color: #999999;
                height:70px;
                text-align: right;
                width:187px;
                .required
                  font-size: 14px;
                  color: #EA3522;
                  display: inline-block;
                  margin: 0 10px 0 0;
              .recruit-font
                float: left;
                width: 159px;
                font-size: 12px;
                margin-top: 15px;
                color: #999999;
                line-height: 20px;
              .recruit-right
                margin: 0 0 0 30px;
                float: left;
                .recruit-input
                  width: 348px;
                  height: 34px;
                  padding-left: 12px;
                  display: inline-block;
                  border: 1px solid #D8E1EB;
            .left-text
              font-size: 16px;
              color: #283644;
              padding-left:34px;
              padding-top:20px;
              font-weight:700;
          .button-box
            width:250px;
            margin:0 auto;
            .cancel,.Save
              display:inline-block
              border-radius:4px
              cursor:pointer
              width:100px
              height:29px
              color:#fff
              line-height:29px
              text-align:center
              margin:30px 0 40px 0
              font-size: 14px;
            .cancel
              background:#9db4d1
              margin-right:24px
          .cancel:hover
            background:#88a2c2
          .Save
            background:#3183e7
          .Save:hover
            background:#0062db
      .oldUser
        position:absolute
        left:50%
        margin:120px 0 0 -500px
        background:#fff
        border-radius:4px
        width:1000px
        box-shadow: 0px 1px 3px rgba(0,0,0,0.4)
        z-index:100
        .title
          width:100%
          height:46px
          background:#ebebeb
          border-top-left-radius:4px
          border-top-right-radius:4px
          text-align:center
          .title_Data
            display:inline-block
            font-size:18px
            color:#333
            margin:11px 0 0 25px
        .oldUser-content
          width:800px
          margin:30px auto 0;
          .Data_main-header
            margin:30px auto 20px;
            text-align:center;
            font-size: 14px;
            color: #AE3B3B;
            height:50px;
            line-height:50px;
            background: #FFFBFB;
            border: 1px solid #F5D1D1;
          .oldUser-center
            width:800px;
            margin:20px auto 0;
            background: #F9F9F9;
            padding-bottom:40px
            .recruit-div
              margin: 20px auto 12px;
              .recruit-title
                line-height: 32px;
                float: left;
                font-size: 14px;
                color: #999999;
                height:32px;
                text-align: right;
                width:187px;
              .lineHeight70
                line-height: 70px;
                float: left;
                font-size: 14px;
                color: #999999;
                height:70px;
                text-align: right;
                width:187px;
                .required
                  font-size: 14px;
                  color: #EA3522;
                  display: inline-block;
                  margin: 0 10px 0 0;
              .recruit-font
                float: left;
                width: 159px;
                font-size: 12px;
                margin-top: 15px;
                color: #999999;
                line-height: 20px;
              .recruit-right
                margin: 0 0 0 30px;
                float: left;
                .recruit-input
                  width: 348px;
                  height: 34px;
                  padding-left: 12px;
                  display: inline-block;
                  border: 1px solid #D8E1EB;
              .recruit-header
                float: left;
                margin: 0 14px 0 51px;
                position: relative;
                .recruit-header-img
                  width: 70px;
                  height: 70px;
                  display: inline-block;
                  cursor: pointer;
                  border-radius: 50%;
              .Height70
                height: 70px !important;
                line-height: 70px !important;
              .require
                height:36px;
                line-height:36px;
                margin: 0 0 0 20px;
                font-size:14px
                color:#b14343
            .left-text
              font-size: 16px;
              color: #283644;
              padding-left:34px;
              padding-top:20px;
              font-weight:700;
          .button-box
            width:250px;
            margin:0 auto;
            .cancel,.Save
              display:inline-block
              border-radius:4px
              cursor:pointer
              width:100px
              height:29px
              color:#fff
              line-height:29px
              text-align:center
              margin:30px 0 40px 0
              font-size: 14px;
            .cancel
              background:#9db4d1
              margin-right:24px
          .cancel:hover
            background:#88a2c2
          .Save
            background:#3183e7
          .Save:hover
            background:#0062db
      .freeTime
        width:640px;
        height:400px;
        position:fixed;
        top:50%;
        left:50%;
        margin:-200px 0 0 -320px;
        background:#fff;
        .freeTime-head
          width:100%;
          position:relative
          .close
            position: absolute;
            top:23px;
            right:23px;
            background: url('../../../common/img/icon-aboutus-close@2x.png') no-repeat;
            width:12px;
            height: 12px;
            background-size:contain;
            cursor: pointer;
        .text-1
          padding-top:100px;
          width:100%;
          text-align:center;
          font-size:24px;
          color:#3082e7;
          display:block;
        .text-2
          width:480px;
          margin:35px auto 50px;
          font-size:16px;
          color:#333;
          display:block;
          line-height: 30px;
          text-align:center;
        .button-1
          display:block;
          width:200px;
          height:29px;
          line-height:29px;
          text-align:center;
          color:#fff;
          border-radius:4px;
          cursor:pointer;
          font-size:14px;
          margin:0 auto;
          background:#3082e7;
        .button-2
          display:block;
          font-size:14px;
          color:#999999;
          margin:10px auto;
          cursor:pointer;
          text-align:center;
  .header-mask{
    position: fixed;
    top:50%;
    left: 50%;
    margin:-250px 0 0 -500px;
    width: 1000px;
    height: 500px;
    z-index: 100;
  }
  #upload2{
    top: 0;
    left: 0px;
    width: 70px;
    height: 70px;
    opacity: 0;
    z-index: 1;
    clip:auto !important;
  }
  .opacityHide{
    opacity: 0;
    z-index: -1;
  }
  .button-center{
    width: 1200px;
    .btn{
      display: block;
      width: 180px;
      height: 44px;
      text-align: center;
      background: #4C9DFF;
      color: #fff;
      font-size: 14px;
      margin:20px auto ;
      border-radius: 2px;
    }
  }
  .vue-cropper {
      position: relative;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      user-select: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      direction: ltr;
      touch-action: none;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
  }
  .cropper-box, .cropper-box-canvas, .cropper-drag-box, .cropper-crop-box, .cropper-face{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    user-select: none;
  }
  .cropper-box-canvas img {
    position: relative;
    user-select: none;
    transform: none;
    max-width: none;
    max-height: none;
  }
  .cropper-box {
    overflow: hidden;
  }
  .cropper-move {
    cursor: move;
  }
  .cropper-crop {
    cursor: crosshair;
  }
  .cropper-modal {
    background: rgba(0, 0, 0, 0.5);
  }
  .cropper-crop-box {
    /*border: 2px solid #39f;*/
  }
  .cropper-view-box {
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: 1px solid #39f;
    outline-color: rgba(51, 153, 255, 0.75);
    user-select: none;
  }
  .cropper-view-box img {
    user-select: none;
    max-width: none;
    max-height: none;
  }
  .cropper-face {
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0.1;
  }
  .crop-info {
    position: absolute;
    left: 0px;
    min-width: 65px;
    text-align: center;
    color: white;
    line-height: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    font-size: 12px;
  }
  .crop-line {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    opacity: .1;
  }
  .line-w {
    top: -3px;
    left: 0;
    height: 5px;
    cursor: n-resize;
  }
  .line-a {
    top: 0;
    left: -3px;
    width: 5px;
    cursor: w-resize;
  }
  .line-s {
    bottom: -3px;
    left: 0;
    height: 5px;
    cursor: s-resize;
  }
  .line-d {
    top: 0;
    right: -3px;
    width: 5px;
    cursor: e-resize;
  }
  .crop-point {
    position: absolute;
    width: 8px;
    height: 8px;
    opacity: .75;
    background-color: #39f;
    border-radius: 100%;
  }
  .point1 {
    top: -4px;
    left: -4px;
    cursor: nw-resize;
  }
  .point2 {
    top: -5px;
    left: 50%;
    margin-left: -3px;
    cursor: n-resize;
  }
  .point3 {
    top: -4px;
    right: -4px;
    cursor: ne-resize;
  }
  .point4 {
    top: 50%;
    left: -4px;
    margin-top: -3px;
    cursor: w-resize;
  }
  .point5 {
    top: 50%;
    right: -4px;
    margin-top: -3px;
    cursor: w-resize;
  }
  .point6 {
    bottom: -5px;
    left: -4px;
    cursor: sw-resize;
  }
  .point7 {
    bottom: -5px;
    left: 50%;
    margin-left: -3px;
    cursor: s-resize;
  }
  .point8 {
    bottom: -5px;
    right: -4px;
    cursor: nw-resize;
  }
  @media screen and (max-width: 500px) {
    .crop-point {
      position: absolute;
      width: 20px;
      height: 20px;
      opacity: .45;
      background-color: #39f;
      border-radius: 100%;
    }
    .point1 {
      top: -10px;
      left: -10px;
    }
    .point2, .point4, .point5, .point7 {
      display: none;
    }
    .point3 {
      top: -10px;
      right: -10px;
    }
    .point4 {
      top: 0;
      left: 0;
    }
    .point6 {
      bottom: -10px;
      left: -10px;
    }
    .point8 {
      bottom: -10px;
      right: -10px;
    }
  }
</style>
