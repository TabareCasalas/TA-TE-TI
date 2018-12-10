<template>
    <div>
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
import Tateti from '../components/Tateti.vue'
import Player from '../components/Player.vue'
export default {
data () {
    return {
      
    }
  },
  components: {
    Tateti, Player
  }
}
</script>

<style>

</style>
