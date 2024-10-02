import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/api/v1", // Địa chỉ của API server của bạn
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Nếu cần thiết cho cookie
});

export default axiosInstance;
