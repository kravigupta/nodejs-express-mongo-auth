global.ServerConfig = {
	"port": 10000,
    "host": "127.0.0.1",
    "db": {
        "user": "ravi",
        "password": "ravi",
        "host": "127.0.0.1",
        "port": 27017,
        "dbname": "Server",
        "authDB": "admin"
    }
}
require("console-stamp")(console, {
	colors: {
		stamp: "yellow",
		label: "white",
		metadata: "green"
	},
	pattern: "yyyy-mm-dd HH:MM:ss Z"
});