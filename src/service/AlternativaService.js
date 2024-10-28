<<<<<<< HEAD
const alternativasData = require('../data/AlternativaData')

//serviço de mostrar alternativas
 exports.getAlternativas = function (questaoid) {
    return alternativasData.getAlternativas(questaoid);
 };

//serviço de adicionar uma alternativa
 exports.addAlternativa = function (resposta, certoerrado, questaoid) {
    return alternativasData.addAlternativa(resposta, certoerrado, questaoid);
 };

 //serviço de atualizar uma alternativa
 exports.updateAlternativa = function (dados) {
    return alternativasData.updateAlternativa(dados);
=======
const alternativasData = require('../data/AlternativaData')

//serviço de mostrar alternativas
 exports.getAlternativas = function (questaoid) {
    return alternativasData.getAlternativas(questaoid);
 };

//serviço de adicionar uma alternativa
 exports.addAlternativa = function (resposta, certoerrado, questaoid) {
    return alternativasData.addAlternativa(resposta, certoerrado, questaoid);
 };

 //serviço de atualizar uma alternativa
 exports.updateAlternativa = function (dados) {
    return alternativasData.updateAlternativa(dados);
>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
 };