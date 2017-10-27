<template>
  <div class="remuse-body">
    <!--导航头部-->
    <div class="Header" v-show="NavHidden">
      <span class="Header_img" @click="BackOff"></span>
      <span class="Header_right_img" @click="GoToHome"></span>
      <span class="Header_title">查看简历</span>
    </div>
    <!--主题内容-->
    <div class="userRemuse">
      <div class="remuse-Title">
        <img :src="this.headeImg" alt="" class="heade-Img">
        <div class="user-data">
          <span class="heade-name">{{this.userName}}</span>
          <span class="heade-nationality" v-show="nationalityHidden">Nationality: {{this.nationality}}</span>
          <span class="heade-age" v-show="AgeHidden">Age: {{this.age}}</span>
        </div>
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
                <span class="circular">
                  <span class="line"></span>
                </span>
                <div class="workArr-date">
                  <span class="">{{workArrList.startDateStr}}</span>
                  <span>-</span>
                  <span class="">{{workArrList.endDateStr}}</span>
                </div>
                <div class="workArr-right" v-show="workArrList.workShow">
                  <div class="workArr-right-top">
                    <span class="">{{workArrList.name}}ds</span>
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
                <span class="circular">
                  <span class="line"></span>
                </span>
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
          <!---->
          <div class="public-parent" v-show="StatementShow">
            <div class="public-title">
              <span class="public-title-font">Statement</span>
            </div>
            <div class="Statement-Article comment-Article"></div>
          </div>
          <!-- Ratings-->
          <div class="Ratings public-parent">
            <div class="public-title">
              <span class="public-title-font">Ratings</span>
            </div>
            <div class="center" style="padding-bottom:0;">
              <div class="score">
                <el-progress type="circle" :percentage="this.ScoreNumber"></el-progress>
                <span class="score-bottom">Compreherisive</span>
              </div>
              <div class="Ratings-stare">
                <div class="Ratings-Ability-1 Ratings-Ability">
                  <span class="Ability">Communication:</span>
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
                  <span class="Ability">Professionlism:</span>
                  <el-rate
                    v-model="value3"
                    disabled>
                  </el-rate>
                </div>
                <div class="Ratings-Ability-4 Ratings-Ability">
                  <span class="Ability">Attitude:</span>
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
            </div>
          </div>
          <!--Video-->
          <div class="video public-parent" v-show="videoShow">
            <div class="public-title">
              <span class="public-title-font">Video</span>
            </div>
            <ul class="workHistory-Content video-Content" style="padding-bottom:0;">
              <li v-for="(videoArrList,index) in videoArr" class="public-Arr-list videoArrList clear" @click="playVideo(videoArrList.url,videoArrList.name,videoArrList.LinkFlag)">
                <span class="Video-left-img"></span>
                <span class="video-title">{{videoArrList.name}}</span>
                <span class="Video-right-img"></span>
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
          <div class="public-parent" v-show="AttachmentShow">
            <div class="public-title">
              <span class="public-title-font">Attachment</span>
            </div>
            <div class="comment-Article">
              <i class="Attachment-img-folder"></i>
              <span class="Attachment-span-1">{{this.AttachmentName}}</span>
              <br>
              <span class="Attachment-span">(该附件不支持手机查看，请您用电脑访问并下载查看)</span>
            </div>
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
                <span class="circular">
                  <span class="line"></span>
                </span>
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
        <div class="footer-state" @click="FeedBackShow(4)">
          <!-- <span class="footer-hover hover-Interview-state">
            请您根据面试情况，填写面试反馈
            <i class="footer-triangle"></i>
          </span> -->
          <span class="footer-Interview-state" v-show="InterviewShow">填写面试反馈</span>
        </div>
        <div v-show="footerState" class="stateBox clear">
          <div class="footer-state clear" @click="FeedBackShow(1)">
            <!-- <span class="footer-hover hover-Employment">
              我对该外教非常满意，希望立即录用Ta
              <i class="footer-triangle"></i>
            </span> -->
            <span class="footer-Employment">果断录用TA</span>
          </div>
          <div class="footer-state clear" @click="FeedBackShow(2)">
            <!-- <span class="footer-hover hover-Interview">
              我希望对外教进行面试，以便更详细了解外教情况
              <i class="footer-triangle"></i>
            </span> -->
            <span class="footer-Interview">我要面试TA</span>
          </div>
          <div class="footer-state clear" @click="FeedBackShow(3)">
            <!-- <span class="footer-hover hover-refuse">
              我不喜欢该外教，我要拒绝Ta
              <i class="footer-triangle"></i>
            </span> -->
            <span class="footer-refuse">残忍拒绝TA</span>
          </div>
        </div>
      </div>
    </div>
    <!--视频-->
    <div class="videoMaskParent" v-show="videoMask" @click="CloseVideoMask">
      <div class="videoMask"></div>
      <div class="video-parent">
        <video :src="this.viderUrl" autoplay class="video_player" controls="controls"></video>
        <div class="videoName">{{this.videoName}}</div>
      </div>
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
    //判断微信
    if(getQueryString('access_token') && getQueryString('openid')){
      $.cookie('B-access_token',getQueryString('access_token'));
      $.cookie('openid',getQueryString('openid'));
      $.cookie('B-customerId',getQueryString('customerId'));
      $.cookie('userNum',getQueryString('phone'));
    };
    const profileId = getQueryString('profileId');
    const orderId = getQueryString('orderId');
    const orderNum = getQueryString('orderNum');
    const active  = getQueryString('active');
    // const status = getQueryString('status');
    const access_token = $.cookie('B-access_token');
    const BcustomerId =  $.cookie('B-customerId');
    const loginSuccess = $.cookie('loginSuccess');
    const candidateOrderId = getQueryString('candidateOrderId');


