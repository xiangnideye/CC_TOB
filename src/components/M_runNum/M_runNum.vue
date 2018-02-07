<template>
  <div class="runNum-bg" :class="{'isFixed':isFixed}">
    <div class="runNum-parent clear">
      <div class="runNum-font-leftParent clear">
        <span class="runNum-font-left">CareerChina目前已提供</span>
        <div class="border-left">
          <span class="runNum-font-leftBorder"></span>
          <span class="runNum-font-leftBorder"></span>
          <span class="runNum-font-leftBorder"></span>
          <span class="runNum-font-leftBorder"></span>
        </div>
      </div>
      <div class="left-number">
        <ul class="runNum-ul" id="runNum"></ul>
      </div>
      <div class="runNum-font-rightParent clear">
        <span class="runNum-font-right">名优质外教</span>
      </div>
    </div>
  </div>
</template>

<script>

import localhost from '../../common/js/public.js';
function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
  return unescape(arr[2]);
  else
  return null;
}
const Baccess_token = getCookie('B-access_token');
export default {
  data(){
    return {
      scrollFlag:true,
      isFixed:false,
      enterpriseNum:'',
      foreignTeacherNum:'',
    }
  },
  created(){
    this.$http.get(localhost+'/cc/cust/show/cal?id='+1+'&access_token='+Baccess_token).then((response)=>{
      this.enterpriseNum = response.body.resultObj.enterpriseNum;
      this.foreignTeacherNum = response.body.resultObj.foreignTeacherNum;
    })
  },
  mounted(){
    window.onscroll = ()=>{
      let _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if(_scrollTop - 2150>=0 && _scrollTop - 2150<=900){
        this.isFixed = true;
      }else {
        this.isFixed = false;
      }
      if(_scrollTop >= '1400' && this.scrollFlag){
        this.creadData('0000',$('#runNum'));
        // this.creadData('0000',$('#runNum-right'));
        this.scrollFlag = false;
      }
    }
  },
  methods:{
    creadData:function (v,el){
        let valString = v;
        let par = {};
        var runNumJson={
          el:el,
          value:valString,
          valueStr:valString.toString(10),
          width:par.width || 21,
          height:par.height || 26,
          interval:par.interval || 500,
          speed:par.speed || 500,
          length:valString.toString(10).length
        };
        this._list(runNumJson.el,runNumJson);
        this._interval(runNumJson.el.children("li"),runNumJson);
    },
    /*初始化数字列表*/
    _list:function(el,json){
      var str='';
      for(var i=0; i<json.length;i++){
          var w=(json.width*i)+i*11;
          var t=json.height*parseInt(json.valueStr[i]);
          var h=json.height*10;
          str += `<li style="width:${json.width}px;left:${w}px;top:${t}px;height:${h}px;" class="runNum-ul-li"`
          for(var j=0;j<10;j++){
              str+=`<div style="height:${json.height}px; line-height:${json.height}px;" class="runNum-div">${j}</div>`
          }
          str+=`</li>`
      }
      el.html(str);
    },
    /*执行动画效果*/
    _interval:function (el,json){
      var val=json.value;
      let _this = this;
      setTimeout(function () {
          val=_this._random(json);
          _this._animate(el,val.toString(10),json);
      },json.interval);
    },
    /*生成随即数*/
    _random:function (json) {
        var num;
        if(json.value.length == 3){
          num = this.enterpriseNum;;
        }else {
          num = this.foreignTeacherNum;
        }
        return num;
    },
    /*动画效果*/
    _animate:function (el,value,json) {
        for(var x=0;x<json.length;x++){
            var topPx=value[x]*json.height;
            el.eq(x).animate({top:-topPx+'px'},json.speed);
        }
    },
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .runNum-bg
    width:100%
    height:96px
    background:url('../../common/img/M_img/m-bg-home-3@2x.png') no-repeat center
    background-size:cover
    font-family:PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif,Helvetica Neue,Helvetica;
    .runNum-parent
      position:relative
      margin: 30px auto 0
      width:375px
      .runNum-font-leftParent
        float:left
        .runNum-font-left
          margin-left: 22px
          float:left
          height:96px
          line-height:96px
          font-size: 14px
          color: #FFFFFF
        .border-left
          float:left
          margin:35px 0px 0 5px
          .runNum-font-leftBorder
            float:left
            margin-right:5px
            width:21px
            height:26px
            background: rgba(255,255,255,0.05)
            border: 1px solid rgba(255,255,255,0.44)
      .left-number
        position:absolute
        top:35px
        left:179px
        .runNum-ul
          width:146px
          margin: 0px auto 0
          padding: 0
          overflow: hidden
          height: 26px
          line-height: 26px
          text-align: center
          font-weight: bold
          position: relative
          .runNum-ul-li
            line-height:26px
            float: left
            position: absolute
            color:#fff
            font-family: PingFangSC
            font-size: 14px
          .runNum-ul-li:nth-child(1)
            left: -2px !important
          .runNum-ul-li:nth-child(2)
            left: 25px !important
          .runNum-ul-li:nth-child(3)
            left: 51px !important
          .runNum-ul-li:nth-child(4)
            left: 76px !important
      .runNum-font-contentParent
        float:left
        .runNum-font-content
          float:left
          height:240px
          line-height:240px
          font-size: 22px
          color: #FFFFFF
        .border-right
          float:left
          margin:92px 10px 0 10px
          .runNum-font-leftBorder
            float:left
            margin-right:10px
            width:42px
            height:52px
            background: rgba(255,255,255,0.05)
            border: 1px solid rgba(255,255,255,0.44)
      .right-number
        position:absolute
        top:92px
        left:517px
        .runNum-ul
          width:200px
          margin: 0px auto 0
          padding: 0
          overflow: hidden
          height: 55px
          line-height: 55px
          text-align: center
          font-weight: bold
          position: relative
          .runNum-ul-li
            line-height:52px
            float: left
            position: absolute
            color:#fff
            font-family: PingFangSC
            font-size: 22px
          .runNum-ul-li:nth-child(1)
            left: -6px !important
          .runNum-ul-li:nth-child(2)
            left: 44px !important
          .runNum-ul-li:nth-child(3)
            left: 96px !important
          .runNum-ul-li:nth-child(4)
            left: 150px !important
      .runNum-font-rightParent
        float:left
        .runNum-font-right
          float:left
          height:94px
          line-height:94px
          font-size: 14px
          color: #FFFFFF
</style>
