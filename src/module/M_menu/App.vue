<template>
  <div class="M_menu">
    <span class="close" @click="closeHtml"></span>
    <div class="a-box">
      <a :href="el.href" v-for="el in HtmlArr" class="Ahref" :class="{isAcitve:el.isactive}">{{el.title}}</a>
    </div>
  </div>
</template>

<script>
import 'common/css/reset.min.css';
const getQueryString = (name)=>{
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

export default {
  data(){
    return {
      HtmlArr:[
        {
          href:'M_index.html',
          title:'首页',
          isactive:false,
        },
        {
          href:'M_Recruitment.html',
          title:'招聘流程',
          isactive:false,
        },
        {
          href:'M_Technical.html',
          title:'技术支持',
          isactive:false,
        },
        {
          href:'M_TalentCommunity.html',
          title:'人才社区',
          isactive:false,
        },
        {
          href:'M_aboutUs.html',
          title:'关于我们',
          isactive:false,
        },
      ]
    }
  },
  created(){
    let QueryString = getQueryString('page');
    this.HtmlArr.map((x)=>{
      if(QueryString == 1){
        this.HtmlArr[0].isactive = true;
      }else if (QueryString == 2) {
        this.HtmlArr[1].isactive = true;
      }else if (QueryString == 3) {
        this.HtmlArr[2].isactive = true;
      }else if (QueryString == 4) {
        this.HtmlArr[3].isactive = true;
      }else if (QueryString == 5) {
        this.HtmlArr[4].isactive = true;
      }
    })
  },
  methods:{
    closeHtml(){
      let QueryString = getQueryString('page');
      if(QueryString == 1){
        location.href='M_index.html'
      }else if (QueryString == 2) {
        location.href='M_Recruitment.html'
      }else if (QueryString == 3) {
        location.href='M_Technical.html'
      }else if (QueryString == 4) {
        location.href='M_TalentCommunity.html'
      }else if (QueryString == 5) {
        location.href='M_aboutUs.html'
      }
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .M_menu
    position:fixed
    top:0
    left:0
    z-index:2000
    width:375px
    min-height:667px
    background:#FFFFFF
    .close
      float:right
      margin:15px 20px 0 0
      width:17px
      height:17px
      background:url('../../common/img/M_img/icon-aboutus-close@2x.png') no-repeat
      background-size:contain
      cursor:pointer
    .a-box
      width:80px
      text-align:center
      margin:120px auto 0
      .Ahref
        display:block
        margin-bottom:50px
        font-size:16px
        color: #333435
        cursor:pointer
      .isAcitve
        color: #2061FF
</style>
