import { useEffect, useState } from 'react';
import { getMedicos, createMedico, deleteMedico, updatePacienteMedico } from '../services/medicos.api';
import '../styles/Medicos.css';

function Medicos() {
  const [medicos, setMedicos] = useState([]);
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [CRM, setCrm] = useState('');
  const [UFCRM, setUf] = useState('');
  const [medicoIdSelecionado, setMedicoIdSelecionado] = useState('')

  useEffect(() => { carregarMedicos();  }, []);

  async function carregarMedicos() {
    const data = await getMedicos();
    setMedicos(data);
  }
  
  function limparCampos(){
    setId(""); setNome(""); setCrm(""); setUf(""); 
  }
  
  

  async function salvar() {
    try {
      await createMedico({ nome, CRM, UFCRM }, limparCampos);
      carregarMedicos();
      
    } catch (errorSalvar) {
      alert(`Erro ao cadastrar: \n${errorSalvar}`);
    }
  }
  
  
  async function excluirMedico() {    
    try {
      await deleteMedico(medicoIdSelecionado || "0", carregarMedicos);

    } catch (errorApagar) {
      console.log(`Erro ao apagar médico: \n${errorApagar}`);
    }
  }
  
  
  
  
  async function atualizarMedico(){
    
  }
  
  

  return (
    <div className='page'>
        <div className="container">
            <h2>Médicos</h2>

            <div className="form">
                <input placeholder="id" onChange={e => setNome(e.target.value)} />
                <input placeholder="Nome" onChange={e => setNome(e.target.value)} />
                <input placeholder="CRM" onChange={e => setCrm(e.target.value)} />
                <input placeholder="UF" onChange={e => setUf(e.target.value)} />

                <button onClick={salvar}>Cadastrar</button>
                <button onClick={atualizarMedico}>Atualizar </button>
            </div>
        </div>
        
        {/*====================================================================================*/}
      
        <div className="container">
          <h2>Consultar médicos</h2>

          <ul className="lista">
              <li className="itemTitle">
                <span>ID</span>
                <span>NOME</span>
                <span>CRM</span>
                <span>UFCRM</span>
              </li>
              
            {medicos.map( m => (
              <li key={m.id} className="item">
                <span>{m.id}</span>
                <span>{m.nome}</span>
                <span>{m.crm}</span>
                <span>{m.uf_crm}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/*====================================================================================*/}
        
        <div className="container">
          <h2>Apagar médico</h2>
          
          <div className="form">
              <select
                  value={medicoIdSelecionado}
                  onChange={e => setMedicoIdSelecionado(e.target.value)}
              >
                  <option value={0}>Selecione um médico</option>

                  {medicos.map(m => (
                      <option key={m.id} value={m.id}>
                          {m.id} - {m.nome}
                      </option>
                  ))}
              </select>
          </div>  
          
          <button onClick={excluirMedico}>Apagar</button>
        </div>
      
    </div>
 );
}

export default Medicos;