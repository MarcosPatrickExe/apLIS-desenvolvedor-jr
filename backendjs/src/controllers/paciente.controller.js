const pacienteModel = require('../models/paciente.model');

exports.listar = async (req, res) => {
    try {
        var pacientes = await pacienteModel.listar();

        if( pacientes.length==0 ){
            return res.status(409).json({
                success: false,
                message: "sem clientes cadastrados"
            });
        }   
    
        return res.status(200).json({
            success: true,
            data: pacientes
        });
        
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Erro ao buscar pacientes"
        });
    }
};


exports.criar = async (req, res) => {
    const { nome, cpf } = req.body;
    
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({
            success: false,
            message: "Body da requisição não enviado"
        });
    }

    if (!nome || !cpf) {
        return res.status(400).json({
            success: false,
            message: "Nome e CPF são obrigatórios"
        });
    }
    
    
    const cpfExiste = await pacienteModel.buscarPorCpf(cpf);
    
    if (cpfExiste) {
        return res.status(409).json({
            success: false,
            message: "CPF já cadastrado"
        });
    }

    const novoPaciente = await pacienteModel.criar(req.body);

    return res.status(201).json({
        success: true,
        data: novoPaciente,
        message: "Paciente criado com SUCESSO!"
    });
};



exports.atualizar = async (req, res) => {
    
    try {
        const { id } = req.params;
        const { nome, dataNascimento, carteirinha, cpf } = req.body;
      //  console.log(`ID: '${id}'`);
        
        if (id=="" || id==null) {
            return res.status(400).json({
                success: false,
                message: 'Nenhum ID informado!'
            });
        }
        
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Body da requisição não enviado!"
            });
        }
        
        if (!cpf && !nome && !dataNascimento && !carteirinha) {
            return res.status(400).json({
                success: false,
                message: "Nenhum dado enviado para atualização!"
            });
        }
        
        const {atualizado, novosDados } = await pacienteModel.atualizarPorId( {id, nome, dataNascimento, carteirinha, cpf } );

        if (!atualizado) {
            return res.status(404).json({
                success: false,
                message: "Paciente não encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            data: novosDados,
            message: "Paciente atualizado com sucesso!"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Erro ao atualizar dados do paciente"
        });
    }
};


 
exports.deletar = async (req, res) => {
    try {
        const { id } = req.params;

        const removido = await pacienteModel.deletarPorId(id);

        if (!removido) {
            return res.status(404).json({
                success: false,
                message: "Paciente não encontrado"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Paciente removido com sucesso!"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Erro ao deletar paciente"
        });
    }
};