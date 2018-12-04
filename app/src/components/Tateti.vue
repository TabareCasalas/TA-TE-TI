<template>
  <div>
    <div class="tablero">
      <div class="casilla">
        <div class="pieza circulo"></div>
      </div>
      <div class="casilla"></div>
      <div class="casilla"></div>
      <div class="casilla"></div>
      <div class="casilla"></div>
      <div class="casilla"></div>
      <div class="casilla"></div>
      <div class="casilla">
        <div class="pieza cruz"></div>
      </div>
      <div class="casilla"></div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .tablero {
    width: 500px;
    height: 500px;
    background-color: lightgray;
    
  }

  .casilla {
    width: 33.3%;
    height: 33.3%;
    outline:1px solid black;
    float: left;
    cursor: pointer;
  }

  .casilla:hover {
    box-shadow: 3px 3px yellow inset;
  }

  .casilla:nth-of-type(3n + 1) {
    clear:left
  }

  .pieza {
    width: 100%;
    height: 100%;
    cursor: default;
  }

  .cruz {
    background-image: url('../assets/cruz.png');
    background-position: center;
  }

  .circulo {
    background-image: url('../assets/circulo.png');
    background-position: center;
    background-size: cover;
  }
</style>