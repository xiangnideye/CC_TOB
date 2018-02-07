<template>
  <!--人才社区-->
  <div id="TalentCommunity">
    <v-nav-menu></v-nav-menu>
    <div class="TalentCommunity-header">
      <span class="TalentCommunity-header-img"></span>
      <span class="index-header-position"></span>
      <div class="index-header-Hs">
        <h2 class="index-header-h2">最新动态</h2>
        <h3 class="index-header-h3">提供最前沿的外教新闻资讯、最新政策资讯及聘外指南</h3>
      </div>
    </div>
    <div class="TalentCommunity-second-menu" id="TalentCommunityHref">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="el.categoryName" :name="el.categoryName" :id="el.id" v-for="(el,index) in listArr">
          <ul class="list-ul">
            <li class="list-ul-li" v-for="(ali,index) in ulArr">
              <div class="li-left">
                <a class="title" :href="ali.url" target="_blank">{{ali.title}}</a>
                <span class="font">{{ali.summary}}</span>
                <span class="line"></span>
                <span class="time">{{ali.publishDate}}</span>
              </div>
              <div class="li-right">
                <img :src="ali.logoUrl" alt="" class="li-img">
              </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
      <el-pagination
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :page-size="10"
        :total="this.total">
      </el-pagination>
    </div>
    <div class="TalentCommunity-form">
      <div class="TalentCommunity-form-bg"></div>
      <div class="contactUs-form">
        <div class="contactUs-form-hs">
          <h2 class="contactUs-form-h2">Career China为您提供外事招聘问答服务</h2>
          <h3 class="contactUs-form-h3">如果您想要咨询更多外事招聘相关问题，请您直接在下方提问</h3>
        </div>
        <div class="contactUs-form-content">
          <div class="form-flex">
            <div class="flex-1">
              <input type="text" name="" v-model="valueMechanism" class="mechanism" :placeholder="this.mechanism" :class="{required:isRequired1,border:isBorder1}" @click="focusMechanism" maxlength="50"/>

              <input type="text" name="" v-model="valueName" class="name" :placeholder="this.name" :class="{required:isRequired2,border:isBorder2}"
              @click="focusName" maxlength="25" />
            </div>
            <div class="flex-1">
              <input type="text" name="" v-model="valuePhone" class="phonenumber" :placeholder="this.phonenumber" :class="{required:isRequired3,border:isBorder3}"
              @click="focusPhone" maxlength="25" />

              <input type="text" name="" v-model="valueWechat" class="wechat" :placeholder="this.wechat" :class="{required:isRequired4,border:isBorder4}"
              @click="focusWechat" maxlength="25" />

              <input type="text" name="" v-model="valueEmail" class="email" :placeholder="this.email" maxlength="60"
              :class="{required:isRequired5,border:isBorder5}"
              @click="focusEmail"/>
            </div>
            <div class="flex-1">
              <textarea name="name" rows="8" cols="80" :placeholder="this.Related" class="Related" v-model="valueRelated" maxlength="200"></textarea>
            </div>
            <div class="form-button" @click="postData">一键申请</div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import 'common/css/reset.min.css'
  import nav from 'components/NavMenu/NavMenu.vue'
  import footer from 'components/footer/footer.vue'
  import $ from 'jquery';
  import cookie from 'jquery.cookie';
  import localhost from '../../common/js/public.js'
  const access_token = $.cookie('B-access_token');

  export default {
    data(){
      return{
        activeName: '全部文章',
        total:2,
        listArr:[],
        ulArr:[],
        currentPage:5,
        submitHide:true,
        successHide:false,
        mechanism:"机构名称 *",
        name:"您的姓名 *",
        phonenumber:"机构手机号名称 *",
        wechat:"微信账号 *",
        email:"邮箱（选填）",
        Related:"相关备注（选填）",
        valueMechanism:'',
        valueName:'',
        valuePhone:'',
        valueWechat:'',
        valueEmail:'',
        valueRelated:'',
        isRequired1:false,
        isRequired2:false,
        isRequired3:false,
        isRequired4:false,
        isRequired5:false,
        isBorder1:false,
        isBorder2:false,
        isBorder3:false,
        isBorder4:false,
        isBorder5:false,
        ID:-1,
      }
    },
    name: 'TalentCommunity',
    components: {
      'v-nav-menu':nav,
      'v-footer':footer
    },
    created(){
      this.getNav();
      this.getArtcile(-1,1,10);
    },
    methods:{
      //获取导航
      getNav(){
        this.$http.get(localhost+'/cc/blog/busi/category/list?access_token='+access_token+'&categoryStatus='+-1).then((response)=>{
          //console.log(response.body)
          this.listArr = response.body.resultObj;
        });
      },
      //获取文字
      getArtcile(id,pageIndex,pageSize){
        this.$http.get(localhost+'/cc/blog/busi/article/list/b?access_token='+access_token+'&categoryId='+id+'&pageIndex='+pageIndex+'&pageSize='+pageSize).then((response)=>{
          //console.log(response.body)
          this.ulArr = response.body.resultObj.list;

          this.total =response.body.resultObj.count;
            console.log(this.total)
        })
      },
      handleClick(tab,event){
        // this.ID = tab.$el.id
        this.ID = tab.label == '全部文章'?-1:tab.$el.id;
          //console.log(tab.label)
          // if(tab.label == '全部'){
          //   this.getArtcile(this.ID,1,10);
          // }
        this.getArtcile(this.ID,1,10);
      },
      //当前几页
      handleCurrentChange(val) {
        this.getArtcile(this.ID,val,10);
        //console.log(`当前页: ${val}`);
      },
      postData(){
        let regUrl = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(!this.valueMechanism){
          this.isRequired1 = true;
          this.isBorder1 = true;
          this.mechanism = '请填写机构名称';
        }
        if(!this.valueName){
          this.isRequired2 = true;
          this.isBorder2 = true;
          this.name = '请填写您的姓名';
        }
        if(!this.valuePhone){
          this.isRequired3 = true;
          this.isBorder3 = true;
          this.phonenumber = '请填写您的手机号';
        }else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.valuePhone))){
          this.valuePhone = '';
          this.isRequired3 = true;
          this.isBorder3 = true;
          this.phonenumber = '请填写正确的手机号';
        }
        if(!this.valueWechat){
          this.isRequired4 = true;
          this.isBorder4 = true;
          this.wechat = '请填写您的微信账号';
        }
        if(this.valueEmail  && !regUrl.test(this.valueEmail)){
          this.isRequired5 = true;
          this.isBorder5 = true;
          this.valueEmail = '';
          this.email = '请填写正确的邮箱';
        }
        if(this.isRequired1 || this.isRequired2 || this.isRequired3 || this.isRequired4 || this.isRequired5){
          return false
        }else{
          this.$http.post(localhost+'/cc/customer/feedback/create',{
            access_token:$.cookie('B-access_token'),
            companyName:this.valueMechanism,
            contactName:this.valueName,
            contactPhone:this.valuePhone,
            wechat:this.valueWechat,
            email:this.valueEmail,
            notes:this.valueRelated,
          },{emulateJSON:true}).then((response)=>{
            if(response.body.error_code == 200){
              alert('success!')
              this.valueMechanism = ''
              this.valueName= ''
              this.valuePhone= ''
              this.valueWechat= ''
              this.valueEmail= ''
              this.valueRelated= ''
            }
          })
        };

      },
      focusMechanism(){
        this.isRequired1 = false;
        this.isBorder1 = false;
        this.mechanism = '机构名称 *';
      },
      focusName(){
        this.isRequired2 = false;
        this.isBorder2 = false;
        this.name = '您的姓名 *';
      },
      focusPhone(){
        this.isRequired3 = false;
        this.isBorder3 = false;
        this.phonenumber = '机构手机号名称 *';
      },
      focusWechat(){
        this.isRequired4 = false;
        this.isBorder4 = false;
        this.wechat = '微信账号 *';
      },
      focusEmail(){
        this.isRequired5 = false;
        this.isBorder5 = false;
        this.email = '邮箱（选填）';
      }
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  $font-weight1 = 100;
  $font-weight2 = 200;
  $font-weight3 = 300;
  $font-weight4 = 400;
  #TalentCommunity
    position:relative
    z-index:500
    min-width:1100px
    font-family:PingFang SC,Microsoft YaHei,Hiragino Sans GB,SimSun,sans-serif,Helvetica Neue,Helvetica;
    .TalentCommunity-header
      position:relative
      .index-header-position
        height:660px
        position:relative
        display:block
        z-index:-1
      .TalentCommunity-header-img
        position:fixed
        z-index:-1
        display:block
        width:100%
        height:660px
        background:url('../../common/img/bg-community-1.jpg') no-repeat 50%
        background-size:cover
      .index-header-Hs
        position:absolute
        top:268px
        left:50%
        margin-left:-456px
        width:912px
        .index-header-h2,.index-header-h3
          margin-bottom:30px
          text-align:center
          font-size: 38px
          color: #FFFFFF
          font-weight:$font-weight4
        .index-header-h3
            font-weight:$font-weight1
    .TalentCommunity-second-menu
      background: #f9fafc
      .el-tabs
        background: #F9FAFC
        .el-tabs__header
          margin:0 auto
          //width:1000px
          height:60px
          border:none
          background: #fff
          .el-tabs__nav-wrap
            width: 1000px
            margin: 0 auto;
          .el-tabs__nav
            width:1000px
            height:60px
            line-height:60px
            .el-tabs__item
              padding:0 34px
              height:60px
              line-height:60px
              font-size: 16px
              color: #7F8794
              font-weight:$font-weight1
            .is-active
              color:#2061FF
            .el-tabs__active-bar
              background: #2061ff !important
        .el-tabs__content
          .list-ul
            margin:80px auto 50px
            width:1000px
            .list-ul-li
              margin-bottom:20px
              width:1000px
              height:230px
              background:#fff
              .li-left
                float:left
                margin:60px 85px 60px 30px
                .title
                  display:block
                  margin-bottom:16px
                  width:560px
                  font-size: 24px
                  color: #424953
                  overflow:hidden
                  text-overflow:ellipsis
                  white-space:nowrap
                .font
                  display:block
                  margin-bottom:20px
                  font-weight:$font-weight2
                  width:560px
                  font-size: 14px
                  color: #7F8794
                  overflow:hidden
                  text-overflow:ellipsis
                  white-space:nowrap
                .line
                  display:block
                  margin-bottom:20px
                  background: #2061FF
                  width:28px
                  height:1px
                .time
                  display:block
                  font-size: 14px
                  color: #C6C9CF
                  font-weight:300
              .li-right
                float:left
                margin:25px 25px 25px 0
                width:300px
                height:180px
                .li-img
                  display:inline-block
                  width:300px
                  height:180px
      .el-pagination
        margin:50px auto 0px
        padding-bottom:90px
        width:362px
        text-align:center
        .el-pager
          .number,.el-icon
            width:40px
            height:40px
            line-height:40px
            text-align:center
            border:none
            margin-right:6px
          .active
            background-color: #2061ff;
        .btn-prev,.btn-next
          width:40px
          height:40px
          line-height:40px
          text-align:center
          margin-right:6px
          border:none
    .TalentCommunity-form
      position:relative
      width:100%
      background: #F9FAFC
      height:744px
      .TalentCommunity-form-bg
        background:url('../../common/img/bg-community-2.jpg') no-repeat center
        height:300px
        width:100%
        background-size:cover
      .contactUs-form
        margin:0 auto
        width: 1000px
        .contactUs-form-hs
          position:absolute
          top:80px
          left:50%
          margin-left:-273.5px
          width: 547px
          .contactUs-form-h2
            margin-bottom:20px
            font-weight: $font-weight4
            font-size: 30px
            color:#fff
          .contactUs-form-h3
            font-weight: 100
            text-align: center
            font-size: 16px
            color:#fff
        .contactUs-form-content
          position:absolute
          top:230px
          left:50%
          margin-left:-500px
          background:#fff
          width:1000px
          height:424px
          .form-flex
            margin: 50px auto 0
            width: 680px
           .flex-1
            display: flex
            .mechanism,.name,.phonenumber,.wechat,.email,.Related
              padding-left: 18px
              margin-bottom: 20px
              height: 50px
              background: #F9FAFC
              width:450px
              border:none
              font-size: 14px
              color: #87888A
              font-weight: 200
            .phonenumber,.wechat,.email
              margin-left: 10px
              width: 220px
            .phonenumber
              margin-left:0px
            .Related
              padding-top: 18px
              width: 680px
              height: 100px
              resize:none
              margin-bottom: 0
            .name
              margin-left: 10px
              width: 220px
            .border
              border: 1px solid #ED4E13
          .form-button
            margin: 40px auto 0px
            width: 180px
            height: 44px
            line-height: 44px
            text-align: center
            background: #2061FF
            font-size: 16px
            cursor: pointer
            color: #FFFFFF
  .mechanism::-webkit-input-placeholder
    color:#87888A
  .required::-webkit-input-placeholder
    color:#ED4E13
</style>
