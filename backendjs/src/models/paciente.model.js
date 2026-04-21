const db = require('../database');

// METODOS DE CRUD:
const listar = async () => {
    const [rows] = await db.query('SELECT * FROM pacientes');
    return rows;
};

const criar = async (dados) => {
    const { nome, dataNascimento, carteirinha, cpf } = dados;

    const [result] = await db.query(
        `INSERT INTO pacientes (nome, data_nascimento, carteirinha, cpf)
         VALUES (?, ?, ?, ?)`,
        [nome, dataNascimento, carteirinha, cpf]
    );

    return {
        id: result.insertId,
        ...dados
    };
};


const buscarPorCpf = async (cpf) => {
    const[rows] = await db.query(`
        SELECT 1 FROM pacientes WHERE cpf = ? LIMIT 1`,
        [cpf]
    );
    
    return (rows.length > 0);
};



const deletarPorId = async (id) => {
    const [result] = await db.query(
        'DELETE FROM pacientes WHERE id = ?',
        [id]
    );

    return (result.affectedRows > 0);
};


const atualizarPorId = async ( dados) => {
    const {nome, dataNascimento, carteirinha, cpf, id } = dados;

    const [result] = await db.query(
        `UPDATE pacientes 
         SET nome = ?, 
             data_nascimento = ?, 
             carteirinha = ?,
             cpf = ?
         WHERE id = ?`,
        [nome, dataNascimento, carteirinha, cpf, id]
    );

    return { atualizado: result.affectedRows > 0, novosDados: dados };
};


module.exports = {
    listar,
    criar,
    buscarPorCpf,
    deletarPorId,
    atualizarPorId
};