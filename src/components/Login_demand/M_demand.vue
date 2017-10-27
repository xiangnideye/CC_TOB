<template>
  <div class="Maccount">
    <div class="Header">
      <!-- href="/module/Login_home.html -->
      <span class="Header_img" @click="BackOff"></span>
      <span class="Header_title">{{this.headerTitle}}</span>
      <span class="addNewList" @click="AddPost" v-show="AddNewdata"></span>
    </div>
    <div class="Initialization" v-show="In_Hide">
      <div class="Initialization_p">
        您尚未提交该岗位需求，点击<a class="Add_" @click="AddPost">新增岗位</a>提交需求
      </div>
    </div>
    <div class="Apply_No" v-show="Apply_No">
        <p class="Apply_No_P" style="position:relative;">
          您的机构信息尚未完善，请您完善 <a style="color:#3183e7;text-decoration: underline;cursor:pointer;" href="Login_data.html">机构信息</a></span>
          <!-- <br>
          <span style="color:#3183e7">若您遇到了任何问题，
            <br>
            请致电客服：
            <a href="tel:400-669-7618">400-669-7618</a>
          </span> -->
        </p>
    </div>
    <div class="Post_main" id="Post_main" v-show="PostMain_show">
      <div class="Steps" v-show="StepsHide">
        <div class="Steps-box">
          <span class="Number active">1</span>
          <span class="line line-1"></span>
          <span class="font active-font">任职要求</span>
        </div>
        <div class="Steps-box">
          <span class="Number number-2">2</span>
          <span class="line line-2"></span>
          <span class="font font-2">课程信息</span>
        </div>
        <div class="Steps-box">
          <span class="Number number-3">3</span>
          <span class="font font-3">福利待遇</span>
        </div>
      </div>
      <form class="Demand_form clear">
        <!-- <div class="">任职要求</div> -->
        <div class="Job-requirements" v-show="requirements">
          <div class="PostName F_Box clear">
            <label class="label"><span class="Stars">* </span> 岗位名称:</label>
            <div class="Div-box">
              <input v-model="PostName" type="text" class="Input_211" @focus="PostName_focus" maxlength="40">
            </div>
            <p class="PostName_P public" v-show="public1">必填</p>
          </div>
          <div class="Sex F_Box clear">
            <label class="label"><span class="Stars">* </span> 性别:</label>
            <div class="Div-box">
              <input type="radio" name="Sex" class="clear-left Input_" v-model="sex" value="0" @click="Sex_focus">
              <span class="span-font18 m-right20">男</span>
              <input type="radio" name="Sex" class="Input_" v-model="sex" value="1" @click="Sex_focus">
              <span class="span-font18 m-right20">女</span>
              <input type="radio" name="Sex" class="Input_" v-model="sex" value="2" @click="Sex_focus">
              <span class="span-font18 m-right20">不限</span>
            </div>
            <p class="Sex_P public" v-show="public2">必填</p>
          </div>
          <div class="Inter F_Box clear">
            <label class="label"><span class="Stars">* </span> 国籍:</label>
            <div class="Div-box">
              <input type="checkbox" name="Inter" class="clear-left Input_" v-model="Inter" value="0" @click="cancel1">
              <span class="span-font18 m-right20">美国</span>
              <input type="checkbox" name="Inter" class="Input_" v-model="Inter" value="1" @click="cancel1">
              <span class="span-font18 m-right20">英国</span>
              <br>
              <input type="checkbox" name="Inter" class="Input_ m-left39" v-model="Inter" value="2" @click="cancel1">
              <span class="span-font18 m-right20">加拿大</span>
              <input type="checkbox" name="Inter" class="Input_" v-model="Inter" value="3" @click="cancel1">
              <span class="span-font18 m-right20">澳大利亚</span>
              <br>
              <input type="checkbox" name="Inter" class="Input_" v-model="Inter" value="4" @click="cancel1">
              <span class="span-font18 m-right20">新西兰</span>
              <input type="checkbox" name="Inter" class="Input_" v-model="Inter" value="5" @click="cancel1">
              <span class="span-font18 m-right20">爱尔兰</span>
              <br>
              <input type="checkbox" name="Inter" class="clear-left Input_" v-model="Inter" value="6" @click="cancel1">
              <span class="span-font18 m-right20">南非</span>
              <input type="checkbox" name="Inter" class="clear-left Input_" v-model="Inter" value="8" @click="Reverse1">
              <span class="span-font18 m-right20">无国籍要求</span>
            </div>
            <p class="Inter_P public" v-show="public5">必填</p>
          </div>
          <div class="BackEdu F_Box clear">
            <label class="label"><span class="Stars">* </span>学历:</label>
            <div class="Div-box">
              <input type="radio" name="BackEdu" class="Input_" v-model="BackEdu" value="0" @click="BackEdu_focus">
              <span class="span-font18 m-right20">学士及以上</span>
              <input type="radio" name="BackEdu" v-model="BackEdu" class="Input_" value="1" @click="BackEdu_focus">
              <span class="span-font18 m-right20">硕士及以上</span>
              <br>
              <input type="radio" name="BackEdu" v-model="BackEdu" class="Input_" value="2" @click="BackEdu_focus">
              <span class="span-font18 m-right20">博士及以上</span>
              <input type="radio" name="BackEdu" v-model="BackEdu" class="Input_" value="3" @click="BackEdu_focus">
              <span class="span-font18 m-right20">不限</span>
            </div>
            <p class="BackEdu_P public" v-show="public3">必填</p>
          </div>
          <div class="Age F_Box clear">
            <label class="label"><span class="Stars">* </span> 年龄:</label>
            <div class="Div-box">
              <input type="radio" name="Age" class="Input_" value="1" v-model="Age" @click="Age_focus">
              <span class="span-font18 m-right20">35岁以下</span>
              <input type="radio" name="Age" class="Input_" value="2" v-model="Age" @click="Age_focus">
              <span class="span-font18 m-right20">50岁以下</span>
              <br>
              <input type="radio" name="Age" class="Input_" value="3" v-model="Age" @click="Age_focus">
              <span class="span-font18 m-right20">60岁以下</span>
              <input type="radio" name="Age" class="Input_" value="4" v-model="Age" @click="Age_focus">
              <span class="span-font18 m-right20">不限</span>
            </div>
            <p class="Age_P public" v-show="public6">必填</p>
          </div>
          <div class="Major F_Box clear">
            <label class="label"><span class="Stars">* </span> 专业要求:
              <i class="main_i-2 Order-hover" @click="DetailsClick(1)"></i>
            </label>
            <div class="Div-box">
              <input type="checkbox" v-model="Major" name="Major" class="clear-left Input_" value="7" @click="cancel">
              <span class="span-font18 m-right20">语言类</span>
              <input type="checkbox" v-model="Major" name="Major" class="clear-left Input_" value="1" @click="cancel">
              <span class="span-font18 m-right20">艺体类</span>
              <br>
              <input type="checkbox" v-model="Major" name="Major" class="Input_" value="2" @click="cancel">
              <span class="span-font18 m-right20">自然科学类</span>
              <input type="checkbox" v-model="Major" name="Major" class="clear-left Input_" value="3" @click="cancel">
              <span class="span-font18 m-right20">社会科学类</span>
              <br>
              <input type="checkbox" v-model="Major" name="Major" class="Input_" value="4" @click="cancel">
              <span class="span-font18 m-right20">教学管理类</span>
              <input type="checkbox" v-model="Major" name="Major" class="clear-left Input_" value="5" @click="cancel">
              <span class="span-font18 m-right20">运营管理类</span>
              <br>
              <input type="checkbox" v-model="Major" name="Major" class="clear-left Input_" value="6" @click="Reverse">
              <span class="span-font18 m-right20">无专业要求</span>
            </div>
            <p class="Major_P public" v-show="public4">必填</p>
          </div>
          <div class="Text F_Box clear">
            <label class="label">
              教学证书
              <i class="main_i-2 Order-hover" @click="DetailsClick(2)"></i>
            </label>
            <textarea class="text_ JD" v-model="Certificate" value=""></textarea>
          </div>
          <div class="Text F_Box clear">
            <label class="label" style="width:140px;">其他要求:</label>
            <textarea class="text_ JD" v-model="Qualifications" value=""></textarea>
          </div>
          <div class="Text F_Box clear">
            <label class="label">
              岗位要求
              <i class="main_i-2 Order-hover" @click="DetailsClick(3)"></i>
            </label>
            <textarea class="JD" v-model="Job_Req" value=""></textarea>
          </div>
          <div class="Text F_Box clear">
            <label class="label">
              工作职责
              <i class="main_i-2 Order-hover" @click="DetailsClick(4)"></i>
            </label>
            <textarea class="JD" v-model="Job_Duty" value=""></textarea>
          </div>
          <div class="Text F_Box clear">
            <label class="label">
              薪酬福利
              <i class="main_i-2 Order-hover" @click="DetailsClick(5)"></i>
            </label>
            <textarea class="JD" v-model="Job_Pay" value=""></textarea>
          </div>
          <div class="C-S-Next" v-show="Job_Save">
            <div class="C-Next font-size canleft" @click="Cancel_">取消</div>
            <div class="S-Next font-size saveright" @click="Job_Save_">保存并进入下一步</div>
          </div>
          <div class="C-S-Next" v-show="Job_Save_Edit">
            <div class="C-Next" @click="Cancel_">取消</div>
            <div class="S-Next" @click="Job_Save_Edit_">保存</div>
          </div>
        </div>
        <!-- <div class="">课程信息</div> -->
        <div class="Course-information" v-show="information">
          <div class="Student F_Box clear">
            <label class="label"><span class="Stars">* </span> 学生年龄:</label>
            <div class="Div-box">
              <input type="checkbox" class="Input_" v-model="studentAgeStage" value="0" name="Student" @focus="Student_focus">
              <span class="span-font18 m-right20">3岁以下</span>
              <input type="checkbox" v-model="studentAgeStage"  class="Input_" value="1" name="Student" @focus="Student_focus">
              <span class="span-font18 m-right20">3-5岁</span>
              <br>
              <input type="checkbox" class="Input_" v-model="studentAgeStage" value="2" name="Student" @focus="Student_focus">
              <span class="span-font18 m-right20">6-8岁</span>
              <input type="checkbox" class="Input_"  v-model="studentAgeStage" value="3" name="Student" @focus="Student_focus">
              <span class="span-font18 m-right20">9-12岁</span>
              <br>
              <input type="checkbox" class="Input_"  v-model="studentAgeStage" value="4" name="Student" @focus="Student_focus">
              <span class="span-font18 m-right20">12-15岁</span>
              <input type="checkbox" class="Input_"  v-model="studentAgeStage" value="5" name="Student" @focus="Student_focus">
              <span class="span-font18 m-right20">15-18岁</span>
              <br>
              <input type="checkbox" class="Input_"  v-model="studentAgeStage" value="6" name="Student" @focus="Student_focus">
              <span class="span-font18 m-right20">18岁以上</span>
            </div>
            <p class="Sex_P public" v-show="public7">必填</p>
          </div>
          <div class="Grade F_Box clear">
            <label class="label"><span class="Stars Stars_">* </span>英语程度:</label>
            <div class="Div-box">
              <input type="checkbox"  class="Input_" value="0" v-model="studentEnLevel">
              <span class="span-font18 m-right20">基础</span>
              <br>
              <input type="checkbox"  class="Input_" value="1" v-model="studentEnLevel">
              <span class="span-font18 m-right20">中级</span>
              <br>
              <input type="checkbox"  class="Input_" value="2" v-model="studentEnLevel">
              <span class="span-font18 m-right20">高级</span>
            </div>
          </div>
          <div class="scale F_Box clear">
            <label class="label"><span class="Stars">* </span> 班级规模:</label>
            <div class="Div-box">
              <input type="radio" class="Input_" value="1" v-model="classScale" name="scale" @focus="Scale_focus">
              <span class="span-font18 m-right20">5人内</span>
              <input type="radio" class="Input_" value="2" v-model="classScale" name="scale" @focus="Scale_focus">
              <span class="span-font18 m-right20">5-15人</span>
              <br>
              <input type="radio" class="Input_" value="3" v-model="classScale" name="scale" @focus="Scale_focus">
              <span class="span-font18 m-right20">15-25人</span>
              <input type="radio" class="Input_" value="4" v-model="classScale" name="scale" @focus="Scale_focus">
              <span class="span-font18 m-right20">25-40人</span>
              <br>
              <input type="radio"  class="Input_" value="5" v-model="classScale" name="scale" @focus="Scale_focus">
              <span class="span-font18 m-right20">40人以上</span>
            </div>
            <p class="Sex_P public" v-show="public8">必填</p>
          </div>
          <div class="Assistant F_Box clear">
            <label class="label"><span class="Stars Stars_">* </span> 双语助教:</label>
            <div class="Div-box">
              <input type="radio" name="Assistant" class="Input_" value='1' v-model="have_chineseTA">
              <span class="span-font18 m-right20">有</span>

              <input type="radio"  name="Assistant" class="Input_" value='0' v-model="have_chineseTA">
              <span class="span-font18 m-right20">无</span>
            </div>
          </div>
          <div class="Course F_Box clear">
            <label class="label"><span class="Stars">* </span> 有无教材:</label>
            <div class="Div-box">
              <input type="radio" name="Course_" class="Input_" value='1' v-model="have_textbook" @focus="Course_focus">
              <span class="span-font18 m-right20">有</span>

              <input type="radio" name="Course_"  class="Input_" value='0'  v-model="have_textbook" @focus="Course_focus">
              <span class="span-font18 m-right20">无</span>
            </div>
            <p class="Sex_P public" v-show="public9">必填</p>
          </div>
          <div class="CourseName F_Box clear" v-show="CourseHide">
            <label class="label"> 教材名称:</label>
            <div class="Div-box">
              <input type="text" class="UserCourseName CourseName1" v-model="textbook_name">
            </div>
          </div>
          <div class="CourseName F_Box clear">
            <label class="label"> 有无教案:</label>
            <div class="Div-box">
              <input type="radio" name="teachPlan" class="Input_" v-model="teachPlan" value="1">
              <span class="span-font18 m-right20">无，需教师编写</span>
              <input type="radio" name="teachPlan" class="Input_" v-model="teachPlan" value="2">
              <span class="span-font18 m-right20">有教学简案</span>
              <br>
              <input type="radio" name="teachPlan" class="Input_" v-model="teachPlan" value="3">
              <span class="span-font18 m-right20">有教学详案</span>
            </div>
          </div>
          <div class="Week F_Box clear">
            <label class="label"><span class="Stars">* </span>课时量:</label>
            <div class="Div-box">
              <input v-model="Week" type="text" class="Input_211" id="Week" maxlength="30" @click='Curriculum_focus'>
            </div>
            <p class="CurriculumP public" v-show="public10">必填</p>
          </div>
          <div class="ClassH F_Box clear">
            <label class="label"><span class="Stars">* </span>课时长:</label>
            <div class="Div-box">
              <input v-model="ClassH" type="text" class="Input_211" id="ClassH" maxlength="30" @focus="ClassH_focus">
            </div>
            <p class="CurriculumP public" v-show="public11">必填</p>
          </div>
          <div class="Text F_Box clear">
            <label class="label"><span class="Stars">* </span>
              每周工作时间
              <i class="main_i-2 Order-hover" @click="DetailsClick(6)"></i>
            </label>
            <textarea class="JD" v-model="WorkH" @click='WorkH_focus'></textarea>
            <p class="CurriculumP public" v-show="public12">必填</p>
          </div>
          <div class="Train F_Box clear">
            <label class="label" style="width:140px;"><span class="Stars">* </span>有无岗前培训:</label>
            <div class="Div-box">
              <input type="radio" name="Train" class="Input_" value='1' v-model="Train" @focus="Train_focus">
              <span class="span-font18 m-right20">有</span>

              <input type="radio" name="Train"  class="Input_" value='0'  v-model="Train"@focus="Train_focus">
              <span class="span-font18 m-right20">无</span>
            </div>
            <p class="CourseP public" v-show="public13">必填</p>
          </div>
          <div class="Text F_Box clear">
            <label class="label" style="width:140px"><span class="Stars Stars_">* </span> 培训安排介绍:</label>
            <textarea class="JD" v-model="Study"></textarea>
          </div>
          <div class="C-S-Next" v-show="Course_Save">
            <div class="C-Next font-size canleft" @click="Course_step">上一步</div>
            <div class="S-Next font-size saveright" @click="Course_Save_">保存并进入下一步</div>
          </div>
          <div class="C-S-Next" v-show="Course_Save_Edit">
            <div class="C-Next" @click="Cancel_">取消</div>
            <div class="S-Next" @click="Course_Save_Edit_">保存</div>
          </div>
        </div>
        <!-- <div class="">福利待遇</div> -->
        <div class="Fringe-benefits" v-show="benefits">
          <div class="Salary—mo F_Box clear">
            <label class="label"><span class="Stars">* </span>
              月均薪酬范围
              <i class="main_i-2 Order-hover" @click="DetailsClick(7)"></i>
            </label>
            <div class="Div-box">
              <input v-model="monthAverage" type="text" class="Input_105" maxlength="30" @focus="Salary_mo">
              <span style="height:31px;line-height:31px;">-</span>
              <input v-model="monthAverage2" type="text" class="Input_105" maxlength="30" @focus="Salary_mo">
              <span class="RMB">RMB</span>
            </div>
            <p class="Salary_P public" v-show="public15">必填</p>
          </div>
          <div class="Salary F_Box clear" style="position:relative;" @click="Salary_focus">
            <label class="label"><span class="Stars">* </span>基本薪资
              <i class="main_i-2 Order-hover" @click="DetailsClick(8)"></i>
            </label>
            <div class="Div-box">
                <el-cascader
                  :options="options"
                  v-model="selectedOptions"
                  class="Salary_CLASS">
                </el-cascader>
                <input v-model="Salary" type="text" class="Input_105"  maxlength="30" style="margin-left:5px;">
                <span class="RMB">RMB</span>
              </div>
            <p class="Salary_P public" v-show="public14">必填</p>
          </div>
          <div class="Home F_Box clear">
            <label class="label"><span class="Stars">* </span>是否提供住宿:</label>
            <div class="Div-box">
              <input type="radio" name="Home" v-model="Home" class="Input_" value="1" @click="HShow" @focus="Home_focus">
              <span class="span-font18 m-right20">是</span>
              <input type="radio" name="Home" v-model="Home" class="Input_" value="0" @click="HHide" @focus="Home_focus">
              <span class="span-font18 m-right20">否</span>
            </div>
            <p class="Salary_P public" v-show="public17">必填</p>
          </div>
          <div class="Room F_Box clear" v-show="RoomHide">
            <label class="label"><span class="Stars Stars_">* </span> 住宿情况:</label>
            <div class="Div-box">
              <input v-model="Room" type="radio" class="Input_" value="0">
              <span class="span-font18 m-right20">独立住宿</span>
              <input v-model="Room" type="radio" class="Input_" value="1">
              <span class="span-font18 m-right20">1-2人</span>
              <input v-model="Room" type="radio" class="Input_" value="2">
              <span class="span-font18 m-right20">2人以上</span>
            </div>
          </div>
          <div class="Subsidy F_Box clear" v-show="SubsidyHide">
            <label class="label"><span class="Stars Stars_">* </span> 住宿补助:</label>
            <div class="Div-box">
              <input v-model="Subsidy" type="text" class="Input_211" id="Subsidy" maxlength="30">
            </div>
          </div>
          <div class="Cycle F_Box clear">
            <label class="label"><span class="Stars">* </span>  绩效考核方式:</label>
            <div class="Div-box">
              <input type="radio" v-model="Cycle" name="cycle" class="Input_" value="0" @focus="Cycle_mo">
              <span class="span-font18 m-right20">月度</span>
              <input type="radio" v-model="Cycle" name="cycle" class="Input_" value="1" @focus="Cycle_mo">
              <span class="span-font18 m-right20">季度</span>
              <br>
              <input type="radio" v-model="Cycle" name="cycle" class="Input_" value="2" @focus="Cycle_mo">
              <span class="span-font18 m-right20">年度</span>
              <input type="radio" v-model="Cycle" name="cycle" class="Input_" value="3" @focus="Cycle_mo">
              <span class="span-font18 m-right20">其他</span>
            </div>
            <p class="Salary_P public" v-show="public16">必填</p>
          </div>
          <div class="Money F_Box clear">
            <label class="label"><span class="Stars Stars_">* </span>
              绩效基数
              <i class="main_i-2 Order-hover" @click="DetailsClick(9)"></i>
            </label>
            <div class="Div-box">
              <input v-model="Money" type="text" class="Input_211" id="Money" maxlength="30">
            </div>
          </div>
          <div class="Plane_T F_Box clear">
            <label class="label"><span class="Stars Stars_">* </span> 机票补助:</label>
            <div class="Div-box">
              <input type="radio" name="Plane_T" v-model="Plane_T" class="Input_" value="1" @click="PShow">
              <span class="span-font18 m-right20">有</span>

              <input type="radio" name="Plane_T" v-model="Plane_T" class="Input_" value="0" @click="PHide">
              <span class="span-font18 m-right20">无</span>
            </div>
          </div>
          <div class="P_Subsidy F_Box clear" v-show="PS_sh">
            <label class="label"><span class="Stars Stars_">* </span> 补贴金额:</label>
            <div class="Div-box">
              <input v-model="P_Subsidy" type="text" class="Input_211" id="P_Subsidy" maxlength="30">
            </div>
          </div>
          <div class="Text F_Box clear">
            <label class="label"><span class="Stars Stars_">* </span> 加班费:</label>
              <textarea name="name" rows="8" cols="80" class="JD" v-model="Overtime"></textarea>
          </div>
          <div class="Insurance F_Box clear">
            <label class="label"><span class="Stars">* </span> 保险类型:</label>
            <div class="Div-box">
              <input type="radio" v-model="Insurance" name="Insurance" class="Input_" value="1" @click="ISHow" @focus="Insurance_focus">
              <span class="span-font18 m-right20">机构已有保险可以供给外教</span>
              <br>
              <input type="radio" v-model="Insurance" name="Insurance" class="Input_" value="0" @click="IHide" @focus="Insurance_focus">
              <span class="span-font18 m-right20">机构暂无保险</span>
            </div>
            <p class="Salary_P public" v-show="public18">必填</p>
          </div>
          <div class="Text F_Box clear">
            <label class="label"><span class="Stars">* </span> 假期描述:</label>
            <textarea name="name" rows="8" cols="80" v-model="Annual_D" class="JD" @focus="Annual_D_focus"></textarea>
            <p class="Annual_D_P public" v-show="public19">必填</p>
          </div>
          <div class="Text F_Box clear">
            <label class="label"><span class="Stars Stars_">* </span> 备注:</label>
            <textarea class="JD text_" v-model="Remarks"></textarea>
          </div>
          <div class="C-S-Next" v-show="benefits_Save">
            <div class="C-Next" @click="benefits_step">上一步</div>
            <div class="S-Next" @click="benefits_Save_">保存</div>
          </div>
          <div class="C-S-Next" v-show="benefits_Save_Edit">
            <div class="C-Next" @click="Cancel_">取消</div>
            <div class="S-Next" @click="benefits_Save_Edit_">保存</div>
          </div>
        </div>
      </form>
    </div>
    <div class="Exhibition clear" v-show="Exh">
      <form class="Demand_form">
        <div class="Job-require-show">
          <div class="Edit-data clear">
            <span class="font">任职要求</span>
            <div class="Edit" @click="Job_require_Edit">
              <i class="EP"></i>
              <span class="edit">编辑</span>
            </div>
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
            <div class="Edit" @click="Course_information_Edit">
              <i class="EP"></i>
              <span class="edit">编辑</span>
            </div>
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
        <div class="Fringe-benefits-show" v-show="benefitsShow" style="margin-bottom:102px;">
          <div class="Edit-data clear">
            <span class="font">福利待遇</span>
            <div class="Edit" @click="Fringe_benefits_Edit">
              <i class="EP"></i>
              <span class="edit">编辑</span>
            </div>
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
      </form>
    </div>
    <ul v-show="List_" class="List_Data" id="oUl_list"  @touchmove="touchMove">
      <li v-for="(list, index) in Lists" class="list_li" @click="Details(list.ID,index)">
        <div class="list_main">
          <span class="list_title">岗位名称: {{list.name}}</span>
          <span class="list_title">已提需求: {{list.requestsLength}}</span>
         </div>
        <div class="list_data clear">
          <span class="data_name">性别：{{list.sex}}</span>
          <span class="data_name">国籍：{{list.nat}}</span>
          <span class="data_name">学历：{{list.edu}}</span>
          <span class="data_name" style="padding-bottom:9px;">年龄：{{list.age}}</span>
        </div>
      </li>
    </ul>
    <div class="AddNewDemand" v-show="AddNewDemandShow">
      <div class="Demand-Top">
        <div @click="clickUpDemand">
          <i class="Img-icon"></i>
          <span class="Demand">已提需求:{{this.todos.length}}</span>
        </div>
        <div id="content" class="Demand-content" v-show="content">
          <div class="demand_title">
            <span style="margin-left:20px;">人数要求</span>
            <span style="margin-right:45px">期望上岗时间</span>
            <span>状态</span>
            <span style="margin-right:0">操作</span>
          </div>
          <ul class="BotUl">
            <li is="todo-item" v-for="(todo, index) in todos" v-bind:title="todo" v-on:remove="remove(index,todo.requestId)">
            </li>
          </ul>
          <div class="save_Show" style="position:relative;" v-show="inputShow">
            <el-input v-model="peopleNumber" class="people" placeholder="人数需求"></el-input>
            <el-date-picker v-model="date" type="date" placeholder="期望上岗时间" :picker-options="pickerOptions0" format="yyyy-MM-dd">
            </el-date-picker>
            <div class="cen" @click="addCen"></div>
            <div class="sav" @click="addNewTodo"></div>
            <div class="mask" style="position:absolute;opacity:0;z-index:10;width:60px;height:30px;right:21px;top:12px;" v-show="mask"></div>
          </div>
        </div>
      </div>
      <div class="Demand-Bottom" @click="clickNewDemand">
        <span class="Demand">新增需求</span>
      </div>
    </div>
    <div class="Details-mask" v-show="DetailsMask">
      <div class="main-div" @click="MaskHide"></div>
      <span class="main-right" v-show="mask1" style="margin-top:-150px;">
        <span class="main-right-title">专业要求</span>
        <br>
        语言类（如音标、口语、写作、阅读、多学科语言教学、语言学等）
        <br>
        艺体类（如美术、音乐、戏剧、体育运动类）
        <br>
        自然科学类（如数学、物理、化学、编程等）
        <br>
        社会科学类（如历史、人文、文学、教育学、心理学等）
        <br>
        教学管理类（如培训师、教学督导、教研主任、教学总监等）
        <br>
        运营管理类（如咨询、市场、国际部负责人、校长等）
        </span>
      <span class="main-right" v-show="mask2" style="margin-top:-60px;">
        <span class="main-right-title">教学证书</span>
        <br>
        人才所需要具备的教学相关的认证和证书。如TEFL，TESOL证书等。
        </span>
      <span class="main-right" v-show="mask3" style="margin-top:-150px;">
        <span class="main-right-title">岗位要求</span>
        <br>
        建议使用英文填写，我们的专业人员将为您润色英文要求，制作成符合招聘标准的职位细则。
        <br>
        示例：
        Requirements to Teach English in China:
        Speaks English at an Idiomatic level.
        Degree: BA or above (Education, linguistics or English degree given top priority).
        TEFL / other teaching certificate OR 2 years teaching experience required.
        Passionate, responsible, and love children.
        Must be willing to relocate to China.
        </span>
      <span class="main-right" v-show="mask4" style="margin-top:-150px;">
          <span class="main-right-title">工作职责</span>
          <br>
          建议使用英文填写，我们的专业人员将为您润色英文要求，制作成符合招聘标准的职位细则。
          <br>
          示例：
          Responsibilities for ESL Teachers in China:
          Student age range: 2 – 15 years old.
          Class size: 10 – 30 students in one class.
          Class length: 40 minutes to 1 hour containing various creative teaching techniques.
          You will be assisted with a bilingual Chinese teacher*
          32 – 40 Hours Work Week; office hours and teaching hours*
          </span>
      <span class="main-right" v-show="mask5" style="margin-top:-232px;">
        <span class="main-right-title">薪酬福利</span>
        <br>
        建议使用英文填写，我们的专业人员将为您润色英文要求，制作成符合招聘标准的职位细则。
        <br>
        示例：
        What We Offer our ESL Teachers:
        Your airfare to China.
        Settle-in allowance of USD 900 (equivalent to RMB 6000) *
        TEFL/TESOL certification expenses*
        Sponsored legal Z Work Visa.
        Ground service assistance.
        Airport Pickup assistance.

        Your compensation will include:
        USD 1700- 2900 per month net income (RMB 10,000 – 20,000) *
        Provided housing OR stipend USD 210 – 580 (RMB 1500 – 4000) *
        Chinese public holidays*
        Paid sick leaves*
        Airfare bonus after contract fulfilment up to: USD 1100 (RMB 8000) *
        Sponsored Z Visa.

        Other benefits include:
        Organized team-building activities
        Personal Career Development Planning
        </span>
      <span class="main-right" v-show="mask6" style="margin-top:-71px;">
        <span class="main-right-title">每周工作时间</span>
        <br>
        请详细填写每一到周五，及周六周日上课情况。如，周三到周五1:00-8:00pm；周六日9:00-19:00。
        </span>
      <span class="main-right" v-show="mask7" style="margin-top:-71px;">
        <br>
        <span class="main-right-title">月均薪酬范围</span>
        <br>
        税前：你需要承担工资税费前的数额
        <br>
        税后：您需要承担工资税费后的数额
        <br>
        净收入：您不承担工资税费
        </span>
      <span class="main-right" v-show="mask8" style="margin-top:-61px;">
        <span class="main-right-title">基本薪资</span>
        <br>
        请填写包含所有福利后的估计薪水范围
        </span>
      <span class="main-right" v-show="mask9" style="margin-top:-71px;">
        <span class="main-right-title">绩效基数</span>
        <br>
        即您所在企业的法律主体是否具有办学许可证。办学许可证将允许您具备聘请外籍教师来华工作的合法资格。我们的专业人士将根据您的实际情况，为您提供最佳的人才招聘策略。
        </span>
    </div>
    <div class="loading" v-show="LodingShow">
      <span>加载中...</span>
    </div>
  </div>
