const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
	doctor: {
		type: mongoose.Schema.ObjectId,
		ref: "Doctor",
	},
	patient: {
		type: mongoose.Schema.ObjectId,
		ref: "Patient",
	},
	date: {
		type: String,
		required: "Appointment date is required",
	},
	start_time: {
		type: String,
		required: "Appointment start time is required",
	},
	end_time: {
		type: Date,
	},
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
