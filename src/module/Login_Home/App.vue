<template>
  <div id="Login_home">
    <v-Loginhome></v-Loginhome>
  </div>
</template>

<script>
  import Login_home from "../../components/Login_home/Login_home.vue"

  export default {
    name: 'Login_home',
    components: {
      'v-Loginhome':Login_home
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  #Login_home
    height:100%
</style>
