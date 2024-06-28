let express = require('express');

let router = express.Router();
let blogPostController = require('../controllers').blogPostController;

// return all blog posts
router.get('/', (req, res) => {
    // console.log('routing get all blog posts')
    blogPostController.getBlogPosts(res);
});

// create a post
router.post('/create', (req, res) => {
    blogPostController.createBlogPost(req.data, res);
});

// update a comment to a blog post specified by id,
// passing the comment id in the request
router.put('/:id', (req, res) => {
    // TODO
    // Controllers.blogPostController.updateBlogPost(req, res);
});

// delete a comment to a blog post specified by the id,
// passing the comment id in the request
router.delete('/:id', (req, res) => {
    // TODO
    // Controllers.blogPostController.deleteBlogPost(req, res);
});

module.exports = router;