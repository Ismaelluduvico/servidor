<<<<<<< HEAD
//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/AuthController.js');

//Rota de login
router.post('/login', controller.login);

=======
//Arquivo de rotas
const express = require('express');
const router = express.Router();
const controller = require('../controllers/AuthController.js');

//Rota de login
router.post('/login', controller.login);

>>>>>>> f15a762610a0b94ba734344073754d510b18eb7f
module.exports = router;