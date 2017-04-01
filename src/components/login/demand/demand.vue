<template>
<div class="Body_main">
  <div class="Demand_body" id="Demand_body">
    <div class="title">
      <i class="title_Pic"></i><span class="title_Data">需求管理</span>
      <div class="Add" @click="AddPost">新增岗位</div>
    </div>
    <div class="Initialization" v-show="In_Hide">
      <div class="Initialization_p">
        您尚未提交该岗位的需求，点击新增提交新的需求
      </div>
    </div>
    <div class="Post_main" id="Post_main" v-show="PostMain_show">
      <form class="Demand_form">
        <div class="PostName F_Box">
          <label><span class="Stars">* </span> 岗位名称:</label>
          <input v-model="PostName" type="text" class="PostName1 Width220" id="PostName">
        </div>
        <div class="Sex F_Box">
          <label><span class="Stars">* </span> 性别要求:</label>
          <input type="radio" name="Sex" class="sex1 Width20" v-model="sex" value="0">男

          <input type="radio" name="Sex" class="sex2 Width20" v-model="sex" value="1">女
        </div>
        <div class="BackEdu F_Box">
          <label><span class="Stars">* </span> 教育背景要求:</label>
          <input type="checkbox" name="BackEdu" class="BackEdu1 Width20" v-model="BackEdu" value="1">TESOL/TEFL
          <input type="checkbox" name="BackEdu" v-model="BackEdu" class="BackEdu2 Width20" value="2">学士
          <input type="checkbox" name="BackEdu" v-model="BackEdu" class="BackEdu3 Width20" value="3">硕士
          <input type="checkbox" name="BackEdu" v-model="BackEdu" class="BackEdu4 Width20" value="4">博士
        </div>
        <div class="Major F_Box">
          <label><span class="Stars">* </span> 专业要求:</label>
          <input type="checkbox" v-model="Major" name="Major" class="Major1 Width20" value="1">语言学/文学、历史
          <input type="checkbox" v-model="Major" name="Major" class="Major2 Width20" value="2">商务
          <input type="checkbox" v-model="Major" name="Major" class="Major3 Width20" value="3">数学
          <input type="checkbox" v-model="Major" name="Major" class="Major4 Width20" value="4">物理
          <input type="checkbox" v-model="Major" name="Major" class="Major5 Width20" value="5">化学
          <input type="checkbox" v-model="Major" name="Major" class="Major6 Width20" value="6">艺术
          <input type="checkbox" v-model="Major" name="Major" class="Major7 Width20" value="7">可教授AP、IB课程
          <input type="checkbox" v-model="Major" name="Major" class="Major8 Width20" value="8">无专业要求
        </div>
        <div class="Exp F_Box">
          <label><span class="Stars">* </span> 教学经验要求:</label>
          <input v-model="Exp" type="text" class="Exp1 Width220" id="Exp">
        </div>
        <div class="Inter F_Box">
          <label><span class="Stars">* </span> 国籍要求:</label>
          <input type="checkbox" name="Inter" class="Inter1 Width20" v-model="Inter" value="Yes">美国
          <input type="checkbox" name="Inter" class="Inter2 Width20" v-model="Inter" value="No">英国
          <input type="checkbox" name="Inter" class="Inter3 Width20" v-model="Inter" value="No">加拿大
          <input type="checkbox" name="Inter" class="Inter4 Width20" v-model="Inter" value="No">澳大利亚
          <input type="checkbox" name="Inter" class="Inter5 Width20" v-model="Inter" value="No">新西兰
          <input type="checkbox" name="Inter" class="Inter6 Width20" v-model="Inter" value="No">爱尔兰
          <input type="checkbox" name="Inter" class="Inter7 Width20" v-model="Inter" value="No">南非
          <input type="checkbox" name="Inter" class="Inter8 Width20" v-model="Inter" value="No">英/美/澳/加华裔ABC
          <input type="checkbox" name="Inter" class="Inter9 Width20" v-model="Inter" value="No">无国籍要求
        </div>
        <div class="Age F_Box">
          <label><span class="Stars">* </span> 年龄要求:</label>
          <input type="checkbox" name="Age" class="Age1 Width20" value="Yes" v-model="Age">20-35岁
          <input type="checkbox" name="Age" class="Age2 Width20" value="No" v-model="Age">35-50岁
          <input type="checkbox" name="Age" class="Age3 Width20" value="No" v-model="Age">50-60岁
          <input type="checkbox" name="Age" class="Age4 Width20" value="No" v-model="Age">unspecified不限
        </div>
        <div class="Job F_Box">
          <label><span class="Stars">* </span> 工作地点:</label>
          <input v-model="Job" type="text" class="Job1 Width220" id="Job">
        </div>
        <div class="Salary F_Box">
          <label><span class="Stars">* </span> 月薪:</label>
          <input v-model="Salary" type="text" class="salary1 Width220" id="Salary">
        </div>
        <div class="Week F_Box">
          <label>周课时量:</label>
          <input v-model="Week" type="text" class="week1 Width220" id="Week">
        </div>
        <div class="ClassH F_Box">
          <label>课时时长:</label>
          <input v-model="ClassH" type="text" class="classh1 Width220" id="ClassH">
        </div>
        <div class="WorkH F_Box">
          <label>每周工作时间:</label>
          <input v-model="WorkH" type="text" class="workh1 Width220" id="WorkH">
        </div>
        <div class="Cycle F_Box">
          <label> 绩效考核方式:</label>
          <input type="radio" v-model="Cycle" name="cycle" class="Cycle1 Width20" value="Yes">月度

          <input type="radio" v-model="Cycle" name="cycle" class="Cycle2 Width20" value="No">季度

          <input type="radio" v-model="Cycle" name="cycle" class="Cycle3 Width20" value="No">年度

          <input type="radio" v-model="Cycle" name="cycle" class="Cycle4 Width20" value="No">其他
        </div>
        <div class="Money F_Box">
          <label> 绩效金额:</label>
          <input v-model="Money" type="text" class="money1 Width220" id="Money">
        </div>
        <div class="Prompt" v-show="ProHide">
          <p class="Prompt_p">填写更完善的信息，以便我们更好的了解您的需求</p>
          <div class="GoDown" @click="DownShow">
            <span>去完善</span>
            <i class="Down"></i>
          </div>
        </div>
        <form class="More_Inf" v-show="MoreShow">
          <div class="Home F_Box">
            <label>外教住宿:</label>
            <input type="radio" name="Home" v-model="Home" class="home1 Width20" value="Yes" @click="HShow">解决

            <input type="radio" name="Home" v-model="Home" class="home2 Width20" value="No" @click="HHide">不解决
          </div>
          <div class="Room F_Box" v-show="RoomHide">
            <label>房间人数:</label>
            <input v-model="Room" type="text" class="room1 Width220" id="Room">
          </div>
          <div class="Subsidy F_Box" v-show="SubsidyHide">
            <label>住宿补助:</label>
            <input v-model="Subsidy" type="text" class="subsidy1 Width220" id="Subsidy">
          </div>
          <div class="Plane_T F_Box">
            <label>机票补助:</label>
            <input type="radio" name="Plane_T" v-model="Plane_T" class="Plane1 Width20" value="Yes" @click="PShow">有

            <input type="radio" name="Plane_T" v-model="Plane_T" class="Plane2 Width20" value="No" @click="PHide">无
          </div>
          <div class="P_Subsidy F_Box" v-show="PS_sh">
            <label>补贴金额:</label>
            <input v-model="P_Subsidy" type="text" class="P_Subsidy1 Width220" id="P_Subsidy">
          </div>
          <div class="Tourism F_Box">
            <label>旅游补助:</label>
            <input type="radio" v-model="Tourism" name="Tourism" class="tourism1 Width20" value="Yes" @click="TShow">有

            <input type="radio" v-model="Tourism" name="Tourism" class="tourism2 Width20" value="No" @click="THide">无
          </div>
          <div class="T_Subsidy F_Box" v-show="T_sh">
            <label>补贴金额:</label>
            <input v-model="T_Subsidy" type="text" class="T_Subsidy1 Width220" id="T_Subsidy">
          </div>
          <div class="Contract F_Box">
            <label>完成合同奖金:</label>
            <input v-model="Contract" type="text" class="contract1 Width220" id="Contract">
          </div>
          <div class="O_Subsidy F_Box">
            <label>其他补助:</label>
            <input v-model="O_Subsidy" type="text" class="O_Subsidy1 Width220" id="O_Subsidy">
          </div>
          <div class="Class_H F_Box">
            <label>是否超课时:</label>
            <input type="radio" name="Class_H" v-model="Class_H" class="Class_H1 Width20" value="Yes" @click="ClassShow">有

            <input type="radio" name="Class_H" v-model="Class_H" class="Class_H2 Width20" value="No" @click="ClassHide">无
          </div>
          <div class="Overtime F_Box" v-show="OverTime">
            <label>超时薪资:</label>
            <input v-model="Overtime" type="text" class="overtime1 Width220" id="Overtime">
          </div>
          <div class="Capital F_Box">
            <label>发薪日:</label>
            <input v-model="Capital" type="text" class="capital1 Width220" id="Capital">
          </div>
          <div class="Mode F_Box">
            <label>发薪方式:</label>
            <input type="checkbox" name="Mode" v-model="Mode" class="Mode1 Width20" value="Yes">外币
            <input type="checkbox" name="Mode" v-model="Mode" class="Mode2 Width20" value="No">人民币
            <input type="checkbox" name="Mode" v-model="Mode" class="Mode3 Width20" value="No">支付国外账户
            <input type="checkbox" name="Mode" v-model="Mode" class="Mode4 Width20" value="No">国内开户
          </div>
          <div class="Bank F_Box">
            <label>协助办理银行开户:</label>
            <input type="radio" name="Bank" v-model="Bank" class="Bank1 Width20" value="Yes">是

            <input type="radio" name="Bank" v-model="Bank" class="Bank2 Width20" value="No">否
          </div>
          <div class="Insurance F_Box">
            <label>购买保险类型:</label>
            <input type="radio" v-model="Insurance" name="Insurance" class="Insurance1 Width20" value="Yes" @click="ISHow">自有保险

            <input type="radio" name="Insurance" class="Insurance2 Width20" value="No" @click="IHide">无保险
          </div>
          <div class="Insurance_D F_Box" v-show="In_Show">
            <label>保险描述:</label>
            <input v-model="Insurance_D" type="text" class="Insurance_D1 Width220" id="Insurance_D">
          </div>
          <div class="Buy_I F_Box" v-show="In_Buy">
            <label>需购保险:</label>
            <input type="radio" name="Buy_I" v-model="Buy_I" class="Buy_I1 Width20" value="Yes">国家外专局制定保险A款

            <input type="radio" name="Buy_I" v-model="Buy_I" class="Buy_I2 Width20" value="No">国家外专局制定保险B款

            <input type="radio" name="Buy_I" v-model="Buy_I" class="Buy_I3 Width20" value="Yes">国家外专局制定保险C款
          </div>
          <div class="Contract_T F_Box">
            <label>合同期限:</label>
            <input type="radio" name="Contract_T" v-model="Contract_T" class="Contract_T1 Width20" value="Yes" @click="Time_Hide">一个学期

            <input type="radio" name="Contract_T" v-model="Contract_T" class="Contract_T2 Width20" value="No" @click="Time_Hide">两个学期

            <input type="radio" name="Contract_T" v-model="Contract_T" class="Contract_T3 Width20" value="Yes" @click="Time_Hide">一年

            <input type="radio" name="Contract_T" v-model="Contract_T" class="Contract_T4 Width20" value="Yes" @click="TimeShow">其他
          </div>
          <div class="Time_D F_Box" v-show="TimeHide">
            <label>期限描述:</label>
            <input v-model="Time_D" type="text" class="Time_D1 Width220" id="Time_D">
          </div>
          <div class="Annual_L F_Box">
            <label>带薪年假:</label>
            <input type="radio" name="Annual_L" v-model="Annual_L" class="Annual_L1 Width20" value="Yes" @click="A_show">有

            <input type="radio" name="Annual_L" v-model="Annual_L" class="Annual_L2 Width20" value="No" @click="A_hide">无
          </div>
          <div class="Annual_D F_Box" v-show="AShow">
            <label>年假天数:</label>
            <input :readonly="readonly" v-model="Annual_D" type="text" class="Annual_D1 Width220" id="Annual_D">
          </div>
          <div class="Job_Req F_Box">
            <label>JD岗位要求:</label>
            <textarea class="Job_Req1" v-model="Job_Req" value=""></textarea>
          </div>
          <div class="Job_Duty F_Box">
            <label>JD工作职责:</label>
            <textarea class="Job_Duty1" v-model="Job_Duty" value=""></textarea>
          </div>
          <div class="Job_Pay F_Box">
            <label>JD薪酬福利:</label>
            <textarea class="Job_Pay1" v-model="Job_Pay" value=""></textarea>
          </div>
        </form>
        <div class="GoUp" @click="UpShow" v-show="Up_Show">
          <i class="Up"></i>
          <span>收起详情</span>
        </div>
        <div class="cancel">取消</div>
        <div class="Save" @click="Save_">保存</div>
      </form>
    </div>
    <div class="Exhibition" v-show="Exh">
      <form class="Demand_form">
        <div class="Edit" @click="Edit_">
          <i class="EP"></i>
          <span class="edit">编辑</span>
        </div>
        <div class="PostName F_Box">
          <label>岗位名称:</label>
          <span class="userVal">{{this.Data.index1}}</span>
        </div>
        <div class="Sex F_Box">
          <label> 性别要求:</label>
          <span class="userVal">{{this.Data.index2}}</span>
        </div>
        <div class="BackEdu F_Box">
          <label>教育背景要求:</label>
          <span class="userVal">{{this.Data.index3}}</span>
        </div>
        <div class="Major F_Box">
          <label>专业要求:</label>
          <span class="userVal">{{this.Data.index4}}</span>
        </div>
        <div class="Exp F_Box">
          <label>教学经验要求:</label>
          <span class="userVal">{{this.Data.index5}}</span>
        </div>
        <div class="Inter F_Box">
          <label>国籍要求:</label>
          <span class="userVal">{{this.Data.index6}}</span>
        </div>
        <div class="Age F_Box">
          <label>年龄要求:</label>
          <span class="userVal">{{this.Data.index6}}</span>
        </div>
        <div class="Job F_Box">
          <label>工作地点:</label>
          <span class="userVal">{{this.Data.index7}}</span>
        </div>
        <div class="Salary F_Box">
          <label>月薪:</label>
          <span class="userVal">{{this.Data.index8}}</span>
        </div>
        <div class="Week F_Box">
          <label>周课时量:</label>
          <span class="userVal">{{this.Data.index9}}</span>
        </div>
        <div class="ClassH F_Box">
          <label>课时时长:</label>
          <span class="userVal">{{this.Data.index10}}</span>
        </div>
        <div class="WorkH F_Box">
          <label>每周工作时间:</label>
          <span class="userVal">{{this.Data.index11}}</span>
        </div>
        <div class="Cycle F_Box">
          <label> 绩效考核方式:</label>
          <span class="userVal">{{this.Data.index12}}</span>
        </div>
        <div class="Money F_Box">
          <label> 绩效金额:</label>
          <span class="userVal">{{this.Data.index13}}</span>
        </div>
        <div class="Home F_Box">
          <label>外教住宿:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Room F_Box">
          <label>房间人数:</label>
          <span class="userVal">{{this.Data.index15}}</span>
        </div>
        <div class="Subsidy F_Box">
          <label>住宿补助:</label>
          <span class="userVal">{{this.Data.index16}}</span>
        </div>
        <div class="Plane_T F_Box">
          <label>机票补助:</label>
          <span class="userVal">{{this.Data.index17}}</span>
        </div>
        <div class="P_Subsidy F_Box">
          <label>补贴金额:</label>
          <span class="userVal">{{this.Data.index18}}</span>
        </div>
        <div class="Tourism F_Box">
          <label>旅游补助:</label>
          <span class="userVal">{{this.Data.index19}}</span>
        </div>
        <div class="T_Subsidy F_Box">
          <label>补贴金额:</label>
          <span class="userVal">{{this.Data.index20}}</span>
        </div>
        <div class="Contract F_Box">
          <label>完成合同奖金:</label>
          <span class="userVal">{{this.Data.index22}}</span>
        </div>
        <div class="O_Subsidy F_Box">
          <label>其他补助:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Class_H F_Box">
          <label>是否超课时:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Overtime F_Box">
          <label>超时薪资:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Capital F_Box">
          <label>发薪日:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Mode F_Box">
          <label>发薪方式:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Bank F_Box">
          <label>协助办理银行开户:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Insurance F_Box">
          <label>购买保险类型:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Insurance_D F_Box">
          <label>保险描述:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Buy_I F_Box">
          <label>需购保险:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Contract_T F_Box">
          <label>合同期限:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Time_D F_Box">
          <label>期限描述:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Annual_L F_Box">
          <label>带薪年假:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Annual_D F_Box">
          <label>年假天数:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Job_Req F_Box">
          <label>JD岗位要求:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Job_Duty F_Box">
          <label>JD工作职责:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
        <div class="Job_Pay F_Box">
          <label>JD薪酬福利:</label>
          <span class="userVal">{{this.Data.index14}}</span>
        </div>
      </form>
    </div>
    <ul v-show="List_" class="List_Data">
      <li v-for="(list, index) in Lists" class="list_li">
        <div class="list_main">
          <span class="list_title">岗位名称:{{list.name}}</span>
          <div class="list_right">
              <i class="list_p"></i>
              <span class="list_more">详情</span>
           </div>
         </div>
        <div class="list_data clear">
          <span class="data_name">性别要求：{{list.sex}}</span>
          <span class="data_name">国籍要求：{{list.nat}}</span>
          <span class="data_name">教育背景：{{list.edu}}</span>
          <span class="data_name">年龄要求：{{list.age}}</span>
          <span class="data_name">专业要求：{{list.maj}}</span>
          <span class="data_name">工作地点：{{list.wor}}</span>
          <span class="data_name">教学经验：{{list.tea}}</span>
          <span class="data_name">提供月薪：{{list.mon}}</span>
        </div>
        <div class="list_bot">
              <span class="list_peo">人数需求</span>
              <span class="list_peo">期望上岗时间</span>
              <span class="list_peo">状态</span>
          </div>
        <ul class="data_ul">
            <li class="data_li" v-for="(data, index) in Datas">
              <span class="data_peo">{{data.m}}</span/>
              <span class="data_time">{{data.p}}</span/>
              <span class="data_state">{{data.t}}</span/>
            </li>
          </ul>
        <div class="AddMore">
            <i class="AP"></i>
            <span class="AF">添加需求</span>
            </div>
      </li>
    </ul>
  </div>
