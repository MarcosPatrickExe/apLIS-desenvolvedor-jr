const BASE_URL = 'http://127.0.0.1:3000/api/v1';

export const getMedicos = async () => {
  const res = await fetch(`${BASE_URL}/medicos`, {method: 'GET'});
  return res.json();
};

export const createMedico = async (data) => {
  const res = await fetch(`${BASE_URL}/medicos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });

  return res.json();
};