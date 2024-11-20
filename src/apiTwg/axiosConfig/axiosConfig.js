import axios from "axios";
import { refreshToken } from "../oauth";

const API_URL = import.meta.env.VITE_BASE_API_URL;
export const LOGIN_API_URL = import.meta.env.VITE_BASE_API_LOGIN_URL;
export const BASE_URL = API_URL;

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Partner-Event-ID": `SCORE-TWG-${Math.floor(Math.random() * 1000)}`,
    Authorization: "Bearer " + sessionStorage.getItem("access_token"),
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("access_token");
    if (token) {
      config.headers["Content-type"] = "application/json; charset=utf-8";
      config.headers.Authorization = "Bearer " + token;
      config.headers.Accept = "application/json; charset=utf-8";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const accessToken = sessionStorage.getItem("access_token");
    if (error?.response?.status === 401 && accessToken) {
      return refreshToken().then((res) => {
        if (res?.status === 201) {
          axios.defaults.headers.common.Authorization =
            "Bearer " + sessionStorage.getItem("access_token");
          return axios(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  },
);

export default instance;
