const User = require('../models/user')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');


const getUser = async (req, res) =>{
    try {
        const user = await User.findById(req.user.id).select("-password");

        res.json(user);
    } catch (error) {
        
    }
}

const userSignup = async (req, res) =>{

    const errors = validationResult(req)

    if(!errors.isEmpty){
        return res.status(400).json({errors: errors.array()})
    }

    try {
        const {username, email, password} = req.body;

        const jwtsecret = process.env.JWTSECRET;

        let user = await User.findOne({email});

        if(user){
            res.status(400).json({
                errors: "User already exists!"
            })
        };

        user = new User({
            username,
            email,
            password,
        })

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        user.save();


        payload = {
            user:{
                id:user.id,
                email:user.email,
                username: user.username,
            }
        };

        jwt.sign(payload, jwtsecret, {expiresIn: 3600 * 24}, (err, token)=>{
            if (err) throw err;
            res.json({token})
        });


        // res.send("User Created")

    } catch (error) {
        res.status(500).send("Server error.")
    }
}
const userSignin = async (req, res) =>{
    const errors = validationResult(req)

    if(!errors.isEmpty){
        return res.status(400).json({errors: errors.array()})
    }

    try {
        const {email, password} = req.body;

        const jwtsecret = process.env.JWTSECRET;

        let user = await User.findOne({email});

        if(!user){
            res.status(400).json({
                errors: [{
                    msg: "User not found"
                }]
            })
        };

        const match = await bcrypt.compare(password, user.password);

        if(!match){
            res.status(400).json({
                errors: [{
                    msg: "User or password not match"
                }]
            })
        }
        
        payload = {
            user:{
                id:user.id,
                email:user.email,
                username: user.username,
            }
        };

        jwt.sign(payload, jwtsecret, {expiresIn: 3600 * 24}, (err, token)=>{
            if (err) throw err;
            res.json({token})
        });


        // res.send("User Created")

    } catch (error) {
        res.status(500).send("Server error.")
    }


}



module.exports = {
    getUser,
    userSignup,
    userSignin
}