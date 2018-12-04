<template>
  <div id="app">

    <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <player msg="Player 1"/>
        </div>
        <div class="column">
          <tateti/>
        </div>
        <div class="column">
          <player msg="Player 2"/>
        </div>
      </div>
    </div>  
    </section> 
    
  </div>
</template>

<script>
import Tateti from './components/Tateti.vue'
import Player from './components/Player.vue'

export default {
  name: 'app',
  components: {
    Tateti, Player
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
  margin-top: 60px;
}
</style>
