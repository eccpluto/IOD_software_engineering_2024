let express = require("express");

let router = express.Router();
let userController = require('../controllers').userController;

// let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all users
router.get('/', (req, res) => {
    userController.getUsers(res);
})

// Adds a POST route to create a new user
router.post('/create', (req, res) => {
    userController.createUser(req.body, res);
})

// update a user by id
router.put('/:id', (req, res) => {
    userController.updateUser(req, res);
})

// delete a user by id
router.delete('/:id', (req, res) => {
    userController.deleteUser(req, res);
})

module.exports = router;