<<<<<<< HEAD
//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/AlternativaController');

//Rota de adicionar um aluno
router.post('/', controller.postAlternativa);

//Rota de mostrar todos os alunos 
router.get('/:questaoid', controller.getAlternativas);

//Rota de atualizar um aluno
router.put('/:id', controller.putAlternativa);

=======
//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/AlternativaController');

//Rota de adicionar um aluno
router.post('/', controller.postAlternativa);

//Rota de mostrar todos os alunos 
router.get('/:questaoid', controller.getAlternativas);

//Rota de atualizar um aluno
router.put('/:id', controller.putAlternativa);

>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
module.exports = router;