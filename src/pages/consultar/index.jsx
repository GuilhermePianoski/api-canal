import { useState } from 'react'
import './index.scss'

import axios from 'axios'
import { Link } from 'react-router-dom';



export default function Consultar() {
    const [listaCanal, setListaCanal] = useState([]);
    const [listaPrograma, setListaPrograma] = useState([]);
    const [listaUsuario, setListaUsuario] = useState([]);


    async function buscar() {
        const url = 'http://localhost:2211/canal';
        let resp = await axios.get(url);
        setListaCanal(resp.data);
    }

    async function buscarPrograma() {
        const url = 'http://localhost:2211/program';
        let resp = await axios.get(url);
        setListaPrograma(resp.data);
    }

    async function buscarUsuario() {
        const url = 'http://localhost:2211/usuario';
        let resp = await axios.get(url);
        setListaUsuario(resp.data);
    }

    

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>

            <button onClick={buscar}>Buscar</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Canal</th>
                        <th>Numero do Canal</th>
                        <th>Aberto</th>
                    </tr>
                </thead>

                <tbody>
                    {listaCanal.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.canal}</td>
                            <td>{item.numero}</td>
                            <td>{item.aberto ? 'Sim' : 'Não'}</td>
                        </tr>
                    )}
                </tbody>

            </table>

            <div className='consultarPrograma'>
                <h1> CONSULTAR PROGRAMA </h1>

            <button onClick={buscarPrograma}>Buscar</button>

            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Id do Canal</th>
                        <th>Nome do Programa</th>
                        <th>Genero do Programa</th>
                        <th>Horario</th>
                    </tr>
                </thead>

                <tbody>
                    {listaPrograma.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.idcanal}</td>
                            <td>{item.programa}</td>
                            <td>{item.genero}</td>
                            <td>{item.hora}</td>
                        </tr>
                    )}
                </tbody>

            </table>
            </div>

            <div className='consultarUsuario'>
                <h1> CONSULTAR USUARIO </h1>

            <button onClick={buscarUsuario}>Buscar</button>

            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Usuario</th>
                    </tr>
                </thead>

                <tbody>
                    {listaUsuario.map(item => 
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                        </tr>
                    )}
                </tbody>

            </table>
            </div>

           
        </div>
    )
}