const router = require('express').Router();

const Items = require('./items-model')

router.get('/', (req, res) => {
    res.status(200).json({message: 'it works'})
})

module.exports = router;