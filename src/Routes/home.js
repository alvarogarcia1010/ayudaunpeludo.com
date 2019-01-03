const express = require('express');
const router = express.Router();

const AuthMiddleware = require("../Middlewares/AuthMiddleware");

const HomeManager = require('../Controllers/HomeManager');

//Middleware que verifica que solo los usuarios registrados podran ingresar a esta seccion
router.use(AuthMiddleware.isAuthentication);

router.get('/', HomeManager.getIndex);

module.exports = router;
