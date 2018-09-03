global.path = require("path");

require("console-stamp")(console, {
	colors: {
		stamp: "yellow",
		label: "white",
		metadata: "green"
	},
	pattern: "yyyy-mm-dd HH:MM:ss Z"
});

const config = {
	port: 10000,
	host: '127.0.0.1'
}

const express = require("express");
var app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const session = require("express-session");
app.use(session({ secret: '!@@#$@#$XCS@#$%#$DS$#%&$%^$%', key: 'server' }));

app.use(express.static(path.join(__dirname, "public")));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var routes = require("./router/routes");

function startServer() {

	app.use("/", routes);

	console.log("Starting Server ..");
	app.listen(config.port, config.host, function () {
		console.log("Server is listening on port " + config.port);
	});
}


startServer();
