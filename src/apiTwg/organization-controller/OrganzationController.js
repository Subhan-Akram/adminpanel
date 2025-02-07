import axios from "../axiosConfig/axiosConfig";

export function createOrganization(payload) {
  return axios.post("/admin/api/v1/org", payload);
}
export function getOrganizations() {
  return axios.get("/admin/api/v1/org");
}

export function updateOrganization(extId, payload) {
  return axios.put(`/admin/api/v1/org/${extId}`, payload);
}
export function joinCompanies(extId, companyExtIds) {
  return axios.post(`/admin/api/v1/org/${extId}/join`, { companyExtIds });
}

export function leaveCompanies(extId, companyExtIds) {
  return axios.post(`/admin/api/v1/org/${extId}/leave`, { companyExtIds });
}

export function deleteOrganization(extId) {
  return axios.delete(`/admin/api/v1/org/${extId}`);
}
