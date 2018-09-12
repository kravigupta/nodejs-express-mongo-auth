const dbUri = "mongodb://" + ServerConfig.db.user + ":" + ServerConfig.db.password + "@" + ServerConfig.db.host + ":" + ServerConfig.db.port + "/" + ServerConfig.db.dbname + "?authSource=" + ServerConfig.db.authDB;
console.log(dbUri);
var option = {
	keepAlive: 300000,
	connectTimeoutMS: 90000,
	socketTimeoutMS: 90000
};
db.Promise = global.Promise;

db.connect(dbUri, option);

db.connection.on('connected', function () {
	console.log('Default Connection to DB established!!!');
});

db.connection.on('error', function (err) {
	console.log("Error while connecting to DB.", err);
});

db.connection.on('disconnected', function () {
	console.log("Disconnected from DB.");
});

require('../components/user/user-schema');