<<<<<<< HEAD
//Arquivo de rota para topico
const express = require('express');
const router = express.Router();
const controller = require('../controllers/TopicoController');

//rota de adicionar Topico
router.post('/cadastrotopico', controller.cadastroTopico);
//rota de atualizar Topico
router.put('/:id', controller.updateTopico);
//rota deletar topico
router.delete('/:id', controller.deleteTopico);
//rota de buscar todos os topicos
router.get('/', controller.getTopicos);
//rota buscar topico
router.get('/:id', controller.buscarTopico);

=======
//Arquivo de rota para topico
const express = require('express');
const router = express.Router();
const controller = require('../controllers/TopicoController');

//rota de adicionar Topico
router.post('/cadastrotopico', controller.cadastroTopico);
//rota de atualizar Topico
router.put('/:id', controller.updateTopico);
//rota deletar topico
router.delete('/:id', controller.deleteTopico);
//rota de buscar todos os topicos
router.get('/', controller.getTopicos);
//rota buscar topico
router.get('/:id', controller.buscarTopico);

>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
module.exports = router;