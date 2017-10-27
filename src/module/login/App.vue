<template>
<div id="login" class="clear">
  <v-header :Data="Data"></v-header>
  <v-main :Data="Data"></v-main>
</div>
</template>

<script>
import localhost from '../../common/js/public.js';
import Vue from 'vue';
import header from '../../components/login/header/header';
import main from '../../components/login/main/main';
const access_token = $.cookie('B-access_token');
const BcustomerId =  $.cookie('B-customerId');
/* eslint-disable no-new */
export default {
  data (){
    return {
      Data:0,
    }
  },
  name:'login',
  created() {
    if(!$.cookie('B-access_token')){
      this.$http.get(localhost+'/cc/bg/user/accesstoken').then((response) =>{
        if(response.body.error_code == 200){
          $.cookie('B-access_token',response.body.resultObj.access_token)
        }
      },(response) =>{

      });
    }
  },
  components:{
    'v-header':header,
    'v-main':main
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
  #login
    float:left
    min-width:100%
  .el-cascader-menu
      min-width:100px
      height:200px
</style>
