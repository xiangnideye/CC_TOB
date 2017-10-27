<template>
  <div id="Interview">
    <v-InterviewState></v-InterviewState>
  </div>
</template>

<script>
  import InterviewState from "../../components/InterviewState/InterviewState.vue"


  export default {
    name: 'Interview',
    components: {
      'v-InterviewState':InterviewState
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">

</style>
