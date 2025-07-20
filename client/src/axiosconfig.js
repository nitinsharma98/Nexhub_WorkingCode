import axios from "axios";

const API = axios.create({
//   baseURL: "https://your-backend.onrender.com", // replace with your backend
  baseURL: "http://localhost:8080/api", // replace with your backend
  withCredentials: true, // 🔥 must for cookie-based auth
});

export default API;