const calculatorRoutes = require('./routes/calculatorRoutes.js');
const express = require('express');

app = express();

port = 3000;

// middleware to deploy static content
app.use('/', express.static('public'));
app.use('/calculator', calculatorRoutes);

app.listen(port, () => {
    console.log(`app started, listening on port: ${port}`);
})