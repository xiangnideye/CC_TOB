<template>
  <div id="resume">
    <v-resume></v-resume>
  </div>
</template>

<script>
  // import 'common/css/reset.min.css';
  import resumes from "../../components/resume/resume.vue"

  export default {
    name: 'resume',
    components: {
      'v-resume':resumes
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
  html
    background: #fbfbfb
</style>
