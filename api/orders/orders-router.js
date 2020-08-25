const router = require('express').Router();
//const jwt = require('jsonwebtoken')

const Orders = require('./orders-model')

router.get('/', (req, res) => {
    res.status(200).json(req.decodedToken.user)
})

module.exports = router;