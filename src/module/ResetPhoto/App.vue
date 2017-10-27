<template>
  <div id="ResetPhoto">
    <v-ResetPhoto></v-ResetPhoto>
  </div>
</template>

<script>
  // import 'common/css/reset.min.css';
  import Reset from "../../components/ResetPhoto/ResetPhoto.vue"

  export default {
    name: 'ResetPassW',
    components: {
      'v-ResetPhoto':Reset
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
