import axios from "axios";

const api = axios.create({
  baseURL: "https://mern-notes-7wjw.onrender.com/api",
});

export default api;
