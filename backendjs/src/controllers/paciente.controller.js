const pacienteModel = require('../models/paciente.model');

exports.listar = (req, res) => {
    const pacientes = pacienteModel.listar();
    
    if( pacientes.length==0 ){
        return res.json({
            success: false,
            message: "sem clientes cadastrados"
        });
    }

    return res.json({
        success: true,
        data: pacientes
    });
};

exports.criar = (req, res) => {
    const { nome, cpf } = req.body;

    if (!nome || !cpf) {
        return res.status(400).json({
            success: false,
            message: "Nome e CPF são obrigatórios"
        });
    }

    const cpfExiste = pacienteModel.buscarPorCpf(cpf);
    if (cpfExiste) {
        return res.status(409).json({
            success: false,
            message: "CPF já cadastrado"
        });
    }

    const novoPaciente = pacienteModel.criar(req.body);

    return res.status(201).json({
        success: true,
        data: novoPaciente,
        message: "Paciente criado com sucesso"
    });
};