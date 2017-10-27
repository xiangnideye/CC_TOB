<template>
  <div class="Success" v-show="Success_">
    <div class="GoCareer">
      <p class="title">欢迎来到Career China</p>
      <span class="font">您还没有完善相关基本资料的填写。我们建议您现在完善这些资料，便可立即获得优质的外教人才服务。</span>
      <a class="GoData" href="/module/login.html#/data">去完善资料  </a>
      <a href="index.html" class="GoHome">我先看看，稍后完善</a>
    </div>
  </div>
</template>

<script>
export default {
    data (){
      return {
        Success_:true
      }
    }

}
</script>

<style lang="stylus" res="stylesheet/stylus">
.Success
  position:fixed
  top:50%
  left:50%
  margin-left:-200px
  margin-top:-200px
  width:400px
  height:400px
  .GoCareer
    .title
      background:#fff
      margin:0 auto 40px
      font-size:24px
      text-align:center
      color:#3183e7
      font-weight:600
    .font
        display:block
        font-size:18px
        line-height:28px
        color:#989999
        width:414px
        text-align:center
    .GoData
      display:block
      margin:85px auto 25px
      line-height:40px
      text-align:center
      color:#fff
      width:280px
      height:40px
      background:#3183e7
      border-radius:4px
    .GoHome
      display:block
      text-align:center
      font-size:14px
      color:#777
</style>
