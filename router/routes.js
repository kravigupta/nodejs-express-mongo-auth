const express = require("express");
var router = express.Router();

/**
 * Simple GET for /
 */
router.get("/", function (req, res) {
	res.render('index.html');
});

module.exports = router;