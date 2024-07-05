//BASE DA URL = https://api.themoviedb.org/3/

//URL DA API = /movie/now_playing?api_key=7f4437b3ef3645d74710332ab5ee21ff&language=pt-BR

import axios from 'axios'

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})
export default api

