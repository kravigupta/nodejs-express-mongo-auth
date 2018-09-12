var userSchema = new db.Schema({
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

db.model('User', userSchema);
