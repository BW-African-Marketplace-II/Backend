const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('./auth/authenticate-mw')
const authRouter = require('./auth/auth-router')
const itemRouter = require('./items/items-router')
const orderRouter = require('./orders/orders-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API is up and running')
})

server.use('/users', authRouter);
server.use('/items', itemRouter);
server.use('/orders', authenticate,orderRouter);

module.exports = server;
