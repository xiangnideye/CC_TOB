<template>
  <div class="Maccount">
    <div class="Header">
      <a class="Header_img" href="/module/Login_home.html"></a>
      <span class="Header_title">机构信息</span>
    </div>
    <form class="Data_Form clear" v-show="infoSHow">
      <div class="Name input-div border-b">
        <label class="label_"><span class="Stars">* </span> 联系人:</label>
        <input @focus="Name_" v-model="contactPerson" type="text" class="UserName Imput_" id="UserName" maxlength=30>
        <p class="Name_P public" v-show="public1"></p>
      </div>
      <div class="ToBName input-div border-b">
        <label class="label_"><span class="Stars">* </span> 机构名称:</label>
        <input @focus="ToBName_" type="text" v-model="customerName" class="UserToB Imput_" maxlength=30>
        <p class="ToBNameP public" v-show="public2"></p>
      </div>
      <div class="School input-div border-b">
        <label class="label_"><span class="Stars">* </span> 学校类型:</label>
        <div class="div-box">
          <input type="radio" name="School" class="right-n" v-model="School" @click="SchoolFocus" value='3'>
          <span class="span_">培训机构</span>
          <input type="radio" name="School" class="right-n"   v-model="School"  @click="SchoolFocus" value='2'>
          <span class="span_">公立学校</span>
          <br>
          <input type="radio" name="School" class="right-n"   v-model="School" @click="SchoolFocus" value='1'>
          <span class="span_">私立学校</span>
          <input type="radio" name="School" class="right-n"   v-model="School" @click="SchoolFocus" value='4'>
          <span class="span_">留学机构</span>
          <br>
          <input type="radio" name="School" class="right-n"   v-model="School" @click="SchoolFocus" value='5'>
          <span class="span_">其他</span>
        </div>
        <p class="ToBNameP public" v-show="public10"></p>
      </div>
      <div class="Photo input-div border-b">
        <label class="label_"><span class="Stars">* </span> 联系电话:</label>
        <input @focus="Photo_" type="text" v-model="contactNumber" class="UserPhoto Imput_" maxlength=30>
        <p class="PhotoP public" v-show="public3"></p>
      </div>
      <div class="Email input-div border-b">
        <label class="label_"><span class="Stars">* </span> 联系邮箱:</label>
        <input @focus="Email_" type="Email" v-model="contactEmail" class="UserEmail Imput_" maxlength=30>
        <p class="EmailP public" v-show="public4"></p>
        <p class="ToBEmailE public-email" v-show="public6"></p>
      </div>
      <div class="WeChat input-div border-b">
        <label class="label_"><span class="Stars Stars_">* </span>微信:</label>
        <input v-model="WeChat" type="text" class="Imput_" id="WeChat" maxlength=30>
      </div>
      <div class="ToBEmail input-div border-b">
        <label class="label_"><span class="Stars Stars_">* </span> 网站地址:</label>
        <input @focus="ToBEmail_" type="text" v-model="website" class="UserToBEmail Imput_" maxlength=50>
      </div>
      <div class="ToBAddress input-div border-b">
        <label class="label_"><span class="Stars">* </span> 办公地址:</label>
        <input @focus="ToBAddress_" type="text" v-model="officeAddress" class="UserToBAddress Imput_" maxlength=50>
        <p class="ToBAddressP public" v-show="public7"></p>
      </div>
      <div class="Qualifications input-div">
        <label class="label_"><span class="Stars">* </span> 是否有办学许可
          <i class="main_i-2 Order-hover" @click="DetailsClick"></i>
        </label>
        <input type="radio" name="Qualifications" class="UserYes Quali1 right-n" id="Quali1" v-model="have_qualification" @click="Qualifications_" value=0>
        <span class="span_">是</span>
        <input type="radio" name="Qualifications" class="UserNo Quali2 right-n"  id="Quali2" v-model="have_qualification" @click="Qualifications_" value=1>
        <span class="span_">否</span>
        <p class="QualificationsP public" v-show="public8"></p>
      </div>
      <div class="staff input-div">
        <label class="label_"><span class="Stars Stars_">* </span> 是否有外籍员工:</label>
        <input type="radio" name="staff" @click="staff_" class="UserYes staff1 right-n" value=0 v-model="have_foreignstaff">
        <span class="span_">0-5名</span>
        <input type="radio" name="staff" @click="staff_" class="UserNo staff2 right-n" value=1  v-model="have_foreignstaff">
        <span class="span_">5名以上</span>
      </div>
      <div class="Save" @click="Save">保存</div>
    </form>
    <div class="Exhibition" v-show="infoHide">
      <div class="Edit" @click="Edit">
          <i class="EP"></i>
      </div>
      <div class="Name Exh-show clear">
        <span class="userKey">联系人:</span>
        <span class="userVal">{{this.cust.contactPerson}}</span>
      </div>
      <div class="ToBName Exh-show clear">
        <span class="userKey">机构名称:</span>
        <span class="userVal">{{this.cust.customerName}}</span>
      </div>
      <div class="school Exh-show clear">
        <span class="userKey">学校类型:</span>
        <span class="userVal">{{this.cust.schoolType}}</span>
      </div>
      <div class="Photo Exh-show clear">
        <span class="userKey">联系电话:</span>
        <span class="userVal">{{this.cust.contactPhone}}</span>
      </div>
      <div class="Email Exh-show clear">
        <span class="userKey">联系邮箱:</span>
        <span class="userVal">{{this.cust.contactEmail}}</span>
      </div>
      <div class="wechat Exh-show clear" v-show="wechatShow">
        <span class="userKey">微信:</span>
        <span class="userVal">{{this.cust.wechat}}</span>
      </div>
      <div class="ToBEmail Exh-show clear" v-show="websiteShow">
        <span class="userKey">网站地址:</span>
        <span class="userVal">{{this.cust.website}}</span>
      </div>
      <div class="ToBAddress Exh-show clear">
        <span class="userKey">办公地址:</span>
        <span class="userVal">{{this.cust.officeAddress}}</span>
      </div>
      <div class="Qualifications Exh-show clear">
        <span class="userKey">是否有办学许可:</span>
        <span class="userVal W-160">{{this.cust.haveQualification}}</span>
      </div>
      <div class="staff Exh-show clear" v-show="have_foreignstaffHide">
        <span class="userKey"> 是否有外籍员工:</span>
        <span class="userVal W-160">{{this.cust.haveForeignStaff}}</span>
      </div>

    </div>
    <div class="Details-mask" v-show="DetailsMask">
      <div class="main-div" @click="MaskHide"></div>
      <span class="main-right">
        <span class="main-right-title">是否有办学许可:</span>
        <br>
        即您所在企业的法律主体是否具有办学许可证。办学许可证将允许您具备聘请外籍教师来华工作的合法资格。我们的专业人士将根据您的实际情况，为您提供最佳的人才招聘策略。
     </span>
    </div>
  </div>
