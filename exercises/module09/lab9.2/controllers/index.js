// Sourcing this will provide access to controllers for routes to delegate to
'use strict'

module.exports = {
    blogPostController: require('./blogPostController'),
    commentController: require('./commentController'),
    likeController: require('./likeController'),
    userController: require('./userController')
}