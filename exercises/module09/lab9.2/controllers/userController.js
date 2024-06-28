"use strict";

// let Models = require("../models"); // matches index.js
let userModel = require('../models').user;

const getUsers = (res) => {
    // finds all users
    console.log('finding users');
    userModel.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(error => res.send({ result: 500, error: error.message }));
}

const createUser = (data, res) => {
    console.log(data);
    new userModel(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(error => {
            console.log(error);
            res.send({ result: 500, error: error.message })
        });
}

const updateUser = (req, res) => {
    console.log(req.body);
    userModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
        .then(data => res.send({ result: 200, data: data }))
        .catch(error => {
            console.log(error);
            res.send({ result: 500, error: error.message });
        })
}

const deleteUser = (req, res) => {
    console.log(req.body);
    userModel.findByIdAndDelete(req.params.id, req.body, {
        new: true
    })
        .then(data => { res.send({ result: 200, data: data }) })
        .catch(error => {
            console.log(error);
            res.send({ result: 500, error: error.message })
        })
}

module.exports = {
    getUsers, createUser, updateUser, deleteUser
}