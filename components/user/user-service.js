var UserModel = require('./user-model');
async function verifyUser(email, password) {
	var user = await UserModel.getUser(email, password);
	if (user.length > 0) {
		return true;
	}
	return false;
}


module.exports = {
	verifyUser: verifyUser
};