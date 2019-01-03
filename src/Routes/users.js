var express = require('express');
var router = express.Router();
const passport = require('passport');
const UserManager = require('../Controllers/UserManager');
const AuthMiddleware = require("../Middlewares/AuthMiddleware");

router.get('/:username', UserManager.profile);

//Middleware que verifica que solo los usuarios registrados podran ingresar a esta seccion
router.use(AuthMiddleware.isAuthentication);

router.get('/notifications', UserManager.notification);

router.post('/config', UserManager.updatePass);
//Rutas para obtener información JSON
router.get('/api/users/counters/:id?', UserManager.getCounters);

//Todos los usuarios paginados
router.get('/api/users/:page?', UserManager.getUsers);

//Actualiza la informacion de usuario
router.put('/api/update-user/:id?', UserManager.updateUser);

// Un usuario especifico
router.get('/api/:username', UserManager.getUser);

module.exports = router;
