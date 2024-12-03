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
    if (error.response && error.response.status === 401) {
      console.log("NOT FOUND >>>", error);
    }

    return Promise.reject(error);
  }
);
