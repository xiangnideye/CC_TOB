<template>
  <div class="remuse-body">
    <!--导航头部-->
    <nav class="nav" v-show="NavHidden">
      <div class="title clear">
        <a href="index.html" class="title_C"></a>
      </div>
      <ul class="Success_login">
        <li class="Header">
          <i class="hea_p"></i>
          <span class="_data">{{this.phoneNumber}}</span>
        </li>
        <li class="main">
          <ul class="main_content">
            <li class="login1 li">
              <a href="/module/login.html#/account">我的账户</a>
            </li>
            <li class="login2 li">
              <a href="/module/login.html#/data">机构信息</a>
            </li>
            <li class="login3 li">
              <a href="/module/login.html#/demand">岗位需求</a>
            </li>
            <li class="login4 li">
              <a href="/module/login.html#/Order">订单管理</a>
            </li>
            <li class="login5 li" @click="Sign_Up">退出</li>
          </ul>
        </li>
      </ul>
    </nav>
    <!--主题内容-->
    <div class="userRemuse">
      <div class="remuse-Title">
        <img :src="this.headeImg" alt="" class="heade-Img">
        <div class="user-data">
          <span class="heade-name">{{this.userName}}</span>
          <span class="heade-nationality" v-show="NatShow">Nationality: {{this.nationality}}</span>
          <span class="heade-age" v-show="AgeShow">Age: {{this.age}}</span>
        </div>
        <span class="heade-title-img"></span>
      </div>
      <el-tabs class="resumeContent" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="简历预览" name="remuse">
          <!--Working History-->
          <div class="public-parent" v-show="WorkingShow">
            <div class="public-title">
              <span class="public-title-font">Working History</span>
            </div>
            <ul class="public-Content">
              <li v-for="(workArrList,index) in workHistoryArr" class="public-Arr-list clear">
                <div class="workArr-date">
                  <span class="workArr-dateStr">{{workArrList.startDateStr}}</span>
                  <span>-</span>
                  <span class="workArr-dateEnd">{{workArrList.endDateStr}}</span>
                </div>
                <div class="workArr-right" v-show="workArrList.workShow">
                  <div class="workArr-right-top">
                    <span class="">{{workArrList.name}}</span>
                    <span style="margin: 0 8px;">-</span>
                    <span class="">{{workArrList.Article}}</span>
                  </div>
                  <div :class="'workArr'+index"   class="workArr-detail">{{workArrList.detail}}
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- Education-History-->
          <div class="public-parent" v-show="EducationShow">
            <div class="public-title">
              <span class="public-title-font">Education History</span>
            </div>
            <ul class="workHistory-Content">
              <li v-for="(EduArrList,index) in EducationArr" class="public-Arr-list clear">
                <div class="workArr-date">
                  <span class="">{{EduArrList.startDateStr}}</span>
                  <span>-</span>
                  <span class="">{{EduArrList.endDateStr}}</span>
                </div>
                <div class="workArr-right">
                  <div class="workArr-right-top">
                    <span class="">{{EduArrList.schoolName}}</span>
                    <span style="margin: 0 8px;">-</span>
                    <span class="">{{EduArrList.degree}}</span>
                  </div>
                  <div :class="'EduArrList'+index" class="workArr-detail">{{EduArrList.detail}}</div>
                </div>
              </li>
            </ul>
          </div>
          <!--  -->
          <div class="public-parent" v-show="StatementShow">
            <div class="public-title">
              <span class="public-title-font">Personal Statement</span>
            </div>
            <div class="Statement-Article"></div>
          </div>
          <!-- Ratings-->
          <div class="Ratings public-parent">
            <div class="public-title">
              <span class="public-title-font">Ratings</span>
            </div>
            <div class="Ratings-stare">
              <div class="Ratings-Ability-1 Ratings-Ability">
                <span class="Ability">Communication :</span>
                <el-rate
                  v-model="value1"
                  disabled>
                </el-rate>
              </div>
              <div class="Ratings-Ability-2 Ratings-Ability">
                <span class="Ability">Accent:</span>
                <el-rate
                  v-model="value2"
                  disabled>
                </el-rate>
              </div>
              <div class="Ratings-Ability-3 Ratings-Ability">
                <span class="Ability">Professionlism :</span>
                <el-rate
                  v-model="value3"
                  disabled>
                </el-rate>
              </div>
              <div class="Ratings-Ability-4 Ratings-Ability">
                <span class="Ability">Attitude :</span>
                <el-rate
                  v-model="value4"
                  disabled>
                </el-rate>
              </div>
              <div class="Ratings-Ability-5 Ratings-Ability">
                <span class="Ability">Personality:</span>
                <el-rate
                  v-model="value5"
                  disabled>
                </el-rate>
              </div>
            </div>
            <div class="score">
              <el-progress type="circle" :percentage="this.ScoreNumber"></el-progress>
              <span class="score-bottom">Compreherisive</span>
            </div>
          </div>
          <!--Video-->
          <div class="video public-parent" v-show="videoShow">
            <div class="public-title">
              <span class="public-title-font">Video</span>
            </div>
            <ul class="workHistory-Content video-Content clear">
              <li v-for="(videoArrList,index) in videoArr" class="public-Arr-list videoArrList clear" @click='playerVideo(videoArrList.url,videoArrList.LinkFlag)'>
                <span class="VideoGoImg"></span>
                <span class="video-title">{{videoArrList.name}}</span>
              </li>
            </ul>
          </div>
          <!--Comments-->
          <div class="public-parent" v-show="CommentsShow">
            <div class="public-title">
              <span class="public-title-font">Comments</span>
            </div>
            <div class="comment-Article">{{this.Pfont}}</div>
          </div>
          <!--Attachment-->
          <div class="public-parent" v-show="AttachmentShow" style="margin-bottom:0">
            <div class="public-title">
              <span class="public-title-font">Attachment</span>
            </div>
            <a class="Attachment-Article" :href="this.AttachmentUrl">
              <i class="Attachment-img-folder"></i>
              <span class="Attachment-span">{{this.AttachmentName}}
                <i class="Attachment-img-dowload"></i>
              </span>
            </a>
          </div>
          <!--底部-->
          <div class="Bottom-font">
              <p class="bottonP">@{{this.userName}} - Powered by Careerchina.com</p>
          </div>
        </el-tab-pane>
        <el-tab-pane label="操作记录" name="Operation">
          <div class="Operation">
            <ul class="Operation-ul">
              <li class="Operation-ul-li" v-for="(state,index) in stateArr">
                <span class="ul-li-time">{{state.time}}</span>
                <div class="ul-li-state">
                  <span class="li-state">{{state.state}}: </span>
                  <span class="li-reason"> {{state.reason}}</span>
                </div>
                <span class="ul-li-remarks" v-show="state.remarksHide">备注: {{state.remarks}}</span>
              </li>
            </ul>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!--底部-->
    <div class="footer" v-show="FooterHidden">
      <div class="footer-content clear">
        <span class="footer-feedback">{{this.feedback}}</span>
        <span class="footer-ReasonSuccess" v-show="footerReason">{{this.ReasonSuccess}}</span>
        <div class="footer-state" @click="InterviewFeedback">
          <span class="footer-hover hover-Interview-state">
            请您根据面试情况，填写面试反馈
            <i class="footer-triangle"></i>
          </span>
          <span class="footer-Interview-state" v-show="InterviewShow">填写面试反馈</span>
        </div>
        <div v-show="footerState">
          <div class="footer-state clear" @click="FeedBackShow(1)">
            <span class="footer-hover hover-Employment">
              我对该外教非常满意，希望立即录用Ta
              <i class="footer-triangle"></i>
            </span>
            <span class="footer-Employment">果断录用TA</span>
          </div>
          <div class="footer-state clear" @click="FeedBackShow(2)">
            <span class="footer-hover hover-Interview">
              我希望对外教进行面试，以便更详细了解外教情况
              <i class="footer-triangle"></i>
            </span>
            <span class="footer-Interview">我要面试TA</span>
          </div>
          <div class="footer-state clear" @click="FeedBackShow(3)">
            <span class="footer-hover hover-refuse">
              我不喜欢该外教，我要拒绝Ta
              <i class="footer-triangle"></i>
            </span>
            <span class="footer-refuse">残忍拒绝TA</span>
          </div>
        </div>
      </div>
    </div>
    <!--遮罩层-->
    <div class="mask" v-show="MaskShow">
      <!--1-->
      <div class="mask-feedback" v-show="feedbackHide">
        <div class="mask-feedback-title">
          {{this.feedbackTitle}}
          <i class="mask-feedback-close" @click="MaskClose"></i>
        </div>
        <div class="mask-feedback-box">
          <img :src="this.headeImg" alt="" class="mask-feedback-img">
          <span class="mask-feedback-name">{{this.userName}}</span>
          <div class="mask-feedback-bottom">
            <i class="mask-feedback-stars">*</i>
            <span class="mask-feedback-Reason">{{this.Reason}}</span>
            <textarea name="name" rows="8" cols="80" class="mask-feedback-text" v-model="FeedBack" :placeholder="this.placeholder" @click="feedbackTextFocus"></textarea>
            <span class="public" v-show="public">必填</span>
          </div>
          <div class="mask-feedback-submit" @click="maskButton">{{this.Submit}}</div>
          <!--防重复提交-->
          <div class="AntiClick" v-show="AntiClickShow"></div>
        </div>
      </div>
      <!--2-->
      <div class="mask-feedback-success" v-show="feedbackSuccess">
        <div class="mask-feedback-title">
          {{this.feedbackTitle}}
          <i class="mask-feedback-close" @click="MaskClose"></i>
        </div>
        <div class="mask-feedback-box">
          <span class="success-img"></span>
          <p class="success-p">{{this.successP}}</p>
          <div class="mask-success-submit" @click="successFooter">确定</div>
        </div>
      </div>
      <!--3-->
      <div class="mask-feedback-Interview" v-show="feedbackInterview">
        <div class="mask-feedback-title">
          {{this.feedbackTitle}}
          <i class="mask-feedback-close" @click="MaskClose"></i>
        </div>
        <div class="mask-feedback-box Interview-feedback-box">
          <img :src="this.headeImg" alt="" class="mask-feedback-img">
          <span class="mask-feedback-name">{{this.userName}}</span>
          <div class="mask-Interview">
            <span class="Interview-start">*</span>
            <span class="Interview-title">面试结果</span>
            <span class="public2" v-show="public2">必填</span>
            <div class="Interview-state-parent">
              <div class="Interview-state-left" @click="InterviewYes">
                <span class="Interview-img-yes"></span>
                <span class="Interview-font-left">通过</span>
              </div>
              <div class="Interview-state-right" @click="InterviewNo">
                <span class="Interview-img-no"></span>
                <span class="Interview-font-right">拒绝</span>
              </div>
            </div>
            <div class="mask-feedback-bottom" v-show="FeedbackContent">
              <i class="mask-feedback-stars">*</i>
              <span class="public3" v-show="public3">必填</span>
              <span class="mask-Interview-Reason">{{this.Reason}}</span>
              <textarea name="name" rows="8" cols="80" class="mask-feedback-text" :placeholder="this.placeholder" v-model="Interview" @click="InterviewFocus"></textarea>
            </div>
          </div>
          <div class="mask-feedback-submit" @click="IntervalSuccess">确认反馈</div>
          <!--防重复提交-->
          <div class="AntiClick-2" v-show="AntiClick2Show"></div>
        </div>
      </div>
    </div>
    <!--video遮罩层-->
    <div class="VideoMaskBox" v-show="VideoMaskShow" @click="CloseMask">
      <div class="videomask" ></div>
      <video :src="this.VideoUrl" autoplay controls='controls' class="VideoMask-video" v-show="videoPlay" v-if="viderFlag"></video>
    </div>
  </div>
