const express = require("express");
const router = express.Router();

router.get('/add', (req, res) => {
    console.log(req.query);
    res.send(req.query);
});

module.exports = router;