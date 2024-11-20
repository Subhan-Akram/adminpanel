import axiosApi, { BASE_URL } from "../axiosConfig/axiosConfig";
import axios from "axios";
export function getAllLanguageCode() {
  return axiosApi.get("/api/v1/helpintx/language");
}

export function generateSnippet(payload) {
  return axios.post(`${BASE_URL}/api/v1/helpintx/snippet`, payload, {
    headers: {
      "Partner-Event-ID": `SCORE-TWG-${Math.floor(Math.random() * 1000)}`,
      Authorization: "Bearer " + sessionStorage.getItem("access_token"),
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });
}
export const generateSecurityKey = (modelSetId) => {
  return axiosApi.post(`/api/v1/set/key/${modelSetId}`);
};
