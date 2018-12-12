<template>
    <div>
        <div v-if="this.users == null && this.getUsers()"></div>
        <table class="table is-striped">
            <thead >
                
                
                <tbody>
                    <tr>
                    <th>Position</th>
                    <th>Player</th>
                    <th>Won</th>
                    <th>Lost</th>
                    <th>Drawn</th>
                </tr>
                            <tr v-for="(user, index) in users" :key="user">
                                <th>{{index}}</th>
                                <td>{{user.nickname}}</td>
                                <td>{{user.wins}}</td>
                                <td>{{user.losses}}</td>
                                <td>{{user.draws}}</td>
                            </tr>

                </tbody>

            </thead>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data () {
    return {
      users: null
        }
    },
    methods: {
    getUsers () {
      var comp = this
      axios.get('http://localhost:4500/users')
      .then( (users) => {
          var a = users.data.sort((a, b) => {return b.wins - a.wins})
          comp.users = a
          comp.$forceUpdate()
          console.log(comp.users)
      })
      }
    }

}
</script>

<style>

</style>
