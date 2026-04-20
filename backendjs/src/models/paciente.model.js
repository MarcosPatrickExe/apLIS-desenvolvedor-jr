var pacientes = []

const listar = ()=> pacientes;

const criar = (dados) => {
    
    const novoPaciente = {
        id: dados.id,
        nome: dados.nome,
        dataNascimento: dados.dataNascimento,
        carteirinha: dados.carteirinha,
        cpf: dados.cpf
    };

    pacientes.push( novoPaciente);
    
    console.log(`\n\n\n [testando rota] NOVO PACIENTE CADASTRADO!: \nNOME: ${ novoPaciente.nome };\nCPF: ${novoPaciente.cpf}\n\n\n`);
    return novoPaciente;
};


const buscarPorCpf = (cpf) => {
       return  pacientes.find( cpfAtual => cpfAtual.cpf === cpf);
};


module.exports = {
    listar,
    criar,
    buscarPorCpf
}


