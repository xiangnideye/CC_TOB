<template>
  <div class="Data_body">
    <div class="title">
      <i class="title_Pic"></i><span class="title_Data">资料信息</span>
    </div>
    <div class="Initialization" v-show="In_Hide">
      <div class="Initialization_p">
        您尚未提交该岗位的需求，点击新增提交新的需求
      </div>
    </div>
    <div class="Data_main" v-show="main_Hide">
      <p class="ToBTiele" v-show="PHIDE">机构基本信息</p>
      <form class="Data_Form clear" v-show="infoSHow">
        <div class="Name">
          <label><span class="Stars">* </span> 联系人:</label>
          <input @focus="Name_" v-model="contactPerson" type="text" class="UserName" id="UserName" maxlength=30>
          <p class="Name_P public" v-show="public1">必填</p>
        </div>
        <div class="ToBName">
          <label><span class="Stars">* </span> 机构名称:</label>
          <input @focus="ToBName_" type="text" v-model="customerName" class="UserToB" maxlength=30>
          <p class="ToBNameP public" v-show="public2">必填</p>
        </div>
        <div class="Photo">
          <label><span class="Stars">* </span> 联系电话:</label>
          <input @focus="Photo_" type="text" v-model="contactNumber" class="UserPhoto" maxlength=30>
          <p class="PhotoP public" v-show="public3">必填</p>
        </div>
        <div class="Email">
          <label><span class="Stars">* </span> 联系邮箱:</label>
          <input @focus="Email_" type="Email" v-model="contactEmail" class="UserEmail" maxlength=30>
          <p class="EmailP public" v-show="public4">必填</p>
          <p class="ToBEmailE public" v-show="public6">请输入正确的邮箱</p>
        </div>
        <div class="ToBEmail">
          <label><span class="Stars">* </span> 网站地址:</label>
          <input @focus="ToBEmail_" type="text" v-model="website" class="UserToBEmail" maxlength=50>
          <p class="ToBEmailP public" v-show="public5">必填</p>
        </div>
        <div class="ToBAddress">
          <label><span class="Stars">* </span> 办公地址:</label>
          <input @focus="ToBAddress_" type="text" v-model="officeAddress" class="UserToBAddress" maxlength=50>
          <p class="ToBAddressP public" v-show="public7">必填</p>
        </div>
        <div class="Qualifications">
          <label><span class="Stars">* </span> 是否有办学资质:</label>
          <input type="radio" name="Qualifications" class="UserYes Quali1" id="Quali1" v-model="have_qualification" @click="Qualifications_" value=0>是
          <input type="radio" name="Qualifications" class="UserNo Quali2"  id="Quali2" v-model="have_qualification" @click="Qualifications_" value=1>否
          <p class="QualificationsP public" v-show="public8">必填</p>
          <!--  -->
        </div>
        <div class="staff">
          <label><span class="Stars">* </span> 是否有外籍员工:</label>
          <input type="radio" name="staff" @click="staff_" class="UserYes staff1" value=0 v-model="have_foreignstaff">是
          <input type="radio" name="staff" @click="staff_" class="UserNo staff2" value=1  v-model="have_foreignstaff">否
          <p class="staffP public" v-show="public9">必填</p>
        </div>
        <div class="Assistant">
          <label><span class="Stars">* </span> 是否有中国助教:</label>
          <input type="radio" @click="Assistant_" name="Assistant" class="UserYes Ass1" value=0 v-model="have_chineseTA">是

          <input type="radio" @click="Assistant_" name="Assistant" class="UserNo Ass2" value=1 v-model="have_chineseTA">否

          <p class="AssistantP public" v-show="public10">必填</p>
        </div>
        <div class="Student">
          <label><span class="Stars">* </span> 学生年龄段:</label>
          <input type="checkbox" @click="Student_" class="User3 Stu1" v-model="studentAgeStage" value="0">3-5岁
          <input type="checkbox" @click="Student_" v-model="studentAgeStage"  class="UserS5 Stu2" value="1">5-10岁
          <input type="checkbox" @click="Student_" class="UserS10 Stu3" v-model="studentAgeStage" value="2">10-18岁
          <input type="checkbox" @click="Student_" class="UserS20 Stu4"  v-model="studentAgeStage" value="3">18岁以上
          <p class="StudentP public" v-show="public11">必填</p>
        </div>
        <div class="scale">
          <label><span class="Stars">* </span> 班级规模:</label>
          <input type="checkbox" class="UserS5_ scale1" value="0" v-model="classScale" @click="scale_">5-10人
          <input type="checkbox" class="UserS15_ scale2" value="1" v-model="classScale" @click="scale_">15-20人
          <input type="checkbox" class="UserS25_ scale3" value="2" v-model="classScale" @click="scale_">20-35人
          <input type="checkbox" class="UserS35_ scale4" value="3" v-model="classScale" @click="scale_">35-50人
          <input type="checkbox"  class="UserS50_ scale5" value="4" v-model="classScale" @click="scale_">50人以上
          <p class="scaleP public" v-show="public12">必填</p>
        </div>
        <div class="Grade">
          <label><span class="Stars">* </span> 学生英语程度:</label>
          <input type="checkbox"  class="UserGrade1 Grade1" value="0" v-model="studentEnLevel" @click="Grade_">Basic基础
          <input type="checkbox"  class="UserGrade2 Grade2" value="1" v-model="studentEnLevel" @click="Grade_">Intermediate中级
          <input type="checkbox"  class="UserGrade3 Grade3" value="2" v-model="studentEnLevel" @click="Grade_">Advanced高级
          <p class="GradeP public" v-show="public13">必填</p>
        </div>
        <div class="Curriculum">
          <label><span class="Stars">* </span> 外语课程设置:</label>
          <input type="checkbox"  class="UserCurr1 Curriculum1" value="0" v-model="classContent" @click="Curriculum_">Oral口语
          <input type="checkbox"  class="UserCurr2 Curriculum2" value="1" v-model="classContent" @click="Curriculum_">Reading阅读
          <input type="checkbox"  class="UserCurr3 Curriculum3" value="2" v-model="classContent" @click="Curriculum_">Written写作
          <input type="checkbox"  class="UserCurr4 Curriculum4" value="3" v-model="classContent" @click="Curriculum_">Grammar语法
          <input type="checkbox"  class="UserCurr5 Curriculum5" value="4" v-model="classContent" @click="Curriculum_">Listening听力
          <input type="checkbox"  class="UserCurr6 Curriculum6" value="5" v-model="classContent" @click="OtherShow">其他
          <p class="CurriculumP public" v-show="public14">必填</p>
        </div>
        <div class="Other" v-show="OtherHide">
          <label>其他课程:</label>
          <input type="text" class="UserOther Other" v-model="classContent_Others">
        </div>
        <div class="Course">
          <label><span class="Stars">* </span> 有无教材:</label>
          <input type="radio" name="Course" class="CourseYse Course1" value=0 v-model="have_textbook"  @click="CourseYes">是

          <input type="radio" name="Course"  class="CourseNo Course2" value=1  v-model="have_textbook"  @click="CourseNo">否
          <p class="CourseP public" v-show="public15">必填</p>
        </div>
        <div class="CourseName" v-show="CourseHide">
          <label> 教材名称:</label>
          <input type="text" class="UserCourseName CourseName1" v-model="textbook_name">
        </div>
        <div class="cancel" @click="Cancel">取消</div>
        <div class="Save" @click="Save">保存</div>
      </form>
      <div class="Exhibition" v-show="infoHide">
        <div class="Edit" @click="Edit">
            <i class="EP"></i>
            <span class="edit">编辑</span>
        </div>
        <div class="Name">
          <span class="userKey">姓名:</span>
          <span class="userVal">{{this.cust.contactPerson}}</span>
        </div>
        <div class="ToBName">
          <span class="userKey">机构名称:</span>
          <span class="userVal">{{this.cust.customerName}}</span>
        </div>
        <div class="Photo">
          <span class="userKey">联系电话:</span>
          <span class="userVal">{{this.cust.contactNumber}}</span>
        </div>
        <div class="Email">
          <span class="userKey">联系邮箱:</span>
          <span class="userVal">{{this.cust.contactEmail}}</span>
        </div>
        <div class="ToBEmail">
          <span class="userKey">网站地址:</span>
          <span class="userVal">{{this.cust.website}}</span>
        </div>
        <div class="ToBAddress">
          <span class="userKey">办公地址:</span>
          <span class="userVal">{{this.cust.officeAddress}}</span>
        </div>
        <div class="Qualifications">
          <span class="userKey">是否有办学资质:</span>
          <span class="userVal">{{this.cust.have_qualification}}</span>
        </div>
        <div class="staff">
          <span class="userKey"> 是否有外籍员工:</span>
          <span class="userVal">{{this.cust.have_foreignstaff}}</span>
        </div>
        <div class="Assistant">
          <span class="userKey">是否有中国助教:</span>
          <span class="userVal">{{this.cust.have_chineseTA}}</span>
        </div>
        <div class="Student">
          <span class="userKey">学生年龄段:</span>
          <span class="userVal">{{this.cal2}}</span>
        </div>
        <div class="scale">
          <span class="userKey">班级规模:</span>
          <span class="userVal">{{this.cal10}}</span>

        </div>
        <div class="Grade">
          <span class="userKey">学生英语程度:</span>
          <span class="userVal">{{this.cal3}}</span>
        </div>
        <div class="Curriculum">
          <span class="userKey"> 外语课程设置:</span>
          <span class="userVal">{{this.join}}</span>
        </div>
        <div class="Other" v-show="OtherHide">
          <span class="userKey">其他课程:</span>
          <span class="userVal">{{classContent_Others}}</span>
        </div>
        <div class="Course">
          <span class="userKey">有无教材:</span>
          <span class="userVal">{{this.cust.have_textbook}}</span>
        </div>
        <div class="CourseName" v-show="CourseHide">
          <span class="userKey">教材名称:</span>
          <span class="userVal">{{this.cust.textbook_name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import $ from 'jquery';
import '../../../common/js/jquery.cookie.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);
// document.body.onbeforeunload = function(event){
//   event.returnValue="确定离开当前页面吗？";
// };

let userId = null;
export default {
  created() {
    var loginSuccess = $.cookie('loginSuccess');
    if(loginSuccess === 'false'){
        location.href = '/module/index.html'
    };
     userId =  $.cookie('userId');
     var frequency = $.cookie('frequency');
     this.$http.get('http://localhost:8888/cc/showCustomerInfo.action?'+'customerId'+'='+userId).then((response) =>{
        this.CANCEL = response.body.infoComplete;
         if(response.body.infoComplete == true){
            this.In_Hide = false;
            this.infoHide = true;
            this.infoSHow = false;
            this.PHIDE = true;
            this.cust = response.body;
            this.cal1 = (this.cust.classScale).join(',');
            this.cal2 = (this.cust.studentAgeStage).join(',');
            this.cal3 = (this.cust.studentEnLevel).join(',');
            this.cal10 = (this.cust.classScale).join(',');
            this.join = (this.cust.classContent).join(',');
            if(this.cust.textbook_name == null){
              this.CourseHide = false;
            }else {
              this.CourseHide = true;
            }
         }else if(response.body.infoComplete == false){
           this.infoHide = false;
           this.PHIDE = true;
           this.infoSHow = true;
           this.In_Hide = false;
           this.contactNumber = response.body.contactNumber;
           this.contactPerson = response.body.contactPerson;
           this.customerName = response.body.customerName;
         }
      },(response) =>{

      });
  },
  data (){
    return {
      PHIDE:false,
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
      infoSHow:false,
      infoHide:false
    }
  },
  methods:{
    OtherShow (){
      console.log(this.OtherHide)
      this.OtherHide = this.OtherHide == false ? true : false;
      this.public14 = false;
    },
    CourseYes (){
      this.CourseHide = true;
      // this.public15 = false;
    },
    CourseNo (){
      this.CourseHide = false;
      this.public15 = false;
    },
    Cancel (){
      if(this.CANCEL == true){

        this.infoHide = true;
        this.infoSHow = false;
        this.In_Hide = false;
        this.PHIDE = true;
      }else {

        this.infoHide = false;
        this.infoSHow = true;
      }

    },
    Save (){
      function unique1(array){
        var n = [];
        for(var i = 0; i < array.length; i++){
            if (n.indexOf(array[i]) == -1) n.push(array[i]);
          }
          return n;
        };
      if(this.contactPerson == ''){
        this.public1 = true;
      };
      if(this.customerName == ''){
        this.public2 = true;
      };
      if(this.contactNumber == ''){
        this.public3 = true;
      };
      if(this.contactEmail == ''){
        this.public4 = true;
      };
      if(this.website == ''){
        this.public5 = true;
      };
      if(this.officeAddress == ''){
        this.public7 = true;
      };
      if((this.have_qualification).length==0){
          this.public8 = true;
      };
      if((this.have_foreignstaff).length==0){
          this.public9 = true;
      };
      if((this.have_chineseTA).length==0){
          this.public10 = true;
      };
      if((this.studentAgeStage).length==0){
          this.public11 = true;
      };
      if((this.classScale).length==0){
          this.public12 = true;
      };
      if((this.studentEnLevel).length==0){
          this.public13 = true;
      };
      if((this.classContent).length==0){
          this.public14 = true;
      };
      if((this.have_textbook).length==0){
          this.public15 = true;
      };
      if(this.public1==true || this.public2==true || this.public3==true ||  this.public4==true|| this.public5==true || this.public6==true || this.public7==true || this.public8==true || this.public9==true || this.public10==true || this.public11==true || this.public12==true || this.public13==true || this.public14==true || this.public15==true){
        return false;
      }else{
        this.$http.post('http://localhost:8888/cc/receiveFillCustomerInfo.action',{contactPerson:this.contactPerson,customerName:this.customerName,contactNumber:this.contactNumber,contactEmail:this.contactEmail,website:this.website,officeAddress:this.officeAddress,have_qualification:this.have_qualification,have_foreignstaff:this.have_foreignstaff,have_chineseTA:this.have_chineseTA,studentAgeStage:unique1(this.studentAgeStage),classScale:unique1(this.classScale),studentEnLevel:unique1(this.studentEnLevel),classContent:unique1(this.classContent),classContent_Others:this.classContent_Others,have_textbook:this.have_textbook,textbook_name:this.textbook_name,customerId:userId,triggerFlag:"true"}).then((response) =>{
           this.cust = response.body;
           this.cal1 = (this.cust.classScale).join(',');
           this.cal2 = (this.cust.studentAgeStage).join(',');
           this.cal3 = (this.cust.studentEnLevel).join(',');
           this.cal10 = (this.cust.classScale).join(',');
           this.join = (this.cust.classContent).join(',');
           this.infoSHow = false;
           this.infoHide = true;
           this.PHIDE = true;
         },(response) =>{

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
        this.infoSHow = true;
        this.infoHide = false;

        this.contactPerson = this.cust.contactPerson;
        this.customerName =this.cust.customerName;
        this.contactNumber = this.cust.contactNumber;
        this.contactEmail = this.cust.contactEmail;
        this.website = this.cust.website;
        this.officeAddress = this.cust.officeAddress;
        this.textbook_name = this.cust.textbook_name;

         this.cust.have_qualification === '是'?  this.have_qualification = 0:this.have_qualification = 1;

         this.cust.have_foreignstaff === '是'?this.have_foreignstaff =0:this.have_foreignstaff =1;

         this.cust.have_chineseTA === '是'?this.have_chineseTA = 0:this.have_chineseTA = 1;
      //-------------学生年龄------------------------------

        for(var i = 0;i<this.cust.studentAgeStage.length;i++){
          if(this.cust.studentAgeStage[i] === "3-5岁"){
            Arr(this.studentAgeStage,"0");
          }else if(this.cust.studentAgeStage[i] === "5-10岁"){
            Arr(this.studentAgeStage,"1");
          }else if(this.cust.studentAgeStage[i] === "10-18岁"){
            Arr(this.studentAgeStage,"2");
          }else if(this.cust.studentAgeStage[i] === "18岁以"){
            Arr(this.studentAgeStage,"3");
          }
        }

      //---------------班级规模------------------------------
      for(var i = 0;i<this.cust.classScale.length;i++){
        if(this.cust.classScale[i] === "5-10人"){
          Arr(this.classScale,"0");
        }else if(this.cust.classScale[i] === "15-20人"){
          Arr(this.classScale,"1");
        }else if(this.cust.classScale[i] === "20-35人"){
          Arr(this.classScale,"2");
        }else if(this.cust.classScale[i] === "35-50人"){
          Arr(this.classScale,"3");
        }else if(this.cust.classScale[i] === "50人以上"){
          Arr(this.classScale,"4");
        }
      }

      //---------------英语程度------------------------------
      for(var i = 0;i<this.cust.studentEnLevel.length;i++){
        if(this.cust.studentEnLevel[i] === "Basic基础"){
          Arr(this.studentEnLevel,"0");
        }else if(this.cust.studentEnLevel[i] === "Intermediate中级"){
          Arr(this.studentEnLevel,"1");
        }else if(this.cust.studentEnLevel[i] === "Advanced高级"){
          Arr(this.studentEnLevel,"2");
        }
      }
        //---------------外语课程------------------------------
      for(var i = 0;i<this.cust.classContent.length;i++){
          if(this.cust.classContent[i] === "Oral口语"){
            Arr(this.classContent,"0");
          }else if(this.cust.classContent[i] === "Reading阅读"){
            Arr(this.classContent,"1");
          }else if(this.cust.classContent[i] === "Written写作"){
            Arr(this.classContent,"2");
          }else if(this.cust.classContent[i] === "Grammar语法"){
            Arr(this.classContent,"3");
          }else if(this.cust.classContent[i] === "Listening听力"){
            Arr(this.classContent,"4");
          }else if(this.cust.classContent[i] === "其他"){
            Arr(this.classContent,"5");
          }
        }

          if(this.cust.have_textbook === '是'){
              this.have_textbook = 0;
              this.CourseHide = true;
            }else{
                this.have_textbook = 1;
                this.CourseHide = false;
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
    Assistant_ (){
        this.public10 = false;
    },
    Student_ (){
        this.public11 = false;
    },
    scale_ (){
        this.public12 = false;
    },
    Grade_ (){
        this.public13 = false;
    },
    Curriculum_ (){
        this.public14 = false;
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
    .title_Pic
      display:inline-block
      width:25px
      height:30px
      margin: 10px 10px 0 19px
      background:url("../../../ilb/image/login/icon.png") no-repeat
      background-position:-96px -22px
    .title_Data
      font-size:18px
      color:#898989
      vertical-align:9px
  .Initialization
        .Initialization_p
          margin:53px 40px 60px
          width:920px
          height:132px
          line-height:132px
          font-size:14px
          color:#3183e7
          text-align:center
          background:#f9f9f9
  .Data_main
    width:100%
    .ToBTiele
      font-size:18px
      color:#3183e7
      text-align:center
      margin:56px auto 65px
    .Data_Form
      margin:0 403px 0 185px
      .Stars
        font-size:14px
        color:red
      .Name,.ToBName,.Photo,.Email,.ToBEmail,.ToBAddress,.Qualifications,.staff,.Curriculum,.Assistant,.Student,.scale,.Other,.Course,.CourseName,.Grade
        position:relative
        height:31px
        width:100%
        margin-bottom:10px
        label
          display:inline-block
          // width:187px
          font-size:14px
          color:#a1a1a1
          height: 31px
          line-height: 31px
        input
          float:right
          height:29px
          width:211px
          border-radius:3px
          border: 1px solid #dee5ed
          padding-left:11px
        .Widht
            width:113px
        .public
          font-size:14px
          color:#b14343
          position:absolute
          top: 5px
          right: -55px
        .ToBEmailE
          right: -128px
      .Student
        height:56px
      .Grade,.Curriculum,.scale
        height:87px
      .Qualifications,.staff,.Assistant,.Student,.scale,.Course,.Grade,.Curriculum
        .UserYes,.UserNo,.UserS5,.UserS10,.UserS20,.User3,.UserS5_,.UserS15_,.UserS25_,.UserS35_,.UserS50_,.CourseYse,.CourseNo,.UserGrade1,.UserGrade2,.UserGrade3,.UserCurr1,.UserCurr2,.UserCurr3,.UserCurr4,.UserCurr5,.UserCurr6
          width:20px
          height:31px
          float:none
          margin:0 5px 0 75px
          vertical-align: -10px
        .UserGrade1
          margin:0 7px 0 89px
          line-height:31px
        .UserGrade2
          margin:0 7px 0 190px
          line-height:31px
        .UserGrade3
          margin:0 7px 0 190px
          line-height:31px
        .UserCurr1
          margin-left:89px
        .UserCurr2
          margin-left:39px
        .UserCurr3,.UserCurr5
          margin-left:190px
        .UserCurr4
          margin-left:20px
        .UserCurr6
          margin-left:12px
        .User3
          margin-left:103px
        .UserS5
          margin-left:57px
        .UserS5_
          margin-left:117px
        .UserS10,.UserS25_,.UserS50_
          margin-left:190px
        .UserS20
          margin-left:43px
        .UserS15_
          margin-left:51px
        .UserS35_
          margin-left:44px
        .CourseYse
          margin-left:118px
        .CourseNo
          margin-left:97px
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
        margin-left:176px
        background:#9db4d1
      .Save
        margin-left:22px
        background:#3183e7
    .Exhibition
      position:relative
      margin:0 100px 30px 185px
      .Edit
        position:absolute
        top:-50px
        right:0px
        cursor:pointer
        .EP
          display:inline-block
          width:22px
          height:20px
          background:url("../../../ilb/image/login/login_icon.png") no-repeat
          background-position:-132px -21px
        .edit
          vertical-align: 5px
          font-size:16px
          color:#3183e7
      .userKey
        display: inline-block
        width: 150px
        font-size: 14px
        color: #a1a1a1
        height: 41px
        line-height: 41px
      .userVal
        margin-left:50px
        font-size: 14px
        color: #4b4b4b
        height: 41px
        line-height: 41px
</style>
