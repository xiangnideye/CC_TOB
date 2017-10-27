<template>
  <div id="Login_demand">
    <v-LoginDemand></v-LoginDemand>
  </div>
</template>

<script>
  import Login_demand from "../../components/Login_demand/M_demand.vue"

  export default {
    name: 'Login_demand',
    components: {
      'v-LoginDemand':Login_demand
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  #Login_demand
    height:100%
</style>
