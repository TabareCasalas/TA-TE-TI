<template>
  <div>
    <div class="tablero">
      <div class="casilla" v-on:click="check(1)">
        <div v-bind:class="{circulo: circulo1, cruz: cruz1 }"></div>
      </div>
      <div class="casilla" v-on:click="check(2)">
        <div v-bind:class="{circulo: circulo2, cruz: cruz2 }"></div>
      </div>
      <div class="casilla" v-on:click="check(3)">
        <div v-bind:class="{circulo: circulo3, cruz: cruz3 }"></div>
      </div>
      <div class="casilla" v-on:click="check(4)">
        <div v-bind:class="{circulo: circulo4, cruz: cruz4 }"></div>
      </div>
      <div class="casilla" v-on:click="check(5)">
        <div v-bind:class="{circulo: circulo5, cruz: cruz5 }"></div>
      </div>
      <div class="casilla" v-on:click="check(6)">
        <div v-bind:class="{circulo: circulo6, cruz: cruz6 }"></div>
      </div>
      <div class="casilla" v-on:click="check(7)">
        <div v-bind:class="{circulo: circulo7, cruz: cruz7 }"></div>
      </div>
      <div class="casilla" v-on:click="check(8)">
        <div v-bind:class="{circulo: circulo8, cruz: cruz8 }"></div>
      </div>
      <div class="casilla" v-on:click="check(9)">
        <div v-bind:class="{circulo: circulo9, cruz: cruz9 }"></div>
      </div>
    </div>
    <div>
      <h1>{{this.winer}}</h1><br>
    </div>
    <div v-if="this.winer != null">
      <a class="button is-info" href="/">Play Again</a><br><br>
      <a class="button is-info" href="/Leaderboard">Leaderboard</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circulo1: false,
      circulo2: false,
      circulo3: false,
      circulo4: false,
      circulo5: false,
      circulo6: false,
      circulo7: false,
      circulo8: false,
      circulo9: false,
      cruz1: false,
      cruz2: false,
      cruz3: false,
      cruz4: false,
      cruz5: false,
      cruz6: false,
      cruz7: false,
      cruz8: false,
      cruz9: false,

      counter: 1,
      boardStatus: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      gameOver: false,
      winer: null
    };
  },
  methods: {
    check(box) {
      if (this.gameOver != true) {
        if (box == 1) {
          if (this.counter % 2 != 0) {
            this.cruz1 = true;
            this.counter++;
            this.boardStatus[0] = 1;
            this.gameStatus();
          } else {
            this.circulo1 = true;
            this.counter++;
            this.boardStatus[0] = 2;
            this.gameStatus();
          }
        }
        if (box == 2) {
          if (this.counter % 2 != 0) {
            this.cruz2 = true;
            this.counter++;
            this.boardStatus[1] = 1;
            this.gameStatus();
          } else {
            this.circulo2 = true;
            this.counter++;
            this.boardStatus[1] = 2;
            this.gameStatus();
          }
        }
        if (box == 3) {
          if (this.counter % 2 != 0) {
            this.cruz3 = true;
            this.counter++;
            this.boardStatus[2] = 1;
            this.gameStatus();
          } else {
            this.circulo3 = true;
            this.counter++;
            this.boardStatus[2] = 2;
            this.gameStatus();
          }
        }
        if (box == 4) {
          if (this.counter % 2 != 0) {
            this.cruz4 = true;
            this.counter++;
            this.boardStatus[3] = 1;
            this.gameStatus();
          } else {
            this.circulo4 = true;
            this.counter++;
            this.boardStatus[3] = 2;
            this.gameStatus();
          }
        }
        if (box == 5) {
          if (this.counter % 2 != 0) {
            this.cruz5 = true;
            this.counter++;
            this.boardStatus[4] = 1;
            this.gameStatus();
          } else {
            this.circulo5 = true;
            this.counter++;
            this.boardStatus[4] = 2;
            this.gameStatus();
          }
        }
        if (box == 6) {
          if (this.counter % 2 != 0) {
            this.cruz6 = true;
            this.counter++;
            this.boardStatus[5] = 1;
            this.gameStatus();
          } else {
            this.circulo6 = true;
            this.counter++;
            this.boardStatus[5] = 2;
            this.gameStatus();
          }
        }
        if (box == 7) {
          if (this.counter % 2 != 0) {
            this.cruz7 = true;
            this.counter++;
            this.boardStatus[6] = 1;
            this.gameStatus();
          } else {
            this.circulo7 = true;
            this.counter++;
            this.boardStatus[6] = 2;
            this.gameStatus();
          }
        }
        if (box == 8) {
          if (this.counter % 2 != 0) {
            this.cruz8 = true;
            this.counter++;
            this.boardStatus[7] = 1;
            this.gameStatus();
          } else {
            this.circulo8 = true;
            this.counter++;
            this.boardStatus[7] = 2;
            this.gameStatus();
          }
        }
        if (box == 9) {
          if (this.counter % 2 != 0) {
            this.cruz9 = true;
            this.counter++;
            this.boardStatus[8] = 1;
            this.gameStatus();
          } else {
            this.circulo9 = true;
            this.counter++;
            this.boardStatus[8] = 2;
            this.gameStatus();
          }
        }
      }
    },
    gameStatus() {
      if (
        (this.boardStatus[0] == 1 &&
          this.boardStatus[1] == 1 &&
          this.boardStatus[2] == 1) ||
        (this.boardStatus[3] == 1 &&
          this.boardStatus[4] == 1 &&
          this.boardStatus[5] == 1) ||
        (this.boardStatus[6] == 1 &&
          this.boardStatus[7] == 1 &&
          this.boardStatus[8] == 1) ||
        (this.boardStatus[0] == 1 &&
          this.boardStatus[3] == 1 &&
          this.boardStatus[6] == 1) ||
        (this.boardStatus[1] == 1 &&
          this.boardStatus[4] == 1 &&
          this.boardStatus[7] == 1) ||
        (this.boardStatus[2] == 1 &&
          this.boardStatus[5] == 1 &&
          this.boardStatus[8] == 1) ||
        (this.boardStatus[0] == 1 &&
          this.boardStatus[4] == 1 &&
          this.boardStatus[8] == 1) ||
        (this.boardStatus[2] == 1 &&
          this.boardStatus[4] == 1 &&
          this.boardStatus[6] == 1) ||
        (this.boardStatus[0] == 2 &&
          this.boardStatus[1] == 2 &&
          this.boardStatus[2] == 2) ||
        (this.boardStatus[3] == 2 &&
          this.boardStatus[4] == 2 &&
          this.boardStatus[5] == 2) ||
        (this.boardStatus[6] == 2 &&
          this.boardStatus[7] == 2 &&
          this.boardStatus[8] == 2) ||
        (this.boardStatus[0] == 2 &&
          this.boardStatus[3] == 2 &&
          this.boardStatus[6] == 2) ||
        (this.boardStatus[1] == 2 &&
          this.boardStatus[4] == 2 &&
          this.boardStatus[7] == 2) ||
        (this.boardStatus[2] == 2 &&
          this.boardStatus[5] == 2 &&
          this.boardStatus[8] == 2) ||
        (this.boardStatus[0] == 2 &&
          this.boardStatus[4] == 2 &&
          this.boardStatus[8] == 2) ||
        (this.boardStatus[2] == 2 &&
          this.boardStatus[4] == 2 &&
          this.boardStatus[6] == 2)
      ) {
        this.gameOver = true;
        if (this.counter % 2 == 0) {
          this.winer = "player 1 has won";
        } else {
          this.winer = "player 2 has won";
        }
      }
    }
  }
};
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
  outline: 1px solid black;
  float: left;
  cursor: pointer;
}

.casilla:hover {
  box-shadow: 3px 3px yellow inset;
}

.casilla:nth-of-type(3n + 1) {
  clear: left;
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