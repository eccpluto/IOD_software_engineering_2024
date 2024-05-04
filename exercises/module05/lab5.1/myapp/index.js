/**
 * Use npm start to launch the express server, the root ('/') endpoint tells you about available endpoints.
 */

// require the express package (server module)
const express = require('express');

// create an express instance and store a reference in the app variable 
const appRandomNumberServer = express();
const appStaticImageServer = express();
const appStaticTestSever = express();

// define some ports, in this case for listening for requests
const portA = 3000;
const portB = 3001;


// binding for endpoint: bind a get endpoint to the object app using the / URL (root) 
appRandomNumberServer.get('/', (req, res) => {
    res.send('Hello from random number server. \nGo to /generate to get a random number!');
})
appRandomNumberServer.get('/generate', (req, res) => {
    let test = Math.floor(Math.random()*100).toString();
    res.send(test);
})

// endpoints
appStaticImageServer.get('/', (req, res) => {
    res.send('Hello from static image server. Endpoints are /rick and /ricardo.');
})
appStaticImageServer.get('/rick', (req, res) => {
    res.send(`<img src='/images/imgRick.jpg' alt='rick being rick'></img>`);
})
appStaticImageServer.get('/ricardo', (req, res) => {
    res.send(`<img src='/images/imgRicardo.jpg' alt='ricardo being ricardo'></img>`);
})

// expose static resources (define public root) for the appStaticImageServer endpoints
appStaticImageServer.use(express.static('public'));

// activate the webserver by binding port to listen on, call the function once the server starts
appRandomNumberServer.listen(portA, () => {
    console.log(`appRandomNumberServer listening at http://localhost:${portA}`);
})
appStaticImageServer.listen(portB, () => {
    console.log(`appStaticImageServer listening at http://localhost:${portB}`);
})