import { useEffect, useState } from 'react';
import { getPacientes, createPaciente, deletePaciente, updatePaciente } from '../services/pacientes.api';
import '../styles/Medicos.css';

function Pacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [carteirinha, setCarteirinha] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [pacienteIdSelecionado, setPacienteIdSelecionado] = useState('');

  useEffect(() => { carregarPacientes(); }, []);

  
  async function carregarPacientes() {
    const data = await getPacientes();
    setPacientes(data.data);
  }
  
  function limparCampos(){
    setId(""); setNome(""); setCpf(""); setCarteirinha(""); setDataNascimento("");
  }

  async function salvar() {
    try {
      await createPaciente({ nome, cpf, carteirinha, dataNascimento }, limparCampos );
      carregarPacientes();

    } catch (errorSalvar) {
      console.log(`Erro ao cadastrar: \n${errorSalvar}`);
    }
  }
  
  async function excluirPaciente() {
    
    try {
      await deletePaciente(pacienteIdSelecionado || "0", carregarPacientes);

    } catch (errorApagar) {
      console.log(`Erro ao apagar paciente: \n${errorApagar}`);
    }
  }
  
  

  return (
    <div className='page'>
        
      <div className="container">
        <h2>Cadastrar pacientes</h2>

        <div className="form">
            
          <input placeholder="id" onChange={e => setId(e.target.value)} value={id} />
          <input placeholder="Nome" onChange={e => setNome(e.target.value)}  value={nome}/>
          <input placeholder="CPF" onChange={e => setCpf(e.target.value)} value={cpf}/>
          <input  placeholder="Carteirinha" onChange={e => setCarteirinha(e.target.value)} value={carteirinha} />
          <input type="date" onChange={e => setDataNascimento(e.target.value)} value={dataNascimento}/>

          <button onClick={salvar}>Cadastrar</button>
        </div>

      </div>
      
      {/*====================================================================================*/}
      
      <div className="container">
        <h2>Consultar pacientes</h2>

        <ul className="lista">
            <li className="itemTitle">
              <span>ID</span>
              <span>NOME</span>
              <span>CPF</span>
              <span>CARTEIRINHA</span>
              <span>DATA NASCIMENTO</span>
            </li>
            
          {pacientes.map( p => (
            <li key={p.id} className="item">
              <span>{p.id}</span>
              <span>{p.nome}</span>
              <span>{p.cpf}</span>
              <span>{p.carteirinha}</span>
              <span>{ new Date(p.data_nascimento).toLocaleDateString('pt-BR') }</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/*====================================================================================*/}
      
      <div className="container">
        <h2>Deletar paciente</h2>
        
        <div className="form">
            <select
                value={pacienteIdSelecionado}
                onChange={e => setPacienteIdSelecionado(e.target.value)}
            >
                <option value={0}>Selecione um paciente</option>

                {pacientes.map(p => (
                    <option key={p.id} value={p.id}>
                        {p.id} - {p.nome}
                    </option>
                ))}
            </select>
        </div>  
        
        <button onClick={excluirPaciente}>Apagar paciente</button>
      </div>
      
      
      
    </div>
  );
}

export default Pacientes;