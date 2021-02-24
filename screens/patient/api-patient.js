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

export { getProfile, fetchDoctors };
