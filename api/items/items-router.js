const router = require('express').Router();

const Items = require('./items-model')
const sellerAuth = require('../auth/auth-seller-mw')

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


router.post('/', sellerAuth, (req, res) => {
    const item = req.body;
    item.sellerID = req.decodedToken.user.id;
    Items.add(item)
        .then(item => {
            res.status(201).json(item);
        })
        .catch(err => {
            res.status(500).json({ message: `unable to add item - ${err}` })
          })
})

router.put('/:id', sellerAuth, (req, res) => {
    Items.edit(req.params.id, req.body)
        .then(count => {
            if(count){
                res.status(200).json({ message: 'update successful', data: req.body })
            } else {
                res.status(404).json({ message: ' Id not found.'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ error:error.message })
        })
})

router.delete('/:id', sellerAuth, (req, res) => {
    Items.remove(req.params.id)
        .then(deleted => {
            res.status(200).json({ message: 'delete success' })
        })
        .catch(err => {
            res.status(500).json({ message: `unable to delete item - ${err}` })
          })
})

module.exports = router;