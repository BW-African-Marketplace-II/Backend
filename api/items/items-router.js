const router = require('express').Router();

const Items = require('./items-model')

router.get('/', (req, res) => {
    Items.find()
        .then(items => {
            res.status(200).json(items);
        })
        .catch(err => {
            res.status(500).json({ message: `failed to get items - ${err}` })
        })
})

router.get('/:id', (req, res) => {
    Items.findById(req.params.id)
        .then(item => {
            res.status(200).json(item);
        })
        .catch(err => {
            res.status(500).json({ message: `unable to get item - ${err}` })
        })
})

//middleware here
//put at bottom
router.post('/', (req, res) => {
    
})

module.exports = router;