<<<<<<< HEAD
const UsuarioData = require('../data/UsuarioData');

exports.novoUsuario = async function (nomeusuario, senha, turma, nomecompleto, tipo) {
    const result = await UsuarioData.createUser(nomeusuario, senha, turma, nomecompleto, tipo);
    return result
};

exports.buscarUsuario = function (id) {
    return UsuarioData.buscarUsuario(id);
};

exports.checkPassword = function (nomeUsuario, senha) {
    return UsuarioData.checkPassword(nomeUsuario, senha);
}

exports.updateUsuario = async function (nomeusuario, senha, turma, nomecompleto, tipo) {
    const result = await UsuarioData.updateUsuario(nomeusuario, senha, turma, nomecompleto, tipo);
    result
}

//exports.updateUsuario = function (dados) {
//    return UsuarioData.updateUsuario(dados);
//};

exports.deleteUsuario = function (id) {
    return UsuarioData.deleteUsuario(id);
}
//serviço de adicionar um aluno
//  exports.addAluno = function (nome, senha) {
//     return UsuarioData.addAluno(nome, senha);
//  };
=======
const UsuarioData = require('../data/UsuarioData');

exports.novoUsuario = async function (nomeusuario, senha, turma, nomecompleto, tipo) {
    const result = await UsuarioData.createUser(nomeusuario, senha, turma, nomecompleto, tipo);
    return result
};

exports.buscarUsuario = function (id) {
    return UsuarioData.buscarUsuario(id);
};

exports.checkPassword = function (nomeUsuario, senha) {
    return UsuarioData.checkPassword(nomeUsuario, senha);
}

exports.updateUsuario = async function (nomeusuario, senha, turma, nomecompleto, tipo) {
    const result = await UsuarioData.updateUsuario(nomeusuario, senha, turma, nomecompleto, tipo);
    result
}

//exports.updateUsuario = function (dados) {
//    return UsuarioData.updateUsuario(dados);
//};

exports.deleteUsuario = function (id) {
    return UsuarioData.deleteUsuario(id);
}
//serviço de adicionar um aluno
//  exports.addAluno = function (nome, senha) {
//     return UsuarioData.addAluno(nome, senha);
//  };
>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
