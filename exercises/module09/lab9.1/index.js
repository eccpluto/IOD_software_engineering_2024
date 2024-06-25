// import the app object, which has already been initialised with the calculator router, and business logic
const app = require('./app');

// declare a port
const port = 3000;

// start the server
app.listen(port, () => {
    console.log(`app started, listening on port: ${port}`);
})