</template>

<script>
  import localhost from '../../common/js/public.js';
  import Vue from 'vue';
  Vue.component('todo-item', {
    template: '\
      <li class="clear">\
      <i>{{ title.peopleNumber }}</i>\
      <span>{{ title.date }}</span>\
      <b>{{ title.Handle }}</b>\
      <div v-on:click="$emit(\'remove\')">删除</div>\
      </li>\
    ',
    props: ['title']
  });
  let getQueryString = (name)=>{
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  };
  if(getQueryString('access_token') && getQueryString('openid')){
    $.cookie('B-access_token',getQueryString('access_token'));
    $.cookie('openid',getQueryString('openid'));
    $.cookie('B-customerId',getQueryString('customerId'));
    $.cookie('userNum',getQueryString('phone'));
  };
  const access_token = $.cookie('B-access_token');
  const BcustomerId =  $.cookie('B-customerId');
  const loginSuccess = $.cookie('loginSuccess');
  function Arr(ary,num){
    if(ary.indexOf(num)===-1){
       ary.push(num);
    }else {
      return
    }
    return ary;
  };
  export default {
    created (){
       this.$http.get(localhost+'/cc/position/list?access_token='+access_token+'&customerId='+BcustomerId+'&pageIndex='+1+'&pageSize='+5).then((response) =>{
         this.Created(response);
       });
    },
    data() {
      return {
        mask1:false,
        mask2:false,
        mask3:false,
        mask4:false,
        mask5:false,
        mask6:false,
        DetailsTitle:'',
        DetailsData:'',
        DetailsMask:false,
        teachPlan:[],
        headerTitle:'岗位需求',
        listTrue_flag : true,
        List_: false,
        Exh:false,
        AddNewdata:true,
        LodingShow:false,
        size:1,
        Demand_Flag_2:false,
        list:'',
        CourseShowHide:true,
        CourseFontHide:false,
        FringeShowHide:true,
        AddNewDemandShow:false,
        DemandLength:'',
        inputShow:true,
        //编辑主体
        requirements:true,  //任职要求
        information:false, //课程信息
        benefits:false,   //福利待遇
        dataList:'',     //页面展示容器
        Position_ID:'',
        //model->
        PostName: '',  //任职要求->model
        sex: [],
        BackEdu: [],
        Major: [],
        Exp: '',
        Inter: [],
        Age: [],
        Job_Req: '',
        Job_Duty: '',
        Job_Pay: '',
        Certificate:'',
        Qualifications:'',
        studentAgeStage:[],//课程信息->model
        classScale:[],
        studentEnLevel:[],
        have_chineseTA:[],
        have_textbook:[],
        textbook_name:'',
        classContent:[],
        classContent_Others:'',
        Week:'',
        ClassH:'',
        WorkH:'',
        Study:'',
        Train:[],
        Salary: '', //福利待遇->model
        selectedOptions:[],
        monthAverage:'',
        Cycle: '',
        Money: '',
        Home: '',
        Room: '',
        Subsidy: '',
        Plane_T: '',
        P_Subsidy: '',
        O_Subsidy: '',
        Overtime: '',
        subsidy:'',
        Insurance: '',
        Insurance_D: '',
        Buy_I: '',
        Annual_D: '',
        sick_leave:'',
        Remarks:'',
        options: [{
            value: '1',
            label: '税前'
          }, {
            value: '2',
            label: '税后'
          }, {
            value: '3',
            label: '净收入'
        }],
        //-----------------
        Edit_Flag:false, //判断编辑
        Demand_Flag:false, //保存编辑
        //分步展示
        StepsHide:true,
        //----v-show
        Job_Save:true,
        Job_Save_Edit:false,
        Course_Save:true,
        Course_Save_Edit:false,
        benefits_Save:true,
        benefits_Save_Edit:false,
        informationShow:true,
        benefitsShow:true,
        //-----必填展示
        public1:false,
        public2:false,
        public3:false,
        public4:false,
        public5:false,
        public6:false,
        //-----必填展示
        public7:false,
        public8:false,
        public9:false,
        public10:false,
        public11:false,
        public12:false,
        public13:false,
        //-----必填展示
        public14:false,
        public15:false,
        public16:false,
        public17:false,
        public18:false,
        public19:false,
        //详情展示
        DetailsShow1:false,
        DetailsShow2:false,
        DetailsShow3:false,
        DetailsShow4:false,
        DetailsShow5:false,
        DetailsShow6:false,
        DetailsShow7:false,
        DetailsShow8:false,
        DetailsShow9:false,
        DetailsShow10:false,
        DetailsShow11:false,
        DetailsShow12:false,
        DetailsShow13:false,
        DetailsShow14:false,
        DetailsShow15:false,
        DetailsShow16:false,
        DetailsShow17:false,
        DetailsShow18:false,
        DetailsShow19:false,
        DetailsShow20:false,
        DetailsShow21:false,
        contentFont:'',
        NewlyAdded:'',

        Study:'',
        mask:false,
        Unapproved: '',
        NoPositionInfo:'',
        Index1:false,
        Index2:false,
        Apply_No:false,
        New:'',
        CustBasicInfoImperfect:true,
        paging:true,
        pageSize_:5,
        current_page:1,
        pageSize:5,
        currentPage:'',
        positionTotalCount:1,
        currentPage3: 1,
        newAdd:true,
        details:'details',
        List_Demand:'',
        New_Demand:false,
        flag : '',
        Position_Index:'',
        demand: {},
        In_Hide: false,
        PostMain_show: false,
        RoomHide: false,
        SubsidyHide: false,
        PS_sh: false,
        T_sh: false,
        In_Show: false,
        In_Buy: false,
        TimeHide: false,
        AShow: false,
        OverTime: false,
        todos: [],
        Lists: [],
        Datas: [],
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        date: '',
        Add_show: false,
        NoAdd: true,
        demand_hide: true,
        content: false,
        stop1: false,
        stop2: true,

      }
    },
    methods: {
      //数据回绑
      CallBackFunction(){
        this.$http.get(localhost+'/cc/position/detail?access_token='+access_token+'&id='+this.Position_ID).then((response) =>{
          this.LIST_D = response.body.resultObj;
          //岗位名称
          this.PostName = this.LIST_D.positionName;
          //性别
          if(this.LIST_D.gender == '0'){
            this.sex = 0;
          }else if (this.LIST_D.gender == '1') {
            this.sex = 1;
          }else if (this.LIST_D.gender == '2') {
            this.sex = 2;
          }
          //教育背景要求
          if(this.LIST_D.educationBg == '0'){
            this.BackEdu = '0'
          }else if (this.LIST_D.educationBg == '1') {
            this.BackEdu = '1'
          }else if (this.LIST_D.educationBg == '2') {
            this.BackEdu = '2'
          }else if (this.LIST_D.educationBg == '3') {
            this.BackEdu = '3'
          }
          //专业要求
          for(let i = 0;i<this.LIST_D.majorArr.length;i++){
            if(this.LIST_D.majorArr[i] == 1){
              Arr(this.Major,"1");
            }else if (this.LIST_D.majorArr[i] == 2) {
              Arr(this.Major,"2");
            }else if (this.LIST_D.majorArr[i] == 3) {
              Arr(this.Major,"3");
            }else if (this.LIST_D.majorArr[i] == 4) {
              Arr(this.Major,"4");
            }else if (this.LIST_D.majorArr[i] == 5) {
              Arr(this.Major,"5");
            }else if (this.LIST_D.majorArr[i] == 6) {
              Arr(this.Major,"6");
            }else if (this.LIST_D.majorArr[i] == 7) {
              Arr(this.Major,"7");
            }
          };
          //年龄要求
           if(this.LIST_D.ageStage == '1'){
             this.Age = '1';
           }else if (this.LIST_D.ageStage == '2') {
             this.Age = '2';
           }else if (this.LIST_D.ageStage == '3') {
             this.Age = '3';
           }else if (this.LIST_D.ageStage == '4') {
             this.Age = '4';
           }
          //国籍要求
          for(let i = 0;i<this.LIST_D.nationalityArr.length;i++){
            if(this.LIST_D.nationalityArr[i] == 0){
              Arr(this.Inter,"0");
            }else if (this.LIST_D.nationalityArr[i] == 1) {
              Arr(this.Inter,"1");
            }else if (this.LIST_D.nationalityArr[i] == 2) {
              Arr(this.Inter,"2");
            }else if (this.LIST_D.nationalityArr[i] == 3) {
              Arr(this.Inter,"3");
            }else if (this.LIST_D.nationalityArr[i] == 4) {
              Arr(this.Inter,"4");
            }else if (this.LIST_D.nationalityArr[i] == 5) {
              Arr(this.Inter,"5");
            }else if (this.LIST_D.nationalityArr[i] == 6) {
              Arr(this.Inter,"6");
            }else if (this.LIST_D.nationalityArr[i] == 8) {
              Arr(this.Inter,"8");
            }
          };
          //教学证书相关要求
          this.Certificate = this.LIST_D.certificate;
          //资质及其他要求描述
          this.Qualifications = this.LIST_D.qualityDesc
          //JD岗位要求:
          this.Job_Req = this.LIST_D.jobRequire;
          //JD工作职责:
          this.Job_Duty = this.LIST_D.jobDesc;
          //JD薪酬福利:
          this.Job_Pay = this.LIST_D.jobBenefit;

          //-----------
          //双语助教
          if(this.LIST_D.chinaAssistant === '' || this.LIST_D.chinaAssistant === null){
            this.have_chineseTA = [];
           }else {
            this.LIST_D.chinaAssistant == '0'?this.have_chineseTA = 0:this.have_chineseTA = 1;
          }
          //学生年龄
          if(this.LIST_D.stuAgeStageArr == null || this.LIST_D.stuAgeStageArr == ''){
            this.studentAgeStage = [];
          }else {
            for(let i = 0;i<this.LIST_D.stuAgeStageArr.length;i++){
              if(this.LIST_D.stuAgeStageArr[i] == "0"){
                Arr(this.studentAgeStage,"0");
              }else if(this.LIST_D.stuAgeStageArr[i] == "1"){
                Arr(this.studentAgeStage,"1");
              }else if(this.LIST_D.stuAgeStageArr[i] == "2"){
                Arr(this.studentAgeStage,"2");
              }else if(this.LIST_D.stuAgeStageArr[i] == "3"){
                Arr(this.studentAgeStage,"3");
              }else if(this.LIST_D.stuAgeStageArr[i] == "4"){
                Arr(this.studentAgeStage,"4");
              }else if(this.LIST_D.stuAgeStageArr[i] == "5"){
                Arr(this.studentAgeStage,"5");
              }else if(this.LIST_D.stuAgeStageArr[i] == "6"){
                Arr(this.studentAgeStage,"6");
              }
            }
          };
          //班级规模
          if(this.LIST_D.classScale == "1"){
            this.classScale = "1"
          }else if(this.LIST_D.classScale == "2"){
            this.classScale = "2"
          }else if(this.LIST_D.classScale == "3"){
            this.classScale = "3"
          }else if(this.LIST_D.classScale == "4"){
            this.classScale = "4"
          }else if(this.LIST_D.classScale == "5"){
            this.classScale = "5"
          }
          // 英语程度
          if(this.LIST_D.stuEnlevelArr == null || this.LIST_D.stuEnlevelArr == ''){
              this.studentEnLevel = [];
          }else {
            for(var i = 0;i<this.LIST_D.stuEnlevelArr.length;i++){
              if(this.LIST_D.stuEnlevelArr[i] == "0"){
                Arr(this.studentEnLevel,"0");
              }else if(this.LIST_D.stuEnlevelArr[i] == "1"){
                Arr(this.studentEnLevel,"1");
              }else if(this.LIST_D.stuEnlevelArr[i] == "2"){
                Arr(this.studentEnLevel,"2");
              }
            }
          }
          //有无教材
          if(this.LIST_D.textbook === '' || this.LIST_D.textbook == null){
            this.have_textbook = [];
           }else {
            if(this.LIST_D.textbook == '1'){
                this.have_textbook = 1;
                this.CourseHide = true;
              }else{
                this.have_textbook = 0;
                this.CourseHide = false;
              }
          }
          //教材名称
          this.textbook_name = this.LIST_D.textbookName;
          //周课时量
          this.Week = this.LIST_D.weekHours;
          //课时时长
          this.ClassH = this.LIST_D.classHours;
          //每周工作时间
          this.WorkH = this.LIST_D.weekTotalHours;
          //有无教案
          this.teachPlan = this.LIST_D.teachPlan;
          //有无岗前培训及进修
          if(this.LIST_D.preJobTrain === '' || this.LIST_D.preJobTrain == null){
            this.Train = [];
          }else {
            this.LIST_D.preJobTrain == '0'?this.Train=0:this.Train=1;
          }
          //培训及进修情况介绍:
          this.Study = this.LIST_D.jobTrainDesc;
          //-------------
          let aleft,bright;
          aleft = this.LIST_D.salaryAveRange.split('-')[0]
          bright = this.LIST_D.salaryAveRange.split('-')[1]
          //月平均薪资范围:
          if(this.LIST_D.salaryAveRange){
            this.monthAverage = aleft.toString();
          }
          if(this.LIST_D.salaryAveRange){
            this.monthAverage2 = bright.toString();
          }
          //月薪:
          if(this.LIST_D.salaryType == null || this.LIST_D.salaryType == ''){

           }else {
            if(this.LIST_D.salaryType == '1'){
              this.selectedOptions.push('1');
            }else if (this.LIST_D.salaryType == '2') {
              this.selectedOptions.push('2');
            }else if (this.LIST_D.salaryType == '3') {
              this.selectedOptions.push('3');
            };
            this.Salary = this.LIST_D.salaryMoney;
          };
          //备注
          this.Remarks = this.LIST_D.remarks;
          //加班费
          this.Overtime = this.LIST_D.chargeOvertime;
          //绩效考核方式
          if(this.LIST_D.assessType === '' || this.LIST_D.assessType === null){

          }else {
            if(this.LIST_D.assessType == 0){
               this.Cycle = '0';
             }else if (this.LIST_D.assessType == 1) {
               this.Cycle = '1';
             }else if (this.LIST_D.assessType == 2) {
               this.Cycle = '2';
             }else if (this.LIST_D.assessType == 3) {
               this.Cycle = '3';
             }
          };
          //绩效金额:
          this.Money = this.LIST_D.assessMoney;
          //外教住宿:
          if(this.LIST_D.staffStay === '' || this.LIST_D.staffStay === null){
            this.Home = [];
           }else {
            if(this.LIST_D.staffStay == 0){
               this.Home = 0;
               this.RoomHide = false;
               this.SubsidyHide = true;
               this.Room = [];
             }else if (this.LIST_D.staffStay == 1) {
               this.Room = [];
               this.Home = 1;
               this.RoomHide = true;
               this.SubsidyHide = false;
               this.Subsidy = '';
             }
          };
          //机票补助:
          if(this.LIST_D.airfareSubsidy === '' || this.LIST_D.airfareSubsidy === null){
            this.Plane_T = [];
           }else {
            if(this.LIST_D.airfareSubsidy == 0){
                 this.Plane_T = 0;
                 this.PS_sh = false;
               }else if (this.LIST_D.airfareSubsidy == 1) {
                 this.Plane_T = 1;
                 this.PS_sh = true;
               }
          };
          //购买保险类型::
          if(this.LIST_D.insuranceType === '' || this.LIST_D.insuranceType === null){
            this.Insurance = '';
           }else {
            if(this.LIST_D.insuranceType == 0){
                this.Insurance = 0;
                this.In_Buy = true;
                this.In_Show = false;
              }else if (this.LIST_D.insuranceType == 1) {
                this.Insurance = 1;
                this.In_Buy = false;
                this.In_Show = true;
              };
          };
          //房间人数:
          this.Room = this.LIST_D.roomHoldNum;
          //住宿补助:
          this.Subsidy = this.LIST_D.staySubsidy;
          //补贴金额:
          this.P_Subsidy = this.LIST_D.airfareSubsidyMoney;
          //补贴金额:
          this.T_Subsidy = this.LIST_D.tourAllowance;
          //年假天数:
          this.Annual_D = this.LIST_D.holidayDesc;
        });
      },
      Created (response){
        //多余的判断  暂时先注释了
        // else if(responseBody.custInfoComplete == true && responseBody.approved == true && posiList.length === 0){
        //   //审批通过，机构信息保存,没有需求
        //   this.In_Hide = true;
        //   this.newAdd = true;
        //   this.Apply_No = false;
        //   this.Edit_Flag = true;
        // }
        $('body').css('min-height',$(window).height())
        $('body').css('background','#f7f7fc');
        let responseBody = response.body.resultObj;
        let posiList = response.body.resultObj.postList;
        this.CustBasicInfoImperfect = responseBody.approved;
        this.New = response.body.custInfoComplete;
        this.positionTotalCount = responseBody.totalNumber;
        // if(responseBody.approved == false){
        //     //没有审批
        //     this.In_Hide = false;
        //     this.newAdd = false;
        //     this.Apply_No = true;
        //     this.AddNewdata = false;
        //   }else if(responseBody.approved == true && responseBody.custInfoComplete == false){
        //     //审批通过，机构信息没有保存
        //     this.In_Hide = true;
        //     this.newAdd = true;
        //     this.Apply_No = false;
        //     this.Edit_Flag = true;
        //   }else if(responseBody.custInfoComplete == true && responseBody.approved == true){
        //     this.PostMain_show = false;//填写信息
        //     this.List_ = true;//展示信息
        //     this.newAdd = true;
        //     this.In_Hide = false;
        //     this.Apply_No = false;
        //     this.Edit_Flag = true;
        //     if(this.listTrue_flag){
        //         this.List_ = true;   //展示信息
        //       }else {
        //         this.List_ = false; //点击详情
        //     };
        //     var Array_List = responseBody.postList;
        //     for(var j = 0;j < Array_List.length;j++){
        //       //性别
        //       if(Array_List[j].gender == 0){
        //         Array_List[j].gender = '男'
        //       }else if(Array_List[j].gender == 1){
        //         Array_List[j].gender = '女'
        //       }else if(Array_List[j].gender == 2){
        //         Array_List[j].gender = '不限'
        //       };
        //       //学历学位要求
        //       if(Array_List[j].educationBg == 0){
        //         Array_List[j].educationBg = '学士及以上';
        //       }else if (Array_List[j].educationBg == 1) {
        //         Array_List[j].educationBg = '硕士及以上';
        //       }else if (Array_List[j].educationBg == 2) {
        //         Array_List[j].educationBg = '博士及以上';
        //       }else if (Array_List[j].educationBg == 3) {
        //         Array_List[j].educationBg = '不限';
        //       }
        //       //国籍要求
        //       var NAT = Array_List[j].nationalityArr;
        //       for(i = 0;i<NAT.length;i++){
        //         if(NAT[i] == 0){
        //           NAT[i] = '美国';
        //         }else if (NAT[i] == 1) {
        //           NAT[i] = '英国';
        //         }else if (NAT[i] == 2) {
        //           NAT[i] = '加拿大';
        //         }else if (NAT[i] == 3) {
        //           NAT[i] = '澳大利亚';
        //         }else if (NAT[i] == 4) {
        //           NAT[i] = '新西兰';
        //         }else if (NAT[i] == 5) {
        //           NAT[i] = '爱尔兰';
        //         }else if (NAT[i] == 6) {
        //           NAT[i] = '南非';
        //         }else if (NAT[i] == 7) {
        //           NAT[i] = '英/美/澳/加华裔ABC';
        //         }else if (NAT[i] == 8) {
        //           NAT[i] = '无国籍要求';
        //         }
        //       }
        //       //年龄
        //       if(Array_List[j].ageStage == 1){
        //         Array_List[j].ageStage = '35岁以下';
        //       }else if (Array_List[j].ageStage == 2) {
        //         Array_List[j].ageStage = '50岁以下';
        //       }else if (Array_List[j].ageStage == 3) {
        //         Array_List[j].ageStage = '60岁以下';
        //       }else if (Array_List[j].ageStage == 4) {
        //         Array_List[j].ageStage = '不限';
        //       };
        //       //专业要求
        //       var MAJ = Array_List[j].majorArr;
        //       if(!MAJ){
        //         for(i = 0;i<MAJ.length;i++){
        //           if(MAJ[i] == 0){
        //             MAJ[i] = '语言学/文学、历史';
        //           }else if (MAJ[i] == 1) {
        //             MAJ[i] = '商务';
        //           }else if (MAJ[i] == 2) {
        //             MAJ[i] = '数学';
        //           }else if (MAJ[i] == 3) {
        //             MAJ[i] = '物理';
        //           }else if (MAJ[i] == 4) {
        //             MAJ[i] = '化学';
        //           }else if (MAJ[i] == 5) {
        //             MAJ[i] = '艺术';
        //           }else if (MAJ[i] == 6) {
        //             MAJ[i] = '可教授AP、IB课程';
        //           }else if (MAJ[i] == 7) {
        //             MAJ[i] = '无专业要求';
        //           }
        //         }
        //       }
        //       //工作地点
        //       var SAL = Array_List[j].salary_types;
        //       if(!SAL){
        //
        //         }else {
        //           for(i = 0;i<SAL.length;i++){
        //             if(SAL[i] == 'grosspay'){
        //               SAL[i] = '税前'
        //             }else if (SAL[i] == 'netpay') {
        //               SAL[i] = '税后'
        //             }
        //           }
        //         };
        //     };
        //     for(var i = 0;i < Array_List.length;i++){
        //       this.Lists.push({
        //         name: Array_List[i].positionName,
        //         sex:  Array_List[i].gender,
        //         nat:  Array_List[i].nationalityArr.join(','),
        //         edu:  Array_List[i].educationBg,
        //         age:  Array_List[i].ageStage,
        //         ID:Array_List[i].id,
        //         details:this.details,
        //         requests:Array_List[i].demandList,
        //         requestsLength:Array_List[i].demandList.length
        //       });
        // }
        if(responseBody.custInfoComplete == false){
          //审批通过，机构信息没有保存
          this.In_Hide = false;
          this.newAdd = false;
          this.Apply_No = true;
          this.AddNewdata = false;
        }else if (responseBody.custInfoComplete == true && posiList.length === 0) {
          //审批通过，机构信息保存,没有需求
          this.In_Hide = true;
          this.newAdd = true;
          this.Apply_No = false;
          this.Edit_Flag = true;
          this.AddNewdata = true;
        }else {
          this.PostMain_show = false;//填写信息
          this.List_ = true;//展示信息
          this.newAdd = true;
          this.In_Hide = false;
          this.Apply_No = false;
          this.Edit_Flag = true;
          this.AddNewdata = true;
          var Array_List = responseBody.postList;
          for(var j = 0;j < Array_List.length;j++){
            //性别
            if(Array_List[j].gender == 0){
              Array_List[j].gender = '男'
            }else if(Array_List[j].gender == 1){
              Array_List[j].gender = '女'
            }else if(Array_List[j].gender == 2){
              Array_List[j].gender = '不限'
            };
            //学历学位要求
            if(Array_List[j].educationBg == 1){
              Array_List[j].educationBg = '学士及以上';
            }else if (Array_List[j].educationBg == 2) {
              Array_List[j].educationBg = '硕士及以上';
            }else if (Array_List[j].educationBg == 3) {
              Array_List[j].educationBg = '博士及以上';
            }else if (Array_List[j].educationBg == 4) {
              Array_List[j].educationBg = '不限';
            }
            //国籍要求
            var NAT = Array_List[j].nationalityArr;
            for(i = 0;i<NAT.length;i++){
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
            if(Array_List[j].ageStage == 1){
              Array_List[j].ageStage = '35岁以下';
            }else if (Array_List[j].ageStage == 2) {
              Array_List[j].ageStage = '50岁以下';
            }else if (Array_List[j].ageStage == 3) {
              Array_List[j].ageStage = '60岁以下';
            }else if (Array_List[j].ageStage == 4) {
              Array_List[j].ageStage = '不限';
            };
            //专业要求
            var MAJ = Array_List[j].majorArr;
            if(!MAJ){
              for(i = 0;i<MAJ.length;i++){
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
            var SAL = Array_List[j].salary_types;
            if(!SAL){

              }else {
                for(i = 0;i<SAL.length;i++){
                  if(SAL[i] == 'grosspay'){
                    SAL[i] = '税前'
                  }else if (SAL[i] == 'netpay') {
                    SAL[i] = '税后'
                  }
                }
              };
          };
          for(var i = 0;i < Array_List.length;i++){
            this.Lists.push({
              name: Array_List[i].positionName,
              sex:  Array_List[i].gender,
              nat:  Array_List[i].nationalityArr.join(','),
              edu:  Array_List[i].educationBg,
              age:  Array_List[i].ageStage,
              ID:Array_List[i].id,
              details:this.details,
              requests:Array_List[i].demandList,
              requestsLength:Array_List[i].demandList.length
            });
          }
        }
      },
      DetailsClick (index){
        this.DetailsMask = true;
        if(index == 1){
          this.mask1 = true;
          this.mask2 = false;
          this.mask3 = false;
          this.mask4 = false;
          this.mask5 = false;
          this.mask6 = false;
        }else if (index == 2) {
          this.mask2 = true;
          this.mask1 = false;
          this.mask3 = false;
          this.mask4 = false;
          this.mask5 = false;
          this.mask6 = false;
        }else if (index == 3) {
          this.mask3 = true;
          this.mask1 = false;
          this.mask2 = false;
          this.mask4 = false;
          this.mask5 = false;
          this.mask6 = false;
        }else if (index == 4) {
          this.mask4 = true;
          this.mask1 = false;
          this.mask3 = false;
          this.mask2 = false;
          this.mask5 = false;
          this.mask6 = false;
        }else if (index == 5) {
          this.mask5 = true;
          this.mask1 = false;
          this.mask3 = false;
          this.mask4 = false;
          this.mask2 = false;
          this.mask6 = false;
        }else if (index == 6) {
          this.mask6 = true;
          this.mask1 = false;
          this.mask3 = false;
          this.mask4 = false;
          this.mask2 = false;
          this.mask5 = false;
        }else if (index == 7) {
          this.mask7 = true;
          this.mask1 = false;
          this.mask3 = false;
          this.mask4 = false;
          this.mask2 = false;
          this.mask5 = false;
          this.mask6 = false;
        }else if (index == 8) {
          this.mask8 = true;
          this.mask1 = false;
          this.mask3 = false;
          this.mask4 = false;
          this.mask2 = false;
          this.mask5 = false;
          this.mask6 = false;
          this.mask7 = false;
        }else if (index == 9) {
          this.mask9 = true;
          this.mask1 = false;
          this.mask3 = false;
          this.mask4 = false;
          this.mask2 = false;
          this.mask5 = false;
          this.mask7 = false;
          this.mask8 = false;
        };
      },
      MaskHide (e){
        if(e.target.className === 'main-div'){
          this.DetailsMask = false;
        }
      },
      //滑动
      touchMove (event){
        if(this.Lists.length <5 ){
          return false
        }else {
          if($(window).scrollTop() + $(window).height()+1 >= $(document).height()){
             this.LodingShow = true;
             this.size +=1;
             this.currentPage = this.size;
             this.pageSize = this.pageSize_;
             this.$http.get(localhost+'/cc/position/list?access_token='+access_token+'&customerId='+BcustomerId+'&pageIndex='+this.currentPage+'&pageSize='+this.pageSize).then((response) =>{
               if(this.Exh == true && this.List_ == false){
                 this.listTrue_flag = false;
               }else {
                 this.listTrue_flag = true;
               }
                this.Created(response);
                this.LodingShow = false;
             });
          }
        }
      },
      //取消
      addCen() {
        this.peopleNumber = '';
        this.date= '';
        if(this.todos.length === 0){
          $('.Demand-Top').addClass('UpTop100');
          $('.Demand-Top').removeClass('UpTop188 UpTop222 UpTop255 UpTop288  none-199 none-166 none-232');
          $('.Demand').removeClass('not-Demand');
          this.content = false;
        }else {
          if(this.todos.length === 1){
              this.inputShow = false;
              $('.Demand-Top').addClass('none-166');
              $('.Demand-Top').removeClass('UpTop100 UpTop188 UpTop222 UpTop255 UpTop288  none-199 none-232');
              $('.Demand').removeClass('not-Demand');
          };
          if(this.todos.length === 2){
              this.inputShow = false;
              $('.Demand-Top').addClass('none-199');
              $('.Demand-Top').removeClass('UpTop100 UpTop188 UpTop222 UpTop255 UpTop288  none-166 none-232');
              $('.Demand').removeClass('not-Demand');
          };
          if(this.todos.length === 3){
              this.inputShow = false;
              $('.Demand-Top').addClass('none-232');
              $('.Demand-Top').removeClass('UpTop100 UpTop188 UpTop222 UpTop255 UpTop288  none-199 none-166');
              $('.Demand').removeClass('not-Demand');
          };
        }
      },
      //展示
      clickUpDemand (){
        this.inputShow = false;
        if (this.Demand_Flag == true || this.Demand_Flag_2 == true) {
          alert("请您先完善任职要求，课程信息，福利待遇中的全部必填项，您才能提交岗位需求");
        }else {
          if($('.Demand-Top').css('bottom') == '100px'){
            if(this.todos.length === 0){
                return false
            }else {
                $('.Img-icon').addClass('Img-icon-bottom');
                if(this.todos.length === 0){
                  $('.Demand-Top').addClass('UpTop188');
                  $('.Demand-Top').removeClass('UpTop100 UpTop222 UpTop255 UpTop288  none-199 none-166 none-232');
                }
                if(this.todos.length === 1){
                  $('.Demand-Top').addClass('none-166');
                  $('.Demand-Top').removeClass('UpTop188 UpTop100 UpTop255 UpTop288  none-199 UpTop222 none-232');
                }
                if(this.todos.length === 2){
                  $('.Demand-Top').addClass('none-199');
                  $('.Demand-Top').removeClass('UpTop188 UpTop222 UpTop100 UpTop288  UpTop255 none-166 none-232');
                }
                if(this.todos.length === 3){
                  $('.Demand-Top').addClass('none-232');
                  $('.Demand-Top').removeClass('UpTop188 UpTop222 UpTop255 UpTop100  none-199 none-166 UpTop288');
                }
                this.content = true;
            };
          }else {
            $('.Img-icon').removeClass('Img-icon-bottom');
            $('.Demand-Top').addClass('UpTop100');
            $('.Demand-Top').removeClass('UpTop166 UpTop188 UpTop222 UpTop255 UpTop288  none-199 none-166 none-232');
            this.content = false;
            this.inputShow = true;
            $('.Demand').removeClass('not-Demand');
          }
        }
      },
      //新增
      clickNewDemand (){
        if (this.Demand_Flag == true || this.Demand_Flag_2 == true) {
          alert("请您先完善任职要求，课程信息，福利待遇中的全部必填项，您才能提交岗位需求");
        }else {
          if($('.Demand').hasClass('not-Demand')){
            return false
          }else {
            if(this.todos.length === 3){
              alert('您最多可以提交3条需求，待管理员对需求审批通过后方可提交更多需求，联系电话400-669-7618');
              this.inputShow = false;
              $('.Demand-Top').addClass('none-232');
              $('.Demand-Top').removeClass('UpTop100 UpTop222 UpTop255 UpTop288  none-199 none-166 UpTop188 none-100');
            }else {
              this.inputShow = true;
            }
            this.content = true;
            $('.Img-icon').addClass('Img-icon-bottom');
            if(this.todos.length === 0){
              $('.Demand-Top').addClass('UpTop188');
              $('.Demand-Top').removeClass('UpTop100 UpTop222 UpTop255 UpTop288  none-199 none-166 none-232 none-100');
            };
            if(this.todos.length === 1){
              $('.Demand-Top').addClass('UpTop222');
              $('.Demand-Top').removeClass('UpTop100 UpTop188 UpTop255 UpTop288  none-199 none-166 none-232');
            };
            if(this.todos.length === 2){
              $('.Demand-Top').addClass('UpTop255');
              $('.Demand-Top').removeClass('UpTop100 UpTop222 UpTop188 UpTop288  none-199 none-166 none-232');
            };
          }
        }
      },
      //后退
      BackOff (){
        if(this.Apply_No == true || this.In_Hide == true){
          location.href = "/module/Login_home.html";
        };
        if(this.List_ == true){
          location.href = "/module/Login_home.html";
          this.List_ = false;
        };
        if(this.Exh == true && this.List_ == false){
          location.href="/module/Login_demand.html"
        };
        if(this.PostMain_show == true && this.StepsHide == true){
          location.href="/module/Login_demand.html"
        }else if(this.PostMain_show == true && this.StepsHide == false){
          this.headerTitle = '需求管理';
          this.List_ = false;
          this.Exh = true;
          this.AddNewDemandShow = true;
          this.AddNewdata = false;
          this.PostMain_show = false;
          this.StepsHide == false;
        };
      },
      //任职要求 -》保存
      Job_Save_ (){
        this.PostName=this.PostName.replace(/(^\s*)|(\s*$)/g,"");
        if(this.PostName.length === 0){
          this.public1 = true;
        };
        if(this.sex.length === 0){
          this.public2 = true;
        };
        if(this.BackEdu.length === 0){
          this.public3 = true;
        };
        if(this.Major.length === 0){
          this.public4 = true;
        };
        if(this.Inter.length === 0){
          this.public5 = true;
        };
        if(this.Age.length === 0){
          this.public6 = true;
        };
        //非必填
        this.Certificate=this.Certificate.replace(/(^\s*)|(\s*$)/g,"");
        this.Qualifications=this.Qualifications.replace(/(^\s*)|(\s*$)/g,"");
        this.Job_Req=this.Job_Req.replace(/(^\s*)|(\s*$)/g,"");
        this.Job_Duty=this.Job_Duty.replace(/(^\s*)|(\s*$)/g,"");
        this.Job_Pay=this.Job_Pay.replace(/(^\s*)|(\s*$)/g,"");
        if(this.public1 == true || this.public2 == true || this.public3 == true || this.public4 == true || this.public5 == true || this.public6 == true){
            document.body.scrollTop = 0+'px';
            return false;
        }else {
          this.$http.post(localhost+'/cc/position/create',{
            access_token:access_token,
            customerId:BcustomerId,
            positionName:this.PostName,
            gender:this.sex,
            educationBg:this.BackEdu,
            major:'['+this.Major.join(',')+']',
            nationality:'['+this.Inter.join(',')+']',
            ageStage:this.Age,
            certificate:this.Certificate,
            qualityDesc:this.Qualifications,
            jobRequire:this.Job_Req,
            jobDesc:this.Job_Duty,
            jobBenefit:this.Job_Pay,
          },{emulateJSON:true}).then((response) =>{
            if(response.body.error_code == 200){
              console.log(response.body)
              this.Position_ID = response.body.resultObj;
              this.requirements = false;
              this.information = true;
              this.Index1 = true;
              $('.number-2').addClass('active');
              $('.line-1').addClass('active');
              $('.font-2').addClass('active-font');
              document.body.scrollTop = 0+'px';
            }
          },(response) =>{

          });
        };
      },
      //课程信息 -》保存
      Course_Save_ (){
        if(this.studentAgeStage.length === 0){
          this.public7 = true;
        };
        if(this.classScale.length === 0){
          this.public8 = true;
        };
        if(this.have_textbook.length === 0){
          this.public9 = true;
        };
        this.Week = this.Week === null?'':this.Week;
        this.Week=this.Week.replace(/(^\s*)|(\s*$)/g,"");
        if(this.Week.length === 0){
          this.public10 = true;
        }
        this.ClassH = this.ClassH === null?'':this.ClassH;
        this.ClassH=this.ClassH.replace(/(^\s*)|(\s*$)/g,"");
        if(this.ClassH.length === 0){
          this.public11 = true;
        };
        this.WorkH = this.WorkH === null?'':this.WorkH;
        this.WorkH=this.WorkH.replace(/(^\s*)|(\s*$)/g,"");
        if(this.WorkH.length === 0){
          this.public12 = true;
        };
        if(this.Train.length === 0){
          this.public13 = true;
        };
        //非必填
        this.classContent_Others=this.classContent_Others.replace(/(^\s*)|(\s*$)/g,"");

        this.Study=this.Study.replace(/(^\s*)|(\s*$)/g,"");
        if(this.public7 == true || this.public8 == true || this.public9 == true || this.public11 == true || this.public12 == true || this.public13 == true){
          document.body.scrollTop = 0+'px';
          return false;
        }else {
          this.$http.post(localhost+'/cc/position/update',{
            access_token:access_token,
            id:this.Position_ID,
            customerId:BcustomerId,
            //学生年龄
            stuAgeStage:'['+this.studentAgeStage+']',
            //英语程度
            stuEnLevel:'['+this.studentEnLevel+']',
            //班级规模
            classScale:this.classScale,
            //双语助教
            chinaAssistant:this.have_chineseTA,
            //有无教材
            textbook:this.have_textbook,
            //教材名称
            textbookName:this.textbook_name,
            //有无教案
            teachPlan:this.teachPlan,
            //课时量
            weekHours:this.Week,
            //课时长
            classHours:this.ClassH,
            //每周工作时间
            weekTotalHours:this.WorkH,
            //有无岗前培训
            preJobTrain:this.Train,
            //培训安排介绍
            jobTrainDesc:this.Study
          },{emulateJSON:true}).then((response) =>{
            console.log(response.body)
            this.Position_ID = response.body.resultObj;
            this.information = false;
            this.benefits = true;
            document.body.scrollTop = 0+'px';
            $('.number-3').addClass('active');
            $('.line-2').addClass('active');
            $('.font-3').addClass('active-font');
          },(response) =>{

          })
        };
      },
      //福利待遇 -》保存
      benefits_Save_ (){
        this.Salary=this.Salary.replace(/(^\s*)|(\s*$)/g,"");
        if(this.selectedOptions.length === 0 || this.Salary.length === 0){
          this.public14 = true;
        };
        this.monthAverage=this.monthAverage.replace(/(^\s*)|(\s*$)/g,"")
        if(this.monthAverage.length === 0){
          this.public15 = true;
        };
        if(this.Cycle.length === 0){
          this.public16 = true;
        };
        if(this.Home.length === 0){
          this.public17 = true;
        };
        if(this.Insurance.length === 0){
          this.public18 = true;
        };
        this.Annual_D=this.Annual_D.replace(/(^\s*)|(\s*$)/g,"");
        if(this.Annual_D.length === 0){
          this.public19 = true;
        };

        //非必填
        this.Subsidy=this.Subsidy.replace(/(^\s*)|(\s*$)/g,"");
        this.Money=this.Money.replace(/(^\s*)|(\s*$)/g,"");
        this.P_Subsidy=this.P_Subsidy.replace(/(^\s*)|(\s*$)/g,"");
        this.Overtime=this.Overtime.replace(/(^\s*)|(\s*$)/g,"");
        this.Remarks=this.Remarks.replace(/(^\s*)|(\s*$)/g,"");
        if(this.public14 == true || this.public15 == true || this.public16 == true || this.public17 == true || this.public18 == true || this.public19 == true){
          document.body.scrollTop = 0+'px';
          return false;
        }else {
          this.$http.post(localhost+'/cc/position/update',{
            access_token:access_token,
            id:this.Position_ID,
            customerId:BcustomerId,
            //工资类型
            salaryType:this.selectedOptions.join(','),
            //工资类型
            salaryMoney:this.Salary,
            //每月工资
            salaryAveRange:this.monthAverage+'-'+this.monthAverage2,
            //绩效考核方式
            assessType:this.Cycle,
            //绩效金额
            assessMoney:this.Money,
            //外教住宿
            staffStay:this.Home,
            //房间人数
            roomHoldNum:this.Room,
            //住宿补助
            staySubsidy:this.Subsidy,
            //机票补助
            airfareSubsidy:this.Plane_T,
            //补贴金额
            airfareSubsidyMoney:this.P_Subsidy,
            //加班费
            chargeOvertime:this.Overtime,
            //保险类型
            insuranceType:this.Insurance,
            //  假期描述
            holidayDesc:this.Annual_D,
            //备注
            remarks:this.Remarks
          },{emulateJSON:true}).then((response) =>{
            console.log(response.body)
            this.Position_ID = response.body.resultObj;
            this.Exh = true;
            this.benefits = false;
            document.body.scrollTop = 0+'px';
            this.Index2 = false;
            this.Details(response.body.resultObj);
          },(response) =>{

          });
        };
      },
      //任职要求 -》修改
      Job_require_Edit (){
        this.AddNewDemandShow = false;
        //清空--必填
        this.public1 = false;
        this.public2 = false;
        this.public3 = false;
        this.public4 = false;
        this.public5 = false;
        this.public6 = false;
        this.StepsHide = false;
        $('.Brea-1').addClass('active Active-Color');
        $('.Brea-1').removeClass('NoActive-Color');
        this.Index2 = true;
        this.NewlyAdded = '／任职要求';
        document.body.scrollTop = 0+'px';
        this.New_Demand = false;
        this.Edit_Flag = false;
        this.PostMain_show = true;
        this.requirements = true;
        this.information = false;
        this.benefits = false;
        this.Exh = false;
        this.Job_Save = false;
        this.Job_Save_Edit = true;
        this.CallBackFunction();
      },
      //课程信息 -》修改
      Course_information_Edit (){
        this.AddNewDemandShow = false;
        //清空
        this.studentAgeStage = [];
        this.studentEnLevel = [];
        this.classScale = [];
        this.have_chineseTA = [];
        this.have_textbook = [];
        this.textbook_name = '';
        this.classContent = [];
        this.classContent_Others = '';
        this.ClassH = '',
        this.WorkH = '',
        this.Week = '',
        this.Train = [];
        this.Study = '';
        this.public7 = false;
        this.public8 = false;
        this.public9 = false;
        this.public10 = false;
        this.public11 = false;
        this.public12 = false;
        this.public13 = false;
        this.StepsHide = false;
        $('.Brea-1').addClass('active Active-Color');
        $('.Brea-1').removeClass('NoActive-Color');
        this.NewlyAdded = '／课程信息';
        document.body.scrollTop = 0+'px';
        this.Index2 = true;
        this.New_Demand = false;
        this.PostMain_show = true;
        this.benefits = false;
        this.information = true;
        this.requirements = false;
        this.Course_Save = false;
        this.Edit_Flag = false;
        this.Course_Save_Edit = true;
        this.Exh = false;
        this.CallBackFunction();
      },
      //福利待遇 -》修改-
      Fringe_benefits_Edit (){
        this.AddNewDemandShow = false;
        //
        this.monthAverage = '';
        this.selectedOptions = [];
        this.Salary = '';
        this.Home = '';
        this.Room = '';
        this.Subsidy = '';
        this.Cycle = '';
        this.Money = '';
        this.Plane_T = '';
        this.P_Subsidy = '';
        this.Overtime = '';
        this.subsidy = '';
        this.Insurance = '';
        this.Insurance_D = '';
        this.Buy_I = '';
        this.Annual_D = '';
        this.sick_leave = '';
        this.O_Subsidy = '';
        this.Remarks = '';
        this.public14 = false;
        this.public15 = false;
        this.public16 = false;
        this.public17 = false;
        this.public18 = false;
        this.public19 = false;
        this.StepsHide = false;
        this.benefits = true;
        this.Exh = false;
        this.New_Demand = false;
        $('.Brea-1').addClass('active Active-Color');
        $('.Brea-1').removeClass('NoActive-Color');
        document.body.scrollTop = 0+'px';
        this.NewlyAdded = '／福利待遇';
        this.Index2 = true;
        this.PostMain_show = true;
        this.information = false;
        this.requirements = false;
        this.benefits_Save = false;
        this.benefits_Save_Edit = true;
        this.CallBackFunction();
      },
      //任职要求 -》修改 -》保存
      Job_Save_Edit_ (){
        this.PostName=this.PostName.replace(/(^\s*)|(\s*$)/g,"");
        if(this.PostName.length === 0){
          this.public1 = true;
        };
        if(this.sex.length === 0){
          this.public2 = true;
        };
        if(this.BackEdu.length === 0){
          this.public3 = true;
        };
        if(this.Major.length === 0){
          this.public4 = true;
        };
        if(this.Inter.length === 0){
          this.public5 = true;
        };
        if(this.Age.length === 0){
          this.public6 = true;
        };
        //非必填
        this.Certificate=this.Certificate.replace(/(^\s*)|(\s*$)/g,"");
        this.Qualifications=this.Qualifications.replace(/(^\s*)|(\s*$)/g,"");
        this.Job_Req=this.Job_Req.replace(/(^\s*)|(\s*$)/g,"");
        this.Job_Duty=this.Job_Duty.replace(/(^\s*)|(\s*$)/g,"");
        this.Job_Pay=this.Job_Pay.replace(/(^\s*)|(\s*$)/g,"");
        if(this.public1 == true || this.public2 == true || this.public3 == true || this.public4 == true || this.public5 == true || this.public6 == true){
            document.body.scrollTop = 0+'px';
            return false;
        }else {
          this.$http.post(localhost+'/cc/position/update',{
            access_token:access_token,
            id:this.Position_ID,
            customerId:BcustomerId,
            positionName:this.PostName,
            gender:this.sex,
            educationBg:this.BackEdu,
            major:'['+this.Major.join(',')+']',
            nationality:'['+this.Inter.join(',')+']',
            ageStage:this.Age,
            certificate:this.Certificate,
            qualityDesc:this.Qualifications,
            jobRequire:this.Job_Req,
            jobDesc:this.Job_Duty,
            jobBenefit:this.Job_Pay,
          },{emulateJSON:true}).then((response) =>{
            if(response.body.error_code == 200){
              this.Position_ID = response.body.resultObj;
              this.requirements = false;
              this.information = false;
              this.Exh = true;
              this.benefits = false;
              this.Index2 = false;
              $('.Brea-1').addClass('NoActive-Color');
              $('.Brea-1').removeClass('active Active-Color');
              this.Details(response.body.resultObj);
            }
          },(response) =>{

          });
        };
      },
      //课程信息 -》修改 -》保存
      Course_Save_Edit_ (){
        if(this.studentAgeStage.length === 0){
          this.public7 = true;
        };
        if(this.classScale.length === 0){
          this.public8 = true;
        };
        if(this.have_textbook.length === 0){
          this.public9 = true;
        };
        this.Week = this.Week === null?'':this.Week;
        this.Week=this.Week.replace(/(^\s*)|(\s*$)/g,"");
        if(this.Week.length === 0){
          this.public10 = true;
        }
        this.ClassH = this.ClassH === null?'':this.ClassH;
        this.ClassH=this.ClassH.replace(/(^\s*)|(\s*$)/g,"");
        if(this.ClassH.length === 0){
          this.public11 = true;
        };
        this.WorkH = this.WorkH === null?'':this.WorkH;
        this.WorkH=this.WorkH.replace(/(^\s*)|(\s*$)/g,"");
        if(this.WorkH.length === 0){
          this.public12 = true;
        };
        if(this.Train.length === 0){
          this.public13 = true;
        };
        //非必填
        this.classContent_Others=this.classContent_Others.replace(/(^\s*)|(\s*$)/g,"");
        this.Study=this.Study.replace(/(^\s*)|(\s*$)/g,"");
        if(this.public7 == true || this.public8 == true || this.public9 == true || this.public11 == true || this.public12 == true || this.public13 == true){
          document.body.scrollTop = 0+'px';
          return false;
        }else {
          this.$http.post(localhost+'/cc/position/update',{
            access_token:access_token,
            id:this.Position_ID,
            customerId:BcustomerId,
            //学生年龄
            stuAgeStage:'['+this.studentAgeStage+']',
            //英语程度
            stuEnLevel:'['+this.studentEnLevel+']',
            //班级规模
            classScale:this.classScale,
            //双语助教
            chinaAssistant:this.have_chineseTA,
            //有无教材
            textbook:this.have_textbook,
            //教材名称
            textbookName:this.textbook_name,
            //有无教案
            teachPlan:this.teachPlan,
            //课时量
            weekHours:this.Week,
            //课时长
            classHours:this.ClassH,
            //每周工作时间
            weekTotalHours:this.WorkH,
            //有无岗前培训
            preJobTrain:this.Train,
            //培训安排介绍
            jobTrainDesc:this.Study
          },{emulateJSON:true}).then((response) =>{
            if(response.body.error_code == 200){
              this.Position_ID = response.body.resultObj;
              this.requirements = false;
              this.information = false;
              this.Exh = true;
              this.Index2 = false;
              this.benefits = false;
              $('.Brea-1').addClass('NoActive-Color');
              $('.Brea-1').removeClass('active Active-Color');
              this.Details(response.body.resultObj);
            }
          },(response) =>{

          })
        };
      },
      //福利待遇 -》修改 -》保存
      benefits_Save_Edit_ (){
        this.Salary=this.Salary.replace(/(^\s*)|(\s*$)/g,"");
        if(this.selectedOptions.length === 0 || this.Salary.length === 0){
          this.public14 = true;
        };
        this.monthAverage=this.monthAverage.replace(/(^\s*)|(\s*$)/g,"")
        if(this.monthAverage.length === 0){
          this.public15 = true;
        };
        if(this.Cycle.length === 0){
          this.public16 = true;
        };
        if(this.Home.length === 0){
          this.public17 = true;
        };
        if(this.Insurance.length === 0){
          this.public18 = true;
        };
        this.Annual_D=this.Annual_D.replace(/(^\s*)|(\s*$)/g,"");
        if(this.Annual_D.length === 0){
          this.public19 = true;
        };

        //非必填
        this.Subsidy=this.Subsidy.replace(/(^\s*)|(\s*$)/g,"");
        this.Money=this.Money.replace(/(^\s*)|(\s*$)/g,"");
        this.P_Subsidy=this.P_Subsidy.replace(/(^\s*)|(\s*$)/g,"");
        this.Overtime=this.Overtime.replace(/(^\s*)|(\s*$)/g,"");
        this.Remarks=this.Remarks.replace(/(^\s*)|(\s*$)/g,"");

        if(this.public14 == true || this.public15 == true || this.public16 == true || this.public17 == true || this.public18 == true || this.public19 == true){
          document.body.scrollTop = 0+'px';
          return false;
        }else {
          this.$http.post(localhost+'/cc/position/update',{
            access_token:access_token,
            id:this.Position_ID,
            customerId:BcustomerId,
            //工资类型
            salaryType:this.selectedOptions.join(','),
            //工资类型
            salaryMoney:this.Salary,
            //每月工资
            salaryAveRange:this.monthAverage+'-'+this.monthAverage2,
            //绩效考核方式
            assessType:this.Cycle,
            //绩效金额
            assessMoney:this.Money,
            //外教住宿
            staffStay:this.Home,
            //房间人数
            roomHoldNum:this.Room,
            //住宿补助
            staySubsidy:this.Subsidy,
            //机票补助
            airfareSubsidy:this.Plane_T,
            //补贴金额
            airfareSubsidyMoney:this.P_Subsidy,
            //加班费
            chargeOvertime:this.Overtime,
            //保险类型
            insuranceType:this.Insurance,
            //  假期描述
            holidayDesc:this.Annual_D,
            //备注
            remarks:this.Remarks
          },{emulateJSON:true}).then((response) =>{
            console.log(response.body)
            if(response.body.error_code == 200){
              this.Exh = true;
              this.benefits = false;
              this.Index2 = false;
              $('.Brea-1').addClass('NoActive-Color');
              $('.Brea-1').removeClass('active Active-Color');
              this.Details(response.body.resultObj);
            }
          },(response) =>{

          });
        };
      },
      //详情
      Details (id,index){
        event.stopPropagation();
        this.AddNewDemandShow = true;
        document.body.scrollTop = 0+'px';
        this.AddNewdata = false;
        this.paging = false;
        this.List_ = false;
        this.Exh = true;
        this.In_Hide = false;
        this.PostMain_show = false;
        this.New_Demand = true;
        this.newAdd = false;
        this.AddNewDemandShow = true;
        this.Position_ID = id;
        this.Position_Index = index;
        this.$http.get(localhost+'/cc/demand/b/list?access_token='+access_token+'&positionId='+this.Position_ID).then((response) =>{
          if(response.body.error_code === 200){
            this.todos = [];
            for(let i = 0;i<response.body.resultObj.length;i++){
              response.body.resultObj[i].status = response.body.resultObj[i].status === 0?'未处理':response.body.resultObj[i].status;
              this.todos.push({
                peopleNumber:response.body.resultObj[i].needNum,
                date:response.body.resultObj[i].expiryDate,
                Handle:response.body.resultObj[i].status,
                requestId:response.body.resultObj[i].id,
              });
            }
          }
        })
        this.$http.get(localhost+'/cc/position/detail?access_token='+access_token+'&id='+this.Position_ID).then((response) =>{
          if(response.body.error_code === 200){
            this.dataList = response.body.resultObj;
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
              if(this.dataList.chinaAssistant === '' || this.dataList.chinaAssistant === null){
                this.DetailsShow7 = false;
              }else {
                this.DetailsShow7 = true;
                this.dataList.chinaAssistant ==1?this.dataList.chinaAssistant='有':this.dataList.chinaAssistant='无';
              };
              //有无教材
              this.dataList.textbook ==1?this.dataList.textbook='有':this.dataList.textbook='无';
              if(this.dataList.textbookName === ''|| this.dataList.textbookName === null){
                this.DetailsShow8 = false;
              }else {
                this.DetailsShow8 = true;
                this.dataList.textbookName =this.dataList.textbookName;
              };
              //有无教案
              if(this.dataList.teachPlan === '' || this.dataList.teachPlan === null){
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
              if(this.dataList.jobTrainDesc === '' || this.dataList.jobTrainDesc === null){
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
              console.log(this.dataList.staySubsidy)
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
              if(this.dataList.insuranceType == 1){
                this.dataList.insuranceType = '机构已有保险可以供给外教'
              }else if(this.dataList.insuranceType == 0){
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
            };
          }
        })
      },
      //取消
      Cancel_ (){
        $('.Brea-1').addClass('NoActive-Color');
        $('.Brea-1').removeClass('active Active-Color');
        this.AddNewDemandShow = true;
        this.headerTitle = '需求管理';
        document.body.scrollTop = 0+'px';
        this.New_Demand = false;
        if(this.Edit_Flag){
          this.paging = true;
          this.PostMain_show = false;
          this.newAdd = true;
          this.Exh = false;
          this.Index2 = false;
          if(this.CustBasicInfoImperfect){
             this.In_Hide = true;
             this.Index2 = false;
          }else {
            this.List_ = true;
            this.In_Hide = false;
            this.Index2 = false;
          }
        }else {
          this.New_Demand = true;
          this.stop2 = true;
          this.Exh = true;
          this.List_ = false;
          this.PostMain_show = false;
          this.In_Hide = false;
          this.newAdd = false;
          this.Index2 = false;
        }
      },
      //课程信息上一步
      Course_step (){
        this.requirements = true;
        this.information = false;
        this.Save_Flag = true;
        document.body.scrollTop = 0+'px';
        $('.number-2').removeClass('active');
        $('.line-2').removeClass('active');
        $('.font-2').removeClass('active-font');
      },
      //福利待遇上一步
      benefits_step (){
        this.information = true;
        this.benefits = false;
        document.body.scrollTop = 0+'px';
        $('.number-3').removeClass('active');
        $('.font-3').removeClass('active-font');
      },
      //分页
      handleSizeChange(val) {
         this.pageSize_ = val;
         this.pageSize = this.pageSize_;
         this.currentPage = this.current_page;
         this.$http.get(Localhost+'/cc/to/b/position/show.action?'+'customerId'+'='+userId+'&'+'uuid'+'='+uuid+'&'+'currentPage'+'='+this.currentPage+'&'+'pageSize'+'='+this.pageSize).then((response) =>{
             this.Created(response);
         },(response) =>{

         });
       },
      handleCurrentChange(val) {
         this.currentPage = val;
         this.current_page = val;
         this.currentPage3 = val;
         this.pageSize = this.pageSize_;
         this.$http.get(Localhost+'/cc/to/b/position/show.action?'+'customerId'+'='+userId+'&'+'uuid'+'='+uuid+'&'+'currentPage'+'='+this.currentPage+'&'+'pageSize'+'='+this.pageSize).then((response) =>{
            this.Created(response);
         },(response) =>{

         });
       },
      Reverse (){
       this.Major.push('6');
       for(var i = 0;i<this.Major.length;i++){
         if(this.Major[i] == '6'){
             this.Major = [];
             this.Major.push('6');
         }
       }
       this.public4 = false;
      },
      cancel (){
       for(var i = 0;i<this.Major.length;i++){
         if(this.Major[i] == '6'){
           this.Major.splice(i,1);
           break;
         }
       }
       this.public4 = false;
      },
      Reverse1 (){
       this.Inter.push('8');
       for(var i = 0;i<this.Inter.length;i++){
         if(this.Inter[i] == '8'){
             this.Inter = [];
             this.Inter.push('8');
           }
         }
         this.public5 = false;
        },
      cancel1 (){
       for(var i = 0;i<this.Inter.length;i++){
         if(this.Inter[i] == '8'){
           this.Inter.splice(i,1);
           break;
         }
       }
       this.public5 = false;
     },
      //新增需求
      AddPost() {
        if(this.New == true){
          alert('请先完善机构信息');
        }else {
          if(this.List_){
            this.Edit_Flag = true;
          }
          this.headerTitle = '新增岗位';
          this.AddNewdata = false;
          this.AddNewDemandShow = false;
          $('.title_Data').addClass('active');
          $('.number-2').removeClass('active');
          $('.line-2').removeClass('active');
          $('.font-2').removeClass('active-font');
          $('.number-3').removeClass('active');
          $('.line-3').removeClass('active');
          $('.font-3').removeClass('active-font');
          this.requirements = true,  //任职要求
          this.PostName = '',
          this.sex = [],
          this.BackEdu = [],
          this.Major = [],
          this.Inter = [],
          this.Age = [],
          this.Certificate = '',
          this.Qualifications = '',
          this.Job_Req = '',
          this.Job_Duty = '',
          this.Job_Pay = '',
          this.information = false, //课程信息
          this.studentAgeStage = [];
          this.studentEnLevel = [];
          this.classScale = [];
          this.have_chineseTA = [];
          this.have_textbook = [];
          this.textbook_name = '';
          this.classContent = [];
          this.classContent_Others = '';
          this.ClassH = '',
          this.WorkH = '',
          this.Week = '',
          this.Train = [];
          this.Study = '';
          //福利待遇
          this.selectedOptions = [];
          this.monthAverage = '';
          this.Salary = '';
          this.Home = '';
          this.Room = '';
          this.Subsidy = '';
          this.Cycle = '';
          this.Money = '';
          this.Plane_T = '';
          this.P_Subsidy = '';
          this.Overtime = '';
          this.subsidy = '';
          this.Insurance = '';
          this.Insurance_D = '';
          this.Buy_I = '';
          this.Annual_D = '';
          this.sick_leave = '';
          this.O_Subsidy = '';
          this.Remarks = '';
          //
          this.Position_ID = '';
          this.New_Demand = false;
          this.In_Hide = false;
          this.PostMain_show = true;
          this.benefits = false,
          this.List_ = false;
          this.Exh = false;
          this.StepsHide = true;
          this.Job_Save = true;
          this.Job_Save_Edit = false;
          this.Edit_Flag = true;
          this.newAdd = false;
          this.paging = false;
          this.Index2 = true;
          this.public1 = false;
          this.public2 = false;
          this.public3 = false;
          this.public4 = false;
          this.public5 = false;
          this.public6 = false;
          this.public7 = false;
          this.public8 = false;
          this.public9 = false;
          this.public10 = false;
          this.public11 = false;
          this.public12 = false;
          this.public13 = false;
          this.public14 = false;
          this.public15 = false;
          this.public16 = false;
          this.public17 = false;
          this.public18 = false;
          this.public19 = false;
        };
      },
      DownShow() {
        this.MoreShow = true;
        this.Up_Show = true;
        this.ProHide = false;
      },
      UpShow() {
        this.MoreShow = false;
        this.Up_Show = false;
        this.ProHide = true;
      },
      HShow() {
        this.RoomHide = true;
        this.SubsidyHide = false;
        this.public17 = false;
      },
      HHide() {
        this.SubsidyHide = true;
        this.RoomHide = false;
        this.public17 = false;
      },
      PShow() {
        this.PS_sh = true;
      },
      PHide() {
        this.PS_sh = false;
      },
      TShow() {
        this.T_sh = true;
      },
      THide() {
        this.T_sh = false;
      },
      ISHow() {
        this.In_Show = true;
        this.In_Buy = false;
        this.public18 = false;
      },
      IHide() {
        this.In_Buy = true;
        this.In_Show = false;
        this.public18 = false;
      },
      TimeShow() {
        this.TimeHide = true;
      },
      Time_Hide() {
        this.TimeHide = false;
      },
      A_show() {
        this.AShow = true;
      },
      A_hide() {
        this.AShow = false;
      },
      ClassShow() {
        this.OverTime = true;
      },
      ClassHide() {
        this.OverTime = false;
      },
      addNewTodo: function() {
        if (!Number(this.peopleNumber)) {
          alert("人数请填写数字");
          return false;
        };
        if ((this.todos).length >= 3) {
          alert("最多添加三条");
        }else {
          if (this.peopleNumber != '' && this.date != '') {
             this.mask = true;
             this.$http.post(localhost+'/cc/demand/create',{
               positionId:this.Position_ID,
               needNum:this.peopleNumber,
               expiryDate:this.date.toLocaleString().split(' ')[0],
               access_token:access_token
              },{emulateJSON:true}).then((response) =>{
                this.mask = false;
                this.inputShow = false;
                $('.Demand').removeClass('not-Demand');
                this.$http.get(localhost+'/cc/demand/b/list?access_token='+access_token+'&positionId='+this.Position_ID).then((response) =>{
                  if(response.body.error_code === 200){
                    this.todos = [];
                    for(let i = 0;i<response.body.resultObj.length;i++){
                      response.body.resultObj[i].status = response.body.resultObj[i].status === 0?'未处理':response.body.resultObj[i].status;
                      this.todos.push({
                        peopleNumber:response.body.resultObj[i].needNum,
                        date:response.body.resultObj[i].expiryDate,
                        Handle:response.body.resultObj[i].status,
                        requestId:response.body.resultObj[i].id,
                      });
                    }
                  }
                })
                  if(this.todos.length === 1){
                    $('.Demand-Top').addClass('none-166');
                    $('.Demand-Top').removeClass('UpTop100 UpTop188 UpTop255 UpTop288  none-199  none-232');
                  }
                  if(this.todos.length == 2){
                    $('.Demand-Top').addClass('none-199');
                    $('.Demand-Top').removeClass('UpTop100 UpTop222 UpTop188 UpTop288  UpTop255 none-166 none-232');
                  }
                  if(this.todos.length == 3){
                    $('.Demand-Top').addClass('none-232');
                    $('.Demand-Top').removeClass('UpTop100 UpTop222 UpTop255 UpTop188  none-199 none-166 UpTop288');
                  }
                  $('.save_Add').css('background','#3183e7');
                  this.peopleNumber='';
                  this.date='';
                  this.Add_show = false;
                  this.newA = true;
               },(response) =>{

               });
          } else {
            alert("请填写期望上岗时间")
          }
          return false
        }
      },
      remove(index,reqId) {
        this.todos.splice(index, 1);
        if(this.inputShow){
          if(this.todos.length === 0){
            $('.Demand-Top').addClass('UpTop188');
            $('.Demand-Top').removeClass('UpTop100 UpTop222 UpTop255 UpTop288  none-199 none-166 none-232');
          };
          if(this.todos.length == 1){
            $('.Demand-Top').addClass('UpTop222');
            $('.Demand-Top').removeClass('UpTop100 UpTop188 UpTop255 UpTop288  none-199 none-166 none-232');
          };
          if(this.todos.length == 2){
            $('.Demand-Top').addClass('UpTop255');
            $('.Demand-Top').removeClass('UpTop100 UpTop222 UpTop188 UpTop288  none-199 none-166 none-232');
          };
        }else {
          if(this.todos.length === 0){
            this.content = false;
            $('.Img-icon').removeClass('Img-icon-bottom');
            $('.Demand-Top').addClass('none-100');
            $('.Demand-Top').removeClass('UpTop166 UpTop222 UpTop255 UpTop288  none-199 none-166 none-232');
          };
          if(this.todos.length == 1){
            $('.Demand-Top').addClass('none-166');
            $('.Demand-Top').removeClass('UpTop100 UpTop188 UpTop255 UpTop288  none-100 none-199 none-232');
          };
          if(this.todos.length == 2){
            $('.Demand-Top').addClass('none-199');
            $('.Demand-Top').removeClass('UpTop100 UpTop222 UpTop188 UpTop288  none-232 none-166 none-100');
          }
        };
        this.$http.get(localhost+'/cc/demand/delete?access_token='+access_token+'&id='+reqId).then((response) =>{

        });
      },
      //任职要求-focus
      PostName_focus (){
        this.public1 = false;
      },
      Sex_focus (){
        this.public2 = false;
      },
      BackEdu_focus (){
        this.public3 = false;
      },
      Age_focus (){
        this.public6 = false;
      },
      //课程信息-focus
      Student_focus (){
        this.public7 = false;
      },
      Scale_focus (){
        this.public8 = false;
      },
      Course_focus (){
        this.public9 = false;
      },
      Curriculum_focus (){
        this.public10 = false;
      },
      ClassH_focus (){
        this.public11 = false;
      },
      WorkH_focus (){
        this.public12 = false;
      },
      Train_focus (){
        this.public13 = false;
      },
      OtherClick (){
        this.public10 = false;
        if(this.OtherHide == true){
          this.OtherHide = false;
        }else {
          this.OtherHide = true;
        }
      },
      //福利待遇-focus
      Salary_focus (){
        this.public14 = false;
      },
      Salary_mo (){
        this.public15 = false;
      },
      Cycle_mo (){
        this.public16 = false;
      },
      Home_focus (){
        this.public17 = false;
      },
      Insurance_focus (){
        this.public18 = false;
      },
      Annual_D_focus (){
        this.public19 = false;
      },
      Course_Yes (){
        this.CourseHide = true;
        this.public9 = false;
      },
      Course_No (){
        this.CourseHide = false;
        this.public9 = false;
      }
    },
    mounted(){
      window.onscroll=function(){
        var startScollTop=$(document).scrollTop();
      };
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  .Maccount
    height:100%
    background:#eeeef5
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
      .addNewList
        margin: 10px 15px 0 15px
        float:right
        width:22px
        height:22px
        display:inline-block
        background:url('../../ilb/image/APP/icon-b-mobile@2x.png')no-repeat
        background-position: -99px -87px
        background-size: 187px 113px
    .Initialization
      .Initialization_p
        margin:53px 40px 60px
        font-size:14px
        color:#898989
        text-align:center
        .Add_
          text-decoration:underline
          color:#3183e7
          cursor:pointer
    .Apply_No
      .Apply_No_P
        margin:53px 40px 60px
        font-size:14px
        color:#898989
        text-align:center
    .Post_main
      background:#f9f9f9
      .Steps
        text-align:center
        width:100%
        height:82px
        background:#f7f8fa
        .Steps-box
          position:relative
          display:inline-block
          margin:20px auto 6.5px
          .Number
            display:inline-block
            font-size:14px
            color:#fff
            height:25px
            width:25px
            line-height:25px
            border-radius:50%
            background:#bfbfbf
            text-align:center
          .line
            display:inline-block
            vertical-align: 4px
            width:82px
            height:1px
            background:#e3e7ed
          .font
           position:absolute
           top:28.5px
           left:-18px
           font-size:14px
           color:#333
          .font-3
            width:60px
          .active
            background:#3082e7
          .active-font
            color:#3082e7
      .Demand_form
        margin:0px 0px 0 0px
        height:100%
        background: #fff
        .Job-requirements,.Course-information,.Fringe-benefits
          .Stars
            font-size:14px
            color:red
          .Stars_
            opacity:0
          .Div-box
            // float:left
            position:relative
            line-height:50px
            margin: 0 0 10px 12px
            .RMB
              position: absolute
              right: 80px
              top: 0px
              font-size: 14px
              color: #a1a1a1
            .Input_105
              width:95px
              margin-left:5px
              padding-left:10px
              outline:none
              -webkit-appearance:none
              border: 1px solid #e3e7ed
            .Input_
              width: 20px
              height: 31px
              vertical-align: -6px
              float:none
            .Input_211
              padding-left:10px
              width:93%
              border: 1px solid #e3e7ed
              outline: none
              -webkit-appearance: none
            .span-font18
              font-size: 18px
              color: #8d8d8d
            .m-right20
              margin-right:20px
          .Text
            height:100%
            .JD
              width:86%
              height:36px
              resize:none
              border:1px solid #dee5ed
              outline: none
              -webkit-appearance: none
              margin-left:15px
              padding:10px 10px 0 10px
              font-size:14px
          .C-S-Next
            width:100%
            text-align: center
            background:#f7f7fc
            .C-Next,.S-Next
              font-size:17px
              display:inline-block
              border-radius:4px
              cursor:pointer
              width:135px
              height:44px
              color:#fff
              line-height:44px
              text-align:center
              margin:38px 0 44px 0
            .C-Next
              // margin-left:115px
              background:#fff
              border:1px solid #3082e7
              color:#3082e7
            .S-Next
              margin-left:10px
              background:#3183e7
            .S-Next:hover
              background:#0062db
            .C-Next:hover
              background:#88a2c2
            .font-size
              font-size:14px
            .canleft
              width:135px
            .saveright
              width:160px
          .label
            font-size:18px
            color:#474747
            height: 46px
            line-height: 46px
            margin-right: 20px
            display:block
            .main_i-2
              position:relative
              width:20px
              height:20px
              background:url('../../ilb/image/login/icon-b-1.png') no-repeat
              background-position:-103px -17px
              vertical-align:-5px
              display:inline-block
              // margin:0 22px 0 6px
          .cancel,.Save
              font-size:17px
              display:inline-block
              border-radius:4px
              cursor:pointer
              width:135px
              height:44px
              color:#fff
              line-height:44px
              text-align:center
              margin:38px 0 44px 0
          .cancel
              margin-left:115px
              background:#9db4d1
          .Save
               margin-left:22px
               background:#3183e7
          .el-cascader-menu
            height:100% !important
        .Salary_CLASS
          height:50px
          border:1px solid #dee5ed
          border-radius:3px
          vertical-align:2px
          .el-cascader__label
            color: #8d8d8d
            font-size: 18px
            height: 50px
            line-height: 50px
          .el-input
            width:100px
            .el-input__inner
              width:100px
              height:29px
              border:none
        .DATE
          display:inline-block
          height:29px
          line-height:29px
          vertical-align: 10px
        .F_Box
          width:350px
          // float:right
          margin: 0 0 10px 15px
          position:relative
          .public
            background:url('../../ilb/image/APP/icon-warning@2x.png') no-repeat
            background-size: cover
            width: 50px
            height: 23px
            position:absolute
            top: 35px
            left:15px
          input
            height: 46px
            border-radius: 3px
            font-size: 18px
            color: #8d8d8d
          .Other
            padding-left: 10px
            width: 93%
            border: 1px solid #e3e7ed
            outline: none
            -webkit-appearance: none
        .text
          // border-bottom: 1px solid #e3e7ed
          .JD
            resize:none
            height:46px
            font-size: 14px
            color: #8d8d8d
            width: 100%
            outline:none
            -webkit-appearance:none
            border: 1px solid #e3e7ed
            padding:10px 10px 0 10px

    .Exhibition
      position:relative
      // margin:15px 20px
      .Demand_form
        height:100%
        .Job-require-show,.Course-information-show,.Fringe-benefits-show
          background:#f7f7fc
          padding:15px 20px
          margin-bottom:10px
        .Fringe-benefits-show
          margin-bottom:100px
        .Edit-data
          position:relative
          .font
            font-size:18px
            color:#333
          .line
            height:1px
            background:#e6e6e6
            margin:14px 0px 10px
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
          font-size:16px
          color:#a1a1a1
          display:inline-block
          margin-right:10px
        .userVal
          // margin-left:10px
          font-size: 16px
          color: #4b4b4b
          display:inline-block
          width:190px
          float:left
          word-wrap: break-word
        .CourseFont,.FringeFontHide
          font-size:14px
          color:#333
          width:100%
          text-align:center
          height:100px
          line-height:94px
        .F_Box
          margin-bottom:20px
    .List_Data
      .list_li
        margin-bottom:10px
        background:#fff
        width:100%
        .list_main
          padding:15px
          padding-bottom:9px
          border-bottom:1px solid #e3e7ed
          .list_title
            color:#333
            font-size:18px
            display:block
            margin-bottom:4px
            white-space:nowrap
            overflow:hidden
            text-overflow:ellipsis
            width:345px
          .list_right
            float:right
            cursor:pointer
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
             color:#3082e7
          .list_right:hover .list_p
            background-position:-29px -50px
          .list_right:hover .list_more
            color:#0062db
        .list_data
          margin:15px 15px 0
          .data_name
            display:inline-block
            display:block
            color:#a1a1a1
            font-size:16px
            margin-right:20px
            overflow: hidden/*自动隐藏文字*/
            text-overflow: ellipsis/*文字隐藏后添加省略号*/
            white-space: nowrap/*强制不换行*/
        .list_bot
          width:100%
          height:46px
          text-align:center
          line-height:46px
          border-top:1px solid #e6e6e6
          .list_peo
            display:inline-block
            width:275px
            font-size:14px
            color:#afafaf
            text-align:center
        .data_ul
          .data_li
            margin:0 40px
            height:46px
            line-height:46px
            border-top:1px dashed #e6e6e6
            border-bottom:1px dashed #e6e6e6
            span
              display:inline-block
              width:275px
              height:46px
              line-height:46px
              font-size:14px
              color:#4b4b4b
              text-align:center
        .AddMore
          margin:0px 40px
          cursor:pointer
          text-align:center
          .AP
            vertical-align: -3px
            width:20px
            height:20px
            display:inline-block
            background:url("../../ilb/image/login/login_icon.png") no-repeat
            background-position:-75px -22px
          .AF
            display: inline-block
            height: 46px
            line-height: 46px
            font-size:16px
            color:#3082e7
            vertical-align:4px
          .AP_
            height:46px
            line-height:46px
            font-size: 13px
            color: #333
            border-top:1px dashed #e6e6e6
            border-bottom:1px dashed #e6e6e6
        .AddMore:hover .AP
          background-position:-75px -50px
        .AddMore:hover .AF
          // color:#0a70ee
          color:#0062db
    .demand
      position:fixed
      bottom:0px
      float:right
      width:100%
      box-shadow: 0px 1px 3px rgba(0,0,0,0.4)
      border-radius: 4px
      background:#fff
      height:0px
      transition: all .5s
      -moz-transition: all .5s
      -webkit-transition: all .5s
      -o-transition:all .5s
      .Stop
        position: absolute
        top: -35px
        left: 50%
        margin-left: -57px
        width:114px
        background:#fff
        border: 1px solid #eee
        border-bottom: none
        .Stop_
          width:100%
          cursor:pointer
          background:#f7f7f7
          .Stop_p
            margin:0 auto
            display:block
            width:30px
            height:14px
            background:url("../../ilb/image/login/bottom.png") no-repeat
            background-position:0 -2px
        .Stop_s
          display:block
          width:100%
          font-size:14px
          color:#3183e7
          text-align:center
          height:20px
          line-height:20px
      .Stop2
          position: absolute
          top: -100px
          height:200px
          width:100%
          background:#fff
          border: 1px solid #eee
          border-bottom: none
          .Stop_
            width:100%
            display:block
            background:#fff
            height:50px
            line-height:50px
            font-size:18px
            color:#474747
            padding-left:20px
            border-bottom:1px solid #e3e7ed
            .Stop_p
              margin:0 auto
              display:block
              width:30px
              height:14px
              background:url("../../ilb/image/login/bottom.png") no-repeat
              background-position:-31px -2px
          .Stop_s
              display:block
              width:100%
              font-size:14px
              color:#3183e7
              text-align:center
              height:20px
              line-height:20px
      .demand_title
        margin: 40px auto 0px
        height: 25px
        width:100%
        span
          display:inline-block
          width:247px
          font-size:14px
          color:#afafaf
          text-align:center
      .NoAdd
        margin:40px auto 9px
        color:#b9b9b9
        height:53px
        line-height:53px
        text-align:center
        border-top:1px solid #eee
        border-bottom:1px solid #eee
        .newAdd
          color:#3183e7
          cursor:pointer
          text-decoration:underline
      .BotUl
        li
          border-bottom:1px solid #eee
          i
            // display:inline-block
            float: left
            font-style:normal
            width:230px
            height:53px
            line-height:53px
            text-align:center
          span
            // display:inline-block
            float: left
            width:300px
            height:53px
            line-height:53px
            text-align:center
          b
            // display:inline-block
            float: left
            width:190px
            height:53px
            line-height:53px
            text-align:center
            color: #3183e7
          div
            float: right
            color: #3183e7
            height: 53px
            line-height: 53px
            margin-right: 110px
            cursor:pointer
      .save_Show
        // margin-top:9px
        width:100%
        height:55px
        border:1px solid #eee
        border-left:none
        border-right:none
        .el-input__inner
          margin-top:12px
          height:30px
          border-radius:3px
          border:1px solid #dce4ed
          background:#f7f7f7
          padding-left:10px
        .people
          width:131px
          margin-left:56px
        .el-date-editor
          padding-left:100px
          height:30px
          .el-input__inner
            border:1px solid #dce4ed
            background:#f7f7f7
            width:100%
            height:30px
          .el-input__icon
            margin-top:12px
        .sav,.cen
          margin-top:12px
          float:right
          line-height:28px
          text-align:center
          width:60px
          height:28px
          border-radius:4px
          color:#fff
          cursor:pointer
        .cen
          margin-right:13px
          background:#9db4d1
        .sav
          margin-right:43px
          background:#3183e7
      .save_Add
          margin:20px auto 38px
          cursor:pointer
          width:80px
          height:28px
          background:#3183e7
          color:#fff
          line-height:28px
          text-align:center
          border-radius:4px
    .AddNewDemand
      position:fixed
      bottom:0
      width:100%
      height:100px
      background:#fff
      box-shadow: 0 2px 10px rgba(34,68,154,.1)
      .Demand-Bottom
        position:fixed
        bottom:0
        left:0
        width:100%
        border-top: 1px solid #e3e7ed
        .Demand
          height:50px
          width:100%
          text-align:center
          line-height:50px
          color:#3082e7
          font-size:18px
          display:block
        .not-Demand
          color:#8d8d8d
      .Demand-Top
        border-bottom:1px solid #e3e7ed
        position: fixed;
        bottom: 100px;
        left: 0;
        width: 100%;
        line-height:50px
        background-color: #fff;
        -webkit-transition: all .35s ease;
        transition: all .35s ease;
        -webkit-transform: translate3d(0,100%,0);
        transform: translate3d(0,100%,0);
        z-index:99
        .Img-icon
          position:absolute
          top:7px
          left:50%
          margin-left:-5px
          width:10px
          height:7px
          display:block
          background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
          background-position: -151px -62px
          background-size: 187px 113px
        .Img-icon-bottom
          background-position: -131px -62px
        .Demand
          color:#474747
          padding-left: 20px
          font-size:18px
        .Demand-content
          background:#fff
          .demand_title
            width:100%
            height:30px
            line-height:30px
            span
              display:inline-block
              font-size:14px
              color:#afafaf
              text-align:center
              margin-right:35px
          .NoAdd
            margin:40px auto 9px
            color:#b9b9b9
            height:53px
            line-height:53px
            text-align:center
            border-top:1px solid #eee
            border-bottom:1px solid #eee
            .newAdd
              color:#3183e7
              cursor:pointer
              text-decoration:underline
          .BotUl
            li
              i
                float: left
                font-style:normal
                width:55px
                height:33px
                line-height:33px
                text-align:center
                margin-left:20px
                margin-right:35px
                font-size:14px
                color: #474747
              span
                float: left
                width:90px
                height:33px
                line-height:33px
                text-align:center
                margin-right:40px
                font-size:14px
                color: #474747
              b
                // display:inline-block
                float: left
                width:53px
                height:33px
                line-height:33px
                text-align:center
                color: #474747
                margin-right:35px
                font-size:14px
                font-weight:normal
              div
                float: left
                color: #3183e7
                height: 33px
                line-height: 33px
                cursor:pointer
                font-size:14px
          .save_Show
            width:100%
            height:55px
            border-top:1px solid #eee
            .el-input__inner
              margin-top:12px
              height:30px
              border-radius:3px
              border:1px solid #dce4ed
              background:#f7f7f7
              padding-left:10px
            .people
              width:90px
              margin-left:20px
            .el-date-editor
              padding-left:10px
              height:30px
              width: 155px
              .el-input__inner
                border:1px solid #dce4ed
                background:#f7f7f7
                width:100%
                height:30px
              .el-input__icon
                margin-top:12px
            .sav,.cen
              background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
              background-position: -99px -69px
              background-size: 169px 94px
              width:19px
              height:20px
              border-radius:4px
              display:inline-block
              vertical-align: -4px
            .sav
              width:23px
              background-position: -35px -72px
            .cen
              background-position: -9px -71px
              margin:0 10px 0 15px
          .save_Add
              margin:20px auto 38px
              cursor:pointer
              width:80px
              height:28px
              background:#3183e7
              color:#fff
              line-height:28px
              text-align:center
              border-radius:4px
      .UpTop100
        bottom:100px
      .UpTop188
        bottom:188px
      .UpTop222
        bottom:222px
      .UpTop255
        bottom:255px
      .UpTop288
        bottom:288px
      .none-166
        bottom:166px
      .none-199
        bottom:199px
      .none-232
        bottom:232px
    .loading
      width:100%
      height:50px
      background:#eee
      color:red
      line-height:50px
      text-align:center
    .Details-mask
      width:100%
      height:100%
      position:fixed
      top:0
      left:0
      z-index:500
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
