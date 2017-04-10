<template>
<div id="login" class="clear">
  <v-header :Data="Data"></v-header>
  <v-main :Data="Data"></v-main>
</div>
</template>

<script>
import Vue from 'vue';
import $ from 'jquery';
import '../../common/js/jquery.cookie';
import '../../common/css/reset.min.css';
import header from '../../components/login/header/header';
import main from '../../components/login/main/main';
export default {
  data (){
    return {
      Data:{}
    }
  },
  name:'login',
  created() {
    var phoneNumber = $.cookie('userNum');
     this.$http.get("http://localhost:8888/cc/responseAccountInfo.action?"+"phoneNumber"+"="+phoneNumber).then((response) =>{
       this.Data = response.body;
     },(response) =>{
       
     });
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
</style>
