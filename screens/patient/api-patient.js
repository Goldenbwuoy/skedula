import axios from "../../axios";

const getProfile = async (params, credentials) => {
	try {
		const patient = await axios.get(
			`/api/patients/${params.patientAccount}/profile`,
			{
				headers: {
					Authorization: `Bearer ${credentials.token}`,
				},
			}
		);
		return patient.data;
	} catch (err) {
		return err.patient.data;
	}
};

const fetchDoctors = async () => {
	try {
		const doctors = await axios.get("/api/doctors");
		return doctors.data;
	} catch (err) {
		return err.doctors.data;
	}
};

const createAppointment = async (credentials, appointment) => {
	try {
		const request = await axios.post(`/api/appointments`, appointment, {
			headers: {
				Authorization: `Bearer ${credentials.token}`,
			},
		});

		return request.data;
	} catch (err) {
		return err.request.data;
	}
};

const appointmentsByPatient = async (params, credentials) => {
	try {
		const appointments = await axios.get(
			`/api/appointments/patient/${params.patientId}`,
			{
				headers: {
					Authorization: `Bearer ${credentials.token}`,
				},
			}
		);
		return appointments.data;
	} catch (err) {
		return err.appointments.data;
	}
};

const topRatedDoctors = async (credentials) => {
	try {
		const top_rated = await axios.get("/api/doctors/top_rated", {
			headers: {
				Authorization: `Bearer ${credentials.token}`,
			},
		});
		return top_rated.data;
	} catch (err) {
		return err.top_rated.data;
	}
};

const doctorProfile = async (params, credentials) => {
	try {
		const doctor = await axios.get(
			`/api/doctors/doctor/${params.doctorId}`,
			{
				headers: {
					Authorization: `Bearer ${credentials.token}`,
				},
			}
		);
		return doctor.data;
	} catch (err) {
		console.log("There is an error");
		return err.response.data;
	}
};

export {
	getProfile,
	fetchDoctors,
	createAppointment,
	appointmentsByPatient,
	topRatedDoctors,
	doctorProfile,
};
