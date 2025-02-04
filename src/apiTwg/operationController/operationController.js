import axios from "../axiosConfig/axiosConfig";

export function getOperationStats() {
  return axios.get(`/admin/api/v1/stats`);
}
