import axios from "../axiosConfig/axiosConfig";

export function createCompany(payload) {
  return axios.post("/admin/api/v1/company", payload);
}

export function addOrganization(extId, organizationExtIds) {
  return axios.post(`/admin/api/v1/company/${extId}/join`, {
    organizationExtIds,
  });
}

export function leaveOrganization(extId, organizationExtIds) {
  return axios.post(`/admin/api/v1/company/${extId}/leave`, {
    organizationExtIds,
  });
}

export function getCompanies() {
  return axios.get("/admin/api/v1/company");
}

export function updateCompany(extId, payload) {
  return axios.put(`/admin/api/v1/company/${extId}`, payload);
}

export function deleteCompany(extId) {
  return axios.delete(`/admin/api/v1/company/${extId}`);
}
