<template>
  <div id="Mobile_terminal">
    <v-terminal></v-terminal>
  </div>
</template>

<script>
  import terminal from '../../components/terminal/terminal.vue'
  import localhost from '../../common/js/public.js'

  export default {
    name: 'Mobile_terminal',
    components: {
      'v-terminal':terminal
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