export default {
  data () {
    return {
      AttachmentShow:false,
      StatementShow:'',
      abilityScoreAverage:0,
      AgeHidden:false,
      nationalityHidden:false,
      NavHidden:false,
      FooterHidden:false,
      videoName:'',
      videoMask:false,
      viderUrl:'',
      active:'',
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
      phoneNumber:'18710144274',
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
      placeholder:'（您可以填写相关建议和要求）',
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
      console.log(response.body.resultObj)
      let ResponseData = response.body.resultObj.profilelitByOptStatus;
      this.stateNum = ResponseData.candidateOrderList[0].opt_status;
      //国籍
      this.nationality = ResponseData.nationality
      this.id = ResponseData.candidateOrderList[0].id;
      this.headeImg = ResponseData.applicationCareerChinaInfo.headImgURL;
      this.age = ResponseData.age;
      this.userName = ResponseData.firstName;
      //评分
      this.value1 = ResponseData.applicationCareerChinaInfo.abilityScore1;
      this.value2 = ResponseData.applicationCareerChinaInfo.abilityScore2;
      this.value3 = ResponseData.applicationCareerChinaInfo.abilityScore3;
      this.value4 = ResponseData.applicationCareerChinaInfo.abilityScore4;
      this.value5 = ResponseData.applicationCareerChinaInfo.abilityScore5
      this.active = active;
      if(ResponseData.age == ''){
        this.AgeShow = false;
      }else {
        this.AgeShow = true;
      };
      if(ResponseData.nationality == ''){
        this.nationalityHidden = false;
      }else {
        this.nationalityHidden = true;
      };

      let WorkArr = ResponseData.careerchinaWorkHistoryList;
      let Education = ResponseData.careerchinaEduHistoryList;
      let VideoArr = ResponseData.applicationCareerChinaInfo.videoInfos;
      let Comment = ResponseData.applicationCareerChinaInfo.commentContent;
      let vedioLink = ResponseData.applicationCareerChinaInfo.videoLinks;
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
          if(WorkArr[i].companyName == '' && WorkArr[i].positionName == ''){
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
        console.log(this.workHistoryArr);
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
            index:i,
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
            VideoArr[i].videoTitle = 'xx-xx';
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
      if( ResponseData.applicationCareerChinaInfo.attachmentInfo === '' || ResponseData.applicationCareerChinaInfo.attachmentInfo === null){
        this.AttachmentShow = false;
      }else {
        this.AttachmentShow = true;
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
  methods :{
    CloseVideoMask (e){
      if(e.target.className == 'video_player'){
        return false
      };
      if(e.target.className == 'videoMask'){
        this.videoMask = false;
      };
    },
    BackOff (){
      location.href="/module/Login_order.html?profileId="+profileId+'&orderId='+orderId+'&orderNum='+orderNum+'&active='+this.active;
    },
    Sign_Up (){
        $.cookie('loginSuccess',"false");
        $.cookie('userId',"");
        $.cookie('userNum',"");
        $.cookie('UUId',"");
        location.href="/module/index.html";
    },
    handleClick(tab) {
      // console.log(tab)
    },
    //遮罩层显示
    FeedBackShow (index){
      console.log(index)
      location.href="/module/InterviewState.html?profileId="+profileId+'&orderId='+orderId+'&orderNum='+orderNum+'&active='+active+'&status='+status+'&candidateOrderId='+candidateOrderId+'&state='+index;
    },
    //遮罩层关闭
    MaskClose (){
      this.MaskShow = false;
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
        if(this.YesFlag == true && this.NoFlag == false){
          this.ClickState = '1003';
          this.$http.post(localhost+'/cc/to/b/order/updatenote.action',
          {
            id:this.id,
            currentNote:this.FeedBack,
            optStatus:this.ClickState,
            profileId:profileId,
            orderId:orderId
          }).then((response) =>{
            console.log(response.body)
            this.successState = response.body
            this.feedbackHide = false;
            this.feedbackSuccess = true;
            this.feedbackInterview = false;
            this.successP = '感谢您的反馈，销售经理将尽快与您联系，沟通外教录用详情';
          },(response) =>{

          });
        };
        if(this.YesFlag == false && this.NoFlag == true){
          this.ClickState = '1004';
          this.$http.post(localhost+'/cc/to/b/order/updatenote.action',
          {
            id:this.id,
            currentNote:this.FeedBack,
            optStatus:this.ClickState,
            profileId:profileId,
            orderId:orderId
          }).then((response) =>{
            this.successState = response.body
            this.feedbackHide = false;
            this.feedbackSuccess = true;
            this.feedbackTitle = '反馈成功';
            this.feedbackInterview = false;
            this.successP = '感谢您的反馈，销售经理将为您推荐更优质的外教，请随时关注';
          },(response) =>{

          });
        };

      }
    },
    //反馈成功
    successFooter (){
      if(this.successState == '1003'){
        this.feedbackInterview = false;
        this.footerReason = true;
        this.feedback = '已通过';
        this.ReasonSuccess = '(您已锁定该外教，目前销售经理正在与外教沟通offer事宜)';
        this.InterviewShow = false;
      };
      if(this.successState == '1004'){
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
      if(this.InterviewFlag){
        this.footerReason = false;
        this.InterviewShow = true;
      }
    },
    //面试反馈
    InterviewFeedback (){
      // console.log(1)
      // location.href="/module/InterviewState.html?profileId="+profileId+'&orderId='+orderId+'&orderNum='+orderNum+'&state='+index;
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
      this.placeholder = '（您可以填写相关建议和要求）';
      $('.mask-feedback-stars').css('opacity','0');
      this.FeedbackContent = true;
      this.YesFlag = true;
      this.NoFlag = false;
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
      this.placeholder = '（请填写拒绝外教的原因，以便我们为您推荐更符合要求的外教）';
      $('.mask-feedback-stars').css('opacity','1');
      this.FeedbackContent = true;
      this.YesFlag = false;
      this.NoFlag = true;
      this.public2 = false;
    },
    feedbackTextFocus (){
      this.public = false;
    },
    InterviewFocus (){
      this.public3 = false;
    },
    playVideo (url,name,LinkFlag){
      // console.log(url)
      // this.videoMask = true;
      // this.viderUrl = url;
      // this.videoName = name;
      this.viderUrl = url;
      this.videoName = name;
      if(LinkFlag){
        this.viderFlag = false;
        window.open(url);
        this.videoMask = false;
      }else {
        this.videoMask = true;
      }
    },
    GoToHome (){
      location.href='/module/Login_home.html';
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .remuse-body
    background:#fbfbfb
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
      .Header_right_img
        float:right
        margin: 10px 15px 0 0
        width:22px
        height:22px
        display:inline-block
        background:url('../../ilb/image/APP/icon-b-mobile@2x.png')no-repeat
        background-position: -130px -85px
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
    .userRemuse
      background:#fff
      .remuse-Title
        margin:0px auto
        background:#3082e7
        height:112.5px
        .heade-Img
          margin:27px 25px 0px 15px
          width:60px
          height:60px
          float:left
          border-radius:50%
        .user-data
          display:inline-block
          .heade-name
            font-size: 17px
            color: #fff
            display: block
            margin: 16px 0 4px 0
          .heade-nationality,.heade-age
            font-size:13px
            color:#c1daf8
            display:block
            margin-bottom:4px
        .heade-title-img
          background:url('../../ilb/image/resume/icon-b-seal.png') no-repeat
          background-size:cover
          width:104px
          height:110px
          display:inline-block
          float:right
      .resumeContent
        width:100%
        background:#f7f7fc
        .el-tabs__header
          background: #1a73e0
          margin-bottom:0
          .el-tabs__active-bar
            border: 6px solid #fff
            border-top: 6px solid transparent
            border-left: 6px solid transparent
            border-right: 6px solid transparent
            background-color:transparent
            width:0px !important
            left: 87px
          .el-tabs__item
            height:46px
            line-height:46px
            color:#fff
            border-right:none
            width:187.5px
            text-align:center
            opacity:.8
            &.is-active
              opacity:1
        .public-parent
          .public-title
            padding-left:15px
            background:#f7f7fc
            .public-title-font
              font-size:17px
              color:#333
              display:block
              padding:20px 0 20px 0
              font-weight:700
              overflow: hidden
              white-space: nowrap
              text-overflow: ellipsis
          .public-Content,.workHistory-Content,.center,.comment-Article
            background:#fff
            padding-top:20px
            padding-bottom:20px
            .Attachment-span-1
              color:#333
              overflow: hidden
              white-space: nowrap
              text-overflow: ellipsis
              display:inline-block
              width:280px
            .Attachment-span
              font-size:12px
              color:#8d8d8d
              display:inline-block
              margin-top:10px
              width: 100%
              text-align: center
            .Attachment-img-folder
              background:url('../../ilb/image/resume/icon-b-attachment.png') no-repeat
              background-position:-10px -11px
              width:16px
              height:20px
              display:inline-block
              margin-right:20px
          .public-Arr-list,.videoArrList
            .workArr-date,.workArr-name
              font-size:14px
              color:#8d8d8d
              margin:0px 0px 6px 15px
              display:inline-block
              min-width:100px
            .workArr-name
              color:#333
            .workArr-right
              margin-left: 40px
              .workArr-detail
                margin-right: 20px
                color: #999
              .workArr-right-top
                font-size: 14px
                color: #333
                // margin: 0px 0px 14px 40px
                padding-bottom: 10px
              .Edu-topFont
                margin-bottom:13px
                display: inline-block
                font-size:14px
              .Edu-right-box
                padding-bottom:30px
                color: #8d8d8d
                .Edu-BottomFont
                  font-size:14px
            .workArr-name
              margin-left:0px
              margin-top:0px
            .workArr-Article
              font-size:14px
              color:#999
              padding-bottom:30px
            .workArr-major
              font-size:14px
              color:#8d8d8d
              padding-bottom:30px
              display: inline-block
            .circular
              position:relative
              width:11px
              height:10px
              display:inline-block
              background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
              float:left
              background-position: -164px -90px
              background-size: 187px 113px
              margin:3px 0 0 15px
              .line
                position:absolute
                top:10px
                left:5px
                width:1px
                height:80px
                float:left
                background:#f7f7fc
        .Ratings
          .center
            text-align:center
            .Ratings-stare
              display: block
              width: 250px
              text-align: right
              margin-bottom: 10px
              /* margin-right: 50px; */
              margin: 0 auto 0px
              padding-bottom: 16px
              .el-rate
                display:inline-block
                margin-left:10px
              .Ratings-Ability
                display:inline-block
                font-size:14px
                color:#333
                margin-bottom:12px
            .score
              display:inline-block
              .el-progress__text
                color:#f5be41
                font-weight: 700
                font-size:25px!important
              .score-bottom
                display:block
                font-size:14px
                color:#ffbc02
                margin:6px auto 20px
              .el-progress-circle
                width:60px !important
                height:60px !important
        .video
          .video-Content
            padding-top:0
            background:#f7f7fc
            .video-title
              display:inline-block !important
              font-size:14px
              color:#333
              margin-left:10px
              width:270px
              overflow:hidden
              white-space:nowrap
              text-overflow:ellipsis
            .videoArrList
              height:65px
              background:#fff
              line-height:65px
              margin-bottom:5px
              .Video-left-img
                margin:20px 0 20px 15px
                width:27px
                height:25px
                display:inline-block
                float:left
                background:url('../../ilb/image/APP/icon-b-mobile-1@2x.png') no-repeat
                background-position: -3px -22px
                background-size: 161px 103px
              .Video-right-img
                margin:20px 15px 20px 0
                width:25px
                height:25px
                display:inline-block
                float:right
                background:url('../../ilb/image/APP/icon-b-mobile-1@2x.png') no-repeat
                background-position: -39px -24px
                background-size: 170px 106px
        .Education
          margin-top:20px
        .comment-Article
          font-size:14px
          color:#999
          padding:0 15px 34px 15px
        .Operation
          width:100%
          background: #fff
          height :100%
          .Operation-ul
            height :100%
            width:100%
            margin: 20px auto
            padding-bottom: 80px
            .Operation-ul-li
              margin:0 15px
              padding-top:20px
              .ul-li-time
                font-size: 14px
                display: inline-block
                margin:0 0 10px 15px
                color:#999
              .ul-li-state
                margin:0 0 10px 30px
                .li-state,.li-reason
                  font-size: 14px
                  color:#333
              .ul-li-remarks
                font-size: 14px
                color:#8d8d8d
                margin-left:30px
              .circular
                position:relative
                width:11px
                height:11px
                display:inline-block
                background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
                background-position: -164px -90px
                background-size: 187px 113px
                .line
                  position:absolute
                  top:10px
                  left:5px
                  width:1px
                  height:80px
                  float:left
                  background:#f7f7fc
        .Bottom-font
          text-align:center
          margin-bottom:60px
          background:#f7f7fc
          .bottonP
            font-size:12px
            color:#999
            margin:20px auto 30px
            display:inline-block
    .footer
      width:100%
      height:60px
      background:#fff
      position:fixed
      bottom:0
      left:0
      line-height:60px
      z-index :10
      box-shadow :0 4px 12px rgba(52,52,52,.3)
      .footer-content
        margin 0 auto
        .footer-Interview-state
            width:110px
            height:40px
            margin-right:10px
            float:left
            color:#fff
            font-size:13px
            line-height:40px
            text-align:center
            background:#79ca5b
            border-radius:4px
            margin-top:10px
            cursor:pointer
            margin-left: 20px
        .footer-feedback
          font-size:17px
          color:#333
          margin-right:10px
          margin-left:15px
          float:left
        .footer-ReasonSuccess
          font-size: 12px
          color:#333
        .footer-state
          position:relative
          float: left
          .footer-Employment,.footer-Interview,.footer-refuse
            width:88px
            height:40px
            margin-right:10px
            float:left
            color:#fff
            font-size:14px
            line-height:40px
            text-align:center
            background:#00cad5
            border-radius:4px
            margin-top:10px
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
        .stateBox
          display:inline-block
    .videoMaskParent
      width:100%
      height:100%
      position:fixed
      top:0
      left:0
      z-index:100
      .videoMask
        position:fixed
        top:0
        left:0
        width:100%
        height:100%
        background:#000
        opacity:.8
      .video-parent
        position:fixed
        top:0
        left:0
        .video_player
          width:375px
          height:100%
          display:block
        .videoName
          font-size:16px
          color:#fff
          margin:15px
</style>
