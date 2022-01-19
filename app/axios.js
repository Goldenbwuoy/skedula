import axios from "axios";
import { SERVER_URL } from "@env";

const axiosInstance = axios.create({
	baseURL: SERVER_URL,
	// baseURL: "http://192.168.0.101:5000/",
});

export default axiosInstance;
