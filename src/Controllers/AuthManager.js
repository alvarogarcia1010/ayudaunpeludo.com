'use strict'
const AuthManagement = require('../Services/AuthManagement');

const AuthManager = {};

AuthManager.init = AuthManagement.init;

AuthManager.getLogin = AuthManagement.getLogin;

AuthManager.signUp = AuthManagement.signUp;

AuthManager.signIn = AuthManagement.signIn;

AuthManager.facebookLogin = AuthManagement.facebookLogin;

AuthManager.facebookLoginCallback = AuthManagement.facebookLoginCallback;

AuthManager.googleLogin = AuthManagement.googleLogin;

AuthManager.googleLoginCallback = AuthManagement.googleLoginCallback;

AuthManager.logOut = AuthManagement.logOut;

module.exports = AuthManagement;
