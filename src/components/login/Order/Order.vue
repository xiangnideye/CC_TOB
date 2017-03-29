<template >
  <div class="Body_main">
    <div class="Order_body" id="Order_body">
      <div class="title">
        <i class="title_Pic"></i><span class="title_Data">需求信息</span>
        <div class="Add" @click="AddPost" v-show="AddShow">新增岗位</div>
      </div>
      <div class="Initialization" v-show="In_Hide">
        <div class="Initialization_p">
          <div class="P">
            您尚未产生任何订单，请到需求管理提交岗位需求
          </div>
            <a class="goDemand" href="/module/login.html#/demand">需求管理 </a>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      None:false,
      In_Hide:true,
      AddShow:false
    }
  },
  methods :{
    AddPost (){
      this.In_Hide = false;
      this.PostMain_show = true;
    },
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.Order_body
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
      height:200px
      font-size:14px
      color:#3183e7
      text-align:center
      background:#f9f9f9
      .P
        margin-bottom: 30px
        padding-top: 90px
      .goDemand
        display:block
        margin:auto
        width:80px
        height:28px
        border-radius:4px
        background:#0083ee
        color:#fff
        line-height:28px
        text-align:center
        cursor:pointer
</style>
