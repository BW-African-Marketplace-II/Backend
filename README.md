# Backend

**Base Url:** https://af-market.herokuapp.com/

### /users
/POST /register
{
    "username": string,
    "password": string,
    "email": string,
    "location": string
}

/POST /login
{
    "username": string,
    "password": string
}

/PUT /becomeSeller
Send token as authorization, current logged in user will get the seller role


### /items
/GET /
Returns an array of each item object

/GET /:id
Returns the item object with that id

/POSTS /

### /orders