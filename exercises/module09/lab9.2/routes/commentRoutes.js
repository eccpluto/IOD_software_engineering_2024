let express = require('express');

let router = express.Router();

// return all comments for a given blog post
router.get('/:id', (req, res) => {
    // TODO
    // Controllers.commentController.getComments(req, res);
});

// add a comment on a particular blog post
router.post('/:id', (req, res) => {
    // TODO
    // Controllers.commentController.createComment(req, res);
});

// update a comment on a particular blog post
router.put('/:id', (req, res) => {
    // TODO
    // Controllers.commentController.updateComment(req, res);
});

// delete a comment on a particular blog post
router.delete('/:id', (req, res) => {
    // TODO
    // Controllers.commentController.deleteComment(req, res);
});

module.exports = router;