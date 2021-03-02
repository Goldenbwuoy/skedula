import axios from "../../axios";

const getProfile = async (params, credentials) => {
  try {
    const patient = await axios.get(`/api/patients/${params.accountId}`, {
      headers: {
        Authorization: `Bearer ${credentials.token}`,
      },
    });
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

const createAppointment = async (params, credentials, appointment) => {
  try {
    const request = await axios.post(
      `/api/appointment/by/${params.patientAccount}/with/${params.doctorId}`,
      appointment,
      {
        headers: {
          Authorization: `Bearer ${credentials.token}`,
        },
      }
    );

    return request.data;
  } catch (err) {
    return err.request.data;
  }
};

const appointmentsByPatient = async (params, credentials) => {
  try {
    const appointments = await axios.get(
      `/api/appointments/patient/${params.patientAccount}`,
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

export { getProfile, fetchDoctors, createAppointment, appointmentsByPatient };
