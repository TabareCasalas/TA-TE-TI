<template>
  <div class="player">
    {{ this.player1Nick }}

    <div class="field has-addons">
  <div class="control">
    <form >
        <input class="input" type="text" v-model="chosedNickname" placeholder="Chose your nickname">
        <a class="button is-info" v-on:click="player">
          ¡Let's play!
        </a>    
    </form>
  </div>
</div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      chosedNickname: "",
      player1Nick: "",
      player1Id: "",
      player2Nick: "",
      player2Id: "",
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },



  methods: {
    player () {
      var comp = this
      axios.get('http://localhost:3000/users')
      .then( (users) => {
        users.data.forEach( (user) => {
          if (user.nickname == comp.chosedNickname) {
            if (comp.player1Id == "") {
              comp.player1Id = user._id
              comp.player1Nick = user.nickname
            } else {
              if (comp.player2Id == "" && comp.player1Id != user._id) {
                comp.player2Id = user._id
                comp.player2Nick = user.nickname
              }
            }
          }
        })
      if (comp.player1Id == "") {
        axios.post('http://localhost:3000/user', {nickname: comp.chosedNickname}).then((user) =>{
          comp.player1Id = user.data._id
          comp.player1Nick = comp.chosedNickname
        })

      } else { 
        if (comp.player2Id == "") {
          axios.post('http://localhost:3000/user', {nickname: comp.chosedNickname}).then((user) =>{
          comp.player2Id = user.data._id
          comp.player2Nick = comp.chosedNickname
        })
      
      }}
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
