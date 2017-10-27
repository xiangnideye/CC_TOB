<template>
  <div id="Login_data">
    <v-LoginData></v-LoginData>
  </div>
</template>

<script>
  import Login_data from "../../components/Login_data/M_data.vue"


  export default {
    name: 'Login_data',
    components: {
      'v-LoginData':Login_data
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">

</style>
