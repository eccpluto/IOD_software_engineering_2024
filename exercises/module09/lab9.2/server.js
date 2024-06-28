// backend server (entrypoint) for MongoDB Blogging application

const express = require("express");
const app = express();

// source .env file
require("dotenv").config();

// pull in database setup code
let dbConnect = require('./dbConnect');

// pull in routes
// let userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);

app.use(express.json());

app.get("/", (req, res) => {
    console.log(req.body);
    res.json({ messsage: "Welcome to my MongoDB application." })
});

// expose server on port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});