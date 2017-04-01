<template>
  <div id="Mobile_terminal">
    <v-terminal></v-terminal>
  </div>
</template>

<script>
  import 'common/css/reset.min.css';
  import terminal from '../../components/terminal/terminal.vue'

  export default {
    name: 'Mobile_terminal',
    components: {
      'v-terminal':terminal
    }
  }
</script>

<style lang="stylus" res="stylesheet/stylus">
</style>
