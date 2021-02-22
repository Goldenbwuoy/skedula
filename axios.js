import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gpnserver.herokuapp.com/",
});

export default axiosInstance;
