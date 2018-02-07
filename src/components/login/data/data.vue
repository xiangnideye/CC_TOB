<template>
  <div class="Data_body">
    <div class="title">
      </i><span class="title_Data">机构信息</span>
    </div>
    <div class="Data_main">
      <form class="Data_Form clear" v-show="infoSHow">
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
        <div class="cancel" @click="Cancel" v-show="cancelShow">取消</div>
        <div class="Save" @click="Save">保存</div>
      </form>
      <div class="Exhibition" v-show="infoHide">
        <div class="Edit" @click="Edit">
            <span class="edit">编辑</span>
        </div>
        <div class="Name bottom clear">
          <span class="userKey img-header" >机构LOGO</span>
          <img :src="this.cust.logoUrl" alt="" class="recruit-header-img">
        </div>
        <div class="Name bottom clear">
          <span class="userKey">联系人</span>
          <span class="userVal">{{this.cust.contactPerson}}</span>
        </div>
        <div class="ToBName bottom clear">
          <span class="userKey">机构名称</span>
          <span class="userVal">{{this.cust.customerName}}</span>
        </div>
        <div class="school bottom clear">
          <span class="userKey">机构类型</span>
          <span class="userVal">{{this.cust.schoolType}}</span>
        </div>
        <div class="Photo bottom clear">
          <span class="userKey">联系电话</span>
          <span class="userVal">{{this.cust.contactPhone}}</span>
        </div>
        <div class="Email bottom clear">
          <span class="userKey">工作邮箱</span>
          <span class="userVal">{{this.cust.contactEmail}}</span>
        </div>
        <div class="wechat bottom clear" v-show="wechatShow">
          <span class="userKey">微信号</span>
          <span class="userVal">{{this.cust.wechat}}</span>
        </div>
        <div class="ToBEmail bottom clear" v-show="websiteShow">
          <span class="userKey">机构网址</span>
          <span class="userVal">{{this.cust.website}}</span>
        </div>
        <div class="ToBAddress bottom clear">
          <span class="userKey">办公地址</span>
          <span class="userVal">{{this.cust.officeAddress}}</span>
        </div>
        <div class="Qualifications bottom clear">
          <span class="userKey">是否具备办学许可资质</span>
          <span class="userVal">{{this.cust.haveQualification}}</span>
        </div>
        <div class="staff" v-show="have_foreignstaffHide">
          <span class="userKey"> 外籍员工人数</span>
          <span class="userVal">{{this.cust.haveForeignStaff}}</span>
        </div>
      </div>
    </div>
    <div class="Mask-page" v-show="maskHide">
      <!--上传头像-->
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
</template>

<script>
import localhost from '../../../common/js/public.js';
import VueCropper from 'vue-cropper'
const access_token = $.cookie('B-access_token');
const BcustomerId =  $.cookie('B-customerId');
const loginSuccess = $.cookie('loginSuccess');
export default {
  data (){
    return {
      imgUrl:'',
      maskHide:false,
      isopacityHide:true,
      headerImg:require('../../../common/img/icon-interview-photo@2x.png'),
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
  created() {
    if(loginSuccess === 'false'){
        location.href = '/module/index.html'
    };
    this.Created();
  },
  methods:{
    Created (){
      this.$http.get(localhost+'/cc/customer/detail?customerId='+BcustomerId+'&access_token='+access_token).then((response)=>{
        if(response.body.error_code == 200){
          console.log(response.body)
          let resultObj = response.body.resultObj;
          let custInfo = response.body.resultObj.customerInfo;
          this.cust = resultObj.customerInfo;

          if((custInfo.schoolType == '' || custInfo.schoolType == null) && (custInfo.contactEmail == '' || custInfo.contactEmail == null) && (custInfo.officeAddress ==''|| custInfo.officeAddress == null)){
            this.cancelShow = false;
          }else {
            this.cancelShow = true;
          }
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
      });
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
          logoUrl:this.imgUrl,
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
                this.cust.haveQualification === 0?this.cust.haveQualification = '是':this.cust.haveQualification = '否';
                this.cust.haveForeignStaff === 0?this.cust.haveForeignStaff = '0-5名':this.cust.haveForeignStaff = '5名以上';
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
      this.maskHide = true;
      this.isopacityHide = false;
      this.informationHide = false;
      reader.readAsArrayBuffer(file)
    },
    //将头像生成URL
    finish2 (type) {
      this.$refs.cropper.getCropData((data) => {
        this.headerImg = data;
        this.maskHide = false;
        this.isopacityHide = true;
        this.informationHide = true;
        this.$http.post(localhost+'cc/blog/uploadImg/str',{
          imgStr:data,
          progressId:Date.parse(new Date()),
          access_token:access_token
        },{emulateJSON:true}).then((response)=>{
          console.log(response.body.resultObj.url);
          this.imgUrl = response.body.resultObj.url;
        })
      })
    },
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .Data_body
    float:right
    margin-top:66px
    margin-bottom: 30px
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
      .title_Data
        display:inline-block
        font-size:18px
        color:#333
        margin:11px 0 0 25px
    .Data_main
      width:100%
      padding-top: 50px
      .ToBTiele
        font-size:18px
        color:#3183e7
        text-align:center
        margin:56px auto 65px
      .Data_Form
        margin:0 250px 0 185px
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
        .cancel,.Save
          display:inline-block
          border-radius:4px
          cursor:pointer
          width:100px
          height:29px
          color:#fff
          line-height:29px
          text-align:center
          margin:73px 0 44px 0
        .cancel
          margin-left:230px
          background:#9db4d1
        .cancel:hover
          background:#88a2c2
        .Save
          float:right
          background:#3183e7
          margin-right: 120px
        .Save:hover
          background:#0062db
      .Exhibition
        position:relative
        margin:0 100px 50px 185px
        .Edit
          position:absolute
          top:-87px
          right:-82px
          cursor: pointer
          width: 80px
          height: 28px
          line-height: 28px
          text-align: center
          border-radius: 4px
          background: #3082e7
          .edit
            vertical-align: 5px
            color: #fff
        .Edit:hover
          background:#0062db
        .userKey
          display: inline-block
          width: 150px
          font-size: 14px
          color: #a1a1a1
          float:left
          text-align: right
        .recruit-header-img
          width: 70px;
          height: 70px;
          display: inline-block;
          cursor: pointer;
          border-radius: 50%;
          margin-left: 50px;
        .img-header
          height:70px;
          line-height:70px;
        .userVal
          margin-left:50px
          font-size: 14px
          color: #4b4b4b
          // min-height:41px
          // line-height: 41px
          width: 360px !important
          display: inline-block
        .bottom
          margin-bottom:20px
  .Mask-page{
    position: fixed;
    z-index: 100;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
  }
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
