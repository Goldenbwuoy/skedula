const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
	account: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
	},
	firstName: {
		type: String,
		trim: true,
		required: "First Name is required",
	},
	lastName: {
		type: String,
		trim: true,
		required: "Last name is required",
	},
	phoneNumber: {
		type: String,
		trim: true,
		required: "Phone number is required",
	},
	account_status: {
		type: String,
		enum: ["Inactive", "Pending", "Active", "Rejected"],
		default: "Inactive",
	},
	physical_address: {},
	practice_number: {
		type: String,
		trim: true,
	},
	affiliations: {},
	brief_introduction: {
		type: String,
		trim: true,
	},
	reviews: [
		{
			patient: {
				type: mongoose.Schema.ObjectId,
				ref: "Patient",
			},
			rating: Number,
			review: { type: String, trim: true },
			time: Date,
		},
	],
	overal_rating: Number,
});

module.exports = mongoose.model("Doctor", DoctorSchema);
