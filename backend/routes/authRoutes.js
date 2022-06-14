const express = require('express');
const { 
    getUser, 
    userSignup, 
    userSignin 
} = require('../controllers/authControllers');
const { signupValidatore, signinValidatore } = require('../validators/authValidators');
const auth = require('../middleware/authorization');


const route = express.Router();



route.get('/me', auth,  getUser);
route.post('/signup', signupValidatore, userSignup);
route.post('/signin', signinValidatore, userSignin);


module.exports = route;