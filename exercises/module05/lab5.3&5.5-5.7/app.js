// abstracts away the code we need for testing purposes, i.e. we don't actually want to start the server loop when testing the business logic

// express is still required, but only for routing pursposes
const express = require('express');
const app = express();

// setup routing
const calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/calculator', calculatorRoutes);
app.use('/', express.static('public'));

// export the app object for index.js to consume
module.exports = app;