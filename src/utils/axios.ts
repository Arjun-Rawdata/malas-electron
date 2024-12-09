import axios from "axios";

export const request = axios.create({
  baseURL: "http://192.168.2.59:8000/API",
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error, "---------------");

    return Promise.reject(error);
  }
);
