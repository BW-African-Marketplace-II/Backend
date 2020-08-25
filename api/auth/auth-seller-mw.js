const jwt = require('jsonwebtoken')

const {jwtSecret} = require('../../data/config/secret')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token){
        jwt.verify(token, jwtSecret, (err, decodedToken) => {
            if(err) {
                res.status(401).json({ message: 'authorization failed' });
            } else {
                req.decodedToken = decodedToken
                if (req.decodedToken.user.userRole === 'seller'){
                    next();
                } else{
                    res.status(401).json({ message: `user is a ${req.decodedToken.user.userRole}, not a seller` })
                }
            }
        })
    } else {
        res.status(400).json({ message: 'no credentials provided' })
    }
}