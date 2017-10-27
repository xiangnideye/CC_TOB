<template >
  <div class="Msuccess">
    <div class="Header">
      <a class="Return" href="/module/Login_home.html"></a>
      <span class="Font"></span>
      <span class="Header_right_img" @click="GoToHome"></span>
    </div>
    <div class="Main">
      <p class="Title">欢迎来到 Career China</p>
      <span class="Title_Font">
        您还没有完善相关基本资料的填写，我们建议您现在完善这些资料，便可立即获得优质的外教人才服务。
      </span>
      <a class="Perfect_data" href="/module/Login_data.html">去完善资料</a>
      <a class="Later_data" href="/module/Login_home.html">我先看看，稍后完善</a>
    </div>
  </div>
</template>

<script>
export default {
  methods :{
    GoToHome (){
      location.href='/module/Login_home.html';
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .Msuccess
    .Header
      position:relative
      width:100%
      height:44px
      background:#3082e6
      text-align:center
      margin-bottom:20px
      .Return
        float:left
        margin:10px 0 0 15px
        width:20px
        height:20px
        display:inline-block
        background:url('../../ilb/image/APP/icon-b-mobile@2x.png') no-repeat
        background-position: -130px -32px
        background-size: 187px 113px
      .Font
       position:absolute
       top:50%
       left:50%
       margin-top:-22px
       margin-left:-40px
       line-height:44px
       height:44px
       font-size:18px
       color:#fff
      .Header_right_img
        float:right
        margin: 10px 15px 0 0
        width:22px
        height:22px
        display:inline-block
        background:url('../../ilb/image/APP/icon-b-mobile@2x.png')no-repeat
        background-position: -130px -85px
        background-size: 187px 113px
    .Main
      width:305px
      margin:0 auto
      height:400px
      .Title
        text-align:center
        font-size:20px
        color:#474747
        margin-bottom:25px
      .Title_Font
          display: inline-block
          font-size:14px
          color:#898989
          margin-bottom:50px
      .Perfect_data,.Later_data
        display:inline-block
        width:305px
        height:44px
        line-height:44px
        text-align:center
        margin:0 auto
        border-radius:4px
        font-size:17px
      .Perfect_data
        background:#3082e7
        color:#fff
        margin-bottom:20px
      .Later_data
        width:303px
        height:42px
        line-height:42px
        background:#fff
        color:#3082e7
        border:1px solid #3082e7
</style>
