<template>
  <div id="app">
    <section>
      <div class="container">
        <navbar v-on:rankingtrue="rankingchange" />
      </div>
    </section>
    <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 v-if="this.playerOne.nickname">{{this.playerOne.nickname}}</h1>
          <h1 v-else>Waiting for player 1...</h1>
          <div class="stats" v-show="player1Nick"><strong>Wins: {{this.playerOne.wins}}</strong> | <strong>Draws: {{this.playerOne.draws}}</strong> | <strong>Losses: {{this.playerOne.losses}}</strong></div>
          <div class="field has-addons" v-show="enableFormNicknameOne">
              <div class="control">
                  <input class="input" type="text" :placeholder="'Jugador 1'" v-model="chosedNicknameOne">
              </div>
              <div class="control">
                  <a class="button is-info" v-on:click="checkUserOne">
                  ¡Let's play!
                  </a>
              </div>
              
          </div>
        </div>
        <div class="column">
          <div v-if="!showStats">
          <Tateti v-on:ganadoreluno="ganadorelunofn" v-on:ganadoreldos="ganadoreldosfn" :players="this.players"/>
          </div>
          <div v-else>
          <leaderboard />
          </div>
        </div>
        <div class="column">
          <h1 v-if="this.playerTwo.nickname">{{this.playerTwo.nickname}}</h1>
          <h1 v-else>Waiting for player 2...</h1>
          <div class="stats" v-show="player2Nick"><strong>Wins: {{this.playerTwo.wins}}</strong> | <strong>Draws: {{this.playerTwo.draws}}</strong> | <strong>Losses: {{this.playerTwo.losses}}</strong></div>
          <div class="field has-addons" v-show="enableFormNicknameTwo">
              <div class="control">
                  <input class="input" type="text" :placeholder="'Jugador 2'" v-model="chosedNicknameTwo">
              </div>
              <div class="control">
                  <a class="button is-info" v-on:click="checkUserTwo">
                  ¡Let's play!
                  </a>
              </div>
              
          </div>
        </div>
      </div>
    </div>  
    </section> 
  </div>
</template>

<script>
//import api from '@/general/api'
import axios from 'axios'
import Tateti from './components/Tateti.vue'
import leaderboard from './components/playersTable.vue'
import navbar from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    Tateti, leaderboard, navbar
  },
  data() {
    return {
      enableFormNicknameOne: true,
      enableFormNicknameTwo: true,
      showStats: false,
      playerOne: {
        nickname: '',
        wins: 0,
        draws: 0,
        losses: 0
      },
      playerTwo: {
        nickname: '',
        wins: 0,
        draws: 0,
        losses: 0
      },
      chosedNicknameOne: "",
      chosedNicknameTwo: "",
      player1Nick: "",
      player1Id: "",
      player2Nick: "",
      player2Id: "",
    }
  },
  
  methods: {
    rankingchange() {
      if (this.showStats == true) {
        this.showStats = false;
      } else {
        this.showStats = true;
      }
    },

    checkUserOne() {
      var comp = this
      axios.get('http://localhost:4500/users')
      .then( (users) => {
        users.data.forEach( (user) => {
          if (user.nickname == comp.chosedNicknameOne) {
            
              comp.player1Id = user._id
              comp.player1Nick = user.nickname
              comp.playerOne.nickname = user.nickname
              comp.playerOne.wins = user.wins
              comp.playerOne.draws = user.draws
              comp.playerOne.losses = user.losses
              comp.enableFormNicknameOne = false
              alert('User ' + comp.playerOne.nickname + ' already exists')
            
          }


        });

        if(comp.player1Id == "") {
          axios.post('http://localhost:4500/users', {nickname: comp.chosedNicknameOne}).then((user) =>{
                comp.player1Id = user.data._id
                comp.player1Nick = comp.chosedNicknameOne
                comp.playerOne.nickname = comp.chosedNicknameOne
                comp.enableFormNicknameOne = false
              })
        }

      
      })
      
    },
    checkUserTwo() {
      
      var comp = this
      axios.get('http://localhost:4500/users')
      .then( (users) => {
        users.data.forEach( (user) => {
          if (user.nickname == comp.chosedNicknameTwo) {
            
              comp.player2Id = user._id
              comp.player2Nick = user.nickname
              comp.playerTwo.nickname = user.nickname
              comp.playerTwo.wins = user.wins
              comp.playerTwo.draws = user.draws
              comp.playerTwo.losses = user.losses
              comp.enableFormNicknameTwo = false
              alert('User ' + comp.playerTwo.nickname + ' already exists')
            
          }


        });

        if(comp.player2Id == "") {
          axios.post('http://localhost:4500/users', {nickname: comp.chosedNicknameTwo}).then((user) =>{
                comp.player2Id = user.data._id
                comp.player2Nick = comp.chosedNicknameTwo
                comp.playerTwo.nickname = comp.chosedNicknameTwo
                comp.enableFormNicknameTwo = false
              })
        }

      
      })
       
    },
    ganadorelunofn() {
      
      this.playerOne.wins++
      this.playerTwo.losses++
      var comp = this
      axios.put('http://localhost:4500/users/' + comp.player1Id, {wins: comp.playerOne.wins}).then((user) =>{
               console.log(user)
              }).catch(err => console.log(err))
      axios.put('http://localhost:4500/users/' + comp.player2Id, {losses: comp.playerTwo.losses}).then((user) =>{
               console.log(user)
              }).catch(err => console.log(err))
            console.log(comp.player1Nick + ' WINS');
    },

    ganadoreldosfn() {
      this.playerTwo.wins++
      this.playerOne.losses++
      var comp = this
      axios.put('http://localhost:4500/users/' + comp.player2Id, {wins: comp.playerTwo.wins}).then((user) =>{
               console.log(user)
              }).catch(err => console.log(err))
      axios.put('http://localhost:4500/users/' + comp.player1Id, {losses: comp.playerOne.losses}).then((user) =>{
               console.log(user)
              }).catch(err => console.log(err))
            console.log(comp.player2Nick + ' WINS');
    }

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
h1 {
  margin-bottom: 25px !important;
  text-align: left
}
.stats {
  float:left
}

</style>
