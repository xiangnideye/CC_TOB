<template>
  <div class="team" id="team">
    <div class="team_body">
      <div class="team_title">
        <a>精英</a>团队
        <span>TEAM</span>
      </div>
      <i></i>
      <ul class="team_Ul clear">
          <li class="team_Ul1">
            <span></span>
            <div class="font">
              <h3>海外本土面试官</h3>
              <p>拥有来华工作和生活经历，和目标人才沟通零时差，无代沟；</p>
            </div>
          </li>
          <li class="team_Ul2">
            <span></span>
            <div class="font">
              <h3>国内资深招聘团队</h3>
              <p>熟悉国内机构招聘需求，深谙机构招聘痛点，服务精准落地；</p>
            </div>
          </li>
          <li class="team_Ul3">
            <span></span>
            <div class="font">
              <h3>业内资深签证团队</h3>
              <p>熟悉中国法律法规和签证政策，善于对外沟通，熟悉签证业务；</p>
            </div>
          </li>
          <li class="team_Ul4">
            <span></span>
            <div class="font">
              <h3>专业品牌宣传和市场推广团队</h3>
              <p>多年中西方工作生活经历，擅长跨文化沟通和多国工作，专业为国内用人单位进行专业线上和线下品牌宣传和市场推广；</p>
          </div>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus" res="stylesheet/stylus">
.team
  background:url('../../../ilb/image/heiban.jpg') no-repeat
  background-size:100% 100%
  min-width:1200px
  height:630px
  .team_body
    margin:0 auto
    width:1200px
    border-top:1px solid #000
    .team_title
     margin:80px 0 10px 100px
     font-size:24px
     color:#fff
    span
     vertical-align: -2px
     margin-left:8px
     color:#c7c7c7
     font-size:18px
    i
     display:inline-block
     margin-left: 102px;
     vertical-align: 12px;
     width:47px
     height:1px
     background:#c8c8c8
    .team_Ul li
      float:left
      margin-bottom:101px
      margin-left: 105px
      height:162px
      .font
       display:inline-block
       vertical-align: 59px
       width:312px
       h3
        margin:0 0 20px 24px
        font-size:14px
        color:#fff
       p
        margin-left:24px
        font-size:14px
        color:#fff
      span
        display:inline-block
        width:152px
        height:160px
    .team_Ul1
      background:url("../../../ilb/image/pinpai.png") no-repeat
    .team_Ul2
      background:url("../../../ilb/image/qianzheng.png") no-repeat
    .team_Ul3
      margin-bottom:66px !important
      background:url("../../../ilb/image/waishi.png") no-repeat
    .team_Ul4
      margin-bottom:66px !important
      background:url("../../../ilb/image/tuiguang.png") no-repeat
</style>