</template>

<script>
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
const profileId = getQueryString('profileId');
const orderId = getQueryString('orderId');
const orderNum = getQueryString('orderNum');
const candidateOrderId = getQueryString('candidateOrderId');

let status = getQueryString('status');

const access_token = $.cookie('B-access_token');
const BcustomerId =  $.cookie('B-customerId');
const loginSuccess = $.cookie('loginSuccess');

import localhost from '../../common/js/public.js';
export default {
  data () {
    return {
      viderFlag:true,
      AntiClickShow:false,
      AntiClick2Show:false,
      AttachmentShow:false,
      AttachmentName:'',
      AttachmentUrl:'',
      StatementShow:true,
      Statement:'',
      candidateOrderID:'',
      NavHidden:false,
      FooterHidden:false,
      videoPlay:false,
      VideoMaskShow:false,
      VideoUrl:'',
      EduShow:false,
      workShow:false,
      EduBotLine:false,
      EduLine:false,
      ScoreNumber:0.0,
      NatShow:false,
      AgeShow:false,
      successState:'',
      YesFlag:false,
      NoFlag:false,
      stateNum:'',
      public:false,
      public2:false,
      public3:false,
      FeedBack:'',
      id:'',
      ClickState:'',
      WorkingShow:false,
      EducationShow:false,
      videoShow:true,
      CommentsShow:false,
      phoneNumber:'',
      headeImg:'',
      userName:'',
      nationality:'',
      age:'',
      activeName: 'remuse',
      workHistoryArr:[],
      EducationArr:[],
      videoArr:[],
      value1: 0,
      value2: 0,
      value3: 0,
      value4: 0,
      value5: 0,
      feedback:'',
      feedbackTitle:'面试反馈',
      Reason:'拒绝原因',
      placeholder:'（您可以填写相关建议和要求。）',
      MaskShow:false,
      Submit:'',
      stateArr:[],
      remarksHide:false,
      feedbackHide:false,
      feedbackSuccess:false,
      footerState:false,
      ReasonSuccess:'',
      footerReason:false,
      successP:'',
      InterviewShow:false,
      InterviewFlag:false,
      feedbackInterview:true,
      FeedbackContent:false,
      Interview:''
    }
  },
  created (){
    this.PublicCreated();
  },
  methods :{
    playerVideo (videourl,LinkFlag){
      if(LinkFlag){
        this.viderFlag = false;
        window.open('http://'+videourl);
      }else {
        this.viderFlag = true;
        this.videoPlay = true;
        this.VideoMaskShow = true;
        this.VideoUrl = videourl;
      }
    },
    CloseMask (e){
      if(e.target.className === 'VideoMask-video'){
        return false
      };
      if(e.target.className === 'videomask'){
        this.videoPlay = false;
        this.VideoMaskShow = false;
        this.VideoUrl = '';
      };
    },
    PublicCreated (){
      this.$http.get(localhost+'/cc/order/talent/detail?access_token='+access_token+'&candidateOrderId='+candidateOrderId).then((response) =>{
        console.log(response.body)
        //判断是否登录
        if(!$.cookie('B-access_token')){
          this.NavHidden = false;
          this.FooterHidden = false;
        }else {
          this.NavHidden = true;
          this.FooterHidden = true;
        };
        this.phoneNumber = $.cookie('userNum');
        let ResponseData = response.body.resultObj.profilelitByOptStatus;
        this.stateNum = ResponseData.candidateOrderList[0].opt_status;

        this.nationality = ResponseData.nationality

        this.id = ResponseData.candidateOrderList[0].id;

        this.headeImg = ResponseData.applicationCareerChinaInfo.headImgURL;

        // this.candidateOrderID= ResponseData.
        this.age = ResponseData.age;
        this.userName = ResponseData.firstName;
        if(ResponseData.age == ''){
          this.AgeShow = false;
        }else {
          this.AgeShow = true;
        };
        if(ResponseData.nationality == ''){
          this.NatShow = false;
        }else {
          this.NatShow = true;
        };
        let WorkArr = ResponseData.careerchinaWorkHistoryList;
        let Education = ResponseData.careerchinaEduHistoryList;
        let VideoArr = ResponseData.applicationCareerChinaInfo.videoInfos;
        let Comment = ResponseData.applicationCareerChinaInfo.commentContent;
        let vedioLink = ResponseData.applicationCareerChinaInfo.videoLinks;
        //评分
        this.value1 = ResponseData.applicationCareerChinaInfo.abilityScore1;
        this.value2 = ResponseData.applicationCareerChinaInfo.abilityScore2;
        this.value3 = ResponseData.applicationCareerChinaInfo.abilityScore3;
        this.value4 = ResponseData.applicationCareerChinaInfo.abilityScore4;
        this.value5 = ResponseData.applicationCareerChinaInfo.abilityScore5
        this.ScoreNumber = parseFloat(ResponseData.applicationCareerChinaInfo.abilityScoreAverage)+5.0;
        //工作经历
        this.workHistoryArr = [];
        if(WorkArr == ''){
          this.WorkingShow = false;
        }else {
          this.WorkingShow = true;
          for(let i = 0;i < WorkArr.length; i++){
            if(WorkArr[i].startDateStr == ''){
              WorkArr[i].startDateStr = '未知';
            };
            if(WorkArr[i].endDateStr == ''){
              WorkArr[i].endDateStr = '未知';
            };
            if(WorkArr[i].companyName == ''){
              WorkArr[i].companyName = '-';
            };
            if(WorkArr[i].title == ''){
              WorkArr[i].title = '-';
            };
            if(WorkArr[i].detail == '' || WorkArr[i].detail == null){
              this.workShow = false;
            }else {
              this.workShow = true;
            };
            this.$nextTick(function(){
              $('.workArr'+i).html(WorkArr[i].detail)
            });
            this.workHistoryArr.push({
              startDateStr:WorkArr[i].startDateStr,
              endDateStr:WorkArr[i].endDateStr,
              name:WorkArr[i].companyName,
              Article:WorkArr[i].positionName,
              workShow:this.workShow
            })
          };
        }
        //教育
        this.EducationArr = [];
        if(Education == ''){
          this.EducationShow = false;
        }else {
          this.EducationShow = true;
          for(let i = 0;i < Education.length; i++){
            if(Education[i].startDateStr == ''){
              Education[i].startDateStr = '未知';
            };
            if(Education[i].endDateStr == ''){
              Education[i].endDateStr = '未知';
            };
            this.$nextTick(function(){
              $('.EduArrList'+i).html(Education[i].detail)
            });
            this.EducationArr.push({
              startDateStr:Education[i].startDateStr,
              endDateStr:Education[i].endDateStr,
              schoolName:Education[i].schoolName,
              degree:Education[i].degree,
              EduTopLine:this.EduTopLine,
            })
          };
        };
        //Statement
        if(ResponseData.applicationCareerChinaInfo.personalStatement === '' || ResponseData.applicationCareerChinaInfo.personalStatement === null){
          this.StatementShow = false;
        }else {
          this.StatementShow = true;
          this.$nextTick(()=>{
            $('.Statement-Article').html(ResponseData.applicationCareerChinaInfo.personalStatement)
          })
        }
        //视频
        this.videoArr = [];
        if(VideoArr == '' && (vedioLink === '' || vedioLink === null)){
          this.videoShow = false;
        }else {
          this.videoShow = true;
          if(vedioLink){
            for(let i = 0;i<vedioLink.length;i++){
              VideoArr.push({
                videoTitle:vedioLink[i],
                videoURL:vedioLink[i],
                LinkFlag:true,
              })
            }
          };
          for(let i = 0;i<VideoArr.length;i++){
            if(VideoArr[i].videoTitle == ''){
              VideoArr[i].videoTitle = ' ';
            };
            this.videoArr.push({
              name:VideoArr[i].videoTitle,
              url:VideoArr[i].videoURL,
              LinkFlag:VideoArr[i].LinkFlag,
            });
          }
        }
        //评论
        if(Comment == ''){
          this.CommentsShow = false;
        }else {
          this.CommentsShow = true;
          this.Pfont = Comment;
        };
        //附件
        if(ResponseData.applicationCareerChinaInfo.attachmentInfo === '' || ResponseData.applicationCareerChinaInfo.attachmentInfo === null){
          this.AttachmentShow = false;
        }else {
          this.AttachmentShow = true;
          this.AttachmentUrl = ResponseData.applicationCareerChinaInfo.attachmentInfo.downloadURL;
          this.AttachmentName = ResponseData.applicationCareerChinaInfo.attachmentInfo.originalName;
        };
        if(this.stateNum === '1001'){
          this.feedback = '新简历';
          this.footerState = true;
        };
        if(this.stateNum === '1003'){
          this.footerReason = true;
          this.feedback = '已通过';
          this.ReasonSuccess = '(您已锁定该外教，目前销售经理正在与外教沟通offer事宜。)';
        }
        if(this.stateNum === '1002'){
          this.footerReason = true;
          this.footerState = false;
          this.InterviewShow = true;
          this.feedback = '面试中';
        }
        if(this.stateNum === '1004'){
          this.footerReason = true;
          this.feedback = '已拒绝';
          this.footerState = false;
          this.ReasonSuccess = '（您已拒绝该外教)。';
        }
        if(this.stateNum === '1006'){
          this.footerReason = true;
          this.feedback = '已关闭';
          this.footerState = false;
          this.ReasonSuccess = '由于一些原因，该外教不能和您合作。';
        }
        if(this.stateNum === '1005'){
          this.footerReason = true;
          this.feedback = '已录用';
          this.footerState = false;
          this.ReasonSuccess = '外教已接受您的Offer。';
        }
        var stateList = ResponseData.optLogList;
        this.stateArr = [];
        for(let i = 0;i<stateList.length;i++){
           if(stateList[i].talentOperateStatus == '1006'){
             if(stateList[i].notes ==='') {
                 this.remarksHide = false;
             }else{
               this.remarksHide = true;
             }
             this.stateArr.push({
                time:stateList[i].addTimeStr,
                remarks:stateList[i].notes,
                state:'被关闭',
                remarksHide:this.remarksHide,
                reason:'您好，由于该外教自身原因，已拒绝这份工作，我们将会为您推荐新的外教简历',
             })
           }
           if(stateList[i].talentOperateStatus == '1005'){
             if(stateList[i].notes ==='') {
               this.remarksHide = false;
             }else{
               this.remarksHide = true;
             }
              this.stateArr.push({
                time:stateList[i].addTimeStr,
                remarks:stateList[i].notes,
                state:'已录用',
                remarksHide:this.remarksHide,
                reason:'外教已确认接受offer',
              })
           }
           if(stateList[i].talentOperateStatus == '1004'){
             if(stateList[i].notes ==='') {
               this.remarksHide = false;
             }else{
               this.remarksHide = true;
             }
              this.stateArr.push({
                time:stateList[i].addTimeStr,
                remarks:stateList[i].notes,
                state:'已拒绝',
                remarksHide:this.remarksHide,
                reason:'机构用户已反馈',
              })
           }
           if(stateList[i].talentOperateStatus == '1003'){
             if(stateList[i].notes ==='') {
               this.remarksHide = false;
             }else{
               this.remarksHide = true;
             }
              this.stateArr.push({
                time:stateList[i].addTimeStr,
                remarks:stateList[i].notes,
                state:'已通过',
                remarksHide:this.remarksHide,
                reason:'机构用户已反馈，销售经理将尽快与您联系，请耐心等待',
              })
           }
           if(stateList[i].talentOperateStatus == '1002'){
             if(stateList[i].notes ==='') {
               this.remarksHide = false;
             }else{
               this.remarksHide = true;
             }
              this.stateArr.push({
                time:stateList[i].addTimeStr,
                remarks:stateList[i].notes,
                state:'面试中',
                remarksHide:this.remarksHide,
                reason:'您正在面试该外教，请在面试后填写面试反馈。',
              })
           }
           if(stateList[i].talentOperateStatus == '1001'){
             if(stateList[i].notes ==='') {
               this.remarksHide = false;
             }else{
               this.remarksHide = true;
             }
              this.stateArr.push({
                time:stateList[i].addTimeStr,
                remarks:stateList[i].notes,
                state:'新简历',
                remarksHide:this.remarksHide,
                reason:'career china为您推荐了一份简历,请查看简历并反馈',
              })
           }
        }
      });
    },
    Sign_Up (){
        $.cookie('loginSuccess',"false");
        $.cookie('userId',"");
        $.cookie('userNum',"");
        $.cookie('UUId',"");
        location.href="/module/index.html";
    },
    handleClick(tab, event) {

    },
    //遮罩层显示
    FeedBackShow (index){
      this.MaskShow = true;
      this.feedbackHide = true;
      this.feedbackSuccess = false;
      this.feedbackInterview = false;
      if(index === 1){
        this.ClickState = '1003';
        this.feedbackTitle = '外教反馈';
        this.Reason = '相关要求';
        this.placeholder = '（您可以填写相关建议和要求。）';
        this.Submit = '录用外教';
        this.feedback = '已通过';
        this.successP = '感谢您的反馈，销售经理将尽快与您联系，沟通外教录用详情。';
        this.ReasonSuccess = '(您已锁定该外教，目前销售经理正在与外教沟通offer事宜)';
        $('.mask-feedback-stars').css('opacity','0');
      }else if (index === 2) {
        this.ClickState = '1002';
        this.feedbackTitle = '面试反馈';
        this.Reason = '相关要求';
        this.placeholder = '（您可以填写相关面试要求。）';
        this.Submit = '确认面试';
        this.feedback = '面试中';
        this.ReasonSuccess = '(请您根据面试情况，填写面试反馈)';
        this.successP = '感谢您的反馈，销售经理将为您推荐更优质的外教，请随时关注。';
        this.InterviewFlag = true;
        $('.mask-feedback-stars').css('opacity','0');
      }else if (index === 3) {
        this.ClickState = '1004';
        this.feedbackTitle = '外教反馈';
        this.Reason = '拒绝原因';
        this.placeholder = '（请填写拒绝外教的原因，以便我们为您推荐更符合要求的外教。）';
        this.Submit = '拒绝外教';
        this.feedback = '已拒绝';
        this.ReasonSuccess = '（您已拒绝该外教)';
        this.successP = '感谢您的反馈，销售经理将为您推荐更优质的外教，请随时关注。';
        $('.mask-feedback-stars').css('opacity','1');
      }
    },
    //遮罩层关闭
    MaskClose (){
      this.MaskShow = false;
      this.public = false;
      this.public1 = false;
      this.public2 = false;
      this.public3 = false;
      this.feedback = '新简历';
    },
    //确认反馈
    maskButton (){
        this.AntiClickShow = true;
        if(this.ClickState == '1003'){
          this.ClickState = '1003';
          this.$http.post(localhost+'/cc/talent/order/relationship/update',{
            access_token:access_token,
            id:this.id,
            profileId:profileId,
            orderId:orderId,
            currentDesc:this.FeedBack,
            optStatus:this.ClickState,
            profileId:profileId,
            orderId:orderId
          },{emulateJSON:true}).then((response) =>{
              this.AntiClickShow = false;
              status = this.ClickState;
              this.successState = response.body.error_msg;
              this.$http.get(localhost+'/cc/order/talent/detail?access_token='+access_token+'&profileId='+profileId+'&orderId='+Number(orderId)+'&optStatus='+status+'&orderNum='+orderNum).then((response) =>{
                this.PublicCreated(response);
              });
              window.opener.location.reload();
              this.feedbackHide = false;
              this.footerReason = false;
              this.feedbackSuccess = true;
              this.feedbackTitle = '反馈成功';
              this.feedbackInterview = false;
          });
        };
        if(this.ClickState == '1002'){
          this.ClickState = '1002';
          this.$http.post(localhost+'/cc/talent/order/relationship/update',{
            access_token:access_token,
            id:this.id,
            profileId:profileId,
            orderId:orderId,
            currentDesc:this.FeedBack,
            optStatus:this.ClickState,
            profileId:profileId,
            orderId:orderId
          },{emulateJSON:true}).then((response) =>{
              this.AntiClickShow = false;
              status = this.ClickState;
              this.successState = response.body.error_msg;
              this.$http.get(localhost+'/cc/order/talent/detail?access_token='+access_token+'&profileId='+profileId+'&orderId='+Number(orderId)+'&optStatus='+status+'&orderNum='+orderNum).then((response) =>{
                this.PublicCreated(response);
              });
              window.opener.location.reload();
              this.feedbackHide = false;
              this.feedbackSuccess = true;
              this.feedbackTitle = '反馈成功';
              this.feedbackInterview = false;
              this.footerReason = false;
          });
        };
        if(this.ClickState == '1004'){
          this.ClickState = '1004';
          if(this.FeedBack === ''){
            this.public = true;
          }else {
            this.public = false;
          };
          if(this.public == true){
            return false
          }else {
            this.$http.post(localhost+'/cc/talent/order/relationship/update',{
              access_token:access_token,
              id:this.id,
              profileId:profileId,
              orderId:orderId,
              currentDesc:this.FeedBack,
              optStatus:this.ClickState,
              profileId:profileId,
              orderId:orderId
            },{emulateJSON:true}).then((response) =>{
                this.AntiClickShow = false;
                status = this.ClickState;
                this.successState = response.body.error_msg;
                this.$http.get(localhost+'/cc/order/talent/detail?access_token='+access_token+'&profileId='+profileId+'&orderId='+Number(orderId)+'&optStatus='+status+'&orderNum='+orderNum).then((response) =>{
                  this.PublicCreated(response);
                });
                window.opener.location.reload();
                this.feedbackHide = false;
                this.feedbackSuccess = true;
                this.feedbackTitle = '反馈成功';
                this.feedbackInterview = false;
                this.footerReason = false;
            });
          };
        };
    },
    //面试确认
    IntervalSuccess (){
      if(this.YesFlag == false && this.NoFlag == false){
        this.public2 = true;
      }
      if(this.NoFlag == true && this.Interview == ''){
        this.public3 = true;
      }
      if(this.public2 == true || this.public3 == true){
        return false
      }else {
        this.AntiClickShow2 = true;
        if(this.YesFlag == true && this.NoFlag == false){
          this.ClickState = '1003';
          this.$http.post(localhost+'/cc/talent/order/relationship/update',{
            access_token:access_token,
            id:this.id,
            profileId:profileId,
            orderId:orderId,
            currentDesc:this.FeedBack,
            optStatus:this.ClickState,
            profileId:profileId,
            orderId:orderId
          },{emulateJSON:true}).then((response) =>{
            status = this.ClickState;
            this.$http.get(localhost+'/cc/order/talent/detail?access_token='+access_token+'&profileId='+profileId+'&orderId='+Number(orderId)+'&optStatus='+status+'&orderNum='+orderNum).then((response) =>{
              this.PublicCreated(response);
            });
            window.opener.location.reload();
            this.successState = response.body.error_msg;
            this.feedbackHide = false;
            this.feedbackSuccess = true;
            this.feedbackInterview = false;
            this.InterviewShow = false;
            this.successP = '感谢您的反馈，销售经理将尽快与您联系，沟通外教录用详情。';
          });
        };
        if(this.YesFlag == false && this.NoFlag == true){
          this.ClickState = '1004';
          this.$http.post(localhost+'/cc/talent/order/relationship/update',{
            access_token:access_token,
            id:this.id,
            profileId:profileId,
            orderId:orderId,
            currentDesc:this.FeedBack,
            optStatus:this.ClickState,
            profileId:profileId,
            orderId:orderId
          },{emulateJSON:true}).then((response) =>{
            status = this.ClickState;
            this.$http.get(localhost+'/cc/order/talent/detail?access_token='+access_token+'&profileId='+profileId+'&orderId='+Number(orderId)+'&optStatus='+status+'&orderNum='+orderNum).then((response) =>{
              this.PublicCreated(response);
            });
            window.opener.location.reload();
            this.successState = response.body.error_msg;
            this.feedbackHide = false;
            this.feedbackSuccess = true;
            this.feedbackTitle = '反馈成功';
            this.feedbackInterview = false;
            this.successP = '感谢您的反馈，销售经理将为您推荐更优质的外教，请随时关注。';
            this.InterviewShow = false;
          });
        };
      }
    },
    //反馈成功
    successFooter (){
      if(this.successState == '1003'){
        this.PublicCreated();
        this.feedbackInterview = false;
        this.footerReason = true;
        this.feedback = '已通过';
        this.ReasonSuccess = '(您已锁定该外教，目前销售经理正在与外教沟通offer事宜)';
        this.InterviewShow = false;
      };
      if(this.successState == '1002'){
        this.PublicCreated();
      };
      if(this.successState == '1004'){
        this.PublicCreated();
        this.feedbackInterview = false;
        this.footerReason = true;
        this.feedback = '已拒绝';
        this.ReasonSuccess = '（您已拒绝该外教)';
        this.InterviewShow = false;
      };
      this.feedbackHide = false;
      this.feedbackSuccess = false;
      this.MaskShow = false;
      this.footerState = false;
      this.footerReason = true;
    },
    //面试反馈
    InterviewFeedback (){
      this.MaskShow = true;
      this.feedbackInterview = true;
      this.feedbackHide = false;
      this.feedbackSuccess = false;
      this.feedbackTitle = '面试反馈';
      this.FeedbackContent = false;
      $('.Interview-img-yes').removeClass('Active-yes');
      $('.Interview-img-no').removeClass('Active-no');
      $('.Interview-state-left').removeClass('Interview-left-Active');
      $('.Interview-state-right').removeClass('Interview-right-Active');
      $('.Interview-font-left').css('color','#999');
      $('.Interview-font-right').css('color','#999');
      this.Interview = '';
    },
    //通过
    InterviewYes (){
      $('.Interview-img-yes').addClass('Active-yes');
      $('.Interview-img-no').removeClass('Active-no');
      $('.Interview-state-left').addClass('Interview-left-Active');
      $('.Interview-state-right').removeClass('Interview-right-Active');
      $('.Interview-font-left').css('color','#fff');
      $('.Interview-font-right').css('color','#999');
      this.Reason = '相关要求';
      this.placeholder = '（您可以填写相关建议和要求。）';
      $('.mask-feedback-stars').css('opacity','0');
      this.FeedbackContent = true;
      this.YesFlag = true;
      this.NoFlag = false;
      this.public3 = false;
      this.public2 = false;
    },
    //拒绝
    InterviewNo (){
      $('.Interview-img-no').addClass('Active-no');
      $('.Interview-img-yes').removeClass('Active-yes');
      $('.Interview-state-right').addClass('Interview-right-Active');
      $('.Interview-state-left').removeClass('Interview-left-Active');
      $('.Interview-font-right').css('color','#fff');
      $('.Interview-font-left').css('color','#999');
      this.Reason = '拒绝原因';
      this.placeholder = '（请填写拒绝外教的原因，以便我们为您推荐更符合要求的外教。）';
      $('.mask-feedback-stars').css('opacity','1');
      this.FeedbackContent = true;
      this.YesFlag = false;
      this.NoFlag = true;
      this.public3 = false;
      this.public2 = false;
    },
    feedbackTextFocus (){
      this.public = false;
    },
    InterviewFocus (){
      this.public3 = false;
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .remuse-body
    background:#fbfbfb
    .nav
      position:relative
      z-index:100
      width:100%
      height:60px
      box-shadow:0px 2px 7px rgba(83,110,136,.15)
      background:#fff
      .title
        float:left
        height:100%
        .title_C
          display:inline-block
          height:60px
          line-height:60px
          margin-left:40px
          margin-top:15px
          width:140px
          height:30px
          background:url("../../ilb/image/cclogo-01.png") no-repeat
          background-size:100% 100%
      .Success_login
        display:block
        position:absolute
        top:0px
        right:27px
        width:196px
        background#fff
        .Header
          width:196px
          .hea_p
            margin:14px 10px 10px 23px
            display:inline-block
            width:32px
            height:32px
            cursor:pointer
            background:url("../../ilb/image/login/small.png") no-repeat
          ._data
              vertical-align:17px
              font-size:16px
              color:#0ed666
              font-weight:600
        .main
            display:none
            border-top: 1px solid #eee
            .main_content
              .li
                height:40px
                line-height:40px
                text-align:center
                font-size:16px
                cursor:pointer
                a
                  color:#838383
                  display:inline-block
                  width:100%
                  height:100%
              .login5
                border-top:1px solid #eee
                color:#c5c5c5
      .Success_login:hover .main
              display:block
      .li:hover
            background:#3183e7
            color:#fff !important
      .li:hover a
            color:#fff !important
    .userRemuse
      width:1000px
      background:#fff
      margin:66px auto 166px
      padding-top: 40px
      .remuse-Title
        margin:0px auto
        background:#3082e7
        width:920px
        height:150px;
        .heade-Img
          margin:35px 40px
          width:80px
          height:80px
          float:left
          border-radius:50%
        .user-data
          display:inline-block
          .heade-name
            font-size:24px
            color:#fff
            display:block
            margin:48px 0 10px 0
          .heade-nationality,.heade-age
            margin-right:30px
            font-size:14px
            color:#c1daf8
        .heade-title-img
          background:url('../../ilb/image/resume/icon-b-seal.png') no-repeat
          background-size:cover
          width:104px
          height:110px
          display:inline-block
          float:right
      .resumeContent
        width:920px
        margin:40px auto 0
        .el-tabs__header
          margin-bottom:0
        .el-tabs__item
          width:120px
          text-align: center
          font-size:16px
          color:#999
          height:42px
          line-height:42px
          border:none
        .is-active
          font-size:16px
          color:#3082e7
        .el-tabs__active-bar
          width:120px !important
          background:#3082e7
        .public-parent
          margin:40px auto 20px
          background:#f9f9f9
          .public-title
            height:61px
            border-bottom:1px solid #e6e6e6
            margin: 0px 40px 34px
            .public-title-font
              font-size:16px
              color:#333
              display:block
              padding-top:30px
          .public-Arr-list,.videoArrList
            .workArr-date,.workArr-name
              font-size:14px
              color:#333
              margin:0px 0px 14px 40px
              float:left
              // min-width:50px
              .workArr-dateStr,.workArr-dateEnd
                width:72px
                display:inline-block
            .workArr-detail
              font-size: 14px
              color: #999
              margin-bottom: 34px
              font-weight:100
            .workArr-right
              float:left
              margin-left: 30px
              width: 600px
              margin-right: 40px
              .workArr-right-top
                font-size: 14px
                color: #333
                // margin: 0px 0px 14px 40px
                padding-bottom: 20px
              .Edu-topFont
                font-size:14px
                color:#333
                display:inline-block
                margin-bottom:14px
              .Edu-right-box
                margin-bottom:34px
                .Edu-BottomFont
                  font-size:14px
                  color:#999
                  display:inline-block
            .workArr-name
              margin-left:0px
            .workArr-Article
              font-size:14px
              color:#999
              padding-bottom:34px
        .Ratings
          .Ratings-stare
            width:636px
            text-align:right
            display:inline-block
            .el-rate
              display:inline-block
              margin-left:18px
            .Ratings-Ability
              display:inline-block
              font-size:14px
              color:#333
              margin:0 114px 25px 40px
          .score
            display:inline-block
            vertical-align: 30px
            .el-progress__text
              color:#f5be41
              font-weight: 700
            .score-bottom
              display:block
              font-sie:14px
              color:#333
              margin-top:17px
        .video
          margin-bottom:0
          .video-title
            font-size:12px
            color:#fff
            min-width:100px
            text-align:center
            overflow:hidden
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            margin:0 16px
          .video-Content
            margin:30px 40px 0
            padding-bottom:10px
            .videoArrList
              width:260px
              height:140px
              float:left
              background:#3082e7
              border-radius:4px
              cursor:pointer
              margin: 0 20px 20px 0
              .VideoGoImg
                margin:35px auto 20px
                width:36px
                height:36px
                background:url('../../ilb/image/resume/icon-b-details.png') no-repeat
                background-position:-70px -67px
                display:block
            .videoArrList:hover
              background:#0062db
            .VideoGoImg:hover
              opacity:.9
        .comment-Article
          font-size:14px
          color:#999
          margin:0 40px
          padding-bottom:34px
        .Attachment-Article
          display: inline-block
          font-size: 14px
          color: #333
          // height:40px
          // line-height: 40px
          margin:0 40px 34px
          .Attachment-span
            width:700px
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            display:inline-block
            .Attachment-img-dowload
              background:url('../../ilb/image/resume/icon-b-attachment.png') no-repeat
              background-position:-44px -11px
              width:12px
              height:15px
              vertical-align: -1px
              margin-left:20px
              display:inline-block
          .Attachment-img-folder
            background:url('../../ilb/image/resume/icon-b-attachment.png') no-repeat
            background-position:-10px -11px
            width:16px
            height:20px
            display:inline-block
            vertical-align: -4px
            margin-right:20px
        .Attachment-Article:hover
          color:#3082e7
        .Attachment-Article:hover .Attachment-img-dowload
          background-position:-71px -11px
        .Statement-Article
          font-size: 14px
          color: #333
          margin: 0px 0px 14px 40px
          padding-bottom:34px
          word-break: break-all
          word-wrap: break-word
          white-space: pre-wrap
          width:840px
          p
            font-size:14px
            font-family:'微软雅黑'
        .Operation
          width:920px
          background: #f9f9f9
          .Operation-ul
            height :100%
            width:100%
            margin: 40px auto
            padding-bottom: 40px
            .Operation-ul-li
              margin-left:40px
              padding-top:30px
              .ul-li-time
                font-size: 14px
                margin-bottom: 15px
                display: block
                color:#999
              .ul-li-state
                .li-state,.li-reason
                  font-size: 14px
                  color:#333
              .ul-li-remarks
                  font-size: 14px
                  color:#333
        .Bottom-font
          text-align:center
          .bottonP
            font-size:12px
            color:#999
            margin:30px auto 30px
            display:inline-block
    .footer
      width:100%
      height:100px
      background:#fff
      position:fixed
      bottom:0
      left:0
      line-height:100px
      z-index :10
      box-shadow :0 4px 12px rgba(52,52,52,.3)
      .footer-content
        width:602px
        margin 0 auto
        .footer-Interview-state
            width:130px
            height:46px
            margin-right:30px
            float:left
            color:#fff
            font-size:14px
            line-height:46px
            text-align:center
            background:#79ca5b
            border-radius:4px
            margin-top:27px
            cursor:pointer
            margin-left: 70px
        .footer-feedback
          font-size:24px
          color:#333
          margin-right:80px
          float:left
        .footer-ReasonSuccess
          font-size: 14px
          color:#333
          float:left
        .footer-state
          position:relative
          float: left
          .footer-Employment,.footer-Interview,.footer-refuse
            width:130px
            height:46px
            margin-right:30px
            float:left
            color:#fff
            font-size:14px
            line-height:46px
            text-align:center
            background:#00cad5
            border-radius:4px
            margin-top:27px
            cursor:pointer
          .footer-Interview
            background:#79ca5b
          .footer-refuse
            background:#eb5557
          .footer-refuse
            margin-right:0
          .footer-hover
            width:285px
            position:absolute
            left:-95px
            top:-30px
            height:40px
            margin:0 20px
            line-height:40px
            text-align:center
            display:block
            font-size:14px
            color:#333
            display:none
            background:#fff
            box-shadow:0 4px 10px rgba(52,52,52,.1)
            border-radius:4px
          .hover-Interview
            width:350px
            left:-130px
          .hover-refuse
            width:220px
            left:-65px
          .hover-Interview-state
            left:-25px
          .footer-triangle
            width:0px
            height:0px
            border:10px solid #fff
            display:inline-block
            border-color:#fff transparent transparent transparent
            position: absolute
            top: 38px
            left: 50%
            margin-left: -12px
        .footer-state:hover .footer-hover
          display:block
    .mask
      width:100%
      height:100%
      background:rgba(00,00,00,.6)
      position: fixed
      top: 0
      left: 0
      z-index :100
      .mask-feedback,.mask-feedback-success,.mask-feedback-Interview
        position:absolute
        top:50%
        left:50%
        margin-left:-320px
        margin-top:-186px
        width:640px
        // height:372px
        background:#fff
        border-radius:4px
        .mask-feedback-title
          position:relative
          height:60px
          width:100%
          line-height:60px
          background:#eff1f6
          text-align:center
          font-size:18px
          color:#333
          border-radius: 3px
          .mask-feedback-close
            width:15px
            height:20px
            display:inline-block
            background:url('../../ilb/image/resume/icon-b-details.png') no-repeat
            background-position:-191px -10px
            position:absolute
            top:25px
            right:20px
            cursor:pointer
        .mask-feedback-box
          width:100%
          position:relative
          .mask-success-submit
            cursor:pointer
            border-radius:4px
            width:100px
            height:30px
            margin:20px auto 60px
            background:#3082e7
            color:#333
            text-align:center
            line-height:30px
            color:#fff
            font-size:14px
          .mask-feedback-img
            width:40px
            height:40px
            margin:20px 10px 20px 255px
            border-radius:50%
          .mask-feedback-name
            font-size:14px
            color:#333
            vertical-align:35px
          .mask-feedback-bottom
            position:relative
            width:560px
            height:142px
            margin:0 auto
            background:#f7f9fc
            padding-bottom:20px
            .mask-Interview-Reason
              margin: 0px 0 15px
              font-size: 16px
              color: #333
              display: inline-block
            .mask-feedback-stars
              color:red
              font-size:14px
              margin-left:24px
              opacity:0
            .mask-feedback-Reason
              margin:0px 0 15px
              font-size:16px
              color:#333
              display: inline-block
              margin-top: 20px
            .mask-feedback-text
              resize: none
              width: 460px
              height: 66px
              margin: 0px auto
              display: block
              padding-left: 20px
              padding-top: 14px
              border:1px solid #d8e1eb
              font-size:14px
            .public,.public3
              color:red
              position:absolute
              top: 21px
              left: 120px
            .public3
              top:3px
          .mask-feedback-submit
            cursor:pointer
            border-radius:4px
            width:100px
            height:30px
            margin:20px auto 20px
            background:#3082e7
            color:#333
            text-align:center
            line-height:30px
            color:#fff
            font-size:14px
          .success-img
            background :url("../../ilb/image/resume/icon-b-details.png")
            background-position -10px -67px
            width :49px
            height:35px
            display :block
            margin:60px auto 30px
          .success-p
            font-size: 16px
            color: #333
            text-align :center
            width :390px
            margin 0 auto 50px
          .mask-Interview
            background: #f7f9fc
            margin: 0 40px
            position:relative
            .Interview-start
              font-size:14px
              color:red
              margin-left: 24px
            .Interview-title
              font-size: 16px
              color:#333
              display:inline-block
              padding-top:20px
            .Interview-state-parent
              margin-top:15px
              padding-bottom: 20px
              .Interview-state-left
                margin:0 20px 0px 40px
              .Interview-state-left,.Interview-state-right
                width:100px
                height:40px
                line-height:40px
                position:relative
                display:inline-block
                background:#fff
                text-align:right
                cursor: pointer
                .Interview-img-yes,.Interview-img-no
                  position:absolute
                  top:13px
                  left:22px
                  background:url('../../ilb/image/resume/icon-b-details.png') no-repeat
                  background-position:-87px -11px
                  width:20px
                  height:14px
                  display:inline-block
                .Interview-img-no
                  width:17px
                  height:16px
                  background-position:-58px -11px
                .Interview-font-left,.Interview-font-right
                  font-size:16px
                  color:#999
                  margin-right:22px
                .Active-yes
                  background-position:-155px -11px
                .Active-no
                  background-position:-122px -10px
              .Interview-left-Active
                color:#fff
                background:#5dca79
              .Interview-right-Active
                color:#fff
                background:#eb5557
            .public2
              position:absolute
              top:21px
              left:120px
              color:red
          .AntiClick,.AntiClick-2
            position:absolute
            top:254px
            left:260px
            width:120px
            height:50px
            z-index:100
          .AntiClick-2
            top:370px
            left:260px
    .VideoMaskBox
      width:100%
      height:100%
      position:fixed
      top:0
      left:0
      z-index:100
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
</style>
