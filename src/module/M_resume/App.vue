<template>
  <div id="Resume">
    <v-Resume></v-Resume>
  </div>
</template>

<script>
  import Resume from "../../components/M_resume/M_resume.vue"

  export default {
    name: 'Resume',
    components: {
      'v-Resume':Resume
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
</style>
