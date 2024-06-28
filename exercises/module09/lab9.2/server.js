// backend server (entrypoint) for MongoDB Blogging application

const express = require("express");
const app = express();

// source .env file
require("dotenv").config();

// pull in database setup code
let dbConnect = require('./dbConnect');

// pull in routes, note these could 
let routes = require('./routes');
app.use('/api/blogposts', routes.blogPostRoutes);
app.use('/api/comments', routes.commentRoutes);
app.use('/api/likes', routes.likeRoutes);
app.use('/api/users', routes.userRoutes);

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