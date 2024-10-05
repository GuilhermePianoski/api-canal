import './index.scss'
import { Link } from 'react-router-dom'



export default function Home() {


    return (
        <div className='pagina-home'>
            <h1> HOME </h1>

            <ul>
                <li>
                <Link to='/cadastrar'>Ir para o Cadastro</Link>
                </li>
                <li>
                <Link to='/consultar'>Ir para Consulta</Link>
                </li>
             </ul>

        </div>
    )
}