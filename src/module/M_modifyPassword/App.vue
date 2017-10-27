<template>
  <div id="Modify_Password">
    <v-Password></v-Password>
  </div>
</template>

<script>
  import Modify_Password from '../../components/Modify_Password/Modify_Password.vue'

  export default {
    name: 'Modify_Password',
    components: {
      'v-Password':Modify_Password
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
</style>
