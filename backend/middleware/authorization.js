const jwt = require('jsonwebtoken');



module.exports = (req, res, next) =>{
    const token = req.header('x-auth-token');

    const jwtsecret = process.env.JWTSECRET;

    if(!token){
        res.status(400).json({msg:"Do not have right authorization"})
    }

    try {
        const decoded = jwt.verify(token, jwtsecret);
        req.user = decoded.user;
        next()
    } catch (error) {
        res.status(401).json({msg: "Invalid token!"})   
    }
}