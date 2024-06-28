let express = require("express");

let router = express.Router();
let userController = require('../controllers').userController;

// let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get('/', (req, res) => {
    console.log('users');
    userController.getUsers(res);
})

// Adds a POST route to create a new user
router.post('/create', (req, res) => {
    //TODO
    // Controllers.userController.createUser(req.body, res);
})

// update a user by id
router.put('/:id', (req, res) => {
    //TODO
    // Controllers.userController.updateUser(req, res);
})

// delete a user by id
router.delete('/:id', (req, res) => {
    //TODO
    // Controllers.userController.deleteUser(req, res);
})

module.exports = router;