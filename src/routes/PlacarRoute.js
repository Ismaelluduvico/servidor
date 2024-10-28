<<<<<<< HEAD
//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/PlacarController');

//Rota de adicionar um placar
router.post('/', controller.postPlacar);

//Rota de mostrar todos os placares 
router.get('/', controller.getPlacar);

//Rota de mostra um placar
router.get('/:id', controller.getOnePlacar);

//Rota de atualizar um placar
router.put('/:id', controller.putPlacar);

//Rota de deletar um placar
router.delete('/:id', controller.deletePlacar);

=======
//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/PlacarController');

//Rota de adicionar um placar
router.post('/', controller.postPlacar);

//Rota de mostrar todos os placares 
router.get('/', controller.getPlacar);

//Rota de mostra um placar
router.get('/:id', controller.getOnePlacar);

//Rota de atualizar um placar
router.put('/:id', controller.putPlacar);

//Rota de deletar um placar
router.delete('/:id', controller.deletePlacar);

>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
module.exports = router;