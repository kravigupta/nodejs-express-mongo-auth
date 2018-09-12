const userService = require('../components/user/user-service'); 

async function verifyUser(email, password) {
	return userService.verifyUser(email, password);
	// UserModel = db.model('User');
	// let user = await UserModel.find({ email: email, password: password });
	// if (user.length > 0) {
	// 	return true;
	// } else {
	// 	return false;
	// }
}
module.exports = {
	verifyUser: verifyUser
}