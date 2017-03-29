<template>
  <div id="app">
    <v-header></v-header>
    <v-server></v-server>
    <v-technology></v-technology>
    <v-team></v-team>
    <v-Myclient></v-Myclient>
    <v-AboutUs></v-AboutUs>
    <v-foot></v-foot>
  </div>
</template>

<script>
  import 'common/css/reset.min.css';
  import header from 'components/index/header/header'
  import server from "components/index/server/server"
  import technology from "components/index/technology/technology"
  import Myclient from "components/index/Myclient/Myclient"
  import team from "components/index/team/team"
  import aboutUs from "components/index/AboutUS/AboutUs"
  import foot from "components/index/foot/foot"

  export default {
    name: 'app',
    components: {
      'v-header':header,
      'v-server': server,
      'v-technology': technology,
      'v-team': team,
      'v-Myclient': Myclient,
      'v-AboutUs': aboutUs,
      'v-foot': foot
    }
  }
</script>

<style></style>
