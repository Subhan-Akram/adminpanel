import axios from "../axiosConfig/axiosConfig";

export function createOrganzation(payload) {
  return axios.get("/admin/api/v1/org", payload);
}
export function getOrganizations() {
  return axios.get("/admin/api/v1/org");
}

export function createModelSet(payload) {
  return axios.post("/api/v1/set", payload);
}

export function updateOrganzation(extId, payload) {
  return axios.put(`/admin/api/v1/org/${extId}`, payload);
}

export function deleteOrganization(extId) {
  return axios.delete(`/admin/api/v1/org/${extId}`);
}
