<template>
  <div id="Password">
    <v-Password></v-Password>
  </div>
</template>

<script>
  import Password from "../../components/Password/Password.vue"

  export default {
    name: 'Password',
    components: {
      'v-Password':Password
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
</style>
