import axios from "../axiosConfig/axiosConfig";

export function getAllModelSet() {
  return axios.get("/api/v1/set");
}
export function userMe() {
  return axios.get("/api/v1/user/me");
}

export function createModelSet(payload) {
  return axios.post("/api/v1/set", payload);
}

export function updateModelSet({ payload, modelSetExtId }) {
  return axios.put(`/api/v1/set/${modelSetExtId}`, payload);
}

export function deleteModelSet(id) {
  return axios.delete(`/api/v1/set/${id}`);
}
