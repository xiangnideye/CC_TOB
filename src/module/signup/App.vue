<template>
  <div id="signup">
    <v-main></v-main>
  </div>
</template>

<script>

  import main from "../../components/signup/main"
  import localhost from '../../common/js/public.js'
  export default {
    name: 'signup',
    components: {
      'v-main':main,
    },
    created(){
      if(!$.cookie('B-access_token') || $.cookie('B-access_token') == 'null'){
        this.$http.get(localhost+'/cc/bg/user/accesstoken?client=B').then((response) =>{
          if(response.body.error_code == 200){
            $.cookie('B-access_token',response.body.resultObj.access_token)
          }
        });
      }
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
html,body
  height:100%
#signup
  min-height:100%
  background: url("../../ilb/image/zhuceBg.png") no-repeat
  background-size:cover
</style>
