import axios from "../../axios";

const getProfile = async (params, credentials) => {
  try {
    const doctor = await axios.get(`/api/doctors/${params.accountId}/profile`, {
      headers: {
        Authorization: `Bearer ${credentials.token}`,
      },
    });
    return doctor.data;
  } catch (err) {
    return err.doctor.data;
  }
};

const appointmentsByDoctor = async (params, credentials) => {
  try {
    const appointments = await axios.get(
      `/api/appointments/doctor/${params.doctorId}`,
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

export { getProfile, appointmentsByDoctor };
