<template>
  <div id="LoginM">
    <v-LoginM></v-LoginM>
  </div>
</template>

<script>
  import LoginM from "../../components/LoginM/LoginM.vue"
  import localhost from '../../common/js/public.js'

  export default {
    name: 'LoginM',
    components: {
      'v-LoginM':LoginM
    },
    created (){
      if($.cookie('B-access_token') === undefined || $.cookie('B-access_token') == 'null'){
        this.$http.get(localhost+'/cc/bg/user/accesstoken').then((response) =>{
          if(response.body.error_code == 200){
            $.cookie('B-access_token',response.body.resultObj.access_token)
          }
        });
      }
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
</style>
