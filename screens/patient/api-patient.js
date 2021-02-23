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

export { getProfile };
