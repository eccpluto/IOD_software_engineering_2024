'use strict';
const Mongoose = require('mongoose');

// note this Monfodb database has been constructed externally
// and is made available at the specified uri on port 21017
// use explicit ipv4 address if localhost is not configured correctl
const uri = process.env.DB_URI || "mongodb://127.0.0.1/BlogDB";

Mongoose.connect(uri)
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(`MongoDB connection error:\n ${error.message}`));

// reference the database connection
const db_connection = Mongoose.connection;

db_connection.on('error', console.error.bind(console, 'MongoDB connection error.'));

exports.Mongoose = Mongoose;