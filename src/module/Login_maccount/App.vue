<template>
  <div id="Login_maccount">
    <v-LoginMaccount></v-LoginMaccount>
  </div>
</template>

<script>
  import Login_maccount from "../../components/Login_maccount/Maccount.vue"

  export default {
    name: 'Login_maccount',
    components: {
      'v-LoginMaccount':Login_maccount
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
 #Login_maccount
  height:100%
</style>
