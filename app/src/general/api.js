import axios from 'axios'
const API_URL = 'http://localhost:4500/'

var api = {
    users: {
        lista () {
            return axios.get(API_URL + 'users')
        },
        nuevo(player) {
            return axios.post(API_URL + 'users', player)
        },
        detalle(id) {
            return axios.get(API_URL + 'users/' + id)
        },
        actualiza(id, player) {
            return axios.put(API_URL + 'users/' + id, player)
        }
    }
}

export default api