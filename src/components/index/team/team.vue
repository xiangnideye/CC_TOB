<template>
  <div class="team" id="team">
    <div class="team_body">
      <div class="server_title">
          <p class="server_title1">精英团队</p>
          <p class="server_title2"><i></i>TEAM<i></i></p>
      </div>
      <i></i>
      <ul class="team_Ul clear">
          <li class="team_Ul1">
            <span></span>
            <div class="font">
              <h3>海外精英团队</h3>
              <p>英美澳加本土面试官：具备多年在华工作和生活经历，与目标外教沟通零时差，无代；</p>
            </div>
          </li>
          <li class="team_Ul2">
            <span></span>
            <div class="font">
              <h3>业内资深签证团队</h3>
              <p>熟悉中国法律法规和签证政策，善于对外沟通，专业签证服务全流程；
</p>
            </div>
          </li>
          <li class="team_Ul3">
            <span></span>
            <div class="font">
              <h3>国内资深招聘团队</h3>
              <p>熟悉国内机构招聘需求，深谙机构招聘痛点，完备周到的落地服务；</p>
            </div>
          </li>
          <li class="team_Ul4">
            <span></span>
            <div class="font">
              <h3>专业品牌宣传和市场推广团队</h3>
              <p>熟悉海内外网络社区，擅长品牌推广、活动策划、发布原创信息，增强用户品牌粘合度；</p>
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
    .server_title
      padding-top: 67px
      text-align:center
      color:#fff
      .server_title1
        margin-bottom:16px
        font-size:24px
      .server_title2
        font-size:14px
        margin-bottom:28px
        i
         display:inline-block
         width:30px
         height:1px
         vertical-align: 4px
         margin:0 5px
         background:#fff
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
