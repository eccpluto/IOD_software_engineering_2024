const express = require("express"); // import the express package
const friendRoutes = require('./routes/friendRoutes');
const swaggerUI = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json');

const app = express(); // create a new app
const port = 3000; // change this to run the app on a different port - usually a 4 digit number

// swagger setup
app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocument)
)

// parse requests of content-type - application/json (needed for POST and PUT requests using req.body)
app.use(express.json());

app.use('/', express.static('public'))
app.use('/friends', friendRoutes);


// starts the backend app on the given port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
