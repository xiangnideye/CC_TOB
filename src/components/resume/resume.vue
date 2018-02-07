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
              <li v-for="(videoArrList,index) in this.videoArray" class="public-Arr-list videoArrList clear" @click='playerVideo(videoArrList.url,videoArrList.LinkFlag)'>
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
            <div class="comment-Article" v-html='this.Pfont'></div>
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
      <div class="footer-content clear" v-show='footerContentHide'>
        <span class="footer-feedback">{{this.feedback}}</span>
        <span class="footer-ReasonSuccess" v-show="footerReason">{{this.ReasonSuccess}}</span>
        <div class="footer-state" @click="InterviewFeedback">
          <span class="footer-hover hover-Interview-state">
            请您根据面试情况，填写面试反馈
            <i class="footer-triangle"></i>
          </span>
          <span class="footer-Interview-state" v-show="InterviewShow">填写面试反馈</span>
        </div>
        <div v-show="footerState" class="clear">
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
          <div class="footer-state clear" @click="FeedBackShow(1)">
            <span class="footer-hover hover-Employment">
              我对该外教非常满意，希望立即录用Ta
              <i class="footer-triangle"></i>
            </span>
            <span class="footer-Employment">果断录用TA</span>
          </div>
        </div>
      </div>
      <div class="aboutFace-content" v-show='AboutFaceHide'>
        <span class="Interview-status">{{interviewStatus}}</span>
        <div class="interviewData">
          <div class="center">
            <span class="point"></span>
            <span class="interviewName">{{interviewName}}</span>
          </div>
        </div>
        <p class="interviewText">{{interviewText}}</p>
        <a href="Javascript:;" class="NewInterview" v-if='aboutFaceIf' @click='clickSecondInterview'>重新约面</a>
        <span class="NewInterview-button" v-else @click='clickSecondInterview'>重新约面</span>
      </div>
    </div>
    <!--底部-详情-->
    <div class="footer-detail" v-show='DetailHide'>
      <div class="detail-top">
        <div class="show-detail" v-if='Ifdetail' @click='DetailShow'>
          <span class="show-text">展开面试详情</span>
          <i class="show-icon"></i>
        </div>
        <div class="close-detail" v-else @click='clickDetailHide'>
          <span class="close-text">收起面试详情</span>
          <i class="close-icon"></i>
        </div>
      </div>
      <div class="detail-bottom">
        <div class="detail-bottom-content clear">
          <span class="interviewStatus">面试中</span>
          <div class="interviewData">
            <div class="center">
              <span class="point"></span>
              <span class="interviewName">{{interviewName}}</span>
            </div>
          </div>
          <span class="interviewTime" v-if='IFinterviewTime'>{{interviewTime}}</span>
          <span class="interviewTime" v-else>{{interviewTime}}</span>
          <span class="button-submit" @click='writeInterviewBack'>填写面试反馈</span>
        </div>
        <div class="interview-detail" v-show='interviewDetailHide'>
          <div class="interview-data clear">
            <span class="detail-title">面试官时区时间:</span>
            <div class="detail-date">
              <span class="date">{{recruiterTime}}</span>
              <span class="zone">{{recruiterZone}}</span>
            </div>
          </div>
          <div class="interview-data clear">
            <span class="detail-title">应聘者时区时间:</span>
            <div class="detail-date">
              <span class="date">{{candidateTime}}</span>
              <span class="zone">{{candidateZone}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--遮罩层-->
    <div class="mask" v-show="MaskShow">
      <!--面试展示-->
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
            <div class="select-interview">
              <span class="select-interview-title"><span class="required">*</span>面试官</span>
              <el-select v-model="selectInterviewId" clearable placeholder="请选择">
                <el-option
                  v-for="item in InterviewList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
               </el-select>
            </div>
            <span class="mask-feedback-Reason">{{this.Reason}}</span>
            <textarea name="name" rows="8" cols="80" class="mask-feedback-text" v-model="FeedBack" :placeholder="this.placeholder" @click="feedbackTextFocus"></textarea>
            <span class="public" v-show="public">必填</span>
          </div>
          <div class="mask-feedback-submit" @click="maskButton">{{this.Submit}}</div>
          <!--防重复提交-->
          <div class="AntiClick" v-show="AntiClickShow"></div>
        </div>
      </div>
      <!--拒绝展示-->
      <div class="InterviewFeedback" v-show="RefuseFeedback">
        <div class="mask-feedback-title">
          面试反馈
          <i class="mask-feedback-close" @click="MaskClose"></i>
        </div>
        <div class="Feedback-content">
          <img :src="this.headeImg" alt="" class="mask-feedback-img">
          <span class="mask-feedback-name">{{this.userName}}</span>
          <div class="Feedback-center">
            <div class="Interview-text" style='margin-top:0;padding-top:20px;'>
              <div class="text-header">
                <span class="require-icon">*</span>
                <span class="text-title">拒绝原因</span>
                <span class="required" v-show='requiredHide1'>required</span>
              </div>
              <div class="refuse-reason">
                <span class="reason-1 reason" :class="{Active:isActive1}" @click='clickReason(1)'>相貌不合适</span>
                <span class="reason-2 reason" :class="{Active:isActive2}" @click='clickReason(2)'>有口音</span>
                <span class="reason-3 reason" :class="{Active:isActive3}" @click='clickReason(3)'>年龄大</span>
              </div>
              <textarea rows="8" cols="80" class="input-textarea" v-model='noTextarea' @focus='focusNoHide'></textarea>
            </div>
          </div>
          <span class="button-submit" @click="maskButton">确认反馈</span>
        </div>
      </div>
      <!--录用展示-->
      <div class="mask-feedback" v-show="offerHide">
        <div class="mask-feedback-title">
          {{this.feedbackTitle}}
          <i class="mask-feedback-close" @click="MaskClose"></i>
        </div>
        <div class="mask-feedback-box">
          <img :src="this.headeImg" alt="" class="mask-feedback-img">
          <span class="mask-feedback-name">{{this.userName}}</span>
          <div class="mask-feedback-bottom" style="padding-top: 20px;">
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
      <!--提交成功页面-->
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
      <!--面试反馈 拒绝还是同意-->
      <div class="InterviewFeedback" v-show="feedbackInterview">
        <div class="mask-feedback-title">
          面试反馈
          <i class="mask-feedback-close" @click="MaskClose"></i>
        </div>
        <div class="Feedback-content">
          <img :src="this.headeImg" alt="" class="mask-feedback-img">
          <span class="mask-feedback-name">{{this.userName}}</span>
          <div class="Feedback-center">
            <div class="Interview-title">
              <span class="require-icon">*</span>
              <span class="require-name">面试结果</span>
            </div>
            <div class="Interview-status">
              <!-- 同意 -->
              <span class="status-agree" @click="InterviewYes" :class="{isAgreeBg:isAgreeBg}">
                <i class="agree-icon" :class="{ActiveYes:isIcon1}"></i>
                <span class="agree-text" :class="{IsAgree:IsAgree1}">通过</span>
               </span>
               <!-- 拒绝 -->
              <!-- 拒绝 -->
              <span class="status-Refuse" :class="{isAgreeBg:isRefuseBg}" @click='InterviewNo'>
                <i class="Refuse-icon" :class="{ActiveNo:isIcon2}"></i>
                <span class="Refuse-text" :class="{IsAgree:IsAgree2}">拒绝</span>
               </span>
               <!-- 没出现  -->
               <!-- 没出现 -->
              <span class="status-No" :class="{isAgreeBg:isNoBg}" @click='InterviewNoShow'>
                <i class="No-icon" :class="{ActiveNoShow:isIcon3}"></i>
                <span class="No-text" :class="{IsAgree:IsAgree3}">应聘者没出现</span>
               </span>
            </div>
            <div class="Interview-text" v-show='agreeHide'>
              <span class="text-title">相关要求</span>
              <textarea rows="8" cols="80" class="input-textarea" v-model='offerVal'></textarea>
            </div>
            <div class="Interview-text" v-show='refuseHide'>
              <div class="text-header">
                <span class="require-icon">*</span>
                <span class="text-title">相关要求</span>
              </div>
              <div class="refuse-reason">
                <span class="reason-1 reason" :class="{Active:isActive1}" @click='clickReason(1)'>相貌不合适</span>
                <span class="reason-2 reason" :class="{Active:isActive2}" @click='clickReason(2)'>有口音</span>
                <span class="reason-3 reason" :class="{Active:isActive3}" @click='clickReason(3)'>年龄大</span>
              </div>
              <textarea rows="8" cols="80" class="input-textarea"></textarea>
            </div>
          </div>
          <span class="button-submit" @click="clickFeedback">确认反馈</span>
        </div>
      </div>
      <!--面试官没有空闲时间-->
      <div class="InterviewDate" v-show='FreeTimeHide'>
        <div class="mask-bg"></div>
        <div class="mask-feedback-title">
          面试反馈
          <i class="mask-feedback-close" @click="MaskClose(1)"></i>
        </div>
        <div class="mask-feedback-content">
          <p class="freeTime-text">您选择的面试官尚未设置空闲时间，请先联系面试官设置空闲时间，方可进行面试预约。<a href="login.html#/InterviewManagement?activeName=third" class="freeTime-href">查看面试空闲时间</a></p>
        </div>
      </div>
      <!--重新约面-->
      <div class="mask-feedback" v-show="secondInterview">
        <div class="mask-feedback-title">
          {{this.feedbackTitle}}
          <i class="mask-feedback-close" @click="MaskClose"></i>
        </div>
        <div class="mask-feedback-box secondInterview">
          <div class="mask-feedback-bottom">
            <i class="mask-feedback-stars">*</i>
            <div class="select-interview">
              <span class="select-interview-title"><span class="required">*</span>面试官</span>
              <el-select v-model="selectInterviewId" clearable placeholder="请选择">
                <el-option
                  v-for="item in InterviewList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
               </el-select>
            </div>
          </div>
          <div class="secondbutton clear">
            <div class="second-cancle" @click="MaskClose">取消</div>
            <div class="second-comfig" @click="maskButton">确认</div>
          </div>
          <!--防重复提交-->
          <div class="AntiClick" v-show="AntiClickShow"></div>
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
        offerVal:'',
        InterviewFeedbackStatus:'',
        requiredHide1:false,
        Reason1:'',
        Reason2:'',
        Reason3:'',
        noTextarea:'',
        secondInterview:false,
        IFinterviewTime:true,
        offerHide:false,
        interviewId:'',
        RefuseFeedback:false,
        DetailHide:false,
        interviewDetailHide:false,
        recruiterTime:'2018-08-01 12:00',
        recruiterZone:'(GMT+01:00)Tunis, CET, Amsterdam, Berlin, Madrid, Paris, Stockholm, Poland',
        candidateTime:'2018-08-01 12:00',
        candidateZone:'(GMT+01:00)Tunis, CET, Amsterdam, Berlin, Madrid, Paris, Stockholm, Poland',
        interviewTime:'',
        Ifdetail:true,
        aboutFaceIf:false,
        footerContentHide:false,
        AboutFaceHide:false,
        interviewStatus:'约面中',
        interviewName:'Lily Wang',
        interviewText:'已将您近期的空闲时间发送给应聘者，约面成功后将通知您。',
        FreeTimeHide:false,
        selectInterviewId:'',
        InterviewList:[],
        isAgreeBg:false,
        isRefuseBg:false,
        isNoBg:false,
        IsAgree1:false,
        IsAgree2:false,
        IsAgree3:false,
        isIcon2:false,
        isIcon3:false,
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
        isActive1:false,
        isActive2:false,
        isActive3:false,
        refuseHide:false,
        agreeHide:false,
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
        videoArray:[],
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
        feedbackInterview:false,
        FeedbackContent:false,
        Interview:''
      }
    },
    created (){
      this.PublicCreated();
    },
    methods :{
      //clickSecondInterview 点击从新约面出现弹窗
      //writeInterviewBack   点击面试反馈
      //clickFeedback        面试反馈点击
      clickFeedback () {
        if(this.InterviewFeedbackStatus == 1){
          //通过
          this.$http.post(localhost+'cc/offer/b/profile',{
            access_token:access_token,
            candidateOrderId:candidateOrderId,
            updateStatusDesc:this.offerVal,
            currentStatus:this.stateNum,
            aimStatus:'1003'
          },{emulateJSON:true}).then((response)=>{
            console.log(response.body)
            if(response.body.error_code == 200){
              this.feedbackSuccess = true;
              this.feedbackInterview = false;
              this.PublicCreated();
            }
          })
        }else if (this.InterviewFeedbackStatus == 2) {
          //拒绝
          this.Reason1 = this.isActive1 == true?'相貌不合适':'';
          this.Reason2 = this.isActive2 == true?'有口音':'';
          this.Reason3 = this.isActive3 == true?'年龄大':'';

          if((!this.isActive1 && !this.isActive2 && !this.isActive3) && !this.noTextarea){
            this.requiredHide1 = true;
          }else {
            this.$http.post(localhost+'cc/reject/b/profile',{
              access_token:access_token,
              candidateOrderId:candidateOrderId,
              updateStatusDesc:`${this.Reason1},${this.Reason2},${this.Reason3},${this.noTextarea}`,
              currentStatus:this.stateNum,
              aimStatus:'1006'
            },{emulateJSON:true}).then((response)=>{
              console.log(response.body)
              if(response.body.error_code == 200){
                this.feedbackSuccess = true;
                this.feedbackInterview = false;
                this.PublicCreated();
              }
            })
          }
        }else {
          //没出现
          this.$http.post(localhost+'cc/noshow/b/profile',{
            access_token:access_token,
            candidateOrderId:candidateOrderId,
            updateStatusDesc:'',
            currentStatus:this.stateNum,
            noshow:1,
            aimStatus:'1007'
          },{emulateJSON:true}).then((res)=>{
            this.feedbackSuccess = true;
            this.feedbackInterview = false;
            this.PublicCreated();
          })
        }
      },
      writeInterviewBack () {
        this.MaskShow = true;
        this.feedbackInterview = true;
      },
      clickSecondInterview () {
        this.MaskShow = true;
        this.secondInterview = true;
        this.selectInterviewId = '';
        this.ClickState = '1002';
        this.successP = '感谢您的反馈，销售经理将尽快与您联系，沟通外教录用详情。';
        this.$http.post(localhost+'cc/candidate/interview/selectTwoInterviewsByCustomerId',{
          customerId:BcustomerId,
          candidateOrderId:candidateOrderId,
          access_token:access_token
        },{emulateJSON:true}).then((response)=>{
          this.InterviewList = response.body.resultObj;
        })
      },
      //点击出现面试详情
      DetailShow () {
        this.Ifdetail = false;
        this.interviewDetailHide = true;
      },
      //点击关闭面试详情
      clickDetailHide () {
        this.Ifdetail = true;
        this.interviewDetailHide = false;
      },
      //播放视频
      playerVideo (videourl,LinkFlag){
        if(LinkFlag){
          this.viderFlag = false;
          window.open(videourl);
        }else {
          this.viderFlag = true;
          this.videoPlay = true;
          this.VideoMaskShow = true;
          this.VideoUrl = videourl;
        }
      },
      //关闭弹窗
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
      //初始化获取数据
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

          this.headeImg = ResponseData.headImgURL;

          this.interviewName = ResponseData.candidateOrderList[0].interviewerName;

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
          let VideoArr = ResponseData.fileMgtVideoList;
          let Comment = ResponseData.commentsToCompany;
          let vedioLink = ResponseData.videoLinks;
          let interviewStatus = ResponseData.candidateOrderList[0].showOrCancel;
          let whoReschedule = ResponseData.candidateOrderList[0].whoReschedule;
          let candidateInterviewPo = ResponseData.candidateInterviewPo;
          //评分
          this.value1 = ResponseData.abilityScore1;
          this.value2 = ResponseData.abilityScore2;
          this.value3 = ResponseData.abilityScore3;
          this.value4 = ResponseData.abilityScore4;
          this.value5 = ResponseData.abilityScore5
          this.ScoreNumber = parseFloat(ResponseData.abilityScoreAverage)+5.0;
          //工作经历
          this.workHistoryArr = [];
          if(WorkArr == ''){
            this.WorkingShow = false;
          }else {
            this.WorkingShow = true;
            for(let i = 0;i < WorkArr.length; i++){
              if(WorkArr[i].startDateStr == ''){
                WorkArr[i].startDateStr = 'NONE';
              };
              if(WorkArr[i].endDateStr == ''){
                WorkArr[i].endDateStr = 'NONE';
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
                Education[i].startDateStr = 'NONE';
              };
              if(Education[i].endDateStr == ''){
                Education[i].endDateStr = 'NONE';
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
          if(ResponseData.personalStatement === '' || ResponseData.personalStatement === null){
            this.StatementShow = false;
          }else {
            this.StatementShow = true;
            this.$nextTick(()=>{
              $('.Statement-Article').html(ResponseData.personalStatement)
            })
          }
          //视频
          this.videoArray = [];
          if((VideoArr == '' || VideoArr == null) && (vedioLink === '' || vedioLink === null)){
            this.videoShow = false;
          }else {
            this.videoShow = true;
            let a = [];
            if(vedioLink || VideoArr){
              for(let i = 0;i<VideoArr.length;i++){
                a.push({
                  videoTitle:VideoArr[i].fileName,
                  videoURL:VideoArr[i].fileUrl,
                  LinkFlag:true,
                })
              }
            };
            for(let i = 0;i<a.length;i++){
              if(a[i].videoTitle == ''){
                a[i].videoTitle = ' ';
              };
              this.videoArray.push({
                name:a[i].videoTitle,
                url:a[i].videoURL,
                LinkFlag:a[i].LinkFlag,
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
          if(ResponseData.attachmentInfo === '' || ResponseData.attachmentInfo === null){
            this.AttachmentShow = false;
          }else {
            this.AttachmentShow = true;
            this.AttachmentUrl = ResponseData.attachmentInfo.downloadURL;
            this.AttachmentName = ResponseData.attachmentInfo.originalName;
          };
          //新简历
          if(this.stateNum == '1001'){
            this.feedback = '新简历';
            //底部
            this.FooterHidden = true;
            //普通壮体啊，不包括约面，面试中
            this.footerContentHide = true;
            //面试状态信息
            this.footerReason = true;
            //初始三种状态
            this.footerState = true;

            this.AboutFaceHide = false;
            this.DetailHide = false;
          };
          //面试中
          if(this.stateNum == '1002'){
            this.FooterHidden = false;
            this.DetailHide = true;
            this.footerReason = false;
            this.footerState = false;
            this.InterviewShow = false;
            this.interviewDetailHide = false;
            //interviewName
            this.feedback = '面试中';
            if(candidateInterviewPo){
              this.recruiterTime = candidateInterviewPo.interviewerTime;
              this.recruiterZone = candidateInterviewPo.interviewerZoneValue;

              this.candidateTime = candidateInterviewPo.candidateTime;
              this.candidateZone = candidateInterviewPo.candidateZone;


            }
            if(whoReschedule == 0){
              // this.interviewTime = '面试时间：[${candidateInterviewPo.userTime}] ,如需变更时间，请联系您的客户经理';
              this.interviewTime = `面试时间：[ ${candidateInterviewPo.userTime} ] ,如需变更时间，请联系您的客户经理`;
            }else if (whoReschedule == 1 || whoReschedule == 2) {
              // this.interviewTime = '面试时间已被重新预约为[${candidateInterviewPo.userTime}] ,如需变更时间，请联系您的客户经理'
              this.interviewTime = `面试时间已被重新预约为[ ${candidateInterviewPo.userTime} ] ,如需变更时间，请联系您的客户经理`;
            }
          }
          //已录用
          if(this.stateNum == '1003'){
            this.footerReason = true;
            this.feedback = '已录用';
            this.ReasonSuccess = '(您已锁定该外教，目前销售经理正在与外教沟通offer事宜。)';
            this.footerContentHide = true;
            this.FooterHidden = true;
            this.DetailHide = false;
          }
          //已签约
          if(this.stateNum == '1005' || this.stateNum == '1008' || this.stateNum == '1009'){
            this.footerContentHide = true;
            this.footerReason = true;
            this.feedback = '已签约';
            this.footerState = false;
            this.ReasonSuccess = '外教已接受您的Offer。';

            this.FooterHidden = true;
            this.DetailHide = false;
          }
          //已关闭
          if(this.stateNum == '1006'){
            this.footerContentHide = true;
            this.footerReason = true;
            this.feedback = '已关闭';
            this.footerState = false;
            this.ReasonSuccess = '由于一些原因，该外教不能和您合作。';

            this.FooterHidden = true;
            this.DetailHide = false;
          }
          //约面中
          if(this.stateNum == '1007'){
            this.feedback = '约面中';

            this.footerReason = true;
            this.footerState = false;
            this.AboutFaceHide = true;
            this.FooterHidden = true;
            this.DetailHide = false;
            if(interviewStatus == 0){
              this.aboutFaceIf = true;
              this.ReasonSuccess = '（已将面试官近期的空闲时间发送给应聘者，约面成功后将通知您。）';
            }else {
              this.aboutFaceIf = false;
              if(interviewStatus == 1){
                this.ReasonSuccess = '（应聘者在面试中没有出现，如需重新预约，请点击重新约面。）';
              }else if (interviewStatus == 2) {
                this.ReasonSuccess = '（面试官在面试中没有出现，如需重新预约，请点击重新约面。）';
              }else if (interviewStatus == 3) {
                this.ReasonSuccess = '（您与应聘者的面试已被取消，如需重新预约，请点击重新约面。）';
              }else if (interviewStatus == 4) {
                this.ReasonSuccess = '（您与应聘者的面试已被取消，如需重新预约，请点击重新约面。）';
              }
            }
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
      //清空cookie
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
        this.feedbackSuccess = false;
        this.feedbackHide = false;
        this.feedbackInterview = false;
        this.footerState = true;
        this.footerReason = false;
        this.RefuseFeedback = false;
        this.offerHide = false;
        if(index === 1){
          //录用
          this.offerHide = true;
          this.ClickState = '1003';
          this.feedbackTitle = '外教反馈';
          this.Reason = '相关要求';
          this.placeholder = '（您可以填写相关建议和要求。）';
          this.Submit = '录用外教';
          this.feedback = '已通过';
          this.successP = '感谢您的反馈，销售经理将尽快与您联系，沟通外教录用详情。';
          this.ReasonSuccess = '(您已锁定该外教，目前销售经理正在与外教沟通offer事宜)';
        }else if (index === 2) {
          //面试
          this.feedbackHide = true;
          this.ClickState = '1002';
          this.feedbackTitle = '我要面试TA';
          this.Reason = '我们会将面试官近期的空闲时间发给应聘者，约面成功后，将通过“外教”小程序通知面试官。如果您有其他相关要求，请在下方填写。';
          this.placeholder = '（您可以填写相关面建议和要求。）';
          this.Submit = '确认反馈';
          this.feedback = '面试中';
          this.ReasonSuccess = '(请您根据面试情况，填写面试反馈)';
          this.successP = '感谢您的反馈，销售经理将为您推荐更优质的外教，请随时关注。';

          this.$http.post(localhost+'cc/candidate/interview/selectInterviewsByCustomerId',{
            customerId:BcustomerId,
            access_token:access_token
          },{emulateJSON:true}).then((response)=>{
            this.InterviewList = response.body.resultObj;
          })
        }else if (index === 3) {
          this.RefuseFeedback = true;
          this.feedbackHide = false;
          //拒绝
          this.ClickState = '1004';
          this.feedbackTitle = '外教反馈';
          this.Reason = '拒绝原因';
          this.placeholder = '（请填写拒绝外教的原因，以便我们为您推荐更符合要求的外教。）';
          this.Submit = '拒绝外教';
          this.feedback = '已拒绝';
          this.ReasonSuccess = '（您已拒绝该外教)';
          this.successP = '感谢您的反馈，销售经理将为您推荐更优质的外教，请随时关注。';
        }
      },
      //遮罩层关闭
      MaskClose (index){
        if(index == 1){
          this.MaskShow = true;
          this.FreeTimeHide = false;
        }else {
          this.MaskShow = false;
          this.public = false;
          this.public1 = false;
          this.public2 = false;
          this.public3 = false;
        }
        if(this.stateNum == '1001'){
          this.feedback = '新简历';
        }else {
          this.feedback = this.feedback;
        }
      },
      //确认反馈
      maskButton (){
        this.AntiClickShow = true;
        if(this.ClickState == '1002'){
          this.$http.get(localhost+'cc/customer/interview/ifSetFreeTime?access_token='+access_token+'&interviewerId='+this.selectInterviewId).then((response)=>{
            if(response.body.resultObj == 0){
              this.FreeTimeHide = true;
            }else {
              this.$http.post(localhost+'cc/interview/b/profile',
              {
                access_token:access_token,
                candidateOrderId:candidateOrderId,
                interviewerId:this.selectInterviewId,
                updateStatusDesc:this.FeedBack,
                currentStatus:this.stateNum,
                aimStatus:'1007'
              },{emulateJSON:true}).then((response)=>{
                if(response.body.error_code == 200){
                  this.feedbackSuccess = true;
                  this.feedbackHide = false;
                  this.secondInterview = false;
                  this.footerContentHide = false;
                  this.AboutFaceHide = true;
                  this.PublicCreated();
                }
              })
            }
          })
        }else if (this.ClickState == '1003') {
          this.$http.post(localhost+'cc/offer/b/profile',
          {
            access_token:access_token,
            candidateOrderId:candidateOrderId,
            interviewerId:this.selectInterviewId,
            updateStatusDesc:this.FeedBack,
            currentStatus:this.stateNum,
            aimStatus:'1003'
          },{emulateJSON:true}).then((response)=>{
            if(response.body.error_code == 200){
              this.feedbackSuccess = true;
              this.offerHide = false;
              this.PublicCreated();
            }
          })
        }else if (this.ClickState == '1004') {
          this.Reason1 = this.isActive1 == true?'相貌不合适':'';
          this.Reason2 = this.isActive2 == true?'有口音':'';
          this.Reason3 = this.isActive3 == true?'年龄大':'';

          if((!this.isActive1 && !this.isActive2 && !this.isActive3) && !this.noTextarea){
            this.requiredHide1 = true;
          }else {
            this.$http.post(localhost+'cc/reject/b/profile',{
              access_token:access_token,
              candidateOrderId:candidateOrderId,
              interviewerId:this.selectInterviewId,
              updateStatusDesc:`${this.Reason1},${this.Reason2},${this.Reason3},${this.noTextarea}`,
              currentStatus:this.stateNum,
              aimStatus:'1006'
            },{emulateJSON:true}).then((response)=>{
              if(response.body.error_code == 200){
                this.feedbackSuccess = true;
                this.RefuseFeedback = false;
                this.PublicCreated();
              }
            })
          }
        }
      },
      successFooter (){
        this.MaskShow = false;
        this.feedbackHide = false;
        this.feedbackSuccess = false;
        //this.footerContentHide = false;
        this.footerState = false;
        // this.footerReason = false;
        // this.AboutFaceHide = true;
      },
      //面试反馈
      InterviewFeedback (){
        this.MaskShow = true;
        this.feedbackInterview = true;
        this.feedbackHide = false;
        this.feedbackSuccess = false;
        this.feedbackTitle = '面试反馈';
        this.FeedbackContent = false;
        this.Interview = '';
        //同意展示
        this.isAgreeBg = false;
        this.IsAgree1 = false;
        this.isIcon1 = false;
        this.agreeHide = false;
        //拒绝隐藏
        this.isRefuseBg = false;
        this.isIcon2 = false;
        this.IsAgree2 = false;
        this.refuseHide = false;
        //没有出现隐藏
        this.isNoBg = false;
        this.isIcon3 = false;
        this.IsAgree3 = false;
        // this.FeedbackContent = true;
        this.YesFlag = false;
        this.NoFlag = false;
        this.public3 = false;
        this.public2 = false;
      },
      //通过
      InterviewYes (){
        this.InterviewFeedbackStatus = 1;
        //同意展示
        this.isAgreeBg = true;
        this.IsAgree1 = true;
        this.isIcon1 = true;
        this.agreeHide = true;
        //拒绝隐藏
        this.isRefuseBg = false;
        this.isIcon2 = false;
        this.IsAgree2 = false;
        this.refuseHide = false;
        //没有出现隐藏
        this.isNoBg = false;
        this.isIcon3 = false;
        this.IsAgree3 = false;
        // this.FeedbackContent = true;
        this.YesFlag = true;
        this.NoFlag = false;
        this.public3 = false;
        this.public2 = false;
      },
      //拒绝
      InterviewNo (){
        this.InterviewFeedbackStatus = 2;
        //拒绝展示
        this.isRefuseBg = true;
        this.isIcon2 = true;
        this.IsAgree2 = true;
        this.refuseHide = true;
        //同意隐藏
        this.isAgreeBg = false;
        this.IsAgree1 = false;
        this.isIcon1 = false;
        this.agreeHide = false;
        //没有出现隐藏
        this.isNoBg = false;
        this.isIcon3 = false;
        this.IsAgree3 = false;
        // this.placeholder = '（请填写拒绝外教的原因，以便我们为您推荐更符合要求的外教。）';
        // this.FeedbackContent = true;
        this.YesFlag = false;
        this.NoFlag = true;
        this.public3 = false;
        this.public2 = false;
      },
      //没有出现
      InterviewNoShow () {
        this.InterviewFeedbackStatus = 3;
        //没有出现展示
        this.isNoBg = true;
        this.isIcon3 = true;
        this.IsAgree3 = true;
        //拒绝隐藏
        this.isRefuseBg = false;
        this.isIcon2 = false;
        this.IsAgree2 = false;
        this.refuseHide = false;
        //同意隐藏
        this.isAgreeBg = false;
        this.IsAgree1 = false;
        this.isIcon1 = false;
        this.agreeHide = false;
      },
      //拒绝原因
      clickReason (index) {
        this.requiredHide1 = false;
        if(index == 1){
          this.isActive1 = this.isActive1 == true?false:true;
        }else if (index == 2) {
          this.isActive2 = this.isActive2 == true?false:true;
        }else {
          this.isActive3 = this.isActive3 == true?false:true;
        }
      },
      focusNoHide () {
        this.requiredHide1 = false;
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
      z-index :10
      box-shadow :0 4px 12px rgba(52,52,52,.3)
      .footer-content
        width:610px
        height:100px;
        line-height:100px;
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
          .footer-Employment
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
      .aboutFace-content
        width:790px
        height:100%
        margin 0 auto
        .Interview-status
          float:left
          font-size: 24px;
          height:100px;
          line-height:100px;
          color: #494949;
          font-weight:600;
        .interviewData
          float:left
          .center
            margin:31px 12px 0px 20px
            height:26px;
            line-height:26px;
            background: #E9F7ED;
            border-radius: 100px;
            padding:6px 20px;
            .point
              vertical-align: 3px;
              display:inline-block;
              margin:0 6px 0 0;
              width:4px;
              height:4px;
              border-radius:50%;
              background: #1BA275;
            .interviewName
              font-size: 14px;
              color: #1BA275;
        .interviewText
          float:left;
          font-size: 14px;
          color: #333333;
          height:100px;
          line-height:100px;
        .NewInterview
          float:left;
          margin:0 0 0 6px;
          height:100px;
          line-height:100px;
          font-size: 14px;
          color: #3082E7;
          text-decoration:underline;
        .NewInterview-button
          float:left;
          width:130px;
          height:44px;
          line-height:44px;
          text-align:center;
          cursor:pointer;
          background: #3082E7;
          border-radius: 4px;
          font-size: 14px;
          color: #FFFFFF;
          margin:28px 0 0 60px;
    .footer-detail
      width:100%
      min-height:156px
      background:#fff
      position:fixed
      bottom:0
      left:0
      z-index :10
      box-shadow :0 4px 12px rgba(52,52,52,.3)
      .detail-top
        width:100%
        height:56px
        background: #F7FCFF
        .show-detail,.close-detail
          height:56px
          line-height:56px
          text-align:center
          font-size: 16px
          color: #3082E7
          cursor:pointer
          .show-icon,.close-icon
            display:inline-block
            margin:0 0 0 8px
            width:12px
            height:8px
            background:url('../../common/img/icon-b-details.png') no-repeat
            background-position:-11px -11px
          .close-icon
            background:url('../../common/img/icon-b-details.png') no-repeat
            background-position:-33px -11px
      .detail-bottom
        width:100%
        min-height:100px
        background: #FFFFFF
        .detail-bottom-content
          width:950px
          margin:0 auto
          .interviewStatus
            float:left
            font-size: 24px;
            height:100px;
            line-height:100px;
            color: #494949;
            font-weight:600;
          .interviewData
            float:left
            .center
              margin:31px 12px 0px 20px
              height:26px;
              line-height:26px;
              background: #E9F7ED;
              border-radius: 100px;
              padding:6px 20px;
              .point
                vertical-align: 3px;
                display:inline-block;
                margin:0 6px 0 0;
                width:4px;
                height:4px;
                border-radius:50%;
                background: #1BA275;
              .interviewName
                font-size: 14px;
                color: #1BA275;
          .interviewTime
            font-size: 14px
            color: #333333
            float:left
            margin:0 0 0 12px
            height:100px
            line-height:100px
          .button-submit
            width:130px
            height:44px
            line-height:44px
            text-align:center
            color:#fff;
            font-size: 14px;
            cursor:pointer
            float:left;
            margin:28px 0 0 60px
            background: #3082E7
            border-radius: 4px
        .interview-detail
          width:760px
          height:114px
          margin:0 auto
          background: #F8FCFF
          border: 1px solid #C6DAFF
          margin-bottom: 28px
          .interview-data
            margin:20px auto
            display:block
            padding:0 60px
            .detail-title
              float:left
              font-size: 12px;
              color: #999999;
              margin:0 8px 0 0
            .detail-date
              float:left
              .date
                font-size: 12px;
                color: #333333;
                display:block;
                margin:0 0 6px 0
              .zone
                font-size: 12px;
                color: #333333;
                display:block;
    .mask
      width:100%
      height:100%
      background:rgba(00,00,00,.6)
      position: fixed
      top: 0
      left: 0
      z-index :100
      .mask-feedback,.mask-feedback-success,.mask-feedback-Interview,.InterviewFeedback
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
            min-height:142px
            margin:0 auto
            background:#f7f9fc
            padding-bottom:20px
            .select-interview{
              padding-top:30px;
              width: 480px;
              margin: 0px auto 20px;
              .select-interview-title{
                float:left;
                height:37px;
                line-height:37px;
                font-size:14px;
                color:#333;
                margin:0 15px 0 0;
                .required{
                  color:red
                  font-size:14px
                  margin-left:24px
                  position:absolute
                  top: 32px;
                  left: 0;
                }
              }
              .el-select{
                .el-input__inner{
                  width:300px;
                  height:38px;
                }
              }
            }
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
              position:absolute
              top:25px
            .mask-feedback-Reason
              width:480px
              margin:0px auto 15px
              font-size:14px
              color:#333
              display: block
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
        .secondInterview
          .mask-feedback-bottom
            margin:40px auto 0;
            height:198px;
            .select-interview
              padding-top:80px;
              width:380px;
              .select-interview-title
                .required
                  top:82px;
                  left:50px;
          .secondbutton
              width:230px;
              margin:34px auto;
              .second-cancle,.second-comfig
                width:100px;
                height:29px;
                line-height:29px;
                text-align:center;
                font-size: 14px;
                color: #FFFFFF;
                background: #9DB4D1;
                border-radius: 4px;
                float:left;
              .second-comfig
                margin:0 0 0 24px;
                background: #3082E7;
                border-radius: 4px;
      .InterviewFeedback
        .Feedback-content
          width:100%
          .mask-feedback-img
            width:40px
            height:40px
            margin:20px 10px 20px 255px
            border-radius:50%
          .mask-feedback-name
            font-size:14px
            color:#333
            vertical-align:35px
          .Feedback-center
            width:560px
            margin 0 auto
            background:#f7f9fc
            padding-bottom:30px
            .Interview-title
              display:block
              margin:0px 0 0 25px
              padding-top:30px
              .require-icon
                font-siez:14px
                color:#ea3522
                display:inline-block
                margin:0 10px 0 0
              .require-name
                font-size:18px
                color:#333
            .Interview-status
              display:block
              width:480px
              margin:15px auto
              .status-agree,.status-Refuse,.status-No
                padding:10px 18px
                position:relative
                background:#fff
                border:1px solid #dfe6ef
                display:inline-block
                margin: 0 20px 0 0
                cursor:pointer
                .agree-icon,.Refuse-icon,.No-icon
                  position:absolute
                  top:13px
                  left:22px
                  background:url('../../ilb/image/resume/icon-b-details.png') no-repeat
                  background-position:-87px -11px
                  width:20px
                  height:14px
                  display:inline-block
                .status-Refuse
                  width:17px
                  height:16px
                  background-position:-58px -11px
                .Refuse-icon
                  width:17px
                  height:16px
                  background-position:-58px -11px
                .No-icon
                  width:20px
                  height:20px
                  top: 11px
                  background:url('../../common/img/icon-b-1.png') no-repeat
                  background-position: -211px -16px
                .ActiveYes
                  background-position:-155px -11px
                .ActiveNo
                  background-position:-122px -10px
                .ActiveNoShow
                  background-position:-175px -16px
                .agree-text,.Refuse-text,.No-text
                  font-size: 16px
                  color: #999
                  margin: 0 0 0 30px
                .IsAgree
                  color:#fff
              .status-No
                margin-right:0
              .isAgreeBg
                background:#3082e7
            .Interview-text
              width:480px
              margin:20px auto 0
              .text-title
                font-size:18px
                color:#333
              .input-textarea
                margin:15px auto 0
                width:480px
                height:90px
                border:1px solid #dfe6ef
                resize:none
                border-radius:4px
                padding-left:10px
                padding-top:10px
              .text-header
                display:block
                .require-icon
                  font-size:14px
                  color:#ea3522
                  margin:0 10px 0 0
                .text-title
                  font-size:18px
                  color:#333
                .required
                  font-size:14px
                  color:#fc3a3a
                  margin:0 0 0 10
              .refuse-reason
                margin:15px 0 0 0
                .reason
                  padding:10px 20px
                  height:30px
                  line-height:30px
                  text-align:center
                  cursor:pointer
                  color:#999999
                  font-size:14px
                  background:#fff
                  border:1px solid #dfe6ef
                  margin: 0 10px 0 0
                .Active
                  color:#fff
                  background:#3082e7
          .button-submit
            display:block
            width:100px
            height:30px
            line-height:30px
            text-align:center
            cursor:pointer
            background:#3082e7
            margin:20px auto 30px
            color:#fff
            border-radius:4px
      .InterviewDate
        position:absolute
        top:50%
        left:50%
        margin:-170px 0 0 -270px
        width:540px
        height:340px
        .mask-bg
          width:100%
          height:100%
          position:fixed
          top:0
          left:0
          background:rgba(000,000,000,.2)
          z-index:10
        .mask-feedback-title
          position:relative
          height:60px
          width:100%
          line-height:60px
          background:#eff1f6
          text-align:center
          font-size:18px
          color:#333
          border-top-left-radius:8px;
          border-top-right-radius:8px;
          z-index:20
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
        .mask-feedback-content
          width:100%;
          height:279px;
          background:#fff;
          position:relative;
          z-index:20;
          border-bottom-left-radius:8px;
          border-bottom-right-radius:8px;
          .freeTime-text
            width:420px;
            display:block;
            margin:0px auto;
            padding-top:100px;
            font-size: 14px;
            color: #333333;
            .freeTime-href
              font-size: 14px;
              color: #3082E7;
              text-decoration: underline;
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
