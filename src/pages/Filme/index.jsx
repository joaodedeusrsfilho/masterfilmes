import { useParams, useNavigate  } from "react-router-dom"
import { useEffect, useState } from "react"
import api from '../../services/api'
import './filme.css'



function Filme() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [filme, setFilmes] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '7f4437b3ef3645d74710332ab5ee21ff',
                    language: 'pt-BR',
                    page: 1
                }
            }).then((response) => {
                setFilmes(response.data)
            }).catch((error) => {
                console.log("Ocorreu um erro = " + error)
                navigate("/", { replace: true })//para redirecionar para a pagina home
                return
            })
        }
        loadFilme()
        setLoading(false)
    }, [id, navigate])//sempre passar as dependencias que estão fora do useeffect

    function salvarFilme() {

        let filmesSalvos = JSON.parse(localStorage.getItem('primeFlix') || [])

        if (filmesSalvos.some((itemX) => itemX.id === filme.id)) {
            alert('filme ja foi salvo anteriormente')
            return
        }
        filmesSalvos.push(filme)
        localStorage.setItem('primeFlix', JSON.stringify(filmesSalvos))
        alert("filme salvo com sucesso")

    }

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filme</h2>
            </div>
        )
    }

    return (
        <div className="filmeInfo">
            <div className="listaFilmes">
                <h1>{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
                <h3>Sinopse</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average} / 10</strong>

                <div className="areaButtons">
                    <button onClick={() => salvarFilme()}>Salvar</button>
                    <button><a target="blank" href={`https://youtube.com/results?search_query=${filme.title} trailler`}>Trailer</a></button>

                </div>

            </div>
        </div>
    )
}

export default Filme
