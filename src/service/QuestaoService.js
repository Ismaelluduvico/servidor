<<<<<<< HEAD
const questoesData = require('../data/QustaoData')

//serviço de mostrar todas as questão
 exports.getQuestoes = function () {
    return questoesData.getQuestoes();
 };

 //serviço de mostrar uma questão
 exports.buscarQuestao = function (id) {
   return questoesData.buscarQuestao(id);
};

//serviço de adicionar uma questão
 exports.addQuestao = function (enuciado, dificuldade, topicoid) {
    return questoesData.addQuestao(enuciado, dificuldade, topicoid);
 };

 //serviço de atualizar uma questão
 exports.updateQuestao = function (dados) {
    return questoesData.updateQuestao(dados);
 };

 //serviço de deletar um aluno
 exports.deleteQuestao = function (id) {
   return questoesData.deleteQuestao(id);
=======
const questoesData = require('../data/QustaoData')

//serviço de mostrar todas as questão
 exports.getQuestoes = function () {
    return questoesData.getQuestoes();
 };

 //serviço de mostrar uma questão
 exports.buscarQuestao = function (id) {
   return questoesData.buscarQuestao(id);
};

//serviço de adicionar uma questão
 exports.addQuestao = function (enuciado, dificuldade, topicoid) {
    return questoesData.addQuestao(enuciado, dificuldade, topicoid);
 };

 //serviço de atualizar uma questão
 exports.updateQuestao = function (dados) {
    return questoesData.updateQuestao(dados);
 };

 //serviço de deletar um aluno
 exports.deleteQuestao = function (id) {
   return questoesData.deleteQuestao(id);
>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
 }