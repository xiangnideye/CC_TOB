<template>
  <div id="signup">
    <v-main></v-main>
  </div>
</template>

<script>
  import 'common/css/reset.min.css';
  import main from "../../components/signup/main"

  export default {
    name: 'signup',
    components: {
      'v-main':main,
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
