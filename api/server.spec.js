const request = require('supertest')
const server = require('./server')
const Users = require('./auth/auth-model')
const Items = require('./items/items-model')
const Orders = require('./orders/orders-model')
const itemsModel = require('./items/items-model')
const db = require('../data/dbConfig')

const aUser = {
    username: "testuser1",
    password:"password",
    location: "somewhere",
    email: "user1@test.com",
    userRole: "seller"
}

const anItem = {
    name: 'test item',
    price: 10,
    location: 'knowwhere',
    description: 'an item for testing'
}

describe('Server', function(){
    it('runs the test', function(){
        expect(true).toBe(true)
    })

    describe('API is ready to go', function() {
        it('should return 200 OK', function() {
            // make a GET request to /
            return request(server).get('/').then(res => {
                // check that the status code is 200
                expect(res.status).toBe(200);
            })
        })
    });

    describe('Register a new user', function() {
        beforeEach(async () => {
            await db('users').truncate();
        })

        it('adding a new user', async function() {
            return request(server).post('/users/register').send(aUser)
            .then(res => {
                expect(res.status).toBe(201)
                expect(res.type).toMatch(/json/i)
                expect(res.body.message).toBe('register success')
            })
        });
    })

    describe('Login and create an item', function(){

        it('User logged in and created an item', function() {
            return request(server).post('/users/login')
            .send({username: aUser.username, password: aUser.password})
            .then(res => {
                return request(server).post('/items').set({Authorization: res.body.token}).send(anItem)
                    .then(then => {
                        expect(then.status).toBe(201)
                        expect(then.type).toMatch(/json/i)
                        expect(then.body.name).toBe('test item')
                    })

            })
        })
    })

})