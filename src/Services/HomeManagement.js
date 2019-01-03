'use strict'
var UserRepository = require('../Repositories/UserRepository');
var PostRepository = require('../Repositories/PostRepository');

const HomeManagement = {};

/*
 * Renderiza la pagina de Home
 * @params
 * @return res.render
 */
HomeManagement.getIndex = async (req, res, next) => {

  const data = await Promise.all([UserRepository.getAll(),
                                  PostRepository.getAll()]);

  var users = data[0]['users'];
  var posts = data[1]['posts'];

  res.render('home', {
    users,
    posts
  });
};

/*
 * Renderiza la pagina de Dashboard
 * @params
 * @return res.render
 */
HomeManagement.getDashboard = (req, res, next) => {
  if(req.user.role == 'ROLE_ADMIN')
  {
    res.render('dashboard');
  }
  else
  {
    res.redirect('home')
  }
};

/*
 * Renderiza la pagina de Configuraciones
 * @params
 * @return res.render
 */
HomeManagement.getConfiguration = (req, res, next) => {
  res.render('config');
};

module.exports = HomeManagement;
