import axios from "axios";

export const request = axios.create({
  baseURL: "https://b512-2401-4900-1cde-19f8-b984-be72-cc74-7d76.ngrok-free.app/API",
  headers: {
    "Content-Type": "application/json",
    Origin: "http://localhost:5173",
  },
});

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("NOT FOUND >>>", error);
    }

    return Promise.reject(error);
  }
);
