const express = require('express');
const router = express.Router();

const AuthManager = require('../Controllers/AuthManager');
const UserManager = require('../Controllers/UserManager');
const HomeManager = require('../Controllers/HomeManager');


const AuthMiddleware = require("../Middlewares/AuthMiddleware");

router.get('/', AuthManager.init);

router.get('/login', AuthManager.getLogin);

router.post('/signup', AuthManager.signUp);

router.post('/login', AuthManager.signIn);

router.get('/facebook-login', AuthManager.facebookLogin);

router.get('/facebook-login/callback', AuthManager.facebookLoginCallback);

router.get('/google-login', AuthManager.googleLogin);

router.get('/google-login/callback', AuthManager.googleLoginCallback);

router.get('/logout', AuthManager.logOut);

router.get('/reset/:token', UserManager.reset);

router.post('/reset/:token', UserManager.resetPass);

router.get('/dashboard', AuthMiddleware.isAuthentication, HomeManager.getDashboard);

router.get('/config', AuthMiddleware.isAuthentication, HomeManager.getConfiguration);

module.exports = router;
