"use strict";

// let Models = require("../models"); // matches index.js
let userModel = require('../models').user;

const getUsers = (res) => {
    // finds all users
    console.log('finding users');
    userModel.find({})
        .then(data => res.send({ result: 200, data: data}))
        .catch(error => {
            res.send({ result: 500, error: error.message})
        })
}

// const createUser = (data, res) => {
//     // creates a new user using JSON data POSTed in request body
//     console.log(data)
//     new Models.User(data).save()
//         .then(data => res.send({ result: 200, data: data }))
//         .catch(err => {
//             console.log(err);
//             res.send({ result: 500, error: err.message })
//         })
// }

// const updateUser = (req, res) => {
//     console.log(req.body);
//     Models.User.findByIdAndUpdate(req.params.id, rqe.body, {
//         new: true
//     })
//         .then(data => res.send({ result: 200, data: data }))
//         .catch(error => {
//             console.log(error);
//             res.send({ result: 500, error: error.message });
//         })
// }

// const deleteUser = (req, res) => {
//     console.log(req.body);
//     Models.User.findByIdAndDelete(req.params.id, req.body, {
//         new: true
//     })
//         .then(data => { res.send({ result: 200, data: data }) })
//         .catch(error => {
//             console.log(error);
//             res.send({ result: 500, error: error.message })
//         })
// }

module.exports = {
    getUsers
    // , createUser, updateUser, deleteUser
}