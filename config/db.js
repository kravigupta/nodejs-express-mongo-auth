var mongoose = require('mongoose');

dbUri = "mongodb://" + config.db.user + ":" + config.db.password + "@" + config.db.host + ":" + config.db.port + "/" + config.db.dbname + "?authSource=" + config.db.authDB;
console.log(dbUri);
var option = {
	useMongoClient: true,
	keepAlive: 300000,
	connectTimeoutMS: 90000,
	socketTimeoutMS: 90000
};
mongoose.Promise = global.Promise;

mongoose.connect(dbUri, option);

mongoose.connection.on('connected', function () {
	console.log('Default Connection to DB established!!!');
});

mongoose.connection.on('error', function (err) {
	console.log("Error while connecting to DB.", err);
});

mongoose.connection.on('disconnected', function () {
	console.log("Disconnected from DB.");
});

