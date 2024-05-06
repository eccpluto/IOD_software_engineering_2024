const express = require("express");
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');
const calculatorControllerInstance = new calculatorController();

router.get('/add', (req, res) => {
    calculatorControllerInstance.add(req, res);
});

router.get('/subtract', (req, res) => {
    calculatorControllerInstance.subtract(req, res);
})

router.get('/divide', (req, res) => {
    calculatorControllerInstance.divide(req, res);
})

router.get('/multiply', (req, res) => {
    calculatorControllerInstance.multiply(req, res);
})

module.exports = router;