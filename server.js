// config
require('./config/server-config');

// globals
require('./config/globals');

// db connection
require('./config/mongo-db');



const express = require("express");
var app = express();
require('./middleware')(app);

var routes = require("./router");
app.use("/", routes);

function startServer() {
	console.log("Starting Server ..");
	app.listen(ServerConfig.port, ServerConfig.host, function () {
		console.log("Server is listening on port " + ServerConfig.port);
	});
}

startServer();
