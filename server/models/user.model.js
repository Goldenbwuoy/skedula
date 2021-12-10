const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
	email: {
		type: String,
		trim: true,
		unique: "Email already exists",
		match: [/.+\@.+\..+/, "Please fill a valid email address"],
		required: "Email is required",
	},
	password: {
		type: String,
		trim: true,
		required: "Password is required",
	},
	role: {
		type: String,
		enum: ["Doctor", "Patient", "Admin"],
		required: "Role is required",
	},
});

UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		return next();
	}
	try {
		const salt = await bcrypt.genSalt(10);
		this.password = await bcrypt.hash(this.password, salt);
		return next();
	} catch (err) {
		console.log(err);
	}
});

UserSchema.methods.authenticate = async function (plainText) {
	return await bcrypt.compare(plainText, this.password);
};

module.exports = mongoose.model("User", UserSchema);
