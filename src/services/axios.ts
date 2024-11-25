import axios from "axios";

const instance = axios.create({
  baseURL: "https://demo.malasportal.in",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Origin: "http://localhost:5173",
  },
});

export default instance;
