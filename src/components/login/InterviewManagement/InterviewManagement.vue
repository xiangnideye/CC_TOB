<template>
  <div class="InterviewManagement">
    <div class="header">
      <span class="header-name">面试管理</span>
    </div>
    <div class="content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
         <el-tab-pane label="面试日程" name="first" class="first-class">
           <div class="first-header clear">
             <el-select v-model="InterviewSelect1" clearable placeholder="请选择" @change='changeInterview(1)'>
                <el-option
                  v-for="item in optionsAll"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
             <div class="header-search">
               <input type="text" v-model='searchVal' placeholder="Search" class="search-input" @keyup.13='keyCodeSearch'>
               <i class="search-icon"></i>
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
           <div class="calendar">
             <div class="calendar-date-title">
               <span class="calendar-title-year">{{ThisYear}}年</span>
               <span class="calendar-title-month">{{ThisMonth}}月</span>
               <div class="Switch-month">
                 <span class="preMonth" @click='preMonth'><</span>
                 <span class="nextMonth" @click='nextMonth'>></span>
               </div>
             </div>
             <div class="calendar-week-title">
               <span v-for='(el,index) in weekArr' class="calendar-week-oneDate">{{el.weekDate}}</span>
               <ul class="calendar-date-content clear">
                 <li v-for='(el,index) in CalendarArr' class="calendar-oneDate" :class='{TodayBg:el.isTodayBg}'>
                   <span :class='{IsClass:el.isClass}' class="oneDayClass">{{el.day}}</span>
                   <span class="interviewNumber" v-show='el.interviewNumber?true:false'>{{el.interviewNumber}}
                     <span class="font">场</span>
                   </span>
                 </li>
               </ul>
             </div>
           </div>
           <div class="first-hide" v-if='ListData'>
             <i class="hide-icon"></i>
             <span class="hide-text">未查询到相关面试</span>
           </div>
           <ul class="Mschedule" v-else>
             <li v-for="(item,index) in MscheduleArr" class="Mschedule-li clear">
               <div class="Mschedule-li-title">
                 <span class="li-title-data">{{item.date}}</span>
                 <span></span>
               </div>
               <div v-for="(el,index) in item.data" class="clear Mschedule-li-content" @click='clickThisData(el)'>
                 <div class="Mschedule-li-left" :class='{IsBorder:el.interviewType == 1?false:true}'>
                   <div class="Mschedule-li-conent">
                     <div class="li-conent-date">{{el.week}},{{el.date}}</div>
                     <div class="li-conent-Time clear">
                       <span class="conent-Time-cst">{{el.timeRange}}</span>
                       <img :src="el.img" alt="" class="li-right-img">
                       <span class="conent-Time-name">{{el.name}}</span>
                     </div>
                   </div>
                 </div>
                 <div class="Mschedule-li-right">
                   <div class="li-right-ImgBox">
                     <span class="point"></span>
                     <span class="li-right-name">{{el.userName}}</span>
                   </div>
                 </div>
               </div>
             </li>
           </ul>
          </el-tab-pane>
         <el-tab-pane label="面试官信息" name="second" class="second-class">
           <div class="recruit">
             <div class="recruit-div clear">
               <span class="title"><span class="required">*</span>英文称呼</span>
               <div class="recruit-right">
                 <input type="text" v-model='englishName' placeholder="用于向求职者展示，例HaHa" class="recruit-input">
               </div>
               </span>
             </div>
             <div class="recruit-div clear">
               <span class="title"><span class="required">*</span>邮箱</span>
               <div class="recruit-right">
                 <input type="text" v-model='englishEmail' placeholder="用于接收面试等消息通知，例zhangsan@163.com" class="recruit-input">
               </div>
               </span>
             </div>
             <div class="recruit-button" @click='recruitComfig'>保存</div>
           </div>
          </el-tab-pane>
         <el-tab-pane label="面试空闲时间" name="third" class="third-class">
           <div class="third-header clear">
             <el-select v-model="InterviewSelect2" clearable placeholder="请选择" @change='changeInterview(2)'>
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
             <div class="header-freeTime clear">
               <input type="checkbox" value="0" v-model='monthFreeTime' class="freeTime-input" @click='checkWork'>
               <span class="freeTime-font">每周空闲时间规则相同</span>
               <div class="hover-prompt">
                 <i class="prompt-icon"></i>
                 <div class="">
                   <span></span>
                 </div>
               </div>
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
           <div class="calendar" v-show="monthHide">
             <div class="calendar-date-title">
               <div class="Switch-month">
                 <span class="preMonth" @click='preMonth'></span>
                 <span class="calendar-title-year">{{ThisYear}}年</span>
                 <span class="calendar-title-month">{{ThisMonth}}月</span>
                 <span class="nextMonth" @click='nextMonth'></span>
               </div>
             </div>
             <div class="calendar-week-title">
               <span v-for='(el,index) in weekArr' class="calendar-week-oneDate">{{el.weekDate}}</span>
               <ul class="calendar-date-content clear">
                 <li v-for='(el,index) in CalendarArr' class="calendar-oneDate" :class='{TodayBg:el.isTodayBg}' @click='setFreeTime(el,index)'>
                   <span :class='{IsClass:el.isClass}' class="oneDayClass">{{el.day}}</span>
                   <span class="interviewNumber" v-show='el.interviewNumber?true:false'>{{el.interviewNumber}}
                     <span class="font">场</span>
                   </span>
                 </li>
               </ul>
             </div>
           </div>
           <div class="weekForm" v-show="weekHide">
             <div class="weekForm-title">
               <span class="weekForm-title-span">SUN</span>
               <span class="weekForm-title-span">MON</span>
               <span class="weekForm-title-span">TUE</span>
               <span class="weekForm-title-span">WED</span>
               <span class="weekForm-title-span">THU</span>
               <span class="weekForm-title-span">FRI</span>
               <span class="weekForm-title-span">SAT</span>
             </div>
             <div class="weekForm-content">
               <span class="weekForm-content-span" @click="getWeekDay(el.month)" v-for='(el,index) in weekDayArr'>{{el.dataLength}}</span>
             </div>
           </div>
          </el-tab-pane>
         <el-tab-pane label="子面试官设置" name="fourth" class="fourth-class">
           <div class="fourth-header clear">
             <span class="header-span" @click='addSonInterview'>添加子面试官</span>
           </div>
           <ul class="fourth-ul">
             <li class="title-li">
               <span class="account">账号</span>
               <span class="interview-name">面试官称呼</span>
               <span class="status">状态</span>
             </li>
             <li class="sonInterviewtext" v-show='sonInterviewtext'>暂未关联子面试官</li>
             <li v-for='(el,index) in interviewList' class="fourth-li" v-show='sonInterviewHide'>
               <span class="li-account">{{el.phoneNumber}}</span>
               <span class="li-interviewName">{{el.name}}</span>
               <span class="li-status">
                 <el-switch
                  @change = 'switchChange(el)'
                  v-model="el.currentState"
                  on-color="#13CE66"
                  off-color="#666">
                </el-switch>
              </span>
             </li>
           </ul>
          </el-tab-pane>
       </el-tabs>
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
              <a class="icon"></a>
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
              <span class="information-data">
                {{interviewerDate}}
                <br>
                <br>
                {{interviewerZoneValue}}
              </span>
            </div>
            <div class="information-div clear">
              <span class="information-title">应聘者时区时间</span>
              <span class="information-data">
                {{candidateTime}}
                <br>
                <br>
                {{candidateZone}}
              </span>
            </div>
          </div>
        </div>
      </div>
      <!--second-->
      <div class="page-Cancel" v-show="CancelHide">
        <div class="Cancel-title">
          <span class="Cancel-title-span">保存成功</span>
          <span class="close" @click='clickCancel'></span>
        </div>
        <div class="Cancel-content">
          <i class="success-img"></i>
          <p class="success-p-1">面试官信息保存成功</p>
          <span class="button-Set" @click='clickCancel'>确定</span>
        </div>
      </div>
      <!--第二个表格的时间-->
      <div class="page-time" v-show="PageTimeHide">
        <div class="page-time-title">
          <span class="time-font">Set up the free time</span>
          <span class="close" @click='clickCancel'></span>
        </div>
        <div class="page-time-content clear">
          <div class="page-time-prompt">
            <span class="span-1">时间</span>
            <span class="span-left" style="padding-left:16px;font-size: 14px;
            color: #4C9DFF;cursor:pointer;" @click="prevDate"><</span>
            <span class="span-2" style="font-size: 14px; color: #4C9DFF; padding:0 6px;">{{this.TodayYear}}年{{this.TodayMonth}}月{{this.TodayDay}}日</span>
            <span class="span-right" style="padding-right:16px;font-size: 14px;
            color: #4C9DFF;cursor:pointer;" @click="naxtDate">></span>
            <span class="span-3">至</span>
            <el-date-picker style="margin-left:16px;"
              v-model="value1"
              type="date"
              :picker-options="pickerOptions"
              placeholder="您可以选择一个结束日期">
            </el-date-picker>
          </div>
          <div class="page-time-Clear">
            <i></i>
            <span class="Clear-all" @click="clickClearAll('month')">Clear all</span>
          </div>
          <ul class="page-select-time clear">
            <li v-for="(el,index) in timeArr" class="time-li" @click="clickGetTime(el,index)" :class="{BgColor:el.isBgColor,'time-li-bg':el.isHover}" @mouseover='moverGetTime(el,index)'>{{el.time}}</li>
          </ul>
          <div class="" style="width:100%;float:left;">
            <div class="page-time-button">
              <span class="page-button-Cancel" @click='clickCancel'>取消</span>
              <span class="page-button-Confirm" @click="PostFreeTime">保存</span>
            </div>
          </div>
        </div>
      </div>
      <!--周时间-->
      <div class="page-time" v-show="PageWeekHide">
        <div class="page-time-title">
          <span class="time-font">Set up the free time</span>
          <span class="close" @click='clickCancel'></span>
        </div>
        <div class="page-time-content clear">
          <div class="page-time-prompt">
            <span class="span-1">Hours for</span>
            <span class="span-left" style="padding-left:16px;font-size: 14px;
            color: #4C9DFF;cursor:pointer;" @click="prevWeekDay"><</span>
            <span class="span-2" style="font-size: 14px; color: #4C9DFF; padding:0 6px;">{{weekToday}}</span>
            <span class="span-right" style="padding-right:16px;font-size: 14px;
            color: #4C9DFF;cursor:pointer;" @click="naxtWeekDay">></span>
          </div>
          <div class="page-time-Clear">
            <i></i>
            <span class="Clear-all" @click="clickClearAll('week')">Clear all</span>
          </div>
          <ul class="page-select-time clear">
            <li v-for="(el,index) in timeArr" class="time-li" @click="clickGetTime(el,index)" :class="{BgColor:el.isBgColor,'time-li-bg':el.isHover}" @mouseover='moverGetTime(el,index)'>{{el.time}}</li>
          </ul>
          <div class="" style="width:100%;float:left;">
            <div class="page-time-button">
              <span class="page-button-Cancel" @click='clickCancel'>取消</span>
              <span class="page-button-Confirm" @click="PostWeekDay">保存</span>
            </div>
          </div>
        </div>
      </div>
      <!--搜索子面试官-->
      <div class="son-interview" v-show='searchSonInterviewHide'>
        <div class="page-form-title">
          <span class="title-font">添加子面试官</span>
          <span class="close" @click='clickCancel'></span>
        </div>
        <div class="son-interview-content">
          <div class="search">
            <span class="search-account">查找账号</span>
            <input type="text" class="search-input" placeholder="请输入用户的登录账号" v-model="SonInterview">
          </div>
        </div>
        <div class="search-button" @click='searchSonInterview'>搜索</div>
      </div>
      <!--添加子面试官 成功-->
      <div class="add-son-interview" v-show='incompleteHide'>
        <div class="page-form-title">
          <span class="title-font">添加子面试官</span>
          <span class="close" @click='clickCancel'></span>
        </div>
        <div class="son-interview-content">
          <div class="search">
            <span class="search-account">查找账号</span>
            <input type="text" class="search-input" placeholder="请输入用户的登录账号" v-model='SonInterview'>
          </div>
          <div class="search-show clear">
            <div class="show-right" >
              <img :src="logoImg" class="logo">
              <span class="name">{{SonInterviewName}}</span>
              <span class="account">15267890987</span>
            </div>
          </div>
          <div class="search-stutas">
            <span class="search-account">状态</span>
            <div class="search-switch">
              <el-switch
                v-model="interviewStutas"
                on-color="#13CE66"
                off-color="#666666">
               </el-switch>
              <span class="switch-text">（您可以将简历指派给该面试官）</span>
            </div>
          </div>
        </div>
        <div class="search-button">
          <span class="cancle" @click='clickCancel'>取消</span>
          <span class="Confirm" @click='addSonInterviewData'>添加</span>
        </div>
      </div>
      <!--添加子面试官2 信息不完善-->
      <div class="add-son-interview interview-no" v-show='incompleteHide2'>
        <div class="page-form-title">
          <span class="title-font">添加子面试官</span>
          <span class="close" @click='clickCancel'></span>
        </div>
        <div class="son-interview-content">
          <div class="search">
            <span class="search-account">查找账号</span>
            <input type="text" class="search-input" placeholder="请输入用户的登录账号" v-model='SonInterview'>
          </div>
          <div class="search-show clear">
            <div class="show-right">
              <img :src="logoImg" class="logo">
              <span class="account-1">15267890987</span>
              <span class="line"></span>
              <span class="caveat">
                <i class="caveat-icon"></i>
                <span class="caveat-text">该账号信息不完善，暂不能添加。</span>
              </span>
            </div>
          </div>
          <div class="search-stutas">
            <span class="search-account">状态</span>
            <div class="search-switch">
              <el-switch
                v-model="interviewStutas"
                on-color="#13CE66"
                off-color="#666666">
               </el-switch>
              <span class="switch-text">（您可以将简历指派给该面试官）</span>
            </div>
          </div>
        </div>
        <div class="search-button">
          <span class="cancle" @click='clickCancel'>取消</span>
          <span class="Confirm">添加</span>
        </div>
      </div>
      <!--添加子面试官3 账号未注册-->
      <div class="add-son-interview interview-no" v-show='incompleteHide3'>
        <div class="page-form-title">
          <span class="title-font">添加子面试官</span>
          <span class="close" @click='clickCancel'></span>
        </div>
        <div class="son-interview-content">
          <div class="search">
            <span class="search-account">查找账号</span>
            <input type="text" class="search-input" placeholder="请输入用户的登录账号" v-model='SonInterview'>
          </div>
          <div class="search-show clear">
            <div class="show-right">
              <img :src="logoImg" class="logo center-img">
              <span class="line"></span>
              <span class="caveat center-caveat">
                <i class="caveat-icon"></i>
                <span class="caveat-text">账号未注册</span>
              </span>
            </div>
          </div>
          <div class="search-stutas">
            <span class="search-account">状态</span>
            <div class="search-switch">
              <el-switch
                v-model="interviewStutas"
                on-color="#13CE66"
                off-color="#666666">
               </el-switch>
              <span class="switch-text">（您可以将简历指派给该面试官）</span>
            </div>
          </div>
        </div>
        <div class="search-button">
          <span class="cancle" @click='clickCancel'>取消</span>
          <span class="Confirm noClick">添加</span>
        </div>
      </div>
      <!--添加子面试官4 不能添加自己／和重复-->
      <div class="add-son-interview interview-no" v-show='incompleteHide4'>
        <div class="page-form-title">
          <span class="title-font">添加子面试官</span>
          <span class="close" @click='clickCancel'></span>
        </div>
        <div class="son-interview-content">
          <div class="search">
            <span class="search-account">查找账号</span>
            <input type="text" class="search-input" placeholder="请输入用户的登录账号" v-model='SonInterview'>
          </div>
          <div class="search-show clear">
            <div class="show-right" >
              <img :src="logoImg" class="logo">
              <span class="name">{{SonInterviewName}}</span>
              <span class="account">{{SonInterview}}</span>
              <span class="line"></span>
              <span class="caveat" :class="{left21:this.isLeft21}">
                <i class="caveat-icon"></i>
                <span class="caveat-text">{{this.errorText}}</span>
              </span>
            </div>
          </div>
          <div class="search-stutas">
            <span class="search-account">状态</span>
            <div class="search-switch">
              <el-switch
                v-model="interviewStutas"
                on-color="#13CE66"
                off-color="#666666">
               </el-switch>
              <span class="switch-text">（您可以将简历指派给该面试官）</span>
            </div>
          </div>
        </div>
        <div class="search-button">
          <span class="cancle" @click='clickCancel'>取消</span>
          <span class="Confirm" @click='addSonInterviewData'>添加</span>
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
  const timezone = $.cookie('timezone');
  const interviewId = $.cookie('interviewId');
  const isEnable = $.cookie('isEnable');


  export default {
    data (){
      return {
        //
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        ListData:true,
        isLeft21:false,
        incompleteHide4:false,
        errorText:'',
        sonInterviewtext:true,
        sonInterviewHide:false,
        SonInterviewName:'',
        incompleteHide3:false,
        SonInterview:'',
        searchVal:'',
        interviewNameId:'',
        elObj:{},
        optionsAll:[],
        InterviewSelect1:'',
        InterviewSelect2:'',
        interviewerDate:'',
        interviewerZoneValue:'',
        candidateTime:'',
        candidateZone:'',
        incompleteHide2:false,
        incompleteHide:true,
        englishEmail:'',
        interviewStutas:true,
        logoImg:'http://material.careerchina.com/img/0f8945eb-7f51-482e-8cb6-fff47016c3ab.jpg',
        searchSonInterviewHide:false,
        options:[],
        sourceId:'',
        interviewType:'',
        RecruiterValue:'',
        InterviewTime:'',
        InterviewTimeArr:[],
        TimeValueArr:[],
        TimeValue:'',
        monthArr:[],
        value1:'',
        oldWeekRegulars:[],
        IdleWeekDate:'',
        IdleDate:[],
        stopStatus:0,
        switchValue: true,
        isEnable:1,
        startOrEnd:true,
        backArr:[],
        pushRegular:[],
        isMoveFlag:false,
        moveStart:'',
        moveEnd:0,
        startNum:'',
        endNum:'',
        startTime:'',
        endTime:'',
        weekArr:[],
        weekToday:'',
        todayTime:'',
        TodayMonth:'',
        TodayDay:'',
        TodayYear:'',
        ScheduleHide:true,

        //
        isopacityHide:true,
        isMoveFlag:false,
        monthHide:true,
        weekHide:false,
        maskHide:false,
        ReschedulingHide:false,
        CancelHide:false,
        FormHide:false,
        PageTimeHide:false,
        PageWeekHide:false,
        startOrEnd:true,
        activeName: 'first',
        zoneArr:[],
        zoneVal:$.cookie('timezone'),
        monthFreeTime:[],
        ThisYear: '',
        ThisMonth: '',
        ThisWeek: '',
        ThisDay: '',
        firstDate:'',
        lastDate:'',
        firstDateWeek:'',
        englishName:'',
        headerImg:require('../../../common/img/icon-interview-photo@2x.png'),
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
        CalendarArr: [],
        MscheduleArr:[],
        interviewList:[],
        timeArr:[
          {
            time:'08:00-09:00',
            startTime:'08:00',
            endTime:'09:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'09:00-10:00',
            startTime:'09:00',
            endTime:'10:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'10:00-11:00',
            startTime:'10:00',
            endTime:'11:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'11:00-12:00',
            startTime:'11:00',
            endTime:'12:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'12:00-13:00',
            startTime:'12:00',
            endTime:'13:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'13:00-14:00',
            startTime:'13:00',
            endTime:'14:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'14:00-15:00',
            startTime:'14:00',
            endTime:'15:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'15:00-16:00',
            startTime:'15:00',
            endTime:'16:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'16:00-17:00',
            startTime:'16:00',
            endTime:'17:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'17:00-18:00',
            startTime:'17:00',
            endTime:'18:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'18:00-19:00',
            startTime:'18:00',
            endTime:'19:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'19:00-20:00',
            startTime:'19:00',
            endTime:'20:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'20:00-21:00',
            startTime:'20:00',
            endTime:'21:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'21:00-22:00',
            startTime:'21:00',
            endTime:'22:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'22:00-23:00',
            startTime:'22:00',
            endTime:'23:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'23:00-24:00',
            startTime:'23:00',
            endTime:'24:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'00:00-01:00',
            startTime:'00:00',
            endTime:'01:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'01:00-02:00',
            startTime:'01:00',
            endTime:'02:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'02:00-03:00',
            startTime:'02:00',
            endTime:'03:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'03:00-04:00',
            startTime:'03:00',
            endTime:'04:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'04:00-05:00',
            startTime:'04:00',
            endTime:'05:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'05:00-06:00',
            startTime:'05:00',
            endTime:'06:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'06:00-07:00',
            startTime:'06:00',
            endTime:'07:00',
            isBgColor:false,
            isHover:false,
          },
          {
            time:'07:00-08:00',
            startTime:'07:00',
            endTime:'08:00',
            isBgColor:false,
            isHover:false,
          }
        ],
        week:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        weekDayArr:[
          {
            month:'Sun',
            dataLength:'',
          },
          {
            month:'Mon',
            dataLength:'',
          },
          {
            month:'Tue',
            dataLength:'',
          },
          {
            month:'Wed',
            dataLength:'',
          },
          {
            month:'Thu',
            dataLength:'',
          },
          {
            month:'Fri',
            dataLength:'',
          },
          {
            month:'Sat',
            dataLength:'',
          },
        ],
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
    mounted () {

      if(window.location.href.split('?')[1]){
        let FreeTime =  window.location.href.split('?')[1].split('=')[1];
        if(FreeTime == 'third'){
          this.activeName = 'third';
        }
      }

      if($.cookie('isEnable') == 1){
        this.monthFreeTime.push('0');
        this.monthHide = false;
        this.weekHide = true;
        this.PageTimeHide = false;
        this.PageWeekHide = true;
        this.getWeekData();
      }else {
        this.monthHide = true;
        this.weekHide = false;
        this.isEnable = 0;
        // this.PageTimeHide = true;
        this.PageTimeHide = false;
        this.PageWeekHide = false;
      }
      this.getInterviewList();
      this.initDate();
      //获取时区
      this.getTimeZone();
      //获取面试官信息;
      this.getInterviewName();
      //获取面试官

    },
    methods:{
      //切换选项卡
      handleClick(tab, event) {
        this.CalendarArr = [];
        this.initDate();
        if(tab.index == 2){
          this.InterviewSelect2 = Number(interviewId);
        }else if (tab.index == 3) {
          this.sonInterviewShow();
        }
      },
      //日历-----------------------------
      //初始化日历
      initDate () {
        //获取今年
        this.ThisYear = new Date().getFullYear()
        //获取今月
        this.ThisMonth = new Date().getMonth()+1
        //获取当月的第一天
        this.firstDate = new Date(this.ThisYear, this.ThisMonth, 1).getDay()

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
        m = m < 10 ?`0${m}`:`${m}`;
         //获取上个月的剩余天数
         for(let i = this.firstDateWeek - 1;i>=0;i--){
           if(m == 1){
             this.CalendarArr.push({
               date:`${y-1}-${12}-${preMontehDay - i}`,
               day:preMontehDay - i,
               isClass:true,
               year:y,
               month:m,
               interviewNumber:'',
             })
           }else {
             this.CalendarArr.push({
               date:`${y}-${m-1}-${preMontehDay - i}`,
               day:preMontehDay - i,
               isClass:true,
               year:y,
               month:m,
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
             year:y,
             month:m,
             isClass:false,
             isTodayBg:false,
             interviewNumber:'',
           })
         };
         //获取下个月的剩余天数
         let nextDay = 42 - this.CalendarArr.length;
         let day;
         for(let i =1 ;i<= nextDay ; i++ ){
           i = i < 10 ?`0${i}`:`${i}`;
           if(m == 12){
             this.CalendarArr.push({
               date:`${y+1}-${1}-${i}`,
               day:i,
               year:y,
               month:m,
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
         if(this.activeName == 'first'){
           this.getInterviewData();
         }else {
           //this.InterviewSelect2 = Number(interviewId);
           this.getFreeTime(this.InterviewSelect2);
         }
      },
      //上一个月
      preMonth () {
        console.log(this.ThisMonth)
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
      nextMonth () {
        console.log(this.ThisMonth)
        if(this.ThisMonth == 12){
          this.ThisMonth = 1;
          this.ThisYear = this.ThisYear + 1;
          this.setCalendarView(this.ThisYear,this.ThisMonth);
        }else {
          this.ThisMonth = Number(this.ThisMonth) + 1;
          this.setCalendarView(this.ThisYear,this.ThisMonth);
        }
      },
      //时间格式
      TimeFormatting (date) {
        date = date.toLocaleString().split(' ')[0].split('/')
        let y,m,d;
        y = date[0];
        m = date[1];
        d = date[2];
        // m = m<10?`0${m}`:`${m}`;
        d = d<10?`0${d}`:`${d}`;
        return `${y}-${m}-${d}`
      },
      //first--------------------------
      //切换时区
      zoneChange () {
        //获取first月视图面试信息
        this.getInterviewData();
        //获取third周视图面试信息
        this.getWeekData();
        //获取third月视图面试信息
        this.getFreeTime(this.InterviewSelect2);
        $.cookie('timezone',this.zoneVal);
      },
      //获取时区
      getTimeZone () {
        this.$http.get(localhost+'cc/common/zones?access_token='+access_token).then((response) =>{
          this.zoneArr = response.body.resultObj;
        })
      },
      //获取first面试信息
      getInterviewData(){
        this.$http.post(localhost+'cc/candidate/interview/twoInterviewlist',{
          customerId:BcustomerId,
          timeZone:this.zoneVal,
          foreignBeginTime:`${this.ThisYear}-${this.ThisMonth}-01`,
          foreignEndTime:`${this.ThisYear}-${this.ThisMonth}-${this.lastDate}`,
          access_token:access_token,
          interviewId:this.interviewNameId,
          allname:this.searchVal
        },{emulateJSON:true}).then((res)=>{
           let arr = [];
           this.MscheduleArr = res.body.resultObj;
           if(this.MscheduleArr == ''){
             this.ListData = true;
           }else {
             this.ListData = false;
           }
           arr = res.body.resultObj;
           this.CalendarArr.map(x=>{
             arr.map(y=>{
               if(x.date == y.date){
                 x.interviewNumber = y.data.length;
               }
             })
           })
        })
      },
      //搜索
      keyCodeSearch(){
        this.getInterviewData();
      },
      //切换面试官
      changeInterview (index) {
        if(index == 1){
          this.interviewNameId = this.InterviewSelect1;
          this.getInterviewData();
        }else{
          this.interviewNameId = this.InterviewSelect2;
          this.getFreeTime(this.interviewNameId);
        }
      },
      //获取面试官
      getInterviewList(){
        this.$http.post(localhost+'cc/candidate/interview/selectInterviewsByCustomerId',{
          customerId:BcustomerId,
          access_token:access_token
        },{emulateJSON:true}).then((res)=>{
          res.body.resultObj.map(x=>{
            this.options.push({
              value:x.id,
              label:x.name
            });
          });
          res.body.resultObj.map(x=>{
            this.optionsAll.push({
              value:x.id,
              label:x.name
            });
          });
          this.optionsAll.unshift({
            value:0,
            label:'全部面试官'
          })
        })
      },
      //second-------------------------
      //获取面试官信息;
      getInterviewName(){
        this.$http.get(localhost+'cc/customer/interview/detail?access_token='+access_token+'&interviewerId='+interviewId).then((res)=>{;
          this.englishName = res.body.resultObj.name;
          this.englishEmail = res.body.resultObj.email;
          this.zoneVal = res.body.resultObj.zone;
          $.cookie('timezone',this.zoneVal);
        })
      },
      //third--------------------------
      //天
      prevDate(){
        if(this.TodayDay == 1){
          return
        }else {
          this.TodayDay = Number(this.TodayDay)-1;
          this.TodayDay = this.TodayDay < 10?`0${this.TodayDay}`:this.TodayDay;
          this.setIdleDate(`${this.TodayYear}-${this.TodayMonth}-${this.TodayDay}`);
        }
      },
      naxtDate(){
        if(this.TodayDay == 31){
          return
        }else {
          this.TodayDay = Number(this.TodayDay)+1;
          this.TodayDay = this.TodayDay < 10?`0${this.TodayDay}`:this.TodayDay;
          this.setIdleDate(`${this.TodayYear}-${this.TodayMonth}-${this.TodayDay}`);
        }
      },
      //周
      prevWeekDay(){
        if(this.weekIndex-1 < 0) return;
        this.weekToday = this.week[this.weekIndex-1];
        this.weekIndex = this.weekIndex-1;
        this.setIdleWeekDate(this.weekToday);
      },
      naxtWeekDay(){
        if(this.weekIndex+1 > 6) return;
        this.weekToday = this.week[this.weekIndex+1];
        this.weekIndex = this.weekIndex+1;
        this.setIdleWeekDate(this.weekToday);
      },
      //点击选取时间
      clickGetTime(el,index){
       //->是否选中，选中就取消选中；
       if(el.isHover){
         el.isHover = false;
         if(!this.startOrEnd){
           el.isHover = true;
         }
         this.startOrEnd = true;
         this.endNum = index;
         this.endTime = el.endTime;
         this.isMoveFlag = false;
         this.startNum = '';
         this.endNum = '';
       }else {
         el.isHover = true;
         if(this.startOrEnd){
           this.startNum = index;
           this.startTime = el.startTime;
           this.moveStart = index;
           this.isMoveFlag = true;
           this.startOrEnd = false;
         }else {
           this.startOrEnd = true;
           this.endNum = index;
           this.endTime = el.endTime;
           this.isMoveFlag = false;
           this.startNum = '';
           this.endNum = '';
         }
       }
      },
      //移动
      moverGetTime(el,index){
        //点击开始
        if(this.isMoveFlag){
          //判断结束索引是否大于当前索引
          if(this.moveEnd>index){
            this.moveEnd = index;
            this.backArr.map(x=>{
              x.isHover = false;
            })
            this.backArr = this.timeArr.slice(this.moveStart,this.moveEnd+1)
            this.backArr.map((x)=>{
              x.isHover = true;
            })
          }else {
            this.moveEnd = index;
            this.backArr = this.timeArr.slice(this.moveStart,this.moveEnd+1)
            this.backArr.map((x)=>{
              x.isHover = true;
            })
          }
        }
      },
      //点击的周几
      getWeekDay(weekDay){
        this.maskHide = true;
        this.PageTimeHide = false;
        this.FormHide = false;
        this.CancelHide = false;
        this.PageWeekHide = true;
        this.searchSonInterviewHide = false;
        this.incompleteHide = false;
        this.incompleteHide2 = false;
        this.incompleteHide3 = false;
        this.sonInterviewHide = false;
        this.incompleteHide4 = false;

        this.weekIndex = this.week.indexOf(weekDay);
        // this.maskHide = true;
        // this.PageWeekHide = true;
        this.weekToday = weekDay;
        this.setIdleWeekDate(weekDay);
      },
      //周/月切换
      checkWork(){
        console.log(this.monthFreeTime)
        if(this.monthFreeTime.length == 0){
          this.monthHide = true;
          this.weekHide = false;
          this.isEnable = 0;
          this.PageTimeHide = true;
          this.PageWeekHide = false;
        }else {
          this.isEnable = 1;
          this.monthHide = false;
          this.weekHide = true;
          this.PageTimeHide = false;
          this.PageWeekHide = true;
          this.getWeekData();
        }
        this.$http.post(localhost+'cc/bg/user/schedule/regular/enable',{
          access_token:access_token,
          type:2,
          userId:interviewId,
          isEnable:this.isEnable
        },{emulateJSON:true}).then((res)=>{
        })
        $.cookie('isEnable',this.isEnable);
      },
      //获取周视图数据;
      getWeekData(){
        this.$http.get(localhost+'/cc/bg/user/schedule/regular/list?access_token='+access_token+'&userId='+interviewId+'&zone='+this.zoneVal+'&type='+2).then((response)=>{
          let resArr = response.body.resultObj;
          this.IdleWeekDate = response.body.resultObj;
          this.weekDayArr.map((x,index)=>{
            if(x.month == 'Mon'){
              x.dataLength = resArr.Mon.length
            }
            if(x.month == 'Tue'){
              x.dataLength = resArr.Tue.length
            }
            if(x.month == 'Wed'){
              x.dataLength = resArr.Wed.length
            }
            if(x.month == 'Thu'){
              x.dataLength = resArr.Thu.length
            }
            if(x.month == 'Fri'){
              x.dataLength = resArr.Fri.length
            }
            if(x.month == 'Sat'){
              x.dataLength = resArr.Sat.length
            }
            if(x.month == 'Sun'){
              x.dataLength = resArr.Sun.length
            }
          })
        })
      },
      //反绑月空闲时间
      setIdleDate(toDay){
        let DateArr = [];
        let toDayDate = toDay;
        this.timeArr.map(x=>{
          x.isHover = false;
          x.BgColor = false;
        });
        this.IdleDate.map((x,index)=>{
          if(x.vestingDay == toDayDate){
            DateArr = x.dateRange;
          }
        });
        this.timeArr.map(x=>{
          DateArr.map(y=>{
            if(x.time == y){
              x.isHover = true;
            }
          })
        })
      },
      //反绑周空闲时间
      setIdleWeekDate(weekDay){

        this.timeArr.map(x=>{
          x.isHover = false;
          x.BgColor = false;
        });
        if(this.IdleWeekDate){
          this.oldWeekRegulars = this.IdleWeekDate[weekDay];
          this.timeArr.map(x=>{
            this.IdleWeekDate[weekDay].map(y=>{
              if(x.time == y){
                x.isHover = true;
              }
            })
          })
        }
      },
      //删除日期
      clickClearAll(date){
        // if(date == 'month'){
        //   this.todayTime = this.todayTime.replace(/\//g,'-')
        //   this.$http.post(localhost+'/cc/bg/user/schedule/general/delete',
        //   {
        //     access_token:CrmToken,
        //     userId:userId,
        //     vestingDay:this.todayTime
        //   },{emulateJSON:true}).then((response)=>{
        //
        //   })
        // }
        this.timeArr.map(x=>{
          x.isHover = false;
          x.BgColor = false;
        });
      },
      //取消
      clickCancel(){
        this.maskHide = false
        this.FormHide = false
        this.CancelHide = false
        this.ReschedulingHide = false
        this.PageTimeHide = false
      },
      //月视图保存时间
      PostFreeTime(){
        this.pushRegular = [];
        this.timeArr.map(x=>{
          if(x.isHover){
            this.pushRegular.push({'startTime':`${x.startTime}`,'endTime':`${x.endTime}`});
          }
        });
        let vestingArr = [];
        if(this.value1){
          vestingArr = [];
          let a = this.elObj.date.split('-')[2];
          let b = this.value1.toLocaleString().split(' ')[0].replace(/\//g,'-').split('-')[2];
          let monArr = [];
          let sliceArr = [];

          for(let i = 1;i<=31;i++){
            monArr.push(i);
          };
          sliceArr = monArr.slice(a-1,b);
          sliceArr.map(x=>{
            vestingArr.push(`${this.elObj.date.split('-')[0]}-${this.elObj.date.split('-')[1]}-${x}`)
          });
        }else {
          vestingArr = [];
          vestingArr.push(`${this.TodayYear}-${this.TodayMonth}-${this.TodayDay}`);

        }

        this.$http.post(localhost+'/cc/bg/user/schedule/general/save',{
          access_token:access_token,
          userId:this.InterviewSelect2,
          type:2,
          vestingDays:JSON.stringify(vestingArr),
          freeTimeRanges:JSON.stringify(this.pushRegular)
        },{emulateJSON:true}).then((response)=>{
          if(response.body.error_code == 200){
            alert('success!')
            this.maskHide = false;
            this.PageTimeHide = false;
            this.getFreeTime(this.InterviewSelect2);
          }
        })
      },
      //周视图保存时间
      PostWeekDay(){
        //this.todayTime = this.todayTime.replace(/\//g,'-');
        this.pushRegular = [];
        this.timeArr.map(x=>{
          if(x.isHover){
            this.pushRegular.push({'startTime':`${x.startTime}`,'endTime':`${x.endTime}`});
          }
        });
        this.$http.post(localhost+'/cc/bg/user/schedule/regular/save/one',{
          access_token:access_token,
          userId:interviewId,
          weekDayRegulars:JSON.stringify(this.pushRegular),
          oldWeekRegulars:JSON.stringify(this.oldWeekRegulars),
          weekDay:this.weekToday,
          type:2,
        },{emulateJSON:true}).then((response)=>{
          if(response.body.error_code == 200){
            alert('success!')
            this.maskHide = false;
            this.PageTimeHide = false;
            this.getWeekData();
          }
        })
      },
      //获取月空闲时间
      getFreeTime (userId){
        this.$http.get(localhost+'cc/bg/user/schedule/general/list?access_token='+access_token+'&type='+2+'&userId='+userId+'&zone='+this.zoneVal+'&startDate='+`${this.ThisYear}-${this.ThisMonth}-01`+'&endDate='+`${this.ThisYear}-${this.ThisMonth}-${this.lastDate}`).then((res)=>{
          this.IdleDate = res.body.resultObj;
          this.CalendarArr.map(y=>{
            y.interviewNumber = ''
          });
          this.IdleDate.map(x=>{
            this.CalendarArr.map(y=>{
              if(x.vestingDay == y.date){
                y.interviewNumber = x.dateRange.length;
              }
            })
          })
        })
      },
      //设置空闲时间
      setFreeTime (el,index) {
        this.TodayYear = el.year;
        this.TodayMonth = el.month;
        this.TodayDay = el.day;

        this.maskHide = true;
        this.PageTimeHide = true;
        this.FormHide = false;
        this.CancelHide = false;
        this.PageWeekHide = false;
        this.searchSonInterviewHide = false;
        this.incompleteHide = false;
        this.incompleteHide2 = false;
        this.incompleteHide3 = false;
        this.sonInterviewHide = false;
        this.incompleteHide4 = false;

        this.elObj = el;
        this.setIdleDate(el.date);
      },
      //fourth--------------------------
      //子面试官展示
      sonInterviewShow (){
        this.$http.post(localhost+'cc/customer/interview/childRenList',{
          access_token:access_token,
          parentCustId:BcustomerId
        },{emulateJSON:true}).then((res)=>{
          if(res.body.resultObj !==''){
            this.interviewList = res.body.resultObj;
            this.sonInterviewHide = true;
            this.sonInterviewtext = false;
          }else {
            this.sonInterviewHide = false;
            this.sonInterviewtext = true;
          }
        })
      },
      //添加子面试官
      addSonInterview () {
        this.maskHide = true;
        this.searchSonInterviewHide = true;
        this.PageWeekHide = false;
        this.FormHide = false;
        this.PageTimeHide = false;
        this.CancelHide = false;
        this.incompleteHide = false;
        this.incompleteHide2 = false;
        this.incompleteHide3 = false;
        this.incompleteHide4 = false;
      },
      //搜索子面试官是否可用
      searchSonInterview () {
        this.$http.post(localhost+'cc/customer/interview/findInterviewByPhone',{
          access_token:access_token,
          parentCustId:BcustomerId,
          phone:this.SonInterview
        },{emulateJSON:true}).then((response)=>{
          console.log(response.body)
          let interviewStatus = response.body.resultObj.status;
          if(interviewStatus == 1002){
            //电话号码为空
          }else if(interviewStatus == 1003){
            //账号未注册
            this.incompleteHide3 = true;
            this.logoImg = require('../../../common/img/icon-interview-photo-none@2x.png')
          }else if (interviewStatus == 1004) {
            //"自己不能添加自己"
            this.incompleteHide4 = true;
            this.isLeft21 = false;
            this.errorText = '您不能添加自己为子面试官';
            this.logoImg = response.body.resultObj.logoUrl;
            this.SonInterviewName = response.body.resultObj.interviewerName;
          }else if (interviewStatus == 1005) {
            //账号信息不完善，暂不能添加
            this.incompleteHide2 = true;
            this.isLeft21 = false;
            this.errorText = '您不能添加自己为子面试官';
            this.logoImg = response.body.resultObj.logoUrl;
            this.SonInterviewName = response.body.resultObj.interviewerName;
          }else if (interviewStatus == 1006) {
            //已有该子账号,不能添加
            this.incompleteHide4 = true;
            this.isLeft21 = true;
            this.errorText = '该账号已经是您的子面试官，请勿重复添加。';
            this.logoImg = response.body.resultObj.logoUrl;
            this.SonInterviewName = response.body.resultObj.interviewerName;
          }else {
            //成功
            this.incompleteHide = true;
            this.logoImg = response.body.resultObj.logoUrl;
            this.SonInterviewName = response.body.resultObj.interviewerName;
          }
        })
      },
      //添加子面试官
      addSonInterviewData () {
        if(this.incompleteHide || this.incompleteHide2 || this.incompleteHide3 || this.incompleteHide4){
          console.log(1)
        }else {
          this.$http.post(localhost+'cc/customer/interview/insertChildRen',{  access_token:access_token,
            parentCustId:BcustomerId,
            currentState:this.interviewStutas,
            phone:this.SonInterview
          },{emulateJSON:true}).then((response)=>{
            alert('添加成功');
            this.maskHide = false;
            this.searchSonInterviewHide = false;
            this.PageWeekHide = false;
            this.FormHide = false;
            this.PageTimeHide = false;
            this.CancelHide = false;
            this.incompleteHide = false;
            this.incompleteHide2 = false;
            this.incompleteHide3 = false;
            this.incompleteHide4 = false;
          })
        }

      },
      //
      switchChange (el) {
        console.log(el)
        this.$http.post(localhost+'cc/customer/interview/updateCurrentState',{
          access_token:access_token,
          id:el.id,
          currentState:el.currentState
        },{emulateJSON:true}).then((res)=>{
          console.log(res.body)
        })
      },




      //面试官信息保存
      recruitComfig () {
        this.maskHide = true;
        this.searchSonInterviewHide = false;
        this.PageWeekHide = false;
        this.FormHide = false;
        this.PageTimeHide = false;
        this.incompleteHide = false;
        this.incompleteHide2 = false;
        this.incompleteHide3 = false;
        this.incompleteHide4 = false;
        this.$http.post(localhost+'cc/customer/interview/updateInfo',{
          access_token:access_token,
          interviewerId:interviewId,
          name:this.englishName,
          email:this.englishEmail
        },{emulateJSON:true}).then((res)=>{
          if(res.body.error_code == 200){
            this.CancelHide = true;
          }
        })
      },



      //-----------------------------

      //获取当前信息
      clickThisData(el){
        this.interviewType = el.interviewType;
        this.sourceId = el.sourceId;
        this.maskHide = true;
        this.FormHide = true;
        this.CancelHide = false;
        this.PageTimeHide = false;
        this.PageWeekHide = false;
        this.searchSonInterviewHide = false;
        this.incompleteHide = false;
        this.incompleteHide2 = false;
        this.incompleteHide3 = false;
        this.sonInterviewHide = false;
        this.incompleteHide4 = false;

        this.candidateName = el.name;
        this.RecruiterName = el.userName;

        this.DateLeft = `${el.date},${el.week}`;
        this.DateRight = `${el.timeRange}`;

        this.interviewerDate = el.interviewerTime;
        this.interviewerZoneValue = el.interviewerZoneValue;
        this.candidateTime = el.candidateTime;
        this.candidateZone = el.candidateZone;
      },
    }
  }
</script>

<style lang="less">
  .InterviewManagement{
    float:right;
    margin-top:66px;
    margin-bottom: 30px;
    background:#fff;
    border-radius:4px;
    width:1000px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.4);
    .header{
      width: 100%;
      height: 48px;
      background: #EBEBEB;
      border-radius: 4px 4px 0 0;
      .header-name{
        display: block;
        margin: 0 0 0 18px;
        font-size: 18px;
        line-height: 48px;
        color: #333333;
        font-weight: 500;
      }
    }
    .content{
      width: 920px;
      margin: 0 auto;
      .el-tabs{
        .el-tabs__header{
          margin:40px 0 0 0;
          .el-tabs__nav{
            .el-tabs__item{
              font-size: 16px;
              color: #999999;
            }
            .el-tabs__active-bar{
              background-color: #3082E7;
            }
            .is-active{
              color: #3082E7;
            }
          }
        }
        .el-tabs__content{
          .first-class{
            margin: 30px 0 0 0 ;
            .first-header{
              .el-select{
                float: left;
                margin: 0 10px 0 0;
                .el-input__inner{
                  width: 144px;
                  height:44px;
                  border: 1px solid #E6ECF2;
                }
              }
              .header-search{
                float: left;
                .search-input{
                  display: inline-block;
                  width: 200px;
                  height: 42px;
                  border: 1px solid #E6ECF2;
                  border-radius: 4px;
                  padding-left: 16px;
                  font-size: 14px;
                }
              }
              .header-zone{
                float: right;
                .el-input__inner{
                  width: 228px;
                  height: 42px;
                  border: 1px solid #E6ECF2;
                  border-radius: 4px;
                  color:#fff;
                  background: #3082e7;
                }
              }
            }
            .calendar{
              width: 100%;
              background:#F9FAFC;
              margin: 30px 0 0 0 ;
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
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    display: inline-block;
                    font-size: 16px;
                    border: 1px solid #E6ECF2;
                    border-radius: 4px 0 0 4px;
                    cursor:pointer;
                  }
                }
              }
              .calendar-week-title{
                .calendar-week-oneDate{
                  float: left;
                  width: 130px;
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
                  width: 130px;
                  height: 120px;
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
              }
            }
            .Mschedule{
              margin:20px 0 100px 0;
              .Mschedule-li{
                margin: 20px auto 0;
                background: #fff;
                .Mschedule-li-title{
                  height: 52px;
                  background: #F9F9F9;
                  .li-title-data{
                    margin: 18px 0 0 30px;
                    display: inline-block;
                    font-size: 16px;
                    color: #283644;
                  }
                }
                .Mschedule-li-content{
                  border-top:4px solid #F9FAFC;
                  background: #F9F9F9;
                  margin: 0 0 4px 0;
                  .Mschedule-li-left{
                    float: left;
                    padding: 0 0 0 30px;
                    border-left:4px solid #4C9DFF;
                    height: 104px;
                    .Mschedule-li-conent{
                      .li-conent-date{
                        display: block;
                        margin:16px 0 18px 0;
                        font-size: 12px;
                        color: #979BA1;
                      }
                      .li-conent-Time{
                        height: 30px;
                        line-height: 30px;
                        .conent-Time-cst{
                          //margin-right:30px;
                          font-size: 18px;
                          color: #283644;
                          float: left;
                        }
                        .li-right-img{
                          float: left;
                          margin: 0 14px 0 40px;
                          width: 30px;
                          height: 30px;
                          border-radius:50% !important;
                        }
                        .conent-Time-name{
                          float: left;
                          margin-right:40px;
                          font-size: 18px;
                          color: #283644;
                        }
                      }
                    }
                    .Mschedule-li-footer{
                      .li-footer-email,.li-footer-phone{
                        margin-right:40px;
                        display: inline-block;
                        font-size: 12px;
                        color: #979BA1;
                      }
                    }
                  }
                  .Mschedule-li-right{
                    float: right;
                    margin: 10px 0 0 0;
                    .li-right-ImgBox{
                      margin:25px 30px 0 0;
                      width: 200px;
                      height: 30px;
                      line-height: 30px;
                      text-align: right;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                      .point{
                        width: 4px;
                        height: 4px;
                        background: #1BA275;
                        display: inline-block;
                        margin: 0 6px 0 0;
                        border-radius: 50%;
                      }
                      .li-right-name{
                        font-size: 14px;
                        color: #1BA275;
                      }
                    }
                  }
                  .IsBorder{
                    border-left:4px solid #3082E7;
                  }
                }
              }
            }
            .first-hide{
              margin: 100px auto 100px;
              .hide-icon{
                width: 86px;
                height: 70px;
                display: block;
                margin: 100px auto 30px;
                background: url('../../../common/img/icon-calendar-none@2x.png') no-repeat;
                background-size: contain;
              }
              .hide-text{
                width: 100%;
                text-align: center;
                font-size: 16px;
                display: block;
                color: #979BA1;
              }
            }
          }
          .second-class{
            margin: 40px auto;
            width: 920px;
            background: #F9F9F9;
            .recruit{
              width: 466px;
              margin: 0px auto;
              padding-top: 60px;
              padding-bottom: 60px;
              .recruit-div{
                margin: 0 auto 24px;
                .title{
                  float: left;
                  font-size: 14px;
                  color: #999999;
                  line-height: 36px;
                  width: 74px;
                  text-align: right;
                  .required{
                    font-size: 14px;
                    color: #EA3522;
                    display: inline-block;
                    margin: 0 10px 0 0;
                  }
                }
                .lineHeight70{
                  line-height: 70px;
                }
                .recruit-header{
                  float: left;
                  margin: 0 14px 0 30px;
                  position: relative;
                  .recruit-header-img{
                    width: 70px;
                    height: 70px;
                    display: inline-block;
                    cursor: pointer;
                    border-radius: 50%;
                  }
                }
                .recruit-font{
                  float: left;
                  width: 159px;
                  font-size: 12px;
                  margin-top: 15px;
                  color: #999999;
                  line-height: 20px;
                }
                .recruit-right{
                  margin: 0 0 0 30px;
                  float: left;
                  .recruit-input{
                    width: 348px;
                    height: 34px;
                    padding-left: 12px;
                    display: inline-block;
                    border: 1px solid #D8E1EB;
                  }
                }
              }
              .recruit-button{
                margin: 50px auto 0;
                width: 100px;
                height: 29px;
                line-height: 29px;
                text-align: center;
                background: #3082E7;
                border-radius: 4px;
                font-size: 14px;
                color: #FFFFFF;
                cursor: pointer;
              }
            }
          }
          .third-class{
            padding-bottom: 60px;
            .third-header{
              height: 44px;
              margin: 30px auto;
              .el-select{
                float: left;
                margin: 0 20px 0 0;
                .el-input__inner{
                  width: 144px;
                  height:44px;
                  border: 1px solid #E6ECF2;
                }
              }
              .header-freeTime{
                float: left;
                line-height: 44px;
                .freeTime-input{
                  float: left;
                  width: 14px;
                  height: 14px;
                  margin: 15px 0 0 0;
                }
                .freeTime-font{
                  float: left;
                  margin: 0 8px 0 10px;
                  font-size: 14px;
                  color: #333333;
                }
                .hover-prompt{
                  float: left;
                  .prompt-icon{
                    display: inline-block;
                    vertical-align: -4px;
                    cursor: pointer;
                    width: 17px;
                    height: 17px;
                    background: url('../../../common/img/icon-b-1.png') no-repeat;
                    background-position:-104px -17px;
                  }
                }
              }
              .header-zone{
                float: right;
                .el-input__inner{
                  width: 228px;
                  height: 42px;
                  border: 1px solid #E6ECF2;
                  border-radius: 4px;
                  color:#fff;
                  background: #3082e7;
                }
              }
            }
            .calendar{
              width: 100%;
              background:#F9FAFC;
              margin: 30px 0 0 0 ;
              .calendar-date-title{
                padding-left:30px;
                height: 84px;
                border-bottom:1px solid  #E6ECF2;
                .Switch-month{
                  margin:  0 auto;
                  width: 210px;
                  .preMonth,.nextMonth{
                    margin:0 30px 0 0 ;
                    width: 6px;
                    height: 10px;
                    line-height: 40px;
                    text-align: center;
                    display: inline-block;
                    font-size: 16px;
                    cursor:pointer;
                    background: url('../../../common/img/icon-b-1.png') no-repeat;
                    background-position: -197px -81px;
                  }
                  .nextMonth{
                    margin:0 0px 0 30px ;
                    background-position: -218px -81px;
                  }
                  .calendar-title-month,.calendar-title-year{
                    font-size: 20px;
                    color: #283644;
                    font-weight:500;
                    height: 84px;
                    line-height: 84px;
                  }
                }
              }
              .calendar-week-title{
                .calendar-week-oneDate{
                  float: left;
                  width: 130px;
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
                  width: 130px;
                  height: 120px;
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
              }
            }
            .weekForm{
              margin: 30px 0 0 0 ;
              width:100%;
              background: #F9F9F9;
              .weekForm-title{
                margin:0 auto;
                width:100%;
                height: 45px;
                line-height: 45px;
                .weekForm-title-span{
                  display: inline-block;
                  width: 128px;
                  text-align: center;
                  font-size: 12px;
                  color: #98A0A6;
                }
              }
              .weekForm-content{
                width:100%;
                height: 120px;
                margin:0 auto;
                border-top:1px solid #E6ECF2;
                border-bottom:1px solid #E6ECF2;
                box-shadow: 1px 0 0 0 #E6ECF2, 0 1px 0 0 #E6ECF2;
                .weekForm-content-span{
                  display: inline-block;
                  width: 130px;
                  height: 120px;
                  border-right: 1px solid #E6ECF2;
                  font-size: 24px;
                  color: #283644;
                  text-align: center;
                  line-height: 120px;
                  cursor: pointer;
                }
              }
            }
          }
          .fourth-class{
            padding-bottom: 380px;
            .fourth-header{
              margin: 30px 0 30px 0;
              width: 100%;
              .header-span{
                width: 228px;
                background: #3082E7;
                border-radius: 2px;
                text-align: center;
                height: 44px;
                line-height: 44px;
                float: right;
                font-size: 14px;
                color: #FFFFFF;
                cursor: pointer;
              }
            }
            .fourth-ul{
              width: 918px;
              margin: 0 auto;
              border:1px solid #E2E2E2;
              .title-li{
                width: 100%;
                height: 60px;
                line-height: 60px;
                background: #EFF1F6;
                .account{
                  width: 260px;
                  font-size: 14px;
                  padding-left: 100px;
                  color: #333333;
                  display: inline-block;
                  font-weight: 700;
                }
                .interview-name{
                  width: 350px;
                  font-size: 14px;
                  font-weight: 700;
                  color: #333333;
                  display: inline-block;
                }
                .status{
                  font-size: 14px;
                  font-weight: 700;
                  color: #333333;
                  display: inline-block;
                }
              }
              .fourth-li{
                height:60px;
                line-height: 60px;
                border-bottom:1px solid #E2E2E2;
                .li-account{
                  width: 260px;
                  font-size: 14px;
                  padding-left: 100px;
                  color: #333333;
                  display: inline-block;
                  font-weight: 500;
                }
                .li-interviewName{
                  width: 350px;
                  font-size: 14px;
                  font-weight: 500;
                  color: #333333;
                  display: inline-block;
                }
                .li-status{
                  display: inline-block;
                }
              }
            }
            .sonInterviewtext{
              height: 120px;
              line-height: 120px;
              text-align: center;
              font-size: 14px;
              color: #979BA1;
            }
          }
        }
      }
    }
    .Mask-page{
      position: fixed;
      z-index: 100;
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
                background: url('../../../common/img/icon-b-1.png') no-repeat;
                background-position: -164px -76px;
                cursor: pointer;
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
      .page-Cancel{
        position: fixed;
        top:50%;
        left: 50%;
        margin: -200px 0 0 -320px;
        z-index: 500;
        width: 640px;
        height: 400px;
        background: #FFFFFF;
        border-radius: 4px;
        .Cancel-title{
          position: relative;
          height: 60px;
          background: #F9FAFC;
          text-align: center;
          .Cancel-title-span{
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
        .Cancel-content{
          width: 378px;
          margin: 0 auto;
          text-align: center;
          .success-img{
            width: 47px;
            height: 34px;
            background: url('../../../common/img/icon-b-details.png') no-repeat;
            background-position: -9px -67px;
            display: block;
            margin: 60px auto 30px;
          }
          .success-p-1{
            font-size: 18px;
            color: #333333;
            font-weight: 600;
            display: block;
          }
          .success-p-2{
            margin: 14px auto 50px;
            font-size: 14px;
            color: #333333;
            font-weight: 500;
            display: block;
          }
          .button-Set{
            width: 200px;
            height: 29px;
            margin: 50px auto 16px;
            line-height: 29px;
            text-align: center;
            font-size: 14px;
            color: #FFFFFF;
            cursor: pointer;
            display: block;
            background: #3082E7;
            border-radius: 4px;
          }
          .button-Later{
            font-size: 14px;
            color: #999999;
            margin: 0 auto;
            cursor: pointer;
          }
        }
        .Cancel-buttom{
          width: 260px;
          height: 44px;
          margin: 30px auto;
          .Cancel-buttom-Cancel,.Cancel-buttom-Confirm{
            margin-right:16px;
            display: inline-block;
            width: 120px;
            height: 44px;
            line-height: 44px;
            text-align: center;
            background: #FFFFFF;
            border: 1px solid #E6ECF2;
            border-radius: 2px;
            font-size: 14px;
            color: #283644;
            cursor: pointer;
          }
          .Cancel-buttom-Confirm{
            margin-right: 0;
            background: #4C9DFF;
            border-radius: 2px;
            border:none;
            color: #FFFFFF;
          }
        }
      }
      .page-time{
        position: fixed;
        top:50%;
        left: 50%;
        margin: -233px 0 0 -450px;
        z-index: 500;
        width: 900px;
        //height: 623px;
        background: #FFFFFF;
        border-radius: 4px;
        .page-time-title{
          position: relative;
          height: 60px;
          background: #F9FAFC;
          text-align: center;
          .time-font{
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
        .page-time-content{
          margin:0 auto;
          width: 722px;
          .page-time-prompt{
            width: 480px;
            margin: 50px auto 20px;
            text-align: center;
            .span-1,.span-2,.span-3,.span-4{
              font-size: 14px;
              color: #283644;
            }
            .span-4{
              color: #99A9BF;
            }
            .el-date-editor{
              width: 200px;
              .el-input__inner{
                border: none;
                cursor: pointer;
                border-bottom: 1px solid #eee;
                height: 22px;
                text-align: center;
              }
              .el-input__icon{
                // display: none;
              }
            }
          }
          .page-time-Clear{
            float: right;
            width: 60px;
            .Clear-all{
              font-size: 12px;
              color: #283644;
              cursor: pointer;
            }
          }
          .page-select-time{
            margin-top:20px;
            width: 100%;
            float: left;
            border:1px solid #E6ECF2;
            border-right:none;
            border-bottom:none;
            .time-li{
              float: left;
              width: 119px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              font-size: 12px;
              color: #99A9BF;
              border-right:1px solid #E6ECF2;
              border-bottom: 1px solid #E6ECF2;
              cursor: pointer;
            }
            .BgColor{
              color: #fff;
              background: #4C9DFF;
            }
            .time-li-bg{
              background: #4C9DFF;
              color: #fff;
            }
          }
        }
        .page-time-button{
          width: 224px;
          height: 44px;
          margin: 30px auto;
          .page-button-Cancel,.page-button-Confirm{
            margin-right:16px;
            display: inline-block;
            width: 100px;
            height: 29px;
            line-height: 29px;
            text-align: center;
            background: #FFFFFF;
            border: 1px solid #FC3A3A;
            border-radius: 2px;
            font-size: 14px;
            color: #FC3A3A;
            cursor: pointer;
          }
          .page-button-Confirm{
            margin-right: 0;
            background: #4C9DFF;
            border-radius: 2px;
            border:none;
            color: #FFFFFF;
          }
        }
      }
      .son-interview{
        width: 640px;
        height: 397px;
        position: fixed;
        top:50%;
        left: 50%;
        margin: -189px 0 0 -320px;
        z-index: 500;
        background: #fff;
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
        .son-interview-content{
          margin: 40px auto;
          width: 560px;
          height: 198px;
          background: #F7F9FC;
          .search{
            width: 380px;
            margin: 0px auto;
            padding-top: 80px;
            .search-account{
              width: 56px;
              height: 38px;
              line-height: 38px;
              font-size: 14px;
              color: #333333;
            }
            .search-input{
              width: 288px;
              height: 38px;
              background: #FFFFFF;
              border: 1px solid #D8E1EB;
              border-radius: 3px;
              margin: 0 0 0 14px;
              padding-left: 12px;
              font-size: 14px;
            }
          }
        }
        .search-button{
          width: 100px;
          height: 29px;
          line-height: 29px;
          background: #3082E7;
          border-radius: 4px;
          font-size: 14px;
          color: #FFFFFF;
          text-align: center;
          cursor: pointer;
          margin: 30px auto 0;
        }
      }
      .add-son-interview{
        width: 640px;
        height: 463px;
        position: fixed;
        top:50%;
        left: 50%;
        margin: -222px 0 0 -320px;
        z-index: 500;
        background: #fff;
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
        .son-interview-content{
          margin: 40px auto 0;
          padding-bottom: 30px;
          width: 560px;
          // height:244px;
          background: #F7F9FC;
          .search{
            width: 380px;
            margin: 0px auto;
            padding-top: 30px;
            .search-account{
              width: 56px;
              height: 38px;
              line-height: 38px;
              font-size: 14px;
              color: #333333;
            }
            .search-input{
              width: 288px;
              height: 38px;
              background: #FFFFFF;
              border: 1px solid #D8E1EB;
              border-radius: 3px;
              margin: 0 0 0 14px;
              padding-left: 12px;
              font-size: 14px;
            }
          }
          .search-show{
            width: 380px;
            margin: 20px auto ;
            .show-right{
              width: 300px;
              height: 90px;
              float: right;
              background: #fff;
              position: relative;
              border: 1px solid #D8E1EB;
              border-radius: 3px;
              margin:0 5px 0 0;
              .logo{
                position: absolute;
                top:22px;
                left: 60px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
              }
              .center-img{
                left: 50%;
                margin: 0px 0 0 -25px;
              }
              .name{
                position: absolute;
                top:30px;
                left: 124px;
                font-size: 14px;
                color: #333333;
              }
              .account{
                position: absolute;
                top:52px;
                left: 124px;
                font-size: 12px;
                color: #999999;
              }
              .account-1{
                position: absolute;
                top:40px;
                left: 124px;
                font-size: 12px;
                color: #999999;
              }
              .line{
                position: absolute;
                top:84px;
                left: 0;
                width: 100%;
                display: inline-block;
                border: .3px dashed #D8E1EB;
              }
              .caveat{
                position: absolute;
                top:97px;
                left: 51px;
                .caveat-icon{
                  display: inline-block;
                  width: 12px;
                  height: 12px;
                  background: url('../../../common/img/icon-b-remind@2x.png') no-repeat;
                  background-size: contain;
                  vertical-align: -1px;
                  margin-right: 6px;
                }
                .caveat-text{
                  font-size: 12px;
                  color: #AE3B3B;
                }
              }
              .left21{
                left: 21px;
              }
              .center-caveat{
                left: 50%;
                margin: 0 0 0 -40px;
              }
            }
            .right-1{
              height: 121px;
            }
          }
          .search-stutas{
            width: 380px;
            margin: 20px auto 0;
            .search-account{
              width: 56px;
              height: 38px;
              line-height: 38px;
              font-size: 14px;
              color: #333333;
              display: inline-block;
            }
            .search-switch{
              margin: 0 0px 0 14px;
              width: 300px;
              display: inline-block;
              .switch-text{
                font-size: 12px;
                color: #999999;
                height: 22px;
                line-height: 22px;
              }
            }
          }
        }
        .search-button{
          width: 230px;
          margin: 30px auto;
          .cancle,.Confirm{
            width: 100px;
            height: 29px;
            display: inline-block;
            cursor: pointer;
            line-height: 29px;
            text-align: center;
            font-size: 14px;
            color: #FFFFFF;
            background: #9DB4D1;
            border-radius: 4px;
          }
          .Confirm{
            background: #3082E7;
            margin: 0 0 0 24px;
          }
          .noClick{
            background:rgba(48,130,231,.5)
          }
        }
      }
      .interview-no{
        height: 494px;
        margin: -237px 0 0 -320px;
        .son-interview-content{
          // height: 275px;
          .search-show{
            .show-right{
              height: 121px;
            }
          }
        }
      }
    }
  }
</style>
