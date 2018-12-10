<template>
  <div id="app">
    <navBar />
    <router-view/>
  </div>
</template>

<script>
import Tateti from './components/Tateti.vue'
import Player from './components/Player.vue'
import navBar from './components/navBar.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    Tateti, Player, navBar
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
