const User = require('../../db').User       //imports the User table from db.js  

const route = require('express').Router()

route.get('/',(req,res)=>{
    // We want to send an array of all users
    // From our database here

    User.findAll()                 //fetch the table user from database
        .then((users)=>{
            res.status(200).send(users)
        })
        .catch((err)=>{
            res.status(500).send({
                error: "Could not retrieve users"
            })
        })
})

route.post('/',(req,res)=>{                     //Since POST request :: So add urlencoded in server.js
    // We expect the req to have name in it
    // So we will create new user

    User.create({                                             //Create a user or(Row in a table/)
        name: req.body.name           // id created by default              
    })
    .then((user)=>{
        res.status(201).send(user)
    })
    .catch((err)=>{
        res.status(501).send({
            error: "Could not add new user"
        })
    })
})

exports = module.exports = route