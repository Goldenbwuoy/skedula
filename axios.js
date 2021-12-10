import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://gpnserver.herokuapp.com/",
  // baseURL: "http://192.168.0.101:5000/",
});

export default axiosInstance;
