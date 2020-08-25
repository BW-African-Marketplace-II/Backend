const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('../data/dbConfig');
const authenticate = require('./auth/authenticate-mw')
const authRouter = require('./auth/auth-router')
const itemRouter = require('./items/items-router')
const orderRouter = require('./orders/orders-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    db('users').select('*')
        //.fullOuterJoin('users', 'users.id', 'orders.sellerID')
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.send(err));
})

server.use('/users', authRouter);
server.use('/items', itemRouter);
server.use('/orders', authenticate, orderRouter);

module.exports = server;
