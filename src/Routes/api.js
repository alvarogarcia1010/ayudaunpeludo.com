const express = require('express');
const router = express.Router();

const AuthMiddleware = require("../Middlewares/AuthMiddleware");

//Middleware que verifica que solo los usuarios registrados podran ingresar a esta seccion
router.use(AuthMiddleware.isAuthentication);

router.route('/users')
  .get(function(req, res,next){
    res.send("estoy en GET api/users ")
  });

//API/USERS
// router.route('/users')
//   .get(UserManager.findAllTVShows)
//
//   .post(UserManager.addTVShow);
//
// router.route('/users/:id')
//   .get(UserManager.findById)
//
//   .put(UserManager.updateTVShow)
//
//   .delete(UserManager.deleteTVShow);

//API/POST
// router.route('/posts')
//   .get(UserManager.findAllTVShows)
//
//   .post(UserManager.addTVShow);
//
// router.route('/posts/:id')
//   .get(UserManager.findById)
//
//   .put(UserManager.updateTVShow)
//
//   .delete(UserManager.deleteTVShow);

module.exports = router;
