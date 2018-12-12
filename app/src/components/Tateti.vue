<template>
  <div>
    <h3 v-show="players">Waiting for oppononets... </h3>
    <div class="tablero" >
      <div class="casilla" v-on:click="check(0)">
        <div v-bind:class="{circulo: circulo[0], cruz: cruz[0] }"></div>
      </div>
      <div class="casilla" v-on:click="check(1)">
        <div v-bind:class="{circulo: circulo[1], cruz: cruz[1] }"></div>
      </div>
      <div class="casilla" v-on:click="check(2)">
        <div v-bind:class="{circulo: circulo[2], cruz: cruz[2] }"></div>
      </div>
      <div class="casilla" v-on:click="check(3)">
        <div v-bind:class="{circulo: circulo[3], cruz: cruz[3] }"></div>
      </div>
      <div class="casilla" v-on:click="check(4)">
        <div v-bind:class="{circulo: circulo[4], cruz: cruz[4] }"></div>
      </div>
      <div class="casilla" v-on:click="check(5)">
        <div v-bind:class="{circulo: circulo[5], cruz: cruz[5] }"></div>
      </div>
      <div class="casilla" v-on:click="check(6)">
        <div v-bind:class="{circulo: circulo[6], cruz: cruz[6] }"></div>
      </div>
      <div class="casilla" v-on:click="check(7)">
        <div v-bind:class="{circulo: circulo[7], cruz: cruz[7] }"></div>
      </div>
      <div class="casilla" v-on:click="check(8)">
        <div v-bind:class="{circulo: circulo[8], cruz: cruz[8] }"></div>
      </div>
    </div>
    <div>
      
    </div>
    <div v-if="this.winer != null">
      <a class="button is-info" @click="reset">Play Again</a><br><br>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circulo: [false, false, false, false, false, false, false, false, false],
      cruz: [false, false, false, false, false, false, false, false, false],
      counter: 1,
      boardStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      gameOver: false,
      winer: null,
      //oculto: true
    };
  },
  props: {
    players: Boolean 
  },
  methods: {
    check(box) {
      if (this.gameOver != true) {
        if (this.cruz[box] != true && this.circulo[box] != true)
        if (this.counter % 2 != 0) {
            this.cruz[box] = true;
            this.$forceUpdate()
            this.counter++;
            this.boardStatus[box] = 1;
            this.gameStatus();
          } else {
            this.circulo[box] = true;
            this.$forceUpdate()
            this.counter++;
            this.boardStatus[box] = 2;
            this.gameStatus();
          }
        }
      },
    gameStatus() {
      if (
        (this.boardStatus[0] == 1 && this.boardStatus[1] == 1 && this.boardStatus[2] == 1) ||
        (this.boardStatus[3] == 1 && this.boardStatus[4] == 1 && this.boardStatus[5] == 1) ||
        (this.boardStatus[6] == 1 && this.boardStatus[7] == 1 && this.boardStatus[8] == 1) ||
        (this.boardStatus[0] == 1 && this.boardStatus[3] == 1 && this.boardStatus[6] == 1) ||
        (this.boardStatus[1] == 1 && this.boardStatus[4] == 1 && this.boardStatus[7] == 1) ||
        (this.boardStatus[2] == 1 && this.boardStatus[5] == 1 && this.boardStatus[8] == 1) ||
        (this.boardStatus[0] == 1 && this.boardStatus[4] == 1 && this.boardStatus[8] == 1) ||
        (this.boardStatus[2] == 1 && this.boardStatus[4] == 1 && this.boardStatus[6] == 1) ||
        (this.boardStatus[0] == 2 && this.boardStatus[1] == 2 && this.boardStatus[2] == 2) ||
        (this.boardStatus[3] == 2 && this.boardStatus[4] == 2 && this.boardStatus[5] == 2) ||
        (this.boardStatus[6] == 2 && this.boardStatus[7] == 2 && this.boardStatus[8] == 2) ||
        (this.boardStatus[0] == 2 && this.boardStatus[3] == 2 && this.boardStatus[6] == 2) ||
        (this.boardStatus[1] == 2 && this.boardStatus[4] == 2 && this.boardStatus[7] == 2) ||
        (this.boardStatus[2] == 2 && this.boardStatus[5] == 2 && this.boardStatus[8] == 2) ||
        (this.boardStatus[0] == 2 && this.boardStatus[4] == 2 && this.boardStatus[8] == 2) ||
        (this.boardStatus[2] == 2 && this.boardStatus[4] == 2 && this.boardStatus[6] == 2)) {
        this.gameOver = true;

        if (this.gameOver == true && this.counter % 2 == 0) {
          this.winer = true
          this.$emit('ganadoreluno')
        } else {
          this.winer = true
          this.$emit('ganadoreldos')
        }
      }
    },
    reset() {
      this.circulo = [false, false, false, false, false, false, false, false, false],
      this.cruz =  [false, false, false, false, false, false, false, false, false],
      this.counter = 1,
      this.boardStatus = [0, 0, 0, 0, 0, 0, 0, 0, 0],
      this.gameOver = false,
      this.winer = null
    }
  }
}
</script>

<style scoped>
.tablero {
  width: 500px;
  height: 500px;
  background:url(../assets/paper.jpg) no-repeat center top;
   position:relative
}

.casilla {
  width: 33.3%;
  height: 33.3%;
  outline: 1px solid white;
  float: left;
  cursor: pointer;
 
}
.is-info {
  margin-top :20px;
}

.casilla:hover {
  box-shadow: 3px 3px yellow inset;
}

.casilla:nth-of-type(3n + 1) {
  clear: left;
}
.tablero.oculto::before {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  background:rgba(0, 0, 0, 0.70);
  z-index: 9999
}

.cruz {
  width: 100%;
  height: 100%;
  cursor: default;
  background-image: url("../assets/cruz.png");
  background-position: center;
}

.circulo {
  width: 100%;
  height: 100%;
  cursor: default;
  background-image: url("../assets/circulo.png");
  background-position: center;
  background-size: cover;
}
</style>