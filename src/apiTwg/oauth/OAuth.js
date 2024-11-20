import { LOGIN_API_URL } from "../axiosConfig/axiosConfig";
import Axios from "axios";
import qs from "qs";

export function loginUser({ email, password }) {
  const data = {
    grant_type: "password",
    username: email,
    password: password,
    scope: "email phone profile",
  };
  return Axios({
    method: "post",
    url: "/auth/realms/ssbx-tf/protocol/openid-connect/token",
    data: qs.stringify(data),
    baseURL: LOGIN_API_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
      Authorization: "Basic c3NieC13ZWI6",
    },
  });
}

export function refreshToken() {
  const data = {
    grant_type: "refresh_token",
    refresh_token: sessionStorage.getItem("refresh_token"),
  };

  return Axios({
    method: "post",
    url: "/auth/realms/ssbx-tf/protocol/openid-connect/token",
    data: qs.stringify(data),
    baseURL: LOGIN_API_URL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "*/*",
      Authorization: "Basic c3NieC13ZWI6",
    },
  })
    .then((res) => {
      sessionStorage.setItem("access_token", res.data.access_token);
      sessionStorage.setItem("expires_in", res.data.expires_in);
      sessionStorage.setItem("refresh_token", res.data.refresh_token);
      sessionStorage.setItem("refresh_expires_in", res.data.refresh_expires_in);
      return res;
    })
    .catch((error) => {
      sessionStorage.clear();
      return Promise.reject(error);
    });
}
