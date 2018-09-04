var mongoose = require('mongoose');
// var crypto = require('crypto');
// var jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	hash: String,
	salt: String
});

var UserModel = mongoose.model('User', userSchema);


/**
 * Just creating a dummy user here.
 */
var usersToAdd = [{
	email: 'ravi@r.com',
	name: 'Ravi',
	password: 'password'
}];
async function checkForUsers() {
	let usersCount = await UserModel.count({});

	if (usersCount == 0) {
		await UserModel.insertMany([{
			email: 'rav1i@r.com',
			name: 'Ravi',
			password: '123abc'
		}])
	}
}
// checkForUsers();

/** Default used added. */