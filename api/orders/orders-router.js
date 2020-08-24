const router = require('express').Router();

const Orders = require('./orders-model')

router.get('/', (req, res) => {
    res.status(200).json({message: 'it works'})
})

module.exports = router;