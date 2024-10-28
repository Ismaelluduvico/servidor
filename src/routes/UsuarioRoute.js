<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsuarioController');

//Rota de cadastro
router.post('/cadastro', controller.cadastroUsuario);
//Rota buscar dados do usuario
router.get('/:id', controller.buscarUsuario);
// Rota de atualização
router.put('/:id', controller.updateUsuario);
//Rota Deletar
router.delete('/:id', controller.deleteUsuario);

=======
const express = require('express');
const router = express.Router();
const controller = require('../controllers/UsuarioController');

//Rota de cadastro
router.post('/cadastro', controller.cadastroUsuario);
//Rota buscar dados do usuario
router.get('/:id', controller.buscarUsuario);
// Rota de atualização
router.put('/:id', controller.updateUsuario);
//Rota Deletar
router.delete('/:id', controller.deleteUsuario);

>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
module.exports = router;