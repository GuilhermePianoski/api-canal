import { useState } from 'react'
import './index.scss'

import axios from 'axios'



export default function Cadastrar() {
    const [canal, setCanal] = useState('');
    const [numero, setNumero] = useState('');
    const [aberto, setAberto] = useState(false);

    const [idCanal, setIdCanal] = useState('');
    const [programa, setPrograma] = useState('');
    const [genero, setGenero] = useState('');
    const [hora, setHora] = useState('');

    const [nomeUsuario, setNomeUsuario] = useState('');



    async function salvarCanal() {
        let paramCorpo = {
            "canal": canal,
            "numero": numero,
            "aberto": aberto
        }

        const url = 'http://localhost:2211/canal';
        let resp = await axios.post(url, paramCorpo);

        alert('itens adicionada na tabela Canal. Id: ' + resp.data.novoId);
    }

    async function  salvarPrograma() {
        let paramCorpo = {
            "idcanal": idCanal,
            "programa": programa,
            "genero": genero,
            "hora": hora
        }

        const url = 'http://localhost:2211/program';
        let resp= await axios.post(url, paramCorpo);

        alert('Itens adicionados na tabela Programa. Id: ' + resp.data.novoId); 
    }

    async function salvarUsuario() {
        let paramCorpo = {
            "nomeUsuario": nomeUsuario
        }

        const url = 'http://localhost:2211/usuario';
        let resp= await axios.post(url, paramCorpo);

        alert('Usuario adicionado na tabela Usuario. Id: ' + resp.data.novoId); 
    }


    return (
        <div className='pagina-cadastrar'>
            <h1> ADICIONAR CANAL </h1>


            <div className='form'>
                <div>
                    <label>Nome do Canal:</label>
                    <input type='text' value={canal} onChange={e => setCanal(e.target.value)} />
                </div>
                <div>
                    <label>Número do Canal:</label>
                    <input type='text' value={numero} onChange={e => setNumero(e.target.value)}/>
                </div>
                <div>
                    <label>Aberto:</label>
                    <input type='checkbox' checked={aberto} onChange={e => setAberto(e.target.checked)} />
                </div>

            </div>
            <button onClick={salvarCanal}> SALVAR </button>

            <h1> ADICIONAR Programa </h1>

             <div className='formprograma'>
                <div>
                <label>Id do Canal:</label>
                <input type='text' value={idCanal} onChange={e => setIdCanal(e.target.value)} />
                </div>
             <div>
                    <label>Nome do Programa:</label>
                    <input type='text' value={programa} onChange={e => setPrograma(e.target.value)} />
                </div>
                <div>
                    <label>Genero do Programa:</label>
                    <input type='text' value={genero} onChange={e => setGenero(e.target.value)}/>
                </div>
                <div>
                    <label>Horario:</label>
                    <input type='text' value={hora} onChange={e => setHora(e.target.value)} />
                </div>

             </div>
             <button onClick={salvarPrograma}> SALVAR </button>

             <h1> ADICIONAR Usuario </h1>
             <div className='formusuario'>
                <div>
                <label>Nome de usuario:</label>
                <input type='text' value={nomeUsuario} onChange={e => setNomeUsuario(e.target.value)} />
                </div>
             </div>
             <button onClick={salvarUsuario}> SALVAR </button>
        </div>

        
    )
}