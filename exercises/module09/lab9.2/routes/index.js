// Sourcing this will provide CRUD access to collections in the BlogDB database

'use strict'

module.exports = {
    blogPostRoutes: require('./blogPostRoutes'),
    commentRoutes: require('./commentRoutes'),
    likeRoutes: require('./likeRoutes'),
    userRoutes: require('./userRoutes')
}