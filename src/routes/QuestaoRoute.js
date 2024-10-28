<<<<<<< HEAD
//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/QuestaoController');

//Rota de adicionar uma questão
router.post('/', controller.postQuestao);

//Rota de mostrar todas as questões 
router.get('/', controller.getQuestoes);

//Rota de mostrar uma questão 
router.get('/:id', controller.buscarQuestao);

//Rota de atualizar uma questão
router.put('/:id', controller.putQuestao);

//Rota de deletar uma questão
router.delete('/:id', controller.deleteQuestao);

=======
//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/QuestaoController');

//Rota de adicionar uma questão
router.post('/', controller.postQuestao);

//Rota de mostrar todas as questões 
router.get('/', controller.getQuestoes);

//Rota de mostrar uma questão 
router.get('/:id', controller.buscarQuestao);

//Rota de atualizar uma questão
router.put('/:id', controller.putQuestao);

//Rota de deletar uma questão
router.delete('/:id', controller.deleteQuestao);

>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
module.exports = router;