</template>

<script>
  import localhost from '../../common/js/public.js';
  let getQueryString = (name)=>{
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  };
  var userId,
      loginSuccess,
      frequency,
      openid;
  //判断微信
  if(getQueryString('access_token') && getQueryString('openid')){
    $.cookie('B-access_token',getQueryString('access_token'));
    $.cookie('openid',getQueryString('openid'));
    $.cookie('B-customerId',getQueryString('customerId'));
    $.cookie('userNum',getQueryString('phone'));
  };
  const access_token = $.cookie('B-access_token');
  const BcustomerId =  $.cookie('B-customerId');
  loginSuccess = $.cookie('loginSuccess');
  userId =  $.cookie('userId');
  frequency = $.cookie('frequency');
  export default {
    data (){
      return {
        DetailsMask:false,
        have_foreignstaffHide:true,
        cancelShow:true,
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
        In_Hide:false,
        main_Hide:true,
        Show:false,
        CourseHide:false,
        OtherHide:false,
        Course_:'',
        cust:'',
        cal1:'',
        cal2:'',
        cal3:'',
        cal10:'',
        cal11:'',
        infoSHow:false,
        infoHide:false
      }
    },
    created (){
      if(loginSuccess === 'false'){
          location.href = '/module/index.html'
      };
       this.$http.get(localhost+'/cc/customer/detail?customerId='+BcustomerId+'&access_token='+access_token).then((response) =>{
          this.Created(response);
        });
    },
    methods:{
      Created (response){
        console.log(response.body)
        if(response.body.error_code == 200){
          let resultObj = response.body.resultObj;
          let custInfo = response.body.resultObj.customerInfo;
          //2017-10-18：说没有custInfo
          this.cust = resultObj.customerInfo;
          if(custInfo.contactEmail && custInfo.schoolType){
            this.infoSHow = false;
            this.infoHide  = true;
            if(this.cust.wechat === ''){
              this.wechatShow = false;
            }
            if (this.cust.website === '') {
              this.websiteShow = false;
            };
            this.cust.haveQualification === 0?this.cust.haveQualification = '是':this.cust.haveQualification = '否';
            this.cust.haveForeignStaff === 0?this.cust.haveForeignStaff = '0-5名':this.cust.haveForeignStaff = '5名以上';
            if(this.cust.schoolType == 1){
              this.cust.schoolType = '私立学校';
            }else if (this.cust.schoolType == 2) {
              this.cust.schoolType = '公立学校';
            }else if (this.cust.schoolType == 3) {
              this.cust.schoolType = '培训机构';
            }else if (this.cust.schoolType == 4) {
              this.cust.schoolType = '留学机构';
            }else if (this.cust.schoolType == 5) {
              this.cust.schoolType = '其他';
            }
          }else {
            this.infoSHow = true;
            this.infoHide = false;
            this.contactPerson =  custInfo.contactPerson;
            this.customerName = custInfo.customerName;
            this.contactNumber = custInfo.contactPhone;
            if(this.cust.schoolType == 1){
              this.School = '私立学校';
            }else if (this.cust.schoolType == 2) {
              this.School = '公立学校';
            }else if (this.cust.schoolType == 3) {
              this.School = '培训机构';
            }else if (this.cust.schoolType == 4) {
              this.School = '留学机构';
            }else if (this.cust.schoolType == 5) {
              this.School = '其他';
            }
          }
        };
      },
      OtherShow (){
        this.OtherHide = this.OtherHide == false ? true : false;
        this.public14 = false;
      },
      CourseYes_ (){
        this.CourseHide = true;
        this.public15 = false;
      },
      DetailsClick (){
        this.DetailsMask = true;
      },
      MaskHide (e){
        if(e.target.className === 'main-div'){
          this.DetailsMask = false;
        }
      },
      CourseNo (){
        this.CourseHide = false;
        this.public15 = false;
      },
      Cancel (){
        // if(this.CANCEL == true){
        //   this.infoHide = true;
        //   this.infoSHow = false;
        //   this.In_Hide = false;
        //   if(this.cust.have_textbook == '无' || this.cust.textbook_name == ''){
        //     this.CourseHide = false;
        //   }else {
        //     this.CourseHide = true;
        //   };
        //   for(var i = 0;i<this.cust.classContent.length;i++){
        //     if(this.cust.classContent.indexOf('其他') == -1){
        //       this.OtherHide = false;
        //     }else {
        //       if(this.cal11 === ''){
        //         this.OtherHide = false;
        //       }else {
        //         this.OtherHide = true;
        //       }
        //     }
        //   };
        // }else {
        //   this.infoHide = false;
        //   this.infoSHow = true;
        // }
        this.infoHide = true;
        this.infoSHow = false;
        this.Created();
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
            access_token:access_token
          },{emulateJSON:true}).then((response) =>{
            console.log(response.body);
            if(response.body.error_code == 200){
              this.infoSHow = false;
              this.infoHide = true;
              //获取详情
              this.$http.get(localhost+'/cc/customer/detail?customerId='+BcustomerId+'&access_token='+access_token).then((response)=>{
                if(response.body.error_code == 200){
                  this.cust = response.body.resultObj.customerInfo;

                  if(this.cust.wechat === ''){
                    this.wechatShow = false;
                  }else {
                    this.wechatShow = true;
                  }
                  if (this.cust.website === '') {
                    this.websiteShow = false;
                  }else {
                    this.websiteShow = true;
                  };
                  this.cust.haveQualification === 0?this.cust.haveQualification = '是':this.cust.haveQualification = '否';
                  this.cust.haveForeignStaff === 0?this.cust.haveForeignStaff = '0-5名':this.cust.haveForeignStaff = '5名以上';
                  if(this.cust.schoolType == 1){
                    this.cust.schoolType = '私立学校';
                  }else if (this.cust.schoolType == 2) {
                    this.cust.schoolType = '公立学校';
                  }else if (this.cust.schoolType == 3) {
                    this.cust.schoolType = '培训机构';
                  }else if (this.cust.schoolType == 4) {
                    this.cust.schoolType = '留学机构';
                  }else if (this.cust.schoolType == 5) {
                    this.cust.schoolType = '其他';
                  }
                };
              },(response)=>{

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
      Photo_ (){
          this.public3 = false;
      },
      Email_ (){
          this.public4 = false;
          this.public6 = false;
      },
      ToBEmail_ (){
          this.public5 = false;
      },
      ToBAddress_ (){
          this.public7 = false;
      },
      Qualifications_ (){
          this.public8 = false;
      },
      staff_ (){
          this.public9 = false;
      },
      SchoolFocus (){
        this.public10 = false;
      }
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  .Maccount
    height:100%
    .Header
      position:relative
      height:44px
      background:#3082e6
      .Header_img
        margin: 10px 0 0 15px
        width:22px
        height:22px
        display:inline-block
        background:url('../../ilb/image/APP/icon-b-mobile@2x.png')no-repeat
        background-position: -130px -32px
        background-size: 187px 113px
      .Header_title
        position: absolute
        top: 50%
        left: 50%
        margin-top: -22px
        margin-left: -40px
        line-height: 44px
        height: 44px
        font-size: 18px
        color: #fff
    .Data_Form
      position:relative
      margin-bottom: 100px
      .Stars
        font-size:18px
        color:#ff0000
        vertical-align: -3px
      .Stars_
        opacity:0
      .input-div
        position:relative
        margin:0 0 10px 15px
        width:350px
        .label_
          display:block
          font-size:18px
          color:#474747
          height: 46px
          line-height: 46px
          .main_i-2
            position:relative
            width:20px
            height:20px
            background:url('../../ilb/image/login/icon-b-1.png') no-repeat
            background-position:-103px -17px
            vertical-align:-5px
            display:inline-block
            // margin:0 22px 0 6px
        .label_s
          font-size:18px
          color:#474747
        .Imput_
          margin-left:15px
          padding-left:6px
          height: 46px
          width: 93%
          border-radius:3px
          border: none
          font-size:18px
          color: #8d8d8d
          border:1px solid #eee
          outline: none
          -webkit-appearance: none
        .Left-y,.right-n
          width:20px
          height:31px
          vertical-align: -6px
        .right-n
          margin:0 0 10px 12px
        .span_
          font-size:18px
          color:#8d8d8d
        .divs-right
          width: 100%;
          display: inline-block
          vertical-align: -22px
          line-height: 50px
      .Save
        position:absolute
        bottom:-65px
        left:50%
        margin-left:-152.5px
        border-radius:4px
        cursor:pointer
        width:305px
        height:44px
        color:#fff
        line-height:44px
        text-align:center
        background:#3183e7
        font-size:17px
      .public,.public-email
        background:url('../../ilb/image/APP/icon-warning@2x.png') no-repeat
        background-size:cover
        width:50px
        height:23px
        position: absolute
        top: 36px
        left: 12px
      .public-email
          width:114px
          height:23px
          background:url('../../ilb/image/APP/icon-warning-email@2x.png') no-repeat
          background-size:cover
    .Exhibition
      position:relative
      width:345px
      margin:20px 15px 0
      .Exh-show
        margin-bottom: 20px
      .Edit
          position: fixed
          bottom: 75px
          right: 15px
          cursor:pointer
          .EP
            display:inline-block
            width:52px
            height:52px
            background:url("../../ilb/image/APP/icon-edite@2x.png") no-repeat
            background-size:cover
        .userKey
          display: inline-block
          float:left
          font-size: 18px
          color: #474747
        .userVal
          float:left
          margin-left:5px
          font-size:18px
          color: #8d8d8d
          width:240px
        .W-160
          width:160px
        .W-200
          width:200px
    .Details-mask
      width:100%
      height:100%
      position:fixed
      top:0
      left:0
      .main-div
        width:100%
        height:100%
        position:fixed
        top:0
        left:0
        background:#000
        opacity:.5
        z-index:100
      .main-right
        position: fixed
        top: 50%
        left: 50%
        z-index:100
        width:240px
        background:#141414
        position:absolute
        min-height:20px
        padding:20px
        color:#fff
        z-index:100
        box-shadow: 0px 0px 10px 0px rgba(34,34,34,.36)
        margin-left:-140px
        margin-top:-92px
        font-size:15px
        .main-right-title
          font-weight:700
          margin-bottom:18px
          display:inline-block
</style>
