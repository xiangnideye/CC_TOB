<template>
  <div class="InterviewMian">
    <!--导航-->
    <div class="Header">
      <span class="Header_img" @click="BackOff"></span>
      <span class="Header_title">{{this.feedbackTitle}}</span>
    </div>
    <div class="feedback">
      <!--其余的样式-->
      <div class="mask-feedback" v-show="FeedbackOne">
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
          <div class="AntiClick" v-show="AntiClickShow"></div>
        </div>
      </div>
      <!--反馈成功-->
      <div class="mask-feedback-success" v-show="FeedbackSuccess">
        <div class="mask-feedback-box success-Feedback">
          <span class="success-img"></span>
          <p class="success-p-first">反馈成功</p>
          <p class="success-p">{{this.successP}}</p>
          <div class="mask-feedback-submit" @click="successFooter">确定</div>
        </div>
      </div>
      <!--面试反馈-->
      <div class="mask-feedback-Interview" v-show="FeedbackInterview">
        <div class="mask-feedback-box Interview-feedback-box">
          <img :src="this.headeImg" alt="" class="mask-feedback-img">
          <span class="mask-feedback-name">{{this.userName}}</span>
          <div class="mask-Interview">
            <div class="Interview-state-parent">
              <span class="Interview-start">*</span>
              <span class="Interview-title">面试结果</span>
              <span class="public2" v-show="public2">必填</span>
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
  </div>
</template>

<script>
import localhost from '../../common/js/public.js';
 let getQueryString = (name) =>{
   let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
   let r = window.location.search.substr(1).match(reg);
   if (r != null) return unescape(r[2]); return null;
 };
 let profileId = getQueryString('profileId');
 let orderId = getQueryString('orderId');
 let orderNum = getQueryString('orderNum');
 let state = getQueryString('state');
 let active = getQueryString('active');
 let status = getQueryString('status');
 let candidateOrderId = getQueryString('candidateOrderId');
 const access_token = $.cookie('B-access_token');
 const BcustomerId =  $.cookie('B-customerId');
 const loginSuccess = $.cookie('loginSuccess');

