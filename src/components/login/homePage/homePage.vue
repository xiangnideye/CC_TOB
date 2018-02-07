<template>
  <div class="homePage">
    <div class="header-Timezone clear">
      <div class="header-right">
        <span class="header-Text">当前时区</span>
        <div class="header-prompt">
          <i class="prompt-icon"></i>
          <span></span>
        </div>
        <el-select v-model="zoneVal" filterable placeholder="CST" class="header-zone" @change="zoneChange">
          <el-option
            v-for="el in zoneArr"
            :key="el.value"
            :label="el.zoneName"
            :value="el.value">
           </el-option>
         </el-select>
      </div>
    </div>
    <div class="interviewData clear">
      <div class="newResume-1">
        <span class="newResume-span">新简历</span>
        <ul class="newResume interview-ul" v-if='newResumeIF'>
          <li class="interview-li" v-for='(el,index) in newResumeArr'>
            <a class="li-content clear" :href='el.href'>
              <img :src="el.headImgURL" class="headerImg">
              <div class="data-box">
                <div class="data-top">
                  <span class="data-name">{{el.firstName}}</span>
                  <i class="data-icon"></i>
                  <span class="data-number">{{el.abilityScoreAverage}}</span>
                </div>
                <div class="data-nationality">{{el.nationality}}</div>
              </div>
            </a>
          </li>
        </ul>
        <div class="HideInterview" v-else>
          <i class="interview-icon"></i>
          <span class="interview-text">暂无新简历</span>
        </div>
      </div>
      <div class="newResume-2">
        <span class="newResume-span">约面中</span>
        <ul class="waitinterview interview-ul" v-if='waitinterviewIF'>
          <li class="interview-li" v-for='(el,index) in waitinterviewArr'>
            <a class="li-content clear" :href='el.href'>
              <img :src="el.headImgURL" class="headerImg">
              <div class="data-box">
                <div class="data-top">
                  <span class="data-name">{{el.firstName}}</span>
                  <i class="data-icon"></i>
                  <span class="data-number">{{el.abilityScoreAverage}}</span>
                </div>
                <div class="data-nationality">{{el.nationality}}</div>
                <div class="interview-status" :class="{isActive:el.interviewSwitch}" v-show='el.interviewHide'>
                  <span class="point"></span>
                  <span class="status">{{el.interviewName}}</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <div class="HideInterview" v-else>
          <i class="interview-icon"></i>
          <span class="interview-text">暂无约面中简历</span>
        </div>
      </div>
      <div class="newResume-3">
        <span class="newResume-span">面试中</span>
        <ul class="interview interview-ul" v-if='interviewIF'>
          <li class="interview-li" v-for='(el,index) in interviewArr'>
            <a class="li-content clear" :href='el.href'>
              <img :src="el.headImgURL" class="headerImg">
              <div class="data-box">
                <div class="data-top">
                  <span class="data-name">{{el.firstName}}</span>
                  <i class="data-icon"></i>
                  <span class="data-number">{{el.abilityScoreAverage}}</span>
                </div>
                <div class="data-nationality">{{el.interviewTime}}</div>
                <div class="interview-status" :class="{isActive:el.interviewSwitch}" v-show='el.interviewHide'>
                  <span class="point"></span>
                  <span class="status">{{el.interviewName}}</span>
                </div>
              </div>
              <div class="interview-button" v-show='el.feedbackHide'>面试反馈</div>
            </a>
          </li>
        </ul>
        <div class="HideInterview interview" v-else>
          <i class="interview-icon"></i>
          <span class="interview-text">暂无面试中简历</span>
        </div>
      </div>
    </div>
    <div class="homePage-bottom clear">
      <div class="calendar-left">
        <div class="calendar">
          <div class="calendar-date-title">
            <span class="calendar-title-year">{{ThisYear}}年</span>
            <span class="calendar-title-month">{{ThisMonth}}月</span>
            <div class="Switch-month">
              <span class="preMonth" @click='preMonth'>
                <i class="preMonth-icon"></i>
               </span>
              <span class="nextMonth" @click='nextMonth'>
                <i class="nextMonth-icon"></i>
               </span>
              <span class="button-today" @click='callBackToday'>今天</span>
            </div>
          </div>
          <div class="calendar-week-title">
            <div class="clear week-border">
              <span v-for='(el,index) in weekArr' class="calendar-week-oneDate">{{el.weekDate}}</span>
            </div>
            <ul class="calendar-date-content clear">
              <li v-for='(el,index) in CalendarArr' class="calendar-oneDate" :class="{TodayBg:el.isTodayBg,'isActive':el.isActive}" @click='getClickDayData(el,index)'>
                <span :class='{IsClass:el.isClass}' class="oneDayClass">{{el.day}}</span>
                <span class="interviewNumber" v-show='el.interviewNumber?true:false'>{{el.interviewNumber}}
                  <span class="font">场</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="interviewList-right">
        <span class="borderTop"></span>
        <div class="interview-list">
          <div class="list-top clear">
            <span class="interviewDate">{{interviewDate}}</span>
            <div class="prompt">
              <i class="prompt-icon"></i>
            </div>
          </div>
          <div class="interviewHide" v-show='iconHide'>
            <i class="interviewHide-icon"></i>
            <span class="interviewHide-text">当天一个面试都没有哦，休息一下吧～</span>
          </div>
          <ul class="interviewBox" v-show='listHide'>
            <li class="interview-li" v-for='(el,index) in interviewListArr'>
              <img :src="el.img" class="interview-img">
              <div class="interview-data">
                <div class="interview-div">
                  <span class="name">{{el.name}}</span>
                  <span class="time">{{el.candidateTime}}</span>
                  <div class="interviewname">
                    <span class="point"></span>
                    <span class="status">{{el.userName}}</span>
                  </div>
                </div>
                <span class="date" v-show="el.interviewStatus=='1001'?false:true">已结束</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="Mask-page" v-show="maskHide">
      <div class="mask"></div>
      <!--first-->
      <div class="page-form" v-show="FormHide">
        <div class="page-form-title">
          <span class="title-font">面试详情</span>
          <span class="close" @click='clickCancel'></span>
        </div>
        <div class="page-form-conent">
          <div class="conent-data">
            <div class="conent-data-top">
              <span class="candidate-name">{{candidateName}}</span>
              <i class="icon"></i>
              <span class="with">with</span>
              <span class="Recruiter-name">{{RecruiterName}}</span>
            </div>
            <div class="conent-data-bottom">
              <span class="bottom-date-1">{{DateLeft}}</span>
              <span class="bottom-date-2">{{DateRight}}</span>
            </div>
          </div>
          <div class="content-information">
            <div class="information-div clear">
              <span class="information-title">面试官时区时间</span>
              <span class="information-data">{{Email}}</span>
            </div>
            <div class="information-div clear">
              <span class="information-title">应聘者时区时间</span>
              <span class="information-data">{{Phone}}</span>
            </div>
            <div class="information-div clear">
              <span class="information-title">面试链接</span>
              <span class="information-data Timezone">
                <span class="Time-zone">{{Timezone}}</span>
                <br>
                <span class="Time-date">{{Timedate}}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!--刚进入页面的判断-->
      <div class="page-form sceond-popUps" v-show='freeTimeHide'>
        <div class="page-form-title">
          <span class="title-font"></span>
          <span class="close" @click='clickCancel'></span>
        </div>
        <div class="page-form-conent">
          <span class="content-title">欢迎来到Career China</span>
          <span class="content-text">您好，Career China新增面试预约功能，请您设置可面试的空闲时间，以便我们方便给您安排更合适的面试.</span>
          <div class="content-button">
            <span class="button-confirm" @click='setFreeTime'>去设置空闲时间</span>
            <span class="cancel" @click='clickCancel'>我先看看，稍后设置</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import localhost from '../../../common/js/public.js';
  const access_token = $.cookie('B-access_token');
  const BcustomerId =  $.cookie('B-customerId');
  const loginSuccess = $.cookie('loginSuccess');
  const timezone = $.cookie('timezone');
  const b = $.cookie('basicInfoComplete');
  const n = $.cookie('needSetFreeTime');


  export default {
    data (){
      return {
        today:{},
        freeTimeHide:false,
        newResumeIF:true,
        waitinterviewIF:true,
        interviewIF:true,
        iconHide:false,
        listHide:false,
        zoneVal:'',
        zoneArr:[],
        CalendarArr:[],
        maskHide:false,
        FormHide:false,
        interviewDate:'',
        newResumeArr:[],
        waitinterviewArr:[],
        interviewArr:[],
        interviewListArr:[],
        weekArr: [
          {
            weekDate:'SUN',
          },
          {
            weekDate:'MON',
          },
          {
            weekDate:'TUE',
          },
          {
            weekDate:'WED',
          },
          {
            weekDate:'THU',
          },
          {
            weekDate:'FRI',
          },
          {
            weekDate:'SAT',
          },
        ],
      }
    },
    mounted () {
      this.zoneVal = timezone;
      this.initDate();
      this.getTimeZone();
      //this.getInterviewList(this.zoneVal);

      //获取默认当前今天的面试
      this.getClickDayData(this.today);
      if(b == 'true'){
        this.maskHide = false;
        if($.cookie('needSetFreeTime') == 'true'){
          this.maskHide = true;
          this.freeTimeHide = true;
        }
      }
    },
    methods:{
      //点击今天按钮回到今天
      callBackToday (){
        let y,m,d;
        //获取今年
        y = new Date().getFullYear();
        //获取今月
        m = new Date().getMonth()+1;
        this.ThisYear = y;
        this.ThisMonth = m;
        this.setCalendarView(y,m);
        this.getClickDayData(this.today);
      },
      //去设置空闲时间
      setFreeTime () {
        location.href='login.html#/InterviewManagement?FreeTime='+'third';
        this.maskHide = false;
        this.freeTimeHide = false;
        $.cookie('needSetFreeTime',false);
      },
      //获取时区
      getTimeZone () {
        this.$http.get(localhost+'cc/common/zones?access_token='+access_token).then((response) =>{
          this.zoneArr = response.body.resultObj;
        })
      },
      //获取指派信息
      getInterviewList (zone) {
        this.$http.get(localhost+'cc/assign/order/list?customerId='+BcustomerId+'&targetZone='+zone+'&access_token='+access_token).then((res)=>{
          console.log(res.body.resultObj);
          let a = [],b = [],c = [];
          if(res.body.resultObj){
            res.body.resultObj.map(x=>{
              if(x.opt_status == 1001){
                //新简历
                a.push({
                  headImgURL:x.profile.headImgURL,
                  firstName:x.profile.firstName,
                  abilityScoreAverage:((x.profile.abilityScore1+x.profile.abilityScore2+x.profile.abilityScore3+x.profile.abilityScore4+x.profile.abilityScore5)/5).toFixed(1),
                  nationality:x.profile.nationality,
                  href:'resume.html?candidateOrderId='+x.id,
                  candidateOrderId:x.profile.id
                });
              } else if (x.opt_status == 1002) {
                //面试中
                let interviewHide,name,interviewSwitch,interviewTime,interviewStatus;
                if(x.profile.candidateInterviewPo){
                  interviewTime = x.profile.candidateInterviewPo.userTime;
                }
                //1001 没开始
                //1002 完成
                //1003 面试中
                if(x.interviewStatus == '1002' || x.interviewStatus == '1003'){
                  interviewStatus = true;
                }else {
                  interviewStatus = false;
                }
                if(x.profile.candidateOrderList[0]){
                  interviewHide = true;
                  name = x.interviewerName;
                }else {
                  interviewHide = false;
                }

                b.push({
                  headImgURL:x.profile.headImgURL,
                  firstName:x.profile.firstName,
                  abilityScoreAverage:x.profile.abilityScoreAverage,
                  interviewTime:interviewTime,
                  candidateOrderId:x.profile.id,
                  href:'resume.html?candidateOrderId='+x.id,
                  interviewHide:interviewHide,
                  interviewName:name,
                  interviewSwitch:interviewSwitch,
                  feedbackHide:interviewStatus
                })
              }else {
                //约面中
                let interviewHide,name,interviewSwitch;
                if(x.interviewer){
                  interviewHide = true;
                  name = x.interviewer.name;
                  interviewSwitch = x.interviewer.currentState == 1?true:false;
                }else {
                  interviewHide = false;
                }
                c.push({
                  headImgURL:x.profile.headImgURL,
                  firstName:x.profile.firstName,
                  abilityScoreAverage:x.profile.abilityScoreAverage,
                  nationality:x.profile.nationality,
                  interviewHide:interviewHide,
                  candidateOrderId:x.profile.id,
                  href:'resume.html?candidateOrderId='+x.id,
                  interviewName:name,
                  interviewSwitch:interviewSwitch
                });
              }
            })
          }else {
            this.newResumeIF = false;
            this.waitinterviewIF = false;
            this.interviewIF = false;
          }
          //新简历
          a.length == 0?this.newResumeIF = false:this.newResumeIF = true;
          //面试中
          b.length == 0?this.interviewIF = false:this.interviewIF = true;
          //约面中
          c.length == 0?this.waitinterviewIF = false:this.waitinterviewIF = true;

          this.newResumeArr = a;
          this.interviewArr = b;
          this.waitinterviewArr = c;
        })
      },
      //点击获取当天面试信息
      getClickDayData (el,index) {
        if(index){
          if(this.CalendarArr[index].isActive){
            this.CalendarArr[index].isActive = false;
          }else {
            this.CalendarArr.map(x=>{
              x.isActive = false;
              this.CalendarArr[index].isActive = true;
            })
          };
        }
        el.date.split('-');
        let y,m,d,week;
        y = el.date.split('-')[0];
        m = el.date.split('-')[1];
        d = el.date.split('-')[2];

        if (new Date(el.date).getDay() == 0) {
          week = "星期日";
        } else if (new Date(el.date).getDay() == 1) {
          week = "星期一";
        } else if (new Date(el.date).getDay() == 2) {
          week = "星期二";
        } else if (new Date(el.date).getDay() == 3) {
          week = "星期三";
        } else if (new Date(el.date).getDay() == 4) {
          week = "星期四";
        } else if (new Date(el.date).getDay() == 5) {
          week = "星期五";
        } else if (new Date(el.date).getDay() == 6) {
          week = "星期六";
        };
        this.interviewDate = `${y} / ${m} / ${d}  ${week}`;
        this.$http.post(localhost+'cc/candidate/interview/twoInterviewlist',{
          customerId:BcustomerId,
          timeZone:timezone,
          foreignBeginTime:el.date,
          foreignEndTime:el.date,
          access_token:access_token
        },{emulateJSON:true}).then((res)=>{
          let arr = [];
          if(res.body.resultObj ==''){
            this.listHide = false;
            this.iconHide = true;
          }else {
            this.listHide = true;
            this.iconHide = false;
            this.interviewListArr = res.body.resultObj[0].data;
          }
        })
      },
      //时间格式
      TimeFormatting (date) {
        date = date.toLocaleString().split(' ')[0].split('/');
        let y,m,d,week;
        y = date[0];
        m = date[1];
        d = date[2];
        // m = m<10?`0${m}`:`${m}`;
        d = d<10?`0${d}`:`${d}`;
        //
        if (new Date().getDay() == 0) {
          week = "星期日";
        } else if (new Date().getDay() == 1) {
          week = "星期一";
        } else if (new Date().getDay() == 2) {
          week = "星期二";
        } else if (new Date().getDay() == 3) {
          week = "星期三";
        } else if (new Date().getDay() == 4) {
          week = "星期四";
        } else if (new Date().getDay() == 5) {
          week = "星期五";
        } else if (new Date().getDay() == 6) {
          week = "星期六";
        };
        this.interviewDate = `${y} / ${m} / ${d}  ${week}`;
        //
        return `${y}-${m}-${d}`
      },
      //企业面试信息
      BinterviewList (){
        this.ThisMonth = this.ThisMonth<10?`0${this.ThisMonth}`:this.ThisMonth;
        this.lastDat = this.lastDat<10?`0${this.lastDat}`:this.lastDat;
        this.$http.post(localhost+'cc/candidate/interview/twoInterviewlist',{
          customerId:BcustomerId,
          timeZone:timezone,
          foreignBeginTime:`${this.ThisYear}-${this.ThisMonth}-01`,
          foreignEndTime:`${this.ThisYear}-${this.ThisMonth}-${this.lastDate}`,
          access_token:access_token
        },{emulateJSON:true}).then((res)=>{
           let arr = [];
           arr = res.body.resultObj;

           this.CalendarArr.map(x=>{
             // console.log(x.date)
             arr.map(y=>{
               if(x.date == y.date){
                 x.interviewNumber = y.data.length;
               }
             })
           })
        })
      },
      zoneChange(){
        console.log(this.zoneVal)
        $.cookie('timezone',this.zoneVal);
        this.$http.post(localhost+'cc/bg/user/interviewer/zone',{    access_token:access_token,
          type:2,
          zone:this.zoneVal,
          interviewerId:$.cookie('interviewId')
        },{emulateJSON:true}).then((res)=>{
          if(res.body.error_code == 200){
            this.getInterviewList(this.zoneVal);
          }
        })
      },
      //初始化日历
      initDate () {
        //获取今年
        this.ThisYear = new Date().getFullYear();
        //获取今月
        this.ThisMonth = new Date().getMonth()+1;
        //获取当月的第一天
        this.firstDate = new Date(this.ThisYear, this.ThisMonth, 1).getDay();
        //获取今天
        let y,m,d,date;
        date = new Date().toLocaleString().split(' ')[0].split('/');
        y = date[0];
        m = date[1];
        d = date[2];
        d = d<10?`0${d}`:`${d}`;
        this.today = {
          date:`${y}-${m}-${d}`
        };

        this.setCalendarView(this.ThisYear,this.ThisMonth);
      },
      //渲染日历出现
      setCalendarView (y,m) {
        this.CalendarArr = [];
        //第一天星期几
        this.firstDateWeek = new Date(`${y}-${m}-01`).getDay();
        let preMontehDay = new Date(y, m - 1, 0).getDate();
        //获取当月的最后一天
        this.lastDate = new Date(y, m, 0).getDate();
         for(let i = 1;i <= 12;i++){
           if(m == i){
             m = m < 10 ?`0${m}`:`${m}`;
           }
         }
         //获取上个月的剩余天数
         for(let i = this.firstDateWeek - 1;i>=0;i--){
           if(m == 1){
             this.CalendarArr.push({
               date:`${y-1}-${12}-${preMontehDay - i}`,
               day:preMontehDay - i,
               isClass:true,
               interviewNumber:'',
             })
           }else {
             this.CalendarArr.push({
               date:`${y}-${m-1}-${preMontehDay - i}`,
               day:preMontehDay - i,
               isClass:true,
               interviewNumber:'',
             })
           }
         };
         //获取本月的时间从开始星期渲染
         for(let i =1 ;i <=this.lastDate; i++){
           i = i < 10 ?`0${i}`:`${i}`;
           this.CalendarArr.push({
             date:`${y}-${m}-${i}`,
             day:i,
             isClass:false,
             isTodayBg:false,
             isActive:false,
             interviewNumber:'',
           })
         };
         //获取下个月的剩余天数
         let nextDay = 42 - this.CalendarArr.length;
         let day;
         for(let i =1 ;i<= nextDay ; i++ ){
           i = i < 10 ?`0${i}`:`${i}`;
           //m = m < 10 ?`0${m}`:`${m}`;
           if(m == 12){
             this.CalendarArr.push({
               date:`${y+1}-${1}-${i}`,
               day:i,
               isClass:true,
               interviewNumber:'',
             })
           }else{
             this.CalendarArr.push({
               date:`${y}-${m+1}-${i}`,
               day:i,
               isClass:true,
               interviewNumber:'',
             })
           }
         }
         let date = this.TimeFormatting(new Date());
         this.CalendarArr.map(x=>{
           if(x.date == date){
             x.isTodayBg = true;
           }
         })
         this.BinterviewList();
      },
      //上一个月
      preMonth () {
        if(this.ThisMonth == 1){
          this.ThisMonth = 12;
          this.ThisYear = this.ThisYear - 1;
          this.setCalendarView(this.ThisYear,this.ThisMonth);
        }else {
          this.ThisMonth = this.ThisMonth - 1;
          this.setCalendarView(this.ThisYear,this.ThisMonth);
        }
      },
      //下一个月
      nextMonth() {
        if(this.ThisMonth == 12){
          this.ThisMonth = 1;
          this.ThisYear = this.ThisYear + 1;
          this.setCalendarView(this.ThisYear,this.ThisMonth);
        }else {
          this.ThisMonth = Number(this.ThisMonth) + 1;
          this.setCalendarView(this.ThisYear,this.ThisMonth);
        }
      },
      clickCancel(){
        this.maskHide = false;
        $.cookie('needSetFreeTime','false');
        this.freeTimeHide = false;
      }
    }
  }
