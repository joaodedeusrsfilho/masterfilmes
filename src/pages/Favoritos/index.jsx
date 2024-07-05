import { useEffect, useState } from 'react'
import './favoritos.css'
import { Link } from 'react-router-dom'



function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        setFilmes(JSON.parse(localStorage.getItem('primeFlix')|| []))

    }, [])

    function excluirFilme(id){
        let novalistaFilmes = filmes.filter((item)=>{
            return (item.id !== id)
        })
        setFilmes(novalistaFilmes)
        localStorage.setItem('primeFlix',JSON.stringify(novalistaFilmes))
        alert("Filmes excluido com sucesso")
        
        
    }


    return (
        <div className="meusFilmes">
            <h1>Meus filmes</h1>
            {filmes.length === 0 && <span>Você não tem nenhum filme salvo</span>}
            <ul>
                {filmes.map((itemX)=>{
                    return(
                        <li key={itemX.id}>
                            <span>{itemX.title}</span>
                            <div>
                                <Link to={`/filme/${itemX.id}`}>Detalhes</Link>
                                <button onClick={()=>excluirFilme(itemX.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

export default Favoritos