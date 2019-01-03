'use strict'
const passport = require('passport');

const AuthManagement = {};

/*
 * Verifica si hay un usuario autenticado
 * @params
 * @return res.redirect
 */
AuthManagement.init = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/home');
  } else {
    res.redirect('/login')
  }
};

/*
 * Renderiza la pagina de login
 * @params
 * @return res.render
 */
AuthManagement.getLogin = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect('/home');
  } else {
    res.render('login');
  }
};

/*
 * Estrategia local de registro con passport
 * @params
 * @return res.redirect
 */
AuthManagement.signUp = passport.authenticate('local-register', {
  successRedirect: '/home',
  failureRedirect: '/login',
  passReqToCallback: true
});

/*
 * Estrategia local de login con Passport
 * @params
 * @return res.render
 */
AuthManagement.signIn = passport.authenticate('local-login', {
  successRedirect: '/home',
  failureRedirect: '/login',
  passReqToCallback: true
});

AuthManagement.facebookLogin = passport.authenticate('FacebookLogin',{
  scope: ['email']
});

AuthManagement.facebookLoginCallback = passport.authenticate('FacebookLogin', {
  failureRedirect: '/login',
  successRedirect: '/home'
});

AuthManagement.googleLogin = passport.authenticate('GoogleLogin',{
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ]
});

AuthManagement.googleLoginCallback = passport.authenticate('GoogleLogin', {
  failureRedirect: '/login',
  successRedirect: '/home'
});

/*
 * Cierra la sesion
 * @params
 * @return res.redirect
 */
AuthManagement.logOut = (req, res, next) => {
  req.logout();
  res.redirect('/')
};

module.exports = AuthManagement;
