const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

module.exports = function (app) {
	// body parsing
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded());
	// cookie parsing
	app.use(cookieParser());
	// setting up the session
	app.use(session({ secret: '!@@#$@#$XCS@#$%#$DS$#%&$%^$%', key: 'server' }));
	// static resources
	app.use(express.static(path.join(__dirname, "../public")));
	// views
	app.set('views', __dirname + '/../views');
	// view engine
	app.set('view engine', 'ejs');
	app.engine('html', require('ejs').renderFile);

}