</script>

<style lang="less">
  .homePage{
    float:right;
    margin-top:60px;
    margin-bottom: 30px;
    border-radius:4px;
    width:1000px;
    .header-Timezone{
      width: 100%;
      .header-right{
        float: right;
        .header-Text{
          height: 40px;
          line-height: 40px;
          font-size: 16px;
          color: #333;
        }
        .header-prompt{
          position: relative;
          margin: 0 16px 0 8px;
          display: inline-block;
          vertical-align: -2px;
          .prompt-icon{
            width: 17px;
            height: 17px;
            display: inline-block;
            background: url('../../../common/img/icon-b-1.png') no-repeat;
            background-position: -104px -17px;
            cursor: pointer;
          }
        }
        .header-zone{
          width: 220px;
          height: 40px;
          .el-input__inner{
            color: #fff;
            background: #3082e7;
          }
        }
      }

    }
    .interviewData{
      width: 1000px;
      margin: 30px auto 0;
      .newResume-1,.newResume-2,.newResume-3{
        position: relative;
        width: 300px;
        float: left;
        margin: 0 20px 0 0;
        box-shadow: 0px 0px 4px rgba(28,25,24,0.2);
        .newResume-span{
          position: absolute;
          top:0;
          left:0;
          width: 285px;
          background: #fff;
          padding-left: 16px;
          height: 51px;
          line-height: 51px;
          font-size: 14px;
          color: #333;
          font-weight: 500;
          border-bottom: 1px solid #f7f7f7;
          z-index: 2;
          border-radius: 4px;
        }
        .interview-ul{
          width: 300px;
          height: 436px;
          overflow-y:auto;
          position: relative;
          margin-top: 51px;
          background: #fff;
          .interview-li{
            border-bottom: 1px solid #f7f7f7;
            &:hover{
              background: #f7f7f7;
            }
            .li-content{
              margin: 0px 0px 0 14px;
              padding-top: 14px;
              padding-bottom: 18px;
              display: block;
              .headerImg{
                float: left;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin: 0 14px 0 0;
              }
              .data-box{
                float: left;
                .data-top{
                  margin: 0 0 6px 0;
                  .data-name{
                    font-size: 14px;
                    color: #333;
                  }
                  .data-icon{
                    margin: 0 2px 0 12px;
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    background: url('../../../common/img/icon-b-1.png') no-repeat;
                    background-position: -104px -77px;
                  }
                  .data-number{
                    font-size: 12px;
                    color: #f5be41;
                  }
                }
                .data-nationality{
                  font-size: 12px;
                  color: #989898;
                }
                .interview-status{
                  margin: 10px 0 0 0 ;
                  background: #f0f0f0;
                  padding: 3px 8px;
                  border-radius: 10px;
                  .point{
                    float: left;
                    margin: 5px 6px 0 0 ;
                    width:4px;
                    height: 4px;
                    background: #666;
                  }
                  .status{
                    font-size: 12px;
                    color: #1ba275;
                  }
                }
                .isActive{
                  background: #e9f7ed;
                }
              }
              .interview-button{
                float: right;
                margin: 22px 16px 0 0;
                width: 65px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                cursor: pointer;
                background: #3082e7;
                color: #fff;
                font-size: 12px;
                border-radius: 4px;
              }
            }
          }
          &::-webkit-scrollbar{
            width: 6px;  /*滚动条宽度*/
          }
          &:hover::-webkit-scrollbar-thumb{
            border-radius: 10px;  /*滚动条的圆角*/
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: green;  /*滚动条的背景颜色*/
          }
        }
        .interview{
          width: 360px !important;
          margin: 51px 0px 0 0;
        }
        .HideInterview{
          width: 300px;
          height: 436px;
          overflow-y:auto;
          position: relative;
          margin-top: 51px;
          background: #fff;
          .interview-icon{
            background: url('../../../common/img/icon-home-calendar-none@2x@2x.png') no-repeat;
            background-size:contain;
            width: 69px;
            height: 70px;
            display: block;
            margin: 140px auto 20px;
          }
          .interview-text{
            display: block;
            width: 100%;
            text-align: center;
            font-size: 14px;
            color: #8d8d8d;
          }
        }
      }
      .newResume-3{
        margin: 0 0px 0 0;
        width: 360px;
        .newResume-span{
          width: 344px;
        }
      }
    }
    .homePage-bottom{
      width: 1000px;
      margin: 20px 0 0 0 ;
      background:#fff;
      box-shadow: 0px 0px 4px rgba(28, 25, 24,.2);
      .calendar-left{
        float: left;
        width: 540px;
        margin: 26px 0 0 30px;
        .calendar{
          width: 100%;
          background:#fff;
          .calendar-date-title{
            padding-left:30px;
            height: 84px;
            border-bottom:1px solid  #E6ECF2;
            .calendar-title-month,.calendar-title-year{
              font-size: 20px;
              color: #283644;
              font-weight:500;
              height: 84px;
              line-height: 84px;
            }
            .Switch-month{
              float: right;
              .preMonth,.nextMonth{
                margin:25px 0 0 0 ;
                width: 40px;
                height: 34px;
                display: inline-block;
                border: 1px solid #E6ECF2;
                border-radius: 4px 0 0 4px;
                cursor:pointer;
                float: left;
                .preMonth-icon{
                  display: block;
                  width:6px;
                  height: 10px;
                  background: url('../../../common/img/icon-b-1.png') no-repeat;
                  background-position: -197px -80px;
                  margin: 14px auto;
                }
                .nextMonth-icon{
                  display:block;
                  margin: 14px auto;
                  width:6px;
                  height: 10px;
                  background: url('../../../common/img/icon-b-1.png') no-repeat;
                  background-position: -218px -80px;
                }
              }
              .button-today{
                width: 80px;
                height: 34px;
                line-height: 34px;
                text-align: center;
                color: #3082e7;
                font-size: 14px;
                float: left;
                margin: 25px 0 0 20px;
                border-radius: 4px;
                border:1px solid #3082e7;
                cursor: pointer;
              }
            }
          }
          .calendar-week-title{
            border-bottom: 1px solid #E6ECF2;
            border-left: 1px solid #E6ECF2;
            .week-border{
              border-right: 1px solid #E6ECF2;
            }
            .calendar-week-oneDate{
              float: left;
              width: 76px;
              height: 44px;
              line-height: 44px;
              text-align: center;
              color: #98A0A6;
              font-size: 12px;
            }
          }
          .calendar-date-content{
            list-style: none;
            .calendar-oneDate{
              float: left;
              width: 76px;
              height: 70px;
              border-top:1px solid #E6ECF2;
              border-right:1px solid #E6ECF2;
              position: relative;
              .IsClass{
                font-size: 14px;
                color: #CDD1D5 !important;
              }
              .oneDayClass{
                font-size: 14px;
                color: #98A0A6;
                float: right;
                margin: 10px 10px 0 0;
              }
              .interviewNumber{
                position: absolute;
                top:50%;
                left:50%;
                height: 24px;
                margin: -12px 0 0 -20px;
                font-size: 24px;
                color: #2A4673;
                .font{
                  font-size: 14px;
                  color: #2A4673;
                }
              }

            }
            .TodayBg{
              background: #fffcdf;
            }
            .isActive{
              background: #3082e7;
              color: #fff;
            }
          }
        }
      }
      .interviewList-right{
        width: 370px;
        float: left;
        height: 540px;
        background: #fafdff;
        margin: 50px 0 0 30px;
        .borderTop{
          width: 370px;
          height: 3px;
          background: #3082e7;
          display: block;
        }
        .interview-list{
          position: relative;
          .list-top{
            border-bottom: 1px solid #f7f7f7;
            width: 100%;
            //background: #fff;
            z-index: 1;
            .interviewDate{
              float: left;
              font-size: 16px;
              color: #333;
              padding-left: 13px;
              font-weight: 500;
              height: 50px;
              line-height: 50px;
            }
            .prompt{
              float: right;
              position: relative;
              margin: 16px;
              .prompt-icon{
                cursor: pointer;
                display: inline-block;
                width: 17px;
                height: 17px;
                background: url('../../../common/img/icon-b-1.png') no-repeat;
                background-position: -104px -17px;
              }
            }
          }
          .interviewHide{
            width: 100%;
            .interviewHide-icon{
              background: url('../../../common/img/icon-home-calendar-none@2x@2x.png') no-repeat;
              background-size:contain;
              width: 88px;
              height: 70px;
              display: block;
              margin: 150px auto 20px;
            }
            .interviewHide-text{
              width: 100%;
              text-align: center;
              display: block;
              font-size: 16px;
              color: #979BA1;
            }
          }
          .interviewBox{
            margin: 0px 0 0 0 ;
            height: 473px;
            overflow-y: auto;
            .interview-li{
              height: 100px;
              border-bottom:1px solid #f7f7f7;
              .interview-img{
                width: 40px;
                height: 40px;
                display: inline-block;
                border-radius: 50%;
                margin: 26px 14px 0 16px;
                vertical-align: 17px;
                float: left;
              }
              .interview-data{
                display: inline-block;
                width: 80%;
                .interview-div{
                  float: left;
                  margin: 16px 0 0 0 ;
                  .name{
                    display: block;
                    font-size: 12px;
                    color: #333;
                  }
                  .time{
                    display: block;
                    text-align: center;
                    line-height: 26px;
                    color: #333;
                    font-size: 6px;
                  }
                  .interviewname{
                    background: #f0f0f0;
                    padding: 3px 8px;
                    border-radius: 10px;
                    .point{
                      float: left;
                      margin: 5px 6px 0 0 ;
                      width:4px;
                      height: 4px;
                      background: #666;
                    }
                    .status{
                      font-size: 12px;
                      color: #1ba275;
                    }
                  }
                }
                .date{
                  font-size: 14px;
                  color: #333;
                  width: 52px;
                  height: 24px;
                  float: right;
                  line-height: 24px;
                  text-align: center;
                  font-size: 12px;
                  color: #c62616;
                  background: #fff4f0;
                  margin: 35px 15px 0 0
                }
              }
              &:hover{
                background: #f5f6f7;
              }
            }
            &::-webkit-scrollbar{
              width: 6px;  /*滚动条宽度*/
            }
            &:hover::-webkit-scrollbar-thumb{
              border-radius: 10px;  /*滚动条的圆角*/
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
              background-color: green;  /*滚动条的背景颜色*/
            }
          }
        }
      }
    }
    .Mask-page{
      position: fixed;
      z-index: 10;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      .mask{
        position: fixed;
        z-index: 10;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(000,000,000,.4)
      }
      .page-form{
        position: fixed;
        top:50%;
        left: 50%;
        margin: -224px 0 0 -370px;
        z-index: 500;
        width: 740px;
        height: 448px;
        background: #FFFFFF;
        border-radius: 4px;
        .page-form-title{
          position: relative;
          height: 60px;
          background: #F9FAFC;
          text-align: center;
          .title-font{
            height: 60px;
            line-height: 60px;
            font-size: 16px;
            color: #283644;
          }
          .close{
            position: absolute;
            top:23px;
            right:23px;
            background: url('../../../common/img/icon-aboutus-close@2x.png') no-repeat;
            width:12px;
            height: 12px;
            background-size:contain;
            cursor: pointer;
          }
        }
        .page-form-conent{
          .conent-data{
            margin:50px auto 30px;
            width: 640px;
            height: 127px;
            background: rgba(76,157,255,0.03);
            border: 1px solid #4C9DFF;
            .conent-data-top{
              margin:0 auto;
              height: 64px;
              width: 600px;
              line-height: 64px;
              border-bottom:1px dashed #D9E2DB;
              .candidate-name{
                margin:0 8px 0 124px;
                font-weight: 500;
                font-size: 20px;
                color: #283644;
              }
              .icon{
                display: inline-block;
                margin:24px 60px 0 0;
                width: 16px;
                height: 18px;
                // background: url('／../../../common/img/icon-interview-resume.png') no-repeat;
                // background-size:cover;
              }
              .with{
                margin:0 60px 0 0 ;
                font-size: 12px;
                color: #9B9FA4;
              }
              .Recruiter-name{
                font-weight: 500;
                font-size: 20px;
                color: #283644;
              }
            }
            .conent-data-bottom{
              height: 61px;
              line-height: 61px;
              text-align: center;
              .bottom-date-1{
                margin:0 14px 0 0;
                font-size: 12px;
                color: #283644;
              }
              .bottom-date-2{
                font-weight: 500;
                font-size: 18px;
                color: #283644;
              }
            }
          }
          .content-information{
            margin:30px auto 0;
            width: 640px;
            .information-div{
              margin-bottom: 20px;
              .information-title{
                margin:0 30px 0 0px;
                float:left;
                width:100px;
                text-align: right;
                font-size: 14px;
                color: #979BA1;
              }
              .information-data{
                width:510px;
                float:left;
                font-size: 14px;
                color: #283644;
              }
              .Timezone{
                .Time-zone{
                  display: inline-block;
                  font-size: 14px;
                  color: #283644;
                }
                .Time-date{
                  display: inline-block;
                  font-size: 14px;
                  color: #283644;
                }
              }
            }
          }
        }
      }
      .sceond-popUps{
        position: fixed;
        top:50%;
        left: 50%;
        margin: -200px 0 0 -320px;
        z-index: 500;
        width: 640px;
        height: 400px;
        text-align: center;
        .page-form-title{
          background: #fff;
        }
        .content-title{
          margin: 40px auto;
          display: block;
          font-size: 24px;
          color: #3082e7;
        }
        .content-text{
          width: 485px;
          display: block;
          margin: 0 auto 50px;
          font-size: 16px;
          color: #333;
        }
        .content-button{
          width: 200px;
          margin: 0 auto;
          .button-confirm,.cancel{
            text-align: center;
            height: 30px;
            line-height: 30px;
            background: #3082e7;
            display: block;
            color: #fff;
            font-size: 14px;
            margin: 0 0 10px 0;
            border-radius: 4px;
            cursor: pointer;
          }
          .cancel{
            background: #fff;
            color: #999;
          }
        }
      }
    }
  }
</style>
