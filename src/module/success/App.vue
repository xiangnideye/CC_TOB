<template>
  <div id="success">
    <v-success></v-success>
  </div>
</template>

<script>
  //  import 'common/css/reset.min.css';
  import success from "../../components/success/up_success.vue"

  export default {
    name: 'success',
    components: {
      'v-success':success
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
html,body
  background: url("../../ilb/image/zhuceBg.png") no-repeat
  background-size:cover
  height:100%
#signup
  position: relative
</style>
