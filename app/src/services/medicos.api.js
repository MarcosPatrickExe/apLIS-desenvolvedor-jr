const BASE_URL = 'http://127.0.0.1:8000/api/v1';

// GET
export const getMedicos = async () => {
  const res = await fetch(`${BASE_URL}/medicos`, {method: 'GET'});
  return res.json();
};


// POST
export const createMedico = async (data, limparCamposMed) => {
  
  const res = await fetch(`${BASE_URL}/medicos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });
  
  const msg = await res.json(); 
  //console.log(`\n DATA INSERIDA: ${msg}\n\n`)
  
  if( res.status==400 ){
    
    alert(`Erro 400: ${msg.message || 'Dados inválios!'}`);
    
  }else if( res.status==404 ){
    alert(`Erro 404: ${msg.message || 'Dados inválios!'}`)
    
  }else if( res.status==422 ){
    alert(`Erro 422: ${msg.message || 'Dados inválios!'}`)
    
  }else if( res.status==201 ){
    limparCamposMed();
    alert(`\n201: ${msg.message}\n`);
  }

  return res;
};




// UPDATE
export const updateMedico = async (id, data) =>{
  
  const res = await fetch(`${BASE_URL}/medicos/${id}`, {
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

  } else if (res.status === 405) {
    alert(`Erro 405: ${msg.message}`);

  } else if (res.status === 409) {
    alert(`Erro 409: ${msg.message}`);

  } else if (res.status === 422) {
    alert(`Erro 422: ${msg.message}`);

  } else if (res.status == 200) {
    alert(msg.message);
  }

  return res;
}



// DELETE
export const deleteMedico = async (id, carregarMedicos) =>{
  const res = await fetch(`${BASE_URL}/medicos/${id}`, {
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
    carregarMedicos();
  }
  
  return msg;
}
