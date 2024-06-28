let express = require('express');

let router = express.Router();

// return all blog posts
router.get('/', (req, res) => {
    // TODO
    // Controllers.blogPostController.getBlogPosts(res);
});

router.post('/create', (req, res) => {
    // TODO
    // Controllers.blogPostController.createBlogPost(req.body, res);
});

router.put('/:id', (req, res) => {
    // TODO
    // Controllers.blogPostController.updateBlogPost(req, res);
});

router.delete('/:id', (req, res) => {
    // TODO
    // Controllers.blogPostController.deleteBlogPost(req, res);
});

module.exports = router;