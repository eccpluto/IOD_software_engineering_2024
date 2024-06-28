let express = require('express');

let router = express.Router();

// get likes for a particular blog post
router.get('/:id', (req, res) => {
    // TODO
    // Controllers.likeController.getLikes(res);
});

// create a like on a blog post
router.post('/:id', (req, res) => {
    // TODO
    // Controllers.likeController.createLike(req.body, res);
});

// remove a like from a particular blog post
router.delete('/:id', (req, res) => {
    // TODO
    // Controllers.likeController.deleteLike(req, res);
});

module.exports = router;