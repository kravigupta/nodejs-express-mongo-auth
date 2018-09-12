
async function addUser() {
	console.log("Inside addUser");
}
async function removeUser() {
	console.log("Inside removeUser");
}
async function updateUser() {
	console.log("Inside updateUser");
}
async function getUser(email, password) {
	var UserModel = db.model('User');
	let user = await UserModel.find({ email: email, password: password });
	return user;
}
async function getUserByEmail(email) {
	var UserModel = db.model('User');
	let user = await UserModel.find({ email: email });
	return user;
}
async function getUsers() {
	console.log("Inside getUsers");
}

module.exports = {
	addUser: addUser,
	removeUser: removeUser,
	updateUser: updateUser,
	getUser: getUser,
	getUsers: getUsers,
	getUserByEmail: getUserByEmail
};

// /**
//  * Just creating a dummy user here.
//  */
// var usersToAdd = [{
// 	email: 'ravi@r.com',
// 	name: 'Ravi',
// 	password: 'password'
// }];
// async function checkForUsers() {
// 	let usersCount = await UserModel.count({});

// 	if (usersCount == 0) {
// 		await UserModel.insertMany([{
// 			email: 'rav1i@r.com',
// 			name: 'Ravi',
// 			password: '123abc'
// 		}])
// 	}
// }
// // checkForUsers();

// /** Default used added. */