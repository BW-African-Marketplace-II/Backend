const router = require('express').Router();
//const jwt = require('jsonwebtoken')

const Orders = require('./orders-model')
const Items = require('../items/items-model')

router.get('/bought', (req, res) => {
    Orders.findBy({buyerID: req.decodedToken.user.id})
        .then(orders => {
            res.status(200).json(orders);
        })
        .catch(err => {
            res.status(500).json({ message: `failed to get orders - ${err}` })
        })
})

router.get('/sold', (req, res) => {
    Orders.findBy({sellerID: req.decodedToken.user.id})
        .then(orders => {
            res.status(200).json(orders);
        })
        .catch(err => {
            res.status(500).json({ message: `failed to get orders - ${err}` })
        })
})

router.post('/:id', (req, res) => {
    const purchase = {}
    purchase.itemID = req.params.id
    purchase.buyerID = req.decodedToken.user.id
    Items.findById(req.params.id)
        .then(item => {
            purchase.sellerID = item.sellerID
        })
    Orders.add(purchase)
        .then(order => {
            res.status(200).json(order);
        })
        .catch(err => {
            res.status(500).json({ message: `failed to add order - ${err}` })
        })
})

module.exports = router;