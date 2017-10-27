<template >
  <div class="Body_main">
    <!--头部导航-->
    <div class="Header">
      <span class="Header_img" @click="BackOff"></span>
      <span class="Header_title">订单管理</span>
    </div>
    <div class="Order_body" id="Order_body" @touchmove="touchMove">
      <el-tabs v-model="activeName" @tab-click="handleClick" v-show="TabShow" class="El-Tabs">
         <el-tab-pane label="处理中" name="second">
           <ul class="Ul_List" v-show="ListShow">
             <li v-for="(list,index) in UlLists" class="Li_" @click="Details(list.Id,list.orderId,list.orderNum)">
               <div class="list_main">
                 <span class="list_title">岗位名称: {{list.name}}</span>
                 <span class="list_Span">订单状态:</span><span class="status" v-if="list.status == '处理中'" style="background:#f5be41;">{{list.status}}</span>
                </div>
               <div class="list_data clear">
                 <p class="line"></p>
                 <span class="data_name">人数要求：{{list.people}}</span>
                 <span class="data_name">期望上岗时间：{{list.time}}</span>
                 <span class="data_name">性别要求：{{list.sex}}</span>
                 <span class="data_name">国籍要求：{{list.nat}}</span>
                 <div class="Recommend clear">
                   <div class="Total-teachers">
                     <span class="Total-font">推荐外教总数:</span>
                     <span class="Total-number">{{list.recommendedTeacherTotalNum}}</span>
                   </div>
                   <p class="vertical"></p>
                   <div class="feedback-teachers">
                     <span class="Total-font">待反馈外教:</span>
                     <span class="Total-number Total-number_" >{{list.feedbackTeacherTotalNum}}</span>
                   </div>
                   <span class="Left-Img"></span>
                 </div>
               </div>
             </li>
           </ul>
         </el-tab-pane>
         <el-tab-pane label="已完成" name="third">
           <ul class="Ul_List" v-show="ListShow">
             <li v-for="(list,index) in UlLists" class="Li_" @click="Details(list.Id,list.orderId,list.orderNum)">
               <div class="list_main">
                 <span class="list_title">岗位名称: {{list.name}}</span>
                 <span class="list_Span">订单状态</span><span class="status" v-if="list.status == '已完成'" style="background:#62d173;">{{list.status}}</span>
                </div>
                <div class="list_data clear">
                  <p class="line"></p>
                  <span class="data_name">人数要求：{{list.people}}</span>
                  <span class="data_name">期望上岗时间：{{list.time}}</span>
                  <span class="data_name">性别要求：{{list.sex}}</span>
                  <span class="data_name">国籍要求：{{list.nat}}</span>
                  <div class="Recommend clear">
                    <div class="Total-teachers">
                      <span class="Total-font">推荐外教总数:</span>
                      <span class="Total-number">{{list.recommendedTeacherTotalNum}}</span>
                    </div>
                    <p class="vertical"></p>
                    <div class="feedback-teachers">
                      <span class="Total-font">待反馈外教:</span>
                      <span class="Total-number Total-number_" >{{list.feedbackTeacherTotalNum}}</span>
                    </div>
                    <span class="Left-Img"></span>
                  </div>
                </div>
             </li>
           </ul>
         </el-tab-pane>
         <el-tab-pane label="被关闭" name="fourth">
           <ul class="Ul_List" v-show="ListShow">
             <li v-for="(list,index) in UlLists" class="Li_" @click="Details(list.Id,list.orderId,list.orderNum)">
               <div class="list_main">
                 <span class="list_title">岗位名称: {{list.name}}</span>
                 <span class="list_Span">订单状态:</span><span class="status" v-if="list.status == '被关闭'" style="background:#919191;">{{list.status}}</span>
                </div>
               <div class="list_data clear">
                  <p class="line"></p>
                  <span class="data_name">人数要求：{{list.people}}</span>
                  <span class="data_name">期望上岗时间：{{list.time}}</span>
                  <span class="data_name">性别要求：{{list.sex}}</span>
                  <span class="data_name">国籍要求：{{list.nat}}</span>
                  <div class="Recommend clear">
                    <div class="Total-teachers">
                      <span class="Total-font">推荐外教总数:</span>
                      <span class="Total-number">{{list.recommendedTeacherTotalNum}}</span>
                    </div>
                    <p class="vertical"></p>
                    <div class="feedback-teachers">
                      <span class="Total-font">待反馈外教:</span>
                      <span class="Total-number Total-number_" >{{list.feedbackTeacherTotalNum}}</span>
                    </div>
                    <span class="Left-Img"></span>
                  </div>
                </div>
             </li>
           </ul>
         </el-tab-pane>
         <el-tab-pane label="全部" name="first">
           <ul class="Ul_List" v-show="ListShow">
             <li v-for="(list,index) in UlLists" class="Li_"
             @click="Details(list.Id,list.orderId,list.orderNum)">
               <div class="list_main">
                 <span class="list_title">岗位名称: {{list.name}}</span>
                 <span class="list_Span">订单状态:</span>
                 <span class="status" v-if="list.status == '处理中'" style="background:#f5be41;">{{list.status}}</span>
                 <span class="status" v-else-if="list.status == '被关闭'" style="background:#919191;">{{list.status}}</span>
                 <span class="status" v-else-if="list.status == '已完成'" style="background:#62d173;">{{list.status}}</span>
                </div>
                <div class="list_data clear">
                  <p class="line"></p>
                  <span class="data_name">人数要求：{{list.people}}</span>
                  <span class="data_name">期望上岗时间：{{list.time}}</span>
                  <span class="data_name">性别要求：{{list.sex}}</span>
                  <span class="data_name">国籍要求：{{list.nat}}</span>
                  <div class="Recommend clear">
                    <div class="Total-teachers">
                      <span class="Total-font">推荐外教总数:</span>
                      <span class="Total-number">{{list.recommendedTeacherTotalNum}}</span>
                    </div>
                    <p class="vertical"></p>
                    <div class="feedback-teachers">
                      <span class="Total-font">待反馈外教:</span>
                      <span class="Total-number Total-number_" >{{list.feedbackTeacherTotalNum}}</span>
                    </div>
                    <span class="Left-Img"></span>
                  </div>
                </div>
             </li>
           </ul>
         </el-tab-pane>
       </el-tabs>
       <div class="Initialization" v-show="In_Hide">
         <div class="Initialization_p">
           <div class="P">
             您尚未提交岗位信息，请点击
             <a class="goDemand" href="/module/Login_demand.html">
               岗位需求
             </a>
             提交岗位信息
           </div>
         </div>
       </div>
       <div class="Initialization2" v-show="In_Hide2">
         <div class="Initialization_p">
           <div class="P">
             您尚未提交需求详情，请点击
             <a class="goDemand" href="/module/Login_demand.html">
               需求管理
             </a>提交需求详情
           </div>

         </div>
       </div>
       <div class="Initialization3" v-show="In_Hide3">
         <div class="Initialization_p">
           <div class="P">
             您提交的岗位需求尚未形成订单，客户经理将在后台尽快为您处理。
           </div>
         </div>
       </div>
       <div class="Initialization3" v-show="In_Hide4">
         <div class="Initialization_p">
           <div class="P">
             当前状态下面没有订单记录
           </div>
         </div>
       </div>
      <div class="Exhibition clear" v-show="Exh">
        <div class="Exhibition-Box clear" @click="GoToResume">
          <div class="Exhibition-demand clear">
            <div class="clear">
              <div class="list-demand list-one">
                <span>岗位名称:</span>
                <span style="color:#8d8d8d">{{this.dataList.positionName}}</span>
              </div>
            </div>
            <div class="clear">
              <div class="list-bottom list-two" style="margin-bottom:10px;display:inline-block;">
                <span>人数需求:</span>
                <span style="color:#8d8d8d">{{this.demandList.needNum}}</span>
              </div>
              <span class="Exhibition-demand-Img" v-show="ImgHide"></span>
              <div class="list-bottom list-thr">
                <span>期望上岗时间:</span>
                <span style="color:#8d8d8d">{{this.demandList.expiryDate}}</span>
              </div>
              <div class="list-demand list-four">
                  <span>订单状态:</span>
                <span class="BGcolor">{{this.stauts}}</span>
              </div>
            </div>
          </div>
        </div>
        <form class="Demand_form clear" v-show="ExhibitionMainHide">
          <div class="Job-require-show">
            <div class="Edit-data clear">
              <span class="font">任职要求</span>
              <p class="line"></p>
            </div>
            <div class="PostName F_Box clear">
              <label>岗位名称:</label>
              <span class="userVal">{{this.dataList.positionName}}</span>
            </div>
            <div class="Sex F_Box clear">
              <label>性别:</label>
              <span class="userVal">{{this.dataList.gender}}</span>
            </div>
            <div class="Inter F_Box clear">
              <label>国籍:</label>
              <span class="userVal">{{this.dataList.nationalityArr}}</span>
            </div>
            <div class="BackEdu F_Box clear">
              <label>学历:</label>
              <span class="userVal">{{this.dataList.educationBg}}</span>
            </div>
            <div class="Age F_Box clear">
              <label>年龄:</label>
              <span class="userVal">{{this.dataList.ageStage}}</span>
            </div>
            <div class="Major F_Box clear">
              <label>专业要求:</label>
              <span class="userVal">{{this.dataList.majorArr}}</span>
            </div>
            <div class="F_Box clear" v-show="DetailsShow1">
              <label>教学证书:</label>
              <span class="userVal">{{this.dataList.certificate}}</span>
            </div>
            <div class="F_Box clear" v-show="DetailsShow2">
              <label>其他要求:</label>
              <span class="userVal">{{this.dataList.qualityDesc}}</span>
            </div>
            <div class="Job_Req F_Box clear" v-show="DetailsShow3">
              <label>岗位要求:</label>
              <span class="userVal">{{this.dataList.jobRequire}}</span>
            </div>
            <div class="Job_Duty F_Box clear" v-show="DetailsShow4">
              <label>工作职责:</label>
              <span class="userVal">{{this.dataList.jobDesc}}</span>
            </div>
            <div class="Job_Pay F_Box clear" v-show="DetailsShow5">
              <label>薪酬福利:</label>
              <span class="userVal">{{this.dataList.jobBenefit}}</span>
            </div>
          </div>
          <div class="Course-information-show" v-show="informationShow">
            <div class="Edit-data clear">
              <span class="font">课程信息</span>
              <p class="line"></p>
            </div>
            <div v-show="CourseShowHide">
              <div class="F_Box clear">
                <label>学生年龄:</label>
                <span class="userVal">{{this.dataList.stuAgeStageArr}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow6">
                <label>英语程度:</label>
                <span class="userVal">{{this.dataList.stuEnlevelArr}}</span>
              </div>
              <div class="F_Box clear">
                <label>班级规模:</label>
                <span class="userVal">{{this.dataList.classScale}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow7">
                <label>双语助教:</label>
                <span class="userVal">{{this.dataList.chinaAssistant}}</span>
              </div>
              <div class="F_Box clear">
                <label>有无教材:</label>
                <span class="userVal">{{this.dataList.textbook}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow8">
                <label>教材名称:</label>
                <span class="userVal">{{this.dataList.textbookName}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow24">
                <label>有无教案:</label>
                <span class="userVal">{{this.dataList.teachPlan}}</span>
              </div>
              <div class="Week F_Box clear">
                <label>课时量:</label>
                <span class="userVal">{{this.dataList.weekHours}}节／周</span>
              </div>
              <div class="ClassH F_Box clear">
                <label>课时长:</label>
                <span class="userVal">{{this.dataList.classHours}}分钟／节</span>
              </div>
              <div class="WorkH F_Box clear">
                <label>每周工作时间:</label>
                <span class="userVal">{{this.dataList.weekTotalHours}}</span>
              </div>
              <div class="F_Box clear">
                <label>有无岗前培训:</label>
                <span class="userVal">{{this.dataList.preJobTrain}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow10">
                <label>培训安排介绍:</label>
                <span class="userVal">{{this.dataList.jobTrainDesc}}</span>
              </div>
            </div>
            <div class="CourseFont" v-show="CourseFontHide">
              <p>您尚未填写课程信息,点击编辑进行完善</p>
            </div>
          </div>
          <div class="Fringe-benefits-show" v-show="benefitsShow" style="margin-bottom:0px;">
            <div class="Edit-data clear">
              <span class="font">福利待遇</span>
              <p class="line"></p>
            </div>
            <div v-show="FringeShowHide">
              <div class="F_Box clear">
                <label>月均薪酬范围:</label>
                <span class="userVal">{{this.dataList.salaryAveRange}}
                  <span style="font-size: 14px;color: #a1a1a1;">RMB</span>
                </span>
              </div>
              <div class="F_Box clear">
                <label>基本薪资:</label>
                <span class="userVal">{{this.dataList.salaryType+'-'+this.dataList.salaryMoney}}
                    <span style="font-size: 14px;color: #a1a1a1;">RMB</span>
                </span>

              </div>
              <div class="F_Box clear">
                <label>住宿情况:</label>
                <span class="userVal">{{this.dataList.staffStay}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow12">
                <label>房间人数:</label>
                <span class="userVal">{{this.dataList.roomHoldNum}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow13">
                <label>住宿补助:</label>
                <span class="userVal">{{this.dataList.staySubsidy}}</span>
              </div>
              <div class="F_Box clear">
                <label>绩效考核方式:</label>
                <span class="userVal">{{this.dataList.assessType}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow11">
                <label>绩效基数:</label>
                <span class="userVal">{{this.dataList.assessMoney}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow14">
                <label>机票补助:</label>
                <span class="userVal">{{this.dataList.airfareSubsidy}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow15">
                <label>补贴金额:</label>
                <span class="userVal">{{this.dataList.airfareSubsidyMoney}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow16">
                <label>加班费:</label>
                <span class="userVal">{{this.dataList.chargeOvertime}}</span>
              </div>
              <div class="F_Box clear">
                <label>保险类型:</label>
                <span class="userVal">{{this.dataList.insuranceType}}</span>
              </div>
              <div class="F_Box clear">
                <label>假期描述:</label>
                <span class="userVal">{{this.dataList.holidayDesc}}</span>
              </div>
              <div class="F_Box clear" v-show="DetailsShow23">
                <label>备注:</label>
                <span class="userVal">{{this.dataList.remarks}}</span>
              </div>
            </div>
            <div class="CourseFont" v-show="FringeFontHide">
              <p>您尚未填写福利待遇,点击编辑进行完善</p>
            </div>
          </div>
          <div class="bottom-Time">
            <div class="Submit">
              <span>需求提交时间:</span>
              <span>{{this.demandList.addTimeStr}}</span>
            </div>
            <div class="generate">
              <span>生成订单时间:</span>
              <span>{{this.generateTime.addTimeStr}}</span>
            </div>
          </div>
        </form>
        <el-tabs v-model="activeNames" @tab-click="handleClicks" class="StateTabs" v-show="StateTabs">
           <el-tab-pane label="全部" name="whole">
             <ul class="feedback-list">
               <li class="feedback-list-li" v-for="(list,index) in feedbackArr"
               @click="goToResume(list.profileId,list.id,list.orderId,list.orderNum,list.state)">
                 <img :src="list.url" alt="" class="feedback-li-img">
                 <span class="feedback-li-name">{{list.name}}</span>
                 <el-rate
                    v-model="list.number"
                    disabled>
                  </el-rate>
                 <span class="feedback-li-nationality" v-show="list.nationalityHidden">{{list.nat}}</span>
                 <span class="feedback-li-age" v-show="list.ageHidden">{{list.age}}岁</span>
                 <span class="feedback-li-state">{{list.state}}</span>
                 <span class="feedback-li-time">{{list.time}}</span>
                 <span class="footer-Interview-state" v-show="list.InterviewShow" @click="InterviewFeedback">填写面试反馈</span>
               </li>
               <li class="feedback-list-liHide" v-show="LIHide">当前状态下没有外教记录</li>
             </ul>
           </el-tab-pane>
           <el-tab-pane label="新简历" name="feedback">
             <ul class="feedback-list">
               <li class="feedback-list-li" v-for="(list,index) in feedbackArr"
               @click="goToResume(list.profileId,list.id,list.orderId,list.orderNum,list.state)">
                 <img :src="list.url" alt="" class="feedback-li-img">
                 <span class="feedback-li-name">{{list.name}}</span>
                 <el-rate
                    v-model="list.number"
                    disabled>
                  </el-rate>
                <span class="feedback-li-nationality" v-show="list.nationalityHidden">{{list.nat}}</span>
                <span class="feedback-li-age" v-show="list.ageHidden">{{list.age}}岁</span>
                <span class="feedback-li-state">{{list.state}}</span>
                 <span class="feedback-li-time">{{list.time}}</span>
                 <span class="footer-Interview-state" v-show="list.InterviewShow" @click="InterviewFeedback">填写面试反馈</span>
               </li>
               <li class="feedback-list-liHide" v-show="LIHide">当前状态下没有外教记录</li>
             </ul>
           </el-tab-pane>
           <el-tab-pane label="面试中" name="Interview">
             <ul class="feedback-list">
               <li class="feedback-list-li" v-for="(list,index) in feedbackArr"
               @click="goToResume(list.profileId,list.id,list.orderId,list.orderNum,list.state)">
                 <img :src="list.url" alt="" class="feedback-li-img">
                 <span class="feedback-li-name">{{list.name}}</span>
                 <el-rate
                    v-model="list.number"
                    disabled>
                  </el-rate>
                <span class="feedback-li-nationality" v-show="list.nationalityHidden">{{list.nat}}</span>
                <span class="feedback-li-age" v-show="list.ageHidden">{{list.age}}岁</span>
                <span class="feedback-li-state">{{list.state}}</span>
                 <span class="feedback-li-time">{{list.time}}</span>
                 <span class="footer-Interview-state" v-show="list.InterviewShow" @click="InterviewFeedback">填写面试反馈</span>
               </li>
               <li class="feedback-list-liHide" v-show="LIHide">当前状态下没有外教记录</li>
             </ul>
           </el-tab-pane>
           <el-tab-pane label="已通过" name="adopt">
             <ul class="feedback-list">
               <li class="feedback-list-li" v-for="(list,index) in feedbackArr"
               @click="goToResume(list.profileId,list.id,list.orderId,list.orderNum,list.state)">
                 <img :src="list.url" alt="" class="feedback-li-img">
                 <span class="feedback-li-name">{{list.name}}</span>
                 <el-rate
                    v-model="list.number"
                    disabled>
                  </el-rate>
                <span class="feedback-li-nationality" v-show="list.nationalityHidden">{{list.nat}}</span>
                <span class="feedback-li-age" v-show="list.ageHidden">{{list.age}}岁</span>
                <span class="feedback-li-state">{{list.state}}</span>
                 <span class="feedback-li-time">{{list.time}}</span>
                 <span class="footer-Interview-state" v-show="list.InterviewShow" @click="InterviewFeedback">填写面试反馈</span>
               </li>
               <li class="feedback-list-liHide" v-show="LIHide">当前状态下没有外教记录</li>
             </ul>
           </el-tab-pane>
           <el-tab-pane label="已拒绝" name="refuse">
             <ul class="feedback-list">
               <li class="feedback-list-li" v-for="(list,index) in feedbackArr"
               @click="goToResume(list.profileId,list.id,list.orderId,list.orderNum,list.state)">
                 <img :src="list.url" alt="" class="feedback-li-img">
                 <span class="feedback-li-name">{{list.name}}</span>
                 <el-rate
                    v-model="list.number"
                    disabled>
                  </el-rate>
                  <span class="feedback-li-nationality" v-show="list.nationalityHidden">{{list.nat}}</span>
                  <span class="feedback-li-age" v-show="list.ageHidden">{{list.age}}岁</span>
                  <span class="feedback-li-state">{{list.state}}</span>
                 <span class="feedback-li-time">{{list.time}}</span>
                 <span class="footer-Interview-state" v-show="list.InterviewShow" @click="InterviewFeedback">填写面试反馈</span>
               </li>
               <li class="feedback-list-liHide" v-show="LIHide">当前状态下没有外教记录</li>
             </ul>
           </el-tab-pane>
           <el-tab-pane label="已录用" name="Employment">
             <ul class="feedback-list">
               <li class="feedback-list-li" v-for="(list,index) in feedbackArr"
               @click="goToResume(list.profileId,list.id,list.orderId,list.orderNum,list.state)">
                 <img :src="list.url" alt="" class="feedback-li-img">
                 <span class="feedback-li-name">{{list.name}}</span>
                 <el-rate
                    v-model="list.number"
                    disabled>
                  </el-rate>
                <span class="feedback-li-nationality" v-show="list.nationalityHidden">{{list.nat}}</span>
                <span class="feedback-li-age" v-show="list.ageHidden">{{list.age}}岁</span>
                <span class="feedback-li-state">{{list.state}}</span>
                 <span class="feedback-li-time">{{list.time}}</span>
                 <span class="footer-Interview-state" v-show="list.InterviewShow" @click="InterviewFeedback">填写面试反馈</span>
               </li>
               <li class="feedback-list-liHide" v-show="LIHide">当前状态下没有外教记录</li>
             </ul>
           </el-tab-pane>
           <el-tab-pane label="已关闭" name="Close">
             <ul class="feedback-list">
               <li class="feedback-list-li" v-for="(list,index) in feedbackArr"
               @click="goToResume(list.profileId,list.id,list.orderId,list.orderNum,list.state)">
                 <img :src="list.url" alt="" class="feedback-li-img">
                 <span class="feedback-li-name">{{list.name}}</span>
                 <el-rate
                    v-model="list.number"
                    disabled>
                  </el-rate>
                <span class="feedback-li-nationality" v-show="list.nationalityHidden">{{list.nat}}</span>
                <span class="feedback-li-age" v-show="list.ageHidden">{{list.age}}岁</span>
                <span class="feedback-li-state">{{list.state}}</span>
                 <span class="feedback-li-time">{{list.time}}</span>
                 <span class="footer-Interview-state" v-show="list.InterviewShow" @click="InterviewFeedback">填写面试反馈</span>
               </li>
               <li class="feedback-list-liHide" v-show="LIHide">当前状态下没有外教记录</li>
             </ul>
           </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="mask" v-show="MaskShow">
      <div class="mask-feedback-Interview">
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
              <span class="mask-feedback-Reason">{{this.Reason}}</span>
              <textarea name="name" rows="8" cols="80" class="mask-feedback-text" :placeholder="this.placeholder" v-model="Interview"></textarea>
            </div>
            <div class="Button"></div>
          </div>
          <div class="mask-feedback-submit" @click="successFooter">确认反馈</div>
        </div>
      </div>
    </div>
    <div class="loading" v-show="LodingShow">
      <span>加载中...</span>
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
  const access_token = $.cookie('B-access_token');
  const BcustomerId =  $.cookie('B-customerId');
  const loginSuccess = $.cookie('loginSuccess');

export default {
  created (){
      this.$http.get(localhost+'/cc/order/b/list?access_token='+access_token+'&customerId='+BcustomerId+'&pageIndex='+this.currentPage+'&pageSize='+this.pageSize+'&status='+this.Num).then((response) =>{
        this.Created(response);
      })
  },
  data (){
    return {
      NumberArray:[],
      nationalityHidden:true,
      ageHidden:false,
      LIHide:false,
      LodingShow:false,
      getQueryStr:'',
      staticactive:'whole',
      ImgHide:true,
      StateTabs:true,
      value5: 3.7,
      //新增
      LIHide:false,
      feedbackSuccess:false,
      feedbackInterview:true,
      id:'',
      profileId:'',
      userOrdId:'',
      successState:'',
      ClickState:'',
      YesFlag:false,
      NoFlag:false,
      Prompt:false,
      Prompt1:false,
      userSize:1,
      userNumber:5,
      orderId:'',
      orderNumber:'',
      state:'1007',
      ExhibitionOpen:true,
      ExhibitionHide:false,
      ExhibitionMainHide:false,
      activeNames:'whole',
      feedbackArr:[],
      InterviewShow:false,
      MaskShow:false,
      FeedbackContent:false,
      feedbackTitle:'面试反馈',
      headeImg:'',
      userName:'',
      Reason:'',
      placeholder:'',
      Interview:'',
      //--------分割线
      TotalHide:false,
      balance:'',
      TotalArray:[],
      TotalNumber:'30',
      generateTime:'',
      stauts:'',
      Manager:'',
      demandList:'',
      Num:0,
      flag:false,
      TabShow:true,
      activeName: 'second',
      informationShow:true,
      benefitsShow:true,
      msg:'',
      Index1:false,
      Untreated:'',
      In_Hide2:false,
      In_Hide3:false,
      In_Hide4:false,
      GETTIME:'',
      TIME:'',
      People:'',
      manager:'',
      None:false,
      In_Hide:false,
      ListShow:true,
      UlLists:[],
      CustBasicInfoImperfect:true,
      paging:true,
      pageSize_:5,
      pageSizes:5,
      current_page:1,
      pageSize:5,
      currentPage:1,
      positionTotalCount:1,
      positionTotalCounts:1,
      currentPage3: 1,
      Exh:false,
      dataList:'',
      SHOW1:false,
      SHOW2:true,
      SHOW3:true,
      SHOW4:true,
      SHOW5:true,
      SHOW6:true,
      SHOW7:true,
      SHOW8:true,
      SHOW9:true,
      SHOW10:true,
      SHOW11:true,
      SHOW12:true,
      SHOW13:true,
      SHOW14:true,
      SHOW15:true,
      SHOW16:true,
      SHOW17:true,
      SHOW18:true,
      SHOW19:true,
      SHOW20:true,
      SHOW21:true,
      SHOW22:true,
      SHOW23:true,
      SHOW24:true,
      SHOW25:true,
      SHOW26:true,
      SHOW27:true,
      SHOW28:true,
      SHOW29:true,
    }
  },
  methods :{
    //滑动
    touchMove (event){
      if($(window).scrollTop() + $(window).height()+1 >= $(document).height()){
        this.LodingShow = true;
        //判断是外面的下拉刷新

        if(this.Exh == false && this.TabShow == true){
          this.currentPage3 = this.currentPage3+1;
          this.$http.get(localhost+'/cc/order/b/list?access_token='+access_token+'&customerId='+BcustomerId+'&pageIndex='+this.currentPage3+'&pageSize='+5+'&status='+this.Num).then((response) =>{
            this.LodingShow = false;
            if(['NoPositionInfo','NoRequestInfo','NoOrderInfo'].indexOf(response.body.resultObj.error_msg) != -1){
              return false
            }else {
              this.dropDown(response);
            };
          });
        }else {
          //判断是里面的下拉加载
          this.userSize = this.userSize+1;
          this.publicResumeList();
        };
      }
    },
    //公共方法
    publicResumeList (){
      if(this.getQueryStr == null){

       }else {
        this.activeNames = getQueryString('active');
        if(this.getQueryStr == 'whole'){
          this.state = '1007';
        }else if (this.getQueryStr == 'feedback') {
          this.state = '1001';
        }else if (this.getQueryStr == 'Interview') {
          this.state = '1002';
        }else if (this.getQueryStr == 'adopt') {
          this.state = '1003';
        }else if (this.getQueryStr == 'refuse') {
          this.state = '1004';
        }else if (this.getQueryStr == 'Employment') {
          this.state = '1005';
        }else if (this.getQueryStr == 'Close') {
          this.state = '1006';
        };
      };
      this.$http.get(localhost+'/cc/order/talent/list?access_token='+access_token+'&orderId='+this.Position_ID+'&pageSize='+this.userNumber+'&pageIndex='+this.userSize+'&optStatus='+this.state).then((response) =>{
        console.log(response.body)
         this.LodingShow = false; // 下拉加载隐藏
         this.positionTotalCounts = response.body.resultObj.totalNumber;
         this.NumberArray = response.body.resultObj.candidateProfileList;
         //如果 当前状态下没有数据，就显示没有数据这句话；
         if(this.positionTotalCounts === 0){
           this.LIHide = true;
          //判断如果没有数据了，就不往下执行
           this.LodingShow = false;
           return false;
         }else {
           this.LIHide = false;
         };
         for(let i = 0;i<this.NumberArray.length;i++){
           if(this.NumberArray[i].age === ''){
             this.NumberArray[i].ageHidden = false;
           }else {
              this.NumberArray[i].ageHidden = true;
           };
           if(this.NumberArray[i].nationality === ''){
             this.NumberArray[i].nationalityHidden = false;
           }else {
             this.NumberArray[i].nationalityHidden = true;
           };
           if(this.NumberArray[i].candidateOrder.opt_status == '1001'){
             this.NumberArray[i].candidateOrder.opt_status = '新简历';
           };
           if(this.NumberArray[i].candidateOrder.opt_status == '1002'){
             this.NumberArray[i].candidateOrder.opt_status = '面试中';
           };
           if(this.NumberArray[i].candidateOrder.opt_status == '1003'){
             this.NumberArray[i].candidateOrder.opt_status = '已通过';
           };
           if(this.NumberArray[i].candidateOrder.opt_status == '1004'){
             this.NumberArray[i].candidateOrder.opt_status = '已拒绝';
           };
           if(this.NumberArray[i].candidateOrder.opt_status == '1005'){
             this.NumberArray[i].candidateOrder.opt_status = '已录用';
           };
           if(this.NumberArray[i].candidateOrder.opt_status == '1006'){
             this.NumberArray[i].candidateOrder.opt_status = '已关闭';
           };
           if(this.NumberArray[i].candidateOrder.opt_status == '1007'){
             this.NumberArray[i].candidateOrder.opt_status = '全部';
           };
           if(this.NumberArray[i].candidateOrder.opt_status == '面试中'){
             this.InterviewShow = true;
           }else {
             this.InterviewShow = false;
           };
           this.feedbackArr.push({
             url:this.NumberArray[i].applicationCareerChinaInfo.headImgURL,
             name:this.NumberArray[i].firstName,
             nat:this.NumberArray[i].nationality,
             age:this.NumberArray[i].age,
             number:this.NumberArray[i].applicationCareerChinaInfo.abilityScoreAverage,
             time:this.NumberArray[i].updateTimeStr,
             state:this.NumberArray[i].candidateOrder.opt_status,
             id:this.NumberArray[i].candidateOrder.id,
             profileId:this.NumberArray[i].applicationCareerChinaInfo.profileId,
             nationalityHidden:this.NumberArray[i].nationalityHidden,
             ageHidden:this.NumberArray[i].ageHidden,
             orderId:this.orderId,
             orderNum:this.orderNum,
             InterviewShow:this.InterviewShow
           });
         };
      })
    },
    //后退
    BackOff (){
      //订单后退
      if(this.TabShow == true && this.Exh == false){
        location.href="/module/Login_home.html";
      }
      //详情后退
      if((this.TabShow == false && this.Exh == true) && (this.ExhibitionMainHide == false && this.StateTabs == true)){
        location.href = "/module/Login_order.html";
      };
      //订单信息 后退 -》人才指派
      if(this.ExhibitionMainHide == true && this.StateTabs == false){
        this.TabShow = false;
        this.Exh = true;
        this.ExhibitionMainHide = false;
        this.StateTabs = true;
        this.ImgHide = true;
      };
    },
    //进入详情
    GoToResume (){
      // location.href="/module/M_resume.html?id="+this.Position_ID
      this.ExhibitionMainHide = true;
      this.StateTabs = false;
      this.ImgHide = false;
    },
    handleClicks (tab){
      this.feedbackArr = [];
      this.userSize = 1;
      this.getQueryStr = null;
      if(tab.index === '0'){
        this.state = '1007';
        this.staticactive = 'whole';
      };
      if(tab.index === '1'){
        this.state = '1001';
        this.staticactive = 'feedback';
      };
      if(tab.index === '2'){
        this.state = '1002';
        this.staticactive = 'Interview';
      };
      if(tab.index === '3'){
        this.state = '1003';
        this.staticactive = 'adopt';
      };
      if(tab.index === '4'){
        this.state = '1004';
        this.staticactive = 'refuse';
      };
      if(tab.index === '5'){
        this.state = '1005';
        this.staticactive = 'Employment';
      };
      if(tab.index === '6'){
        this.state = '1006';
        this.staticactive = 'Close';
      };
      this.publicResumeList();
    },
    //首页状态切换
    handleClick(tab) {
      let time = new Date().getTime();
      this.TotalArray = [];
      this.UlLists = [];
      if(tab.index === '3'){
        //all
        this.Num = 3;
        this.$http.get(localhost+'/cc/order/b/list?access_token='+access_token+'&customerId='+BcustomerId+'&pageIndex='+this.currentPage+'&pageSize='+this.pageSize+'&status='+this.Num+'&time='+time).then((response) =>{
          this.Created(response);
        });
      }else if (tab.index === '0') {
        //处理
        this.Num = 0;
        this.$http.get(localhost+'/cc/order/b/list?access_token='+access_token+'&customerId='+BcustomerId+'&pageIndex='+this.currentPage+'&pageSize='+this.pageSize+'&status='+this.Num+'&time='+time).then((response) =>{
          this.Created(response);
        });
      }else if (tab.index === '1') {
        //完成
        this.Num = 1;
        this.$http.get(localhost+'/cc/order/b/list?access_token='+access_token+'&customerId='+BcustomerId+'&pageIndex='+this.currentPage+'&pageSize='+this.pageSize+'&status='+this.Num+'&time='+time).then((response) =>{
          this.Created(response);
        });
      }else if (tab.index === '2') {
        //关闭
        this.Num = 2;
        this.$http.get(localhost+'/cc/order/b/list?access_token='+access_token+'&customerId='+BcustomerId+'&pageIndex='+this.currentPage+'&pageSize='+this.pageSize+'&status='+this.Num+'&time='+time).then((response) =>{
          this.Created(response);
        });
      };
    },
    //进入页面展示
    Created (response){
        this.feedbackArr = [];
        this.getQueryStr = getQueryString('active');
        $('body').css('min-height',$(window).height());
        $('body').css('background','#f7f7fc');

        let orderList = response.body.resultObj.orderList;
        this.positionTotalCount = response.body.resultObj.orderSize;
        this.CustBasicInfoImperfect = response.body.NoPositionInfo;

        if(getQueryString('profileId') === null && getQueryString('orderId') === null && getQueryString('orderNum') === null && getQueryString('active') === null){
            if(response.body.orderLength === undefined){
              this.positionTotalCount = 0;
            }else {
              this.positionTotalCount = response.body.resultObj.orderSize;
            };
            this.CustBasicInfoImperfect = response.body.NoPositionInfo;
            if(this.Num === 3 && response.body.resultObj.error_msg == 'NoPositionInfo'){
              //没有岗位信息
               this.In_Hide = true;
               this.In_Hide2 = false;
               this.In_Hide3 = false;
               this.In_Hide4 = false;
            }else if(this.Num === 3 && response.body.resultObj.error_msg == 'NoRequestInfo'){
              //没有需求
               this.In_Hide2 = true;
               this.In_Hide = false;
               this.In_Hide3 = false;
               this.In_Hide4 = false;
            }else if(this.Num === 3 && response.body.resultObj.error_msg == 'NoOrderInfo') {
              //没有订单
               this.In_Hide3 = true;
               this.In_Hide2 = false;
               this.In_Hide = false;
               this.In_Hide4 = false;
            }else if ((['NoPositionInfo','NoRequestInfo','NoOrderInfo'].indexOf(response.body.resultObj.error_msg) != -1) && (this.Num === 0 || this.Num === 1 || this.Num ===2)) {
                this.In_Hide4 = true;
                this.In_Hide3 = false;
                this.In_Hide2 = false;
                this.In_Hide = false;
            }else {
              this.In_Hide3 = false;
              this.In_Hide2 = false;
              this.In_Hide = false;
              this.In_Hide4 = false;
              this.PostMain_show = false;//填写信息
              this.List_ = true;//展示信息
              this.In_Hide = false;
              var Array_List = orderList;
              for(var j = 0;j < Array_List.length;j++){
                let position_Data = Array_List[j].positionEntity;
                //性别
                if(position_Data.gender == 0){
                  position_Data.gender = '男'
                }else if(position_Data.gender == 1){
                  position_Data.gender = '女'
                }else if(position_Data.gender == 2){
                  position_Data.gender = '不限'
                }
                //学历学位要求
                if(position_Data.educationBg == 0){
                  position_Data.educationBg = '学士及以上';
                }else if (position_Data.educationBg == 1) {
                  position_Data.educationBg = '硕士及以上';
                }else if (position_Data.educationBg == 2) {
                position_Data.educationBg = '博士及以上';
                }else if (position_Data.educationBg == 3) {
                position_Data.educationBg = '不限';
                }
                //国籍要求
                var NAT = position_Data.nationalityArr;
                for(let i = 0;i<NAT.length;i++){
                  if(NAT[i] == 0){
                    NAT[i] = '美国';
                  }else if (NAT[i] == 1) {
                    NAT[i] = '英国';
                  }else if (NAT[i] == 2) {
                    NAT[i] = '加拿大';
                  }else if (NAT[i] == 3) {
                    NAT[i] = '澳大利亚';
                  }else if (NAT[i] == 4) {
                    NAT[i] = '新西兰';
                  }else if (NAT[i] == 5) {
                    NAT[i] = '爱尔兰';
                  }else if (NAT[i] == 6) {
                    NAT[i] = '南非';
                  }else if (NAT[i] == 7) {
                    NAT[i] = '英/美/澳/加华裔ABC';
                  }else if (NAT[i] == 8) {
                    NAT[i] = '无国籍要求';
                  }
                }
                //年龄
                if(position_Data.ageStage == 0){
                  position_Data.ageStage = '35岁以下';
                }else if (position_Data.ageStage == 1) {
                  position_Data.ageStage = '50岁以下';
                }else if (position_Data.ageStage == 2) {
                  position_Data.ageStage = '60岁以下';
                }else if (position_Data.ageStage == 3) {
                  position_Data.ageStage = '不限';
                };
                //专业要求
                var MAJ = position_Data.majorArr;
                if(!MAJ){
                  for(let i = 0;i<MAJ.length;i++){
                    if(MAJ[i] == 0){
                      MAJ[i] = '语言学/文学、历史';
                    }else if (MAJ[i] == 1) {
                      MAJ[i] = '商务';
                    }else if (MAJ[i] == 2) {
                      MAJ[i] = '数学';
                    }else if (MAJ[i] == 3) {
                      MAJ[i] = '物理';
                    }else if (MAJ[i] == 4) {
                      MAJ[i] = '化学';
                    }else if (MAJ[i] == 5) {
                      MAJ[i] = '艺术';
                    }else if (MAJ[i] == 6) {
                      MAJ[i] = '可教授AP、IB课程';
                    }else if (MAJ[i] == 7) {
                      MAJ[i] = '无专业要求';
                    }
                  }
                }
                //工作地点
                var SAL = position_Data.salary_types;
                if(!SAL){

                  }else {
                    for(let i = 0;i<SAL.length;i++){
                      if(SAL[i] == 'grosspay'){
                        SAL[i] = '税前'
                      }else if (SAL[i] == 'netpay') {
                        SAL[i] = '税后'
                      }
                    }
                  };
              }
              for(var i = 0;i < Array_List.length;i++){
                let position_Data = Array_List[i].positionEntity;
                var demand = Array_List[i].demandEntity;
                // var ArrList = Array_List[i].orderStauts;
                var profileArr = Array_List[i].candidateProfiles;
                if(profileArr.length <=7){
                  this.TotalHide = false;
                }else {
                  this.TotalHide = true;
                };
                // let temparr = [];
                // if(profileArr.length === 0){
                //
                // }else {
                //   for(let k = 0; k < profileArr.length;k++){
                //     var application = profileArr[k].applicationCareerChinaInfo;
                //     temparr.push({
                //       url:application.headImgURL,
                //       profileId:profileArr[k].candidateOrder.id,
                //       TitleName:profileArr[k].firstName
                //     });
                //     temparr.splice(7,1);
                //   };
                // }
                // if(Array_List[i].feedbackTeacherTotalNum === 0){
                //   this.ImgList = false;
                // }else {
                //   this.ImgList = true;
                // };

                this.orderId = Array_List[i].id;
                this.orderNumber = Array_List[i].orderNumber;
                // this.TotalArray.push(temparr);
                if(Array_List[i].status == '0'){
                  Array_List[i].status = '处理中';
                  this.Untreated = 'blue';
                }else if (Array_List[i].status == '1') {
                  Array_List[i].status = '已完成';
                  this.Untreated = 'red';
                }else if (Array_List[i].status == '2') {
                  Array_List[i].status = '被关闭';
                };
                this.UlLists.push({
                  people:demand.needNum,
                  time: demand.expiryDate,
                  // manager:Array_List[i].emp.eMPLOYEE_NAME,
                  Time1_:demand.addTimeStr,
                  Time2_:Array_List[i].addTimeStr,
                  name: position_Data.positionName,
                  sex:  position_Data.gender,
                  nat:  position_Data.nationalityArr.join(','),
                  edu:  position_Data.educationBg,
                  age:  position_Data.ageStage,
                  maj:  position_Data.majorArr.join(','),
                  Id:   Array_List[i].id,
                  status: Array_List[i].status,
                  recommendedTeacherTotalNum:Array_List[i].recommendedTotalNum,
                  feedbackTeacherTotalNum:Array_List[i].feedbackTotalNum,
                  balance :profileArr.length - 7,
                  TotalHide:this.TotalHide,
                  orderId:Array_List[i].id,
                  orderNum:Array_List[i].token,
                  ImgList:this.ImgList,
                });
              }
            }
        }else {
          this.Details(getQueryString('orderId'),getQueryString('profileId'),getQueryString('orderNum'));
        };
    },
    dropDown(response){
        this.feedbackArr = [];
        let orderList = response.body.resultObj.orderList;
        this.positionTotalCount = response.body.resultObj.orderSize;
        var Array_List = orderList;
        for(var j = 0;j < Array_List.length;j++){
          let position_Data = Array_List[j].positionEntity;
          //性别
          if(position_Data.gender == 0){
            position_Data.gender = '男'
          }else if(position_Data.gender == 1){
            position_Data.gender = '女'
          }else if(position_Data.gender == 2){
            position_Data.gender = '不限'
          }
          //学历学位要求
          if(position_Data.educationBg == 0){
            position_Data.educationBg = '学士及以上';
          }else if (position_Data.educationBg == 1) {
            position_Data.educationBg = '硕士及以上';
          }else if (position_Data.educationBg == 2) {
          position_Data.educationBg = '博士及以上';
          }else if (position_Data.educationBg == 3) {
          position_Data.educationBg = '不限';
          }
          //国籍要求
          var NAT = position_Data.nationalityArr;
          for(let i = 0;i<NAT.length;i++){
            if(NAT[i] == 0){
              NAT[i] = '美国';
            }else if (NAT[i] == 1) {
              NAT[i] = '英国';
            }else if (NAT[i] == 2) {
              NAT[i] = '加拿大';
            }else if (NAT[i] == 3) {
              NAT[i] = '澳大利亚';
            }else if (NAT[i] == 4) {
              NAT[i] = '新西兰';
            }else if (NAT[i] == 5) {
              NAT[i] = '爱尔兰';
            }else if (NAT[i] == 6) {
              NAT[i] = '南非';
            }else if (NAT[i] == 7) {
              NAT[i] = '英/美/澳/加华裔ABC';
            }else if (NAT[i] == 8) {
              NAT[i] = '无国籍要求';
            }
          }
          //年龄
          if(position_Data.ageStage == 0){
            position_Data.ageStage = '35岁以下';
          }else if (position_Data.ageStage == 1) {
            position_Data.ageStage = '50岁以下';
          }else if (position_Data.ageStage == 2) {
            position_Data.ageStage = '60岁以下';
          }else if (position_Data.ageStage == 3) {
            position_Data.ageStage = '不限';
          };
          //专业要求
          var MAJ = position_Data.majorArr;
          if(!MAJ){
            for(let i = 0;i<MAJ.length;i++){
              if(MAJ[i] == 0){
                MAJ[i] = '语言学/文学、历史';
              }else if (MAJ[i] == 1) {
                MAJ[i] = '商务';
              }else if (MAJ[i] == 2) {
                MAJ[i] = '数学';
              }else if (MAJ[i] == 3) {
                MAJ[i] = '物理';
              }else if (MAJ[i] == 4) {
                MAJ[i] = '化学';
              }else if (MAJ[i] == 5) {
                MAJ[i] = '艺术';
              }else if (MAJ[i] == 6) {
                MAJ[i] = '可教授AP、IB课程';
              }else if (MAJ[i] == 7) {
                MAJ[i] = '无专业要求';
              }
            }
          }
          //工作地点
          var SAL = position_Data.salary_types;
          if(!SAL){

            }else {
              for(let i = 0;i<SAL.length;i++){
                if(SAL[i] == 'grosspay'){
                  SAL[i] = '税前'
                }else if (SAL[i] == 'netpay') {
                  SAL[i] = '税后'
                }
              }
            };
        }
        for(var i = 0;i < Array_List.length;i++){
          let position_Data = Array_List[i].positionEntity;
          var demand = Array_List[i].demandEntity;
          // var ArrList = Array_List[i].orderStauts;
          var profileArr = Array_List[i].candidateProfiles;
          if(profileArr.length <=7){
            this.TotalHide = false;
          }else {
            this.TotalHide = true;
          };
          let temparr = [];
          if(profileArr.length === 0){

          }else {
            for(let k = 0; k < profileArr.length;k++){
              var application = profileArr[k].applicationCareerChinaInfo;
              temparr.push({
                url:application.headImgURL,
                profileId:application.profileId,
                TitleName:profileArr[k].firstName
              });
              temparr.splice(7,1);
            };
          }
          if(Array_List[i].feedbackTeacherTotalNum === 0){
            this.ImgList = false;
          }else {
            this.ImgList = true;
          };

          this.orderId = Array_List[i].id;
          this.orderNumber = Array_List[i].orderNumber;
          this.TotalArray.push(temparr);
          if(Array_List[i].status == '0'){
            Array_List[i].status = '处理中';
            this.Untreated = 'blue';
          }else if (Array_List[i].status == '1') {
            Array_List[i].status = '已完成';
            this.Untreated = 'red';
          }else if (Array_List[i].status == '2') {
            Array_List[i].status = '被关闭';
          };
          this.UlLists.push({
            people:demand.needNum,
            time: demand.expiryDate,
            // manager:Array_List[i].emp.eMPLOYEE_NAME,
            Time1_:demand.addTimeStr,
            Time2_:Array_List[i].addTimeStr,
            name: position_Data.positionName,
            sex:  position_Data.gender,
            nat:  position_Data.nationalityArr.join(','),
            edu:  position_Data.educationBg,
            age:  position_Data.ageStage,
            maj:  position_Data.majorArr.join(','),
            Id:   Array_List[i].id,
            status: Array_List[i].status,
            recommendedTeacherTotalNum:Array_List[i].recommendedTotalNum,
            feedbackTeacherTotalNum:Array_List[i].feedbackTotalNum,
            balance :profileArr.length - 7,
            TotalHide:this.TotalHide,
            orderId:Array_List[i].id,
            orderNum:Array_List[i].token,
            ImgList:this.ImgList,
          });
        }
    },
    //分页
    handleSizeChange(val) {
       this.pageSize = val;
       this.currentPage = this.current_page;
       this.$http.get(Localhost+'/cc/to/b/order/list.action?'+'customerId'+'='+userId+'&'+'uuid'+'='+uuid+'&'+'currentPage'+'='+this.currentPage+'&'+'pageSize'+'='+this.pageSize+'&'+'phoneNumber'+'='+PhoneId+'&'+'orderStatus'+'='+this.Num).then((response) =>{
           this.Created(response);
       },(response) =>{

       });
     },
    //分页
    handleCurrentChange(val) {
      console.log(val)
       this.currentPage = val;
       this.$http.get(Localhost+'/cc/to/b/order/list.action?'+'customerId'+'='+userId+'&'+'uuid'+'='+uuid+'&'+'currentPage'+'='+this.currentPage+'&'+'pageSize'+'='+this.pageSize+'&'+'phoneNumber'+'='+PhoneId+'&'+'orderStatus'+'='+this.Num).then((response) =>{
          this.Created(response);
       },(response) =>{

       });
     },
    //点击进入详情
    Details (id,orderId,orderNum){
       this.TabShow = false;
       this.Index1 = true;
       this.paging = false;
       this.List_ = false;
       this.Exh = true;
       this.ListShow = false;
       this.Position_ID = id;
       this.orderId = id;
       this.orderNum = orderNum;
       //---绑定页面数据
      this.$http.get(localhost+'/cc/order/b/detail?access_token='+access_token+'&id='+id).then((response) =>{
        this.dataList = response.body.resultObj.orderInfo.positionEntity;
        this.generateTime = response.body.resultObj.orderInfo;
        this.demandList = response.body.resultObj.orderInfo.demandEntity;
        console.log(this.demandList)
        this.stauts = response.body.resultObj.orderInfo.status;
        if(this.stauts === 0){
          this.stauts = '处理中';
          $('.BGcolor').addClass('status0');
        }else if (this.stauts === 1) {
          this.stauts = '已完成';
          $('.BGcolor').removeClass('status0');
          $('.BGcolor').removeClass('status2');
          $('.BGcolor').addClass('status1');
        }else if (this.stauts === 2) {
          this.stauts = '被关闭';
          $('.BGcolor').removeClass('status1');
          $('.BGcolor').removeClass('status0');
          $('.BGcolor').addClass('status2');
        }
        //性别要求
        if(this.dataList.gender == 0){
          this.dataList.gender = '男'
        }else if(this.dataList.gender == 1){
          this.dataList.gender = '女'
        }else if(this.dataList.gender == 2){
          this.dataList.gender = '不限'
        };
        //教育背景
        if(this.dataList.educationBg == 0){
          this.dataList.educationBg ='学士及以上';
        }else if(this.dataList.educationBg == 1) {
          this.dataList.educationBg ='硕士及以上';
        }else if(this.dataList.educationBg == 2){
          this.dataList.educationBg ='博士及以上';
        }else if(this.dataList.educationBg == 3){
          this.dataList.educationBg ='不限';
        };
        //专业要求
        for(i = 0;i<this.dataList.majorArr.length;i++){
            if(this.dataList.majorArr[i] == 1){
              this.dataList.majorArr[i] = '艺体类';
            }else if (this.dataList.majorArr[i] == 2) {
              this.dataList.majorArr[i] = '自然科学类';
            }else if (this.dataList.majorArr[i] == 3) {
              this.dataList.majorArr[i] = '社会科学类';
            }else if (this.dataList.majorArr[i] == 4) {
              this.dataList.majorArr[i] = '教学管理类';
            }else if (this.dataList.majorArr[i] == 5) {
              this.dataList.majorArr[i] = '运营管理类';
            }else if (this.dataList.majorArr[i] == 6) {
              this.dataList.majorArr[i] = '无专业要求';
            }else if (this.dataList.majorArr[i] == 7) {
              this.dataList.majorArr[i] = '语言类';
            }
          }
        this.dataList.majorArr = this.dataList.majorArr.join(',');
        //国籍要求
        for(i = 0;i<this.dataList.nationalityArr.length;i++){
          if(this.dataList.nationalityArr[i] == 0){
            this.dataList.nationalityArr[i] = '美国';
          }else if (this.dataList.nationalityArr[i] == 1) {
            this.dataList.nationalityArr[i] = '英国';
          }else if (this.dataList.nationalityArr[i] == 2) {
            this.dataList.nationalityArr[i] = '加拿大';
          }else if (this.dataList.nationalityArr[i] == 3) {
            this.dataList.nationalityArr[i] = '澳大利亚';
          }else if (this.dataList.nationalityArr[i] == 4) {
            this.dataList.nationalityArr[i] = '新西兰';
          }else if (this.dataList.nationalityArr[i] == 5) {
            this.dataList.nationalityArr[i] = '爱尔兰';
          }else if (this.dataList.nationalityArr[i] == 6) {
            this.dataList.nationalityArr[i] = '南非';
          }else if (this.dataList.nationalityArr[i] == 8) {
            this.dataList.nationalityArr[i] = '无国籍要求';
          }
        }
        this.dataList.nationalityArr = this.dataList.nationalityArr.join(',');
        //年龄要求
        if(this.dataList.ageStage == 1){
          this.dataList.ageStage ='35岁以下';
        }else if(this.dataList.ageStage == 2) {
          this.dataList.ageStage ='50岁以下';
        }else if(this.dataList.ageStage == 3){
          this.dataList.ageStage ='60岁以下';
        }else if(this.dataList.ageStage == 4){
          this.dataList.ageStage ='不限';
        }
        //教学证书相关要求
        if(this.dataList.certificate == ''){
            this.DetailsShow1 = false;
        }else {
            this.DetailsShow1 = true;
        }
        //资质及其他要求描述
        if(this.dataList.qualityDesc == ''){
          this.DetailsShow2 = false;
        }else {
          this.DetailsShow2 = true;
        };
        //JD岗位要求    27
        if(this.dataList.jobRequire == ''){
          this.DetailsShow3 = false;
        }else {
          this.DetailsShow3 = true;
        };
        //JD工作职责    28
        if(this.dataList.jobDesc == ''){
          this.DetailsShow4 = false;
        }else {
          this.DetailsShow4 = true;
        };
        //JD薪酬福利    29
        if(this.dataList.jobBenefit == ''){
          this.DetailsShow5 = false;
        }else {
          this.DetailsShow5 = true;
        };
        //课程信息--->展示和隐藏
        if(this.dataList.stuAgeStageArr === null && this.dataList.classScale === null){
          this.Demand_Flag = true;
          this.CourseShowHide = false;
          this.CourseFontHide = true;
        }else{
          this.Demand_Flag = false;
          this.CourseShowHide = true;
          this.CourseFontHide = false;
          //学生年龄段
          for(var i = 0;i<this.dataList.stuAgeStageArr.length;i++){
            if(this.dataList.stuAgeStageArr[i] == '0'){
              this.dataList.stuAgeStageArr[i] ='3岁以下';
            }else if(this.dataList.stuAgeStageArr[i] == '1') {
              this.dataList.stuAgeStageArr[i] ='3-5岁';
            }else if(this.dataList.stuAgeStageArr[i] == '2'){
              this.dataList.stuAgeStageArr[i] ='6-8岁';
            }else if(this.dataList.stuAgeStageArr[i] == '3'){
              this.dataList.stuAgeStageArr[i] ='9-12岁';
            }else if(this.dataList.stuAgeStageArr[i] == '4'){
              this.dataList.stuAgeStageArr[i] ='12-15岁';
            }else if(this.dataList.stuAgeStageArr[i] == '5'){
              this.dataList.stuAgeStageArr[i] ='15-18岁';
            }else if(this.dataList.stuAgeStageArr[i] == '6'){
              this.dataList.stuAgeStageArr[i] ='18岁以上';
            }
          }
          this.dataList.stuAgeStageArr =this.dataList.stuAgeStageArr.join(',');
          //班级规模
          if(this.dataList.classScale == '1'){
            this.dataList.classScale ='5人内';
          }else if(this.dataList.classScale == '2') {
            this.dataList.classScale ='5-15人';
          }else if(this.dataList.classScale == '3'){
            this.dataList.classScale ='15-25人';
          }else if(this.dataList.classScale == '4'){
            this.dataList.classScale ='25-40人';
          }else if(this.dataList.classScale == '5'){
            this.dataList.classScale ='40人以上';
          }
          //学生英语程度
          if(this.dataList.stuEnlevelArr.length === 0){
            this.DetailsShow6 = false;
          }else {
            this.DetailsShow6 = true;
            for(var i = 0;i<this.dataList.stuEnlevelArr.length;i++){
              if(this.dataList.stuEnlevelArr[i] == '0'){
                this.dataList.stuEnlevelArr[i] ='基础 ';
              }else if(this.dataList.stuEnlevelArr[i] == '1') {
                this.dataList.stuEnlevelArr[i] ='中级 ';
              }else if(this.dataList.stuEnlevelArr[i] == '2'){
                this.dataList.stuEnlevelArr[i] ='高级';
              }
            }
            this.dataList.stuEnlevelArr =this.dataList.stuEnlevelArr.join(',');
          };
          //双语助教
          if(this.dataList.chinaAssistant === ''){
            this.DetailsShow7 = false;
          }else {
            this.DetailsShow7 = true;
              this.dataList.chinaAssistant ==1?this.dataList.chinaAssistant='有':this.dataList.chinaAssistant='无';
          };
          //有无教材
          this.dataList.textbook ==1?this.dataList.textbook='有':this.dataList.textbook='无';
          //教材名称
          if(this.dataList.textbookName === ''){
            this.DetailsShow8 = false;
          }else {
            this.dataList.textbookName =this.dataList.textbookName;
          };
          //有无教案
          if(this.dataList.teachPlan === ''){
            this.DetailsShow24 = false;
          }else {
            this.DetailsShow24 = true;
            if(this.dataList.teachPlan == 1){
              this.dataList.teachPlan = '无，需教师编写'
            }else if (this.dataList.teachPlan == 2) {
              this.dataList.teachPlan = '有教学简案'
            }else if (this.dataList.teachPlan == 3) {
              this.dataList.teachPlan = '有教学详案'
            }
          }
          //有无岗前培训及进修
          this.dataList.preJobTrain == 1?this.dataList.preJobTrain='有':this.dataList.preJobTrain='无';
          //培训及进修情况介绍:
          if(this.dataList.jobTrainDesc === ''){
            this.DetailsShow10 = false;
          }else {
            this.DetailsShow10 = true;
          };
        };
        //福利待遇--->展示和隐藏
        if(this.dataList.salaryAveRange === '' && this.dataList.salaryMoney === ''){
          this.FringeShowHide = false;
          this.FringeFontHide = true;
          this.Demand_Flag_2 = true;
        }else {
          this.FringeShowHide = true;
          this.FringeFontHide = false;
          this.Demand_Flag_2 = false;
          //税后
          if(this.dataList.salaryType == '1'){
            this.dataList.salaryType = '税前'
          }else if (this.dataList.salaryType == '2') {
            this.dataList.salaryType = '税后'
          }else if (this.dataList.salaryType == '3') {
            this.dataList.salaryType = '净收入'
          }
          //绩效考核方式  4
          if(this.dataList.assessType == 0){
            this.dataList.assessType = '月度'
          }else if(this.dataList.assessType == 1){
            this.dataList.assessType = '季度'
          }else if(this.dataList.assessType == 2){
            this.dataList.appraisalMethod = '年度'
          }else if(this.dataList.appraisalMethod == 2){
            this.dataList.appraisalMethod = '其他'
          }
          //绩效金额  5
          if(this.dataList.assessMoney === '' || this.dataList.assessMoney === null){
            this.DetailsShow11 = false;
          }else {
            this.DetailsShow11 = true;
          }
          //外教住宿  6
          this.dataList.staffStay == 1?this.dataList.staffStay = '是':this.dataList.staffStay = '否';
          //房间人数  7
          if(this.dataList.roomHoldNum === null || this.dataList.roomHoldNum === ''){
            this.DetailsShow12 = false;
          }else {
            this.DetailsShow12 = true;
            if(this.dataList.roomHoldNum == '0'){
              this.dataList.roomHoldNum = '独立住宿';
            }else if (this.dataList.roomHoldNum == '1') {
              this.dataList.roomHoldNum = '1-2人';
            }else if (this.dataList.roomHoldNum == '2') {
              this.dataList.roomHoldNum = '2人以上';
            }
          };
          //住宿补助  8
          if(this.dataList.staySubsidy === '' || this.dataList.staySubsidy === null){
            this.DetailsShow13 = false;
          }else {
            this.DetailsShow13 = true;
          };
          //机票补助 9
          if(this.dataList.airfareSubsidy === '' || this.dataList.airfareSubsidy === null){
            this.DetailsShow14 = false;
          }else {
            this.DetailsShow14 = true;
            if(this.dataList.airfareSubsidy == 0){
              this.dataList.airfareSubsidy = '无'
            }else if(this.dataList.airfareSubsidy == 1){
              this.dataList.airfareSubsidy = '有'
            }
          }
          //补贴金额  10
          if(this.dataList.airfareSubsidyMoney === '' || this.dataList.airfareSubsidyMoney === null){
            this.DetailsShow15 = false;
          }else {
            this.DetailsShow15 = true;
          }
          //购买保险类型  20
          if(this.dataList.insuranceType == 0){
            this.dataList.insuranceType = '机构已有保险可以供给外教'
          }else if(this.dataList.insuranceType == 1){
            this.dataList.insuranceType = '机构暂无保险'
          };
          //加班费
          if(this.dataList.chargeOvertime === ''){
            this.DetailsShow16 = false;
          }else {
            this.DetailsShow16 = true;
          }
          //备注
          if(this.dataList.remarks === ''){
            this.DetailsShow23 = false;
          }else {
            this.DetailsShow23 = true;
          };
        }
     });
       //---拿到简历页面
       this.publicResumeList();
     },
    goToResume (profileId,candidateOrderId,orderId,orderNum,status){
      if(status == '新简历'){
        status = '1001';
      };
      if(status == '面试中'){
        status = '1002';
      };
      if(status == '已通过'){
        status = '1003';
      };
      if(status == '已拒绝'){
        status = '1004';
      };
      if(status == '已录用'){
        status = '1005';
      };
      if(status == '已关闭'){
        status = '1006';
      };
      if(status == '全部'){
        status = '1007';
      };
       location.href='/module/M_resume.html?profileId='+profileId+'&orderId='+orderId+'&orderNum='+orderNum+'&active='+this.staticactive+'&status='+status+'&candidateOrderId='+candidateOrderId;
    },
    //遮罩层关闭
    MaskClose (){
      this.MaskShow = false;
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
    },
    successFooter (){
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
    InterviewFeedback (){

    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.Body_main
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
  .Order_body
    margin-bottom: 30px
    background:#f7f7fc
    border-radius:4px
    width:100%
    .Initialization,.Initialization2,.Initialization3
      .Initialization_p
        height:132px
        font-size:14px
        color:#898989
        text-align:center
        .P
          margin-bottom: 30px
          padding-top: 50px
        .goDemand
          color:#0083ee
          line-height:28px
          cursor:pointer
          text-decoration:underline
    .El-Tabs
      .el-tabs__header
        margin: 0 0 10px
        .el-tabs__nav-wrap.is-scrollable
          padding:0
        .el-tabs__nav-prev,.el-tabs__nav-next
          display:none
        .el-tabs__item
          padding:0
          width:90px
          color:#999
          text-align:center
          height:42px
          line-height:42px
          border:none
        .el-tabs__active-bar
          width:90px !important
          background:#3082e7
        .is-active
          color:#3082e7
        .el-tabs__nav
          width:360px
          margin:0 auto
          float:none
        .el-tabs__nav-scroll
          background:#fff
        .el-tabs__item:hover
          color:#3082e7
    .Ul_List
      .Li_
        position:relative
        margin-bottom:10px
        border-radius: 4px
        background:#fff
        .list_main
          padding-top:15px
          .list_title
            display:block
            margin:0px 12px 10px 15px
            font-size:16px
            color:#333
          .list_Span
            margin-left:15px
            font-size:16px
          .status
            display:inline-block
            width:74px
            height:25px
            border-radius:12.5px
            background:#cfbf13
            vertical-align:3px
            margin-left:10px
            text-align:center
            line-height:25px
            color:#fff
        .list_data
          .list_right
            float:right
            cursor:pointer
            margin-top:20px
            .list_p
              display:inline-block
              background:url("../../ilb/image/login/login_icon.png") no-repeat
              background-position:-29px -22px
              width:20px
              height:21px
            .list_more
              vertical-align: 6px
              margin-right: 18px
              font-size:16px
              color:#3183e7
          .data_name
            display:block
            color:#999
            font-size:14px
            width:100%
            height:26px
            line-height:26px
            padding-left:15px
            overflow: hidden/*自动隐藏文字*/
            text-overflow: ellipsis/*文字隐藏后添加省略号*/
            white-space: nowrap/*强制不换行*/
          .black
            color:#333
          .list_time
            float:right
            margin-right:30px
            font-size:12px
            color:#a1a1a1
            margin-bottom: 20px
          .list_time_
            float:right
            font-size:12px
            color:#a1a1a1
          .list_right:hover .list_p
            background-position:-29px -50px
          .list_right:hover .list_more
            color:#0a70ee
        .line
          float:left
          width:100%
          background:#e6e6e6
          height:1px
          margin:14px auto 10px
        .vertical
          margin:22px 0px
          height:13px
          width:1px
          background:#e6e6e6
          float:left
        .Recommend
          width:100%
          border-top: 1px solid #eee
          margin-top:10px
          .Total-teachers,.feedback-teachers
            float:left
            margin: 15px 31px
            .Total-font
              font-size:15px
              color:#333
            .Total-number
              font-size:18px
              color:#333
              font-weight:700
            .Total-number_
              color:#3082e7
          .feedback-teachers
            margin-right: 0
          .Left-Img
            float:right
            margin: 22px 40px 0 0
            width:9px
            height:13px
            display:inline-block
            background:url('../../ilb/image/APP/icon-b-mobile-1@2x.png') no-repeat
            background-position: -83px -6px
            background-size: 150px 110px
    .Exhibition
      position:relative
      margin-bottom: 47px
      background:#f7f7fc
      .Exhibition-Box
        box-shadow: 0 6px 20px rgba(84,93,106,0.12)
        margin-bottom:10px
        background:#fff
        .Exhibition-demand
          margin-left:15px
          .list-bottom
            font-size:16px
            color:#999
          .list-demand
            float:left
            font-size:17px
            color:#474747
            margin:10px 0px 10px 0
            .BGcolor
              width: 70px
              height: 26px
              display: inline-block
              color: #fff
              font-size: 14px
              line-height: 26px
              text-align: center
              border-radius: 30px
              margin-left: 13px
              margin-bottom:5px
            .status0
              background:#f5be41
            .status1
              background:#62d173
            .status2
              background:#919191
          .list-four,.list-two,.list-thr
            font-size:14px
            color:#474747
          .Exhibition-demand-Img
            float: right;
            margin: 22px 15px 0 0;
            width: 8px;
            height: 14px;
            background: url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
            background-position: -101px -32px;
            background-size: 180px 100px;
      .Demand_form
        height:100%
        .Job-require-show,.Course-information-show,.Fringe-benefits-show
          background:#fff
          padding:15px 20px
          margin-bottom:10px
        .Fringe-benefits-show
          margin-bottom:100px
        .Edit-data
          position:relative
          .font
            font-size:16px
            color:#333
          .line
            height:1px
            background:#e6e6e6
            margin:14px 0px 20px
          .Edit
            float: right
            cursor:pointer
            .EP
              display:inline-block
              width:22px
              height:20px
              background:url("../../ilb/image/APP/icon-b-mobile@2x.png") no-repeat
              background-position: -68px -87px
              background-size: 187px 113px
        label
          float:left
          font-size:14px
          color:#a1a1a1
          display:inline-block
        .userVal
          margin-left:10px
          font-size: 14px
          color: #4b4b4b
          display:inline-block
          width:190px
        .CourseFont,.FringeFontHide
          font-size:14px
          color:#333
          width:100%
          text-align:center
          height:80px
          line-height:94px
        .F_Box
          margin-bottom:20px
        .bottom-Time
          height:78px
          color:#8d8d8d
          background:#fff
          margin-top:10px
          padding-left:15px
          .Submit
            padding-top:20px
          .generate
            margin-top:10px
      .bottom-Time
        height:78px
        color:#8d8d8d
        background:#fff
        margin-top:10px
        padding-left:15px
        .Submit
          padding-top:20px
        .generate
          margin-top:10px
      .Exhibition-open,.Exhibition-Hide
        border-top:1px solid #e6e6e6
        width:100%
        height:51px
        line-height:51px
        float: left
        margin-top: 40px
        text-align: center
        cursor:pointer
        .Exhibition-img,.Exhibition-Hide-img
          width:12px
          height:6px
          background:url('../../ilb/image/login/icon-b-details.png') no-repeat
          background-position:-11px -11px
          display: inline-block
        .Exhibition-Hide-img
          background-position:-33px -11px
        .Exhibition-font
          font-size:16px
          color:#3082e7
          margin-left:13px
      .StateTabs
        margin-top:10px
        .el-tabs__item
          width:93px
          color:#999
          text-align:center
          float:left
        .el-tabs__active-bar
          display:none
        .is-active
          color:#3082e7
        .el-tabs__header
          margin-bottom:10px
          border:none
          background-color:#fff
          .el-tabs__nav-prev,.el-tabs__nav-next
            display:none
          .title-all
            width:90px
            height:80px
            display:block
      .feedback-list
        font-size:14px
        color:#333
        background: #fff
        .feedback-list-title
          width:100%
          height:60px
          line-height:60px
          background:#eff1f6
          color: #333
          font-size: 14px
          .margin-Left
            margin-left:20px
            float:left
            display:inline-block
        .feedback-list-li
          height:95px
          position:relative
          border-bottom:1px solid #e3e7ed
          .el-rate
            height:14px
            position: absolute
            top: 22px
            left: 175px
            .el-rate__icon
              font-size:12px
              margin-right: 3px
          span
            color:#8d8d8d
          .feedback-li-img
            position:absolute
            top:30px
            left:15px
            display:inline-block
            width:39px
            height:39px
            border-radius:50%
          .feedback-li-name
            position:absolute
            top: 20px
            left: 69px
            color:#333
            font-size:14px
            width:100px
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
          .feedback-li-nationality
            position:absolute
            top:40px
            left:69px
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
          .feedback-li-age
            position:absolute
            top:40px
            right:125px
            margin-left:20px
            width:45px
          .feedback-li-number
            position:absolute
            margin-left:20px
            width:45px
          .feedback-li-time
            position:absolute
            top:60px
            left:69px
            display:block
          .feedback-li-state
            position:absolute
            top:20px
            right:15px
            // margin-right:15px
            float:right
          .footer-Interview-state
            position:absolute
            bottom:13px
            right:15px
            width:85px
            height:25px
            color:#0082ee
            font-size:12px
            line-height:25px
            text-align:center
            border:1px solid #3082e7
            border-radius:4px
            cursor:pointer
            margin:17px 0 0 20px
        .feedback-list-liHide
          height:200px
          width:100%
          text-align:center
          line-height:200px
  .mask
    width:100%
    height:100%
    background:rgba(00,00,00,.6)
    position: fixed
    top: 0
    left: 0
    z-index :10
   .mask-feedback-Interview
      position:absolute
      top:50%
      left:50%
      margin-left:-320px
      margin-top:-186px
      width:640px
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
        .mask-feedback-img
          width:40px
          height:40px
          margin:20px 10px 20px 255px
        .mask-feedback-name
          font-size:14px
          color:#333
          vertical-align:35px
        .mask-feedback-bottom
          width:560px
          height:142px
          margin:0 auto
          background:#f7f9fc
          padding-bottom:20px
          .mask-feedback-stars
            color:red
            font-size:14px
            margin-left:24px
            opacity:0
          .mask-feedback-Reason
            margin:0px 0 15px
            font-size:18px
            color:#333
            display: inline-block
          .mask-feedback-text
            resize: none
            width: 460px
            height: 66px
            margin: 0px auto
            display: block
            padding-left: 20px
            padding-top: 14px
        .mask-feedback-submit
          cursor:pointer
          border-radius:4px
          width:100px
          height:30px
          margin:20px auto
          background:#3082e7
          color:#333
          text-align:center
          line-height:30px
          color:#fff
        .mask-Interview
          background: #f7f9fc
          margin: 0 40px
          .Interview-start
            font-size:14px
            color:red
            margin-left: 24px
          .Interview-title
            font-size: 18px
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
                top:14px
                left:18px
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
                font-size:18px
                color:#999
                margin-right:15px
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
  .loading
    width:100%
    height:50px
    background:#eee
    color:red
    line-height:50px
    text-align:center
</style>
