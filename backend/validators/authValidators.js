const {check} = require('express-validator');

const signupValidatore = [
    check('name', "Name is Required!").not().isEmpty(),
    check('email', "Email is required!").isEmail(),
    check('password', "Password at least 6 characters").isLength({min:6})
]


const signinValidatore = [
    check('email', "Email is required!").isEmail(),
    check('password', "Password required").exists()
]

module.exports = {
    signupValidatore,
    signinValidatore
}