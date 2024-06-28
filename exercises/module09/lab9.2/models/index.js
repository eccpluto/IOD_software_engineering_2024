// Sourcing this will provide access to schemas for each collection

'use strict'

module.exports = {
    blogPost: require('./blogPost'),
    comment: require('./comment'),
    like: require('./like'),
    user: require('./user')
}