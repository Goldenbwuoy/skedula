import axios from "../../axios";

const getProfile = async (params, credentials) => {
  try {
    const doctor = await axios.get(`/api/doctors/${params.accountId}`, {
      headers: {
        Authorization: `Bearer ${credentials.token}`,
      },
    });
    return doctor.data;
  } catch (err) {
    return err.doctor.data;
  }
};

export { getProfile };
