<<<<<<< HEAD
const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Selecionar todas as alternativas
exports.getAlternativas = function (questaoid){
    return database.query(`select * from alternativa where questaoid = ${questaoid}`);
};

//Adicionar uma nova alternativa
exports.addAlternativa = function (resposta, certoerrado, questaoid){
    return database.query(`insert into alternativa (resposta, certoerrado, questaoid) values ('${resposta}', '${certoerrado}', '${questaoid}')`);
};

//Atualizar alternativa
exports.updateAlternativa = function ({id, resposta, certoerrado, questaoid}){
    return database.query(`update alternativa set resposta = '${resposta}', certoerrado = '${certoerrado}', questaoid = '${questaoid}' where id = ${id}`);
=======
const database = require('../infra/database');

//Solicitando informações ao banco de dados

//Selecionar todas as alternativas
exports.getAlternativas = function (questaoid){
    return database.query(`select * from alternativa where questaoid = ${questaoid}`);
};

//Adicionar uma nova alternativa
exports.addAlternativa = function (resposta, certoerrado, questaoid){
    return database.query(`insert into alternativa (resposta, certoerrado, questaoid) values ('${resposta}', '${certoerrado}', '${questaoid}')`);
};

//Atualizar alternativa
exports.updateAlternativa = function ({id, resposta, certoerrado, questaoid}){
    return database.query(`update alternativa set resposta = '${resposta}', certoerrado = '${certoerrado}', questaoid = '${questaoid}' where id = ${id}`);
>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
};