export default {
  mounted (){
    $('.InterviewMian').css('height',$(window).height());
  },
  data (){
    return {
      AntiClickShow:false,
      AntiClick2Show:false,
      FeedbackOne:true, //父级容器
      FeedbackSuccess:false, //反馈成功
      FeedbackInterview:false, // 面试反馈
      headeImg:'',
      id:'',
      feedbackTitle:'',
      userName:'',
      Reason:'',
      placeholder:'',
      FeedBack:'',
      public:false,
      public2:false,
      public3:false,
      YesFlag:false,
      NoFlag:false,
      Interview:'',
      ClickState:'',
      successState:'',
    }
  },
  created (){
    this.$http.get(localhost+'/cc/order/talent/detail?access_token='+access_token+'&candidateOrderId='+candidateOrderId).then((response) =>{
      console.log(response.body);
      let ResponseData = response.body.resultObj.profilelitByOptStatus;
      this.stateNum = ResponseData.candidateOrderList[0].opt_status;

      this.nationality = ResponseData.nationality

      this.id = ResponseData.candidateOrderList[0].id;

      this.headeImg = ResponseData.applicationCareerChinaInfo.headImgURL;
      if(state === '1'){
        this.feedbackTitle = '外教反馈';
        this.ClickState = '1003';
        this.Reason = '相关要求:';
        this.placeholder = '（您可以填写相关建议和要求）';
        this.Submit = '录用外教';
        this.feedback = '已通过';
        this.successP = '感谢您的反馈，销售经理将尽快与您联系，沟通外教录用详情';
        this.ReasonSuccess = '(您已锁定该外教，销售经理正在与外教沟通offer事宜)';
      }else if(state === '2'){
        this.feedbackTitle = '面试反馈';
        this.ClickState = '1002';
        this.Reason = '相关要求:';
        this.placeholder = '（您可以填写相关面试要求）';
        this.Submit = '确认面试';
        this.feedback = '面试中';
        this.ReasonSuccess = '(请您根据面试情况，填写面试反馈)';
        this.successP = '感谢您的反馈，已收到您的面试申请，稍后销售经理将与您联系，确认面试事宜';
        this.InterviewFlag = true;
      }else if (state === '3'){
        this.feedbackTitle = '外教反馈';
        this.ClickState = '1004';
        this.Reason = '拒绝原因:';
        this.placeholder = '（请填写拒绝外教的原因，以便我们为您推荐更符合要求的外教）';
        this.Submit = '拒绝外教';
        this.feedback = '已拒绝';
        this.ReasonSuccess = '（您已拒绝该外教)';
        this.successP = '感谢您的反馈，销售经理将为您推荐更优质的外教，请随时关注';
        $('.mask-feedback-stars').css('opacity','1');
      }else if (state === '4'){
        this.FeedbackOne = false;
        this.FeedbackSuccess = false;
        this.FeedbackInterview = true;
        this.feedbackTitle = '面试反馈';
      }
    });
  },
  methods:{
    BackOff (){
      location.href='/module/M_resume.html?profileId='+profileId+'&orderId='+orderId+'&orderNum='+orderNum+'&active='+active+'&candidateOrderId='+candidateOrderId;
    },
    MaskClose (){
      this.MaskShow = false;
    },
    //确认反馈
    maskButton (){
        this.AntiClickShow = true;
        if(this.ClickState == '1003'){
          this.ClickState = '1003';
          this.$http.post(localhost+'/cc/talent/order/relationship/update',
          {
            access_token:access_token,
            id:this.id,
            profileId:profileId,
            orderId:orderId,
            currentDesc:this.FeedBack,
            optStatus:this.ClickState,
            orderId:orderId
          },{emulateJSON:true}).then((response) =>{
            this.AntiClickShow = false;
            status = this.ClickState;
            this.successState = response.body.error_msg;
            this.FeedbackOne = false;
            this.FeedbackSuccess = true;
            this.feedbackTitle = '反馈成功';
            this.FeedbackInterview = false;
          });
        };
        if(this.ClickState == '1002'){
          this.ClickState = '1002';
          this.$http.post(localhost+'/cc/talent/order/relationship/update',
          {
            access_token:access_token,
            id:this.id,
            profileId:profileId,
            orderId:orderId,
            currentDesc:this.FeedBack,
            optStatus:this.ClickState,
            orderId:orderId
          },{emulateJSON:true}).then((response) =>{
            this.AntiClickShow = false;
            status = this.ClickState;
            this.successState = response.body.error_msg;
            this.FeedbackOne = false;
            this.FeedbackSuccess = true;
            this.feedbackTitle = '反馈成功';
            this.FeedbackInterview = false;
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
            this.$http.post(localhost+'/cc/talent/order/relationship/update',
            {
              access_token:access_token,
              id:this.id,
              profileId:profileId,
              orderId:orderId,
              currentDesc:this.FeedBack,
              optStatus:this.ClickState,
              orderId:orderId
            },{emulateJSON:true}).then((response) =>{
              this.AntiClickShow = false;
              status = this.ClickState;
              this.successState = response.body.error_msg;
              this.FeedbackOne = false;
              this.FeedbackSuccess = true;
              this.feedbackTitle = '反馈成功';
              this.FeedbackInterview = false;
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
        this.AntiClick2Show = true;
        if(this.YesFlag == true && this.NoFlag == false){
          this.ClickState = '1003';
          this.$http.post(localhost+'/cc/talent/order/relationship/update',
          {
            access_token:access_token,
            id:this.id,
            profileId:profileId,
            orderId:orderId,
            currentDesc:this.FeedBack,
            optStatus:this.ClickState,
            profileId:profileId,
            orderId:orderId
          },{emulateJSON:true}).then((response) =>{
            console.log(response.body)
            status = this.ClickState;
            this.successState = response.body.error_msg;
            this.FeedbackOne = false;
            this.FeedbackInterview = false;
            this.successP = '感谢您的反馈，销售经理将尽快与您联系，沟通外教录用详情';
            this.FeedbackSuccess = true;
            this.feedbackTitle = '反馈成功';
          });
        };
        if(this.YesFlag == false && this.NoFlag == true){
          this.ClickState = '1004';
          this.$http.post(localhost+'/cc/talent/order/relationship/update',
          {
            access_token:access_token,
            id:this.id,
            profileId:profileId,
            orderId:orderId,
            currentDesc:this.FeedBack,
            optStatus:this.ClickState,
            profileId:profileId,
            orderId:orderId
          }).then((response) =>{
            status = this.ClickState;
            this.successState = response.body.error_msg;
            this.FeedbackOne = false;
            this.feedbackTitle = '反馈成功';
            this.FeedbackInterview = false;
            this.successP = '感谢您的反馈，销售经理将为您推荐更优质的外教，请随时关注';
            this.FeedbackSuccess = true;
          },(response) =>{

          });
        };
      }
    },
    //反馈成功
    successFooter (){
      // status = this.successState;
      // location.href='/module/M_resume.html?profileId='+profileId+'&'+'orderId='+orderId+'&'+'orderNum='+orderNum+'&active='+active+'&status='+status;
      location.href='/module/M_resume.html?profileId='+profileId+'&orderId='+orderId+'&orderNum='+orderNum+'&active='+active+'&candidateOrderId='+candidateOrderId;
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
      this.placeholder = '您可以填写相关建议和要求';
      $('.mask-feedback-stars').css('opacity','0');
      this.FeedbackContent = true;
      this.YesFlag = true;
      this.NoFlag = false;
      this.public2 = false;
      this.public3 = false;
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
      this.placeholder = '请填写拒绝外教的原因，以便我们为您推荐更符合要求的外教';
      $('.mask-feedback-stars').css('opacity','1');
      this.FeedbackContent = true;
      this.YesFlag = false;
      this.NoFlag = true;
      this.public2 = false;
      this.public3 = false;
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
  .InterviewMian
    background:#f7f7fc
    height:500px
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
    .feedback
      .mask-feedback,.mask-feedback-success,.mask-feedback-Interview
        width:100%
        background:#fff
        .mask-feedback-title
          position:relative
          height:60px
          width:100%
          line-height:60px
          background:#eff1f6
          text-align:center
          font-size:18px
          color:#333
        .mask-feedback-box
          width:100%
          background: #f7f7fc
          position: relative
          .AntiClick,.AntiClick-2
            position:absolute
            top:289px
            left:10px
            width:350px
            height:50px
            z-index:100
          .AntiClick-2
            top:345px
            left:10px
          .mask-feedback-img
            width:60px
            height:60px
            display:block
            margin:25px auto 8px
            border-radius:50%
          .mask-feedback-name
            font-size:18px
            color:#333
            text-align: center
            display:block
            margin-bottom:25px
          .mask-feedback-bottom
            position:relative
            margin:0 auto
            background:#fff
            padding-bottom:20px
            .mask-feedback-stars
              color:red
              font-size:14px
              margin-left:24px
              opacity:0
            .mask-feedback-Reason
              margin-right:17px
              font-size:17px
              color:#474747
              display: inline-block
              padding-top: 20px
            .mask-feedback-text
              resize: none
              width: 292px
              height: 90px
              margin: 0px auto
              display: block
              padding:15px 15px 0 10px
              font-size:15px
              border: 1px solid #e3e7ed
              border-radius: 3px
              margin-top:12px
              outline: none
              -webkit-appearance: none
            .public,.public3
              color:red
              position:absolute
              top: 3px
              left: 120px
            // .public3
            //   top:23px
          .mask-feedback-submit
            border-radius:4px
            width:305px
            height:44px
            margin:25px auto 0
            background:#3082e7
            color:#333
            text-align:center
            line-height:44px
            color:#fff
            font-size:17px
          .success-img
            background :url("../../ilb/image/APP/icon-feedback@2x.png")
            width :180px
            height:165px
            display :block
            background-size:cover
            margin:50px auto 35px
          .success-p
            font-size: 14px
            color: #898989
            text-align: center
            margin: 0 auto 50px
            width: 260px
          .mask-Interview
            background: #fff
            position:relative
            .mask-Interview-Reason
              margin-right: 17px
              font-size: 17px
              color: #474747
              display: inline-block
            .Interview-start
              font-size:14px
              color:red
              margin-left: 24px
            .Interview-title
              font-size: 18px
              color:#333
              display:inline-block
            .Interview-state-parent
              height: 75px
              line-height: 75px
              position:relative
              .Interview-state-left
                margin:0 20px 0px 25px
              .Interview-state-left,.Interview-state-right
                width:80px
                height:35px
                line-height:35px
                position:relative
                display:inline-block
                background:#fff
                text-align:right
                border:1px solid #e3e7ed
                border-radius:3px
                .Interview-img-yes,.Interview-img-no
                  position:absolute
                  top:14px
                  left:12px
                  background:url('../../ilb/image/APP/icon-b-mobile-1@2x.png') no-repeat
                  background-position:-5px -9px
                  width:14px
                  height:10px
                  display:inline-block
                  background-size: 187px 113px
                .Interview-img-no
                  width:11px
                  height:10px
                  background-position:-30px -8px
                .Interview-font-left,.Interview-font-right
                  font-size:17px
                  color:#999
                  margin-right:9px
                .Active-yes
                  background-position:-51px -8px
                .Active-no
                  background-position:-76px -8px
              .Interview-left-Active
                color:#fff
                background:#5dca79
              .Interview-right-Active
                color:#fff
                background:#eb5557
            .public2
              position:absolute
              top:0px
              right:15px
              color:red
        .success-Feedback
          .success-p-first
            margin:0px auto 9px
            font-size:20px
            color:#474747
            text-align:center
</style>
