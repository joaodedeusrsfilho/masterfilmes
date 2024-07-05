//BASE DA URL = https://api.themoviedb.org/3/ 
//URL DA API = /movie/now_playing
//api_key=7f4437b3ef3645d74710332ab5ee21ff
//language=pt-BR
//URL PARA AS IMAGEN = https://image.tmdb.org/t/p/original/
//PARA ACESSAR O JSON DA API
//https://api.themoviedb.org/3/movie/now_playing?api_key=7f4437b3ef3645d74710332ab5ee21ff&language=pt-BR


import api from '../../services/api'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'

function Home() {

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilme(){
            await api.get('/movie/now_playing', {
                params: {
                    api_key: '7f4437b3ef3645d74710332ab5ee21ff',
                    language: 'pt-BR',
                    page: 1
                }}).then((response)=>{
                    setFilmes(response.data.results.splice(0,10))    
                }).catch((erro)=>{
                    console.log("Ocorreu um erro!"+erro)
                })
        }
        loadFilme()
        setLoading(false)
    },[])

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes</h2>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className="listaFilmes">
                {filmes.map((itemX) => {
                    return (
                        <article key={itemX.id}>
                            <strong>{itemX.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${itemX.poster_path}`} alt={itemX.title} />
                            <Link to={`/filme/${itemX.id}`}>Acessar Filme</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}
export default Home