<div class="demand">
  <div class="Stop" @click="BottomUp" v-show="stop1">
    <div class="Stop_">
      <i class="Stop_p"></i>
    </div>
    <span class="Stop_s">收起</span>
  </div>
  <div class="Stop2" @click="BottomDown" v-show="stop2">
    <div class="Stop_">
      <i class="Stop_p"></i>
    </div>
    <span class="Stop_s">新增需求</span>
  </div>
  <div v-show="content" id="content">
    <div class="demand_title">
      <span>人数要求</span>
      <span>期望上岗时间</span>
      <span>状态</span>
      <span>操作</span>
    </div>
    <ul class="BotUl">
      <li is="todo-item" v-for="(todo, index) in todos" v-bind:title="todo" v-on:remove="remove(index)">
      </li>
    </ul>
    <p class="NoAdd" v-show="NoAdd">您尚未提交该岗位的任何需求，请点击<span class="newAdd" @click="new_Add">新增需求</span>进行提交</p>
    <div class="save_Show" v-show="Add_show">
      <el-input v-model="peopleNumber" class="people" placeholder="填写人数需求"></el-input>
      <el-date-picker v-model="date" type="date" placeholder="填写期望上岗时间" :picker-options="pickerOptions0">
      </el-date-picker>
      <div class="sav" @click="addNewTodo">提交</div>
      <div class="cen" @click="addCen">取消</div>
    </div>
    <div class="save_Add" @click="new_Add">新增需求
    </div>
  </div>
