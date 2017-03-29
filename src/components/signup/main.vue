<template>
<div class="signup">
  <ul class="up_in" v-show="ulHide" v-on:UUP="UUP">
    <li class="Logo">Career China</li>
    <li class="land">
      <router-link to="/Land">登录</router-link>
    </li>
    <li class="sign_up">
      <router-link to="/register">注册</router-link>
    </li>
  </ul>
  <router-view></router-view>
</div>
</template>



<script>
export default {
  data (){
    return {
      ulHide:true
    }
  },
  methods:{
    UUP (){
      this.ulHide = false;
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  .signup
    width: 400px
    height: 100%
    margin:auto
    padding-top:8%
    .up_in
      margin:0px 0 67px 60px
      padding-top:80px
      width:280px
      height:40px
      li
        float:left
        cursor:pointer
        font-size:18px
        color:#b1b1b1
        font-weight:600
        text-align:center
        width:120px
        height:20px
        line-height:20px
        a
          display: inline-block
          width: 100%
          height: 100%
          color:#b1b1b1
          &.active
            color:#3183e7
      .land
        color:#3183e7
      .Logo
        padding-bottom: 30px
        width:240px
        font-weight:700
        text-align:center
        font-size:26px
        color:#3183e7
</style>
