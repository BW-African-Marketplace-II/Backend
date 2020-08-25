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


### /items
/GET /
Returns an array of each item object

/GET /:id
Returns the item object with that id

.POSTS /

### /orders