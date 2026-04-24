const BASE_URL = 'http://127.0.0.1:3000/api/v1';

// GET
export const getPacientes = async () => {
  const res = await fetch(`${BASE_URL}/pacientes`, {method: 'GET'});
  const jsonVar = await res.json();
 //console.log(`\n\n${jsonVar.data}\n\n`);
  return jsonVar;
};


// POST
export const createPaciente = async (data, limparCampos) => {
  
  console.log(`\n DATA INSERIDA: ${data.dataNascimento}\n\n`)
  
  const res = await fetch(`${BASE_URL}/pacientes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  const msg = await res.json(); 
  if( res.status==400 ){
    
    alert(`Erro 400: ${msg.message || 'Dados inválios!'}`);
    
  }else if( res.status==409 ){
    alert(`Erro 409: ${msg.message || 'Dados inválios!'}`)
    
  }else if( res.status==201 ){
    alert(`\n201: ${msg.message}\n`);
    limparCampos()
  }

  return res;
};


// UPDATE
export const updatePaciente = async (id, data, limparCampos) =>{
  const res = await fetch(`${BASE_URL}/pacientes/${id}`, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const msg = await res.json();

  if (res.status === 400) {
    alert(`Erro 400: ${msg.message || 'Dados inválidos!'}`);

  } else if (res.status === 404) {
    alert(`Erro 404: ${msg.message}`);

  } else if (res.status === 409) {
    alert(`Erro 409: ${msg.message || 'Conflito de dados!'}`);

  } else if (res.status==200 ) {
    alert(msg.message);
    limparCampos();
  }

  return res;
}


// DELETE
export const deletePaciente = async (id, carregarPacientes) =>{
  const res = await fetch(`${BASE_URL}/pacientes/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
    }
  });

  const msg = await res.json(); 
  if( res.status==404 ){
    alert(`Erro 404: ${msg.message || 'Dados inválios!'}`)
    
  }else if( res.status==200 ){
    alert(`\n200: ${msg.message}\n`);
    carregarPacientes();
  }
  
  return msg;
}