</div>
</div>
</template>

<script>
import Vue from 'vue';
import $ from 'jquery';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(ElementUI);


Vue.component('todo-item', {
  template: '\
    <li>\
    <i>{{ title.peopleNumber }}</i>\
    <span>{{ title.date }}</span>\
    <b>{{ title.Handle }}</b>\
    <div v-on:click="$emit(\'remove\')">删除</div>\
    </li>\
  ',
  props: ['title']
});

export default {
  props: {
    Data: {
      type: Object
    }
  },
  data() {
    return {
      demand: {},
      In_Hide: true,
      PostMain_show: false,
      MoreShow: false,
      ProHide: true,
      Up_Show: false,
      RoomHide: false,
      SubsidyHide: false,
      PS_sh: false,
      T_sh: false,
      In_Show: false,
      In_Buy: false,
      TimeHide: false,
      AShow: false,
      OverTime: false,
      peopleNumber: '',
      PostName: '',
      sex: '',
      BackEdu: [],
      Major: [],
      Exp: '',
      Inter: [],
      Age: [],
      Job: '',
      Salary: '',
      Week: '',
      ClassH: '',
      WorkH: '',
      Cycle: [],
      Money: '',
      Home: [],
      Room: '',
      Subsidy: '',
      Plane_T: [],
      P_Subsidy: '',
      Tourism: [],
      T_Subsidy: '',
      Contract: '',
      O_Subsidy: '',
      Class_H: [],
      Overtime: '',
      Capital: '',
      Mode: [],
      Bank: [],
      Insurance: [],
      Insurance_D: '',
      Buy_I: '',
      Contract_T: '',
      Time_D: '',
      Annual_L: '',
      Annual_D: '',
      Job_Req: '',
      Job_Duty: '',
      Job_Pay: '',
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
      List_: false,
      Exh:false
    }
  },
  methods: {
    AddPost() {
      this.In_Hide = false;
      this.PostMain_show = true;
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
    },
    HHide() {
      this.SubsidyHide = true;
      this.RoomHide = false;
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
    },
    IHide() {
      this.In_Buy = true;
      this.In_Show = false;
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
    Save_() {
      this.PostMain_show = false;
      this.newUser = false;
      this.Data.index21 = false;
      this.List_ = true;
      this.Datas = this.Data.map;

      this.Lists.push({
        name: '英语老师',
        sex: this.sex,
        nat: this.Inter,
        edu: $('.BackEdu1').val(),
        age: this.Age,
        maj: this.Major,
        wor: this.Job,
        tea: this.Exp,
        mon: this.Salary,
        peo1: '11',
        time1: '22',
        state1: '未处理'
      });
    },
    addNewTodo: function() {
      if (!Number(this.peopleNumber)) {
        alert("人数请填写数字");
        return false
      }
      if (this.peopleNumber != '' && this.date != '') {
        //  this.$http.post('http://192.168.199.121/cc/receiveRegister.action',{phoneNumber:this.peopleNumber,password:this.date.toLocaleString()}).then((response) =>{
        //       console.log(response.body);
        //       this.todos.push({peopleNumber:response.body.phoneNumber,date:response.body.time.toLocaleString()});
        //       this.peopleNumber='';
        //       this.date='';
        //    },(response) =>{
        //       console.log('打印错误信息')
        //    });

        var timer = this.date.toLocaleString();
        this.todos.push({
          peopleNumber: this.peopleNumber,
          date: timer.slice(0, 10)
        });
        this.peopleNumber = '';
        this.date = '';
        this.Add_show = false;
        this.newA = true;
      } else {
        alert("输入内容不能为空")
      }
      return false
    },
    new_Add() {
      if ((this.todos).length <= 2) {
        this.Add_show = true;
        this.NoAdd = false;
      } else {
        alert("最多添加三条");
      }
    },
    addCen() {
      if ((this.todos).length === 0) {
        this.NoAdd = true;
      }
      this.Add_show = false;
    },
    remove(index) {
      this.todos.splice(index, 1);
      if ((this.todos).length === 0) {
        this.NoAdd = true;
      }
    },
    BottomUp() {
      this.content = false;
      this.stop1 = false;
      this.stop2 = true;
    },
    BottomDown() {
      if (this.PostMain_show) {
        alert("请先填写完成需求信息")
      } else {
        this.content = true;
        this.stop1 = true;
        this.stop2 = false;
      }

    },
    Edit_() {
      this.PostMain_show = true;
      this.Data.index21 = false;
      this.PostName = this.Data.index2;
      //--------------性别--------------------
      this.Data.index10 === 'value20' ? $('.sex1').attr('checked', 'checked') : $('.sex1').attr('checked', 'checked');
      //-------------教育背景要求------------------------------
      if (this.Data.key1[0]) {
        $('.BackEdu1').attr('checked', 'checked');
      };
      if (this.Data.key1[1]) {
        $('.BackEdu2').attr('checked', 'checked');
      };
      if (this.Data.key1[2]) {
        $('.BackEdu3').attr('checked', 'checked');
      };
      if (this.Data.key1[3]) {
        $('.BackEdu4').attr('checked', 'checked');
      };
      //-------------专业要求------------------------------
      if (this.Data.key1[0]) {
        $('.Major1').attr('checked', 'checked');
      };
      if (this.Data.key1[1]) {
        $('.Major2').attr('checked', 'checked');
      };
      if (this.Data.key1[2]) {
        $('.Major3').attr('checked', 'checked');
      };
      if (this.Data.key1[3]) {
        $('.Major4').attr('checked', 'checked');
      };
      if (this.Data.key1[4]) {
        $('.Major5').attr('checked', 'checked');
      };
      if (this.Data.key1[5]) {
        $('.Major6').attr('checked', 'checked');
      };
      if (this.Data.key1[6]) {
        $('.Major7').attr('checked', 'checked');
      };
      if (this.Data.key1[7]) {
        $('.Major8').attr('checked', 'checked');
      };
      //-------------教学经验要求------------------------------
      this.Exp = this.Data.index11;
      //-------------国籍要求------------------------------
      if (this.Data.key1[0]) {
        $('.Inter1').attr('checked', 'checked');
      };
      if (this.Data.key1[1]) {
        $('.Inter2').attr('checked', 'checked');
      };
      if (this.Data.key1[2]) {
        $('.Inter3').attr('checked', 'checked');
      };
      if (this.Data.key1[3]) {
        $('.Inter4').attr('checked', 'checked');
      };
      if (this.Data.key1[4]) {
        $('.Inter5').attr('checked', 'checked');
      };
      if (this.Data.key1[5]) {
        $('.Inter6').attr('checked', 'checked');
      };
      if (this.Data.key1[6]) {
        $('.Inter7').attr('checked', 'checked');
      };
      if (this.Data.key1[7]) {
        $('.Inter8').attr('checked', 'checked');
      };
      if (this.Data.key1[8]) {
        $('.Inter9').attr('checked', 'checked');
      };
      //-------------年龄要求------------------------------
      if (this.Data.key1[0]) {
        $('.Age1').attr('checked', 'checked');
      };
      if (this.Data.key1[1]) {
        $('.Age1').attr('checked', 'checked');
      };
      if (this.Data.key1[2]) {
        $('.Age1').attr('checked', 'checked');
      };
      if (this.Data.key1[3]) {
        $('.Age1').attr('checked', 'checked');
      };
      //-------------工作地点:------------------------------
      this.Job = this.Data.index2;
      //-------------月薪:------------------------------
      this.Salary = this.Data.index2;
      //-------------周课时量:------------------------------
      this.Week = this.Data.index2;
      //-------------工作地点:------------------------------
      this.ClassH = this.Data.index2;
      //-------------课时时长:------------------------------
      this.WorkH = this.Data.index2;
      //-------------绩效考核方式:------------------------------
      if (this.Data.index10 === 'value20') {
        $('.Cycle1').attr('checked', 'checked');
      } else if (this.Data.index10 === 'value10') {
        $('.Cycle2').attr('checked', 'checked');
      } else if (this.Data.index10 === 'value20') {
        $('.Cycle3').attr('checked', 'checked');
      } else if (this.Data.index10 === 'value20') {
        $('.Cycle4').attr('checked', 'checked');
      };
      //-------------绩效金额:-----------------------------
      this.Money = this.Data.index14
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.Body_main
  .Demand_body
    margin-top:66px
    margin-bottom: 30px
    float:right
    background:#fff
    border-radius:4px
    width:1000px
    box-shadow: 0px 1px 3px rgba(0,0,0,0.4)
    .title
      position:relative
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
      .Add
        position: absolute
        top: 11px
        right:18px
        cursor:pointer
        width:80px
        height:28px
        line-height:28px
        text-align:center
        color:#fff
        border-radius:4px
        background:#3183e7
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
    .Post_main
      background:#f9f9f9
      margin:38px 40px 47px
      .Demand_form
        margin:0 242px 0 234px
        padding-top:37px
        height:100%
        .More_Inf
          width:100%
        .Stars
          font-size:14px
          color:red
        .Width220
          margin-right:40px
        .F_Box
          height:31px
          width:100%
          margin-bottom:10px
          label
            display:inline-block
            width:120px
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
        .Job_Req,.Job_Duty,.Job_Pay
            height:100%
           .Job_Req1,.Job_Duty1,.Job_Pay1
             width:400px
             height:112px
             resize:none
        .cancel,.Save
          display:inline-block
          border-radius:4px
          cursor:pointer
          width:100px
          height:29px
          color:#fff
          line-height:29px
          text-align:center
          margin:38px 0 44px 0
        .cancel
          margin-left:115px
          background:#9db4d1
        .Save
           margin-left:22px
           background:#3183e7
        .BackEdu,.Age,.Cycle,.Mode,.Contract_T
          height:57px
        .Major,.Inter
          height:148px
        .Buy_I
          height:87px
        .Sex,.BackEdu,.Major,.Exp,.Inter,.Age,.Cycle,.Home,.Plane_T,.Tourism,.Class_H,.Mode,.Bank,.Insurance,.Buy_I,.Contract_T,.Annual_L
          .Width20
            width:20px
            height:31px
            float:none
            margin:0 5px 0 65px
            vertical-align: -10px
          .BackEdu3,.Major2,.Major4,.Major6,.Major8,.Inter3,.Inter5,.Inter7,.Inter9,.Age3,.Cycle3,.Mode3,.Buy_I2,.Buy_I3,.Contract_T3
            margin-left:189px
          .BackEdu2
            margin-left:23px
          .sex2
            margin-left:79px
          .Inter4,.Inter6,.home2,.Mode2,.Contract_T4
            margin-left:53px
          .Age2,.Age4
            margin-left:45px
          .Mode4
            margin-left:5px
          .Contract_T2,.Insurance2
            margin-left:30px
        .Prompt
          margin:50px 0 20px 0
          text-align:center
          .Prompt_p
            font-size:12px
            color:#b9b9b9
          .GoDown
            width:50px
            margin:auto
            cursor:pointer
            span
              display:block
              font-size:12px
              color:#62d173
            .Down
              display:block
              margin:auto
              width:22px
              height:18px
              background:url("../../../ilb/image/login/login_icon.png") no-repeat
              background-position:-28px -77px
        .GoUp
          margin: 50px auto 20px
          width:50px
          cursor:pointer
          span
            display:block
            font-size:12px
            color:#62d173
          .Up
            display:block
            margin:auto
            width:22px
            height:18px
            background:url("../../../ilb/image/login/login_icon.png") no-repeat
            background-position:-73px -80px
    .Exhibition
      position:relative
      background:#f9f9f9
      margin:38px 40px 47px
      .Demand_form
        margin:0 242px 0 234px
        padding-top:37px
        height:100%
        label
          display:inline-block
          width:150px
          font-size:16px
          color:#a1a1a1
          height: 31px
          line-height: 31px
        .Edit
          position:absolute
          top:20px
          right:20px
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
        .userVal
          width:100px
          margin-left:50px
          font-size: 16px
          color: #4b4b4b
          height: 41px
          line-height: 41px
    .List_Data
      margin:40px auto
      width:920px
      .list_li
        margin-bottom:40px
        background:#f9f9f9
        width:100%
        height:500px
        .list_main
          padding: 25px 0 0 50px
          .list_title
            color:#5e5e5e
            font-size:16px
          .list_right
            float:right
            cursor:pointer
            .list_p
              display:inline-block
              background:url("../../../ilb/image/login/login_icon.png") no-repeat
              background-position:-29px -20px
              width:20px
              height:25px
            .list_more
             vertical-align: 6px
             margin-right: 18px
             font-size:16px
             color:#3183e7
        .list_data
          margin:30px 0 45px 50px
          width:100%
          .data_name
            display:inline-block
            float:left
            color:#a1a1a1
            font-size:14px
            width:400px
            height:35px
            line-height:35px
        .list_bot
          width:100%
          height:25px
          line-height:25px
          border-bottom:1px solid #d2d2d2
          .list_peo
            display:inline-block
            width:300px
            font-size:14px
            color:#afafaf
            text-align:center
        .data_ul
          .data_li
            width:100%
            height:52px
            line-height:52px
            border-bottom:1px solid #d2d2d2
            span
              display:inline-block
              width:300px
              height:52px
              line-height:52px
              font-size:14px
              color:#4b4b4b
              text-align:center
        .AddMore
          width:100px
          margin:auto
          cursor:pointer
          .AP
            margin-top: 20px
            width:20px
            height:20px
            display:inline-block
            background:url("../../../ilb/image/login/login_icon.png") no-repeat
            background-position:-75px -22px
          .AF
            font-size:16px
            color:#3183e7
            vertical-align:4px
  .demand
    position:fixed
    bottom:-100px
    left:50%
    margin:66px 0 0 -400px
    float:right
    width:1000px
    // min-height:282px
    box-shadow: 0px 1px 3px rgba(0,0,0,0.4)
    border-radius: 4px
    background:#fff
    transform: translate3d(0, -100px, 0);
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
          background:url("../../../ilb/image/login/bottom.png") no-repeat
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
            background:url("../../../ilb/image/login/bottom.png") no-repeat
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
          display:inline-block
          font-style:normal
          width:230px
          height:53px
          line-height:53px
          text-align:center
        span
          display:inline-block
          width:300px
          height:53px
          line-height:53px
          text-align:center
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
</style>
