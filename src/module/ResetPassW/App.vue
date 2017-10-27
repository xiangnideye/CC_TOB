<template>
  <div id="ResetPassW">
    <v-Reset></v-Reset>
  </div>
</template>

<script>
  // import 'common/css/reset.min.css';
  import Reset from "../../components/ResetPassW/Reset"

  export default {
    name: 'ResetPassW',
    components: {
      'v-Reset':Reset
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
html,body
  background: url("../../ilb/image/zhuceBg.png") no-repeat
  background-size:cover
  height:100%
  position:relative
</style>
