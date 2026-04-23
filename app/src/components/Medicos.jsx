import { useEffect, useState } from 'react';
import { getMedicos, createMedico } from '../services/medicos.api';
import '../styles/Medicos.css';

function Medicos() {
  const [medicos, setMedicos] = useState([]);
  const [nome, setNome] = useState('');
  const [crm, setCrm] = useState('');
  const [uf, setUf] = useState('');

  useEffect(() => { carregar();  }, []);

  async function carregar() {
    const data = await getMedicos();
    setMedicos(data.data);
    console.log(data.data);
  }

  async function salvar() {
    try {
      await createMedico({ nome, CRM: crm, UFCRM: uf });
      carregar();
      
    } catch (errorSalvar) {
      alert(`Erro ao cadastrar: \n${errorSalvar}`);
    }
  }

  return (
    <div className='page'>
        <div className="container">
            <h2>Médicos</h2>

            <div className="form">
                <input placeholder="Nome" onChange={e => setNome(e.target.value)} />
                <input placeholder="CRM" onChange={e => setCrm(e.target.value)} />
                <input placeholder="UF" onChange={e => setUf(e.target.value)} />

                <button onClick={salvar}>Cadastrar</button>
            </div>
        </div>
            
        <div className="container">
            <ul className="lista">
                {medicos.map(m => (
                    <li key={m.id} className="item">
                        <span>{m.nome}</span>
                        <span>{m.crm}</span>
                        <span>{m.ufcrm}</span>
                    </li>
                ))}
            </ul>
            
        </div>
    </div>
 );
}

export default Medicos;