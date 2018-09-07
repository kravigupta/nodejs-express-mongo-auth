const express = require("express");
var router = express.Router();
const serverUtil = require('../utils/server-util.js');


/************** LOGIN and LOGOUT *****************/

router.get('/login', function (req, res) {
	// render the html
	res.render('index.html');
});

router.post('/login', function (req, res) {
	var email = req.body.email;
	var password = req.body.password;
	console.log("Email - " + email);
	console.log("Password - " + password);
	// code to check email and password against database
	serverUtil.verifyUser(email, password).then(function(isValidUser){
		console.log(isValidUser);
		if (isValidUser) {
			
			session = req.session;
			session.email = email;
			// render the html
			res.redirect('/home');
		} else {
			res.redirect('/login');
		}
	});
	


});

router.get('/logout', function (req, res) {
	session = req.session;
	// code to clean user session and logout
	delete session.email

	req.session.destroy(function (err) {
		if (err) {
			console.log(err);
		}
		else {
			//Session destroyed, redirect to home page.
			res.redirect('/');
		}
	});
});
/************** LOGIN and LOGOUT ENDS *****************/

/************** HOME *****************/
router.get('/home', (req, res) => {
	if (checkAuth(req, res)) {
		res.render('home.html');
	}
});


/**
 * Methonds to Login/Logout 
 */
router.get("/", function (req, res) {
	session = req.session;
	res.render('index.html');
});


/**
 * Methonds to Login/Logout 
 */
router.get("/:anything", function (req, res) {
	session = req.session;
	res.redirect('/'); // not showing any 404 page for now.
});

/************** Helper functions *************/

function checkAuth(req, res) {
	if (req.session.email) {
		console.log("Session is valid for " + session.email);
		return true;
	} else {
		res.redirect('/login');
	}
}


module.exports = router;