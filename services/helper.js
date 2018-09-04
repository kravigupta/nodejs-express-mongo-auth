UserModel = db.model('User');

async function verifyUser(email, password) {
	let user = await UserModel.find({ email: email, password: password });
	if (user.length > 0) {
		return true;
	} else {
		return false;
	}
}
module.exports = {
	verifyUser: verifyUser
}