"use strict";

// let Models = require("../models"); // matches index.js
// let userModel = require('../models').user;
let blogPostModel = require('../models').blogPost;

const getBlogPosts = (res) => {
    console.log('finding blog posts');
    blogPostModel.find({})
        .then(data => res.send({ result: 200, data: data }))
        .catch(error => {
            console.log(error);
            res.send({ result: 500, error: error.message });
        })
}

const createBlogPost = (data, res) => {
    console.log(`creating blog post:\n ${data}`);
    new blogPostModel(data).save()
        .then(data => res.send({ result: 200, data: data }))
        .catch(error => res.send({ result: 500, error: error.message }));
}

module.exports = {
    getBlogPosts, createBlogPost
}